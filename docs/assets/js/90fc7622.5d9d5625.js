"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[352],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),h=u(n),p=a,d=h["".concat(c,".").concat(p)]||h[p]||l[p]||i;return n?r.createElement(d,s(s({ref:t},m),{},{components:n})):r.createElement(d,s({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8419:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return h}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],o={id:"character-submission",title:"CharacterSubmission"},c=void 0,u={unversionedId:"schema/objects/character-submission",id:"schema/objects/character-submission",isDocsHomePage:!1,title:"CharacterSubmission",description:"A submission for a character that features in an anime or manga",source:"@site/docs/schema/objects/character-submission.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/character-submission",permalink:"/graphql-markdown/schema/objects/character-submission",tags:[],version:"current",frontMatter:{id:"character-submission",title:"CharacterSubmission"},sidebar:"schemaSidebar",previous:{title:"CharacterSubmissionEdge",permalink:"/graphql-markdown/schema/objects/character-submission-edge"},next:{title:"Character",permalink:"/graphql-markdown/schema/objects/character"}},m=[{value:"Fields",id:"fields",children:[]}],l={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A submission for a character that features in an anime or manga"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type CharacterSubmission {\n  id: Int!\n  character: Character\n  submission: Character\n  submitter: User\n  assignee: User\n  status: SubmissionStatus\n  notes: String\n  source: String\n  locked: Boolean\n  createdAt: Int\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The id of the submission"),(0,i.kt)("h4",{id:"character-character"},(0,i.kt)("inlineCode",{parentName:"h4"},"character")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/character"},(0,i.kt)("inlineCode",{parentName:"a"},"Character")),")"),(0,i.kt)("p",null,"Character that the submission is referencing"),(0,i.kt)("h4",{id:"submission-character"},(0,i.kt)("inlineCode",{parentName:"h4"},"submission")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/character"},(0,i.kt)("inlineCode",{parentName:"a"},"Character")),")"),(0,i.kt)("p",null,"The character submission changes"),(0,i.kt)("h4",{id:"submitter-user"},(0,i.kt)("inlineCode",{parentName:"h4"},"submitter")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,i.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,i.kt)("p",null,"Submitter for the submission"),(0,i.kt)("h4",{id:"assignee-user"},(0,i.kt)("inlineCode",{parentName:"h4"},"assignee")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,i.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,i.kt)("p",null,"Data Mod assigned to handle the submission"),(0,i.kt)("h4",{id:"status-submissionstatus"},(0,i.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/submission-status"},(0,i.kt)("inlineCode",{parentName:"a"},"SubmissionStatus")),")"),(0,i.kt)("p",null,"Status of the submission"),(0,i.kt)("h4",{id:"notes-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"notes")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Inner details of submission status"),(0,i.kt)("h4",{id:"source-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"source")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"locked-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"locked")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"Whether the submission is locked"),(0,i.kt)("h4",{id:"createdat-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))}h.isMDXComponent=!0}}]);