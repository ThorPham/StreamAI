"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[2],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,m=d["".concat(o,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},56537:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],s={},o="Wallet Interfaces",c={unversionedId:"n3/develop/tool/sdk/wallet",id:"n3/develop/tool/sdk/wallet",isDocsHomePage:!1,title:"Wallet Interfaces",description:"Most operations in Neo blockchain are related to accounts. A wallet is the collection of accounts that includes one or multiple accounts. This document contains the following topics\uff1a",source:"@site/docs/n3/develop/tool/sdk/wallet.md",sourceDirName:"n3/develop/tool/sdk",slug:"/n3/develop/tool/sdk/wallet",permalink:"/StreamAI/docs/n3/develop/tool/sdk/wallet",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/develop/tool/sdk/wallet.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Transaction Construction",permalink:"/StreamAI/docs/n3/develop/tool/sdk/transaction"},next:{title:"Development in Python/Java/Go",permalink:"/StreamAI/docs/n3/develop/language"}},p=[{value:"Account and Wallet",id:"account-and-wallet",children:[{value:"Account",id:"account",children:[]},{value:"Private Key",id:"private-key",children:[]},{value:"WIF",id:"wif",children:[]},{value:"Public Key",id:"public-key",children:[]},{value:"Account ScriptHash",id:"account-scripthash",children:[]},{value:"Address",id:"address",children:[]},{value:"Wallet",id:"wallet",children:[]}]},{value:"Using WalletAPI",id:"using-walletapi",children:[{value:"Initialization",id:"initialization",children:[]},{value:"Inquiring balance",id:"inquiring-balance",children:[]}]},{value:"Claiming GAS",id:"claiming-gas",children:[]},{value:"Asset Transfer",id:"asset-transfer",children:[]}],u={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"wallet-interfaces"},"Wallet Interfaces"),(0,i.kt)("p",null,"Most operations in Neo blockchain are related to accounts. A wallet is the collection of accounts that includes one or multiple accounts. This document contains the following topics\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The basic concepts and operations of accounts and wallets"),(0,i.kt)("li",{parentName:"ul"},"The method ",(0,i.kt)("inlineCode",{parentName:"li"},"WalletAPI"),"\uff0cwhich encapsulates wallet-related interfaces to provide the functions of balance inquiry, GAS claim, and transfer.")),(0,i.kt)("h2",{id:"account-and-wallet"},"Account and Wallet"),(0,i.kt)("h3",{id:"account"},"Account"),(0,i.kt)("p",null,"An account is the user identity in Neo, which is essentially a private and public key pair ( ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyPair")," ) ."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// create a new KeyPair\nbyte[] privateKey = new byte[32];\nusing (RandomNumberGenerator rng = RandomNumberGenerator.Create())\n{\n    rng.GetBytes(privateKey);\n}\nKeyPair keyPair = new KeyPair(privateKey);\n")),(0,i.kt)("h3",{id:"private-key"},"Private Key"),(0,i.kt)("p",null,"Private key is an authorization tool used to sign transactions. Having a private key means you own an account that you can handle all the assets in it. The private key is essentially a 32-bit byte array that can be represented as a hexadecimal string, for example:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'"0x450d6c2a04b5b470339a745427bae6828400cf048400837d73c415063835e005"')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"  // export private key to hex string\n  string privateHex = keyPair.PrivateKey.ToHexString();\n\n  // get KeyPair from private hex string\n  keyPair = Utility.GetKeyPair(privateHex);\n")),(0,i.kt)("h3",{id:"wif"},"WIF"),(0,i.kt)("p",null,"WIF is another string representation of the private key, which is equivalent to the private key. For example, the above private key is represented as the following WIF:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'"KyXwTh1hB76RRMquSvnxZrJzQx7h9nQP2PCRL38v6VDb5ip3nf1p"')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"  // export KeyPair as WIF\n  string wif = keyPair.Export();\n\n  // get KeyPair from WIF\n  KeyPair keyPair1 = Utility.GetKeyPair(wif);\n")),(0,i.kt)("h3",{id:"public-key"},"Public Key"),(0,i.kt)("p",null,"The public key verifies the signature of the private key. It corresponds to the ECPoint type in Neo. The public key can be calculated with the private key. Typically it is a 66-digit hexadecimal string:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'"02f9ec1fd0a98796cf75b586772a4ddd41a0af07a1dbdf86a7238f74fb72503575"')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"  // export public key hex string\n  string publicHex = keyPair.PublicKey.ToString();\n\n  // get public key from hex string\n  Neo.Cryptography.ECC.ECPoint publicKey = Neo.Cryptography.ECC.ECPoint.Parse(publicHex, Neo.Cryptography.ECC.ECCurve.Secp256r1);\n")),(0,i.kt)("h3",{id:"account-scripthash"},"Account ScriptHash"),(0,i.kt)("p",null,"ScriptHash, corresponding to ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt160")," in Neo, is essentially a 20-bit byte array generated from the public key by script construction and hash algorithm. Since the hash algorithm is not reversible, the public key cannot be calculated backwards from the script hash. ScriptHash is usually expressed as a reversed hexadecimal string in big-endian order\uff1a\n",(0,i.kt)("inlineCode",{parentName:"p"},'"0xb0a31817c80ad5f87b6ed390ecb3f9d312f7ceb8"')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"  // get ScriptHash of KeyPair account\n  UInt160 scriptHash = Contract.CreateSignatureContract(keyPair.PublicKey).ScriptHash;\n  string strScriptHash = scriptHash.ToString();\n")),(0,i.kt)("h3",{id:"address"},"Address"),(0,i.kt)("p",null,"Address is another string form of ScriptHash and can be transformed to or from ScriptHash. As the unique identifier of the account, address is the most commonly used account form. It is similar to the account number for a traditional account, when you transfer money you transfer it to a specified address. A common address format is: ",(0,i.kt)("inlineCode",{parentName:"p"},'"Ncm9TEzrp8SSer6Wa3UCSLTRnqzwVhCfuE"')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"using Neo.Wallets;\n\n// ScriptHash to address\nstring adddress = scriptHash.ToAddress();\n// address to ScriptHash\nscriptHash = adddress.ToScriptHash();\n")),(0,i.kt)("h3",{id:"wallet"},"Wallet"),(0,i.kt)("p",null,"Wallet is a collection of accounts. NEP6 is the most commonly used wallet standard in Neo. A NEP6 wallet can be serialized into a JSON file, in which the encrypted account private key is saved. The corresponding password is required to decrypt the private key."),(0,i.kt)("p",null,"Here is an example:"),(0,i.kt)("p",null,"Create a new NEP6 wallet with an account and save as JSON file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// create wallet\nstring path = "wallet_new.json";\nstring password = "MyPass";\nNEP6Wallet wallet_new = new NEP6Wallet(path);\nusing (wallet_new.Unlock(password))\n{\n    wallet_new.CreateAccount(keyPair.PrivateKey);\n}\nwallet_new.Save();\n')),(0,i.kt)("p",null,"Read the NEP6 wallet from the JSON file and decrypt the account:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// load wallet from nep6 wallet\nNEP6Wallet wallet = new NEP6Wallet(path);\nKeyPair keyPair2;\nusing (wallet.Unlock(password))\n{\n    keyPair2 = wallet.GetAccounts().First().GetKey();\n}\n")),(0,i.kt)("h2",{id:"using-walletapi"},"Using WalletAPI"),(0,i.kt)("h3",{id:"initialization"},"Initialization"),(0,i.kt)("p",null,"Initializing ",(0,i.kt)("inlineCode",{parentName:"p"},"WalletAPI"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// choose a neo node with rpc opened\nRpcClient client = new RpcClient(new Uri("http://localhost:20332"), null, null, ProtocolSettings.Load("config.json"));\nWalletAPI walletAPI = new WalletAPI(client);\n')),(0,i.kt)("h3",{id:"inquiring-balance"},"Inquiring balance"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"}," The type of account balance is usually BigInteger, which is a representation after rounding the decimal part. It needs to be divided by Factor to get the actual Token amount."))),(0,i.kt)("p",null,"Inquiry NEP-17 asset balance using the string parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// get the neo balance of account\nstring tokenHash = NativeContract.NEO.Hash.ToString();\nstring address = "NZs2zXSPuuv9ZF6TDGSWT1RBmE8rfGj7UW";\nBigInteger balance = await walletAPI.GetTokenBalanceAsync(tokenHash, address).ConfigureAwait(false);\n')),(0,i.kt)("p",null,"or using the parameter of ScriptHash type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// Get the NEO balance of account\nUInt160 tokenScriptHash = Utility.GetScriptHash(tokenHash, ProtocolSettings.Default);\nUInt160 accountHash = Utility.GetScriptHash(address, ProtocolSettings.Default);\nNep17API nep17API = new Nep17API(client);\nBigInteger balance = await nep17API.BalanceOfAsync(tokenScriptHash, accountHash).ConfigureAwait(false);\n")),(0,i.kt)("p",null,"In Neo N3 NEO and GAS are both NEP17 assets with the fixed scripthash. Here we provide a simpler interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// Get the NEO balance\nuint neoBalance = await walletAPI.GetNeoBalanceAsync(address).ConfigureAwait(false);\n\n// Get the GAS balance\ndecimal gasBalance = await walletAPI.GetGasBalanceAsync(address).ConfigureAwait(false);\n")),(0,i.kt)("h2",{id:"claiming-gas"},"Claiming GAS"),(0,i.kt)("p",null,"In Neo N3 GAS is automatically claimed when NEO is transferred. You can construct a transaction transferring to yourself to claim GAS."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"First check the claimable GAS amount at current address:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// Get the claimable GAS of one address\nstring address = "NZs2zXSPuuv9ZF6TDGSWT1RBmE8rfGj7UW";\ndecimal gasAmount = await walletAPI.GetUnclaimedGasAsync(address).ConfigureAwait(false);\n')),(0,i.kt)("p",{parentName:"li"},"or use ScriptHash of the account to check:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'string address = "NZs2zXSPuuv9ZF6TDGSWT1RBmE8rfGj7UW";\nUInt160 accountHash = Utility.GetScriptHash(address);\ndecimal gasAmount = await walletAPI.GetUnclaimedGasAsync(accountHash).ConfigureAwait(false);\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Construct a transaction sending NEO to yourself:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// Claiming GAS needs the KeyPair of account. You can also use wif or private key hex string\nstring wif = "L1rFMTamZj85ENnqNLwmhXKAprHuqr1MxMHmCWCGiXGsAdQ2dnhb";\nTransaction transaction = await walletAPI.ClaimGasAsync(wif).ConfigureAwait(false);\n')),(0,i.kt)("p",{parentName:"li"},"or use ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyPair"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"KeyPair keyPair = Utility.GetKeyPair(wif);\nTransaction transaction = await walletAPI.ClaimGasAsync(keyPair).ConfigureAwait(false);\n")))),(0,i.kt)("h2",{id:"asset-transfer"},"Asset Transfer"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"WalletAPI")," encapsulates transfer methods of NEP-17 assets."),(0,i.kt)("p",null,"Use string parameters: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'string tokenHash = NativeContract.NEO.Hash.ToString();\nstring wif = "L1rFMTamZj85ENnqNLwmhXKAprHuqr1MxMHmCWCGiXGsAdQ2dnhb";\nstring address = "NZs2zXSPuuv9ZF6TDGSWT1RBmE8rfGj7UW";\n\n// Transfer 10 NEO from wif to address\nawait walletAPI.TransferAsync(tokenHash, wif, address, 10).ConfigureAwait(false);\n\n// Print a message after the transaction is on chain\nWalletAPI neoAPI = new WalletAPI(client);\nawait neoAPI.WaitTransactionAsync(transaction)\n  .ContinueWith(async (p) => Console.WriteLine($"Transaction vm state is  {(await p).VMState}"));\n')),(0,i.kt)("p",null,"or use ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyPair")," and  ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt160")," (ScriptHash):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'string wif = "L1rFMTamZj85ENnqNLwmhXKAprHuqr1MxMHmCWCGiXGsAdQ2dnhb";\nstring address = "NZs2zXSPuuv9ZF6TDGSWT1RBmE8rfGj7UW";\n\nKeyPair sender = Utility.GetKeyPair(wif);\nUInt160 receiver = Utility.GetScriptHash(address, ProtocolSettings.Default);\n\n// Transfer 10 NEO from wif to address\nawait walletAPI.TransferAsync(NativeContract.NEO.Hash, sender, receiver, 10).ConfigureAwait(false);\n')),(0,i.kt)("p",null,"NEP17 transfer from multi-signature account:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'KeyPair receiverKey = Utility.GetKeyPair("L1rFMTamZj85ENnqNLwmhXKAprHuqr1MxMHmCWCGiXGsAdQ2dnhb");\nKeyPair keyPair1 = Utility.GetKeyPair("L1rFMTamZj85ENnqNLwmhXKAprHuqr1MxMHmCWCGiXGsAdQ2dnhb");\nKeyPair keyPair2 = Utility.GetKeyPair("L2ynA5aq6KPJjpisXb8pGXnRvgDqYVkgC2Rw85GM51B9W33YcdiZ");\nKeyPair keyPair3 = Utility.GetKeyPair("L3TbPZ3Gtqh3TTk2CWn44m9iiuUhBGZWoDJQuvVw5Zbx5NAjPbdb");\nKeyPair keyPair4 = Utility.GetKeyPair("L3Ke1RSBycXmRukv27L6o7sQWzDwDbFcbfR9oBBwXbCKHdBvb4ZM");\n\n//make transaction \nTransaction tx = await walletAPI.TransferAsync(NativeContract.GAS.Hash, 3, new ECPoint[] { keyPair1.PublicKey, keyPair2.PublicKey, keyPair3.PublicKey, keyPair4.PublicKey }, new KeyPair[] { keyPair1, keyPair2, keyPair3 }, Contract.CreateSignatureContract(receiverKey.PublicKey).ScriptHash, 10 * NativeContract.GAS.Factor).ConfigureAwait(false);\n')))}d.isMDXComponent=!0}}]);