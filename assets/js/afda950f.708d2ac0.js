"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[8543],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,c(c({ref:t},l),{},{components:n})):r.createElement(d,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40199:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={},p="ContractManagement.Destroy Method",s={unversionedId:"n3/reference/scapi/framework/native/ContractManagement/Destroy",id:"n3/reference/scapi/framework/native/ContractManagement/Destroy",isDocsHomePage:!1,title:"ContractManagement.Destroy Method",description:"Destroies the contract.",source:"@site/docs/n3/reference/scapi/framework/native/ContractManagement/Destroy.md",sourceDirName:"n3/reference/scapi/framework/native/ContractManagement",slug:"/n3/reference/scapi/framework/native/ContractManagement/Destroy",permalink:"/StreamAI/docs/n3/reference/scapi/framework/native/ContractManagement/Destroy",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/reference/scapi/framework/native/ContractManagement/Destroy.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"ContractManagement.Deploy Method",permalink:"/StreamAI/docs/n3/reference/scapi/framework/native/ContractManagement/Deploy"},next:{title:"ContractManagement.GetContract Method",permalink:"/StreamAI/docs/n3/reference/scapi/framework/native/ContractManagement/GetContract"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Example",id:"example",children:[]}],m={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contractmanagementdestroy-method"},"ContractManagement.Destroy Method"),(0,o.kt)("p",null,"Destroies the contract."),(0,o.kt)("p",null,"Namespace: ",(0,o.kt)("a",{parentName:"p",href:"/StreamAI/docs/n3/reference/scapi/framework/native"},"Neo.SmartContract.Framework.Native")),(0,o.kt)("p",null,"Assembly: Neo.SmartContract.Framework"),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"public static extern void Destroy();\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'public class Contract1 : SmartContract.Framework.SmartContract\n{\n    private static readonly UInt160 Owner = "NXsG3zwpwcfvBiA3bNMx6mWZGEro9ZqTqM".ToScriptHash();\n\n    public static void Destroy()\n    {\n        if (!Runtime.CheckWitness(Owner)) throw new Exception("No authorization.");\n        ContractManagement.Destroy();\n    }\n}\n')),(0,o.kt)("p",null,"Response body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[{"type":"Any"}]\n')),(0,o.kt)("p",null,"Response description:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Void type: the contract was destroyed successfully.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Other: failed."))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/StreamAI/docs/n3/reference/scapi/framework/native/ContractManagement"},"back")))}u.isMDXComponent=!0}}]);