import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import PublishIcon from '@material-ui/icons/Publish';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const Tweet = ({tweet,userPhoto,username, id}) => {
    return (
        <StyledTweet>
            <Avatar src={userPhoto} />
            <StyledTweetRight>
                <div className="tweet__header">
                    <div className="tweet__header--left">
                        <h5>{username}</h5>
                        <p>15h</p>
                    </div>
                    <Button variant="circled"><MoreHorizIcon /></Button>
                </div>
                <div className="tweet__message">
                    <p>{tweet}</p>
                </div>
                <div className="tweet__icons">
                    <ChatBubbleOutlineIcon />
                    <RepeatIcon />
                    <FavoriteBorderIcon />
                    <PublishIcon />
                </div>
            </StyledTweetRight>
        </StyledTweet>
    )
}
const StyledTweet = styled.div`
    width: 100%;
    height: fit-content;
    min-height: 100px;
    display: flex;
    align-items: center;
    padding: 20px 20px;
    cursor: pointer;
    border-bottom: 1px solid lightgrey;
    :hover{
        background-color: #f9f9f9;
    }
`;
const StyledTweetRight = styled.div`
    margin-left: 20px;
    width:100%;
    >.tweet__header{
        display:flex;
        justify-content: space-between;
        width:100%;
        align-items:center;
        padding: 0 20px 0 0;
        >.tweet__header--left{
            display: flex;
            align-items: center;
            >p{
                margin-left: 5px;
            }
        }
    }
    >.tweet__message{
        >p{
            margin-left: 10px;
            padding: 10px;
        }
    }
    >.tweet__icons{
        color:grey;
        width: 80%;
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
    }
`;

export default Tweet
