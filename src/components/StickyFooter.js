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
              <Box 
              m={1}>
                <Paper>
                  <Box
                  p={1}>
                    <Typography
                    variant="body2">
                      
                      {'Made by '}

                      <Link 
                      color="inherit" 
                      href="https://github.com/Recour/">
                        Recour
                      </Link>

                    </Typography>

                    <Typography
                    variant="body2">
                      
                      {'© NEXON Korea Corporation and NEXON America Inc.'}

                    </Typography>
                  </Box>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </footer>
      )
    }
}

export default withStyles(styles)(StickyFooter)