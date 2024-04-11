// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $("html").addClass("hasjs");
});
function validForm() {
  alert("Thank you for Signing in!");
}
// Function to create and append the header
function createHeader() {
  var currentLocation = window.location.pathname.split("/").pop();
  var header = document.createElement('header');
  header.innerHTML = `
  <header>
    <nav id="main-navbar">
      <ul>
        <li id="option1"><a href="page-1.html">Shop</a></li>
        <li id="option2"><a href="page-2.html">About Us</a></li>
      </ul>
    </nav>
  </header>
  `;
  var lastStr = currentLocation.substring(currentLocation.length-1);
  alert(lastStr)
  if(lastStr !="/" && currentLocation.includes("index")==false){// Exclude the login page
    document.body.prepend(header);//adds header
  }
  
}

// Call the function to create the header when the DOM content is loaded
document.addEventListener('DOMContentLoaded', createHeader);