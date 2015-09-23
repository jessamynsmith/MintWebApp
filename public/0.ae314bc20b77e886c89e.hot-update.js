webpackHotUpdate(0,{

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(16)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n\n  /*\n   * Costum\n   * ======================================================================== */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.Project {\n\twidth: 100%;\n\tposition: relative;\n\tcursor: pointer;\n}\n\n.Project-caption {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: #000000;\n\tbackground-color: rgba(0,0,0,0.45);\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-webkit-align-items: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\t-webkit-box-pack: center;\n\t-webkit-justify-content: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t-webkit-flex-direction: column;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\tcolor: white;\n\tz-index: 10;\n\topacity: 0.9;\n\t-webkit-transition: opacity 0.35s;\n\t        transition: opacity 0.35s;\n\tborder-bottom: 1px solid #fff;\n}\n\n.Project-title {\n\tmargin: 0 0 4px;\n}\n\n.Project-img {\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n}\n\n@media(min-width: 769px) {\n\t.Project {\n\t\twidth: 33.333%;\n\t}\n\n\t.Project-caption {\n\t\topacity: 0;\n\t\tborder-bottom: none;\n\t}\n\n\t.Project:hover .Project-caption {\n\t\topacity: 0.9;\n\t}\n}", ""]);
  
  // exports


/***/ },

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
  
        return _react2['default'].createElement(
          'div',
          { className: 'Project',
            onClick: function (e) {
              return _this.props.onClick(_this.props);
            },
            'data-active': this.props.isActive },
          _react2['default'].createElement(_Overlay2['default'], null),
          _react2['default'].createElement(
            'div',
            { className: 'Project-caption' },
            _react2['default'].createElement(
              'h3',
              { className: 'Project-title' },
              this.props.title
            ),
            _react2['default'].createElement(
              'p',
              null,
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
        onClick: _react.PropTypes.func.isRequired,
        isActive: _react.PropTypes.bool
      },
      enumerable: true
    }]);
  
    var _Project = Project;
    Project = (0, _decoratorsWithStyles2['default'])(_ProjectCss2['default'])(Project) || Project;
    return Project;
  })(_react.Component);
  
  _react.Component.defaultProps = { isActive: false };
  
  exports['default'] = Project;
  module.exports = exports['default'];

  /* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(6); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Project.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },

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
            isActive: _this.state.active,
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
        document.body.style.overflowY = 'hidden';
        this.setState({
          active: true,
          activeProject: project
        });
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

/***/ },

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

  var refs = 0;
  var dispose;
  var content = __webpack_require__(302);
  if(typeof content === 'string') content = [[module.id, content, '']];
  exports.use = exports.ref = function() {
  	if(!(refs++)) {
  		exports.locals = content.locals;
  		dispose = __webpack_require__(18)(content);
  	}
  	return exports;
  };
  exports.unuse = exports.unref = function() {
  	if(!(--refs)) {
  		dispose();
  		dispose = null;
  	}
  };
  if(true) {
  	var lastRefs = module.hot.data && module.hot.data.refs || 0;
  	if(lastRefs) {
  		exports.ref();
  		if(!content.locals) {
  			refs = lastRefs;
  		}
  	}
  	if(!content.locals) {
  		module.hot.accept();
  	}
  	module.hot.dispose(function(data) {
  		data.refs = content.locals ? 0 : refs;
  		if(dispose) {
  			dispose();
  		}
  	});
  }

/***/ }

})
//# sourceMappingURL=0.ae314bc20b77e886c89e.hot-update.js.map