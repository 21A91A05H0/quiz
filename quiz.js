let question=document.getElementById("question");
let submitbtn=document.getElementById("submitBtn");
let opt3=document.getElementById("opt-3");
let opt4=document.getElementById("opt-4");
let resultcard=document.getElementById("resultCard");
let quizcard=document.getElementById("quizCard");
let resulthead=document.getElementById("resulthead");
let reloadbtn=document.getElementById("reloadBtn");
let questions=[
    {
        text:"1. Inside which HTML element do we put the JavaScript",
        option1:"<script>",
        option2:"<javascript>",
        option3:"<scripting>",
        option4:"<js>",
        answer:"q1"
    },
    {
        text:"2. What is the correct place to insert a javascript?",
        option1:"The <head> section",
        option2:"The <body> section",
        option3:"Both the <head> section and <body> section are correct",
        option4:"css 4",
        answer:"q3"
    },
    {
        text:"3. What is the correct syntax for referring to an external script called 'XXX.js'",
        option1:"<script href='xxx.js'>",
        option2:"<script name='xxx.js'>",
        option3:"<script src='xxx.js'>",
        option4:"js 4",
        answer:"q3"
        
    },
    {
        text:"4. The external JavaScript file must contain the <script> tag?",
        option1:"True",
        option2:"False",
        option3:"bs 3",
        option4:"bs 4",
        answer:"q2"
    },
    {
        text:"5. Is JavaScript case sensitive?",
        option1:"No",
        option2:"Yes",
        option3:"bs 3",
        option4:"bs 4",
        answer:"q2"
    },

];
let answersArray=[];
question.textContent="1. Inside which HTML element do we put the JavaScript?";
let length=questions.length;
let counter=1;
let option1=document.getElementById("option1");
let option2=document.getElementById("option2");
let option3=document.getElementById("option3");
let option4=document.getElementById("option4");
option1.textContent="<script>";
option2.textContent="<javascript>";
option3.textContent="<scripting>";
option4.textContent="<js>";

let q1=document.getElementById("q1");
let q2=document.getElementById("q2");
let q3=document.getElementById("q3");
let q4=document.getElementById("q4");
let q5=document.getElementById("q5");

let data;
function getoptions()
{   
    const que1=document.getElementsByName("que1");
    for(let i=0;i<=que1.length;i++)
    {
        if(que1[i].checked)
        {    
            que1[i].checked=false;
            answersArray.push(que1[i].value);
            return que1[i].value;

        }
    }
    return "";
}  


submitbtn.addEventListener('click',function(event)
{    
    console.log(getoptions());
    if(counter===length)
    {
        validateoptions();
    }
    else if(counter===1)
    {
        opt4.classList.add("d-none");
    }
    else if(counter===3)
    {
        opt3.classList.add("d-none");
    }

        question.textContent=questions[counter].text;
        option1.textContent=questions[counter].option1;
        option2.textContent=questions[counter].option2;
        option3.textContent=questions[counter].option3;
        option4.textContent=questions[counter].option4;
    counter+=1;
});
let result=0;
function validateoptions()
{   
   quizcard.classList.add("d-none");
   resultcard.classList.remove("d-none");
   for(let p=0;p<5;p++)
   { 
    console.log(answersArray[p]);
    console.log(questions[p].answer);
    if(answersArray[p]===questions[p].answer)
    {
        result+=1;
    }
   }
    resulthead.textContent="Total Score : "+result+"/5";
}
reloadbtn.addEventListener('click',function()
{
      location.reload();
});
