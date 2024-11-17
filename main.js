// toggle icon navbar

let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick =() =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// scroll section active link

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset= sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>= offset && top < offset +height){
            navLinks.forEach.apply(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // sticky navbar
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    //remove toggleicon and navbar
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

//mail
document.getElementById('contactForm').addEventListener('submit', function (event) {
   // event.preventDefault(); // Prevent form submission

    // Get form values
    var email = document.getElementById('userEmail').value;
    var message = document.getElementById('userMessage').value;
    var subject = document.getElementById('userSubject').value;
    
    // Construct the mailto link
    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(message);
    
    // Open the email client
    window.location.href = mailtoLink;
});
