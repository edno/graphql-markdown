"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[852],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),y=i,d=m["".concat(l,".").concat(y)]||m[y]||p[y]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2355:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={id:"likeable-union",title:"LikeableUnion"},l=void 0,s={unversionedId:"schema/unions/likeable-union",id:"schema/unions/likeable-union",isDocsHomePage:!1,title:"LikeableUnion",description:"Likeable union type",source:"@site/docs/schema/unions/likeable-union.mdx",sourceDirName:"schema/unions",slug:"/schema/unions/likeable-union",permalink:"/graphql-markdown/schema/unions/likeable-union",tags:[],version:"current",frontMatter:{id:"likeable-union",title:"LikeableUnion"},sidebar:"schemaSidebar",previous:{title:"ActivityUnion",permalink:"/graphql-markdown/schema/unions/activity-union"},next:{title:"NotificationUnion",permalink:"/graphql-markdown/schema/unions/notification-union"}},u=[{value:"Possible types",id:"possible-types",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Likeable union type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"union LikeableUnion =\n    ListActivity\n  | TextActivity\n  | MessageActivity\n  | ActivityReply\n  | Thread\n  | ThreadComment\n")),(0,a.kt)("h3",{id:"possible-types"},"Possible types"),(0,a.kt)("h4",{id:"listactivity"},(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/list-activity"},(0,a.kt)("inlineCode",{parentName:"a"},"ListActivity"))),(0,a.kt)("p",null,"User list activity (anime & manga updates)"),(0,a.kt)("h4",{id:"textactivity"},(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/text-activity"},(0,a.kt)("inlineCode",{parentName:"a"},"TextActivity"))),(0,a.kt)("p",null,"User text activity"),(0,a.kt)("h4",{id:"messageactivity"},(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/message-activity"},(0,a.kt)("inlineCode",{parentName:"a"},"MessageActivity"))),(0,a.kt)("p",null,"User message activity"),(0,a.kt)("h4",{id:"activityreply"},(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/activity-reply"},(0,a.kt)("inlineCode",{parentName:"a"},"ActivityReply"))),(0,a.kt)("p",null,"Replay to an activity item"),(0,a.kt)("h4",{id:"thread"},(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/thread"},(0,a.kt)("inlineCode",{parentName:"a"},"Thread"))),(0,a.kt)("p",null,"Forum Thread"),(0,a.kt)("h4",{id:"threadcomment"},(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/thread-comment"},(0,a.kt)("inlineCode",{parentName:"a"},"ThreadComment"))),(0,a.kt)("p",null,"Forum Thread Comment"))}m.isMDXComponent=!0}}]);