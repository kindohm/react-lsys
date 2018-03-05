import React, { Component } from 'react';
import './Rules.css';
import { connect } from "react-redux";
import { updateRules } from "./../../actions/index";

const mapDispatchToProps = dispatch => {
    return {
        updateRules: rules => dispatch(updateRules(rules))
    };
};

class ConnectedRules extends Component {

    constructor() {
        super();

        this.state = {
            angle: 15,
            iterations: 3,
            axiom: "M-N-",
            rule1: "M=M++NM",
            rule2: "N=---M"
        };

        this.drawClick = this.drawClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    drawClick() {
        this.props.updateRules(this.state);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        return (
            <div className="rules">
                <p><label>Angle:</label><br />
                    <input onChange={this.handleChange} id="angle" type="number" value={this.state.angle} />
                </p>
                <p><label>Iterations:</label><br />
                    <input onChange={this.handleChange} id="iterations" type="number" value={this.state.iterations} />
                </p>
                <p><label>Axiom:</label><br />
                    <input onChange={this.handleChange} id="axiom" type="text" value={this.state.axiom} />
                </p>
                <p><label>Rule 1:</label><br />
                    <input onChange={this.handleChange} id="rule1" type="text" value={this.state.rule1} />
                </p>
                <p><label>Rule 2:</label><br />
                    <input onChange={this.handleChange} id="rule2" type="text" value={this.state.rule2} />
                </p>
                <p><button onClick={this.drawClick}>Draw</button></p>
            </div>
        );
    }
}

const Rules = connect(null, mapDispatchToProps)(ConnectedRules);

export default Rules;
