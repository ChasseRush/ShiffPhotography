import _extends from "@babel/runtime/helpers/builtin/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
// @inheritedComponent ButtonBase
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonBase from '../ButtonBase';
import IconButton from '../IconButton';
import withStyles from '../styles/withStyles';
export const styles = theme => {
  const transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      minHeight: 8 * 6,
      transition: theme.transitions.create(['min-height', 'background-color'], transition),
      padding: '0 24px 0 24px',
      '&:hover:not($disabled)': {
        cursor: 'pointer'
      },
      '&$expanded': {
        minHeight: 64
      },
      '&$focused': {
        backgroundColor: theme.palette.grey[300]
      },
      '&$disabled': {
        opacity: 0.38
      }
    },

    /* Styles applied to the root element if `expanded={true}`. */
    expanded: {},

    /* Styles applied to the root and children wrapper elements when focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the children wrapper element. */
    content: {
      display: 'flex',
      flexGrow: 1,
      transition: theme.transitions.create(['margin'], transition),
      margin: '12px 0',
      '& > :last-child': {
        paddingRight: 32
      },
      '&$expanded': {
        margin: '20px 0'
      }
    },

    /* Styles applied to the `IconButton` component when `expandIcon` is supplied. */
    expandIcon: {
      position: 'absolute',
      top: '50%',
      right: 8,
      transform: 'translateY(-50%) rotate(0deg)',
      transition: theme.transitions.create('transform', transition),
      '&:hover': {
        // Disable the hover effect for the IconButton,
        // because a hover effect should apply to the entire Expand button and
        // not only to the IconButton.
        backgroundColor: 'transparent'
      },
      '&$expanded': {
        transform: 'translateY(-50%) rotate(180deg)'
      }
    }
  };
};

class ExpansionPanelSummary extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      focused: false
    }, this.handleFocus = () => {
      this.setState({
        focused: true
      });
    }, this.handleBlur = () => {
      this.setState({
        focused: false
      });
    }, this.handleChange = event => {
      const {
        onChange,
        onClick
      } = this.props;

      if (onChange) {
        onChange(event);
      }

      if (onClick) {
        onClick(event);
      }
    }, _temp;
  }

  render() {
    const _props = this.props,
          {
      children,
      classes,
      className,
      disabled,
      expanded,
      expandIcon,
      IconButtonProps,
      onChange
    } = _props,
          other = _objectWithoutProperties(_props, ["children", "classes", "className", "disabled", "expanded", "expandIcon", "IconButtonProps", "onChange"]);

    const {
      focused
    } = this.state;
    return React.createElement(ButtonBase, _extends({
      focusRipple: false,
      disableRipple: true,
      disabled: disabled,
      component: "div",
      "aria-expanded": expanded,
      className: classNames(classes.root, {
        [classes.disabled]: disabled,
        [classes.expanded]: expanded,
        [classes.focused]: focused
      }, className)
    }, other, {
      onFocusVisible: this.handleFocus,
      onBlur: this.handleBlur,
      onClick: this.handleChange
    }), React.createElement("div", {
      className: classNames(classes.content, {
        [classes.expanded]: expanded
      })
    }, children), expandIcon && React.createElement(IconButton, _extends({
      disabled: disabled,
      className: classNames(classes.expandIcon, {
        [classes.expanded]: expanded
      }),
      component: "div",
      tabIndex: -1,
      "aria-hidden": "true"
    }, IconButtonProps), expandIcon));
  }

}

ExpansionPanelSummary.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the expansion panel summary.
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
   * @ignore
   * If `true`, the summary will be displayed in a disabled state.
   */
  disabled: PropTypes.bool,

  /**
   * @ignore
   * If `true`, expands the summary, otherwise collapse it.
   */
  expanded: PropTypes.bool,

  /**
   * The icon to display as the expand indicator.
   */
  expandIcon: PropTypes.node,

  /**
   * Properties applied to the `TouchRipple` element wrapping the expand icon.
   */
  IconButtonProps: PropTypes.object,

  /**
   * @ignore
   */
  onChange: PropTypes.func,

  /**
   * @ignore
   */
  onClick: PropTypes.func
} : {};
ExpansionPanelSummary.defaultProps = {
  disabled: false
};
ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';
export default withStyles(styles, {
  name: 'MuiExpansionPanelSummary'
})(ExpansionPanelSummary);