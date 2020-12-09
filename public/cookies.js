

function creerCookie(nom,valeur,jours) {
	if (jours) {
		var date = new Date();
		date.setTime(date.getTime()+(jours*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = nom+"="+valeur+expires+"; path=/;{ sameSite: 'Lax'};secure";
}

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

 function acceptCGU(result){
	if(result==="yes"){
		modalCgu.className= "maskCgu"
	}
		creerCookie('acceptCGU' ,result,'15',{ sameSite: 'Lax', secure: true })
		
	
}



let cguCookie = recupererCookie("acceptCGU")
    if(cguCookie==="yes"){
        modalCgu.className= "maskCgu"
	}else{
		modalCgu.className= "cgu"
	}
	
let nameCookie = recupererCookie("name")

if (nameCookie === "inconnu"){
	let miniOk = document.getElementById('miniOk')
	let minDeco = document.getElementById('minDeco')
	let a = ""
	miniOk.className ="mask"
	minDeco.className="mask"
	decoBtn.className ="mask"
	btnLogin.className ="loginScrollBarr"
	inscBtn.className ="inscScrollBarr"
	logOkBtn.className = "mask"
	
}else {
	let btn1 = document.getElementById('btn1')
	let btn2 = document.getElementById('btn2')
	let cut1 = nameCookie.split('%20')
	let cut2 =cut1.toString()
	let final = cut2.replace(/,/g," ")
	logOkBtn.value = final
	btn1.className="mask"
	miniOk.value= final
	btn2.className="mask"
	btnLogin.className ="mask"
	inscBtn.className ="mask"
	
}
//Deconnexion
let eatCookies = ()=>{
	
	document.cookie = "Login=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;{ sameSite: 'Lax'};secure"
	document.cookie = "name=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;{ sameSite: 'Lax'};secure"
	document.cookie = "hellloBack=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;{ sameSite: 'Lax'};secure"
	document.cookie = "email=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;{ sameSite: 'Lax'};secure"
	window.location.reload()
	
}

let errorArray = recupererCookie("errorArray")
   if(errorArray==="inconnu"){
	let vide = "a"
   }else{
	  let cut1 = errorArray.split('%22')
	  let cut2 =cut1[3].split('%20').toString()
	  let final = cut2.replace(/,/g," ")
	  let finalAndAccent = final.replace(/%C3%A8/g,"è")
	  
	  document.getElementById("errorMessage").textContent = finalAndAccent
	  document.getElementById("modalRegister").className ="modalRegister"
	
   }



let sayHello = recupererCookie("sayHello")
   if(sayHello==="inconnu"){
		let vide = "a"
   }else{
	let cut1 = sayHello.split('%20')
	let cut2 =cut1.toString()
	let final = cut2.replace(/,/g," ")
	
	  let confirmBox = document.getElementById("confirmLog")
	  confirmBox.className="confirmLog"
	  confirmBox.textContent = "Merci pour ton inscription "+final
	 
	   document.cookie = "sayHello=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;{ sameSite: 'Lax'};secure"
   }

let helloBack = recupererCookie("hellloBack")
if (helloBack==="inconnu"){
	let vide="a"	
}else{
	let cut1 = helloBack.split('%20')
	let cut2 =cut1.toString()
	let final = cut2.replace(/,/g," ")
	let confirmBox = document.getElementById("confirmLog")
	confirmBox.className="confirmLog"
	  confirmBox.textContent = "Ravis de te revoir "+final
	  document.cookie = "hellloBack=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;{ sameSite: 'Lax'};secure"
}   
	
	
let errorLoginDisplay = recupererCookie("errorLogin")
if(errorLoginDisplay==="inconnu"){
	let vide = "a"
}else{
	let cut1 = errorLoginDisplay.split('%20')
	let cut2 =cut1.toString()
	let final = cut2.replace(/,/g," ")
	document.getElementById("modalLogin").className = "modalLogin"
	document.getElementById("errorLogin").textContent = final
}

let killErrors=()=>{
	document.cookie = "errorLogin=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;{ sameSite: 'Lax'};secure"
}
   
document.getElementById("btnAnnulLogin").addEventListener('click',()=>{	
	document.getElementById("modalLogin").className="maskLogin"
	document.cookie = "errorLogin=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;{ sameSite: 'Lax'};secure"
})



