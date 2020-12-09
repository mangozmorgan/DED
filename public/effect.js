let contactLink = document.getElementById("contactLink")
let htmlLog = document.getElementsByClassName("html")
let contactWindow = document.getElementById("modalContact")
let tutoWindow = document.getElementById("modalTuto")
let bodyy = document.body
let tutoSection = document.getElementById("tutos")
let banniere = document.getElementById("banniere")
let logDiv = document.getElementById("logg")
let girlyBtn = document.getElementById("girly")
let topBar = document.getElementById("topBar")
let git = document.getElementById("git")
let projet = document.getElementById("projet")
let projetWindow =document.getElementById("modalProjet")
let eaSection = document.getElementById("help")
let modalCgu = document.getElementById("modalCgu")
let htmlLogo = document.getElementsByClassName("html")
let imgJs = document.getElementById("imgJs")
let imgHtml = document.getElementById("imgHtml")
let imgCss = document.getElementById("imgCss")
let imgMongo = document.getElementById("imgMongo")
let imgNode = document.getElementById("imgNode")
let imgGit = document.getElementById("imgGit")
let logoAnim = document.getElementById("active")
let atome1 =document.getElementById("animAtome")
let atome2 =document.getElementById("animAtome2")
let btnSendRegister = document.getElementById("sendFormRegister")
let modalRegister = document.getElementById("modalRegister")
let modalLogin = document.getElementById("modalLogin")
let divLogin = document.getElementById("divLogin")
let container = document.getElementById("container")
let openVolet = document.getElementById("openVolet")
let lateral = document.getElementById("lateral")
let contenu = document.getElementById("contenu")
let row = document.getElementById('row')
let themeDiv = document.getElementById("themeDiv")
let themeFix = document.getElementById("themeFix")
let btnLogin = document.getElementById("btnLogin")
let decoBtn = document.getElementById("decoBtn")
let inscBtn = document.getElementById("inscBtn")
let logOkBtn = document.getElementById("logOkBtn")
let pseudoPost = document.getElementById("pseudoPost")

// Onglets //
contactLink.addEventListener("mouseenter",(e)=>{
    if(modalRegister.className === "modalRegister"){
        contactWindow.className = "maskContact"
    }else{
    contactWindow.classList.replace("maskContact" , "hiddenWindow")
    tutoWindow.classList.replace("modalTuto","maskTuto")
    }
})


contactWindow.addEventListener("mouseleave",(e)=>{
    contactWindow.classList.replace("hiddenWindow" , "maskContact")
    
})

contactLink.addEventListener("click",(e)=>{
    modalLogin.className = "maskLogin"
})



tutoSection.addEventListener("mouseenter",(e)=>{
    if(modalRegister.className === "modalRegister"){
        tutoWindow.className = "maskTuto"
    }else{
    contactWindow.classList.replace("hiddenWindow" , "maskContact")
    tutoWindow.classList.replace("maskTuto","modalTuto")
    projetWindow.classList.replace("modalProjet","maskProjet")
    }

})

document.getElementById("divLogin").addEventListener("mouseenter",(e)=>{
    contactWindow.classList.replace("hiddenWindow" , "maskContact")
    tutoWindow.classList.replace("maskTuto","modalTuto")
    projetWindow.classList.replace("modalProjet","maskProjet")
    tutoWindow.className = "maskTuto"
})

tutoSection.addEventListener("click",(e)=>{
    modalLogin.className = "maskLogin"
})



banniere.addEventListener("mouseenter",(e)=>{
    contactWindow.classList.replace("hiddenWindow" , "maskContact")
    projetWindow.classList.replace("modalProjet","maskProjet")
    tutoWindow.classList.replace("modalTuto","maskTuto")
})



projet.addEventListener("mouseenter",(e)=>{
    if(modalRegister.className === "maskRegister"){
    projetWindow.classList.replace("maskProjet","modalProjet")
    tutoWindow.classList.replace("modalTuto","maskTuto")
    }else if(modalRegister.className === "modalRegister"){
        projetWindow.className = "maskProjet"
    }
})

projet.addEventListener("click",(e)=>{
    modalLogin.className = "maskLogin"
    
})


let dashboard = ()=>{
    window.location.href = "dashBoard";
}


eaSection.addEventListener("mouseenter", (e)=>{
    projetWindow.classList.replace("modalProjet","maskProjet")
})



eaSection.addEventListener("click",(e)=>{
    modalLogin.className = "maskLogin"
})

logDiv.addEventListener("mouseenter",(e)=>{
    contactWindow.classList.replace("hiddenWindow" , "maskContact")
})



modalRegister.addEventListener("mouseenter",(e)=>{
    projetWindow.className = "maskProjet"
    contactWindow.className = "maskContact"
    tutoWindow.className = "maskTuto"
    
})

