// const toggleButton =document.getElementById('toggle-btn')
// const sidebar = document.getElementById('sidebar')

// function toggleSidebar(){
//     sidebar.classList.toggle('close')
//     toggleButton.classList.toggle('rotate')

// closeAllSubMenus()

// }

// function toggleSubMenu(button){

//     if(!button.nextElementSibling.classList.contains('show'))
//     closeAllSubMenus()

//     button.nextElementSibling.classList.toggle('show')
//     button.classList.toggle('rotate')

//     if(sidebar.classList.contains('close')){
//        sidebar.classList.toggle('close')
//        toggleButton.classList.toggle('rotate') 
//     }
// }

// function closeAllSubMenus(){
//     Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
//     ul.classList.remove('show')
//     ul.previousElementSibling.classList.remove('rotate')
//     })

// }


const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
    closeAllSubMenus()
}

function toggleSubMenu(button){
    const subMenu = button.nextElementSibling;
    const isCurrentlyOpen = subMenu.classList.contains('show');
    
    // Close all other submenus (except those with active links)
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        if(ul !== subMenu && !ul.querySelector('a.active')) {
            ul.classList.remove('show');
            ul.previousElementSibling.classList.remove('rotate');
        }
    });
    
    // Toggle the clicked submenu
    if(isCurrentlyOpen) {
        // Only allow closing if it doesn't have an active link
        if(!subMenu.querySelector('a.active')) {
            subMenu.classList.remove('show');
            button.classList.remove('rotate');
        }
    } else {
        subMenu.classList.add('show');
        button.classList.add('rotate');
    }

    if(sidebar.classList.contains('close')){
       sidebar.classList.toggle('close')
       toggleButton.classList.toggle('rotate') 
    }
}

function closeAllSubMenus(){
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        // Don't close submenus that contain an active link
        if(!ul.querySelector('a.active')){
            ul.classList.remove('show')
            ul.previousElementSibling.classList.remove('rotate')
        }
    })
}

// Keep active submenu open on page load
document.addEventListener('DOMContentLoaded', function() {
    const activeLink = sidebar.querySelector('.sub-menu a.active');
    if(activeLink) {
        const subMenu = activeLink.closest('.sub-menu');
        const dropdownBtn = subMenu.previousElementSibling;
        subMenu.classList.add('show');
        dropdownBtn.classList.add('rotate');
    }
});