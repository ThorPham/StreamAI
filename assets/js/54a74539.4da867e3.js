"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[6462],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31736:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={},c="Smart Contract Writing Basics",l={unversionedId:"n3/develop/write/basics",id:"n3/develop/write/basics",isDocsHomePage:!1,title:"Smart Contract Writing Basics",description:"In this tutorial, you will learn the basics of developing a smart contract.",source:"@site/docs/n3/develop/write/basics.md",sourceDirName:"n3/develop/write",slug:"/n3/develop/write/basics",permalink:"/StreamAI/docs/n3/develop/write/basics",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/develop/write/basics.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Main Net and Test Net",permalink:"/StreamAI/docs/n3/develop/network/testnet"},next:{title:"Differences between Neo N3 and Neo Legacy",permalink:"/StreamAI/docs/n3/develop/write/difference"}},u=[{value:"Contract property",id:"contract-property",children:[]},{value:"Storage property",id:"storage-property",children:[]},{value:"Data type",id:"data-type",children:[]},{value:"Your first Neo contract",id:"your-first-neo-contract",children:[{value:"Contract Features",id:"contract-features",children:[]},{value:"Entry function",id:"entry-function",children:[]},{value:"Trigger",id:"trigger",children:[]},{value:"CheckWitness",id:"checkwitness",children:[]},{value:"Events",id:"events",children:[]},{value:"Json serialization",id:"json-serialization",children:[]}]}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"smart-contract-writing-basics"},"Smart Contract Writing Basics"),(0,o.kt)("p",null,"In this tutorial, you will learn the basics of developing a smart contract. "),(0,o.kt)("p",null,"Let's have a look at our basic hello world contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using Neo;\nusing Neo.SmartContract;\nusing Neo.SmartContract.Framework;\nusing Neo.SmartContract.Framework.Native;\nusing Neo.SmartContract.Framework.Services;\nusing System;\n\nnamespace Helloworld\n{\n    [ManifestExtra("Author", "Neo")]\n    [ManifestExtra("Email", "dev@neo.org")]\n    [ManifestExtra("Description", "This is a contract example")]\n    public class Contract1 : SmartContract\n    {\n        //TODO: Replace it with your own address.\n        [InitialValue("NiNmXL8FjEUEs1nfX9uHFBNaenxDHJtmuB", ContractParameterType.Hash160)]\n        static readonly UInt160 Owner = default;\n\n        private static bool IsOwner() => Runtime.CheckWitness(Owner);\n\n        // When this contract address is included in the transaction signature,\n        // this method will be triggered as a VerificationTrigger to verify that the signature is correct.\n        // For example, this method needs to be called when withdrawing token from the contract.\n        public static bool Verify() => IsOwner();\n\n        // TODO: Replace it with your methods.\n        public static string MyMethod()\n        {\n            return Storage.Get(Storage.CurrentContext, "Hello");\n        }\n\n        public static void _deploy(object data, bool update)\n        {\n            if (update) return;\n\n            // It will be executed during deploy\n            Storage.Put(Storage.CurrentContext, "Hello", "World");\n        }\n\n        public static void Update(ByteString nefFile, string manifest)\n        {\n            if (!IsOwner()) throw new Exception("No authorization.");\n            ContractManagement.Update(nefFile, manifest, null);\n        }\n\n        public static void Destroy()\n        {\n            if (!IsOwner()) throw new Exception("No authorization.");\n            ContractManagement.Destroy();\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"contract-property"},"Contract property"),(0,o.kt)("p",null,"Inside the contract class, the property defined with ",(0,o.kt)("inlineCode",{parentName:"p"},"static readonly")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," is the contract property which can be used as constants and can not be changed. For instance, when we want to define a Owner of that contract or the factor number which will be used in the later asset transfer, we can define these constants in this way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'// Represents onwner of this contract, which is a fixed address. Usually should be the contract creator\n[InitialValue("NiNmXL8FjEUEs1nfX9uHFBNaenxDHJtmuB", ContractParameterType.Hash160)]\nstatic readonly UInt160 Owner = default;\n\n// A constant number\nprivate const ulong factor = 100000000;\n')),(0,o.kt)("p",null,"These properties defined in contract property are usually constants that can be used inside the methods of smart contract and every time the smart contract is running on any instance, these properties keep the same value."),(0,o.kt)("p",null,"In addition, developer can define static method  in contract and return a constant, which is exposing the method  out of the contract and let end-user can call the method to get the fixed value when they try to query the smart contract. For instance, when you create you own token, you have to define a name which you may want everyone use you contract can check he name with this method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'public static string Name() => "name of the token";\n')),(0,o.kt)("h2",{id:"storage-property"},"Storage property"),(0,o.kt)("p",null,"When you develop the smart contract, you have to store your application data on the blockchain. When a Smart Contract is created or when a transaction awakens it, the Contract\u2019s code can read and write to its storage space. All data stored in the storage of the smart contract are automatically persisted between invocations of the smart contract. Full nodes in the blockchain store the state of every smart contract on the chain."),(0,o.kt)("p",null,"Neo has provided data access interface based on key-value pairs. Data records may be read or deleted from or written to the smart contracts using keys. Besides, smart contracts may retrieve and send their storage contexts to other contracts, thereby entrusting other contracts to manage their storage areas. In C# development, smart contract can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage")," Class to read/write the persistent storage  The ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage")," class is a static class and does not require a constructor. The methods of ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage")," class can be viewed in this ",(0,o.kt)("a",{parentName:"p",href:"/StreamAI/docs/n3/reference/scapi/framework/services/Storage"},"API References")),(0,o.kt)("p",null,"For instance, if you want to store the total supply of your token into storage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'// Key is totalSupply and value is 100000000\nStorage.Put(Storage.CurrentContext, "totalSupply", 100000000);\n')),(0,o.kt)("p",null,"Here ",(0,o.kt)("inlineCode",{parentName:"p"},"CurrentContext")," Returns the current store context. After obtaining the store context, the object can be passed as an argument to other contracts (as a way of authorization), allowing other contracts to perform read/write operations on the persistent store of the current contract."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Storage")," work well for storing primitive values and while you can use an ",(0,o.kt)("inlineCode",{parentName:"p"},"StorageMap"),"  which can be used for storing structured data, this will store the entire container in a single key in smart contract storage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'//Get the totalSupply in the storageMap. The Map is used an entire container with key name "contract"\nStorageMap contract = new(Storage.CurrentContext, nameof(contract))\nvar value = contract.Get("totalSupply");\nreturn value is null ? 0 : (BigInteger)value;;\n')),(0,o.kt)("h2",{id:"data-type"},"Data type"),(0,o.kt)("p",null,"When using C# to develop smart contracts, you cannot use the full set of C# features due to the difference between NeoVM and Dotnet IL."),(0,o.kt)("p",null,"Because NeoVM is more compact, we can only compile limited C# / dotnet features into an NEF file."),(0,o.kt)("p",null,"NeoVM provides the following basic types\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Pointer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Boolean")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Integer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ByteString")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Buffer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Array")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Struct")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Map")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"InteropInterface"))),(0,o.kt)("p",null,"The basic types of C# are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Int8 int16 int32 int64 uint8 uint16 uint32 uint64")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"float double")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Boolean")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Char String"))),(0,o.kt)("h2",{id:"your-first-neo-contract"},"Your first Neo contract"),(0,o.kt)("p",null,"After analyzing the basic hello world contract, let us move to your first real-world smart contract. Here we provide a very simple DNS system which was written in C#. The main function of the DNS is store the domain for users. It contains all the points above except the events. We can investigate this smart contract to learn how to make a basic smart contract. The source code is here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using Neo.SmartContract;\nusing Neo.SmartContract.Framework;\nusing Neo.SmartContract.Framework.Native;\nusing Neo.SmartContract.Framework.Services;\nusing System.ComponentModel;\n\nnamespace Domain\n{\n    public class Contract1 : SmartContract\n    {\n\n        [DisplayName("query")]\n        public static byte[] Query(string domain)\n        {\n            return Storage.Get(Storage.CurrentContext, domain);\n        }\n\n        [DisplayName("register")]\n        publilc static bool Register(string domain, byte[] owner)\n        {\n            // Check if the contract owner is the same as the one who invokes the contract\n            if (!Runtime.CheckWitness(owner)) return false;\n            byte[] value = Storage.Get(Storage.CurrentContext, domain);\n            if (value != null) return false;\n            Storage.Put(Storage.CurrentContext, domain, owner);\n            return true;\n        }\n\n        [DisplayName("delete")]\n        public static bool Delete(string domain)\n        {\n            // To do\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Let's slice it and learn it step by step."),(0,o.kt)("h3",{id:"contract-features"},"Contract Features"),(0,o.kt)("p",null,"You can declare more features:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'[ManifestExtra("Author", "Neo")]\n[ManifestExtra("Email", "dev@neo.org")]\n[ManifestExtra("Description", "This is a contract example")]\n[SupportedStandards("NEP-17")]\n[ContractPermission("*", "onNEP17Payment")]\n[ContractTrust("0x0a0b00ff00ff00ff00ff00ff00ff00ff00ff00a4")]\npublic class Contract1 : SmartContract\n{\n    public static bool Main(string operation, object[] args)\n    {\n        // other code\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ManifestExtra")," represents the extra fields in the Manifest file, where you can add ",(0,o.kt)("inlineCode",{parentName:"p"},"Author"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Email"),",  ",(0,o.kt)("inlineCode",{parentName:"p"},"Description")," and etc."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SupportedStandards")," represents the NEP standards the contract conform to, such as NEP-17, a token standard on Neo. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ContractPermission")," indicates the permission requested by the contract, and ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractTrust")," indicates which contracts trust the contract to call itself.  See ","[invocation-permission]","(... /deploy/invoke.html#invocation-permission)."),(0,o.kt)("p",null,"You can also add other fields, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'[ManifestExtra("Name", "sample contract")]\n[ManifestExtra("Version", "1.0.0")]\n')),(0,o.kt)("h3",{id:"entry-function"},"Entry function"),(0,o.kt)("p",null,"Theoretically, smart contracts can have any entry points. Methods of the public static type in the contract can be used as an entry function to be invoked externally, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"using Neo.SmartContract;\nusing Neo.SmartContract.Framework;\n\nnamespace Neo.Compiler.MSIL.UnitTests.TestClasses\n{\n    class Contract_a : SmartContract.Framework.SmartContract\n    {\n        public static object First(string method, object[] args)\n        {\n            return 'a';\n        }\n        public static object Second(string method, object[] args)\n        {\n            return 'b';\n        }\n    }\n}\n")),(0,o.kt)("p",null,"The compiler marks the offset of ",(0,o.kt)("inlineCode",{parentName:"p"},"First")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Second")," in ABI. When invoking the contract, it assigns the value to initialPosition, finds and executes the matching method according to the offset recorded in the ABI."),(0,o.kt)("h3",{id:"trigger"},"Trigger"),(0,o.kt)("p",null,"A smart contract trigger is a mechanism that triggers the execution of smart contracts. There are three triggers introduced in the Neo smart contract\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Verification"),",   ",(0,o.kt)("inlineCode",{parentName:"p"},"Application"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"System"),". However, for most smart contract development, you only need to implement the Verify method to provide the signature verification logic, without having to decide the trigger. "),(0,o.kt)("h4",{id:"verification-trigger"},"Verification trigger"),(0,o.kt)("p",null,"A Verification trigger is used to call the contract as a verification function, which can accept multiple parameters and should return a valid Boolean value, indicating the validity of the transaction or block."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"public static bool Verify()\n{\n    return Runtime.CheckWitness(Owner);\n}\n")),(0,o.kt)("h3",{id:"checkwitness"},"CheckWitness"),(0,o.kt)("p",null,"In many, if not all cases, you will probably be wanting to validate whether the address invoking your contract code is really who they say they are."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime.CheckWitness")," method accepts a single parameter which represents the address that you would like to validate against the address used to invoke the contract code. In more deeper detail, it verifies that the transactions / block of the calling contract has validated the required script hashes."),(0,o.kt)("p",null,"Usually this method is used to check whether an specified address is the the contract caller,  and then the address can be used to do store change or something else."),(0,o.kt)("p",null,"Inside our ",(0,o.kt)("inlineCode",{parentName:"p"},"DNS smart contract"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"Register")," function is firstly check if the owner is the same as the one who invoke the contract. Here we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime.CheckWitness")," function. Then we try to fetch the domain owner first to see if the domain is already exists in the storage. If not, we can store our domain->owner pair using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage.Put"),"method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"private static bool Register(string domain, byte[] owner)\n{\n    if (!Runtime.CheckWitness(owner)) return false;\n    byte[] value = Storage.Get(Storage.CurrentContext, domain);\n    if (value != null) return false;\n    Storage.Put(Storage.CurrentContext, domain, owner);\n    return true;\n}\n")),(0,o.kt)("p",null,"Similar to the Register method, the Delete function check the owner first and if it exists and it is the same as the one who invoke the contract, delete the pair using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage.Delete"),"method. "),(0,o.kt)("h3",{id:"events"},"Events"),(0,o.kt)("p",null,"In Smart contract, events are a way  to communicate that something happened on the blockchain to your app front-end (or back-end), which can be 'listening' for certain events and take action when they happen. You might use this to update an external database, do analytics, or update a UI. In some specified contract standard,  it defined some events should be posted. It is not cover in this page, but is very useful for the other smart contracts. For instance, in the NEP-17 Token, the events ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer")," should be fired when user invoke the transfer function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'//Should be called when caller transfer NEP-17 asset.\n[DisplayName("Transfer")]\npublic static event Action<byte[], byte[], BigInteger> OnTransfer;\n')),(0,o.kt)("p",null,"Transfer is the event name."),(0,o.kt)("h3",{id:"json-serialization"},"Json serialization"),(0,o.kt)("p",null,"In Neo N3 smart contract, the Json serialization/deserialization feature is added:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"using Neo.SmartContract.Framework.Native;\nusing Neo.SmartContract.Framework.Services;\n\nnamespace Neo.Compiler.MSIL.TestClasses\n{\n    public class Contract_Json : SmartContract.Framework.SmartContract\n    {\n        public static string Serialize(object obj)\n        {\n            return Json.Serialize(obj);\n        }\n\n        public static object Deserialize(string json)\n        {\n            return Json.Deserialize(json);\n        }\n    }\n}\n")))}d.isMDXComponent=!0}}]);