"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[2338],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=r,m=f["".concat(u,".").concat(d)]||f[d]||l[d]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87968:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],c={title:"Two FA",sidebar_position:9,description:"Apache ShenYu Two FA",author:"xiaoyu",categories:"Apache ShenYu",tags:["Two-FA"]},u=void 0,s={unversionedId:"two-fa",id:"two-fa",isDocsHomePage:!1,title:"Two FA",description:"Apache ShenYu Two FA",source:"@site/community/8-two-fa.md",sourceDirName:".",slug:"/two-fa",permalink:"/community/two-fa",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/community/8-two-fa.md",version:"current",lastUpdatedBy:"Kunshuai Zhu",lastUpdatedAt:1642561713,formattedLastUpdatedAt:"1/19/2022",sidebarPosition:9,frontMatter:{title:"Two FA",sidebar_position:9,description:"Apache ShenYu Two FA",author:"xiaoyu",categories:"Apache ShenYu",tags:["Two-FA"]},sidebar:"community",previous:{title:"Voting in a new PPMC member",permalink:"/community/vote-ppmc"},next:{title:"Sign ICLA Guide",permalink:"/community/icla"}},p=[{value:"Two-Factor Authentication(2FA)",id:"two-factor-authentication2fa",children:[]},{value:"Enable 2FA on GitHub",id:"enable-2fa-on-github",children:[]},{value:"How to Submit Codes",id:"how-to-submit-codes",children:[]}],l={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"two-factor-authentication2fa"},"Two-Factor Authentication(2FA)"),(0,a.kt)("p",null,"Two factor authentication (2FA) refers to the authentication method that combines both passport, and an object (credit card, SMS phone, token or biomarkers as fingerprint) to identify a user.\nTo ensure the security of the committer\u2019s account, we need you to enable 2FA to sign in and contribute codes on GitHub."),(0,a.kt)("p",null,"More details, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://help.github.com/articles/requiring-two-factor-authentication-in-your-organization/"},"2FA"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To be noticed: If you do not enable 2FA, you will be removed from the project and unable to access our repositories and the fork from our private repository.")),(0,a.kt)("h2",{id:"enable-2fa-on-github"},"Enable 2FA on GitHub"),(0,a.kt)("p",null,"For detailed operations, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://help.github.com/articles/configuring-two-factor-authentication-via-a-totp-mobile-app/"},"Enable Two Factor Authentication with TOTP"),"."),(0,a.kt)("p",null,"After enabling 2FA, you need to sign in GitHub with the way of username/password + mobile phone authentication code."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: If you cannot download the APP through the page link, you can search and download Google Authenticator in APP Store.")),(0,a.kt)("h2",{id:"how-to-submit-codes"},"How to Submit Codes"),(0,a.kt)("p",null,"After enabling 2FA, you need to generate a private access Token to perform operations such as git submit and so on.\nAt this time, you will use username + private access Token in replace of username + password to submit codes."),(0,a.kt)("p",null,"For detailed operations, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/"},"Create a Private Token"),"."))}f.isMDXComponent=!0}}]);