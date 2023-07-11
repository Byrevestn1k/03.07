let QuestionLIST = [
    {
        question: `Скільки слів в словів "ЯМА"`,
        cor: 3,
        wrong: 2
    },
    {
        question: `Скільки слів в словів "ЗИМА"`,
        cor: 4,
        wrong: 5
    },
    {
        question: `Скільки слів в словів "ОСІНЬ"`,
        cor: 5,
        wrong: 6
    }


]

let ANSWERS = {}
let i = 0;
let button = document.querySelector(`button`);
let testDIV = document.querySelector(`.test`);
let li = document.querySelectorAll(`li`);
let res = 0;
let checkInput;
let input = document.createElement(`input`);
let input2 = document.createElement(`input`);
document.addEventListener(`DOMContentLoaded`, () => {
    QwestWrite()

})

button.addEventListener(`click`, (e) => {
    // ANSWERS = new Answers(answer)
    checkInput = document.forms[0].input.value

    if (i == QuestionLIST.length - 2) {
        button.textContent = `Finish`
    }

    if (checkInput == QuestionLIST[i].cor) {
        res++
    }
    if (i == QuestionLIST.length - 1) {


        testDIV.textContent = `Result: ${res} correct answer for ${QuestionLIST.length} questions`;
        testDIV.classList.add(`flex`)
        button.remove()
        e.preventDefault()
    }
    console.log(`res = ` + res)
    let li = document.querySelector(`li`);
    li.remove()
    i++
    QwestWrite()
})

function QwestWrite() {

    let ol = document.querySelector(`ol`);
    let li = document.createElement(`li`);
    let DIV = document.createElement(`div`);
    let p = document.createElement(`p`);
    let label = document.createElement(`label`);
    let label2 = document.createElement(`label`);

    let br = document.createElement(`br`);
    let button = document.createElement(`button`);
    input.setAttribute(`type`, `radio`)
    input.setAttribute(`name`, `input`)
    input2.setAttribute(`type`, `radio`)
    input2.setAttribute(`name`, `input`)
    testDIV.appendChild(ol);
    button.textContent = `Next`
    ol.appendChild(li)
    li.appendChild(p)
    p.textContent = `${QuestionLIST[i].question}`;
    input.setAttribute(`value`, `${QuestionLIST[i].wrong}`);
    li.appendChild(input)
    label.textContent = QuestionLIST[i].wrong
    label2.textContent = QuestionLIST[i].cor
    li.appendChild(label)
    li.appendChild(br)
    li.appendChild(input2)
    input2.setAttribute(`value`, `${QuestionLIST[i].cor}`)
    li.appendChild(label2)

}




