"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[6979],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},99725:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return d},toc:function(){return u},default:function(){return m}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],l={title:"Real-world Smart Contracts: Building and deploying a Simple Domain Registrar",description:"This tutorial will walk you through the process of creating real-world Neo Smart Contract using the Neo Blockchain toolkit. We will build a blockchain-based domain registration system.",author:"ngdenterprise",tags:["NEOEXPRESS","SMART CONTRACT"],skill:"beginner",image:"./assets/cover.png",sidebar:!0},s="Real-world Smart Contracts: Building and deploying a Simple Domain Registrar",c={permalink:"/StreamAI/tutorials/2021/05/27/simple-domain-registrar",source:"@site/tutorials/2021-05-27-simple-domain-registrar/index.md",title:"Real-world Smart Contracts: Building and deploying a Simple Domain Registrar",description:"This tutorial will walk you through the process of creating real-world Neo Smart Contract using the Neo Blockchain toolkit. We will build a blockchain-based domain registration system.",date:"2021-05-27T00:00:00.000Z",formattedDate:"May 27, 2021",tags:[{label:"NEOEXPRESS",permalink:"/StreamAI/tutorials/tags/neoexpress"},{label:"SMART CONTRACT",permalink:"/StreamAI/tutorials/tags/smart-contract"}],readingTime:15.23,truncated:!1,authors:[{name:"ngdenterprise"}],prevItem:{title:"Getting Started with the Neo Blockchain Toolkit",permalink:"/StreamAI/tutorials/2021/05/27/getting-started-with-the-neo-blockchain-toolkit"},nextItem:{title:"A complete guide to write smart contract with Go on Neo",permalink:"/StreamAI/tutorials/2021/05/18/neo-go-workshop"}},d={image:n(41247).Z,authorsImageUrls:[void 0]},u=[{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Create a private blockchain",id:"create-a-private-blockchain",children:[]},{value:"Create a wallet",id:"create-a-wallet",children:[]},{value:"Meet Alice and Bob",id:"meet-alice-and-bob",children:[]},{value:"Create a contract",id:"create-a-contract",children:[]},{value:"Domain registration interface",id:"domain-registration-interface",children:[]},{value:"Helper methods",id:"helper-methods",children:[]},{value:"Domain name lookup",id:"domain-name-lookup",children:[]},{value:"Domain name registration",id:"domain-name-registration",children:[]},{value:"Domain name transfer",id:"domain-name-transfer",children:[]},{value:"Domain name deletion",id:"domain-name-deletion",children:[]},{value:"Contract deployment",id:"contract-deployment",children:[]},{value:"Registering a domain",id:"registering-a-domain",children:[]},{value:"Transferring a domain",id:"transferring-a-domain",children:[]},{value:"Deleting a domain",id:"deleting-a-domain",children:[]},{value:"Exercise for the reader",id:"exercise-for-the-reader",children:[]},{value:"Source code listing",id:"source-code-listing",children:[]}],p={toc:u};function m(e){var t=e.components,l=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You are currently viewing the command-line version of this tutorial. More comfortable using a graphical user-interface? ",(0,i.kt)("a",{parentName:"p",href:"./tutorial1-ui.html"},"Click here for a UI version of this tutorial"),"."),(0,i.kt)("p",null,"This tutorial was inspired by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ngdenterprise/neo-fungible-token-sample"},"Neo N3 Fungible Token Sample Contract")," project."),(0,i.kt)("p",null,"This tutorial will walk you through the process of creating real-world Neo Smart Contract using the Neo Blockchain toolkit. We will build a blockchain-based domain registration system."),(0,i.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("p",null,"You will need the following software to follow along with this tutorial:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},".NET SDK 5.0")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/download"},"https://dotnet.microsoft.com/download"),(0,i.kt)("br",{parentName:"li"}),"We\u2019ll write the smart contract code using the C# programming language. The .NET SDK is required to compile the C# code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Visual Studio Code")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/download"},"https://code.visualstudio.com/download"),(0,i.kt)("br",{parentName:"li"}),"This is a very popular code editor; the Neo Blockchain Toolkit builds on top of VS Code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Neo Blockchain Toolkit Visual Studio Code extension")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ngd-seattle.neo-blockchain-toolkit"},"https://marketplace.visualstudio.com/items?itemName=ngd-seattle.neo-blockchain-toolkit"),(0,i.kt)("br",{parentName:"li"}),"This will add support to VS Code for visualizing Neo blockchains, running private blockchain instances and debugging Neo smart contracts.")),(0,i.kt)("p",null,"For a step-by-step walkthrough showing how to install the above pre-requisites, see: ",(0,i.kt)("a",{parentName:"p",href:"./quickstart1.html"},"Quick Start video 1"),"."),(0,i.kt)("p",null,"This 6-minute video demonstrates how to setup a new machine for N3 smart contract development."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"C# Visual Studio Code extension")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp"},"https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp"),(0,i.kt)("br",{parentName:"li"}),"This will add support to VS Code for editing and building C# source code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Neo C# smart contract compiler")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/neo-project/neo-devpack-dotnet"},"https://github.com/neo-project/neo-devpack-dotnet"),(0,i.kt)("br",{parentName:"li"}),"This tool allows you to convert compiled C# code into bytecode suitable for execution by the Neo virtual machine.")),(0,i.kt)("p",null,"For a step-by-step walkthrough showing how to install the C# VS Code extension and the Neo C# compiler, see: ",(0,i.kt)("a",{parentName:"p",href:"./quickstart4.html"},"Quick Start video 4"),"."),(0,i.kt)("p",null,"This 11-minute video demonstrates how to setup your machine to compile C# smart contracts and walks through a trivial example."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Neo Express")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/neo-project/neo-express"},"https://github.com/neo-project/neo-express"),(0,i.kt)("br",{parentName:"li"}),"This tool allows you to run a private instance of the Neo blockchain.")),(0,i.kt)("p",null,"Neo Express can be installed using the following command:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"$ dotnet tool install Neo.Express -g")),(0,i.kt)("p",null,"The .NET SDK must be installed first (see above)."),(0,i.kt)("p",null,"On Linux and MacOS systems additional dependencies are required, see ",(0,i.kt)("a",{parentName:"p",href:"./quickstart1.html"},"Quick Start video 1")," or the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/neo-project/neo-express#ubuntu-installation"},"Neo Express documentation")," for more information."),(0,i.kt)("p",null,"All of the software listed above is freely available and cross-platform (you can follow along on Windows, Mac or Linux)."),(0,i.kt)("h2",{id:"create-a-private-blockchain"},"Create a private blockchain"),(0,i.kt)("p",null,"First, we\u2019ll create a new empty folder\u2014registrar\u2014for our project. We\u2019ll store all files related to our domain registration service in this folder."),(0,i.kt)("p",null,"$ mkdir registrar\n$ cd registrar"),(0,i.kt)("p",null,"The first thing we will do is use Neo Express to create a private blockchain. This will allow us to deploy and invoke our contract while we are developing it without spending any real GAS."),(0,i.kt)("p",null,"$ neoxp create\nCreated 1 node privatenet at\n/Users/neo/registrar/default.neo-express\nNote: The private keys for the accounts in this file are are ","*","not","*"," encrypted.\nDo not use these accounts on MainNet or in any other system where security is a concern."),(0,i.kt)("p",null,"Take note of the security warning, a ",(0,i.kt)("inlineCode",{parentName:"p"},"default.neo-express")," file will have been created that contains private keys, but those keys should only be used for local testing as they are not securely stored."),(0,i.kt)("p",null,"You can now run your private blockchain:"),(0,i.kt)("p",null,"$ neoxp run"),(0,i.kt)("p",null,"In your terminal you\u2019ll see the console output from Neo Express and will notice that about once every 15 seconds a new block is added to your blockchain. If you press Ctrl+C or close the terminal, you\u2019re blockchain will stop. For now, leave Neo Express running and open a new terminal for the subsequent steps."),(0,i.kt)("h2",{id:"create-a-wallet"},"Create a wallet"),(0,i.kt)("p",null,"Next, we\u2019ll create a wallet to use with our private blockchain. This wallet will be used to deploy our smart contract to the blockchain. Initially we\u2019ll make domain registration free-of-charge so the owner won\u2019t have any involvement after initial deployment (you could imagine us later improving the contract to charge fees\u2014in NEO or GAS\u2014for domain registration though and have the owner able to redeem those fees)."),(0,i.kt)("p",null,"$ neoxp wallet create owner\nowner\nNigW5fvwHWMEzgoeasQTA6fdktXLe8tCsa\nNote: The private keys for the accounts in this wallet are ","*","not","*"," encrypted.\nDo not use these accounts on MainNet or in any other system where security is a concern."),(0,i.kt)("p",null,"We now have a wallet for the smart contract owner, but that wallet doesn\u2019t contain any assets. Deploying a smart contract to a Neo blockchain has a fee associated with it; the fee varies based on the size of the contract but is always paid in GAS."),(0,i.kt)("p",null,"Each Neo Express instance has a special wallet called \u201cgenesis\u201d that is initially given the entire supply of NEO and GAS (the two assets native to the Neo blockchain). Let\u2019s transfer some GAS from the genesis wallet to our owner wallet."),(0,i.kt)("p",null,"$ neoxp transfer 100000 GAS genesis owner\nTransfer Transaction 0x0acc8cab2dd88a3e4c73284a71edc94c77a03db62e46950ee6d42b60e22a9b9d submitted"),(0,i.kt)("h2",{id:"meet-alice-and-bob"},"Meet Alice and Bob"),(0,i.kt)("p",null,"Let\u2019s create two more wallets so that we can later experiment with registering and transferring domains. We\u2019ll call the wallets ",(0,i.kt)("inlineCode",{parentName:"p"},"alice")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"bob")," (it is convention when describing protocols to name the first two participants Alice and Bob!)"),(0,i.kt)("p",null,"The steps aliceto create the wallets are exactly the same as above\u2014when we created the owner wallet\u2014just with different wallet names. Be sure to also transfer some GAS from the ",(0,i.kt)("inlineCode",{parentName:"p"},"genesis")," wallet to Alice and Bob (as they will need some GAS to be able to invoke the registration contract that we will create)."),(0,i.kt)("p",null,"The wallets that you have created are stored inside the ",(0,i.kt)("inlineCode",{parentName:"p"},".neo-express")," configuration file. If you open the file you should now see a wallets entry that looks something like this (your keys and addresses will be different, though):"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Configuration file containing new wallets",src:n(73559).Z})),(0,i.kt)("h2",{id:"create-a-contract"},"Create a contract"),(0,i.kt)("p",null,"Now we\u2019re ready to write the code for our smart contract."),(0,i.kt)("p",null,"We\u2019ll use Visual Studio Code to write the code for our smart contract. Load a new VS Code window and open your ",(0,i.kt)("inlineCode",{parentName:"p"},"registrar")," folder. The folder will contain a single file\u2014",(0,i.kt)("inlineCode",{parentName:"p"},"default.neo-express"),"\u2014that was created by Neo Express to store your private blockchain configuration."),(0,i.kt)("p",null,"Click the N3 icon in the tool bar to open the N3 Visual DevTracker:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"N3 icon",src:n(36189).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VS Code window with the registrar folder opened",src:n(83750).Z})),(0,i.kt)("p",null,"Click the \u201cCreate a new contract\u201d button in the Quick Start panel:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Quick Start panel",src:n(93091).Z})),(0,i.kt)("p",null,"(Alternatively, you could select the \u201cCreate contract\u201d menu option from the context menu in the Blockchains panel.)"),(0,i.kt)("p",null,"When asked which programming language you would like to use, select ",(0,i.kt)("inlineCode",{parentName:"p"},"csharp"),"."),(0,i.kt)("p",null,"When asked for the contract name, enter ",(0,i.kt)("inlineCode",{parentName:"p"},"Registration"),". A new file called ",(0,i.kt)("inlineCode",{parentName:"p"},"RegistrationContract.cs")," will be created and opened\u2014this is our smart contract code. It has been pre-populated with some example code, but we\u2019ll shortly remove and replace most of that\u2026"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VS Code window with sample contract code opened",src:n(65911).Z})),(0,i.kt)("p",null,"You can also see in the Explorer pane in VS Code that various other files have been created:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Contract files in the File Explorer",src:n(23675).Z})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"RegistrationContract.csproj")," file is an MS Build C# project configuration file; it tells the .NET SDK tooling how to build your project."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"tasks.json")," file is a Visual Studio Code configuration file that will allow you to build your code within Visual Studio Code. VS Code will have already built the sample code and the various files produced by the build are in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Registration/bin/debug/net5.0")," folder. You can rebuild your contract after making changes by choosing the \u201cRun build task\u2026\u201d option in the \u201cTerminal\u201d menu in VS Code."),(0,i.kt)("p",null,"If you prefer to build using the command-line, you can delete the",(0,i.kt)("inlineCode",{parentName:"p"},"tasks.json")," file and instead run the ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet build")," command within the ",(0,i.kt)("inlineCode",{parentName:"p"},"Registration")," folder whenever you want to build:"),(0,i.kt)("p",null,"$ cd Registration/\n$ dotnet build\nMicrosoft (R) Build Engine version 16.8.3+39993bd9d for .NET\nCopyright (C) Microsoft Corporation. All rights reserved."),(0,i.kt)("p",null,"  Determining projects to restore...\nAll projects are up-to-date for restore.\nRegistrationContract -> /Users/neo/registrar/RegistrationContract/bin/Debug/net5.0/RegistrationContract.dll"),(0,i.kt)("p",null,"Build succeeded.\n0 Warning(s)\n0 Error(s)"),(0,i.kt)("p",null,"Time Elapsed 00:00:01.21"),(0,i.kt)("p",null,"Let\u2019s remove the sample code and fill out some contract metadata, then we\u2019ll be ready to write our own smart contract code\u2026"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"RegistrationContract.cs")," file contains a single class; it is called ",(0,i.kt)("inlineCode",{parentName:"p"},"RegistrationContract")," and extends the ",(0,i.kt)("inlineCode",{parentName:"p"},"SmartContract")," class (from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Neo.SmartContract.Framework")," package) to signify that it is a smart contract. The class has various attributes that are used to provide metadata that will be deployed to the N3 blockchain along with the contract:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'[DisplayName("YourName.RegistrationContract")]\n[ManifestExtra("Author", "Your name")]\n[ManifestExtra("Email", "[[email\xa0protected]](/cdn-cgi/l/email-protection)")]\n[ManifestExtra("Description", "Describe your contract...")]\n')),(0,i.kt)("p",null,"Let\u2019s replace these with real values\u2026"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DisplayName")," will be used to refer to your contract from within wallet software and other tools, it is common practice to provide a string consisting of an identifier for you (e.g. your GitHub ID, or company abbreviation) followed by a dot and then the contract name."),(0,i.kt)("p",null,"For the ",(0,i.kt)("inlineCode",{parentName:"p"},"ManifestExtra")," attributes, replace the example values with real information. You can also remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"OnNumberChanged")," event, the ",(0,i.kt)("inlineCode",{parentName:"p"},"MAP_NAME")," constant and the ",(0,i.kt)("inlineCode",{parentName:"p"},"ChangeNumber")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"GetNumber")," methods from the example contract:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.ComponentModel;\nusing System.Numerics;\n\nusing Neo;\nusing Neo.SmartContract.Framework;\nusing Neo.SmartContract.Framework.Native;\nusing Neo.SmartContract.Framework.Services;\n\nnamespace Registration\n{\n    [DisplayName("djnicholson.RegistrationContract")]\n    [ManifestExtra("Author", "David Nicholson")]\n    [ManifestExtra("Email", "[[email\xa0protected]](/cdn-cgi/l/email-protection)")]\n    [ManifestExtra("Description", "A domain registration service for Neo blockchains")]\n    public class RegistrationContract : SmartContract\n    {\n    }\n}\n')),(0,i.kt)("p",null,"You can rebuild your contract now to verify that it still builds. Our contract doesn\u2019t do anything useful yet, though; next we\u2019ll code various methods to make it a fully functional domain registration service!"),(0,i.kt)("h2",{id:"domain-registration-interface"},"Domain registration interface"),(0,i.kt)("p",null,"For this example, we\u2019ll say that a valid domain name is any non-empty string consisting only of the characters \u2018a\u2019 through \u2018z\u2019."),(0,i.kt)("p",null,"We\u2019ll support the following behaviors:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Anyone can query whether a domain name is already registered (and if so, who owns it) using a ",(0,i.kt)("inlineCode",{parentName:"li"},"Lookup")," method."),(0,i.kt)("li",{parentName:"ul"},"Any available name can be registered by calling a ",(0,i.kt)("inlineCode",{parentName:"li"},"Register")," method (signing the transaction as the intended owner of the domain)."),(0,i.kt)("li",{parentName:"ul"},"The existing owner of a domain can transfer it to someone else by invoking a ",(0,i.kt)("inlineCode",{parentName:"li"},"Transfer")," method (providing the new owner as an argument and signing the transaction as the current owner)."),(0,i.kt)("li",{parentName:"ul"},"The existing owner of a domain can delete their registration by invoking a ",(0,i.kt)("inlineCode",{parentName:"li"},"Delete")," method (signing the transaction as the current owner).")),(0,i.kt)("p",null,"We\u2019ll also emit an event whenever ownership changes for a domain name."),(0,i.kt)("h2",{id:"helper-methods"},"Helper methods"),(0,i.kt)("p",null,"First it would be useful to implement a couple of helper methods."),(0,i.kt)("p",null,"The first helper method will implement our validation logic; it will determine if an arbitrary string is a valid domain name according to our rules and throw an exception if not:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"static void Validate(string domain)\n{\n    var domainBytes = domain.ToByteArray();\n    for (int i = 0; i < domain.Length; i++)\n    {\n        if (domainBytes[i] < 'a' || domainBytes[i] > 'z')\n        {\n            throw new Exception(\"Domains must only use lowercase a-z characters\");\n        }\n    }\n\n    if (domain.Length == 0)\n    {\n        throw new Exception(\"Domains must be non-empty\");\n    }\n}\n")),(0,i.kt)("p",null,"We\u2019ll often need to know the current owner of a valid domain name, so let\u2019s also add a helper method for that. We\u2019ll use contract storage to keep track of which domain is owned by which address and will arrange for the method to return zero if a domain is unregistered."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"static UInt160 GetOwner(string domain)\n{\n    var value = Storage.Get(Storage.CurrentContext, domain);\n    if (value == null)\n    {\n        return UInt160.Zero;\n    }\n    else\n    {\n        return (UInt160) value;\n    }\n}\n")),(0,i.kt)("p",null,"We also need to declare the event that we will be emitting whenever domain name ownership changes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'[DisplayName("ChangeOwner")]\npublic static event Action<string, UInt160> OnChangeOwner;\n')),(0,i.kt)("h2",{id:"domain-name-lookup"},"Domain name lookup"),(0,i.kt)("p",null,"Our first operation will allow people to lookup the current owner of a domain name (a return value of zero will represent that the domain is currently unregistered):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public static UInt160 Lookup(string domain)\n{\n    Validate (domain);\n    return GetOwner(domain);\n}\n")),(0,i.kt)("p",null,"Note that we confirm the domain name is valid before doing any further processing; we will follow the same pattern for all of our contract operations."),(0,i.kt)("h2",{id:"domain-name-registration"},"Domain name registration"),(0,i.kt)("p",null,"Next, we need an operation to allow someone to register an available domain name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'public static void Register(string domain)\n{\n    Validate(domain);\n\n    if (!GetOwner(domain).IsZero)\n    {\n        throw new Exception("Already registered");\n    }\n\n    var tx = (Transaction) Runtime.ScriptContainer;\n    Storage.Put(Storage.CurrentContext, domain, tx.Sender);\n    OnChangeOwner(domain, tx.Sender);\n}\n')),(0,i.kt)("p",null,"Note that we first check that the domain is valid and available. We then extract the address used to sign the transaction and update the contract storage so the mapping from this domain name to this address is persisted."),(0,i.kt)("h2",{id:"domain-name-transfer"},"Domain name transfer"),(0,i.kt)("p",null,"Now we need an operation for transferring domain names:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'public static void Transfer(string domain, UInt160 to)\n{\n    Validate(domain);\n\n    var owner = GetOwner(domain);\n    if (GetOwner(domain).IsZero)\n    {\n        throw new Exception("Not registered");\n    }\n\n    if (!to.IsValid || to.IsZero)\n    {\n        throw new Exception("Invalid transferee");\n    }\n\n    if (!Runtime.CheckWitness(owner))\n    {\n        throw new Exception("Not authorized");\n    }\n    \n    Storage.Put(Storage.CurrentContext, domain, to);\n    OnChangeOwner(domain, to);\n}\n')),(0,i.kt)("p",null,"We confirm that the domain is already registered, then we make sure that the destination address is valid and the signer of the transaction is the current owner of the domain name. If all these checks pass we update our contract storage and emit our ownership change event."),(0,i.kt)("h2",{id:"domain-name-deletion"},"Domain name deletion"),(0,i.kt)("p",null,"Finally, we need an operation for domain name owners to delete their registration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'public static void Delete(string domain)\n{\n    Validate(domain);\n\n    var owner = GetOwner(domain);\n    if (owner.IsZero)\n    {\n        throw new Exception("Not registered");\n    }\n\n    if (!Runtime.CheckWitness(owner))\n    {\n        throw new Exception("Not authorized");\n    }\n\n    Storage.Delete(Storage.CurrentContext, domain);\n    OnChangeOwner(domain, UInt160.Zero);\n}\n')),(0,i.kt)("p",null,"We check that the domain is currently registered and the person it is registered to has signed the transaction; we then remove the relevant item from storage and emit our ownership change event (using an address of zero to signify that the domain has become available again)."),(0,i.kt)("p",null,"Now we\u2019re ready to deploy our contract to our private Neo blockchain!"),(0,i.kt)("h2",{id:"contract-deployment"},"Contract deployment"),(0,i.kt)("p",null,"When you build your smart contract code, one of the files emitted is",(0,i.kt)("inlineCode",{parentName:"p"},"RegistrationContract.nef"),"; this contains the N3 Virtual Machine bytecode for your contract and is required for deployment. You can deploy your contract to your private blockchain as follows:"),(0,i.kt)("p",null,"$ neoxp contract deploy Registration/bin/Debug/net5.0/RegistrationContract.nef owner\nDeployment Transaction 0xc5f6b16350427e4bf0dfa01fc939ac192df45e39e703e60cd08db5c1a37e17a5 submitted"),(0,i.kt)("p",null,"Your contract has now been deployed to your own private Neo blockchain. Next, we\u2019ll experiment with registering some domains\u2026"),(0,i.kt)("h2",{id:"registering-a-domain"},"Registering a domain"),(0,i.kt)("p",null,"Neo Express allows you to invoke any contract deployed to your private blockchain. To do so, you must provide an \u201c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ngdenterprise/design-notes/blob/master/NDX-DN12%20-%20Neo%20Express%20Invoke%20Files.md"},"invoke file"),"\u201d; an invoke file is a JSON file that specifies one or more contract methods that should be invoked."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'Create a new text file and paste the following JSON into it:\n\n[\n  {\n    "contract": "djnicholson.RegistrationContract",\n    "operation": "register",\n    "args": [ "widgets" ]\n  }\n]\n')),(0,i.kt)("p",null,"Save the file as ",(0,i.kt)("inlineCode",{parentName:"p"},"alice-registration.neo-invoke.json")," and then run the following command:"),(0,i.kt)("p",null,"$ neoxp contract invoke alice-registration.json owner\nInvocation Transaction 0xdbf3fa71a74fa0676d7513ded2e2f18ea6cf5b9f022a9b008b9b05bc36865217 submitted"),(0,i.kt)("p",null,"This command submits a transaction to your private blockchain that invokes all of the steps in the invoke file (only one step in our case) using Alice\u2019s wallet."),(0,i.kt)("p",null,"Congratulations, you just registered your first domain! ",(0,i.kt)("inlineCode",{parentName:"p"},"widgets")," is now owned by Alice!"),(0,i.kt)("h2",{id:"transferring-a-domain"},"Transferring a domain"),(0,i.kt)("p",null,"Next let\u2019s have Alice transfer the widgets domain to Bob."),(0,i.kt)("p",null,"Create a new invoke file called ",(0,i.kt)("inlineCode",{parentName:"p"},"alice-to-bob-transfer.neo-invoke.json")," and populate it as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "contract": "djnicholson.RegistrationContract",\n    "operation": "transfer",\n    "args": [ "widgets", "@bob" ]\n  }\n]\n')),(0,i.kt)("p",null,"Note that you can refer to wallet address in invoke files by prefixing the wallet name with an \u2018@\u2019 character."),(0,i.kt)("p",null,"Now run this invoke file the same was as before (again using Alice\u2019s account to submit the transaction). Now Bob own\u2019s the domain ",(0,i.kt)("inlineCode",{parentName:"p"},"widgets"),"!"),(0,i.kt)("p",null,"You can verify this by trying to run the same invoke file again and verifying that the transaction results in an error (Alice is no longer the owner so our smart contract throws an exception)."),(0,i.kt)("h2",{id:"deleting-a-domain"},"Deleting a domain"),(0,i.kt)("p",null,"Finally, let\u2019s delete the ",(0,i.kt)("inlineCode",{parentName:"p"},"widgets")," domain."),(0,i.kt)("p",null,"Create a new invoke file called ",(0,i.kt)("inlineCode",{parentName:"p"},"delete-widgets.neo-invoke.json")," and populate it as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "contract": "djnicholson.RegistrationContract",\n    "operation": "delete",\n    "args": [ "widgets" ]\n  }\n]\n')),(0,i.kt)("p",null,"Now run this invoke file the same was as before, but this time use Bob\u2019s account to submit the transaction. Now nobody own\u2019s the domain",(0,i.kt)("inlineCode",{parentName:"p"},"widgets")," and it is available for registration again!"),(0,i.kt)("h2",{id:"exercise-for-the-reader"},"Exercise for the reader"),(0,i.kt)("p",null,"Our contract allows anyone to register any domain free-of-charge (as long as they have enough GAS to pay to submit the invocation transactions). In a real-world you may want to charge fees when a user registers a domain; people could pay these fees in NEO, GAS or indeed any other NEP-17 asset."),(0,i.kt)("p",null,"As an exercise, you can modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"RegistrationContract")," to support this functionality: You can add an ",(0,i.kt)("inlineCode",{parentName:"p"},"OnPayment")," method to your contract that will be called whenever someone pays assets to the contract. The ",(0,i.kt)("inlineCode",{parentName:"p"},"OnPayment")," method provides the sender and amount of funds as arguments, you can determine what asset was paid by inspecting the ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtime.CallingScriptHash")," property provided by the runtime and you could make use of the optional ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," argument to allow the user to specify which name they would like to register. Within your ",(0,i.kt)("inlineCode",{parentName:"p"},"OnPayment")," method you can reject the transaction\u2014e.g., if the domain is unavailable or not enough funds were paid\u2014by throwing an exception."),(0,i.kt)("h2",{id:"source-code-listing"},"Source code listing"),(0,i.kt)("p",null,"Here is the complete smart contract source code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.ComponentModel;\n\nusing Neo;\nusing Neo.SmartContract.Framework;\nusing Neo.SmartContract.Framework.Native;\nusing Neo.SmartContract.Framework.Services;\n\nnamespace Registration\n{\n    [DisplayName("djnicholson.RegistrationContract")]\n    [ManifestExtra("Author", "David Nicholson")]\n    [ManifestExtra("Email", "[[email\xa0protected]](/cdn-cgi/l/email-protection)")]\n    [ManifestExtra("Description", "A domain registration service for N3 blockchains")]\n    public class RegistrationContract : SmartContract\n    {\n        [DisplayName("ChangeOwner")]\n        public static event Action<string, UInt160> OnChangeOwner;\n\n        static void Validate(string domain)\n        {\n            var domainBytes = domain.ToByteArray();\n            for (int i = 0; i < domain.Length; i++)\n            {\n                if (domainBytes[i] < \'a\' || domainBytes[i] > \'z\')\n                {\n                    throw new Exception("Domains must only use lowercase a-z characters");\n                }\n            }\n\n            if (domain.Length == 0)\n            {\n                throw new Exception("Domains must be non-empty");\n            }\n        }\n\n        static UInt160 GetOwner(string domain)\n        {\n            var value = Storage.Get(Storage.CurrentContext, domain);\n            if (value == null)\n            {\n                return UInt160.Zero;\n            }\n            else\n            {\n                return (UInt160) value;\n            }\n        }\n\n        public static UInt160 Lookup(string domain)\n        {\n            Validate (domain);\n            return GetOwner(domain);\n        }\n\n        public static void Register(string domain)\n        {\n            Validate (domain);\n\n            if (!GetOwner(domain).IsZero)\n            {\n                throw new Exception("Already registered");\n            }\n\n            var tx = (Transaction) Runtime.ScriptContainer;\n            Storage.Put(Storage.CurrentContext, domain, tx.Sender);\n            OnChangeOwner(domain, tx.Sender);\n        }\n\n        public static void Transfer(string domain, UInt160 to)\n        {\n            Validate (domain);\n\n            var owner = GetOwner(domain);\n            if (GetOwner(domain).IsZero)\n            {\n                throw new Exception("Not registered");\n            }\n\n            if (!to.IsValid || to.IsZero)\n            {\n                throw new Exception("Invalid transferee");\n            }\n\n            if (!Runtime.CheckWitness(owner))\n            {\n                throw new Exception("Not authorized");\n            }\n\n            Storage.Put(Storage.CurrentContext, domain, to);\n            OnChangeOwner (domain, to);\n        }\n\n        public static void Delete(string domain)\n        {\n            Validate (domain);\n\n            var owner = GetOwner(domain);\n            if (owner.IsZero)\n            {\n                throw new Exception("Not registered");\n            }\n\n            if (!Runtime.CheckWitness(owner))\n            {\n                throw new Exception("Not authorized");\n            }\n\n            Storage.Delete(Storage.CurrentContext, domain);\n            OnChangeOwner(domain, UInt160.Zero);\n        }\n    }\n}\n')))}m.isMDXComponent=!0},36189:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAsCAMAAAAkRNp0AAAAvVBMVEWAgIB/f39+fn59fX18fHx7e3t6enp5eXl4eHh3d3d2dnZzc3NycnJxcXFubm5tbW1sbGxra2tqampoaGhnZ2dkZGRjY2NiYmJgYGBfX19dXl1cXFxaWlpZWVlYWFhXV1dWVlZVVVVUVFRSUlJRUVFQUFBOTk5MTExLS0tKSkpISEhGRkZERERDQ0NCQkJBQUE+Pj49PTw6Ojo5OTk4ODg3Nzc2NjY0NDQzMzMyMjIxMTEwMDAuLi4tLS0sLCyxxB4FAAABOUlEQVR42u3TTXOCMBAGYEJYCFbrBxWtlrbQYq2oNRYpSTb8/59VwHF6CTM9dqbuJTk8l533Xav69VhXeqU/XyGEwvpFKZWuKo2iLAVqE42fntOilnkcr7HCchuF4UNWooH64HivtdkxN1BYzDyHUsddngwULMsac8Qt2BMpY5fCsO+Q3qqDupE80+KesYhnAwKhmYLNDqKlqA7pJxZT2kHJAmh4bGlVIcqPtE9v1kZKsxFhadbSetSI2SwujBSOCZBgRS/01qfOnJtpzie2NycN1UrJ3VtAvUUHlRuwwaopik2SY5k6xO+gKKZgNZQHbi/h+zub9Dqoxv2gpacZUHc4AMIiY7D+SWsZgdMEy8dA22BzA03ipF5cH1+aumj8el+Gs8e9RAOVQp47eClh2ZbwTx7Mlf5T+g31o5K0Zj4I0AAAAABJRU5ErkJggg=="},73559:function(e,t,n){t.Z=n.p+"assets/images/09-d9a57c5e016f3fb779344bdbde3183c1.png"},83750:function(e,t,n){t.Z=n.p+"assets/images/11-16897d4e87d313765b7379e126826534.png"},93091:function(e,t,n){t.Z=n.p+"assets/images/12-04cbf2ad25866a36c46373f1bbbe0eca.png"},65911:function(e,t,n){t.Z=n.p+"assets/images/13-4518e5521b95c1b5f0acc0d67588c75f.png"},23675:function(e,t,n){t.Z=n.p+"assets/images/15-abb87a3f11a098a97b418f74e8ccb1a2.png"},41247:function(e,t,n){t.Z=n.p+"assets/images/cover-d5815f90944b01491c250b95bf2391d6.png"}}]);