const questions_db = [
    {
        id:1,
        question: " Q:1)  Artificial Intelligence is about_____. ",
        a: "Playing a game on Computerdy",
        b: "Making a machine Intelligent",
        c: "Programming on Machine with your Own Intelligence",
        d: "Putting your intelligence in Machine",
        correct_ans: "ans2"
    },
    {id:2,
        question: "Q:2) Who is known as the -Father of AI ?",
        a: "Fisher Ada",
        b: "Alan Turing",
        c: "21John McCarthy",
        d: "Allen Newell",
        correct_ans: "ans3"
    },
    {id:3,
        question: "Q:3) Select the most appropriate situation for that a blind search can be used.",
        a: "kaReal-life situation",
        b: "Small Search Space",
        c: "Complex game",
        d: "All of the above",
        correct_ans: "ans2"

    },
    {id:4,
        question: " Q:4)  Among the given options, which search algorithm requires less memory?",
        a: "Optimal Search",
        b: "Depth First Search",
        c: "hrBreadth-First Search",
        d: "Linear Search",
        correct_ans: "ans2"
    },
    {id:5,
        question: " Q:5) Which of the given language is not commonly used for AI?",
        a: "LISP",
        b: "PROLOG",
        c: "Perl",
        d: "Python",
        correct_ans: "ans3"
    },
    {id:6,
        question: " Q:6) The component of an Expert system is____.",
        a: "Knowledge Base",
        b: "Inference Engine",
        c: "User Interface",
        d: "All of the above",
        correct_ans: "ans4"
    },
    {id:7,
        question: " Q:7)  Which algorithm is used in the Game tree to make decisions of Win/Lose?",

        a: "Heuristic Search Algorithm",
        b: "DFS/BFS algorithm",
        c: "Greedy Search Algorithm",
        d: "Min/Max algorithm",
        correct_ans: "ans4"
    },
    {id:8,
        question: " Q:8) The available ways to solve a problem of state-space-search.",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct_ans: "ans2"
    },
    { id:9,
        question: " Q:9) An AI agent perceives and acts upon the environment using___.",
        a: "Sensors",
        b: "Perceiver",
        c: "Actuators",
        d: "Both a and c",
        correct_ans: "ans4"
    },
    {id:10,
        question: " Q:10) Which rule is applied for the Simple reflex agent?",
        a: "Simple-action rule",
        b: "Simple &Condition-action rule",
        c: "Condition-action rule",
        d: "None of the above",
        correct_ans: "ans3"
    },
]


const question = document.querySelector('.question');
const option_1 = document.querySelector('#opt1')
const option_2 = document.querySelector('#opt2')
const option_3 = document.querySelector('#opt3')
const option_4 = document.querySelector('#opt4')
const submit = document.querySelector('#btnm');
const answers = document.querySelectorAll('.que');
const hide = document.querySelector('.hide_box');
const box = document.querySelector('.box');
const passed = document.querySelector('#passed');
const cont = document.querySelector('.container_t')
const arr = document.querySelector('.arr');
const back = document.querySelector('.back');
const left_side_box = document.querySelector('.left_side_box');
const timer_box = document.querySelector('.timer_box');
const timeCount = document.querySelector('.timeCount');
const timetext = document.querySelector('.timetext');

console.log(question);
console.log(questions_db)



let questionCount = 0;
let score = 0;
let bool = false;
let save = [];
let save_not = [];

let counter


const load = () => {
    timetext.style.display = 'none';
    let hey = questions_db[questionCount].id
    let  sec_hey =  questions_db[questionCount].question
    console.log(questions_db[questionCount].question)
    question.innerText = questions_db[questionCount].question;
    option_1.innerText = questions_db[questionCount].a;
    option_2.innerText = questions_db[questionCount].b;
    option_3.innerText = questions_db[questionCount].c;
    option_4.innerText = questions_db[questionCount].d;
    clearInterval(counter);
    startTimer(30 , hey , sec_hey)

}
load();

// back.addEventListener('click', () => {
//     questionCount--;
//     load();
//     if (bool) {
//         save.push(questions_db[questionCount].question)
//     }
//     else {
//         save_not.push(questions_db[questionCount].question)
//     }
// });


const clicked = () => {
    let answer;

    answers.forEach(element => {
        if (element.checked) {
            answer = element.id;
        }
    });
    return answer;
}

