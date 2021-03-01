import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { Avatar, Button } from '@material-ui/core';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import GifIcon from '@material-ui/icons/Gif';
import TodayIcon from '@material-ui/icons/Today';
import db from '../firebase';
import firebase from "firebase";
import Tweet from './Tweet';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

const Chat = () => {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweets, setTweets] = useState([]);
    const user = useSelector(selectUser);

    const submitTweet = (e) => {
        e.preventDefault();
        if(tweetMessage !== ""){
            db.collection("tweets").add({
                tweetMessage: tweetMessage,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                username: user.displayName,
                userPhoto: user.photo,
            })
        }else{
            return;
        }        
        setTweetMessage("");
    }

    useEffect(() => {
        db.collection("tweets").orderBy("timestamp", "desc").onSnapshot((snapshot) => (
            setTweets(snapshot.docs.map((doc) => doc.data()))
        ))
    }, [])

    return (
        <StyledChat>
            <StyledChatHeader>
                <h2>Home</h2>
                <StarOutlineIcon />
            </StyledChatHeader>
            <StyledChatBody>
                <StyledChatTwitter>
                    <Avatar src={user.photo} />
                    <form>
                        <input type="text" value={tweetMessage} onChange={(e) => setTweetMessage(e.target.value)} placeholder="What's happening?" required />
                        <div className="tweeting__bottom">
                            <div className="tweeting__bottom--icons">
                                <ImageOutlinedIcon />
                                <GifIcon />
                                <ListAltOutlinedIcon />
                                <EmojiEmotionsOutlinedIcon />
                                <TodayIcon />
                            </div>
                            <Button type="submit" onClick={submitTweet}>Tweet</Button>
                        </div>
                    </form>
                </StyledChatTwitter>
                <StyledChatMessages>
                    {tweets?.map((tweet) => (
                        <Tweet key={tweet.id} id={tweet.id} userPhoto={tweet.userPhoto} username={tweet.username} tweet={tweet.tweetMessage} />
                    ))}
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
