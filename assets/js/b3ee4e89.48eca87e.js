"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5833],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),s=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=s(t.components);return r.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),d=s(a),k=n,u=d["".concat(o,".").concat(k)]||d[k]||c[k]||i;return a?r.createElement(u,p(p({ref:e},m),{},{components:a})):r.createElement(u,p({ref:e},m))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,p=new Array(i);p[0]=d;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:n,p[1]=l;for(var s=2;s<i;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8245:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={},p="Iterable",l={unversionedId:"integrations/sources/iterable",id:"integrations/sources/iterable",title:"Iterable",description:"This page contains the setup guide and reference information for the Iterable source connector.",source:"@site/../docs/integrations/sources/iterable.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/iterable",permalink:"/integrations/sources/iterable",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/iterable.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Intercom",permalink:"/integrations/sources/intercom"},next:{title:"Jenkins",permalink:"/integrations/sources/jenkins"}},o={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up Iterable",id:"step-1-set-up-iterable",level:3},{value:"Step 2: Set up the Iterable connector in Airbyte",id:"step-2-set-up-the-iterable-connector-in-airbyte",level:2},{value:"For Airbyte Cloud:",id:"for-airbyte-cloud",level:3},{value:"For Airbyte OSS:",id:"for-airbyte-oss",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Changelog",id:"changelog",level:2}],m={toc:s};function c(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"iterable"},"Iterable"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for the Iterable source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Iterable Account"),(0,n.kt)("li",{parentName:"ul"},"Iterable ",(0,n.kt)("inlineCode",{parentName:"li"},"Server-side")," API Key with ",(0,n.kt)("inlineCode",{parentName:"li"},"standard")," permissions. See ",(0,n.kt)("a",{parentName:"li",href:"https://support.iterable.com/hc/en-us/articles/360043464871-API-Keys-"},"API Keys docs")," for more details.")),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h3",{id:"step-1-set-up-iterable"},"Step 1: Set up Iterable"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Please read ",(0,n.kt)("a",{parentName:"li",href:"https://support.iterable.com/hc/en-us/articles/360043464871-API-Keys-#creating-api-keys"},"How to find your API key"),"."),(0,n.kt)("li",{parentName:"ul"},"Make sure that selected API Key has sufficient ",(0,n.kt)("strong",{parentName:"li"},"permissions")," to read all selected ",(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#"},"streams"),".")),(0,n.kt)("h2",{id:"step-2-set-up-the-iterable-connector-in-airbyte"},"Step 2: Set up the Iterable connector in Airbyte"),(0,n.kt)("h3",{id:"for-airbyte-cloud"},"For Airbyte Cloud:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+new source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, enter the name for the Iterable connector and select ",(0,n.kt)("strong",{parentName:"li"},"Iterable")," from the Source type dropdown. "),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"api_key")),(0,n.kt)("li",{parentName:"ol"},"Enter the ",(0,n.kt)("inlineCode",{parentName:"li"},"start_date")," you want your sync to start from"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"))),(0,n.kt)("h3",{id:"for-airbyte-oss"},"For Airbyte OSS:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to the Airbyte Open Source dashboard"),(0,n.kt)("li",{parentName:"ol"},"Set the name for your source "),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"api_key")),(0,n.kt)("li",{parentName:"ol"},"Enter the ",(0,n.kt)("inlineCode",{parentName:"li"},"start_date")," you want your sync to start from"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"))),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Iterable source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")))),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#campaigns_campaigns"},"Campaigns")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#campaigns_metrics"},"Campaign Metrics")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#channels_channels"},"Channels")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Email Bounce")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Email Click")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Email Complaint")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Email Open")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Email Send")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Email Send Skip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Email Subscribe")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Email Unsubscribe")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#events_User_events"},"Events")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#lists_getLists"},"Lists")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#lists_getLists_0"},"List Users")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#messageTypes_messageTypes"},"Message Types")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#metadata_list_tables"},"Metadata")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#templates_getTemplates"},"Templates")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Users")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"PushSend")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"PushSendSkip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"PushOpen")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"PushUninstall")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"PushBounce")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"WebPushSend")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"WebPushClick")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"WebPushSendSkip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"InAppSend")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"InAppOpen")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"InAppClick")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"InAppClose")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"InAppDelete")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"InAppDelivery")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"InAppSendSkip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"InboxSession")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"InboxMessageImpression")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"SmsSend")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"SmsBounce")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"SmsClick")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"SmsReceived")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"SmsSendSkip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"SmsUsageInfo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Purchase")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"CustomEvent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"HostedUnsubscribeClick"))),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.18"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-04"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17573"},"17573")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Limit time range for SATs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.17"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16067"},"16067")),(0,n.kt)("td",{parentName:"tr",align:"left"},"added new events streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.16"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15670"},"15670")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Api key is passed via header")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.15"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8524"},"8524")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8380"},"8380")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update ",(0,n.kt)("inlineCode",{parentName:"td"},"Events")," stream to use ",(0,n.kt)("inlineCode",{parentName:"td"},"export/userEvents")," endpoint")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.13"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8091"},"8091")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Adjust slice ranges for email streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-09"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7780"},"7780")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Split EmailSend stream into slices to fix premature connection close error")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-03"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7619"},"7619")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bugfix type error while incrementally loading the ",(0,n.kt)("inlineCode",{parentName:"td"},"Templates")," stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-03"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7591"},"7591")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optimize export streams memory consumption for large requests")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5915"},"5915")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Enable campaign_metrics stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-20"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5915"},"5915")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add new streams: campaign_metrics, events")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-20"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6242"},"6242")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Updated schema for: campaigns, lists, templates, metadata")))))}c.isMDXComponent=!0}}]);