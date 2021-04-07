import PropTypes from 'prop-types';
import { ReactComponent as CIcon } from '@A/img/c.svg';
import { ReactComponent as LCIcon } from '@A/img/lc.svg';
import { ReactComponent as HCIcon } from '@A/img/hc.svg';
import { ReactComponent as SIcon } from '@A/img/s.svg';
import { ReactComponent as LRIcon } from '@A/img/lr.svg';
import { ReactComponent as HRIcon } from '@A/img/hr.svg';
import { ReactComponent as TIcon } from '@A/img/t.svg';
import { ReactComponent as HIcon } from '@A/img/h.svg';
import { ReactComponent as SLIcon } from '@A/img/sl.svg';
import { ReactComponent as SNIcon } from '@A/img/sn.svg';
import { StyledWeatherIcon } from './style';

const weatherIcons: any = {
  c: <CIcon />,
  lc: <LCIcon />,
  hc: <HCIcon />,
  s: <SIcon />,
  lr: <LRIcon />,
  hr: <HRIcon />,
  t: <TIcon />,
  h: <HIcon />,
  sl: <SLIcon />,
  sn: <SNIcon />
}

export function CusWeatherIcon({ weatherType }: any) {
  const weatherIcon = weatherIcons[weatherType];
  return (
    <StyledWeatherIcon>
      { weatherIcon }
    </StyledWeatherIcon>
  );
};

CusWeatherIcon.prototype = {
  weatherType: PropTypes.string
};
