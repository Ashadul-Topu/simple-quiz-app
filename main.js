/*
making a simple quiz application using JavaScript
date: 29-04-2023
copy from ws cube tech
copy by Ashadul Islam
*/


// All questions list 
const questionList =[
    {
        'question': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'Python',
        'correct': 'a'
    },
    {
        'question': 'Which of the following is not programming language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'Python',
        'correct': 'a'
    },
    {
        'question': 'what year was javascript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of them ',
        'correct': 'b'
    },{
        'question': 'what dose CSS stand for?',
        'a': 'Hypertext Markup Language',
        'b': 'Json object notation',
        'c': 'Cascading style sheet',
        'd': 'none of them ',
        'correct': 'c'
    },
 ]

// variables
 let index = 0;
 const showQuestion =  document.getElementsByClassName('question')[0]
 const optionInputs = document.querySelectorAll('input')
 const submitQuizBtn = document.getElementById('submit-question')
let totalQuestions = questionList.length;
let rightAnswer =0, wrongAnswer =0;

// Show question in browser
 const loadQuestion = () =>{
    if(index === totalQuestions){
        return endQuizQuestion();
    }
    // invoke resetInputChecked function
    resetInputChecked();


    const data = questionList[index] // question is object and index number is change able number those make a new object 'data'.
    showQuestion.innerText = `${index+1})  ${data.question }` // data is new object and question is object property

    optionInputs[0].nextElementSibling.innerText = data.a
    optionInputs[1].nextElementSibling.innerText = data.b
    optionInputs[2].nextElementSibling.innerText = data.c
    optionInputs[3].nextElementSibling.innerText = data.d
 }



 // making quiz submission function
//  submitQuizBtn.addEventListener('click', submitQuiz)
 const submitQuiz = () => {
    const data = questionList[index]
    const Answer = checkSelectOption()

    // console.log(data.correct);
    // console.log(Answer);

    if (Answer === data.correct) {
        // console.log(' congratulations! You choose right answer');
        // index++;
        rightAnswer++;
    }else{
        // console.log('awful! You select wrong answer, try again');
        wrongAnswer++;
    }

    index++;
    loadQuestion()
 }


 // check selected answers 
  const checkSelectOption = () => {
    let selectedAnswer
    optionInputs.forEach((input)=>{
        if (input.checked) {
            selectedAnswer = input.value
            // console.log(input.value);
        }
    })
   return selectedAnswer
  }


 // reset selected option
 const resetInputChecked = () => {
    optionInputs.forEach(
        (input)=>{
        input.checked = false;
    })
   }

// end quiz Question
const endQuizQuestion = () => {
    document.getElementById('quiz-questions').innerHTML = `
    <div class="" style="text-align: center">
        <h2>Thanks for playing the quiz Game</h2>
        <h1>You got ${rightAnswer} out of ${totalQuestions}</h1>
        <h2>You miss ${wrongAnswer}</h2>
    </div>
    `
}

// invoke loadQuestion function
   loadQuestion()