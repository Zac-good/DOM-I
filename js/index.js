const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav bar
const navBar = document.querySelectorAll('nav > a')
navBar[0].textContent = siteContent.nav['nav-item-1']
navBar[1].textContent = siteContent.nav['nav-item-2']
navBar[2].textContent = siteContent.nav['nav-item-3']
navBar[3].textContent = siteContent.nav['nav-item-4']
navBar[4].textContent = siteContent.nav['nav-item-5']

navBar.forEach(item => item.style.color = 'green')
console.log(navBar);

//h1
const title = document.querySelector('.cta-text > h1');
title.textContent = siteContent.cta['h1']

//button
const button = document.querySelector('.cta-text > button')
button.textContent = siteContent.cta['button']

//image
const image = document.querySelector('#cta-img')
image.src = siteContent.cta['img-src']


//MAIN CONTENT

// Top Content
// Features
const features = document.querySelector('.text-content:nth-child(1)');
const featuresH4 = features.querySelector('h4')
const featuresText = features.querySelector('p')
featuresH4.textContent = siteContent["main-content"]["features-h4"]
featuresText.textContent = siteContent["main-content"]["features-content"]
console.log(features);

// About
const about = document.querySelector('.top-content .text-content:nth-child(2)'); 
const aboutH4 = about.querySelector('h4');
const aboutText = about.querySelector('p');
aboutH4.textContent = siteContent["main-content"]["about-h4"]
aboutText.textContent = siteContent["main-content"]["about-content"]

// Image
const midImage = document.querySelector('#middle-img')
midImage.src = siteContent["main-content"]["middle-img-src"]

// Bottom Content 
// Services
const services = document.querySelector('.bottom-content .text-content:nth-child(1)');
const servicesH4 = services.querySelector('h4')
const servicesText = services.querySelector('p')
servicesH4.textContent = siteContent["main-content"]["services-h4"]
servicesText.textContent = siteContent["main-content"]["services-content"]

// Product
const product = document.querySelector('.bottom-content .text-content:nth-child(2)');
const productH4 = product.querySelector('h4')
const productText = product.querySelector('p')
productH4.textContent = siteContent["main-content"]["product-h4"]
productText.textContent = siteContent["main-content"]["product-content"]

// Vision
const vision = document.querySelector('.bottom-content .text-content:nth-child(3)');
const visionH4 = vision.querySelector('h4')
const visionText = vision.querySelector('p')
visionH4.textContent = siteContent["main-content"]["vision-h4"]
visionText.textContent = siteContent["main-content"]["vision-content"]


// Contact Section
const contact = document.querySelector('.contact');
const contactH4 = contact.querySelector('h4')
const address = contact.querySelector('p:nth-of-type(1)')
const phone = contact.querySelector('p:nth-child(2)')
const email = contact.querySelector('p:nth-child(3)')
contactH4.textContent = siteContent["contact"]["contact-h4"]
address.textContent = siteContent["contact"]["address"]
phone.["phone"]
    ["email"]