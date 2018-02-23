(function($){
  $(function(){

    $('.button-collapse').sideNav();


    function sayHello(){
      console.log("hello world!");
    }

    //NOTE: https://socialtriggers.com/leaks-cost-subscribers/
    //follow this website's example

    //NOTE: 23 Feb 2018
    //the "free updates" signup actually navigates to another page
    //ANOTHER PAGE that looks like a lightbox.  Has 50% complete.
    //Send your name and email

    //AFTER YOU SUBMIT, you're directed to yet another page:
    //https://socialtriggers.com/signup/youre-almost-done.php
    //this has a timer
    //and an explanation which urges users to verify their email


    // setTimeout(sayHello,3000);
  }); // end of document ready
})(jQuery); // end of jQuery name space
