import React from "react"
import Filter1Icon from '@material-ui/icons/Filter1'
import Filter7Icon from '@material-ui/icons/Filter7'
import HelpIcon from '@material-ui/icons/Help'

export const menuLinks = {
    "Objectives": [
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