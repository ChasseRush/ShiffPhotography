import _extends from "@babel/runtime/helpers/builtin/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { cloneChildrenWithClassName } from '../utils/reactHelpers';
import '../Button'; // So we don't have any override priority issue.

export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: '8px 4px',
    [theme.breakpoints.up('sm')]: {
      padding: '8px 12px'
    }
  },

  /* Styles applied to the children. */
  action: {
    margin: '0 4px'
  }
});

function CardActions(props) {
  const {
    disableActionSpacing,
    children,
    classes,
    className
  } = props,
        other = _objectWithoutProperties(props, ["disableActionSpacing", "children", "classes", "className"]);

  return React.createElement("div", _extends({
    className: classNames(classes.root, className)
  }, other), disableActionSpacing ? children : cloneChildrenWithClassName(children, classes.action));
}

CardActions.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the component.
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
  className: PropTypes.string,

  /**
   * If `true`, the card actions do not have additional margin.
   */
  disableActionSpacing: PropTypes.bool
} : {};
CardActions.defaultProps = {
  disableActionSpacing: false
};
export default withStyles(styles, {
  name: 'MuiCardActions'
})(CardActions);