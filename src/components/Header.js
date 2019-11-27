import React from 'react'
import { withStyles } from '@material-ui/core/styles';

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
    Box,
    Divider,
    ListSubheader,
    Tooltip
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SettingsIcon from '@material-ui/icons/Settings'

// React Router imports
import {
    Link
} from "react-router-dom"

import SettingsDialog from './SettingsDialog'

import { menuLinks } from '../data/menu'

const styles = {
    appBar: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)'
    },
    settingsButton: {
        marginLeft: 'auto'
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            drawerOpen: false,
            settingsDialogOpen: false
        }

        this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
        this.handleDrawerClose = this.handleDrawerClose.bind(this)
        this.handleSettingsDialogOpen = this.handleSettingsDialogOpen.bind(this)
        this.handleSettingsDialogClose = this.handleSettingsDialogClose.bind(this)
        this.renderMenu = this.renderMenu.bind(this)
    }

    render() {
        const { classes } = this.props
        return(
            <div>               
                <AppBar 
                position="sticky" 
                color="primary"
                className={classes.appBar}>
                    <Toolbar
                    edge="start">
                        <Box
                        mr={2}
                        ml={1}>
                            <Tooltip 
                            title="Menu">
                                <IconButton
                                onClick={this.handleDrawerOpen}
                                edge="start">
                                    <MenuIcon/>
                                </IconButton>
                            </Tooltip>
                        </Box>

                        <img
                        src={require('../static/images/logo_transparent.png')}
                        height={50}
                        alt="MapleStory Dailies"/>

                        <Tooltip 
                        title="Settings">
                            <IconButton 
                            className={classes.settingsButton}
                            onClick={this.handleSettingsDialogOpen}>
                                <SettingsIcon/>
                            </IconButton>
                        </Tooltip>
                    </Toolbar>
                </AppBar>

                <Drawer 
                open={this.state.drawerOpen}
                onClose={this.handleDrawerClose}>
                    <Box width={200}> 
                        <List>
                            {this.renderMenu(menuLinks)}
                        </List>
                    </Box>
                </Drawer>

                <SettingsDialog 
                open={this.state.settingsDialogOpen}
                onClose={this.handleSettingsDialogClose}/>
            </div>
        )
    }

    handleDrawerOpen() {
        this.setState({ drawerOpen: true })
    }

    handleDrawerClose() {
        this.setState({ drawerOpen: false })
    }

    handleSettingsDialogOpen() {
        this.setState({ settingsDialogOpen: true })
    }

    handleSettingsDialogClose() {
        this.setState({ settingsDialogOpen: false })
    }

    renderMenu(menuLinks) {
        var menu = []

        // ListSubHeader for each subheader
        Object.keys(menuLinks).forEach((subheader) => {
            menu.push(
                <ListSubheader key={menu.length}>
                    {subheader}
                </ListSubheader>
            )
            
            // ListItem for each link under subheader
            menuLinks[subheader].forEach((link) => {
                menu.push(
                    <ListItem
                        onClick={ this.handleDrawerClose } 
                        component={Link} 
                        to={link.to}
                        key={menu.length}
                        button>
                        <ListItemIcon>
                            {link.icon}
                        </ListItemIcon>
                        <ListItemText primary={link.text}/>
                    </ListItem>
                )
            })
            
            menu.push(
                <Divider key={menu.length}/>
            )
        })
        
        return menu
    }
}

export default withStyles(styles)(Header);