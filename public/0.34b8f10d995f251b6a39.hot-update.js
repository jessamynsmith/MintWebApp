webpackHotUpdate(0,{

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(7), RootInstanceProvider = __webpack_require__(5), ReactMount = __webpack_require__(3), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
  
  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _ProjectCss = __webpack_require__(447);
  
  var _ProjectCss2 = _interopRequireDefault(_ProjectCss);
  
  var _decoratorsWithStyles = __webpack_require__(17);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _Overlay = __webpack_require__(70);
  
  var _Overlay2 = _interopRequireDefault(_Overlay);
  
  var Project = (function (_Component) {
    _inherits(Project, _Component);
  
    function Project() {
      _classCallCheck(this, _Project);
  
      _get(Object.getPrototypeOf(_Project.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Project, [{
      key: 'render',
      value: function render() {
        var _this = this;
  
        var titleClassName = !this.props.isActive ? 'Project-title' : 'Project-title fadeOutDown';
        var captionClassName = !this.props.isActive ? '' : 'fadeOutDown';
  
        return _react2['default'].createElement(
          'div',
          { className: 'Project', onClick: function (e) {
              return _this.props.onClick(_this.props);
            } },
          _react2['default'].createElement(_Overlay2['default'], null),
          _react2['default'].createElement(
            'div',
            { className: 'Project-caption' },
            _react2['default'].createElement(
              'h3',
              { className: titleClassName },
              this.props.title
            ),
            _react2['default'].createElement(
              'p',
              { className: captionClassName },
              this.props.caption
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Project-img' },
            _react2['default'].createElement('img', { src: this.props.img })
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        onClick: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    var _Project = Project;
    Project = (0, _decoratorsWithStyles2['default'])(_ProjectCss2['default'])(Project) || Project;
    return Project;
  })(_react.Component);
  
  exports['default'] = Project;
  module.exports = exports['default'];

  /* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(6); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Project.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }

})
//# sourceMappingURL=0.34b8f10d995f251b6a39.hot-update.js.map