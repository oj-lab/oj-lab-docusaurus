"use strict";(self.webpackChunkoj_lab_docusaurus=self.webpackChunkoj_lab_docusaurus||[]).push([[9042],{8356:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var o=t(4848),a=t(8453);const c={},s="Swag API Document Generation",r={id:"development/backend/swag-doc-gen",title:"Swag API Document Generation",description:"OJ Lab use swag to generate Rest API document.",source:"@site/docs/development/backend/swag-doc-gen.md",sourceDirName:"development/backend",slug:"/development/backend/swag-doc-gen",permalink:"/docusaurus/docs/development/backend/swag-doc-gen",draft:!1,unlisted:!1,editUrl:"https://github.com/OJ-lab/docusaurus/tree/main/docs/development/backend/swag-doc-gen.md",tags:[],version:"current",frontMatter:{},sidebar:"developmentSidebar",previous:{title:"Form of API",permalink:"/docusaurus/docs/development/backend/form-of-api"},next:{title:"Frontend",permalink:"/docusaurus/docs/category/frontend"}},i={},d=[{value:"Issue tracking",id:"issue-tracking",level:2},{value:"Can not referencing object in other package",id:"can-not-referencing-object-in-other-package",level:3}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"swag-api-document-generation",children:"Swag API Document Generation"}),"\n",(0,o.jsxs)(n.p,{children:["OJ Lab use ",(0,o.jsx)(n.a,{href:"https://github.com/swaggo/swag",children:"swag"})," to generate Rest API document."]}),"\n",(0,o.jsx)(n.h2,{id:"issue-tracking",children:"Issue tracking"}),"\n",(0,o.jsx)(n.h3,{id:"can-not-referencing-object-in-other-package",children:"Can not referencing object in other package"}),"\n",(0,o.jsx)(n.p,{children:"Check the generate command of swag. You may need to update the command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"# \ud83d\udc4e From\nswag init -d application/server -ot go -o application/server/swaggo-gen\n# \ud83d\udc4d To\nswag init -d application/server,service/model -ot go -o application/server/swaggo-gen\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Which means you might forget to add the object's package (in this case is ",(0,o.jsx)(n.code,{children:"service/model"}),") to the ",(0,o.jsx)(n.code,{children:"-d"})," option."]})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(6540);const a={},c=o.createContext(a);function s(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);