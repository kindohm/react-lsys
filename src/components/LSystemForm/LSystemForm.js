import React, { Component } from 'react';
import './LSystemForm.css';
import { connect } from "react-redux";
import { updateLSystem } from "./../../actions/index";

const mapDispatchToProps = dispatch => {
    return {
        updateLSystem: lsystem => dispatch(updateLSystem(lsystem))
    };
};

class ConnectedLSystemForm extends Component {

    constructor() {
        super();

        this.state = {
            angle: 15,
            iterations: 3,
            axiom: "M-N-",
            rules: [
                { id: "rule1", value: "M=M++NM", label: "Rule 1" },
                { id: "rule2", value: "N=---M", label: "Rule 2" }]
        };

        this.drawClick = this.drawClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    drawClick() {
        this.props.updateLSystem(this.state);
    }

    handleChange(event) {
        if (event.target.id.indexOf('rule') === 0) {
            let clonedRules = this.state.rules.slice();

            const index = clonedRules.findIndex(rule => {
                return rule.id === event.target.id;
            });

            clonedRules[index].value = event.target.value;

            this.setState({rules: clonedRules});
            return;
        }

        this.setState({ [event.target.id]: event.target.value });
    }

    render() {

        const ruleParts = this.state.rules.map(rule => {
            return <p key={rule.id}><label>{rule.label}</label><br />
                <input id={rule.id} type="text" onChange={this.handleChange} value={rule.value} />
            </p>;
        });

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
                {ruleParts}
                <p><button onClick={this.drawClick}>Draw</button></p>
            </div>
        );
    }
}

const LSystemForm = connect(null, mapDispatchToProps)(ConnectedLSystemForm);

export default LSystemForm;
