//hide options div
$("#colorsOptions").hide();
//event when click the icon show or hide options div
$("#options i").click(function(){
    $("#colorsOptions").toggle(500);
});

//get the color options
let lis = $("#colorsOptions ul li");

//loop on the color options and give it background color
lis.eq(0).css("backgroundColor" , "#09c");
lis.eq(1).css("backgroundColor" , "teal");
lis.eq(2).css("backgroundColor" , "tomato");
lis.eq(3).css("backgroundColor" , "tan");
lis.eq(4).css("backgroundColor" , "orange");

//event when click the color options change the color of hs
$(lis).click(function(){
   let color = $(this).css("backgroundColor");      //get the color of color options on click on it
   $("h1,h2,h3,h4,h5,h6").css("color" , color);     //change the color option
});

//event when click the img on options div change the background image of home section
$("#options img").click(function(){
    let imgSrc = $(this).attr("src");        //get img src
    $("#home").css("backgroundImage" , "url("+imgSrc+")");   //change background img of home section
});

//get the distance between top and profile section to use it to change the background color of profile section
let profileTop = $(".profile").offset().top;

//get the distance between top and leader section to use it to show and height btnUp
let leaderTop = $("#leader").offset().top;

//event on sroll
$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();        //calc the pxs that scrolled
    //change the background color of profile section to tan
    if(scrollTop > profileTop)
    {
        $(".profile").css("backgroundColor" , "tan");      //change the color
    }
    else
    {
        $(".profile").css("backgroundColor" , "transparent");  //return the old color
    }
    //change nav color
    if(scrollTop == profileTop || scrollTop > profileTop)  //if site top equal or greater profile top
    {
        $("nav").css("backgroundColor" , "rgba(0,0,0,.6)");  //change the color of navbar
    }
    else
    {
        $("nav").css("backgroundColor" , "transparent");    //return the navbar color if condition usn't achieve
    }

    //show and hide btnUp
    if(scrollTop > leaderTop)           //condition if site top greater than 1700 show btnUp
    {
        $("#btnUp").fadeIn(500);      //show btnUp
    }
    else
    {
        $("#btnUp").fadeOut(500);     //hide btnUp
    }
});

//event when click on btnUp return the site up
$("#btnUp").click(function(){
   $("body,html").animate({scrollTop:0} , 1000);   //return to home section after click on button with delay 1s
});

//event to move between section using navbar links smoothly
$("nav a").click(function(){
    let aHref = $(this).attr("href");      //get href of the links in navbar
    let aOffset = $(aHref).offset().top;     
    $("body,html").animate({scrollTop:aOffset} , 1000);    //go to sections by navbar links with delay 2s
});

//show loading page until site load
$(document).ready(function(){
    $("#loading").fadeOut(1000);            //to hide loading page after loading
    $("body").css("overflow", "auto");      //to show the scroll
});

