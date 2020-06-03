/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  x Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item} -- list items!
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

   Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  x Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned markup to the DOM.
*/
function menuMaker(menuItems){

  let header = document.querySelector('.header');
  let menu = document.createElement('div');
  let list = document.createElement('ul');
  let newButton = document.createElement('button');
  let listItem1 = document.createElement('li');
  let listItem2 = document.createElement('li');
  let listItem3 = document.createElement('li');
  let listItem4 = document.createElement('li');
  let listItem5 = document.createElement('li');
  let listItem6 = document.createElement('li');

  menu.classList.add('menu');
  newButton.classList.add('.menu-button');

  header.appendChild(menu);
  menu.appendChild(list);
  menu.appendChild(newButton);


  for (let i = 0; i < menuItems.length; i++ ){
    listItem = menuItems[i];
    list.appendChild(listItem);
  }

  function showMenu(){
    menu.classList.add('menu--open');
  }

  newButton.addEventListener('click', showMenu);

  return menu;
}

let parentDiv = document.querySelector('.menu-button');

for (let i = 0; i < menuItems.length; i++){
  parentDiv.appendChild(menuMaker(menuItems[i]));
}
