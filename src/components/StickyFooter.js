import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { 
  Link,
  Typography,
  Paper,
  Grid,
  Box
} from '@material-ui/core/'

const styles = {
  footer: {
    marginTop: 'auto',
    backgroundColor: 'transparent'
  },
  background: {
    // width: '110px'
  }
}

class StickyFooter extends React.Component {
    render() {
      const { classes } = this.props
      return (
        <footer className={classes.footer}>
          <Grid 
          container
          justify="center">
            <Grid 
            item>
              <Paper
              className={classes.background}>
                
                  <Typography 
                  variant="caption" 
                  align="center">
                    <Box m={1}>
                    {'Made by '}
                    <Link 
                    color="inherit" 
                    href="https://github.com/Recour/">
                      Recour
                    </Link>
                    </Box>
                  </Typography>
                
              </Paper>
            </Grid>
          </Grid>
        </footer>
      )
    }
}

export default withStyles(styles)(StickyFooter)