/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
//  */

const Menu = document.querySelector('#navbar__list');
const Sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Create the nav
function  createNav() {
   

    Sections.forEach((Section) => {
        const fragment = document.createDocumentFragment();
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = Section.getAttribute('data-nav');
        a.setAttribute('class', 'menu__link');

        // scroll to anchor ID using event listener
        a.addEventListener("click", () => {
            Section.scrollIntoView({behavior: "auto"});
            });
            
        li.append(a);
        fragment.append(li);
        Menu.append(fragment);
    });
    
};

function getActiveElem() {
    let min = window.innerWidth;
   
    maxSection = -2;

    Sections.forEach((Section, index) => {
        let bounding = Section.getBoundingClientRect();
        if(bounding.top < min){
            min = Math.abs(bounding.top);
            maxSection = index;
        }
    });
    return maxSection;
}


function activeSection(){
    maxSection = getActiveElem();
//If maxSection exist
    if(maxSection != -2){
        
        let aTagList = document.querySelectorAll('.menu__link');
    // Loop through entire section 
        for (let i = 0; i < Sections.length; i++) {
            if (i == maxSection){
                Sections[i].classList.add('your-active-class');
                aTagList[i].classList.add('your-active-class');
            }
            
            else{
                Sections[i].classList.remove('your-active-class');
                aTagList[i].classList.remove('your-active-class');
            }
        }; 
    };
}

// Create the navigation menu
createNav();

// Set sections as active 
document.addEventListener('scroll', activeSection);