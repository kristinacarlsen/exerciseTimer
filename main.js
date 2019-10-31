//an array with exercises
// function that cycles through the arr
        //displays the arr content in html
        //exercise times out, new exercise displayed
// master timer function that starts the cycle
//timer function that starts cycle needs to restart
//buttons to start master timer and stop master timer
//function that displays arrays on screen

const exercises = ['20 Jumping Jacks', '20 Curl Ups', '10 Pushups', '50 mountain climbers', '5 burpees'];

const exerciseDis = document.querySelector('.exerciseDis');
const counter = document.querySelector('#countDown');

//exercise cycle/timer function
function exercise() {
    var ranEx = Math.floor(Math.random()*exercises.length-1);
    var exerciseGen = exercises[ranEx];
    exerciseDis.innerHTML = exerciseGen;

};

exercise();
setInterval(exercise, 2000);