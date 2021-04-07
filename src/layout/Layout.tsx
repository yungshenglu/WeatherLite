import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from '@U/theme';
import { StyledLoayout } from './style';


export function Layout({ children }: any) {
  return (
    <ThemeProvider theme={theme.dark}>
      <StyledLoayout>
        { children }
      </StyledLoayout>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
