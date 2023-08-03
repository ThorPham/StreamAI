"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[9244],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},92523:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],c={sidebar_label:"Neo Virtual Machine (NVM)",sidebar_position:8},s="NeoVM",l={unversionedId:"n3/foundation/neovm",id:"n3/foundation/neovm",isDocsHomePage:!1,title:"NeoVM",description:"Introduction",source:"@site/docs/n3/foundation/neovm.md",sourceDirName:"n3/foundation",slug:"/n3/foundation/neovm",permalink:"/StreamAI/docs/n3/foundation/neovm",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/foundation/neovm.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_label:"Neo Virtual Machine (NVM)",sidebar_position:8},sidebar:"docs",previous:{title:"Consensus Nodes Election",permalink:"/StreamAI/docs/n3/foundation/consensus/vote_validator"},next:{title:"CLI Command Reference",permalink:"/StreamAI/docs/n3/node/cli/cli"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Infrastructure and Execution Process",id:"infrastructure-and-execution-process",children:[{value:"Infrastructure",id:"infrastructure",children:[]},{value:"Execution Process",id:"execution-process",children:[]}]}],d={toc:u};function p(e){var t=e.components,c=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"neovm"},"NeoVM"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"NeoVM is a lightweight virtual machine for executing NEO smart contracts. As the core component of NEO, NeoVM has Turing completeness and high consistency, which can implement arbitrary execution logic and ensure consistent execution results of any node in distributed network, providing strong support for decentralized applications. "),(0,i.kt)("p",null,"With the help of NeoCompiler, source code written in Java, C# or other high-level languages can be compiled into a unified NeoVM instruction set, thus achieving cross-platform. Also, it lowers the development threshold for enabling smart contract developers to participate in the application development in Neo ecosystem without learning a new development language. "),(0,i.kt)("p",null,"In addition, NeoVM is highly decoupled from the upper-level code and customizable by using techniques such as interop services. NeoVM can be used by simply creating an instance, incredibly easy to use, and can be applied to various blockchain and non-blockchain scenarios.  "),(0,i.kt)("h2",{id:"infrastructure-and-execution-process"},"Infrastructure and Execution Process"),(0,i.kt)("h3",{id:"infrastructure"},"Infrastructure"),(0,i.kt)("p",null,"The NeoVM architecture is mainly composed of the execution engine, stack, and interoperation service layer. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(15951).Z})),(0,i.kt)("h4",{id:"executionengine"},"ExecutionEngine"),(0,i.kt)("p",null,"ExecutionEngine is the core of NeoVM, mainly responsible for loading scripts and executing corresponding instructions, such as flow control, stack operation, bit operation, arithmetic operation, logical operation, cryptography, etc. It can also interact with external data by interoperable service layer through system call. "),(0,i.kt)("h4",{id:"stack"},"Stack"),(0,i.kt)("p",null,"NeoVM is a stack-based virtual machine. NeoVM has three types of stack: InvocationStack, EvaluationStack,  and ResultStack.  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"InvocationStack is used to store all execution contexts of current NeoVM, which are isolated from each other in the stack. Context switching is performed based on the current context and entry context. The current context points to the top element of invocation stack, which is ExecutionContext0 in the architecture figure. And the entry context points to the tail element of invocation stack, which is ExecutionContextN in the architecture figure."),(0,i.kt)("li",{parentName:"ul"},"EvaluationStack is for storing the data used by the instruction in execution process. Each execution context has its own evaluation stack."),(0,i.kt)("li",{parentName:"ul"},"ResultStack is used to store execution result after all scripts are executed. ")),(0,i.kt)("h4",{id:"interoperation-service-layer"},"Interoperation Service Layer"),(0,i.kt)("p",null,"Interoperation service layer is a bridge between VM and external data. By invoking interoperation interfaces, NeoVM can access the block information, transaction information, contract information, asset information and other data required for the execution of smart contracts. "),(0,i.kt)("p",null,"Each Neo smart contract can choose whether to enable a private storage area, which stores data in key-value format. With the help of interoperation service layer, NeoVM can dynamically modify the corresponding data in storage area when executing the smart contract. "),(0,i.kt)("p",null,"Besides, interoperation service layer provides encryption algorithms, zero-knowledge proof, network resource access, etc., to meet the needs of developers to build advanced applications. "),(0,i.kt)("p",null,"In addition, the interoperation service layer also supports custom extensions and modifications to meet the customization needs of developers.  "),(0,i.kt)("h3",{id:"execution-process"},"Execution Process"),(0,i.kt)("p",null,"NEO supports multi-language smart contract development. NeoCompiler compiles multi-language smart contracts into unified nvm bytecode files, which are then decoded and executed by NeoVM. Cross-platform compatibility are achieved with multi-language compliers and virtual machines. "),(0,i.kt)("p",null,"A complete execution process is as follows: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Compiling the source code of smart contracts into unified bytecode files by corresponding compilers."),(0,i.kt)("li",{parentName:"ol"},"Execution engine of NeoVM loads the bytecode file, and then constructs the bytecodes together with the related parameters in the file as an execution context and finally pushes it into invocation stack."),(0,i.kt)("li",{parentName:"ol"},"Each time execution engine takes an instruction from current context, and then executes corresponding operations according to the instruction. The data generated in execution process will be stored in the evaluation stack and alt stack of current context. "),(0,i.kt)("li",{parentName:"ol"},"For accessing external data, encrypting data, zero-knowledge proof and other operations, the interoperation interfaces will be invoked."),(0,i.kt)("li",{parentName:"ol"},"After all scripts are executed, the result will be stored in the result stack.")))}p.isMDXComponent=!0},15951:function(e,t,n){t.Z=n.p+"assets/images/neovm-0d1dd092ce06f968de9dd4027147b03c.png"}}]);