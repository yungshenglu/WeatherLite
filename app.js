const express = require('express');
const axios = require('axios');
const cors = require('cors');


const app = express();

app.use(cors({
  origin: ['http://localhost:9528'],
}));

// GET: 取得該地點的 WOEID
app.get('/api/woeid=:query', (req, res) => {
  const query = req.params.query;
  const apiUrl = `https://www.metaweather.com/api/location/search/?query=${query}`

  return axios.get(apiUrl)
    .then(({ status, statusText, headers, data }) => {
      if (status === 200) {
        return res.json(data);;
      } else {
        return '';
      }
    }).catch((err) => {
      res.send(err);
    });
});

// GET: 取得該地天氣資訊
app.get('/api/location=:woeid', (req, res) => {
  const woeid = req.params.woeid;
  const apiUrl = `https://www.metaweather.com/api/location/${woeid}`
  console.log('apiUrl: ', apiUrl);
  return axios.get(apiUrl)
    .then(({ status, statusText, headers, data }) => {
      if (status === 200) {
        return res.json(data);
      } else {
        return '';
      }
    }).catch((err) => {
      res.send(err);
    });
});

app.listen(9527, () => {
    console.log('CORS-enabled web server listening on port 9527');
});