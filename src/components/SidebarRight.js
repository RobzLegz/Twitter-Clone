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
                    <h2>Trends for you</h2>
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
                    <h2>Who to follow</h2>
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
    justify-content: flex-start;
`;
const StyledRightInfoBox = styled.div`

`;
const StyledInfo = styled.div`
    
`;
const StyledFollowProfiles = styled.div`
    
`;

export default SidebarRight
