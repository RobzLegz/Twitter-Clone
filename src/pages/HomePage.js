import React from 'react'
import styled from 'styled-components'
import Chat from '../components/Chat'
import SidebarLeft from '../components/SidebarLeft'
import SidebarRight from '../components/SidebarRight'

const HomePage = () => {
    return (
        <StyledHome>
            <SidebarLeft />
            <Chat />
            <SidebarRight />
        </StyledHome>
    )
}
const StyledHome = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`;

export default HomePage
