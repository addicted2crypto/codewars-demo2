
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string.
//  You don't have to worry with strings with less than two characters.


function removeChar(str) {
    return str.slice(1, -1);
  }




  DESCRIPTION:
// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"


//my solution ```````

var Ball = function(ballType) {
  this.ballType = ballType || 'regular';
};