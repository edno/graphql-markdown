"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[5156],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7551:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"text-activity",title:"TextActivity"},c=void 0,s={unversionedId:"schema/objects/text-activity",id:"schema/objects/text-activity",isDocsHomePage:!1,title:"TextActivity",description:"User text activity",source:"@site/docs/schema/objects/text-activity.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/text-activity",permalink:"/graphql-markdown/schema/objects/text-activity",tags:[],version:"current",frontMatter:{id:"text-activity",title:"TextActivity"},sidebar:"schemaSidebar",previous:{title:"TagStats",permalink:"/graphql-markdown/schema/objects/tag-stats"},next:{title:"ThreadCategory",permalink:"/graphql-markdown/schema/objects/thread-category"}},p=[{value:"Fields",id:"fields",children:[]}],h={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"User text activity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type TextActivity {\n  id: Int!\n  userId: Int\n  type: ActivityType\n  replyCount: Int!\n  text(asHtml: Boolean): String\n  siteUrl: String\n  isLocked: Boolean\n  isSubscribed: Boolean\n  likeCount: Int!\n  isLiked: Boolean\n  createdAt: Int!\n  user: User\n  replies: [ActivityReply]\n  likes: [User]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The id of the activity"),(0,i.kt)("h4",{id:"userid-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"userId")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The user id of the activity's creator"),(0,i.kt)("h4",{id:"type-activitytype"},(0,i.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/activity-type"},(0,i.kt)("inlineCode",{parentName:"a"},"ActivityType")),")"),(0,i.kt)("p",null,"The type of activity"),(0,i.kt)("h4",{id:"replycount-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"replyCount")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The number of activity replies"),(0,i.kt)("h4",{id:"text-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"text")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The status text (Markdown)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"ashtml-boolean"},(0,i.kt)("inlineCode",{parentName:"h5"},"asHtml")," (",(0,i.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,i.kt)("p",null,"Return the string in pre-parsed html instead of markdown"),(0,i.kt)("h4",{id:"siteurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"siteUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The url for the activity page on the AniList website"),(0,i.kt)("h4",{id:"islocked-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isLocked")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the activity is locked and can receive replies"),(0,i.kt)("h4",{id:"issubscribed-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isSubscribed")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the currently authenticated user is subscribed to the activity"),(0,i.kt)("h4",{id:"likecount-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"likeCount")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The amount of likes the activity has"),(0,i.kt)("h4",{id:"isliked-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isLiked")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the currently authenticated user liked the activity"),(0,i.kt)("h4",{id:"createdat-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The time the activity was created at"),(0,i.kt)("h4",{id:"user-user"},(0,i.kt)("inlineCode",{parentName:"h4"},"user")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,i.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,i.kt)("p",null,"The user who created the activity"),(0,i.kt)("h4",{id:"replies-activityreply"},(0,i.kt)("inlineCode",{parentName:"h4"},"replies")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/activity-reply"},(0,i.kt)("inlineCode",{parentName:"a"},"[ActivityReply]")),")"),(0,i.kt)("p",null,"The written replies to the activity"),(0,i.kt)("h4",{id:"likes-user"},(0,i.kt)("inlineCode",{parentName:"h4"},"likes")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,i.kt)("inlineCode",{parentName:"a"},"[User]")),")"),(0,i.kt)("p",null,"The users who liked the activity"))}u.isMDXComponent=!0}}]);