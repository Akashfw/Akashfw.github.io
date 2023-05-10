const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu1')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu1')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 150,
     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home-img, .about__subtitle, .about__text, .skills__img',{delay: 150}); 
sr.reveal('.home__social-icon',{ interval: 150}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 150}); 

/*SCROLL HOME*/
sr.reveal( ".home-title", {} );
sr.reveal( ".button", { delay: 150 } );
sr.reveal( ".home-img", { delay: 150 } );
sr.reveal( ".home-social-icon", { interval: 150 } );

/*SCROLL ABOUT*/
sr.reveal( ".about-img", {} );
sr.reveal( ".about-subtitle", { delay: 150 } );
sr.reveal( ".about-text", { delay: 150 } );

// Scross main skills mainskills
sr.reveal( ".mainskills", { interval: 150 } );
sr.reveal( ".mskill-img", { delay: 150 } );
sr.reveal( ".mskill-text", { delay: 150 } );
/*SCROLL SKILLS*/
sr.reveal( ".skills-subtitle", {} );
sr.reveal( ".skills-text", {} );
sr.reveal( ".skills-data", { interval: 150 } );
// sr.reveal(".skills-img", { delay: 600 });

/*SCROLL projects*/
// sr.reveal( ".project-img", { interval: 20 } );
// sr.reveal( ".mskill-text", { delay: 20 } );

// SCROLL CONTACT


sr.reveal(".contact-input", { interval: 150 });




document.querySelector("#resume-button-1").addEventListener("click",()=>{
    window.open("https://drive.google.com/file/d/1YFI1N75m-aNqTY6Fj4u1bE65iVTL7L2t/view?usp=sharing")
})


var typing=new Typed(".text", {
    strings: ["", "FULL-STACK", "WEB", "DEVELOPER"],
    typeSpeed: 100,
    backSpeed: 40  ,
    loop: true,
});

let pro_Qrbot = document.getElementById("pro_qrbot");
let pro_mytv = document.getElementById("pro_mytv");
let pro_bb = document.getElementById("pro_bb");
let pro_amazon = document.getElementById("pro_amazon");
// let project_GrabYourFit = document.getElementById("project_GrabYourFit");
// let project_WMB = document.getElementById("project_WMB");
// let project_PigGame = document.getElementById("project_PigGame");

let pro_qrbot_Arr = ["./img/qrbot-2.png", "./img/qrbot-3.png", "./img/qrbot-4.png", "./img/qrbot-5.png"];
let pro_mytv_Arr = ["./img/mytv-2.png", "./img/mytv-3.png" , "./img/mytv-4.png"]
let pro_bb_arr = ["./img/bb-2.png","./img/bb-3.png","./img/bb-4.png","./img/bb-5.png","./img/bb-1.png"];
let pro_amazon_arr = ["./img/amazon-2.png","./img/amazon-3.png","./img/amazon-4.png","./img/amazon-1.png"];


pro_Qrbot.addEventListener("mouseover",()=>{ 
    let count=0;
    let intv = setInterval(()=>{
        if(count<pro_qrbot_Arr.length-1){
            count++;
            pro_Qrbot.src=pro_qrbot_Arr[count];
        }else{            
            count=0;
            pro_Qrbot.src="./img/Qrbot-1.png";
        }
        console.log(count)
    },1000);

    setTimeout(()=>{        
        clearInterval(intv);
    },4000);
})
pro_mytv.addEventListener("mouseover",()=>{ 
    let count=0;
    let intv = setInterval(()=>{
        if(count<pro_mytv_Arr.length-1){
            count++;
            pro_mytv.src=pro_mytv_Arr[count];
        }else{            
            count=0;
            pro_mytv.src="./img/mytv-1.png";
        }
        console.log(count)
    },1000);

    setTimeout(()=>{        
        clearInterval(intv);
    },4000);
})
pro_bb.addEventListener("mouseover",()=>{ 
    let count=0;
    let intv = setInterval(()=>{
        if(count<pro_bb_arr.length-1){
            count++;
            pro_bb.src=pro_bb_arr[count];
        }else{            
            count=0;
            pro_bb.src=pro_bb_arr[count];
        }
        console.log(count)
    },1000);

    setTimeout(()=>{        
        clearInterval(intv);
    },5000);
})
pro_amazon.addEventListener("mouseover",()=>{ 
    let count=0;
    let intv = setInterval(()=>{
        if(count<pro_amazon_arr.length-1){
            count++;
            pro_amazon.src=pro_amazon_arr[count];
        }else{            
            count=0;
            pro_amazon.src=pro_amazon_arr[count];
        }
        console.log(count)
    },1000);

    setTimeout(()=>{        
        clearInterval(intv);
    },4000);
})


document.querySelector(".nav-link home").addEventListener("click",()=>{
    location.reload();
})