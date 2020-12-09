


var la_couleur='';
    
    la_couleur = recupererCookie('firstCookie');
    
    
    
    if(la_couleur!='' && la_couleur!='inconnu')
    mef(la_couleur);
    function mef(couleur)
    {	
        let question = document.getElementById('vosQuestions')
        let titleQuestions = document.getElementsByClassName('titreResultat')
        let h3Questions = document.getElementById('h3Questions')
        let topBar = document.getElementById('topBar');
        let banniere = document.getElementById('banniere');
        let paragraphe = document.getElementById('contenu')
        let lien = document.getElementsByClassName("pink")
        let formSubject = document.getElementById("formSubject")
        let titleForm = document.getElementById("titleForm")
        let titleForm1 = document.getElementById("titleForm1")
        let titleForm2 = document.getElementById("titleForm2")
        let titleReply = document.getElementById("titleReply")
        let cancelCreate = document.getElementById("cancelCreate")
        let okCreate = document.getElementById("okCreate")
        if(couleur === 'girly'){
            $('#okReply').mouseover(()=>{
                $('#okReply').css("color","white")
            })
            $('#okReply').mouseleave(()=>{
                $('#okReply').css("color","rgb(53, 59, 72)")
            })
            $('#okReply').css("color","rgb(53, 59, 72)")
            $('#okReply').css("background","white")
            
            $('#replyForm').css("background","rgb(255, 232, 232)")
            
            $('#cancelReply').css("color","rgb(53, 59, 72)")
            
            $('#cancelReply').css("background","white")
            titleReply.style.background = "rgb(255, 232, 232)"
            titleReply.style.color = "rgb(53, 59, 72)"

            okCreate.addEventListener("mouseleave",()=>{
                okCreate.style.color="rgb(53, 59, 72)"
            })
            okCreate.addEventListener("mouseover",()=>{
                okCreate.style.color="white"
            })

            cancelCreate.addEventListener("mouseover",()=>{
                cancelCreate.style.background = "linear-gradient(182deg,#ff4949, rgba(241, 10, 10, 0.4))"
                cancelCreate.style.color="white"
            })

            cancelCreate.addEventListener("mouseleave",()=>{
                cancelCreate.style.background = "white"
                cancelCreate.style.color="rgb(53, 59, 72)"
            })
            for(let i=0 ;i<lien.length;i++){
                lien[i].style.color = "rgba(238,174,202,1)"
            }
            okCreate.style.background="white"
            cancelCreate.style.background="white"
            okCreate.style.color="rgba(53, 59, 72,1.0)"
            cancelCreate.style.color="rgba(53, 59, 72,1.0)"
            titleForm.style.background ="rgb(255, 232, 232)"
            titleForm1.style.background ="rgb(255, 232, 232)"
            titleForm2.style.background ="rgb(255, 232, 232)"            
            formSubject.style.backgroundColor = " rgb(255, 232, 232)"
            
            topBar.style.background="linear-gradient(180deg, rgba(47,54,64,1) 0%, rgba(0,0,0,0.8183648459383753) 100%, rgba(255,255,255,1) 100%)";
            
            banniere.style.background="radial-gradient(circle, rgba(238,174,202,1) 18%, rgba(148,187,233,1) 100%)";
            document.body.style.background = "rgb(245, 246, 250)"
            paragraphe.style.color = "RGBA(60,67,77,0.9)"
            for(let j=0 ;j<titleQuestions.length;j++){
                titleQuestions[j].style.background= "linear-gradient(182deg,rgba(242, 245, 248, 0.1),rgba(59, 83, 107,0.2))";}
        }else if(couleur === 'green'){
            $('#okReply').mouseover(()=>{
                $('#okReply').css("color","white")
            })
            $('#okReply').mouseleave(()=>{
                $('#okReply').css("color","rgb(53, 59, 72)")
            })
            
            $('#okReply').css("color","rgb(53, 59, 72) ")
            $('#replyForm').css("background","white")
            
            $('#cancelReply').css("color","rgb(53, 59, 72)")
            titleReply.style.background = "white"
            titleReply.style.color = "rgb(53, 59, 72)"

            okCreate.addEventListener("mouseover",()=>{
                okCreate.style.color="white"
            })
            okCreate.addEventListener("mouseleave",()=>{
                okCreate.style.color="rgb(53, 59, 72)"
            })

            cancelCreate.addEventListener("mouseover",()=>{
                cancelCreate.style.background = "linear-gradient(182deg,#ff4949, rgba(241, 10, 10, 0.4))"
                cancelCreate.style.color="white"
            })

            cancelCreate.addEventListener("mouseleave",()=>{
                cancelCreate.style.background = "white"
                cancelCreate.style.color="rgb(53, 59, 72)"
            })

            okCreate.style.color="rgba(53, 59, 72,1.0)"
            cancelCreate.style.color="rgba(53, 59, 72,1.0)"
            titleForm.style.background ="white"
            titleForm1.style.background ="white"
            titleForm2.style.background ="white"            
            formSubject.style.backgroundColor = "white"

            for(let i=0 ;i<lien.length;i++){
                lien[i].style.color = "#ffffff"
            }
            topBar.style.background="linear-gradient(180deg, rgba(52,73,94,1) 21%, rgba(86,110,135,1) 100%)";
            
            banniere.style.background="linear-gradient(182deg,#a5cc7c, rgba(105, 143, 63,0.8))";
            document.body.style.background = "rgb(245, 246, 250)"
            paragraphe.style.color = "RGBA(60,67,77,0.9)"

            for(let j=0 ;j<titleQuestions.length;j++){
                titleQuestions[j].style.background= "linear-gradient(182deg,rgba(242, 245, 248, 0.1),rgba(59, 83, 107,0.2))";}

        }else if (couleur === 'dark'){
            $('#okReply').css("background","rgba(53, 59, 72,0)")
            $('#okReply').hover(()=>{
                $('#okReply').css("color","white")
            })
            $('#cancelReply').css("background","rgba(53, 59, 72,0)")
            $('#replyForm').css("background","rgb(53, 59, 72)")
            $('#okReply').css("color","white")
            $('#cancelReply').css("color","white")
            titleReply.style.background = "rgb(53, 59, 72)"
            titleReply.style.color = "white"
            okCreate.addEventListener("mouseleave",()=>{
                okCreate.style.color="white"
            })
            cancelCreate.addEventListener("mouseover",()=>{
                cancelCreate.style.background = "linear-gradient(182deg,#ff4949, rgba(241, 10, 10, 0.4))"
                cancelCreate.style.color="white"

            })
            
            cancelCreate.addEventListener("mouseleave",()=>{
                cancelCreate.style.background = "rgba(53, 59, 72,0)"
                cancelCreate.style.color="white"
            })

            cancelCreate.style.background="rgba(53, 59, 72,0)"
            okCreate.style.background="rgba(53, 59, 72,0)"
            okCreate.style.color="white"
            cancelCreate.style.color="white"
            titleForm.style.background ="rgba(53, 59, 72,1.0)"
            titleForm1.style.background ="rgba(53, 59, 72,1.0)"
            titleForm2.style.background ="rgba(53, 59, 72,1.0)"            
            formSubject.style.backgroundColor = "rgba(53, 59, 72,1.0)"

            for(let i=0 ;i<lien.length;i++){
                lien[i].style.color = "#ffffff"
            }
            topBar.style.background="linear-gradient(180deg, rgba(47,54,64,1) 0%, rgba(0,0,0,0.8183648459383753) 100%, rgba(255,255,255,1) 100%)";
            
            banniere.style.background="linear-gradient(180deg, rgba(87,101,116,1) 0%, rgba(0,0,0,0.8183648459383753) 100%, rgba(255,255,255,1) 100%)";

            document.body.style.background = "rgba(34, 47, 62)"

            paragraphe.style.color = "rgba(245, 246, 250)"

            h3Questions.style.color = "rgba(34, 47, 62)"

            question.style.color = "rgba(34, 47, 62)"
            for(let j=0 ;j<titleQuestions.length;j++){
                titleQuestions[j].style.background= "rgba(164, 176, 190,1.0)"
            }
            
        
    }
    function creerCookie(nom,valeur,jours) {
        if (jours) {
            var date = new Date();
            date.setTime(date.getTime()+(jours*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = nom+"="+valeur+expires+"; path=/;{ sameSite: 'Lax'};secure";
    }
        
        creerCookie('firstCookie', couleur, '15');
    }