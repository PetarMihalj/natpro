(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{120:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return p})),t.d(a,"metadata",(function(){return l})),t.d(a,"toc",(function(){return b})),t.d(a,"default",(function(){return j}));var n=t(3),i=t(7),r=(t(0),t(131)),o=["components"],p={title:"Pisanje \u010dlanka"},l={unversionedId:"doprinos-ovim-materijalima/kako-napisati-clanak",id:"doprinos-ovim-materijalima/kako-napisati-clanak",isDocsHomePage:!1,title:"Pisanje \u010dlanka",description:"Pisanje \u010dlanaka",source:"@site/docs/doprinos-ovim-materijalima/kako-napisati-clanak.md",slug:"/doprinos-ovim-materijalima/kako-napisati-clanak",permalink:"/docs/doprinos-ovim-materijalima/kako-napisati-clanak",editUrl:"https://github.com/x-fer/natpro/tree/main/website/docs/doprinos-ovim-materijalima/kako-napisati-clanak.md",version:"current",lastUpdatedBy:"Petar Mihalj",lastUpdatedAt:1628712070,sidebar:"doprinosSidebar",next:{title:"Prijava pogre\u0161ke",permalink:"/docs/doprinos-ovim-materijalima/prijava-pogreske"}},b=[{value:"Pisanje \u010dlanaka",id:"pisanje-\u010dlanaka",children:[{value:"Korak 1: preuzimanje repozitorija i pokretanje servera",id:"korak-1-preuzimanje-repozitorija-i-pokretanje-servera",children:[]},{value:"Korak 2: doprinos",id:"korak-2-doprinos",children:[]},{value:"Korak 3: stvaranje commita",id:"korak-3-stvaranje-commita",children:[]},{value:"Korak 4: predaja",id:"korak-4-predaja",children:[]},{value:"Hvala!",id:"hvala",children:[]}]}],c={toc:b};function j(e){var a=e.components,t=Object(i.a)(e,o);return Object(r.b)("wrapper",Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"pisanje-\u010dlanaka"},"Pisanje \u010dlanaka"),Object(r.b)("p",null,"Svatko mo\u017ee doprinijeti ovim materijalima pisanjem novih ili prepravljanjem starih \u010dlanaka."),Object(r.b)("p",null,"Potrebno"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"git klijent (upute su za git command-line interface)"),Object(r.b)("li",{parentName:"ul"},"github account (opcionalno, samo za pull-request na\u010din)"),Object(r.b)("li",{parentName:"ul"},"npm (node package manager) (opcionalno, samo ako \u017eelite vidjeti rezultat, ali preporu\u010deno).")),Object(r.b)("h3",{id:"korak-1-preuzimanje-repozitorija-i-pokretanje-servera"},"Korak 1: preuzimanje repozitorija i pokretanje servera"),Object(r.b)("p",null,"Pozicionirajte se na mjesto gdje \u017eelite klonirati repozitorij.\nSa naredbom ",Object(r.b)("inlineCode",{parentName:"p"},"git clone https://github.com/x-fer/natpro"),"\nklonirajte repozitorij."),Object(r.b)("p",null,"Ako \u017eelite u\u017eivo vidjeti rezultate va\u0161ih modifikacije, pokrenite\n",Object(r.b)("inlineCode",{parentName:"p"},"npm install")," , a zatim ",Object(r.b)("inlineCode",{parentName:"p"},"npm start"),".\nZadnja komanda pokrenut \u0107e server koji prati promjene i automatski a\u017eurira stranicu.\nStranicu mo\u017eete vidjeti na ",Object(r.b)("inlineCode",{parentName:"p"},"localhost:3000"),"."),Object(r.b)("h3",{id:"korak-2-doprinos"},"Korak 2: doprinos"),Object(r.b)("p",null,"Ugasite server ako je upaljen.\nNapravite novu granu i pozicionirajte se na nju sa naredbom ",Object(r.b)("inlineCode",{parentName:"p"},"git checkout -b ime-prezime-tema"),",\nnpr. ",Object(r.b)("inlineCode",{parentName:"p"},"petar-mihalj-pohlepni-algoritmi"),".\nSad ponovo mo\u017eete upaliti server."),Object(r.b)("p",null,"Jedini folderi koje biste trebali mijenjati su ",Object(r.b)("inlineCode",{parentName:"p"},"static")," i ",Object(r.b)("inlineCode",{parentName:"p"},"docs"),", uz file ",Object(r.b)("inlineCode",{parentName:"p"},"sidebars.js"),".\nNamjena svih trebala bi biti jasna, a primjere markdown sintakse mo\u017eete vidjeti u ",Object(r.b)("inlineCode",{parentName:"p"},"docs/doprinos-ovim-materijalima/upute-za-markdown"),"."),Object(r.b)("p",null,"Dok radite na materijalima korisno je dijelove doprinosa odvajati u razli\u010dite commit-ove,\nali strukturu tih prepu\u0161tamo autoru, dok god krajnji rezultat bude u commitu koji je na inicijalno napravljenom branchu."),Object(r.b)("h3",{id:"korak-3-stvaranje-commita"},"Korak 3: stvaranje commita"),Object(r.b)("p",null,"Nakon zavr\u0161etka doprinosa autor bi trebao commitati sve promjene koje ima.\nNaredba ",Object(r.b)("inlineCode",{parentName:"p"},"git status")," trebala bi pokazati samo datoteke koje autor mijenja.\nAutor zatim treba pripremiti commit dodavanjem svih promijenjenih datoteka koje su bitne za sadr\u017eaj,\nuzastopnom primjenom naredbi ",Object(r.b)("inlineCode",{parentName:"p"},"git add <file>")," ili ",Object(r.b)("inlineCode",{parentName:"p"},"git add .")," (druga samo ako status pokazuje to\u010dno ono \u0161to treba dodati).\nNa kraju treba zavr\u0161iti commit naredbom ",Object(r.b)("inlineCode",{parentName:"p"},'git commit -m "Poruka koja opisuje \u0161to je napravljeno"'),".\nPoruka mo\u017ee biti i deskriptivnija."),Object(r.b)("h3",{id:"korak-4-predaja"},"Korak 4: predaja"),Object(r.b)("p",null,"Izaberite jednu od ponu\u0111enih metoda predaje \u010dlanka."),Object(r.b)("h4",{id:"korak-4a-nije-potreban-github-account"},"Korak 4a (nije potreban github account):"),Object(r.b)("p",null,"Prva metoda slanja rezultata svodi se na slanje ",Object(r.b)("em",{parentName:"p"},".patch")," datoteka na oba maila:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ivan.vlahov@gmail.com")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"git@pmihalj.com"))),Object(r.b)("p",null,"Patch datoteke mo\u017eete generirati naredbom ",Object(r.b)("inlineCode",{parentName:"p"},"git format-patch $(git merge-base --fork-point main) --stdout > ime-prezime-tema.patch"),".\nTa naredba generirat \u0107e ",Object(r.b)("inlineCode",{parentName:"p"},".patch")," datoteku koja sadr\u017ei sve promjene od trenutka kad se trenutni branch odvojio od ",Object(r.b)("inlineCode",{parentName:"p"},"main")," brancha.\nDatoteku je potrebno poslati na mailove koji su ve\u0107 navedeni."),Object(r.b)("h4",{id:"korak-4b-potreban-github-account"},"Korak 4b (potreban github account):"),Object(r.b)("p",null,"Druga metoda slanja svodi se na upload novih/ure\u0111enih datoteka na ",Object(r.b)("inlineCode",{parentName:"p"},"pastebin.com")," i otvaranje github issue-a."),Object(r.b)("p",null,"Odite na github, otvorite issue na ",Object(r.b)("inlineCode",{parentName:"p"},"x-fer/natpro")," repozitoriju, opi\u0161ite \u0161to ste napravili i po\u0161aljite linkove na datoteke.\nUrednici \u0107e promjene razmotriti i eventualno ugraditi u stranicu."),Object(r.b)("h4",{id:"korak-4c-potreban-github-account"},"Korak 4c (potreban github account):"),Object(r.b)("p",null,"Tre\u0107a metoda slanja svodi se na forkanje repozitorija i pushanje podataka na svoj repozitorij,\na zatim otvaranje pull requesta na ",Object(r.b)("inlineCode",{parentName:"p"},"x-fer/natpro")," repozitoriju."),Object(r.b)("p",null,"U github su\u010delju u desnom gornjem kutu postoji ",Object(r.b)("inlineCode",{parentName:"p"},"fork")," gumb. Njim kreirate kopiju\nnatpro repozitorija na va\u0161em github ra\u010dunu."),Object(r.b)("p",null,"Nakon \u0161to to napravite, trebate poslati branch koji ste napravili lokalno,\nupravo na taj repozitorij. Za po\u010detak promijenite referentni remote na va\u0161 remote."),Object(r.b)("p",null,"Uklonite postoje\u0107i:\n",Object(r.b)("inlineCode",{parentName:"p"},"git remote rm origin")),Object(r.b)("p",null,"a) Ako koristite username i password za autorizaciju:\n",Object(r.b)("inlineCode",{parentName:"p"},"git remote add origin https://github.com/GITHUB_ACCOUNT/natpro")),Object(r.b)("p",null,"b) Ako koristite ssh klju\u010d:\n",Object(r.b)("inlineCode",{parentName:"p"},"git remote add origin git@github.com:GITHUB_ACCOUNT/natpro")),Object(r.b)("p",null,"Po\u0161aljite branch na svoj remote.\n",Object(r.b)("inlineCode",{parentName:"p"},"git branch --set-upstream-to origin/ime-prezime-tema"),"\n",Object(r.b)("inlineCode",{parentName:"p"},"git push")),Object(r.b)("p",null,"Napravite pull request kojim targetirate taj branch na remoteu.\n(ovo treba malo dopisati)"),Object(r.b)("h3",{id:"hvala"},"Hvala!"),Object(r.b)("p",null,"Va\u0161 doprinos \u0107e se razmotriti, a ako je dobar, uklju\u010dit \u0107e se u materijale!"))}j.isMDXComponent=!0},131:function(e,a,t){"use strict";t.d(a,"a",(function(){return j})),t.d(a,"b",(function(){return d}));var n=t(0),i=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),c=function(e){var a=i.a.useContext(b),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},j=function(e){var a=c(e.components);return i.a.createElement(b.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},u=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),j=c(t),u=n,d=j["".concat(o,".").concat(u)]||j[u]||m[u]||r;return t?i.a.createElement(d,p(p({ref:a},b),{},{components:t})):i.a.createElement(d,p({ref:a},b))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=u;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var b=2;b<r;b++)o[b]=t[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);