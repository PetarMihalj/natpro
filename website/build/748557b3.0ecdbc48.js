(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{130:function(e,o,n){"use strict";n.d(o,"a",(function(){return m})),n.d(o,"b",(function(){return c}));var a=n(0),i=n.n(a);function t(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function r(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(o){t(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function s(e,o){if(null==e)return{};var n,a,i=function(e,o){if(null==e)return{};var n,a,i={},t=Object.keys(e);for(a=0;a<t.length;a++)n=t[a],o.indexOf(n)>=0||(i[n]=e[n]);return i}(e,o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)n=t[a],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),j=function(e){var o=i.a.useContext(l),n=o;return e&&(n="function"==typeof e?e(o):p(p({},o),e)),n},m=function(e){var o=j(e.components);return i.a.createElement(l.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return i.a.createElement(i.a.Fragment,{},o)}},b=i.a.forwardRef((function(e,o){var n=e.components,a=e.mdxType,t=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=j(n),b=a,c=m["".concat(r,".").concat(b)]||m[b]||u[b]||t;return n?i.a.createElement(c,p(p({ref:o},l),{},{components:n})):i.a.createElement(c,p({ref:o},l))}));function c(e,o){var n=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var t=n.length,r=new Array(t);r[0]=b;var p={};for(var s in o)hasOwnProperty.call(o,s)&&(p[s]=o[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var l=2;l<t;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},98:function(e,o,n){"use strict";n.r(o),n.d(o,"frontMatter",(function(){return r})),n.d(o,"metadata",(function(){return p})),n.d(o,"toc",(function(){return s})),n.d(o,"default",(function(){return j}));var a=n(3),i=n(7),t=(n(0),n(130)),r={title:"Asimptotska slo\u017eenost algoritma"},p={unversionedId:"o-dobrim-algoritmima/asimptotska-slozenost",id:"o-dobrim-algoritmima/asimptotska-slozenost",isDocsHomePage:!1,title:"Asimptotska slo\u017eenost algoritma",description:"o asimptotskoj slo\u017eenosti, vremenskoj i prostornoj slo\u017eenosti, usporedbi a.s.a. s vremenom izvo\u0111enja, par primjera brute force algoritama koji se mogu rijesiti jednom formulom, nekih koji se mogu ubrzati s n^2 na n*log(n) i sli\u010dno, kako prepoznati koja se kompleksnost ocekuje iz ogranicenja zadatka",source:"@site/docs\\o-dobrim-algoritmima\\asimptotska-slozenost.md",slug:"/o-dobrim-algoritmima/asimptotska-slozenost",permalink:"/docs/o-dobrim-algoritmima/asimptotska-slozenost",editUrl:"https://github.com/vlahovivan/natpro/tree/main/website/docs/o-dobrim-algoritmima/asimptotska-slozenost.md",version:"current",lastUpdatedBy:"Ivan Vlahov",lastUpdatedAt:1614970658,sidebar:"materijaliSidebar",previous:{title:"Dobar algoritam",permalink:"/docs/o-dobrim-algoritmima/dobar-algoritam"},next:{title:"Vector",permalink:"/docs/bitne-strukture-podataka/vector"}},s=[],l={toc:s};function j(e){var o=e.components,n=Object(i.a)(e,["components"]);return Object(t.b)("wrapper",Object(a.a)({},l,n,{components:o,mdxType:"MDXLayout"}),Object(t.b)("p",null,"o asimptotskoj slo\u017eenosti, vremenskoj i prostornoj slo\u017eenosti, usporedbi a.s.a. s vremenom izvo\u0111enja, par primjera brute force algoritama koji se mogu rijesiti jednom formulom, nekih koji se mogu ubrzati s n^2 na n*log(n) i sli\u010dno, kako prepoznati koja se kompleksnost ocekuje iz ogranicenja zadatka"),Object(t.b)("p",null,"S obzirom da se neki zadaci mogu rije\u0161iti na vi\u0161e razli\u010ditih na\u010dina, dobro bi bilo imati neku notaciju pomo\u0107u koje bismo mogli ozna\u010davati koliko je koji algoritam dobar ili lo\u0161. Upravo zato \u0107emo se upoznati s ",Object(t.b)("em",{parentName:"p"},"Veliko O")," notacijom, pomo\u0107u koje na jednostavan na\u010din mo\u017eemo opisati algoritme te brzo odrediti trebamo li koristiti odre\u0111eni algoritam za odre\u0111eni zadatak."),Object(t.b)("p",null,"Pomo\u0107u Veliko O notacije mo\u017eemo odrediti na\u010din na koji brzina izvo\u0111enja programa ovisi o jednoj ili vi\u0161e varijabli. "),Object(t.b)("p",null,"Uzmimo na primjer sljede\u0107i isje\u010dak koda:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-cpp"},"int a, b;\ncin >> a >> b;\n\ncout << a + b;\n")),Object(t.b)("p",null,"Primijetit \u0107emo da \u0107e program, neovisno o vrijednostima varijabli ",Object(t.b)("inlineCode",{parentName:"p"},"a")," i ",Object(t.b)("inlineCode",{parentName:"p"},"b"),", uvijek izvr\u0161iti jednu operaciju zbrajanja. Takav program nazivamo programom ",Object(t.b)("strong",{parentName:"p"},"konstantne")," slo\u017eenosti, te njegovu slo\u017eenost zapisujemo kao ",Object(t.b)("em",{parentName:"p"},"O(1)")," u Veliko O notaciji. Pogledajmo sad sljede\u0107i primjer:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-cpp"},"int n;\ncin >> n;\n\nfor(int i=0; i<n; i++){\n    cout << i << endl;\n}\n")),Object(t.b)("p",null,"Primje\u0107ujemo da broj operacija ispisa u ovom programskom isje\u010dku ovisi o vrijednosti varijabli ",Object(t.b)("inlineCode",{parentName:"p"},"n")," - za ",Object(t.b)("inlineCode",{parentName:"p"},"n=1"),", operacija ispisa \u0107e se izvr\u0161iti jednom, za ",Object(t.b)("inlineCode",{parentName:"p"},"n=10")," \u0107e se izvr\u0161iti 10 puta, i tako dalje. U ovom slu\u010daju govorimo o ",Object(t.b)("strong",{parentName:"p"},"linearnoj")," slo\u017eenosti, te zapisujemo ",Object(t.b)("em",{parentName:"p"},"O(n)"),". Pogledajmo jo\u0161 jedan primjer:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-cpp"},"int n;\ncin >> n;\n\nfor(int i=0; i<n; i++){\n    for(int j=0; j<n; j++){\n        cout << i*n + j << endl;\n    }\n}\n")),Object(t.b)("p",null,"U ovom slu\u010daju \u0107e se za ",Object(t.b)("inlineCode",{parentName:"p"},"n=1")," operacija ispisa izvr\u0161iti jedan put, a za ",Object(t.b)("inlineCode",{parentName:"p"},"n=10")," \u0107e se izvr\u0161iti 100 puta. Lako mo\u017eemo zaklju\u010diti da \u0107e se operacija uvijek izvesti n",Object(t.b)("sup",null,"2")," puta. U tom slu\u010daju govorimo o ",Object(t.b)("strong",{parentName:"p"},"kvadratnoj")," slo\u017eenosti, odnosno ",Object(t.b)("em",{parentName:"p"},"O(n",Object(t.b)("sup",null,"2"),")"),"."),Object(t.b)("p",null,"Slo\u017eenost ne mora nu\u017eno biti u obliku O(n",Object(t.b)("sup",null,"x"),"). Pogledajmo sljede\u0107e primjere:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-cpp"},"// O(log(n)), logaritamska slo\u017eenost\nint n;\ncin >> n;\n\nwhile(n>0){\n    cout << n << endl;\n\n    n = n/2;\n}\n")),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-cpp"},"// O(sqrt(n)), korijen iz n slo\u017eenost\nint n;\ncin >> n;\n\nfor(int i=0; i*i < n; i++){\n    cout << i << endl;\n}\n")),Object(t.b)("p",null,"Naravno, nisu svi programi ovako jednostavni. Programi se uglavnom sastoje od nekakvih faza, gdje svaka faza ima svoju slo\u017eenost. Ukupan broj operacija je naravno suma broja operacija u svakoj od faza. Me\u0111utim, u Veliko O notaciji zapisujemo samo slo\u017eenost one faze koja najvi\u0161e optere\u0107uje brzinu izvo\u0111enja programa."),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-cpp"},'int n;\ncin >> n;\n\n// Prva faza\nfor(int i=0; i<n; i++){\n    cout << i << endl;\n}\n\n// Druga faza\nfor(int i=0; i<n; i++){\n    for(int j=i; j<n; j++){\n        cout << i << " " << j << endl;\n    }\n}\n')),Object(t.b)("p",null,"Ve\u0107 znamo da je slo\u017eenost prve faze ",Object(t.b)("em",{parentName:"p"},"O(n)"),", me\u0111utim, koja je slo\u017eenost druge faze? U ovom slu\u010daju varijabla ",Object(t.b)("inlineCode",{parentName:"p"},"j")," u for petlji ne po\u010dinje od nule, ve\u0107 od vrijednosti varijable ",Object(t.b)("inlineCode",{parentName:"p"},"i"),", te mo\u017eemo izra\u010dunati da \u0107e se operacija ispisa izvr\u0161iti n","*","(n+1)/2 puta. Kad raspi\u0161emo taj izraz, dobijemo n",Object(t.b)("sup",null,"2"),"/2 + n/2. I u ovom slu\u010daju govorimo o ",Object(t.b)("strong",{parentName:"p"},"kvadratnoj")," slo\u017eenosti, odnosno ",Object(t.b)("em",{parentName:"p"},"O(n",Object(t.b)("sup",null,"2"),")"),", jer je pribrojnik n",Object(t.b)("sup",null,"2"),"/2 onaj koji najvi\u0161e optere\u0107uje brzinu izvo\u0111enja programa. \u0160to se ti\u010de konstantnog faktora 1/2, njega ne zapisujemo u Veliko O notaciji. Sada kad znamo broj operacija obje faze, kad ih zbrojimo dobijemo ukupan broj operacija: n",Object(t.b)("sup",null,"2"),"/2 + 3","*","n/2. I tako zaklju\u010dujemo da je ukupna slo\u017eenost ovog programa ",Object(t.b)("em",{parentName:"p"},"O(n",Object(t.b)("sup",null,"2"),")"),"."),Object(t.b)("p",null,"Nekad slo\u017eenost programa ne ovisi samo o jednoj varijabli:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-cpp"},'int n, m;\ncin >> n >> m;\n\nfor(int i=0; i<n; i++){\n    for(int j=0; j<m; j++){\n        cout << i << " " << j << endl;\n    }\n}\n')),Object(t.b)("p",null,"U ovom slu\u010daju \u0107e se izvr\u0161iti n","*","m operacija ispisa, pa je slo\u017eenost ",Object(t.b)("em",{parentName:"p"},"O(nm)"),"."),Object(t.b)("p",null,"Mo\u017eda ste se tijekom \u010ditanja zapitali, za\u0161to je ovo uop\u0107e bitno? Odgovor le\u017ei u tome da poznavanjem asimptotske slo\u017eenosti algoritama mo\u017eemo jako brzo procijeniti ho\u0107e li na\u0161e rje\u0161enje biti dovoljno dobro da se program izvr\u0161i unutar zadanog vremenskog ograni\u010denja. Uzmimo na primjer da evaluator mo\u017ee obaviti 10",Object(t.b)("sup",null,"9")," operacija u jednoj sekundi. U tekstu zadatka pi\u0161e da varijabla ",Object(t.b)("inlineCode",{parentName:"p"},"n")," mo\u017ee poprimiti vrijednosti od 1 do 10",Object(t.b)("sup",null,"5"),", a vremensko ograni\u010denje izvo\u0111enja programa je 1 sekunda. Tada mo\u017eemo biti sigurni da ",Object(t.b)("em",{parentName:"p"},"O(n",Object(t.b)("sup",null,"2"),")")," ne\u0107e biti dovoljno dobro jer mo\u017eemo ra\u010dunati da \u0107e se izvr\u0161iti puno ve\u0107i broj operacija nego \u0161to evaluator mo\u017ee izra\u010dunati u sekundi. U tablici mo\u017eemo pogledati koliko bi otprilike trajalo izvo\u0111enje za koju slo\u017eenost."),Object(t.b)("p",null,Object(t.b)("strong",{parentName:"p"},"OVDJE IDE TABLICA")))}j.isMDXComponent=!0}}]);