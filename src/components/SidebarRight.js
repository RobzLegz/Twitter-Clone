import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar } from '@material-ui/core';

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
                        <small><p>5,082 Tweets</p></small>
                    </StyledInfo>
                    <StyledInfo>
                        <small>Space</small>
                        <strong><p>Space X</p></strong>
                        <small><p>3,121 Tweets</p></small>
                    </StyledInfo>
                    <StyledInfo>
                        <small>Energy</small>
                        <strong><p>Solar City</p></strong>
                        <small><p>3,375 Tweets</p></small>
                    </StyledInfo>
                    <StyledInfo>
                        <small>Cars & vehicles</small>
                        <strong><p>Cybertruck</p></strong>
                        <small><p>8,363 Tweets</p></small>
                    </StyledInfo>
                    <StyledInfo>
                        <p>Show more</p>
                    </StyledInfo>
                </div>
            </StyledRightInfoBox>
            <StyledRightInfoBox>
                <div className="info__box--header">
                    <h3>Who to follow</h3>
                </div>
                <div className="info__box--container">
                    <StyledFollowProfiles>
                        <Avatar />
                        <div className="follow__profiles--right">
                            <h5>Elon Musk</h5>
                            <small><p>@elonmusk</p></small>
                        </div>
                        <div className="follow__profiles--right">
                            <h5>Tesla</h5>
                            <small><p>@tesla</p></small>
                        </div>
                        <div className="follow__profiles--right">
                            <h5>Space X</h5>
                            <small><p>@spacex</p></small>
                        </div>
                        <StyledInfo>
                            <p>Show more</p>
                        </StyledInfo>
                    </StyledFollowProfiles>
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

`;
const StyledInfo = styled.div`
    
`;
const StyledFollowProfiles = styled.div`
    
`;

export default SidebarRight
