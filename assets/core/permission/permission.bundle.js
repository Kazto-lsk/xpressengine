webpackJsonp([1],{12:function(e,t,n){"use strict";var a=n(6),s=n(42),r=(new a.Component).updater;e.exports=s(a.Component,a.isValidElement,r)},18:function(e,t,n){e.exports=n(254)()},212:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var s=n(6),r=a(s),i=n(15),l=a(i),o=n(66),u=a(o);$(".__xe__uiobject_permission").each(function(e){var t=$(this),n=t.data("data"),a=t.data("key"),s=t.data("type"),i=t.data("memberUrl"),o=t.data("groupUrl"),d=t.data("vgroupAll");l.default.render(r.default.createElement(u.default,{key:a,memberSearchUrl:i,groupSearchUrl:o,permission:n,type:s,vgroupAll:d}),this)})},213:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(6),r=a(s),i=n(12),l=a(i),o=n(18),u=a(o),d=n(38),c=a(d),p=n(37),h=a(p),f=n(39),m=a(f);t.default=(0,l.default)({displayName:"Permission",propTypes:{permission:u.default.object,type:u.default.string},getDefaultProps:function(){return{modeEnable:!1}},getInitialState:function(){return this.init(this.props)},init:function(e){var t,n,a=e.permission,s=[],r=[],i=[];return a&&(t=a.mode,n=a.rating,s=a.group,r=a.user,i=a.except),{permission:a,modeEnable:this.props.modeEnable,formData:{mode:t,rating:n},includeGroups:s,includeMembers:r,excludeMembers:i}},componentDidMount:function(){},componentDidUpdate:function(e){this.props.permission!==e.permission&&this.setState(this.init(this.props))},inputChange:function(e,t){var n=t.target.value,a=this.state.formData;a[e]=n,this.setState({formData:a})},handleIncludeGroupDelete:function(e){var t=this.state.includeGroups;t.splice(e,1),this.setState({includeGroups:t})},handleIncludeMemberDelete:function(e){var t=this.state.includeMembers;t.splice(e,1),this.setState({includeMembers:t})},handleExcludeMemberDelete:function(e){var t=this.state.excludeMembers;t.splice(e,1),this.setState({excludeMembers:t})},handleIncludeAddition:function(e){var t=this.state.includeGroups,n=this.state.includeMembers;e.hasOwnProperty("displayName")?_.find(n,{id:e.id})||(n.push(e),this.setState({includeMembers:n})):_.find(t,{id:e.id})||(t.push(e),this.setState({includeGroups:t}))},handleExcludeAddition:function(e){var t=this.state.excludeMembers;_.find(t,{id:e.id})||(t.push(e),this.setState({excludeMembers:t}))},render:function(){var e=this,t=this.props.type+"Rating",n=this.props.type+"Group",a=this.props.type+"User",s=this.props.type+"Except",i=this.props.type+"VGroup[]",l=this.state.formData.mode,o=this.state.formData.rating,u=!1;"manual"!==l&&"inherit"!==l||"manual"!==l&&(u=!0);var d=[{value:"super",name:"Super"},{value:"manager",name:"Manager"},{value:"member",name:"Member"},{value:"guest",name:"Guest"}],p=this.props.vgroupAll.length<1?null:this.props.vgroupAll.map(function(e){var t={type:"checkbox",disabled:u,name:i,value:e.id,key:e.id};return-1!=function(e,t){for(var n=0;n<t.length;n++)if(t[n]==e)return n;return-1}(e.id,this.props.permission.vgroup)&&(t.defaultChecked=!0),r.default.createElement("label",null,r.default.createElement("input",t)," ",e.title,"  ")}.bind(this)),f=this.state.includeGroups.map(function(e){return e.id}),g=this.state.includeMembers.map(function(e){return e.id}),b=this.state.excludeMembers.map(function(e){return e.id});return r.default.createElement("div",null,r.default.createElement("div",null,r.default.createElement("label",null,"Rating  ",r.default.createElement("i",{className:"fa fa-info-circle","data-toggle":"popover","data-content":"권한의 등급을 설정합니다."})),r.default.createElement("br",null),d.map(function(n,a){var s=n.value===o;return r.default.createElement(m.default,{data:n,name:t,isChekced:s,controlDisabled:u,key:a,onChangeRadio:e.inputChange})})),r.default.createElement("div",null,r.default.createElement("label",null,"Include Group and User ",r.default.createElement("i",{className:"fa fa-info-circle","data-toggle":"popover","data-content":"포함하고자 하는 대상을 지정합니다.","data-original-title":""})),r.default.createElement("br",null),r.default.createElement(c.default,{selectedGroup:this.state.includeGroups,selectedMember:this.state.includeMembers,searchMemberUrl:this.props.memberSearchUrl,searchGroupUrl:this.props.groupSearchUrl,disabled:u,handleGroupDelete:this.handleIncludeGroupDelete,handleMemberDelete:this.handleIncludeMemberDelete,handleAddition:this.handleIncludeAddition}),r.default.createElement("input",{type:"hidden",name:n,className:"form-control",value:f}),r.default.createElement("input",{type:"hidden",name:a,className:"form-control",value:g})),function(){if(p)return r.default.createElement("p",null,r.default.createElement("label",null,"Include Virtual Group ",r.default.createElement("i",{className:"fa fa-info-circle","data-toggle":"popover","data-content":"포함하고자 하는 대상을 지정합니다.","data-original-title":""})),r.default.createElement("br",null),p)}.call(this),r.default.createElement("div",null,r.default.createElement("label",null,"Exclude User  ",r.default.createElement("i",{className:"fa fa-info-circle","data-toggle":"popover","data-content":"제외하고자 하는 대상을 지정합니다.","data-original-title":""})),r.default.createElement("br",null),r.default.createElement(h.default,{selectedMember:this.state.excludeMembers,searchMemberUrl:this.props.memberSearchUrl,disabled:u,handleDelete:this.handleExcludeMemberDelete,handleAddition:this.handleExcludeAddition}),r.default.createElement("input",{type:"hidden",name:s,className:"form-control",value:b})))}})},254:function(e,t,n){"use strict";var a=n(9),s=n(1),r=n(187);e.exports=function(){function e(e,t,n,a,i,l){l!==r&&s(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=a,n.PropTypes=n,n}},335:function(e,t,n){n(66),n(37),n(38),n(39),n(212),n(40),n(41),e.exports=n(213)},37:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(6),r=a(s),i=n(15),l=a(i),o=n(12),u=a(o),d=n(18),c=a(d),p=n(41),h=a(p),f=n(40),m=a(f),g={ENTER:13,TAB:9,BACKSPACE:8,UP_ARROW:38,DOWN_ARROW:40,ESCAPE:27};t.default=(0,u.default)({displayName:"PermissionExclude",propTypes:{selectedMember:c.default.array,placeholder:c.default.string,suggestions:c.default.array,handleDelete:c.default.func.isRequired,handleAddition:c.default.func.isRequired},getDefaultProps:function(){return{placeholder:XE.Lang.trans("xe::explainExcludeUser"),selectedMember:[],suggestions:[]}},componentDidMount:function(){},getInitialState:function(){return{suggestions:[],query:"",selectedIndex:-1,selectionMode:!1,searchingCnt:0}},handleDelete:function(e,t){this.props.handleDelete(e),this.setState({query:""})},handleChange:function(e){var t=e.target.value.trim();if(this.setState({query:t}),"@"==t.substr(0,1)){var n=t.substr(1,t.length);this.searchMember(n)}else this.setState({suggestions:[],searchingCnt:0})},searchMember:function(e){var t=this.props.searchMemberUrl,n=this,a=this.state.searchingCnt+1;n.setState({searchingCnt:a}),$.ajax({url:t+"/"+e,method:"get",dataType:"json",cache:!1,success:function(e){var t=n.state.searchingCnt;t-=1,n.setState({suggestions:e,searchingCnt:t})}.bind(n),error:function(e,a,s){var r=n.state.searchingCnt;r-=1,n.setState({searchingCnt:r}),console.error(t,a,s.toString())}.bind(n)})},handleKeyDown:function(e){var t=this.state,n=t.query,a=t.selectedIndex,s=t.suggestions;e.keyCode===g.ESCAPE&&(e.preventDefault(),this.setState({selectedIndex:-1,selectionMode:!1,suggestions:[]})),e.keyCode!==g.ENTER&&e.keyCode!==g.TAB||""==n||(e.preventDefault(),this.state.selectionMode&&this.addTag(this.state.suggestions[this.state.selectedIndex])),e.keyCode===g.BACKSPACE&&""==n&&this.handleDelete(this.props.selectedMember.length-1),e.keyCode===g.UP_ARROW&&(e.preventDefault(),a<=0?this.setState({selectedIndex:this.state.suggestions.length-1,selectionMode:!0}):this.setState({selectedIndex:a-1,selectionMode:!0})),e.keyCode===g.DOWN_ARROW&&(e.preventDefault(),this.setState({selectedIndex:(this.state.selectedIndex+1)%s.length,selectionMode:!0}))},addTag:function(e){var t=l.default.findDOMNode(this.refs.input);this.props.handleAddition(e),this.setState({query:"",selectionMode:!1,selectedIndex:-1}),t.value="",t.focus()},handleSuggestionClick:function(e,t){this.addTag(this.state.suggestions[e])},handleSuggestionHover:function(e,t){this.setState({selectedIndex:e,selectionMode:!0})},render:function(){var e=this.props.selectedMember.map(function(e,t){return r.default.createElement(m.default,{key:e.id,tag:e,prefix:"@",onDelete:this.handleDelete.bind(this,t)})}.bind(this)),t=this.state.query.trim(),n=this.state.selectedIndex,a=this.state.suggestions,s=this.props.placeholder;return r.default.createElement("div",{className:"ReactTags__tags"},r.default.createElement("div",{className:"ReactTags__selected"},e),r.default.createElement("div",{className:"ReactTags__tagInput"},r.default.createElement("input",{type:"text",ref:"input",placeholder:s,className:"form-control",disabled:this.props.disabled,onChange:this.handleChange,onKeyDown:this.handleKeyDown}),r.default.createElement(h.default,{query:t,suggestions:a,searchingCnt:this.state.searchingCnt,selectedIndex:n,handleClick:this.handleSuggestionClick,handleHover:this.handleSuggestionHover})))}})},38:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(6),r=a(s),i=n(15),l=a(i),o=n(12),u=a(o),d=n(18),c=a(d),p=n(41),h=a(p),f=n(40),m=a(f),g={ENTER:13,TAB:9,BACKSPACE:8,UP_ARROW:38,DOWN_ARROW:40,ESCAPE:27};t.default=(0,u.default)({displayName:"PermissionInclude",propTypes:{selectedGroup:c.default.array,selectedMember:c.default.array,placeholder:c.default.string,suggestion:c.default.array,groups:c.default.array,handleGroupDelete:c.default.func.isRequired,handleMemberDelete:c.default.func.isRequired,handleAddition:c.default.func.isRequired},getDefaultProps:function(){return{placeholder:XE.Lang.trans("xe::explainIncludeUserOrGroup"),selectedGroup:[],selectedMember:[],groupSuggestions:[],memberSuggestions:[]}},componentDidMount:function(){},getInitialState:function(){return{suggestions:[],groupSuggestions:[],memberSuggestions:[],query:"",selectedIndex:-1,selectionMode:!1,searchingCnt:0}},handleGroupDelete:function(e,t){this.props.handleGroupDelete(e),this.setState({query:""})},handleMemberDelete:function(e,t){this.props.handleMemberDelete(e),this.setState({query:""})},handleChange:function(e){var t=e.target.value.trim();if(this.setState({query:t}),t.length>0){switch(t.substr(0,1)){case"@":t=t.substr(1,t.length),this.searchMember(t);break;case"%":t=t.substr(1,t.length),this.searchGroup(t)}}else this.setState({query:"",suggestions:[],searchingCnt:0})},searchMember:function(e){var t=this.props.searchMemberUrl,n=this,a=this.state.searchingCnt+1;n.setState({searchingCnt:a}),$.ajax({url:t+"/"+e,method:"get",dataType:"json",cache:!1,success:function(e){var t=n.state.searchingCnt;t-=1,n.setState({suggestions:e,searchingCnt:t})}.bind(n),error:function(e,a,s){var r=n.state.searchingCnt;r-=1,n.setState({searchingCnt:r}),console.error(t,a,s.toString())}.bind(n)})},searchGroup:function(e){var t=this.props.searchGroupUrl,n=this,a=this.state.searchingCnt+1;n.setState({searchingCnt:a}),$.ajax({url:t+"/"+e,method:"get",dataType:"json",cache:!1,success:function(e){var t=n.state.searchingCnt;t-=1,n.setState({suggestions:e,searchingCnt:t})}.bind(n),error:function(e,a,s){var r=n.state.searchingCnt;r-=1,n.setState({searchingCnt:r}),console.error(t,a,s.toString())}.bind(n)})},handleKeyDown:function(e){var t=this.state,n=t.query,a=t.selectedIndex,s=t.suggestions;e.keyCode===g.ESCAPE&&(e.preventDefault(),this.setState({selectedIndex:-1,selectionMode:!1,suggestions:[]})),e.keyCode!==g.ENTER&&e.keyCode!==g.TAB||""==n||(e.preventDefault(),this.state.selectionMode&&this.addTag(this.state.suggestions[this.state.selectedIndex])),e.keyCode===g.BACKSPACE&&""==n&&(this.props.selectedMember.length>0?this.handleMemberDelete(this.props.selectedMember.length-1):this.handleGroupDelete(this.props.selectedGroup.length-1)),e.keyCode===g.UP_ARROW&&(e.preventDefault(),a<=0?this.setState({selectedIndex:this.state.suggestions.length-1,selectionMode:!0}):this.setState({selectedIndex:a-1,selectionMode:!0})),e.keyCode===g.DOWN_ARROW&&(e.preventDefault(),this.setState({selectedIndex:(this.state.selectedIndex+1)%s.length,selectionMode:!0}))},addTag:function(e){var t=l.default.findDOMNode(this.refs.input);this.props.handleAddition(e),this.setState({query:"",selectionMode:!1,selectedIndex:-1}),t.value="",t.focus()},handleSuggestionClick:function(e,t){this.addTag(this.state.suggestions[e])},handleSuggestionHover:function(e,t){this.setState({selectedIndex:e,selectionMode:!0})},render:function(){var e=this.props.selectedGroup.map(function(e,t){return r.default.createElement(m.default,{key:e.id,tag:e,prefix:"%",onDelete:this.handleGroupDelete.bind(this,t)})}.bind(this)),t=this.props.selectedMember.map(function(e,t){return r.default.createElement(m.default,{key:e.id,tag:e,prefix:"@",onDelete:this.handleMemberDelete.bind(this,t)})}.bind(this)),n=this.state.query.trim(),a=this.state.selectedIndex,s=this.state.suggestions,i=this.props.placeholder;return r.default.createElement("div",{className:"ReactTags__tags"},r.default.createElement("div",{className:"ReactTags__selected"},e),r.default.createElement("div",{className:"ReactTags__selected"},t),r.default.createElement("div",{className:"ReactTags__tagInput"},r.default.createElement("input",{type:"text",ref:"input",placeholder:i,className:"form-control",disabled:this.props.disabled,value:this.state.query,onChange:this.handleChange,onKeyDown:this.handleKeyDown}),r.default.createElement(h.default,{query:n,suggestions:s,searchingCnt:this.state.searchingCnt,selectedIndex:a,handleClick:this.handleSuggestionClick,handleHover:this.handleSuggestionHover})))}})},39:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(6),r=a(s),i=n(12),l=a(i),o=n(18),u=a(o);t.default=(0,l.default)({render:function(){return r.default.createElement("label",null,r.default.createElement("input",{type:"radio",disabled:this.props.controlDisabled,name:this.props.name,value:this.props.data.value,checked:this.props.isChecked,onChange:this.inputChange})," ",this.props.data.name,"  ")},inputChange:function(e){this.props.onChangeRadio(e.target.value)},prodTypes:{data:u.default.object,onChangeRadio:u.default.function,isChecked:u.default.boolean,controlDisabled:u.default.boolean,name:u.default.string}})},40:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(6),r=a(s),i=n(12),l=a(i),o=n(18),u=a(o);t.default=(0,l.default)({displayName:"PermissionTag",propTypes:{prefix:u.default.string,onDelete:u.default.func.isRequired,tag:u.default.object.isRequired},render:function(){var e=this.props.tag,t=e.displayName||e.name;return t=this.props.prefix+t,r.default.createElement("span",{className:"ReactTags__tag"},t,r.default.createElement("a",{className:"ReactTags__remove",onClick:this.props.onDelete},"x"))}})},41:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(6),r=a(s),i=n(12),l=a(i),o=n(18),u=a(o);t.default=(0,l.default)({displayName:"PermissionTagSuggestion",propTypes:{query:u.default.string.isRequired,selectedIndex:u.default.number.isRequired,suggestions:u.default.array.isRequired,handleClick:u.default.func.isRequired,handleHover:u.default.func.isRequired,searchingCnt:u.default.number},markIt:function(e,t){var n=t.trim().replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&"),a=RegExp(n,"gi");return{__html:(e.displayName||e.name).replace(a,"<mark>$&</mark>")}},render:function(){var e,t,n,a=this.props;return this.props.searchingCnt>0?t=r.default.createElement("ul",null,r.default.createElement("li",null,"Searching ... ",r.default.createElement("span",{className:"spinner",role:"spinner"},r.default.createElement("span",{className:"spinner-icon"})))):n=a.suggestions.map(function(e,t){return r.default.createElement("li",{key:t,onClick:a.handleClick.bind(null,t),onMouseOver:a.handleHover.bind(null,t),className:t==a.selectedIndex?"active":""},r.default.createElement("span",{dangerouslySetInnerHTML:this.markIt(e,a.query)}))}.bind(this)),e=r.default.createElement("ul",null,n),n&&0===n.length||a.query.length<2?r.default.createElement("div",{className:"ReactTags__suggestions"}):r.default.createElement("div",{className:"ReactTags__suggestions"},t,e)}})},42:function(e,t,n){"use strict";function a(e){return e}function s(e,t,n){function s(e,t){var n=y.hasOwnProperty(t)?y[t]:null;M.hasOwnProperty(t)&&l("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&l("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function u(e,n){if(n){l("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),l(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var a=e.prototype,r=a.__reactAutoBindPairs;n.hasOwnProperty(o)&&E.mixins(e,n.mixins);for(var i in n)if(n.hasOwnProperty(i)&&i!==o){var u=n[i],d=a.hasOwnProperty(i);if(s(d,i),E.hasOwnProperty(i))E[i](e,u);else{var c=y.hasOwnProperty(i),f="function"==typeof u,m=f&&!c&&!d&&!1!==n.autobind;if(m)r.push(i,u),a[i]=u;else if(d){var g=y[i];l(c&&("DEFINE_MANY_MERGED"===g||"DEFINE_MANY"===g),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",g,i),"DEFINE_MANY_MERGED"===g?a[i]=p(a[i],u):"DEFINE_MANY"===g&&(a[i]=h(a[i],u))}else a[i]=u}}}else;}function d(e,t){if(t)for(var n in t){var a=t[n];if(t.hasOwnProperty(n)){var s=n in E;l(!s,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var r=n in e;l(!r,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),e[n]=a}}}function c(e,t){l(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(l(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function p(e,t){return function(){var n=e.apply(this,arguments),a=t.apply(this,arguments);if(null==n)return a;if(null==a)return n;var s={};return c(s,n),c(s,a),s}}function h(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function f(e,t){var n=t.bind(e);return n}function m(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var a=t[n],s=t[n+1];e[a]=f(e,s)}}function g(e){var t=a(function(e,a,s){this.__reactAutoBindPairs.length&&m(this),this.props=e,this.context=a,this.refs=i,this.updater=s||n,this.state=null;var r=this.getInitialState?this.getInitialState():null;l("object"==typeof r&&!Array.isArray(r),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=r});t.prototype=new D,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],b.forEach(u.bind(null,t)),u(t,v),u(t,e),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),l(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var s in y)t.prototype[s]||(t.prototype[s]=null);return t}var b=[],y={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},E={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)u(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=r({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=r({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=p(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=r({},e.propTypes,t)},statics:function(e,t){d(e,t)},autobind:function(){}},v={componentDidMount:function(){this.__isMounted=!0},componentWillUnmount:function(){this.__isMounted=!1}},M={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},D=function(){};return r(D.prototype,e.prototype,M),g}var r=n(43),i=n(17),l=n(1),o="mixins";e.exports=s},43:function(e,t,n){"use strict";function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(e){a[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,l,o=a(e),u=1;u<arguments.length;u++){n=Object(arguments[u]);for(var d in n)r.call(n,d)&&(o[d]=n[d]);if(s){l=s(n);for(var c=0;c<l.length;c++)i.call(n,l[c])&&(o[l[c]]=n[l[c]])}}return o}},66:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(6),r=a(s),i=n(12),l=a(i),o=n(18),u=a(o),d=n(39),c=a(d),p=n(38),h=a(p),f=n(37),m=a(f);t.default=(0,l.default)({displayName:"Permission",propTypes:{permission:u.default.object,type:u.default.string},getDefaultProps:function(){return{modeEnable:!1}},getInitialState:function(){return this.init(this.props)},init:function(e){var t,n,a=e.permission,s=[],r=[],i=[];return a&&(t=a.mode,n=a.rating,s=a.group,r=a.user,i=a.except),{permission:a,modeEnable:this.props.modeEnable,formData:{mode:t,rating:n},includeGroups:s,includeMembers:r,excludeMembers:i}},componentDidMount:function(){},componentDidUpdate:function(e){this.props.permission!==e.permission&&this.setState(this.init(this.props))},modeChange:function(e){var t=this.state.formData;t.mode="inherit"===t.mode?"manual":"inherit",this.setState({formData:t})},inputChange:function(e,t){var n=this.state.formData;n[e]=t,this.setState({formData:n})},handleIncludeGroupDelete:function(e){var t=this.state.includeGroups;t.splice(e,1),this.setState({includeGroups:t})},handleIncludeMemberDelete:function(e){var t=this.state.includeMembers;t.splice(e,1),this.setState({includeMembers:t})},handleExcludeMemberDelete:function(e){var t=this.state.excludeMembers;t.splice(e,1),this.setState({excludeMembers:t})},handleIncludeAddition:function(e){var t=this.state.includeGroups,n=this.state.includeMembers;e.hasOwnProperty("displayName")?_.find(n,{id:e.id})||(n.push(e),this.setState({includeMembers:n})):_.find(t,{id:e.id})||(t.push(e),this.setState({includeGroups:t}))},handleExcludeAddition:function(e){var t=this.state.excludeMembers;_.find(t,{id:e.id})||(t.push(e),this.setState({excludeMembers:t}))},render:function(){var e=this,t=this.props.modeEnable,n=this.props.type+"Mode",a=this.props.type+"Rating",s=this.props.type+"Group",i=this.props.type+"User",l=this.props.type+"Except",o=this.props.type+"VGroup[]",u=this.state.formData.mode,d=this.state.formData.rating,p=!1;"manual"!==u&&"inherit"!==u||(t=!0,"manual"!==u&&(p=!0));var f,g=[{value:"super",name:XE.Lang.trans("xe::memberRatingAdministrator")},{value:"manager",name:XE.Lang.trans("xe::memberRatingManager")},{value:"member",name:XE.Lang.trans("xe::member")},{value:"guest",name:XE.Lang.trans("xe::guest")}],b=g.map(function(t,n){return t.value==d?r.default.createElement(c.default,{data:t,name:a,isChecked:!0,controlDisabled:p,key:n,onChangeRadio:e.inputChange.bind(null,"rating")}):r.default.createElement(c.default,{data:t,name:a,isChecked:!1,controlDisabled:p,key:n,onChangeRadio:e.inputChange.bind(null,"rating")})}),y=this.props.vgroupAll.length<1?null:this.props.vgroupAll.map(function(e){var t={type:"checkbox",disabled:p,name:o,value:e.id,key:e.id};return-1!=function(e,t){for(var n=0;n<t.length;n++)if(t[n]==e)return n;return-1}(e.id,this.props.permission.vgroup)&&(t.defaultChecked=!0),r.default.createElement("label",null,r.default.createElement("input",t)," ",e.title,"  ")}.bind(this)),E=this.state.includeGroups.map(function(e){return e.id}),v=this.state.includeMembers.map(function(e){return e.id}),M=this.state.excludeMembers.map(function(e){return e.id});return t&&(f=r.default.createElement("div",{className:"form-group"},r.default.createElement("div",{className:"checkbox"},r.default.createElement("label",null,r.default.createElement("input",{type:"checkbox",name:n,value:"inherit",onChange:this.modeChange,checked:"inherit"===u})," ",XE.Lang.trans("xe::inheritMode"))))),r.default.createElement("div",null,f,r.default.createElement("div",{className:"form-group"},r.default.createElement("label",null,XE.Lang.trans("xe::memberRating")),r.default.createElement("div",{className:"radio"},b)),r.default.createElement("div",{className:"form-group"},r.default.createElement("label",null,XE.Lang.trans("xe::includeUserOrGroup")),r.default.createElement(h.default,{selectedGroup:this.state.includeGroups,selectedMember:this.state.includeMembers,searchMemberUrl:this.props.memberSearchUrl,searchGroupUrl:this.props.groupSearchUrl,disabled:p,handleGroupDelete:this.handleIncludeGroupDelete,handleMemberDelete:this.handleIncludeMemberDelete,handleAddition:this.handleIncludeAddition}),r.default.createElement("input",{type:"hidden",name:s,className:"form-control",value:E}),r.default.createElement("input",{type:"hidden",name:i,className:"form-control",value:v})),function(){if(y)return r.default.createElement("div",{className:"form-group"},r.default.createElement("label",null,XE.Lang.trans("xe::includeVGroup")),y)}.call(this),r.default.createElement("div",{className:"form-group"},r.default.createElement("label",null,XE.Lang.trans("xe::excludeUser")),r.default.createElement(m.default,{selectedMember:this.state.excludeMembers,searchMemberUrl:this.props.memberSearchUrl,disabled:p,handleDelete:this.handleExcludeMemberDelete,handleAddition:this.handleExcludeAddition}),r.default.createElement("input",{type:"hidden",name:l,className:"form-control",value:M})))}})}},[335]);