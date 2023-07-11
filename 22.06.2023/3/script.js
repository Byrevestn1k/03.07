
function Info(position, skil) {

    this.position = position.value;
    this.skills = skil;
}
function Skill(skills, skil) {
    for (let i = 0; i < skills.length; i++) {
        if (skills[i].checked) {
            skil.push(skills[i].value)

        }
    }

}

function DocWrite(table) {
    let h3 = document.createElement(`h3`)
    table.appendChild(h3);
    h3.textContent = `Result:`;
    h3.style.textAlign = `center`;
    console.log(textarea.value)//не бачить

    table.appendChild(textarea.value);
}

let Bold = document.querySelector(`Bold`)
let Underline = document.querySelector(`Underline`)
let Italics = document.querySelector(`Italics`)
let position = document.forms[0].position
let button = document.querySelector(`button`)
let skills = document.querySelectorAll(`.checkbox`)
let skil = []
let table = document.querySelector(`.table`);
let textarea = document.querySelector(`.textarea`);
console.log(skills)

button.addEventListener('click', (e) => {
    Skill(skills, skil)
    let Information = new Info(position, skil)
    DocWrite(table)
})
console.log(skil)
console.log(position.value)
