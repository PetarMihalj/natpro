(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{125:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return c}));var a=t(3),i=t(7),o=(t(0),t(130)),r={title:"Tipovi podataka"},p={unversionedId:"osnovni-pojmovi/tipovi-podataka",id:"osnovni-pojmovi/tipovi-podataka",isDocsHomePage:!1,title:"Tipovi podataka",description:"int",source:"@site/docs\\osnovni-pojmovi\\tipovi-podataka.md",slug:"/osnovni-pojmovi/tipovi-podataka",permalink:"/docs/osnovni-pojmovi/tipovi-podataka",editUrl:"https://github.com/vlahovivan/natpro/tree/main/website/docs/osnovni-pojmovi/tipovi-podataka.md",version:"current",lastUpdatedBy:"Ivan Vlahov",lastUpdatedAt:1614648881,sidebar:"materijaliSidebar",previous:{title:"Tipi\u010dni program",permalink:"/docs/osnovni-pojmovi/tipicni-program"},next:{title:"Osnovna matematika i logika",permalink:"/docs/osnovni-pojmovi/osnovna-matematika"}},l=[{value:"int",id:"int",children:[]},{value:"long long",id:"long-long",children:[]},{value:"float",id:"float",children:[]},{value:"double",id:"double",children:[]},{value:"char",id:"char",children:[]},{value:"string",id:"string",children:[]}],b={toc:l};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"int"},"int"),Object(o.b)("p",null,"Cjelobrojni tip podataka ",Object(o.b)("inlineCode",{parentName:"p"},"int")," zauzima 32 bita memorije, odnosno 4 bajta, te pokriva cijele brojeve od -2",Object(o.b)("sup",null,"31")," do 2",Object(o.b)("sup",null,"31")," - 1, odnosno otprilike od oko -2.147 x 10",Object(o.b)("sup",null,"9")," do oko 2.147 x 10",Object(o.b)("sup",null,"9"),"."),Object(o.b)("p",null,"U slu\u010daju da trebate izvr\u0161iti neke aritmeti\u010dke operacije s velikim brojevima, \u010desto se dogodi da prekora\u010dimo granicu tipa ",Object(o.b)("inlineCode",{parentName:"p"},"int")," te zbog toga rje\u0161enja zadataka ispadnu neto\u010dna. Na primjer, sljede\u0107i isje\u010dak koda daje neo\u010dekivano rje\u0161enje:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},'int a = 50000;\nint b = a*a;\nint c = b/2;\n\ncout << a << " " << b << " " << c;\n')),Object(o.b)("p",null,"O\u010dekivali bismo ovakav ispis:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"50000 2500000000 1250000000\n")),Object(o.b)("p",null,"Me\u0111utim, dobijemo ovakav ispis:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"50000 -1794967296 -897483648\n")),Object(o.b)("p",null,"jer se u varijablu ",Object(o.b)("inlineCode",{parentName:"p"},"b")," spremi kriva vrijednost zato \u0161to je vrijednost 50000",Object(o.b)("sup",null,"2")," ve\u0107a od gornje granice tipa ",Object(o.b)("inlineCode",{parentName:"p"},"int"),', te se vrijednost "prelije" natrag u negativne brojeve.'),Object(o.b)("h3",{id:"long-long"},"long long"),Object(o.b)("p",null,"Da bismo izbjegli pogre\u0161ke nastale zbog preljeva (eng. ",Object(o.b)("em",{parentName:"p"},"overflow"),"), koristit \u0107emo tip ",Object(o.b)("inlineCode",{parentName:"p"},"long long")," koji zauzima 64 bita memorije, a pokriva cijele brojeve od -2",Object(o.b)("sup",null,"63")," do 2",Object(o.b)("sup",null,"63")," - 1, odnosno od oko -9.223 x 10",Object(o.b)("sup",null,"18")," do oko 9.223 x 10",Object(o.b)("sup",null,"18"),"."),Object(o.b)("p",null,"Zamjenom tipa ",Object(o.b)("inlineCode",{parentName:"p"},"int")," za tip ",Object(o.b)("inlineCode",{parentName:"p"},"long long")," u pro\u0161lom isje\u010dku koda:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},'long long a = 50000;\nlong long b = a*a;\nlong long c = b/2;\n\ncout << a << " " << b << " " << c;\n')),Object(o.b)("p",null,"Dobijemo o\u010dekivani izlaz:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"50000 2500000000 1250000000\n")),Object(o.b)("p",null,"Tako\u0111er, s obzirom da kao natjecatelji \u017eelimo u\u0161tedjeti \u0161to je vi\u0161e mogu\u0107e vremena, mo\u017eemo na po\u010detak na\u0161e \u0161ablone (ispod ",Object(o.b)("inlineCode",{parentName:"p"},"#include <bits/stdc++.h>")," retka) dodati i liniju:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"#define ll long long\n")),Object(o.b)("p",null,"Te tako u\u0161tedjeti vrijeme pi\u0161u\u0107i ",Object(o.b)("inlineCode",{parentName:"p"},"ll")," umjesto ",Object(o.b)("inlineCode",{parentName:"p"},"long long"),"."),Object(o.b)("h3",{id:"float"},"float"),Object(o.b)("p",null,"\u017delimo li koristiti brojeve s pomi\u010dnim zarezom, koristimo tip ",Object(o.b)("inlineCode",{parentName:"p"},"float"),"."),Object(o.b)("p",null,"Bitno je spomenuti da \u010desto preciznost tipa ",Object(o.b)("inlineCode",{parentName:"p"},"float")," nije dovoljno dobra te ga je bolje izbjegavati. Na primjer, sljede\u0107i isje\u010dak koda ne daje o\u010dekivani ispis:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},'float x = 3.14159265f;\n\ncout << x << endl;\nprintf("%1.8f", x);\n')),Object(o.b)("p",null,"Ispis:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"3.14159\n3.14159274\n")),Object(o.b)("h3",{id:"double"},"double"),Object(o.b)("p",null,"\u017delimo li koristiti brojeve s pomi\u010dnim zarezom dvostruke preciznosti, koristimo tip ",Object(o.b)("inlineCode",{parentName:"p"},"double"),". Uzmemo li pro\u0161li isje\u010dak i promijenimo tip, dobit \u0107emo druga\u010diji ispis."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},'double x = 3.14159265;\n\ncout << x << endl;\nprintf("%1.8f", x);\n')),Object(o.b)("p",null,"Ispis:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"3.14159\n3.14159265\n")),Object(o.b)("h3",{id:"char"},"char"),Object(o.b)("p",null,"\u017delimo li u memoriju spremiti neki znak, koristimo tip ",Object(o.b)("inlineCode",{parentName:"p"},"char"),". Taj tip je zapravo cjelobrojni tip podataka, mo\u017ee se pretvarati u ostale cjelobrojne tipove te se mogu i vr\u0161iti neke aritmeti\u010dke operacije s njima, poput zbrajanja i oduzimanja (mogu se vr\u0161iti i ostale operacije, ali to nema ba\u0161 smisla)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"cout << (int)'a' << \"\\n\";\ncout << (char)('a' + 1) << \"\\n\";\ncout << (char)(97) << \"\\n\";\ncout << ('a' < 'z') << \"\\n\";\ncout << (int)('a' * 'b'); // Ovo, iako radi, nema ba\u0161 smisla...\n")),Object(o.b)("p",null,"Ispis:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"97\nb\na\n1\n9506\n")),Object(o.b)("h3",{id:"string"},"string"),Object(o.b)("p",null,"\u017delimo li u memoriju spremiti nekakvu rije\u010d ili re\u010denicu, koristimo ",Object(o.b)("inlineCode",{parentName:"p"},"string"),". ",Object(o.b)("inlineCode",{parentName:"p"},"string")," nije osnovni tip podataka, ve\u0107 je vi\u0161e kao polje podataka tipa ",Object(o.b)("inlineCode",{parentName:"p"},"char")," koje ima ugra\u0111ene neke funkcije koje mo\u017eemo koristiti da bismo manipulirali tim podacima, ali o tome vi\u0161e u poglavlju o tipu ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"."),Object(o.b)("p",null,"Za spremanje podataka u varijablu tipa ",Object(o.b)("inlineCode",{parentName:"p"},"string")," mo\u017eemo koristiti naredbu ",Object(o.b)("inlineCode",{parentName:"p"},"cin"),", me\u0111utim, ako taj izraz na ulazu sadr\u017ei razmake, u varijablu \u0107e se spremiti samo prva rije\u010d. Da bismo spremili \u010ditav redak, koristimo naredbu ",Object(o.b)("inlineCode",{parentName:"p"},"getline"),". Na primjer, za ulaz:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"NatPro je super!\n")),Object(o.b)("p",null,"Sljede\u0107i isje\u010dak koda"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"string s;\ncin >> s;\n\ncout << s;\n")),Object(o.b)("p",null,"\u0107e ispisati ",Object(o.b)("inlineCode",{parentName:"p"},"NatPro"),", dok \u0107e za sljede\u0107i isje\u010dak"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"string s;\ngetline(cin, s);\n\ncout << s;\n")),Object(o.b)("p",null,"ispisati ",Object(o.b)("inlineCode",{parentName:"p"},"NatPro je super!"),"."),Object(o.b)("p",null,"Neke funkcije s kojima \u0107ete se susretati kao argumente primaju tip ",Object(o.b)("inlineCode",{parentName:"p"},"const char *")," te iz tog razloga ne\u0107e raditi s tipom ",Object(o.b)("inlineCode",{parentName:"p"},"string"),", me\u0111utim, kori\u0161tenjem funkcije ",Object(o.b)("inlineCode",{parentName:"p"},"c_str")," mo\u017eete pretvoriti ",Object(o.b)("inlineCode",{parentName:"p"},"string")," u ",Object(o.b)("inlineCode",{parentName:"p"},"const char *")," te tako rije\u0161iti potencijalni problem."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},'string s = "echo NatPro je super!";\n\n// system(s); Ne radi!\nsystem(s.c_str());\n')),Object(o.b)("p",null,"U ovom primjeru naredba ",Object(o.b)("inlineCode",{parentName:"p"},"system")," izvr\u0161ava naredbu u naredbenom retku."))}c.isMDXComponent=!0},130:function(e,n,t){"use strict";t.d(n,"a",(function(){return j})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),c=function(e){var n=i.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},j=function(e){var n=c(e.components);return i.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},s=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),j=c(t),s=a,m=j["".concat(r,".").concat(s)]||j[s]||u[s]||o;return t?i.a.createElement(m,p(p({ref:n},b),{},{components:t})):i.a.createElement(m,p({ref:n},b))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=s;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var b=2;b<o;b++)r[b]=t[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);