import React, { Component } from "react";
import PropTypes from "prop-types";

import Icon from "metabase/components/Icon.jsx";

import cx from "classnames";
import zh from "metabase/locale/zh.js"
export default class RunButton extends Component {
    static propTypes = {
        isRunnable: PropTypes.bool.isRequired,
        isRunning: PropTypes.bool.isRequired,
        isDirty: PropTypes.bool.isRequired,
        onRun: PropTypes.func.isRequired,
        onCancel: PropTypes.func
    };

    render() {
        let { isRunnable, isRunning, isDirty, onRun, onCancel } = this.props;
        let buttonText = null;
        if (isRunning) {
            buttonText = <div className="flex align-center"><Icon className="mr1" name="close" />{zh["Cancel"]}</div>;
        } else if (isRunnable && isDirty) {
            buttonText = zh["Get Answer"];
        } else if (isRunnable && !isDirty) {
            buttonText = <div className="flex align-center"><Icon className="mr1" name="refresh" />{zh["Refresh"]}</div>;
        }
        let actionFn = isRunning ? onCancel : onRun;
        let classes = cx("Button Button--medium circular RunButton ml-auto mr-auto block", {
            "RunButton--hidden": !buttonText,
            "Button--primary": isDirty,
            "text-grey-2": !isDirty,
            "text-grey-4-hover": !isDirty,
        });
        return (
            <button className={classes} onClick={() => actionFn()}>
            {buttonText}
            </button>
        );
    }
}
