"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/builtin/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectSpread"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inherits"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Transition = _interopRequireDefault(require("react-transition-group/Transition"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _transitions = require("../styles/transitions");

var _utils = require("../transitions/utils");

// @inheritedComponent Transition
var styles = function styles(theme) {
  return {
    /* Styles applied to the container element. */
    container: {
      height: 0,
      overflow: 'hidden',
      transition: theme.transitions.create('height')
    },

    /* Styles applied to the container element when the transition has entered. */
    entered: {
      height: 'auto'
    },

    /* Styles applied to the outer wrapper element. */
    wrapper: {
      // Hack to get children with a negative margin to not falsify the height computation.
      display: 'flex'
    },

    /* Styles applied to the outer wrapper element. */
    wrapperInner: {
      width: '100%'
    }
  };
};
/**
 * The Collapse transition is used by the
 * [Vertical Stepper](/demos/steppers#vertical-stepper) StepContent component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */


exports.styles = styles;

var Collapse =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Collapse, _React$Component);

  function Collapse() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, Collapse);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call.apply(_ref, [this].concat(args))), _this.wrapper = null, _this.autoTransitionDuration = null, _this.timer = null, _this.handleEnter = function (node) {
      node.style.height = _this.props.collapsedHeight;

      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    }, _this.handleEntering = function (node) {
      var _this$props = _this.props,
          timeout = _this$props.timeout,
          theme = _this$props.theme;
      var wrapperHeight = _this.wrapperRef ? _this.wrapperRef.clientHeight : 0;

      var _getTransitionProps = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'enter'
      }),
          transitionDuration = _getTransitionProps.duration;

      if (timeout === 'auto') {
        var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
        node.style.transitionDuration = "".concat(duration2, "ms");
        _this.autoTransitionDuration = duration2;
      } else {
        node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms");
      }

      node.style.height = "".concat(wrapperHeight, "px");

      if (_this.props.onEntering) {
        _this.props.onEntering(node);
      }
    }, _this.handleEntered = function (node) {
      node.style.height = 'auto';

      if (_this.props.onEntered) {
        _this.props.onEntered(node);
      }
    }, _this.handleExit = function (node) {
      var wrapperHeight = _this.wrapperRef ? _this.wrapperRef.clientHeight : 0;
      node.style.height = "".concat(wrapperHeight, "px");

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    }, _this.handleExiting = function (node) {
      var _this$props2 = _this.props,
          timeout = _this$props2.timeout,
          theme = _this$props2.theme;
      var wrapperHeight = _this.wrapperRef ? _this.wrapperRef.clientHeight : 0;

      var _getTransitionProps2 = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'exit'
      }),
          transitionDuration = _getTransitionProps2.duration;

      if (timeout === 'auto') {
        var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
        node.style.transitionDuration = "".concat(duration2, "ms");
        _this.autoTransitionDuration = duration2;
      } else {
        node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms");
      }

      node.style.height = _this.props.collapsedHeight;

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    }, _this.addEndListener = function (_, next) {
      if (_this.props.timeout === 'auto') {
        _this.timer = setTimeout(next, _this.autoTransitionDuration || 0);
      }
    }, _temp));
  }

  (0, _createClass2.default)(Collapse, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          collapsedHeight = _props.collapsedHeight,
          Component = _props.component,
          onEnter = _props.onEnter,
          onEntered = _props.onEntered,
          onEntering = _props.onEntering,
          onExit = _props.onExit,
          onExiting = _props.onExiting,
          style = _props.style,
          theme = _props.theme,
          timeout = _props.timeout,
          other = (0, _objectWithoutProperties2.default)(_props, ["children", "classes", "className", "collapsedHeight", "component", "onEnter", "onEntered", "onEntering", "onExit", "onExiting", "style", "theme", "timeout"]);
      return _react.default.createElement(_Transition.default, (0, _extends2.default)({
        onEnter: this.handleEnter,
        onEntered: this.handleEntered,
        onEntering: this.handleEntering,
        onExit: this.handleExit,
        onExiting: this.handleExiting,
        addEndListener: this.addEndListener,
        timeout: timeout === 'auto' ? null : timeout
      }, other), function (state, childProps) {
        return _react.default.createElement(Component, (0, _extends2.default)({
          className: (0, _classnames.default)(classes.container, (0, _defineProperty2.default)({}, classes.entered, state === 'entered'), className),
          style: (0, _objectSpread2.default)({}, style, {
            minHeight: collapsedHeight
          })
        }, childProps), _react.default.createElement("div", {
          className: classes.wrapper,
          ref: function ref(_ref2) {
            _this2.wrapperRef = _ref2;
          }
        }, _react.default.createElement("div", {
          className: classes.wrapperInner
        }, children)));
      });
    }
  }]);
  return Collapse;
}(_react.default.Component);

Collapse.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content node to be collapsed.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The height of the container when collapsed.
   */
  collapsedHeight: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * If `true`, the component will transition in.
   */
  in: _propTypes.default.bool,

  /**
   * @ignore
   */
  onEnter: _propTypes.default.func,

  /**
   * @ignore
   */
  onEntered: _propTypes.default.func,

  /**
   * @ignore
   */
  onEntering: _propTypes.default.func,

  /**
   * @ignore
   */
  onExit: _propTypes.default.func,

  /**
   * @ignore
   */
  onExiting: _propTypes.default.func,

  /**
   * @ignore
   */
  style: _propTypes.default.object,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  }), _propTypes.default.oneOf(['auto'])])
} : {};
Collapse.defaultProps = {
  collapsedHeight: '0px',
  component: 'div',
  timeout: _transitions.duration.standard
};
Collapse.muiSupportAuto = true;

var _default = (0, _withStyles.default)(styles, {
  withTheme: true,
  name: 'MuiCollapse'
})(Collapse);

exports.default = _default;