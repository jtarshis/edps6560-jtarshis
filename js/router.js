// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
    scrollFunction1();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function scrollFunction1() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("top_navbar").style.opacity = "0.6";
  } else {
    document.getElementById("top_navbar").style.opacity = "1.0";
  }
}