(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{266:function(module,exports,__webpack_require__){__webpack_require__(267),__webpack_require__(410),module.exports=__webpack_require__(411)},3:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return createPortalNode})),__webpack_require__.d(__webpack_exports__,"a",(function(){return InPortal})),__webpack_require__.d(__webpack_exports__,"b",(function(){return OutPortal}));__webpack_require__(79),__webpack_require__(61),__webpack_require__(162),__webpack_require__(163);var _extendStatics,react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react_dom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(110),__extends=(_extendStatics=function extendStatics(d,b){return(_extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)},function(d,b){function __(){this.constructor=d}_extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),createPortalNode=function(){var parent,lastPlaceholder,initialProps={},portalNode=Object.assign(document.createElement("div"),{setPortalProps:function setPortalProps(props){initialProps=props},getInitialPortalProps:function getInitialPortalProps(){return initialProps},mount:function mount(newParent,newPlaceholder){newPlaceholder!==lastPlaceholder&&(portalNode.unmount(),newParent.replaceChild(portalNode,newPlaceholder),parent=newParent,lastPlaceholder=newPlaceholder)},unmount:function unmount(expectedPlaceholder){expectedPlaceholder&&expectedPlaceholder!==lastPlaceholder||parent&&lastPlaceholder&&(parent.replaceChild(lastPlaceholder,portalNode),parent=void 0,lastPlaceholder=void 0)}});return portalNode},InPortal=function(_super){function InPortal(props){var _this=_super.call(this,props)||this;return _this.addPropsChannel=function(){Object.assign(_this.props.node,{setPortalProps:function setPortalProps(props){_this.setState({nodeProps:props})}})},_this.state={nodeProps:_this.props.node.getInitialPortalProps()},_this}return __extends(InPortal,_super),InPortal.prototype.componentDidMount=function(){this.addPropsChannel()},InPortal.prototype.componentDidUpdate=function(){this.addPropsChannel()},InPortal.prototype.render=function(){var _this=this,_a=this.props,children=_a.children,node=_a.node;return react_dom__WEBPACK_IMPORTED_MODULE_5__.createPortal(react__WEBPACK_IMPORTED_MODULE_4__.Children.map(children,(function(child){return react__WEBPACK_IMPORTED_MODULE_4__.isValidElement(child)?react__WEBPACK_IMPORTED_MODULE_4__.cloneElement(child,_this.state.nodeProps):child})),node)},InPortal}(react__WEBPACK_IMPORTED_MODULE_4__.PureComponent),OutPortal=function(_super){function OutPortal(props){var _this=_super.call(this,props)||this;return _this.placeholderNode=react__WEBPACK_IMPORTED_MODULE_4__.createRef(),_this.passPropsThroughPortal(),_this}return __extends(OutPortal,_super),OutPortal.prototype.passPropsThroughPortal=function(){var propsForTarget=Object.assign({},this.props,{node:void 0});this.props.node.setPortalProps(propsForTarget)},OutPortal.prototype.componentDidMount=function(){var node=this.props.node;this.currentPortalNode=node;var placeholder=this.placeholderNode.current,parent=placeholder.parentNode;node.mount(parent,placeholder),this.passPropsThroughPortal()},OutPortal.prototype.componentDidUpdate=function(){var node=this.props.node;this.currentPortalNode&&node!==this.currentPortalNode&&(this.currentPortalNode.unmount(),this.currentPortalNode=node);var placeholder=this.placeholderNode.current,parent=placeholder.parentNode;node.mount(parent,placeholder),this.passPropsThroughPortal()},OutPortal.prototype.componentWillUnmount=function(){this.props.node.unmount(this.placeholderNode.current)},OutPortal.prototype.render=function(){return react__WEBPACK_IMPORTED_MODULE_4__.createElement("div",{ref:this.placeholderNode})},OutPortal}(react__WEBPACK_IMPORTED_MODULE_4__.PureComponent)},328:function(module,exports){},411:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(36),__webpack_require__(20),__webpack_require__(17),__webpack_require__(37),__webpack_require__(28);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(111),req=__webpack_require__(600);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)((function loadStories(){req.keys().forEach((function(filename){return req(filename)}))}),module)}.call(this,__webpack_require__(211)(module))},600:function(module,exports,__webpack_require__){var map={"./index.stories.js":601};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=600},601:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(26),__webpack_require__(33),__webpack_require__(34),__webpack_require__(50),__webpack_require__(20),__webpack_require__(51),__webpack_require__(17),__webpack_require__(52),__webpack_require__(38),__webpack_require__(28),__webpack_require__(164);var react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__),_storybook_react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(111),___WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(3);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var withSourceLoader=__webpack_require__(265).withSource,__STORY__=(__webpack_require__(265).addSource,"import React from 'react';\n\nimport { storiesOf } from '@storybook/react';\n\nimport * as portals from '..';\n\nconst Container = (props) =>\n    <div style={{ \"border\": \"1px solid #222\", \"padding\": \"10px\" }}>\n        { props.children }\n    </div>;\n\nstoriesOf('Portals', module)\n    .add('render things in different places', () => {\n        const portalNode = portals.createPortalNode('span');\n\n        return <div>\n            <div>\n                Portal defined here:\n                <portals.InPortal node={portalNode}>\n                    Hi!\n                </portals.InPortal>\n            </div>\n\n            <div>\n                Portal renders here:\n                <portals.OutPortal node={portalNode} />\n            </div>\n        </div>;\n    })\n    .add('persist DOM whilst moving', () => {\n        const portalNode = portals.createPortalNode();\n\n        return React.createElement(() => {\n            const [useOuterDiv, setDivToUse] = React.useState(false);\n\n            return <div>\n                <portals.InPortal node={portalNode}>\n                    <video src=\"https://media.giphy.com/media/l0HlKghz8IvrQ8TYY/giphy.mp4\" controls loop />\n                </portals.InPortal>\n\n                <button onClick={() => setDivToUse(!useOuterDiv)}>\n                    Click to move the OutPortal\n                </button>\n\n                <hr/>\n\n                <div>\n                    <p>Outer OutPortal:</p>\n                    { useOuterDiv === true && <portals.OutPortal node={portalNode} /> }\n                    <Container>\n                        <Container>\n                            <Container>\n                                <p>Inner OutPortal:</p>\n                                { useOuterDiv === false && <portals.OutPortal node={portalNode} /> }\n                            </Container>\n                        </Container>\n                    </Container>\n                </div>\n            </div>;\n        })\n    })\n    .add('persist component state whilst moving', () => {\n        const portalNode = portals.createPortalNode();\n\n        const Counter = () => {\n            const [count, setCount] = React.useState(0);\n\n            return <div>\n                Count is { count }\n                <button onClick={() => setCount(count + 1)}>\n                    +1\n                </button>\n            </div>;\n        };\n\n        return React.createElement(() => {\n            const [useOuterDiv, setDivToUse] = React.useState(false);\n\n            return <div>\n                <portals.InPortal node={portalNode}>\n                    <Counter />\n                </portals.InPortal>\n\n                <button onClick={() => setDivToUse(!useOuterDiv)}>\n                    Click to move the OutPortal\n                </button>\n\n                <hr/>\n\n                <p>Outer OutPortal:</p>\n                { useOuterDiv === true && <portals.OutPortal node={portalNode} /> }\n                <Container>\n                    <Container>\n                        <Container>\n                            <p>Inner OutPortal:</p>\n                            { useOuterDiv === false && <portals.OutPortal node={portalNode} /> }\n                        </Container>\n                    </Container>\n                </Container>\n            </div>\n        });\n    })\n    .add('can set props remotely whilst moving', () => {\n        const portalNode = portals.createPortalNode();\n\n        const Counter = (props) => {\n            const [count, setCount] = React.useState(0);\n\n            return <div style={{ \"background-color\": props.bgColor }}>\n                Count is { count }\n                <button onClick={() => setCount(count + 1)}>\n                    +1\n                </button>\n            </div>;\n        };\n\n        return React.createElement(() => {\n            const [useOuterDiv, setDivToUse] = React.useState(false);\n\n            return <div>\n                <portals.InPortal node={portalNode}>\n                    <Counter bgColor=\"#faa\" />\n                </portals.InPortal>\n\n                <button onClick={() => setDivToUse(!useOuterDiv)}>\n                    Click to move the OutPortal\n                </button>\n\n                <hr/>\n\n                <p>Outer OutPortal:</p>\n                { useOuterDiv === true &&\n                    <portals.OutPortal node={portalNode} bgColor=\"#aaf\" />\n                }\n                <Container>\n                    <Container>\n                        <Container>\n                            <p>Inner OutPortal:</p>\n                            { useOuterDiv === false &&\n                                <portals.OutPortal node={portalNode} bgColor=\"#afa\" />\n                            }\n                        </Container>\n                    </Container>\n                </Container>\n            </div>\n        });\n    })\n    .add('can switch between portals safely', () => {\n        const portalNode1 = portals.createPortalNode();\n        const portalNode2 = portals.createPortalNode();\n\n        const Counter = () => {\n            const [count, setCount] = React.useState(0);\n\n            return <div>\n                Count is { count }\n                <button onClick={() => setCount(count + 1)}>\n                    +1\n                </button>\n            </div>;\n        };\n\n        return React.createElement(() => {\n            const [isPortalSwitched, switchPortal] = React.useState(false);\n\n            let portalNode = isPortalSwitched ? portalNode2 : portalNode1;\n\n            return <div>\n                <portals.InPortal node={portalNode1}>\n                    <Counter />\n                </portals.InPortal>\n                <portals.InPortal node={portalNode2}>\n                    <Counter />\n                </portals.InPortal>\n\n                <button onClick={() => switchPortal(!isPortalSwitched)}>\n                    Click to swap the portal shown\n                </button>\n\n                <hr/>\n\n                <p>Inner OutPortal:</p>\n                <portals.OutPortal node={portalNode} />\n            </div>\n        });\n    })\n    .add('renders reliably, even with frequent changes and multiple portals', () => {\n        const portalNode = portals.createPortalNode('div');\n\n        const Target = (p) => p.value.toString();\n\n        const Parent = () => {\n            const [state, setState] = React.useState(false);\n\n            // Change frequently, to hunt for race conditions. On leaving this story, this might\n            // complain about calling setState after unmount - that's totally fine, we don't care.\n            // There should be no other errors though.\n            setTimeout(() => {\n                setState(!state);\n            }, 100);\n\n            return <div>\n                Portal flickers between 2 / 3 / nothing here:\n                { state\n                    // What happens if you render the same portal twice?\n                    ? <>\n                        <portals.OutPortal node={portalNode} value={1} />\n                        <portals.OutPortal node={portalNode} value={2} />\n                    </>\n                    // What happens if you switch from 2 portals to 1, to 2 to zero, at random?\n                    : Math.random() > 0.5\n                        ? <portals.OutPortal node={portalNode} value={3} />\n                        : null\n                }\n            </div>;\n        }\n\n        return <div>\n            <div>\n                Portal defined here:\n                <portals.InPortal node={portalNode}>\n                    <Target value='unmounted' />\n                </portals.InPortal>\n            </div>\n\n            <Parent />\n        </div>;\n    })\n    .add('Example from README', () => {\n        const MyExpensiveComponent = () => 'expensive!';\n\n        const MyComponent = (props) => {\n            const portalNode = React.useMemo(() => portals.createPortalNode(), []);\n\n            return <div>\n                {/*\n                    Create the content that you want to move around.\n                    InPortals render as normal, but to detached DOM.\n                    Until this is used MyExpensiveComponent will not\n                    appear anywhere in the page.\n                */}\n                <portals.InPortal node={portalNode}>\n                    <MyExpensiveComponent\n                        // Optionally provide props to use before this enters the DOM\n                        myProp={\"defaultValue\"}\n                    />\n                </portals.InPortal>\n\n                {/* ... The rest of your UI ... */}\n\n                {/* Pass the node to whoever might want to show it: */}\n                { props.componentToShow === 'component-a'\n                    ? <ComponentA portalNode={portalNode} />\n                    : <ComponentB portalNode={portalNode} /> }\n            </div>;\n        }\n\n        const ComponentA = (props) => {\n            return <div>\n                {/* ... Some more UI ... */}\n\n                A:\n\n                <portals.OutPortal\n                    node={props.portalNode} // Show the content from this node here\n                />\n            </div>;\n        }\n\n        const ComponentB = (props) => {\n            return <div>\n                {/* ... Some more UI ... */}\n\n                B:\n\n                <portals.OutPortal\n                    node={props.portalNode} // Pull in the content from this node\n\n                    myProp={\"newValue\"}     // Optionally, override default values\n                    myOtherProp={123}       // Or add new props\n\n                    // These props go back to the InPortal, and trigger a component\n                    // update (but on the same component instance) as if they had\n                    // been passed directly.\n                />\n            </div>;\n        }\n\n        return <MyComponent componentToShow='component-a' />\n    });"),__ADDS_MAP__={"portals--example-from-readme":{startLoc:{col:9,line:229},endLoc:{col:5,line:290},startBody:{col:32,line:229},endBody:{col:5,line:290}},"portals--renders-reliably-even-with-frequent-changes-and-multiple-portals":{startLoc:{col:9,line:187},endLoc:{col:5,line:228},startBody:{col:78,line:187},endBody:{col:5,line:228}},"portals--can-switch-between-portals-safely":{startLoc:{col:9,line:148},endLoc:{col:5,line:186},startBody:{col:46,line:148},endBody:{col:5,line:186}},"portals--can-set-props-remotely-whilst-moving":{startLoc:{col:9,line:103},endLoc:{col:5,line:147},startBody:{col:49,line:103},endBody:{col:5,line:147}},"portals--persist-component-state-whilst-moving":{startLoc:{col:9,line:62},endLoc:{col:5,line:102},startBody:{col:50,line:62},endBody:{col:5,line:102}},"portals--persist-dom-whilst-moving":{startLoc:{col:9,line:30},endLoc:{col:5,line:61},startBody:{col:38,line:30},endBody:{col:5,line:61}},"portals--render-things-in-different-places":{startLoc:{col:9,line:13},endLoc:{col:5,line:29},startBody:{col:46,line:13},endBody:{col:5,line:29}}},Container=function(props){return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",{style:{border:"1px solid #222",padding:"10px"}},props.children)};Container.displayName="Container";var _ref2=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("hr",null),_ref3=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p",null,"Outer OutPortal:"),_ref5=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p",null,"Inner OutPortal:"),_ref7=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("video",{src:"https://media.giphy.com/media/l0HlKghz8IvrQ8TYY/giphy.mp4",controls:!0,loop:!0}),_ref9=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("hr",null),_ref10=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p",null,"Outer OutPortal:"),_ref12=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p",null,"Inner OutPortal:"),_ref15=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("hr",null),_ref16=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p",null,"Outer OutPortal:"),_ref18=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p",null,"Inner OutPortal:"),_ref22=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("hr",null),_ref23=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p",null,"Inner OutPortal:");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_12__.storiesOf)("Portals",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/index.stories.js",[],{},"/home/travis/build/httptoolkit/react-reverse-portal/stories",{})).add("render things in different places",(function(){var portalNode=___WEBPACK_IMPORTED_MODULE_13__.c("span");return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,"Portal defined here:",react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.a,{node:portalNode},"Hi!")),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,"Portal renders here:",react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.b,{node:portalNode})))})).add("persist DOM whilst moving",(function(){var portalNode=___WEBPACK_IMPORTED_MODULE_13__.c(),_ref=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.a,{node:portalNode},_ref7),_ref4=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.b,{node:portalNode}),_ref6=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.b,{node:portalNode});return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement((function(){var _React$useState2=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(!1),2),useOuterDiv=_React$useState2[0],setDivToUse=_React$useState2[1];return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,_ref,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button",{onClick:function onClick(){return setDivToUse(!useOuterDiv)}},"Click to move the OutPortal"),_ref2,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,_ref3,!0===useOuterDiv&&_ref4,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Container,null,_ref5,!1===useOuterDiv&&_ref6)))))}))})).add("persist component state whilst moving",(function(){var portalNode=___WEBPACK_IMPORTED_MODULE_13__.c(),_ref8=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.a,{node:portalNode},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement((function Counter(){var _React$useState4=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(0),2),count=_React$useState4[0],setCount=_React$useState4[1];return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,"Count is ",count,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button",{onClick:function onClick(){return setCount(count+1)}},"+1"))}),null)),_ref11=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.b,{node:portalNode}),_ref13=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.b,{node:portalNode});return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement((function(){var _React$useState6=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(!1),2),useOuterDiv=_React$useState6[0],setDivToUse=_React$useState6[1];return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,_ref8,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button",{onClick:function onClick(){return setDivToUse(!useOuterDiv)}},"Click to move the OutPortal"),_ref9,_ref10,!0===useOuterDiv&&_ref11,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Container,null,_ref12,!1===useOuterDiv&&_ref13))))}))})).add("can set props remotely whilst moving",(function(){var portalNode=___WEBPACK_IMPORTED_MODULE_13__.c(),_ref14=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.a,{node:portalNode},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement((function Counter(props){var _React$useState8=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(0),2),count=_React$useState8[0],setCount=_React$useState8[1];return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",{style:{"background-color":props.bgColor}},"Count is ",count,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button",{onClick:function onClick(){return setCount(count+1)}},"+1"))}),{bgColor:"#faa"})),_ref17=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.b,{node:portalNode,bgColor:"#aaf"}),_ref19=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.b,{node:portalNode,bgColor:"#afa"});return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement((function(){var _React$useState10=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(!1),2),useOuterDiv=_React$useState10[0],setDivToUse=_React$useState10[1];return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,_ref14,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button",{onClick:function onClick(){return setDivToUse(!useOuterDiv)}},"Click to move the OutPortal"),_ref15,_ref16,!0===useOuterDiv&&_ref17,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Container,null,_ref18,!1===useOuterDiv&&_ref19))))}))})).add("can switch between portals safely",(function(){var portalNode1=___WEBPACK_IMPORTED_MODULE_13__.c(),portalNode2=___WEBPACK_IMPORTED_MODULE_13__.c(),Counter=function(){var _React$useState12=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(0),2),count=_React$useState12[0],setCount=_React$useState12[1];return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,"Count is ",count,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button",{onClick:function onClick(){return setCount(count+1)}},"+1"))},_ref20=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.a,{node:portalNode1},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Counter,null)),_ref21=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.a,{node:portalNode2},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Counter,null));return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement((function(){var _React$useState14=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(!1),2),isPortalSwitched=_React$useState14[0],switchPortal=_React$useState14[1],portalNode=isPortalSwitched?portalNode2:portalNode1;return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,_ref20,_ref21,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button",{onClick:function onClick(){return switchPortal(!isPortalSwitched)}},"Click to swap the portal shown"),_ref22,_ref23,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.b,{node:portalNode}))}))})).add("renders reliably, even with frequent changes and multiple portals",(function(){var portalNode=___WEBPACK_IMPORTED_MODULE_13__.c("div"),_ref24=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.b,{node:portalNode,value:1}),_ref25=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.b,{node:portalNode,value:2}),_ref26=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.b,{node:portalNode,value:3});return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,"Portal defined here:",react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.a,{node:portalNode},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement((function Target(p){return p.value.toString()}),{value:"unmounted"}))),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement((function Parent(){var _React$useState16=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(!1),2),state=_React$useState16[0],setState=_React$useState16[1];return setTimeout((function(){setState(!state)}),100),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,"Portal flickers between 2 / 3 / nothing here:",state?react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment,null,_ref24,_ref25):.5<Math.random()?_ref26:null)}),null))})).add("Example from README",(function(){var _ref27=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement((function MyExpensiveComponent(){return"expensive!"}),{myProp:"defaultValue"}),ComponentA=function(props){return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,"A:",react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.b,{node:props.portalNode}))},ComponentB=function(props){return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,"B:",react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.b,{node:props.portalNode,myProp:"newValue",myOtherProp:123}))};return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement((function MyComponent(props){var portalNode=react__WEBPACK_IMPORTED_MODULE_11___default.a.useMemo((function(){return ___WEBPACK_IMPORTED_MODULE_13__.c()}),[]);return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(___WEBPACK_IMPORTED_MODULE_13__.a,{node:portalNode},_ref27),"component-a"===props.componentToShow?react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ComponentA,{portalNode:portalNode}):react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ComponentB,{portalNode:portalNode}))}),{componentToShow:"component-a"})}))}.call(this,__webpack_require__(211)(module))}},[[266,1,2]]]);
//# sourceMappingURL=main.633601618644f77bc2a8.bundle.js.map