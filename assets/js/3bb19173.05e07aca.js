"use strict";(self.webpackChunkoj_lab_docusaurus=self.webpackChunkoj_lab_docusaurus||[]).push([[867],{4788:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>r});var t=s(4848),i=s(8453);const l={sidebar_position:2,tags:["Kubernetes","Minikube","Helm","Lens","Setup Guide"]},o="K8s Setup Guide",u={id:"development/environment/k8s-setup-guide",title:"K8s Setup Guide",description:"You may need a local Kubernetes cluster to develop and test your code. This guide will help you set up a local Kubernetes cluster using Minikube.",source:"@site/docs/development/environment/k8s-setup-guide.md",sourceDirName:"development/environment",slug:"/development/environment/k8s-setup-guide",permalink:"/docusaurus/docs/development/environment/k8s-setup-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/OJ-lab/docusaurus/tree/main/docs/development/environment/k8s-setup-guide.md",tags:[{inline:!0,label:"Kubernetes",permalink:"/docusaurus/docs/tags/kubernetes"},{inline:!0,label:"Minikube",permalink:"/docusaurus/docs/tags/minikube"},{inline:!0,label:"Helm",permalink:"/docusaurus/docs/tags/helm"},{inline:!0,label:"Lens",permalink:"/docusaurus/docs/tags/lens"},{inline:!0,label:"Setup Guide",permalink:"/docusaurus/docs/tags/setup-guide"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["Kubernetes","Minikube","Helm","Lens","Setup Guide"]},sidebar:"developmentSidebar",previous:{title:"Ubuntu Setup Guide",permalink:"/docusaurus/docs/development/environment/ubuntu-setup-guide"},next:{title:"Backend",permalink:"/docusaurus/docs/category/backend"}},a={},r=[{value:"Minikube Installation",id:"minikube-installation",level:2},{value:"Helm Installation",id:"helm-installation",level:2},{value:"Lens Installation",id:"lens-installation",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"k8s-setup-guide",children:"K8s Setup Guide"}),"\n",(0,t.jsx)(n.p,{children:"You may need a local Kubernetes cluster to develop and test your code. This guide will help you set up a local Kubernetes cluster using Minikube."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"You should install the k8s environment directly in your hosting OS, not in a virtual machine or WSL."})}),"\n",(0,t.jsx)(n.h2,{id:"minikube-installation",children:"Minikube Installation"}),"\n",(0,t.jsx)(n.p,{children:"Minikube helps you easily get a local Kubernetes cluster up and running on your machine."}),"\n",(0,t.jsxs)(n.p,{children:["Follow the ",(0,t.jsx)(n.a,{href:"https://minikube.sigs.k8s.io/docs/start/",children:"Getting Started Guide"})," to install Minikube on your machine.\nBy installing Minikube, you will also install ",(0,t.jsx)(n.code,{children:"kubectl"}),", the Kubernetes command-line tool."]}),"\n",(0,t.jsx)(n.h2,{id:"helm-installation",children:"Helm Installation"}),"\n",(0,t.jsxs)(n.p,{children:["OJ Lab use Helm Chart to manage Kubernetes resources.\nYou may easily get a runnable OJ Lab cluster by using Helm.\nThe Chart is available in the ",(0,t.jsx)(n.a,{href:"https://github.com/OJ-lab/oj-lab-helm",children:"oj-lab-helm"})," repository."]}),"\n",(0,t.jsxs)(n.p,{children:["Helm is a package manager for Kubernetes that helps you define, install, and upgrade even the most complex Kubernetes applications.\nFollow the ",(0,t.jsx)(n.a,{href:"https://helm.sh/docs/intro/install/",children:"Helm Installation Guide"})," to install Helm on your machine."]}),"\n",(0,t.jsx)(n.h2,{id:"lens-installation",children:"Lens Installation"}),"\n",(0,t.jsx)(n.p,{children:"Lens is a Kubernetes IDE that helps you manage your Kubernetes clusters.\nAlthough you still edit the Chart yamls in VSCode or other editors, Lens gives you a visualized view of your cluster."}),"\n",(0,t.jsxs)(n.p,{children:["Get Lens from the ",(0,t.jsx)(n.a,{href:"https://k8slens.dev/",children:"Lens Official Site"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsx)(n.p,{children:"The official Lens is only free for personal use. If you are using Lens for commercial purposes, you should purchase a Pro license."}),(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.a,{href:"https://github.com/MuhammedKalkan/OpenLens",children:"Open Lens"})," plus ",(0,t.jsx)(n.a,{href:"https://github.com/alebcay/openlens-node-pod-menu",children:"OpenLens Node/Pod Menu Extension"})," for a totally free alternative."]})]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>u});var t=s(6540);const i={},l=t.createContext(i);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);