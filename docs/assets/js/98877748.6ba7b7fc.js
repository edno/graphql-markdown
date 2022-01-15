"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[8907],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=d(n),p=a,m=h["".concat(c,".").concat(p)]||h[p]||u[p]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7495:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return h}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"save-thread",title:"SaveThread"},c=void 0,d={unversionedId:"schema/mutations/save-thread",id:"schema/mutations/save-thread",title:"SaveThread",description:"Create or update a forum thread",source:"@site/docs/schema/mutations/save-thread.mdx",sourceDirName:"schema/mutations",slug:"/schema/mutations/save-thread",permalink:"/graphql-markdown/schema/mutations/save-thread",tags:[],version:"current",frontMatter:{id:"save-thread",title:"SaveThread"},sidebar:"basic",previous:{title:"SaveThreadComment",permalink:"/graphql-markdown/schema/mutations/save-thread-comment"},next:{title:"ToggleActivitySubscription",permalink:"/graphql-markdown/schema/mutations/toggle-activity-subscription"}},s=[{value:"Arguments",id:"arguments",children:[{value:"<code>id</code> (Int)",id:"id-int",children:[],level:4},{value:"<code>title</code> (String)",id:"title-string",children:[],level:4},{value:"<code>body</code> (String)",id:"body-string",children:[],level:4},{value:"<code>categories</code> (Int)",id:"categories-int",children:[],level:4},{value:"<code>mediaCategories</code> (Int)",id:"mediacategories-int",children:[],level:4},{value:"<code>sticky</code> (Boolean)",id:"sticky-boolean",children:[],level:4},{value:"<code>locked</code> (Boolean)",id:"locked-boolean",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"Thread",id:"thread",children:[],level:4}],level:3}],u={toc:s};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Create or update a forum thread"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"SaveThread(\n  id: Int\n  title: String\n  body: String\n  categories: [Int]\n  mediaCategories: [Int]\n  sticky: Boolean\n  locked: Boolean\n): Thread\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The thread id, required for updating"),(0,i.kt)("h4",{id:"title-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"title")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The title of the thread"),(0,i.kt)("h4",{id:"body-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"body")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The main text body of the thread"),(0,i.kt)("h4",{id:"categories-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"categories")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Forum categories the thread should be within"),(0,i.kt)("h4",{id:"mediacategories-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"mediaCategories")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Media related to the contents of the thread"),(0,i.kt)("h4",{id:"sticky-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"sticky")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the thread should be stickied. (Mod Only)"),(0,i.kt)("h4",{id:"locked-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"locked")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the thread should be locked. (Mod Only)"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"thread"},(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/thread"},(0,i.kt)("inlineCode",{parentName:"a"},"Thread"))),(0,i.kt)("p",null,"Forum Thread"))}h.isMDXComponent=!0}}]);