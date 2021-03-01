import React from 'react'
import Chat from '../components/Chat'
import SidebarLeft from '../components/SidebarLeft'
import SidebarRight from '../components/SidebarRight'

const HomePage = () => {
    return (
        <div>
            <SidebarLeft />
            <Chat />
            <SidebarRight />
        </div>
    )
}

export default HomePage
