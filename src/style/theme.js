import { createMuiTheme } from '@material-ui/core/styles';

import amber from '@material-ui/core/colors/amber';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: blue
  }
});

export default theme;