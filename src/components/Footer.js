import React from 'react'
import { Link, Typography } from '@material-ui/core'

export default class Footer extends React.Component {
    render() {
        return(
            <Typography color="inherit" variant="caption">
                { "Created by " }

                <Link href="https://github.com/Recour" color="inherit">
                    Recour
                </Link>
            </Typography>
        )
    }
}