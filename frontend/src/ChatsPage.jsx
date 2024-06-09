import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'ea493d78-48f7-4ed6-872e-da3956d8459d', 
        props.user.username, 
        props.user.secret
    );
    
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
        </div>
    );
}

export default ChatsPage;
