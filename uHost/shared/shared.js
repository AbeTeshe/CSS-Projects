document.getElementById("toggle-button").addEventListener("click",function()
{
    document.getElementById("mobile-view").style.transform="scaleX(1)";
})
document.querySelector("main").addEventListener("click",function()
{
    document.getElementById("mobile-view").style.transform="scaleX(0)";  
})