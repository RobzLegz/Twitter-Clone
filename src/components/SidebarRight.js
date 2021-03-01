import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar, Button } from '@material-ui/core';

const SidebarRight = () => {
    return (
        <StyledRightSidebar>
            <form>
                <SearchIcon />
                <input type="text" placeholder="Search Twitter" />
            </form>
            <StyledRightInfoBox>
                <div className="info__box--header">
                    <h3>Trends for you</h3>
                    <SettingsIcon />
                </div>
                <div className="info__box--container">
                    <StyledInfo>
                        <small>Cars & vehicles</small>
                        <strong><p>Tesla</p></strong>
                        <small><p>50,082 Tweets</p></small>
                    </StyledInfo>
                    <StyledInfo>
                        <small>Space</small>
                        <strong><p>Space X</p></strong>
                        <small><p>33,121 Tweets</p></small>
                    </StyledInfo>
                    <StyledInfo>
                        <small>Energy</small>
                        <strong><p>Solar City</p></strong>
                        <small><p>22,375 Tweets</p></small>
                    </StyledInfo>
                    <StyledInfo>
                        <small>Cars & vehicles</small>
                        <strong><p>Cybertruck</p></strong>
                        <small><p>80,363 Tweets</p></small>
                    </StyledInfo>
                    <StyledInfo>
                        <p style={{color: "#1DA1F2", fontSize: "18px", cursor: "pointer"}}>Show more</p>
                    </StyledInfo>
                </div>
            </StyledRightInfoBox>
            <StyledRightInfoBox>
                <div className="info__box--header">
                    <h3>Who to follow</h3>
                </div>
                <div className="info__box--container">
                    <StyledFollowProfiles>
                        <Avatar src="https://www.thespacereview.com/archive/4090a.jpg" />
                        <div className="follow__profiles--right">
                            <h5>Elon Musk</h5>
                            <small><p>@elonmusk</p></small>
                        </div>
                        <Button>Follow</Button>
                    </StyledFollowProfiles>
                    <StyledFollowProfiles>
                        <Avatar src="https://www.logocentral.info/wp-content/uploads/2020/04/Tesla-Logo-640X590.jpg" />
                        <div className="follow__profiles--right">
                            <h5>Tesla</h5>
                            <small><p>@tesla</p></small>
                        </div>
                        <Button>Follow</Button>
                    </StyledFollowProfiles>
                    <StyledFollowProfiles>
                        <Avatar src="data:image/jpeg;base64,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" />
                        <div className="follow__profiles--right">
                            <h5>Space X</h5>
                            <small><p>@spacex</p></small>
                        </div>
                        <Button>Follow</Button>
                    </StyledFollowProfiles>
                    <StyledInfo>
                        <p style={{color: "#1DA1F2", fontSize: "18px", cursor: "pointer"}}>Show more</p>
                    </StyledInfo>
                </div>
            </StyledRightInfoBox>
        </StyledRightSidebar>
    )
}
const StyledRightSidebar = styled.div`
    flex: 0.35;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 20px 0; 
    >form{
        width: fit-content;
        height: 40px;
        align-items: center;
        display: flex;
        margin-left: 10px;
        background-color:#EBEEF0;
        padding: 0 40px 0 20px;
        border-radius: 999px;
        >.MuiSvgIcon-root{
            color:grey;
        }
        >input{
            background:transparent;
            outline: none;
            border:none;
            font-size: 1rem;
            padding-left: 10px;
        }
    }
`;
const StyledRightInfoBox = styled.div`
    background-color:#EBEEF0;
    margin: 20px;
    width: 300px;
    padding: 10px;
    border-radius: 10px;
    >.info__box--header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid lightgrey;
        height: 40px;
        align-items:center;
    }
`;
const StyledInfo = styled.div`
    height: 70px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid lightgrey;
    padding-left: 10px;
`;
const StyledFollowProfiles = styled.div`
    display: flex;
    height: 60px;
    width: 100%;
    border-bottom: 1px solid lightgrey;
    align-items:center;
    >.follow__profiles--right{
        margin-left: 10px;
    }
    >button{
        margin-left: auto;
        border:1px solid #1DA1F2;
        color:#1DA1F2;
        height: 30px;
        border-radius: 20px;
        :hover{
            background:#c6e2f3;
        }
    }
`;

export default SidebarRight
