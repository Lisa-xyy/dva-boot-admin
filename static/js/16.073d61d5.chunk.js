webpackJsonp([16],{804:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return w});var c,i,u=n(17),l=(n.n(u),n(18)),f=n.n(l),s=n(119),p=(n.n(s),n(118)),y=n.n(p),b=n(0),h=n.n(b),d=n(120),m=(n.n(d),n(819)),v=n(313),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_=f.a.Content,w=(c=Object(d.connect)())(i=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),O(t,[{key:"render",value:function(){var e=this;return h.a.createElement(f.a,{className:"full-layout page column-page"},h.a.createElement(_,null,h.a.createElement(v.a,{title:"\u8bf4\u660e"},h.a.createElement("h3",null,"Column \u8bed\u6cd5"),h.a.createElement("p",null,"\u901a\u8fc7\u914d\u5236Column\u53ef\u540c\u65f6\u751f\u6210\u6211\u4eec\u9875\u9762\u4e2d\u7684\u4e09\u5927\u5757\u5143\u7d20\u3001\u641c\u7d22\u6761\uff08\u9ad8\u7ea7\u641c\u7d22\uff09\u7ec4\u4ef6\u3001\u65b0\u589e\u4fee\u6539\u7684\u8868\u5355\u7ec4\u4ef6\u3001\u5e26\u5206\u9875\u7684\u6570\u636e\u8868\u683c\u7ec4\u4ef6\u3002",h.a.createElement("a",{style:{textDecoration:"underline"},href:"https://github.com/LANIF-UI/dva-boot-admin/blob/master/docs/columns.md",target:"_blank",rel:"noopener noreferrer"},"[\u914d\u7f6e\u8bf4\u660e]")),h.a.createElement(y.a,{icon:"bulb",type:"primary",onClick:function(t){return e.history.push("/crud")}},"CRUD\u9875\u9762"))))}}]),t}(m.a))||i},819:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c,i,u=n(309),l=(n.n(u),n(310)),f=n.n(l),s=n(0),p=n.n(s),y=n(6),b=n.n(y),h=n(71),d=n.n(h),m=n(181),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),O=(i=c=function(e){function t(){var e,n,a,c;r(this,t);for(var i=arguments.length,u=Array(i),l=0;l<i;l++)u[l]=arguments[l];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.notice=m.a.notice,a.onAdd=function(){a.setState({record:null,visible:!0})},a.onUpdate=function(e){return function(){a.setState({record:e,visible:!0})}},a.onDelete=function(e){return function(){if(e&&(!d.a.isArray(e)||e.length)){var t="\u60a8\u662f\u5426\u8981\u5220\u9664\u8fd9"+(d.a.isArray(e)?e.length:"")+"\u9879\uff1f";f.a.confirm({title:"\u6ce8\u610f",content:t,onOk:function(){a.handleDelete(d.a.isArray(e)?e:[e])},onCancel:function(){}})}}},c=n,o(a,c)}return a(t,e),v(t,[{key:"handleAdd",value:function(){}},{key:"handleUpdate",value:function(){}},{key:"handleDelete",value:function(){}},{key:"history",get:function(){return this.context.router.history}}]),t}(p.a.Component),c.contextTypes={router:b.a.object},i);t.a=O}});
//# sourceMappingURL=16.073d61d5.chunk.js.map