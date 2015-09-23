webpackHotUpdate(0,{

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(7), RootInstanceProvider = __webpack_require__(5), ReactMount = __webpack_require__(3), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
  
  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _apiProjects = __webpack_require__(340);
  
  var _apiProjects2 = _interopRequireDefault(_apiProjects);
  
  var _ProjectsCss = __webpack_require__(449);
  
  var _ProjectsCss2 = _interopRequireDefault(_ProjectsCss);
  
  var _decoratorsWithStyles = __webpack_require__(17);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _Project = __webpack_require__(356);
  
  var _Project2 = _interopRequireDefault(_Project);
  
  var _ProjectActive = __webpack_require__(357);
  
  var _ProjectActive2 = _interopRequireDefault(_ProjectActive);
  
  var Projects = (function (_Component) {
    _inherits(Projects, _Component);
  
    function Projects(props) {
      _classCallCheck(this, _Projects);
  
      _get(Object.getPrototypeOf(_Projects.prototype), 'constructor', this).call(this, props);
      this.state = {
        active: false,
        activeProject: {}
      };
    }
  
    _createClass(Projects, [{
      key: 'render',
      value: function render() {
        var _this = this;
  
        var projects = _apiProjects2['default'].map(function (project, i) {
          return _react2['default'].createElement(_Project2['default'], _extends({ key: i
          }, project, {
            isActive: _this.state.activeProject.id === project.id,
            onClick: function (project) {
              return _this.handleOpen(project);
            } }));
        });
  
        return _react2['default'].createElement(
          'article',
          { className: 'Projects',
            'data-active': this.state.active },
          _react2['default'].createElement(
            'div',
            { className: 'Projects-inner' },
            projects
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Project-active' },
            _react2['default'].createElement(_ProjectActive2['default'], _extends({ onClose: function (e) {
                return _this.handleClose(e);
              }
            }, this.state.activeProject))
          )
        );
      }
    }, {
      key: 'handleOpen',
      value: function handleOpen(project) {
        this.setState({
          active: true,
          activeProject: project
        });
        setTimeout(function () {
          document.body.style.overflowY = 'hidden';
        }, 100);
      }
    }, {
      key: 'handleClose',
      value: function handleClose(e) {
        document.body.style.overflowY = 'auto';
        this.setState({ active: false });
      }
    }]);
  
    var _Projects = Projects;
    Projects = (0, _decoratorsWithStyles2['default'])(_ProjectsCss2['default'])(Projects) || Projects;
    return Projects;
  })(_react.Component);
  
  exports['default'] = Projects;
  module.exports = exports['default'];

  /* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(6); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Projects.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }

})
//# sourceMappingURL=0.bce2027b2737668305a9.hot-update.js.map