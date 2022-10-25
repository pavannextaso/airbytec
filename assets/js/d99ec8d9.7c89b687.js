"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[4172],{85285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(83117),r=(n(67294),n(3905));const i={},a="Step 2: Install Dependencies",c={unversionedId:"connector-development/tutorials/cdk-tutorial-python-http/install-dependencies",id:"connector-development/tutorials/cdk-tutorial-python-http/install-dependencies",title:"Step 2: Install Dependencies",description:"Now that you've generated the module, let's navigate to its directory and install dependencies:",source:"@site/../docs/connector-development/tutorials/cdk-tutorial-python-http/install-dependencies.md",sourceDirName:"connector-development/tutorials/cdk-tutorial-python-http",slug:"/connector-development/tutorials/cdk-tutorial-python-http/install-dependencies",permalink:"/connector-development/tutorials/cdk-tutorial-python-http/install-dependencies",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/tutorials/cdk-tutorial-python-http/install-dependencies.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Step 1: Creating the Source",permalink:"/connector-development/tutorials/cdk-tutorial-python-http/creating-the-source"},next:{title:"Step 3: Define Inputs",permalink:"/connector-development/tutorials/cdk-tutorial-python-http/define-inputs"}},s={},l=[{value:"Notes on iteration cycle",id:"notes-on-iteration-cycle",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Development Environment",id:"development-environment",level:3},{value:"Iterating on your implementation",id:"iterating-on-your-implementation",level:3}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"step-2-install-dependencies"},"Step 2: Install Dependencies"),(0,r.kt)("p",null,"Now that you've generated the module, let's navigate to its directory and install dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"cd ../../connectors/source-<name>\npython -m venv .venv # Create a virtual environment in the .venv directory\nsource .venv/bin/activate # enable the venv\npip install -r requirements.txt\n")),(0,r.kt)("p",null,"This step sets up the initial python environment. ",(0,r.kt)("strong",{parentName:"p"},"All")," subsequent ",(0,r.kt)("inlineCode",{parentName:"p"},"python")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pip")," commands assume you have activated your virtual environment."),(0,r.kt)("p",null,"Let's verify everything is working as intended. Run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"python main.py spec\n")),(0,r.kt)("p",null,"You should see some output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'{"type": "SPEC", "spec": {"documentationUrl": "https://docsurl.com", "connectionSpecification": {"$schema": "http://json-schema.org/draft-07/schema#", "title": "Python Http Tutorial Spec", "type": "object", "required": ["TODO"], "properties": {"TODO: This schema defines the configuration required for the source. This usually involves metadata such as database and/or authentication information.": {"type": "string", "description": "describe me"}}}}}\n')),(0,r.kt)("p",null,"We just ran Airbyte Protocol's ",(0,r.kt)("inlineCode",{parentName:"p"},"spec")," command! We'll talk more about this later, but this is a simple sanity check to make sure everything is wired up correctly."),(0,r.kt)("p",null,"Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"main.py")," file is a simple script that makes it easy to run your connector. Its invocation format is ",(0,r.kt)("inlineCode",{parentName:"p"},"python main.py <command> [args]"),". See the module's generated ",(0,r.kt)("inlineCode",{parentName:"p"},"README.md")," for the commands it supports."),(0,r.kt)("h2",{id:"notes-on-iteration-cycle"},"Notes on iteration cycle"),(0,r.kt)("h3",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"Python dependencies for your source should be declared in ",(0,r.kt)("inlineCode",{parentName:"p"},"airbyte-integrations/connectors/source-<source-name>/setup.py")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"install_requires")," field. You will notice that a couple of Airbyte dependencies are already declared there. Do not remove these; they give your source access to the helper interfaces provided by the generator."),(0,r.kt)("p",null,"You may notice that there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"requirements.txt")," in your source's directory as well. Don't edit this. It is autogenerated and used to provide Airbyte dependencies. All your dependencies should be declared in ",(0,r.kt)("inlineCode",{parentName:"p"},"setup.py"),"."),(0,r.kt)("h3",{id:"development-environment"},"Development Environment"),(0,r.kt)("p",null,"The commands we ran above created a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/tutorial/venv.html"},"Python virtual environment")," for your source. If you want your IDE to auto complete and resolve dependencies properly, point it at the virtual env ",(0,r.kt)("inlineCode",{parentName:"p"},"airbyte-integrations/connectors/source-<source-name>/.venv"),". Also anytime you change the dependencies in the ",(0,r.kt)("inlineCode",{parentName:"p"},"setup.py")," make sure to re-run ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install -r requirements.txt"),"."),(0,r.kt)("h3",{id:"iterating-on-your-implementation"},"Iterating on your implementation"),(0,r.kt)("p",null,"There are two ways we recommend iterating on a source. Consider using whichever one matches your style."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Run the source using python")),(0,r.kt)("p",null,"You'll notice in your source's directory that there is a python file called ",(0,r.kt)("inlineCode",{parentName:"p"},"main.py"),". This file exists as convenience for development. You run it to test that your source works:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"# from airbyte-integrations/connectors/source-<name>\npython main.py spec\npython main.py check --config secrets/config.json\npython main.py discover --config secrets/config.json\npython main.py read --config secrets/config.json --catalog sample_files/configured_catalog.json\n")),(0,r.kt)("p",null,"The nice thing about this approach is that you can iterate completely within python. The downside is that you are not quite running your source as it will actually be run by Airbyte. Specifically, you're not running it from within the docker container that will house it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Run the source using docker")),(0,r.kt)("p",null,"If you want to run your source exactly as it will be run by Airbyte ","(","i.e. within a docker container",")",", you can use the following commands from the connector module directory ","(",(0,r.kt)("inlineCode",{parentName:"p"},"airbyte-integrations/connectors/source-python-http-example"),")",":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"# First build the container\ndocker build . -t airbyte/source-<name>:dev\n\n# Then use the following commands to run it\ndocker run --rm airbyte/source-python-http-example:dev spec\ndocker run --rm -v $(pwd)/secrets:/secrets airbyte/source-python-http-example:dev check --config /secrets/config.json\ndocker run --rm -v $(pwd)/secrets:/secrets airbyte/source-python-http-example:dev discover --config /secrets/config.json\ndocker run --rm -v $(pwd)/secrets:/secrets -v $(pwd)/sample_files:/sample_files airbyte/source-python-http-example:dev read --config /secrets/config.json --catalog /sample_files/configured_catalog.json\n")),(0,r.kt)("p",null,"Note: Each time you make a change to your implementation you need to re-build the connector image via ",(0,r.kt)("inlineCode",{parentName:"p"},"docker build . -t airbyte/source-<name>:dev"),". This ensures the new python code is added into the docker container."),(0,r.kt)("p",null,"The nice thing about this approach is that you are running your source exactly as it will be run by Airbyte. The tradeoff is iteration is slightly slower, as the connector is re-built between each change."))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);