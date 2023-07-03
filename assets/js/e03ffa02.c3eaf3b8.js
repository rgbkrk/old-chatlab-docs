"use strict";(self.webpackChunkchatlab_docs=self.webpackChunkchatlab_docs||[]).push([[748],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),y=a,m=u["".concat(p,".").concat(y)]||u[y]||d[y]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={title:"Setting API Keys",description:"How to set your API keys for OpenAI and ChatLab"},i="Setting API Keys",l={unversionedId:"setting-api-keys",id:"setting-api-keys",title:"Setting API Keys",description:"How to set your API keys for OpenAI and ChatLab",source:"@site/docs/setting-api-keys.md",sourceDirName:".",slug:"/setting-api-keys",permalink:"/docs/setting-api-keys",draft:!1,editUrl:"https://github.com/rgbkrk/chatlab-docs/docs/setting-api-keys.md",tags:[],version:"current",frontMatter:{title:"Setting API Keys",description:"How to set your API keys for OpenAI and ChatLab"},sidebar:"tutorialSidebar",previous:{title:"Get Started",permalink:"/docs/intro"}},p={},s=[{value:"Jupyter",id:"jupyter",level:2},{value:"Noteable",id:"noteable",level:2},{value:"Colab, Kaggle, and other cloud notebooks",id:"colab-kaggle-and-other-cloud-notebooks",level:2},{value:"Just <code>getpass</code>",id:"just-getpass",level:3},{value:"The <code>%env</code> magic",id:"the-env-magic",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-api-keys"},"Setting API Keys"),(0,a.kt)("p",null,"Since ChatLab builds upon OpenAI's Chat Models and Function Calling, you must sign up with ",(0,a.kt)("a",{parentName:"p",href:"https://platform.openai.com/"},"OpenAI")," and get an API key. You can find your API key on your ",(0,a.kt)("a",{parentName:"p",href:"https://platform.openai.com/account/api-keys"},"OpenAI account page"),". Once you have your key, set it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"OPENAI_API_KEY")," environment variable."),(0,a.kt)("h2",{id:"jupyter"},"Jupyter"),(0,a.kt)("p",null,"Before launching JupyterLab (or the classic notebook), set the ",(0,a.kt)("inlineCode",{parentName:"p"},"OPENAI_API_KEY")," environment variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export OPENAI_API_KEY=<your key>\njupyter lab\n")),(0,a.kt)("p",null,"As an alternative, you can use the ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/python-dotenv/"},"dotenv")," package to load the environment variable from a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install python-dotenv\n")),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file in the same directory as your notebook and add the following line."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OPENAI_API_KEY=<your key>\n")),(0,a.kt)("h2",{id:"noteable"},"Noteable"),(0,a.kt)("p",null,"Navigate to your ",(0,a.kt)("a",{parentName:"p",href:"https://app.noteable.io/r/secrets"},"Secrets"),' page, click "Create a Secret" and add your key.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2234).Z,width:"558",height:"459"})),(0,a.kt)("p",null,"Name: ",(0,a.kt)("inlineCode",{parentName:"p"},"OPENAI_API_KEY"),"\nValue: ",(0,a.kt)("inlineCode",{parentName:"p"},"<your key>")),(0,a.kt)("p",null,'The "Private" option provides the secrets to only you when executing. "Space" level secrets will be available to all your collaborators in the space.'),(0,a.kt)("h2",{id:"colab-kaggle-and-other-cloud-notebooks"},"Colab, Kaggle, and other cloud notebooks"),(0,a.kt)("h3",{id:"just-getpass"},"Just ",(0,a.kt)("inlineCode",{parentName:"h3"},"getpass")),(0,a.kt)("p",null,"This is the most secure way to set your API key that works with all notebooks. It will prompt you for your key every time you run a notebook. This is the recommended way to set your API key if other methods do not work."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import os\nfrom getpass import getpass\nos.environ['OPENAI_API_KEY'] = getpass('Enter your OpenAI API Key: ')\n")),(0,a.kt)("h3",{id:"the-env-magic"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"%env")," magic"),(0,a.kt)("p",null,"This options is insecure, but easy. It will leave your key in the notebook for others to see. This is ",(0,a.kt)("strong",{parentName:"p"},"not")," recommended for sharing notebooks."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"If you absolutely, positively have to, you can set the ",(0,a.kt)("inlineCode",{parentName:"p"},"OPENAI_API_KEY")," environment variable in the notebook with the ",(0,a.kt)("inlineCode",{parentName:"p"},"%env")," magic."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"%env OPENAI_API_KEY=<your key>\n"))))}d.isMDXComponent=!0},2234:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/noteable_secrets_ui-c19440e3f74489bb211ec3988ed94483.png"}}]);