const deselectall = () => {
    answers.forEach(elem => {
        elem.checked = false;
    })
}

submit.addEventListener("click", submited ) 

function submited(){

     hey = questions_db[questionCount].id
     sec_hey =  questions_db[questionCount].question
    clearInterval(counter);
    startTimer(30 , hey , sec_hey );
    
    
    got_ans = clicked();
    console.log(got_ans);
    clearInterval(counter);

    if (got_ans === questions_db[questionCount].correct_ans) {
        bool = true;
        score++;
        console.log(score)
    }
    else {
        bool = false
    }

    if (bool) {
        save.push(questions_db[questionCount].question)
    }
    else {
        save_not.push(questions_db[questionCount].question)
    }


    questionCount++;
    
    deselectall();

    function aligning(elem) {
        let dom = `
            <ul style="list-style:none";>
               <li>${elem}</li>
             </ul>`;
        return dom
    }
    if (questionCount == questions_db.length - 1) {
        submit.innerText = 'Submit';
    }

    const new_saved = save_not.map(aligning);
    if (questionCount < questions_db.length) {
        load();
    }
    else {
        box.style.display = 'none';
        arr.style.display = 'block'
        left_side_box.style.display = 'none';
        timer_box.style.display = 'none';
        arr.innerHTML = `<h2 class="performace">Performace</h2>
      <p class="status"><strong>Incorrect</strong>${new_saved}</p>
      `
        if (score < questions_db.length - 4) {

            hide.innerHTML = `
            
            <div class="submit_box">
           

            <h2 class="submit">
                Congrats you have been completed your test
            </h2>

            <h2 class="score">Your score is ${score}/${questions_db.length} </h2>
            <h2 class="well">you need to practice well</h2>
            <h2 class="well">you need minimum ${questions_db.length - 4} marks to get passed</h2>
            <button class="como" onClick="location.reload()">Go again</button> 
            </div> `
        }
        else {
            passed.style.display = 'block';
            hide.innerHTML = `
            
            <div class="submit_box">
    

            <h2 class="submit">
                Congrats you have been completed your test
            </h2>

            <h2 class="score">Your score is ${score}/${questions_db.length} </h2>
            <h2 class="well">Well done you have done a great job</h2>
            <a href="/qh_task_quiz___/cer.pdf" target="_reddy" class="cer"><button class="cer" >Get Certificate</button></a>
            <button class="como" onClick="location.reload()">Go again</button> 
            </div> `;
        }

    }
    hide.classList.remove('hide_box');
}



function startTimer(time , hey , sec_hey){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value

        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
            console.log(hey)
        }

        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            startTimer(30)
            timetext.textContent = "Time Off"; //change the time text to time off
            save_not.push(questions_db[questionCount].question)
            if(hey == 10){
                console.log('last question')
                // questionCount++;
                timeCount.style.display = 'none';
                box.style.display = 'none';
        arr.style.display = 'block'
        left_side_box.style.display = 'none';
        arr.innerHTML = `<h2 class="performace">Performace</h2>
      <p class="status"><strong>Incorrect</strong>${save_not}</p>
      `
        if (score < questions_db.length - 4) {

            hide.innerHTML = `
            
            <div class="submit_box">
           

            <h2 class="submit">
                Congrats you have been completed your test
            </h2>

            <h2 class="score">Your score is ${score}/${questions_db.length} </h2>
            <h2 class="well">you need to practice well</h2>
            <h2 class="well">you need minimum ${questions_db.length - 4} marks to get passed</h2>
            <button class="como" onClick="location.reload()">Go again</button> 
            </div> `
        }
        else {
            passed.style.display = 'block';
            hide.innerHTML = `
            
            <div class="submit_box">
    

            <h2 class="submit">
                Congrats you have been completed your test
            </h2>

            <h2 class="score">Your score is ${score}/${questions_db.length} </h2>
            <h2 class="well">Well done you have done a great job</h2>
            <a href="/cer.pdf" target="_reddy" class="cer"><button class="cer" >Get Certificate</button></a>
            <button class="como" onClick="location.reload()">Go again</button> 
            </div> `;
        }
            }
            else{
                questionCount++;
                load();
            }
           
        }

        // if(hey == true){
        //     submited();
        //     startTimer(10);
        // }
       
    }
    // hey = false;
}


