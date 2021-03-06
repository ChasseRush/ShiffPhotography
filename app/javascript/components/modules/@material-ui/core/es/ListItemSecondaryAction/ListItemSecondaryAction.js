import _extends from "@babel/runtime/helpers/builtin/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
export const styles = {
  /* Styles applied to the root element. */
  root: {
    position: 'absolute',
    right: 4,
    top: '50%',
    transform: 'translateY(-50%)'
  }
};

function ListItemSecondaryAction(props) {
  const {
    children,
    classes,
    className
  } = props,
        other = _objectWithoutProperties(props, ["children", "classes", "className"]);

  return React.createElement("div", _extends({
    className: classNames(classes.root, className)
  }, other), children);
}

ListItemSecondaryAction.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the component, normally an `IconButton` or selection control.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string
} : {};
ListItemSecondaryAction.muiName = 'ListItemSecondaryAction';
export default withStyles(styles, {
  name: 'MuiListItemSecondaryAction'
})(ListItemSecondaryAction);