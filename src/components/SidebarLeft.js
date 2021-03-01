import React from 'react'
import styled from 'styled-components'
import Logo from "../images/twitter-icon-download-18.png";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const SidebarLeft = () => {
    return (
        <StyledLeftSidebar>
            <StyledLeftSidebarHeader>
                <img src={Logo} alt="logo"/>
            </StyledLeftSidebarHeader>
            <StyledLeftSidebarLinks>
                <StyledLeftSidebarLink>

                </StyledLeftSidebarLink>
            </StyledLeftSidebarLinks>
            <StyledLeftSidebarProfile>

            </StyledLeftSidebarProfile>
        </StyledLeftSidebar>
    )
}
const StyledLeftSidebar = styled.div`

`;
const StyledLeftSidebarHeader = styled.div`

`;
const StyledLeftSidebarLinks = styled.div`
    
`;
const StyledLeftSidebarLink = styled.div`
    
`;
const StyledLeftSidebarProfile = styled.div`
    
`;

export default SidebarLeft
