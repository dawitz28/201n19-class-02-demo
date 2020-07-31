'use strict';


var name1 = prompt('Hi! my name is Dawit. What is your name?');

alert('Hello ' + name1  + ' it is nice to meet you.');


// is this necessary at this point?
// if (name1 != '') (
//   name1 = 
//   document.write(name1):
// } else {
//   document.write(name1);
// }


var response1 = prompt('1. Do you think I am over 6 feet tall? yes or no?');
var edittedResponse1 = response1.toLowerCase();
// if (edittedResponse1 !== 'no' || 'yes'){
//   response1 = prompt('please answer yes or no, Do you think I am over 6 feet tall? Yes or no?');
//   edittedResponse1 = response1.toLowerCase();
if (edittedResponse1 === 'no' || edittedResponse1 === 'n'){
  // console.log('That is correct!')
    alert('That is correct!');
}


var response2 = prompt('2. Is my name hard to pronouns? yes or no?');
var edittedResponse2 = response2.toLowerCase();
if (edittedResponse2 !== 'no'){
  response2 = prompt('Is my name hard to pronouns? Yes or no?');
  edittedResponse2 = response2.toLowerCase();
}

var response3 = prompt('3. Was I born in Seattle? yes or no?');
var edittedResponse3 = response3.toLowerCase();
if (edittedResponse3 !== 'no'){
  response3 = prompt('please answer yes or no, Was I born in Seattle?  Yes or no?');
  edittedResponse3 = response3.toLowerCase();
}
    
var response4 = prompt('4. Do you think I have a pet? yes or no?');
var edittedResponse4 = response4.toLowerCase();
if (edittedResponse4 !== 'no'){
  response4 = prompt('please answer yes or no, Do you think I have a pet? Yes or no?');
  edittedResponse4 = response4.toLowerCase();
}

var response5 = prompt('5. Do you think I have kids? yes or no?');
var edittedResponse5 = response5.toLowerCase();
if (edittedResponse5 !== 'no'){
  response5 = prompt('please answer yes or no, Do you think I have kids? Yes or no?');
  edittedResponse5 = response5.toLowerCase();
}

var attempted = 0;
var allowedAttempted = 4;
var favNumber = parselnt(prompt('At what age do you think I came to US between 1 and 10?'));

while(attempted < allowedAttempted){
  if(attempted === allowedAttempted){
    alert('nice try! The right answer is 9.');
  }
  else if(attempted > all)
}



var username = prompt ('Hello! what is your favorite fruit?');

var FruitArray = ['orange', 'apple', 'plum', 'cherry'];

console.log('username is: ' + username + 'welcome to the app! ');

if (username === username.toLowerCase()){
  console.log('all lowercase!');
}

  // looping
   
for (var i = 0; i < 4; i++){
  var questions = prompt ('how many apples do I have?');
  var answer = 4; 
  if (questions !== answer){
    alert('try again'); 
  }
}

alert('Thank you for visiting the site ' + name1 + ' and answering my questions!');




