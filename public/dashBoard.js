let killAccount = document.getElementById("killAccount")
let postDiv = document.getElementById("post")
let suppAccount = ()=>{
   let inputForm= document.getElementById("nameDeleted")
    if(killAccount.className === "mask"){
        killAccount.className ="killAccount"
        postDiv.className = "mask"
        let name = recupererCookie("email")   
        let nameFinal = name.replace(/%40/,"@")       
        inputForm.textContent = nameFinal
    }
}

let displayPost = ()=>{
    
    if(postDiv.className === "mask"){
        postDiv.className ="post"
        killAccount.className = "mask"
        
    }
    location.reload()
}



$("#done").mouseover(()=>{
    document.getElementById("killAccount").className = "alert"   
})
$("#done").mouseleave(()=>{
    document.getElementById("killAccount").className = "killAccount"   
})

let stringACut2=document.getElementsByClassName("aCut2")
    for (let i =0 ; i<stringACut2.length;i++){
        let ite = stringACut2[i]        
        let commentTotal = stringACut2[i].textContent 
        let cuted = commentTotal.split("//")    
        let reply = cuted[0]
        let name = cuted[1]       
        let dateCuted = name.split("~~")
        let date = dateCuted[1]    
        let pseudo = dateCuted[0]
        let div = document.createElement("div")
        let span = document.createElement("span")
        
        let modify = document.createElement("div")
        span.className=pseudo
        span.textContent =  pseudo
        let testDiv = document.createElement("div")
        testDiv.textContent= date
        ite.textContent = reply
        ite.append(div)
        div.append(span)
        
        
        
             
    }

    let stringACut = document.getElementsByClassName("aCut")



    /* Decoupage des reponses en 2 strings */
    
        
         
    for (let i =0 ; i<stringACut.length;i++){
        let ite = stringACut[i]
        let commentTotal = stringACut[i].textContent 
        let cuted = commentTotal.split("//")
        imgRep = commentTotal.split("**")
        let cut1 = cuted[1].split("~~")
        let pseudo = cut1[0]
        let img =  imgRep[1]
        let dateACut = cut1[1].split("**")
        let date =dateACut[0]    
        let reply = cuted[0]   
        let div = document.createElement("div")
        div.className = "divRep"
        let span = document.createElement("span")
        let imgElement = document.createElement("img")
        let span2 = document.createElement("span")
        let testSpan = document.createElement("span")
        
        imgElement.setAttribute("src",imgRep[1])

        imgElement.className="imgDynamic"
        span.textContent = "Posté par : "+ pseudo
        span2.textContent = " le : "+date
        ite.textContent = reply
        
        ite.append(div)
        i
        div.append(imgElement)
        div.append(span)    
        div.append(span2)
        
        
        
        
    }    

    let nameRef = recupererCookie("name")
    
       let test = $(".resultat").children()       
       for(let i=0;i<test.length;i++){          
              if(test[i].textContent===nameRef){
                 
              }else{
                  
                  test[i].closest(".ghost").className= "mask"
              }   
       }        
    

       $(".resultat").click(function(){

        
        
        let test1 = $(this).next("#sectionCom")
        
        
    
        
    
        if(test1.attr('class') === "mask"){
               
            test1.attr("class","sectionCom")      
        }else{
            test1.attr("class","mask")
        } 
    })
    








    let comm = document.getElementsByClassName("comm")
    for(let j=0 ; j< comm.length;j++){
        
        let catchCom = comm[j].textContent
        let cutCom = catchCom.split("<p>")
        if(cutCom[1]===undefined){
            let vide = "a"
        }else{
            let cutCom2 = cutCom[1].split("</p>")
            comm[j].innerHTML = cutCom2[0]
        }
       
        
        
    }



let dateArray = document.getElementsByClassName("date")
for(let l=0;l<dateArray.length;l++){
    let getString = dateArray[l].textContent
    let getDate = getString.split("~~")
    let finalDate = "Le : "+getDate[1]
    dateArray[l].textContent = finalDate
    
}

$(".subBtn").click(function(){
    let getName = recupererCookie("name")
    let papa =  $(this).parent().parent().children().first()
    let papaText = papa.text()
    let papaFinal = papaText.split("//")
    let final = papaFinal[0]
    let textArea = document.getElementsByName("titleSuppDash")
    for(let b=0;b<textArea.length;b++){
        textArea[b].textContent = final
    }
    
   
})
/*
let coucou =  $(".ghost")
for(let a =0 ;a<coucou.length;a++){
    let catchText = coucou[a].textContent
    let cutText = catchText.split("//")
    
    console.log(cutText[0])
}*/
