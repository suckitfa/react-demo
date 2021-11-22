import "./contacts.css"
function Contacts() {
    return(
        <div className="Contacts">Contacts</div>
    );
}


function Chat() {
    return (
        <div className="Chat">Chat</div>
    )
}

function SplitPane(props) {
    return(
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function App() {
    return(
        <SplitPane
            left={<Contacts />}
            right={<Chat />}
        >
        </SplitPane>
    )
}

export default App;