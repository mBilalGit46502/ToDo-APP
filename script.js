let btn=document.getElementById("btn")

btn.addEventListener("click",function(){
    let output=document.querySelector(".output")
    let input=document.getElementById("input")

    let text=document.createElement("div")
text.className="text"
    let p=document.createElement("p");
    p.innerHTML=input.value
    let delIcon=document.createElement("i")
    delIcon.innerHTML='<i style="color:red;" class="fa-solid fa-xmark"></i>'
    console.log(delIcon);
    
    text.append(p,delIcon)
    
    output.appendChild(text)

    input.value=""
delIcon.addEventListener("click",function(){
    text.style.display="none"
})
})