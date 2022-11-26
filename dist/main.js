(()=>{"use strict";const a="https://rickandmortyapi.com/api/character/",n=async n=>{const e=n?`${a}${n}`:a;try{const a=await fetch(e);return await a.json()}catch(a){console.log("Fetch Error",a)}},e=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",t=()=>'\n    <div class="Error404">\n        <h2>Error 404</h2>\n    </div>\n    ',s={"/":async()=>`\n    <div class="Characters">\n    ${(await n()).results.map((a=>`\n            <article class="Character-item">\n                <a href="#/${a.id}/">\n                    <img src="${a.image}" alt="${a.name}">\n                    <h2>${a.name}</h2>\n                </a>\n            </article>\n        `)).join("")}\n    </div>\n    `,"/:id":async()=>{const a=e(),t=await n(a);return`\n    <div class="Characters-inner">\n        <article class="Characters-card">\n            <img src="${t.image}" alt="${t.name}">\n            <h2>${t.name}</h2>\n        </article>\n        <article class="Characters-card">\n            <h3>Episodios: <span>${t.episode.length}</span></h3>\n            <h3>Status: <span>${t.status}</span></h3>\n            <h3>Species: <span>${t.species}</span></h3>\n            <h3>Gender: ${t.gender}</h3>\n            <h3>Origin: <span>${t.origin.name}</span></h3>\n            <h3>Last Location: <span>${t.Location.name}</span></h3>\n        </article>\n        <article class="image" alt="name"></article>\n    </div>\n    `},"/contact":"Contact"},i=async()=>{const a=document.getElementById("header"),n=document.getElementById("content");a.innerHTML=await'\n    <div class="Header-main">\n        <div class="Header-logo">\n            <h1>\n                <a href="/">100citifi.co</a>\n            </h1>\n            <div class="Header-nav">\n                <a href="#/about/">About</a>\n            </div>\n        </div>\n    </div>\n    ';let i=e(),c=await(a=>a.length<=3?"/"===a?a:"/:id":`/${a}`)(i),r=s[c]?s[c]:t;n.innerHTML=await r()};window.addEventListener("load",i),window.addEventListener("hashchange",i)})();