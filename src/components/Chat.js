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
                        <Button>Tweet</Button>
                    </div>
                </form>
            </StyledChatTwitter>
            <StyledChatMessages>

            </StyledChatMessages>
        </StyledChat>
    )
}
const StyledChat = styled.div`
    flex: 0.3;
    display: flex;
    justify-content: center;
`;
const StyledChatHeader = styled.div`

`;
const StyledChatTwitter = styled.div`

`;
const StyledChatMessages = styled.div`

`;

export default Chat
