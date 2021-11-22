import React from "react";
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature: "" }
    }
    handleChange(e) {
        this.setState({ temperature: e.target.value });
    }
    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>
                    Enter temperature in Celsius:
                </legend>
                <input type="text"
                    value={temperature}
                    onChange={this.handleChange}
                />
                <BoilingVerdict
                    celsius={parseFloat(temperature)}
                />
            </fieldset>
        );
    }
}

export default Calculator;