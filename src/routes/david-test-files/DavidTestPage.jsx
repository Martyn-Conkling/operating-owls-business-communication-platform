import ChatPage from './ChatPage.jsx';
import './SideBar.css';
import './ChatPage.css';

export default function ChannelMain() {
    const channelMain = {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#1e2931"
    }

    return (
        <div style={channelMain} >
            <ChatPage />
        </div>
    )
}