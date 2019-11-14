import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="caption" align="center">
      {'Made by '}
      <Link color="inherit" href="https://github.com/Recour/">
        Recour
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: 'auto',
    backgroundColor: 'transparent'
  },
}));

export default function StickyFooter() {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Copyright />
        </footer>
    )
}