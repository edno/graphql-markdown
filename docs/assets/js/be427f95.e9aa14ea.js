"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[443],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||s[m]||o;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9272:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={id:"report",title:"Report"},l=void 0,d={unversionedId:"schema/objects/report",id:"schema/objects/report",title:"Report",description:"No description",source:"@site/docs/schema/objects/report.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/report",permalink:"/graphql-markdown/schema/objects/report",tags:[],version:"current",frontMatter:{id:"report",title:"Report"},sidebar:"basic",previous:{title:"RelatedMediaAdditionNotification",permalink:"/graphql-markdown/schema/objects/related-media-addition-notification"},next:{title:"ReviewConnection",permalink:"/graphql-markdown/schema/objects/review-connection"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (Int)",id:"id-int",children:[],level:4},{value:"<code>reporter</code> (User)",id:"reporter-user",children:[],level:4},{value:"<code>reported</code> (User)",id:"reported-user",children:[],level:4},{value:"<code>reason</code> (String)",id:"reason-string",children:[],level:4},{value:"<code>createdAt</code> (Int)",id:"createdat-int",children:[],level:4},{value:"<code>cleared</code> (Boolean)",id:"cleared-boolean",children:[],level:4}],level:3}],s={toc:p};function u(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Report {\n  id: Int!\n  reporter: User\n  reported: User\n  reason: String\n  createdAt: Int\n  cleared: Boolean\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"id-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("h4",{id:"reporter-user"},(0,o.kt)("inlineCode",{parentName:"h4"},"reporter")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,o.kt)("h4",{id:"reported-user"},(0,o.kt)("inlineCode",{parentName:"h4"},"reported")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,o.kt)("h4",{id:"reason-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"reason")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"createdat-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"When the entry data was created"),(0,o.kt)("h4",{id:"cleared-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"cleared")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))}u.isMDXComponent=!0}}]);