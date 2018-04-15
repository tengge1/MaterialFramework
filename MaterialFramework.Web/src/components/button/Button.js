import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {Button as MaterialButton, withStyles} from 'material-ui';
import withRoot from '../../withRoot';

const styles = theme = ({});

function Button(...props) {
    return <MaterialButton props/>;
}

Button.PropTypes = {};

export default withRoot(withStyles(styles)(Button));