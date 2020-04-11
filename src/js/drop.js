function myFunction() {
  var x =
  document.getElementById("myTopnav");
  if (x.className=== "topnav") {
    x.className += " resposive";
  } else {x.className = "topnav";
 }
}
//slide show
var slideIndex = 1;
                showDivs(slideIndex);
            
                function plusDivs(n) { 
                  showDivs(slideIndex += n);
                }
                function showDivs(n){
                  var i;
                  var x =
                  document.getElementsByClassName("mySlides");
                  if (n > x.lenght) {slideIndex = 1}
                  if (n < 1){slideIndex=x.length};
                  for(i=0; i < x.length; i++)
                  {
                    x[i].style.display ="none";
                  }
                  
                  
                  x[slideIndex-1].style.display = "block";
                 // image change every 2sec
                }
      //auto slide
      var Index = 0;
      carousel();
      function carousel() {
        var i;
        var x =
        document.getElementsByClassName(mySlidedes);
        for(i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {myIndex= 1}
        x[myIndex-1].style.display = "block";
        setTimeout(carousel, 2000);
      }
      
      
    