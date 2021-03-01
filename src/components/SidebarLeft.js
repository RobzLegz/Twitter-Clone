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
import { Avatar, Button } from '@material-ui/core';

const SidebarLeft = () => {
    return (
        <StyledLeftSidebar>
            <StyledLeftSidebarHeader>
                <img src={Logo} alt="logo"/>
            </StyledLeftSidebarHeader>
            <StyledLeftSidebarLinks>
                <StyledLeftSidebarLink>
                    <HomeOutlinedIcon />
                    <h4>Home</h4>
                </StyledLeftSidebarLink>
                <StyledLeftSidebarLink>
                    <AlternateEmailIcon />
                    <h4>Home</h4>
                </StyledLeftSidebarLink>
                <StyledLeftSidebarLink>
                    <NotificationsNoneOutlinedIcon />
                    <h4>Home</h4>
                </StyledLeftSidebarLink>
                <StyledLeftSidebarLink>
                    <EmailOutlinedIcon />
                    <h4>Home</h4>
                </StyledLeftSidebarLink>                
                <StyledLeftSidebarLink>
                    <BookmarkBorderOutlinedIcon />
                    <h4>Home</h4>
                </StyledLeftSidebarLink>
                <StyledLeftSidebarLink>
                    <ListAltOutlinedIcon />
                    <h4>Home</h4>
                </StyledLeftSidebarLink>
                <StyledLeftSidebarLink>
                    <PersonOutlineOutlinedIcon />
                    <h4>Home</h4>
                </StyledLeftSidebarLink>
                <StyledLeftSidebarLink>
                    <MoreHorizIcon />
                    <h4>Home</h4>
                </StyledLeftSidebarLink>
                <Button>Tweet</Button>
            </StyledLeftSidebarLinks>
            <StyledLeftSidebarProfile>
                <Avatar />
                <div className="profile__middle">
                    <strong><p>Rob</p></strong>
                    <small><p>@Robzlegz</p></small>
                </div>
                <div className="profile__left">
                    <MoreHorizIcon />
                </div>
            </StyledLeftSidebarProfile>
        </StyledLeftSidebar>
    )
}
const StyledLeftSidebar = styled.div`

`;
const StyledLeftSidebarHeader = styled.div`

`;
const StyledLeftSidebarLinks = styled.div`
    color:#1DA1F2;
`;
const StyledLeftSidebarLink = styled.div`
    
`;
const StyledLeftSidebarProfile = styled.div`
    
`;

export default SidebarLeft
