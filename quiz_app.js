const questions = [
    {
        'que' : "What is your name?",
        'a' : "Nitin",
        'b' : "Aryan",
        'c' : "Abhi",
        'd' : "None",
        'correct' : 'c'
    },
    {
        'que' : "What is your age?",
        'a' : "15",
        'b' : "19",
        'c' : "21",
        'd' : "23",
        'correct' : 'a'
    },
    {
        'que' : "What is your class?",
        'a' : "lower",
        'b' : "middle",
        'c' : "upper",
        'd' : "Don't want to tell",
        'correct' : 'b'
    }
]
let total = questions.length;
let right=0,wrong=0;
let index = 0;
const quesbox = document.getElementById("quesbox");
const options = document.querySelectorAll(".options");
const load_question = () => {
    if(index==total)
    {
        endquiz();
    }
    else
    {
    reset();
    let data = questions[index];
    quesbox.innerText = `${index+1}) ${data.que}`;
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;
    }
}
const submitquiz = () => {
    const ans = getanswer();
    if(ans === questions[index].correct)
    {
        right++;
    }
    else
    {
        wrong++;
    }
    index++;
    load_question();
}
const getanswer = () => {
    let answer;
    options.forEach(
        (inp) => {
            if(inp.checked)
            {
                answer = inp.value;
            }
        }
    )
    return answer;
}
const reset = () => {
    options.forEach(
        (inp) => {
           inp.checked = false;
        }
    )
}
const endquiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3>Thankyou for playing quiz.</h3>
    <h2>${right}/${total} are correct.</h2>
    <div>
    `
}
//initial call
load_question();