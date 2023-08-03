"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[5847],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=l,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},11878:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),o=["components"],i={},p="Installing Neo-CLI",u={unversionedId:"n3/node/cli/setup",id:"n3/node/cli/setup",isDocsHomePage:!1,title:"Installing Neo-CLI",description:"You can choose one of the following ways to install Neo-CLI:",source:"@site/docs/n3/node/cli/setup.md",sourceDirName:"n3/node/cli",slug:"/n3/node/cli/setup",permalink:"/StreamAI/docs/n3/node/cli/setup",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/node/cli/setup.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Configuring and Starting Neo-CLI",permalink:"/StreamAI/docs/n3/node/cli/config"},next:{title:"Installing Neo-GUI",permalink:"/StreamAI/docs/n3/node/gui/install"}},s=[{value:"Hardware requirements",id:"hardware-requirements",children:[]},{value:"Installing Neo-CLI package",id:"installing-neo-cli-package",children:[]},{value:"Publishing from Neo-CLI source code",id:"publishing-from-neo-cli-source-code",children:[{value:"Installing required files",id:"installing-required-files",children:[]},{value:"Publishing using Visual Studio (Windows)",id:"publishing-using-visual-studio-windows",children:[]},{value:"Publishing using command line (Windows/Linux/macOS)",id:"publishing-using-command-line-windowslinuxmacos",children:[]}]}],d={toc:s};function c(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installing-neo-cli"},"Installing Neo-CLI"),(0,a.kt)("p",null,"You can choose one of the following ways to install Neo-CLI:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install the official Neo-CLI released package"),(0,a.kt)("li",{parentName:"ul"},"or publish Neo-CLI source code from GitHub into an executable file. If you use macOS, this way is highly recommended.")),(0,a.kt)("p",null,"This document will describe both ways."),(0,a.kt)("h2",{id:"hardware-requirements"},"Hardware requirements"),(0,a.kt)("p",null,"The following table lists the minimum and recommended hardware requirements for the computer running Neo-CLI."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Minimum"),(0,a.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System"),(0,a.kt)("td",{parentName:"tr",align:null},"Windows 10",(0,a.kt)("br",null),"Ubuntu 16.04/18.04",(0,a.kt)("br",null),"CentOS 7.4/7.6"),(0,a.kt)("td",{parentName:"tr",align:null},"Windows 10",(0,a.kt)("br",null),"Ubuntu 16.04/18.04",(0,a.kt)("br",null),"CentOS 7.4/7.6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CPU"),(0,a.kt)("td",{parentName:"tr",align:null},"Dual core"),(0,a.kt)("td",{parentName:"tr",align:null},"Quad core")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Memory"),(0,a.kt)("td",{parentName:"tr",align:null},"8G"),(0,a.kt)("td",{parentName:"tr",align:null},"16G")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hard Disk"),(0,a.kt)("td",{parentName:"tr",align:null},"50G SSD hard drive"),(0,a.kt)("td",{parentName:"tr",align:null},"100G SSD hard drive")))),(0,a.kt)("h2",{id:"installing-neo-cli-package"},"Installing Neo-CLI package"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the latest ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neo-project/neo-cli/releases"},"Neo-CLI")," package according to your operating system on Github and unzip it.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On Linux, install the LevelDB and SQLite3 dev packages. "),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Ubuntu:")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"sudo apt-get install libleveldb-dev sqlite3 libsqlite3-dev libunwind8-dev\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"CentOS:")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"sudo wget http://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm\nsudo yum -y install epel-release-latest-7.noarch.rpm\nsudo yum  -y install leveldb-devel libunwind-devel libsqlite3x-devel sqlite3*\n")),(0,a.kt)("p",{parentName:"li"},"If you use RocksDB as the storage, modify config.json, as shown below\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'"Storage": {\n   "Engine": "RocksDBStore"\n },\n')),(0,a.kt)("p",{parentName:"li"},"and then enter the following command on ubuntu 18.04\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"sudo apt-get install librocksdb-dev\n")),(0,a.kt)("p",{parentName:"li"},"If using Windows, you can skip this step as those files are already included in the installation package."))),(0,a.kt)("h2",{id:"publishing-from-neo-cli-source-code"},"Publishing from Neo-CLI source code"),(0,a.kt)("p",null,"You can download and compile the Neo-CLI source directly from Github."),(0,a.kt)("h3",{id:"installing-required-files"},"Installing required files"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Git clone Neo-CLI source code from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neo-project/neo-node"},"Github")," or using the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ git clone https://github.com/neo-project/neo-node.git\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neo-ngd/leveldb/releases"},"LevelDB")," and unzip the package for later use.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the latest version of  ",(0,a.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/download/dotnet-core/current/runtime"},".NET Core Runtime")))),(0,a.kt)("h3",{id:"publishing-using-visual-studio-windows"},"Publishing using Visual Studio (Windows)"),(0,a.kt)("p",null,"If you has Visual Studio 2019 installed on your Windows system, this way is recommended:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In Visual Studio, open the project file neo-node.sln."),(0,a.kt)("li",{parentName:"ol"},"In the Solution panel, right click ",(0,a.kt)("inlineCode",{parentName:"li"},"neo-cli")," and select ",(0,a.kt)("inlineCode",{parentName:"li"},"Publish"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to the directory where the compiled files are outputted and copy the libleveldb.dll downloaded before to here.")),(0,a.kt)("h3",{id:"publishing-using-command-line-windowslinuxmacos"},"Publishing using command line (Windows/Linux/macOS)"),(0,a.kt)("p",null,"You can also use .NET Core CLI to pubish the project. For more information refer to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/dotnet/core/tools/dotnet-publish"},"dotnet publish"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the following command in the command line:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"cd neo-node\\neo-cli\ndotnet restore\ndotnet publish -c release -r <RUNTIME_IDENTIFIER>\n")),(0,a.kt)("p",{parentName:"li"},"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"<RUNTIME_IDENTIFIER>")," should be replaced by the related ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/dotnet/core/rid-catalog"},"system platform RID"),", e.g.  ",(0,a.kt)("inlineCode",{parentName:"p"},"win-x64"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"linux-x64"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"osx-x64"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the directory where the compiled files are outputted and copy the libleveldb.dll downloaded before to here."))))}c.isMDXComponent=!0}}]);