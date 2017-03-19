import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postMessage } from '../actions';

class ChatBox extends Component {
    constructor(props) {
        super(props);

        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Scroll to the bottom of the conversation after each post
     */
    componentDidUpdate() {
        var convs = document.querySelectorAll('.conversation');
        convs.forEach((conv) => {
            conv.scrollTop = conv.scrollHeight;
        })
    }

    /**
     * Update state with input text
     */
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    /**
     * Send the form
     *
     * @param {Object} - Form event
     */
    handleSubmit(event) {
        if (this.state.value != '') {
            this.props.dispatch(postMessage(this.props.name, this.state.value));
            this.setState({value: ''});
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className="chat-box">
                <h3>{this.props.name}</h3>
                <div className="conversation">
                    {
                        this.props.messages.length > 0 ?
                            this.props.messages.map((message, index) =>
                                <div key={index} className={message.author == this.props.name ? "message sent" : "message"}>
                                    <p>{message.text}</p>
                                    <span className="date">{message.date}</span>
                                </div>
                            )
                        : <p className="no-message">Pas de messages</p>
                    }
                    <div className="clear"></div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">Envoyer</button>
                    <div>
                        <input type="text" placeholder="Votre message..." value={this.state.value} onChange={this.handleChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { messages } = state;
    return { messages }
}

export default connect(mapStateToProps)(ChatBox)
