import React, { Component } from 'react';
import './Drawing.css';
import { connect } from "react-redux";
import { run } from './../../services/lsystem';

const mapStateToProps = state => {
    return { lsystem: state.lsystem };
};

class ConnectedDrawing extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        run(nextProps.lsystem);
        return false;
    }

    render() {
        return (<div className="drawing">
            <canvas id="canvas" width="800" height="400"></canvas>
        </div>)
    }
}

const Drawing = connect(mapStateToProps)(ConnectedDrawing);

export default Drawing;