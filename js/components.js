document.addEventListener("DOMContentLoaded", async () => {

    await loadComponent("navbar", "components/navbar.html");
    await loadComponent("footer", "components/footer.html");

    initializeNavbar();

});

async function loadComponent(id, file){

    const response = await fetch(file);

    const html = await response.text();

    document.getElementById(id).innerHTML = html;

}

function initializeNavbar(){

    const btn=document.getElementById("mobileMenuBtn");

    const menu=document.getElementById("mobileMenu");

    if(btn){

        btn.addEventListener("click",()=>{

            menu.classList.toggle("hidden");

        });

    }

}