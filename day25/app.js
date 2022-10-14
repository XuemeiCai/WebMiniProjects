const toggleBtn=document.getElementsByClassName("toggle-button")[0];
const sidebarFullPage=document.getElementsByClassName("sidebarFullpage")[0];
const closeBtn=document.getElementsByClassName("closeBtn")[0];

toggleBtn.addEventListener("click",()=>{
    sidebarFullPage.classList.add("active");
})

closeBtn.addEventListener("click",()=>{
    sidebarFullPage.classList.remove("active");
})