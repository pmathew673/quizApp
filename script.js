const data=[{
    question:"Whats's your name?",
    op1:"amal",
    op2:"suresh",
    op3:"ramesh",
    op4:"paul",
    correct:"op4"
},
{
    question:"Whats's your contry?",
    op1:"india",
    op2:"america",
    op3:"africa",
    op4:"kjo",
correct:"op1"},
{
    question:"Q3",
    op1:"amal",
    op2:"suresh",
    op3:"ramesh",
    op4:"paul",
    correct:"op3"
},
{
    question:"Q4",
    op1:"amal",
    op2:"suresh",
    op3:"ramesh",
    op4:"paul",
    correct:"op4"
},
{
    question:"Q5",
    op1:"amal",
    op2:"suresh",
    op3:"ramesh",
    op4:"paul",
    correct:"op1"
},
]
    let count = 0;
    let score= 0;
    const loadQuestion=()=>{
        document.getElementById('question').innerText=data[count].question;

        document.getElementById("a_text").innerText=data[count].op1;
        document.getElementById('b_text').innerText=data[count].op2;
      document.getElementById('c_text').innerText=data[count].op3;
      document.getElementById('d_text').innerText=data[count].op4;

    }
loadQuestion();


const radioButtons= document.querySelectorAll('.answer');

const btn = document.querySelector('#submit');
btn.addEventListener('click',()=>{
    let selectedAnswer;
    for(const radioButton of radioButtons){
        if (radioButton.checked){
            selectedAnswer=radioButton.value;
            radioButton.checked=false;
            selectedAnswer==data[count].correct?score++:score;
            console.log(selectedAnswer,score);
            count==data.length-1?alert(`You have completed${score}`):count++;
            loadQuestion();
            console.log(count);
            break;
        }//else{
         //  count===data.length-1?alert(`You have completed${score}`):count++;
         //  radioButton.checked=false;
         //  loadQuestion();
         //  break;
       // }//
    }
})

