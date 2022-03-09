
var button =document.getElementsByClassName("button")
var popup=document.querySelector(".pop-up");
for (var i=0;i<button.length;i++)
{
    button[i].addEventListener("click",function()
    {
        
        popup.style.visibility="visible";
        popup.style.transform="translateY(0)";
        
    })
}
document.querySelector(".pop-up-item-button").addEventListener("click",function()
{
    popup.style.visibility="hidden";
    popup.style.transform="translateY(-3rem)";
})
