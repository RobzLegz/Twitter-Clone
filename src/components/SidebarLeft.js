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
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const SidebarLeft = () => {

    const user = useSelector(selectUser);

    return (
        <StyledLeftSidebar>
            <StyledLeftSidebarHeader>
                <img src={Logo} alt="logo"/>
            </StyledLeftSidebarHeader>
            <StyledLeftSidebarLinks>
                <StyledLeftSidebarLink style={{color: "#1DA1F2"}}>
                    <HomeOutlinedIcon />
                    <h4>Home</h4>
                </StyledLeftSidebarLink>
                <StyledLeftSidebarLink>
                    <AlternateEmailIcon />
                    <h4>Explore</h4>
                </StyledLeftSidebarLink>
                <StyledLeftSidebarLink>
                    <NotificationsNoneOutlinedIcon />
                    <h4>Notifications</h4>
                </StyledLeftSidebarLink>
                <StyledLeftSidebarLink>
                    <EmailOutlinedIcon />
                    <h4>Messages</h4>
                </StyledLeftSidebarLink>                
                <StyledLeftSidebarLink>
                    <BookmarkBorderOutlinedIcon />
                    <h4>Bookmarks</h4>
                </StyledLeftSidebarLink>
                <StyledLeftSidebarLink>
                    <ListAltOutlinedIcon />
                    <h4>Lists</h4>
                </StyledLeftSidebarLink>
                <StyledLeftSidebarLink>
                    <PersonOutlineOutlinedIcon />
                    <h4>Profile</h4>
                </StyledLeftSidebarLink>
                <StyledLeftSidebarLink>
                    <MoreHorizIcon />
                    <h4>More</h4>
                </StyledLeftSidebarLink>
                <Button>Tweet</Button>
            </StyledLeftSidebarLinks>
            <StyledLeftSidebarProfile>
                <div className="profile__left">
                    <Avatar src={user.photo} />
                    <div className="profile__middle">
                        <strong><p>{user.displayName}</p></strong>
                        <small><p>@{user.email.slice(0,-10)}</p></small>
                    </div>
                </div>
                <div className="profile__right">
                    <MoreHorizIcon />
                </div>
            </StyledLeftSidebarProfile>
        </StyledLeftSidebar>
    )
}
const StyledLeftSidebar = styled.div`
    flex: 0.35;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-end;
    border-right: 1px solid lightgrey;
`;
const StyledLeftSidebarHeader = styled.div`
    width: 300px;
    height: 40px;
    >img{
        height: 40px;
    }
`;
const StyledLeftSidebarLinks = styled.div`
    width: 300px;
    color:#000;
    height: calc(100% - 140px);
    padding: 20px 0;
    >button{
        margin: 0 auto;
        width: 200px;
        background: #1DA1F2;
        color:#fff;
        font-size: 1rem;
        font-weight: 550;
        letter-spacing: 1px;
        border-radius: 30px;
        :hover{
            background: #1A91DA;
        }
    }
`;
const StyledLeftSidebarLink = styled.div`
    display: flex;
    font-size: 20px !important;
    margin: 20px 0;
    align-items:center;
    >h4{
        padding: 10px;
        margin-left: 10px;
        border-radius: 30px;
        transition: all 0.2s ease;
    }
    .MuiSvgIcon-root{
        font-size: 30px !important;
    }
    :hover{
        >h4{
            cursor: pointer;
            background-color:#B3DFFB;
            color: #1DA1F2;
        }
    }
`;
const StyledLeftSidebarProfile = styled.div`
    width: 300px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    height: 100px;
    >.profile__left{
        display:flex;
        >.profile__middle{
            margin-left:10px;
        }
    }
    >.profile__right{
        >.MuiSvgIcon-root{
            cursor: pointer;
        }
    }
`;

export default SidebarLeft
