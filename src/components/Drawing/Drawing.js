import React, { Component } from 'react';
import './Drawing.css';
import { connect } from "react-redux";
import { run } from './../../services/lsystem';

const mapStateToProps = state => {
    return { rules: state.rules };
};

class ConnectedDrawing extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        run(nextProps.rules);
        return false;
    }

    render() {
        return (<div className="drawing">
            <canvas id="canvas" height="200" width="400"></canvas>
        </div>)
    }
}

const Drawing = connect(mapStateToProps)(ConnectedDrawing);

export default Drawing;