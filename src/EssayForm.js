import React from 'react';
class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value:"Write an essay about React."}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            value:e.target.value
        })
    }
    handleSubmit(e) {
        alert("提交的文章: " + this.state.value);
        e.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label >
                    文章:
                    <textarea  
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                    </textarea>
                    <input type="submit"  value="提交"/>
                </label>
            </form>
        );
    }
}

export default EssayForm;