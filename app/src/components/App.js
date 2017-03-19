import React, { Component } from 'react';

import ChatBox from './ChatBox';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="left">
                    <ChatBox name="Chat A" />
                </div>
                <div className="right">
                    <ChatBox name="Chat B" />
                </div>
            </div>
        );
    }
}

export default App
