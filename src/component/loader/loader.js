import React from 'react';
import './loader.scss';

export const Loader = (props) => {
    return <>
        <div className="wrap">
        <div className="loading">
            <div className="bounceball"></div>
            <div className="text">{props.msg}</div>
        </div>
    </div>
    </>
}