document.addEventListener('DOMContentLoaded', () => {

    // not need just for us to show what loads first
    console.log("DOM loaded");

    const title = document.querySelector('h1');
    title.textContent = "Hello from the JS file!";


// .querySelector select specific (really its the first <li> it finds) <li> document.querySelector('LI.red) modifies <li> red </li>
// .querySelector use id= selectors (# in the file)  to find VERY specific elements

    const redListItem = document.querySelector('li.red');
    redListItem.textContent = "RED!!";
    redListItem.classList.add('bold');

    const newListIteam = document.createElement('li');
    newListIteam.textContent = "Purple";
    newListIteam.classList.add('purple');

    const list = document.querySelector('ul');
    list.appendChild(newListIteam);

})
