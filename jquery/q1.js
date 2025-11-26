$(function(){
// On DOM ready: show greeting based on time of day
function timeGreeting(){
const hour = new Date().getHours();
if(hour < 12) return 'Good Morning!';
if(hour < 18) return 'Good Afternoon!';
return 'Good Evening!';
}


// Set initial greeting
$('#greeting').text(timeGreeting());


// When greeting is clicked — show alert (requirement 4)
$('#greeting').on('click', function(){
alert('Greeting clicked: ' + $(this).text());
});


// Change Greeting button -> replace greeting with a motivational quote
$('#changeGreeting').on('click', function(){
// Example motivational quote — demonstrate dynamic text replacement
$('#greeting').text('Keep going — small steps every day!');
});


// Toggle visibility of welcome message
$('#toggleWelcome').on('click', function(){
// Toggle using jQuery's toggle() which changes display
$('#welcomeMsg').toggle();
});
});