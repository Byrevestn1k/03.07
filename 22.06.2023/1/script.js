let question = document.querySelector(`.question`);
let correct = document.querySelector(`textarea`);
let button = document.querySelector(`button`);

button.addEventListener(`click`, (e) => {
    valueChack(question, correct);
    if (valueChack(question, correct) == false) {
        e.preventDefault()
    }
    else {
        newColorAdd()
        question.value = ``;
        correct.value = ``;
    }
})

function newColorAdd() {
    let QUESTION = question.value;
    let CORRECT = correct.value;
    let newCommentQuestion = document.createElement(`div`)
    let DIV = document.createElement(`div`)
    let NAME = document.createElement(`div`)
    let MASSAGE = document.createElement(`div`);
    let DATE = document.createElement(`div`);
    newCommentQuestion.classList.add(`newCommentQuestion`)
    DIV.classList.add(`flex`)
    MASSAGE.classList.add(`message`)
    document.querySelector(`.row1`).appendChild(newCommentQuestion)

    newCommentQuestion.appendChild(DIV);
    DIV.appendChild(NAME);
    DIV.appendChild(DATE);
    newCommentQuestion.appendChild(MASSAGE);
    NAME.textContent = `${QUESTION}`
    MASSAGE.textContent = `Correct answer: ${CORRECT}`
    let TIME = new Date().toLocaleString()
    DATE.textContent = `${TIME}`
}


function valueChack(a, b) {
    let flag = 0;

    if (a.value == `` || (/^ /.test(a.value))) {
        a.style.border = `2px red solid`;
        flag++
    }
    else {
        //  a.style.border = `2px green solid`;

    }
    if (b.value == `` || (/^ /.test(b.value))) {
        a.style.border = `2px red solid`;
        flag++
    }
    else {
        //b.style.border = `2px green solid`;

    }


    // }
    if (flag > 0) {
        console.log(flag)
        return false;
    }
    else {
        console.log(flag)
        return true;

    }
}


