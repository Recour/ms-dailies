import React from 'react'

// Material UI imports
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    MuiThemeProvider,
    Box,
    Divider,
    ListSubheader,
    Tooltip
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Filter1Icon from '@material-ui/icons/Filter1'
import Filter7Icon from '@material-ui/icons/Filter7'
import HelpIcon from '@material-ui/icons/Help'

// React Router imports
import {
    Link
} from "react-router-dom"

// Theme imports
import { withTheme } from '@material-ui/core/styles'
import theme from '../style/theme'

const menuLinks = {
    "Quests": [
        {
            text: "Dailies",
            to: "/dailies",
            icon: <Filter1Icon/>
        },
        {
            text: "Weeklies",
            to: "/weeklies",
            icon: <Filter7Icon/>
        }
    ],
    "Info": [
        {
            text: "Instructions",
            to: "/instructions",
            icon: <HelpIcon/>
        },
    ]
}

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            drawerOpen: false
        }

        this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
        this.handleDrawerClose = this.handleDrawerClose.bind(this)
        this.renderMenu = this.renderMenu.bind(this)
    }

    render() {
        return(
            <MuiThemeProvider theme={theme}>
                <AppBar 
                    position="sticky" 
                    color="primary"
                    style={{ background: 'rgba(255,255,255,0.1)'}}>
                    <Toolbar
                        edge="start">
                        <Tooltip title="Menu">
                            <IconButton
                                onClick={this.handleDrawerOpen}
                                edge="start"
                                style={{marginRight: theme.spacing(2)}}>
                                <MenuIcon/>
                            </IconButton>
                        </Tooltip>
                        <img 
                        src={require('../static/images/logo_transparent.png')}
                        height={50}/>
                    </Toolbar>
                </AppBar>

                <Drawer 
                    open={ this.state.drawerOpen }
                    onClose={ this.handleDrawerClose }
                    width="50%">
                    <List>
                        <Box width={200}> 
                            { this.renderMenu(menuLinks) }
                        </Box>
                    </List>
                </Drawer>
            </MuiThemeProvider>
        )
    }

    handleDrawerOpen() {
        this.setState({ drawerOpen: true })
    }

    handleDrawerClose() {
        this.setState({ drawerOpen: false })
    }

    renderMenu(menuLinks) {
        var menu = []

        // ListSubHeader for each subheader
        Object.keys(menuLinks).forEach((subheader, index) => {
            menu.push(
                <ListSubheader key={index}>
                    {subheader}
                </ListSubheader>
            )
            
            // ListItem for each link under subheader
            menuLinks[subheader].forEach((link, index) => (
                menu.push(
                    <ListItem
                        onClick={ this.handleDrawerClose } 
                        component={Link} 
                        to={ link.to }
                        key={ index }
                        button>
                        <ListItemIcon>
                            { link.icon }
                        </ListItemIcon>
                        <ListItemText primary={ link.text }/>
                    </ListItem>
                )
            ))

            menu.push(
                <Divider key={menu.length}/>
            )
        })

        return menu
    }
}

export default withTheme(Header);