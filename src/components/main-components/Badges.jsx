import React from "react";
import '../../css/Badges.css'
import { Avatar, Badge, styled } from "@mui/material";
import PushPinIcon from '@mui/icons-material/PushPin';



const StyledBadge = styled(Badge)(({ theme }) => ({
  '.MuiBadge-dot': {
    backgroundColor: '#4CAF50', 
    width: '12px',
    height: '12px',
  },
}));


const Badges = () => {
return (
<div className="BadgesCont">
<div>
<h1 className="WelCont"> Welcome to Our Community</h1>
<div>
<h2 className="pinnedChanComp">Pinned Channels <PushPinIcon fontSize="medium" /></h2>
<div className="channelBox">
    <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        >
        <Avatar src="https://th.bing.com/th/id/OIP.Vzu9LsVapjfVOcPQ0YolxgHaHa?rs=1&pid=ImgDetMain" alt="Channel 1" />
        </StyledBadge>
        <span>Channel 1</span>
        </div>
    <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        >
        <Avatar src="https://i.pinimg.com/474x/05/c3/59/05c359cd010df3e7f1ea3cb6f6f54fad.jpg" alt="Channel 2" />
    </StyledBadge>
    <span>Channel 2</span>
    </div>
    </div>
    <div>
      <h2 className="activeChanComp">Active Channels</h2>
        <div className="channelBox">
        <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
            >
         <Avatar src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg" alt="Channel 1" />
        </StyledBadge>
        <span>Channel 1</span>
        </div>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
           >
        <Avatar src="https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile-03-768x768.png" alt="Channel 2" />
        </StyledBadge>
          <span>Channel 2</span>
          </div>
          </div>
     
   
  );
};

export default Badges;

//What Needs To Be Done? - *Add Functionality, ability to click and hover around comps. Set path for smoother backend transition. 
//*Very basic css added, needs more, add some sass css
