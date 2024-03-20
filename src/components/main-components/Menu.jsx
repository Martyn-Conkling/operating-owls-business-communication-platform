/*
    The goal of this is to create some cards that can be clicked on to go to a specific channel quicker.

    need implement:
    - space out the icon from the titles.
    - a way delete channels from the groups.
        - it should also have a way to confirm the deletion.

    upgrades:
    - implement popover when a channel name is too long.
    - if the first word of the channel is long, it should also have a "...".

    - stack: https://mui.com/material-ui/react-stack/
    - card: https://mui.com/material-ui/react-card/
    - popover: https://mui.com/material-ui/react-popover/
    - *****: https://mui.com/material-ui/react-tooltip/
*/

import React, { useState, useEffect } from 'react';

import '../../css/Menu.css'
import menuData from "../../data/menuData"

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover'; //a popover could be used to show the channel full name when hovering over the channel name.

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';

import PushPinIcon from '@mui/icons-material/PushPin';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

import Tooltip from '@mui/material/Tooltip';

export default function Menu() {
    const [channels, setChannels] = useState(menuData);

    return (
        <div>
            {/* page title */}
            <Typography className="menu--title" variant="h4">
                Welcome to Our Community!
            </Typography>

            {/* sets up channel groups */}
            {channels.map((group) => (
                <div key={group.id}>
                    <Typography className="channel--group--title" variant="h6">
                        {/* the line below sets an icon based off of the data */}
                        {group.icon === 'Pinned' ? <PushPinIcon /> : <ConnectWithoutContactIcon />}
                        {group.name}
                    </Typography>
                    {/* sets up channel cards */}
                    <Stack direction="row" spacing={1.75} sx={{ minWidth: 0 }}>
                        {group.channels.map((channel) => (
                            <Tooltip title={channel.name}>
                                <Card key={channel.id} className="channel--card">
                                    <CardActionArea /*need to set the logic here to take the user to the right page when a card is clicked*/>
                                        <CardContent className="card--content">
                                            {/* card channel picture */}
                                            <Avatar alt={channel.name} src={channel.picture} className="card--avatar" />
                                            {/* card channel name */}
                                            <Typography variant="body3" sx={{ fontSize: 12 }} color="text.primary" className="card--name">
                                                {channel.name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Tooltip>
                        ))}
                    </Stack>
                </div>
            ))}
        </div>
    )
}
