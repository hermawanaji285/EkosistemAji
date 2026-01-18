window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script7 = function()
{
  (function() {
    if (window.jQuery) {
        console.log('jQuery is already loaded.');
        return;
    }

    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.6.0.min.js'; 
    script.type = 'text/javascript';

    // Error handling
    script.onerror = function() {
        console.error('Failed to load jQuery.');
    };

    // Success handling
    script.onload = function() {
        console.log('jQuery loaded successfully.');
    };

    head.appendChild(script);
})();

}

window.Script8 = function()
{
  var player = GetPlayer();

//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxXOwuYasQngic5iC_In_QMJ8yAJMJH4V7CsYys9E3RRh7sihXU7U73hjPpoD-PlqM/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "Date" : new Date().toJSON().slice(0,19), 
 "Feedback" : player.GetVar("UserFeedback")
}

}

window.Script9 = function()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
 
//EXPORT TO GOOGLE
$.ajax({
    url: WEB_APP_URL,
    type: "POST",
    data: storyline,
    success: function(data)
    {
        console.log(data);
    },
    error: function(err) {
        console.log('Error:', err);
    }
});
return false;

}, 1000);

}

};