// Themes //

let makePinkCookie = function (){
    document.cookie = "theme=var(--topBar-color-girly)"
    console.log(document.cookie)
}

let girlyTheme = ()=>{
    topBar.style.background = "var(--topBar-color-girly)"
    banniere.style.background = "var(--main-color-girly)"
}

let greenTheme = ()=>{
    topBar.style.background = "var(--topBar-color-green)"
    banniere.style.background = "var(--main-color-green)"
}

let sobreTheme = ()=>{
    topBar.style.background = "var(--topBar-color-sobre)"
    banniere.style.background = "var(--main-color-sobre)"
}

let agreeCgu = () =>{
    modalCgu.classList.replace("cgu" , "maskCgu")
}

let refuse = ()=>{
    window.history.back()
}

let inscription = function(){
    if(modalRegister.className === " maskRegister"){
        modalRegister.className = "modalRegister"
        modalLogin.className = "maskLogin"
        topBar2.className = "topBarOff"
        
        
    }else{
        modalRegister.className = " maskRegister"
    }
    
}

let login = ()=>{
    if(modalLogin.className === "maskLogin"){
        modalRegister.className = " maskRegister"
        modalLogin.className = "modalLogin"
        topBar2.className = "topBarOff"


    }else if(modalLogin.className === "modalLogin"){
        modalLogin.className = "maskLogin"
    }
}

let annul = ()=>{
    modalRegister.className = "maskRegister"
    
    document.cookie = "errorArray=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;{ sameSite: 'Lax'};secure"
    location.reload()
}



let volet = ()=>{
    if(topBar2.className==="topBar2"){
        topBar2.className="topBarOff"
        lateral.style.display="none"
    }else if (topBar2.className==="topBarOff"){
        topBar2.className="topBar2"
        lateral.style.display="block"
    }
   
    
}

let killErrorCookie = ()=>{
    document.cookie = "champsError=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;{ sameSite: 'Lax'};secure"
    document.cookie = "pwdError=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;{ sameSite: 'Lax'};secure"
    document.cookie = "pwdLengthError=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;{ sameSite: 'Lax'};secure"
    document.cookie = "emailError=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;{ sameSite: 'Lax'};secure"
    location.reload()
}

imgHtml.addEventListener("mouseover",(e)=>{    
        imgHtml.src = "/images/htmlColor.png"    
})
imgHtml.addEventListener("mouseleave",(e)=>{
    imgHtml.src = "/images/htmlWht.png"
})

imgCss.addEventListener("mouseover",(e)=>{    
    imgCss.src = "/images/CssColor.png"    
})
imgCss.addEventListener("mouseleave",(e)=>{
    imgCss.src = "/images/cssWht.png"
})

imgJs.addEventListener("mouseover",(e)=>{   
     
    imgJs.src = "/images/jsColor.png"    
})
imgJs.addEventListener("mouseleave",(e)=>{
    imgJs.src = "/images/jsWht.png"
})

imgMongo.addEventListener("mouseover",(e)=>{    
    imgMongo.src = "/images/mongoColor.png"    
})
imgMongo.addEventListener("mouseleave",(e)=>{
    imgMongo.src = "/images/mongoWht.png"
})

imgNode.addEventListener("mouseover",(e)=>{    
    imgNode.src = "/images/nodeColor.png"    
})
imgNode.addEventListener("mouseleave",(e)=>{
    imgNode.src = "/images/nodeWht.png"
})

imgGit.addEventListener("mouseover",(e)=>{    
    imgGit.src = "/images/gitColor.png"    
})
imgGit.addEventListener("mouseleave",(e)=>{
    imgGit.src = "/images/githWht.png"
})



banniere.addEventListener("click",(e)=>{
    modalLogin.className = "maskLogin"
    modalRegister.className = "maskRegister"
})

container.addEventListener("click",(e)=>{
    modalLogin.className = "maskLogin"
    modalRegister.className = "maskRegister"
})
if(contenu!=null){
    contenu.addEventListener("click",()=>{
        modalRegister.className = "maskRegister"
    })
}else{
    let vide = "a"
}





logoAnim.addEventListener("mouseover",()=>{
    
    atome1.classList.replace("atomeOff","animAtome")
    atome2.classList.replace("atomeOff","animAtome2")
})
logoAnim.addEventListener("mouseleave",()=>{
    
    atome1.classList.replace("animAtome","atomeOff")
    atome2.classList.replace("animAtome2","atomeOff")
})
if(row!=null){
    row.addEventListener('click',()=>{
        if(themeFix.className==="themeFixOff"){
            
            themeFix.className='themeFix'
            
        }else if (themeFix.className==="themeFix"){
            
            themeFix.className='themeFixOff'
            
        }
    })
}





$(".confirmModal").delay(2000).hide(500)





