$(document).ready(function(){function e(){var e=new TimelineLite;e.to(".text",.7,{transform:"translateY(0px), opacity: '1', ease:Expo.easeOut"}).to("#creative",1,{transform:"translateY(0px)",opacity:"1",ease:Expo.easeOut,delay:"-0.7"})}$(".burger").click(function(){$(this).toggleClass("burgerCross")}),$(".burger").click(function(){$(".burger").hasClass("burgerCross")?($("nav").addClass("nav--open"),$(".line1").addClass("lineStatic"),$(".line3").addClass("lineStatic")):($("nav").removeClass("nav--open"),$(".line1").removeClass("lineStatic"),$(".line3").removeClass("lineStatic"))}),$(".nav li a").click(function(){$(".burger").hasClass("burger")&&($(".burger").removeClass("burger"),$("nav").removeClass("nav--open"))}),$("nav ul li a").click(function(){$(".burger").hasClass("burgerCross")&&($(".burger").removeClass("burgerCross"),$("nav").removeClass("nav--open"),$("nav ul li a").addClass("current"))}),$("nav a").click(function(e){var a=$(this).attr("href"),r=70,o=$(a).offset().top-r;$("html, body").animate({scrollTop:o},500),e.preventDefault()}),$(window).scroll(function(){$(window).scrollTop()>400?$("nav").addClass("nav--show "):$("nav").removeClass("nav--show  ")}),e();var a={easing:"ease-in-out",scale:1,viewFactor:.3,reset:!0},r={easing:"ease-in-out",scale:1,viewOffset:{top:0,right:0,bottom:0,left:0},viewFactor:1,duration:1e3,reset:!1};window.sr=ScrollReveal(),sr.reveal(".sr",a),sr.reveal(".h",r),$("#closeVideo").click(function(e){e.preventDefault(),$("body").removeClass("overflow"),console.log("yolo"),video.pause();var a=new TimelineLite;a.to(".video-wrapper",0,{left:"0",width:"100%"}).to(".video-wrapper",.5,{left:"-150%"})}),$("#startVideo").click(function(e){e.preventDefault(),$("body").addClass("overflow"),video.play();var a=new TimelineLite;a.to(".video-wrapper",0,{left:"-150%",width:"100%"}).to(".video-wrapper",.5,{left:"0%"})})});