let plusQuestionsImage = document.getElementById("plusQuestionsPng")
let createSubject = document.getElementById("createSubjectQuestions")
let plusSubject = document.getElementById("plusSubject")
let commentQuestions = document.getElementById("commentQuestions")
let subjectDiv = document.getElementById("subjectDiv")
let vosQuestions  = document.getElementById("vosQuestions")
let cancelreply = document.getElementsByClassName("cancelreply")
let replyBox = document.getElementById("replyBox")
let repBtn = document.getElementById("repBtn")
let createBtn = document.getElementById("plusSubject")
let modalSubject = document.getElementById("modalSubject")
let titreReponse = document.getElementById("titreReponse")
let cancelCreate = document.getElementById("cancelCreate")
let titre = document.getElementsByClassName("titreResultat")
let repArray = document.getElementsByClassName('repArray')
let rep2 = document.getElementById('rep2')
let reprep = document.getElementById("reprep")
let aCut = document.getElementById("aCut")
let modifModale = document.getElementById("modifModal")

	

$(".cancelreply").click(function(){
     replyBox.className = "offCreate"
})

$(".newSubject").click(function(){
    let pseudo = recupererCookie("name")	
	let date = new Date();
	let options = {weekday: "long", year: "numeric", month: "numeric", day: "2-digit",hour:"numeric",minute:"numeric"};
	let datePost =(date.toLocaleDateString("fr-FR", options));
	document.getElementById("pseudoForm").textContent="//"+ pseudo +"~~"+datePost
})

// Modifier post


$(".modifBtn").click(function(){
    let aModif = $(this).parent().parent().parent().prev().text()
    let aCut =aModif.split("Post")
    let titre = aCut[0]
    document.getElementById("share").textContent=titre
    
    if(modifModale.className === "modifModal"){
        modifModale.className = "mask"
    }else{
        modifModale.className = "modifModal"
    }
   
    console.log(titre)
})

$(".btnCancel").click(function(){
    $(this).parent().parent().css("display","none")
})





$(".deletedBtn").click(function(){
    let aModif = $(this).parent().parent().parent().prev().text()
    let aCut =aModif.split("Post")
    let titre = aCut[0]
    let titleArray = document.getElementsByClassName("titleRemove")
    for(let i=0 ;i<titleArray.length;i++){
        titleArray[i].textContent =titre
    }
    $(this).parent().parent().prev().css("display","flex")
    
   
    console.log(titre)
})

$(".annul").click(function(){
    modifModale.className = "mask"
    
})

//


$(".repondre").click(function(){
    var toto=$(this).parent().parent().prev().text();
    
    let titleCut = toto.split("Post")
    let titleCuted = titleCut[0]
    
     
    document.getElementById("test2").textContent = titleCuted
    if(replyBox.className==='offCreate'){
        replyBox.className = "modalCadreSubject"
    }else{
        replyBox.className='offCreate'
    }
    
});



if(createSubject===null){
    let o = 0
}

if(createSubject!==null){
    createSubject.addEventListener("click",(req,res)=>{
        if (modalSubject.className==="modalCadreSubject"){
            modalSubject.className = "offCreate"
        }else{
            modalSubject.className="modalCadreSubject"
        }

        createSubject.addEventListener("mouseenter",(req,res)=>{
            plusSubject.src = "images/plusWhite.png"
         })
         
         createSubject.addEventListener("mouseleave",(req,res)=>{
             plusSubject.src = "images/plus.png"
         })
         
         cancelCreate.addEventListener("click",(req,res)=>{
             modalSubject.className = "offCreate"
         })
    })
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
    imgElement.setAttribute("src",imgRep[1])
    imgElement.className="imgDynamic"
    span.textContent = "Posté par : "+ pseudo
    span2.textContent = "le : "+date
    ite.textContent = reply
    ite.append(div)
    div.append(imgElement)
    div.append(span)    
    div.append(span2)
    
}

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
        let span2 = document.createElement("span")
        let modify = document.createElement("div")
        span.className=pseudo
        span.textContent = "Posté par : "+ pseudo
        span2.textContent = "le : "+date
        ite.textContent = reply
        ite.append(div)
        div.append(span)
        div.append(span2)      
    }

//JQUERY//



$(".titreResultat").click(function(){

    let text = (this.innerHTML)
    
    let test1 = $(this).next("#commentQuestions")
    let pseudo = recupererCookie("name")
    let nomPost = $(this).text()
    let cut = nomPost.split(":")
    let cut2 = cut[1].split("le")
    let final = cut2[0].replace(/%20/," ")
    let almostFinal = final.split(" ")
    let reallyFinal = almostFinal[1]    
    let reg1=new RegExp(pseudo,"g");

    if(reallyFinal.match(reg1)){        
     let controlDiv0= $(this).next().children().next(".reprep").find("div")
     controlDiv0.attr('class',"controlDiv")
     console.log(controlDiv0)
    }else{
        let vide = "a"
    }

    if(test1.attr('class') === "commentOff"){
           
        test1.attr("class","commentQuestions")      
    }else{
        test1.attr("class","commentOff")
    } 
})


//Donne le nom et la date pour les formulaires Post 

function recupererCookie(nom) {
	var nomRC = nom + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nomRC) == 0) return c.substring(nomRC.length,c.length);
	}
	return "inconnu";
}



