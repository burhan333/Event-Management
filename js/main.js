// SLIDER

const slides = document.querySelectorAll('.slider');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
let auto = true;
const intervalTime = 4000;
let slideInterval;

function nextSlide()
{
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling)
    {
        current.nextElementSibling.classList.add('current');
    }
    else
    {
        slides[0].classList.add('current');
    }
}

function prevSlide()
{
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling)
    {
        current.previousElementSibling.classList.add('current');
    }
    else
    {
        slides[slides.length - 1].classList.add('current');
    }
}

next.addEventListener('click', function() {
    nextSlide();
    if(auto)
    {
        clearInterval(slideInterval);
        slideInterval =  setInterval(nextSlide, intervalTime);       
    }
});

prev.addEventListener('click', function() {
    prevSlide();
    if(auto)
    {
        clearInterval(slideInterval);     
        slideInterval =  setInterval(nextSlide, intervalTime); 
    }
});
// AUTO SLIDER IF TRUE
if (auto)
{
    // set interval time for next slide and give it to 
    slideInterval =  setInterval(nextSlide, intervalTime);
}



// LOGIN AND SIGNUP POPUP FOR ALL 3 SLIDES IF BUTTON PRESS SLIDER STOP AND IF WE CLOSE POPUP SLIDER START

document.getElementById("bt1").addEventListener('click', function(){
    document.getElementById("popup").style.display = "block";
    if(auto)
    {
        clearInterval(slideInterval);
    }
});

document.getElementById("close1").addEventListener('click', function(){
    document.getElementById("popup").style.display = "none";
    if(auto)
    {
        clearInterval(slideInterval);     
        slideInterval =  setInterval(nextSlide, intervalTime); 
    }
});

document.getElementById("bt2").addEventListener('click', function(){
    document.getElementById('popup2').style.display = "block";
    if(auto)
    {
        clearInterval(slideInterval);
    }
});

document.getElementById("close2").addEventListener('click', function(){
    document.getElementById('popup2').style.display = "none";
    if(auto)
    {
        clearInterval(slideInterval);     
        slideInterval =  setInterval(nextSlide, intervalTime); 
    }
});

document.getElementById("bt3").addEventListener('click', function(){
    document.getElementById('popup3').style.display = "block";
    if(auto)
    {
        clearInterval(slideInterval);
    }
})

document.getElementById("close3").addEventListener('click', function(){
    document.getElementById('popup3').style.display = "none";
    if(auto)
    {
        clearInterval(slideInterval);     
        slideInterval =  setInterval(nextSlide, intervalTime); 
    }
});

document.getElementById("bt4").addEventListener('click', function(){
    document.getElementById('popup2').style.display = "block";
    if(auto)
    {
        clearInterval(slideInterval);
    }
});

document.getElementById("close2").addEventListener('click', function(){
    document.getElementById('popup2').style.display = "none";
    if(auto)
    {
        clearInterval(slideInterval);     
        slideInterval =  setInterval(nextSlide, intervalTime); 
    }
});

document.getElementById("bt5").addEventListener('click', function(){
    document.getElementById('popup5').style.display = "block";
    if(auto)
    {
        clearInterval(slideInterval);
    }
});

document.getElementById("close5").addEventListener('click', function(){
    document.getElementById('popup5').style.display = "none";
    if(auto)
    {
        clearInterval(slideInterval);     
        slideInterval =  setInterval(nextSlide, intervalTime); 
    }
});

document.getElementById("bt6").addEventListener('click', function(){
    document.getElementById('popup2').style.display = "block";
    if(auto)
    {
        clearInterval(slideInterval);
    }
});

document.getElementById("close2").addEventListener('click', function(){
    document.getElementById('popup2').style.display = "none";
    if(auto)
    {
        clearInterval(slideInterval);     
        slideInterval =  setInterval(nextSlide, intervalTime); 
    }
});


// FORM VALIDATION LOGIN FOR SLIDE1

const form1 = document.getElementById('form1')
form1.addEventListener('submit', logInCheck1);

function logInCheck1(e)
{   
    const userName = document.getElementById('userName1');
    const pass = document.getElementById('pass1');
    if (userName.value.length === 0 || pass.value.length === 0)
    {
        if(userName.value.length === 0) 
        {
            userName.focus();
        }
        else
        {
            pass.focus();
        }
        alert('Please Enter UserName And Password');
        e.preventDefault();
    }
}



// FORM VALIDATION SIGN UP FOR ALL 3 SLIDES

const form2 = document.getElementById('form2')
form2.addEventListener('submit', signUpCheck1);

function signUpCheck1(e)
{
    const fristName = document.getElementById('firstName1')
    const lastName = document.getElementById('lastName1')
    const password = document.getElementById('password1')
    const confirmPassword = document.getElementById('confirmPassword1')
    const email = document.getElementById('email1')
    let addressIsLegal = true;
    const eEntered = document.getElementById("email1").value

    if (fristName.value.length === 0 )
    {
        alert('Please Enter 1st Name');
        fristName.focus();
        e.preventDefault();  
        return;      
    }

    if (lastName.value.length === 0 )
    {
        alert('Please Enter last Name');
        lastName.focus();
        e.preventDefault();
        return;
    }

    if (password.value.length === 0 )
    {
        alert('Please Enter password');
        password.focus();
        e.preventDefault();
        return;
    }

    if (password.value !== confirmPassword.value)
    {
        alert('password must be same');
        confirmPassword.focus();
        e.preventDefault();
        return;
    }
 
    if (eEntered.indexOf(" ") !== -1) 
    {
        addressIsLegal = false;
    }
    if (eEntered.indexOf("@") < 1 || eEntered.indexOf("@") > eEntered.length - 5)
    {
        addressIsLegal = false;
    }
    if (eEntered.indexOf(".") - eEntered.indexOf("@") < 2 || eEntered.indexOf(".") > eEntered.length - 3) 
    {
        addressIsLegal = false;
    }
    if(addressIsLegal === false) 
    {
        alert("Please enter correct email address");
        e.preventDefault();
        email.focus();
    }
}



// CLICK TO SHOW PASSWORD ON JUST SLIDE 1

const show = () =>
{
    const x = document.getElementById('pass1')
    const y = document.getElementById('eye1')
    const z = document.getElementById('eye2')

    if(x.type === 'password')
    {
        x.type = 'text';
        y.style.display = 'none';
        z.style.display = 'block'
    }

    else
    {
        x.type = 'password';
        y.style.display = 'block';
        z.style.display = 'none'
    }
}

const button = document.getElementById('eye')
button.addEventListener('click', () => 
{
    show();
});


// GO TO TOP

let top1 = document.querySelector('.goTop')

window.addEventListener('scroll', () =>
{
    if(window.pageYOffset > 100)
    {
        top1.classList.add("active");
    }
    else
    {
        top1.classList.remove("active");
    }
});