import React from 'react'
import styled from 'styled-components';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { Avatar, Button } from '@material-ui/core';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import GifIcon from '@material-ui/icons/Gif';
import TodayIcon from '@material-ui/icons/Today';

const Chat = () => {
    return (
        <StyledChat>
            <StyledChatHeader>
                <h2>Home</h2>
                <StarOutlineIcon />
            </StyledChatHeader>
            <StyledChatBody>
                <StyledChatTwitter>
                    <Avatar />
                    <form>
                        <input type="text" placeholder="What's happening?" required />
                        <div className="tweeting__bottom">
                            <div className="tweeting__bottom--icons">
                                <ImageOutlinedIcon />
                                <GifIcon />
                                <ListAltOutlinedIcon />
                                <EmojiEmotionsOutlinedIcon />
                                <TodayIcon />
                            </div>
                            <Button type="submit">Tweet</Button>
                        </div>
                    </form>
                </StyledChatTwitter>
                <StyledChatMessages>

                </StyledChatMessages>
            </StyledChatBody>
        </StyledChat>
    )
}
const StyledChat = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-right: 1px solid lightgrey;
`;
const StyledChatBody = styled.div`
    width: 100%;
    height: calc(100% - 40px);
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;
const StyledChatHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgrey;
    align-items: center;
    padding: 0 20px;
    height: 40px;
`;
const StyledChatTwitter = styled.div`
    width: 100%;
    display: flex;
    padding: 10px 30px;
    height: 150px;
    border-bottom: 1px solid lightgrey;
    >form{
        width: 80%;
        margin-left: 20px;
        >input{
            width: 100%;
            outline: none;
            font-size: 1.2rem;
            border: none;
            height: 50px;
        }
        >.tweeting__bottom{
            border-top: 1px solid lightgrey;
            padding-top: 10px;
            margin-top: 30px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            >.tweeting__bottom--icons{
                color: #1DA1F2;
            }
            >button{
                width: 100px;
                background: #1DA1F2;
                color:#fff;
                font-size: 0.9rem;
                font-weight: 550;
                letter-spacing: 1px;
                border-radius: 30px;
                :hover{
                    background: #1A91DA;
                }
            }
        }
    }
`;
const StyledChatMessages = styled.div`

`;

export default Chat
