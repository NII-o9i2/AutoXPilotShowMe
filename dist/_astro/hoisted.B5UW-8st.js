document.querySelector(".hamburger").addEventListener("click",()=>document.querySelector(".nav-links").classList.toggle("fold"));const t=document.querySelector(".slide"),n=document.querySelectorAll(".lang-switch span");document.querySelector(".lang-switch").addEventListener("click",()=>{t.classList.toggle("slide-move"),n.forEach(e=>e.classList.toggle("active")),setTimeout(()=>{window.location.pathname.includes("en")?window.location.pathname=window.location.pathname.replace("/en",""):window.location.pathname=window.location.pathname.replace("/","/en/")},300)});
