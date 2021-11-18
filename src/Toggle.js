import React from 'react';
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true }
        //回调中使用this，绑定必不可少
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        this.setState(prevState =>({
            isToggleOn:!prevState.isToggleOn
        }));
    }
    render() {
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn?'ON':'OFF'}
            </button>
        );
    }
}

export default Toggle;