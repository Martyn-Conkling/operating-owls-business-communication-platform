import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import ListSubheader from '@mui/material/ListSubheader';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

import { Outlet, Link } from 'react-router-dom';


export default function ServerList(){
    const [serverList, setServerList] = React.useState(itemData)
    const setFavorites = (id) => {
        setServerList( (oldServers) => {
            const newServers = [...oldServers]
            newServers[id].favorite = !newServers[id].favorite
            return newServers
        })
        
    }


    return(
        <>
            <h1>Server List</h1>
            <ImageList variant="masonry" cols={7} gap={10} sx={{  width: '100%', maxWidth: 1200, height: 1200 }}>
                {serverList.map((server) => (
                <ImageListItem key={server.img} sx={{width:150, height: 150}} component={Link} to={`/ServerComponent`}>
                    <img src={`${server.img}?w=150&h=150&fit=crop&auto=format`}
                    loading="lazy"/>
                    <ImageListItemBar
                    title={server.title}
                    actionIcon={
                    <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${server.title}`}
                        onClick={(event) => {
                            event.preventDefault(); // Prevent the server page from opening
                            setFavorites(server.id)
                        }}

                    >{server.favorite ? <StarIcon/> : <StarBorderIcon/> }</IconButton>}/>
                </ImageListItem>
                ))}
            </ImageList>
        </>
    )
    
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      id: 0,
      title: 'Breakfast',
      rows: 2,
      cols: 2,
      featured: true,
      favorite: false,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      id: 1,
      title: 'Burger',
      favorite: false,
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      id: 2,
      title: 'Camera',
      favorite: false,
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      id: 3,
      title: 'Coffee',
      cols: 2,
      favorite: false,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      id: 4,
      title: 'Hats',
      cols: 2,
      favorite: false,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      id: 5,
      title: 'Honey',
      rows: 2,
      cols: 2,
      featured: true,
      favorite: false,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      id: 6,
      title: 'Basketball',
      favorite: false,
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      id: 7,
      favorite: false,
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      id: 8,
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
      favorite: false,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      id: 9,
      title: 'Tomato basil',
      favorite: false,
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      id: 10,
      title: 'Sea star',
      favorite: false,
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      id: 11,
      title: 'Bike',
      cols: 2,
      favorite: false,
    },
    
  ];