/* Show read more text */

const buttonsMore = [...document.querySelectorAll('.main__more')];
const hiddenTexts = [...document.querySelectorAll('.main__text--hidden')];

const showHiddenText = () => {
    buttonsMore.forEach((thisButton) => {
        thisButton.addEventListener('click', function () {
            this.previousElementSibling.classList.toggle('show');
        })
    });
}
showHiddenText();



/* Add power in status page */


const boxes = [...document.querySelectorAll('.main__box')];
const powerSum = document.querySelector('.main__total span');
const arrayPower = [...document.querySelectorAll('.main__box span')];


const powerConsumption = () => {
    boxes.forEach(box => {
        box.addEventListener('click', function (e) {
            boxes.forEach(box => box.style.border = "");
            this.style.border = "4px solid green";
            let randomNumber = Math.floor(Math.random() * 7 + 1);
            this.children[0].firstElementChild.innerText = randomNumber;
            let powerSumOne = arrayPower[0].innerText;
            let powerSumTwo = arrayPower[1].innerText;
            powerSum.innerText = parseInt(powerSumOne) + parseInt(powerSumTwo) + ' kW';
        })
    });
}

powerConsumption();




