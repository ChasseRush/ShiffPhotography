import _extends from "@babel/runtime/helpers/builtin/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SwitchBase from '../internal/SwitchBase';
import CheckBoxOutlineBlankIcon from '../internal/svg-icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '../internal/svg-icons/CheckBox';
import IndeterminateCheckBoxIcon from '../internal/svg-icons/IndeterminateCheckBox';
import { capitalize } from '../utils/helpers';
import withStyles from '../styles/withStyles';
export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    color: theme.palette.text.secondary
  },

  /* Styles applied to the root element if `checked={true}`. */
  checked: {},

  /* Styles applied to the root element if `disabled={true}`. */
  disabled: {},

  /* Styles applied to the root element if `color="primary"`. */
  colorPrimary: {
    '&$checked': {
      color: theme.palette.primary.main
    },
    '&$disabled': {
      color: theme.palette.action.disabled
    }
  },

  /* Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {
    '&$checked': {
      color: theme.palette.secondary.main
    },
    '&$disabled': {
      color: theme.palette.action.disabled
    }
  }
});

function Checkbox(props) {
  const {
    checkedIcon,
    classes,
    color,
    icon,
    indeterminate,
    indeterminateIcon
  } = props,
        other = _objectWithoutProperties(props, ["checkedIcon", "classes", "color", "icon", "indeterminate", "indeterminateIcon"]);

  return React.createElement(SwitchBase, _extends({
    checkedIcon: indeterminate ? indeterminateIcon : checkedIcon,
    classes: {
      root: classNames(classes.root, classes[`color${capitalize(color)}`]),
      checked: classes.checked,
      disabled: classes.disabled
    },
    icon: indeterminate ? indeterminateIcon : icon
  }, other));
}

Checkbox.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, the component is checked.
   */
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),

  /**
   * If `true`, the switch will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,

  /**
   * The icon to display when the component is unchecked.
   */
  icon: PropTypes.node,

  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,

  /**
   * If `true`, the component appears indeterminate.
   */
  indeterminate: PropTypes.bool,

  /**
   * The icon to display when the component is indeterminate.
   */
  indeterminateIcon: PropTypes.node,

  /**
   * Properties applied to the `input` element.
   */
  inputProps: PropTypes.object,

  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.checked`.
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: PropTypes.func,

  /**
   * The input component property `type`.
   */
  type: PropTypes.string,

  /**
   * The value of the component.
   */
  value: PropTypes.string
} : {};
Checkbox.defaultProps = {
  checkedIcon: React.createElement(CheckBoxIcon, null),
  color: 'secondary',
  icon: React.createElement(CheckBoxOutlineBlankIcon, null),
  indeterminate: false,
  indeterminateIcon: React.createElement(IndeterminateCheckBoxIcon, null)
};
export default withStyles(styles, {
  name: 'MuiCheckbox'
})(Checkbox);