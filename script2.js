const body = document.body;
console.log(body)

const divWrapper = document.createElement('div');
divWrapper.classList.add('wrapper')
body.append(divWrapper);

const divHeader = document.createElement('div');
divHeader.classList.add('header');
divWrapper.append(divHeader);

const leftTopButton = document.createElement('div')
leftTopButton.classList.add('leftTopButton', 'allButtons')
const button = document.createElement('button');
button.innerHTML = 'Delete All';
leftTopButton.append(button);

divHeader.append(leftTopButton);


const centerTopTextarea = document.createElement('div');
centerTopTextarea.classList.add("centerTopText")
const textarea = document.createElement('textarea');
textarea.innerHTML = 'Enter todo...';
centerTopTextarea.append(textarea);

divHeader.append(centerTopTextarea);

const rightTopButton = document.createElement('div')
rightTopButton.classList.add("rightTopButton", "allButtons")
const button2 = document.createElement('button');
button2.innerHTML = 'Add';
rightTopButton.append(button2);

divHeader.append(rightTopButton);




const toDoWrapper = document.createElement('div');
toDoWrapper.classList.add('toDoListWrapper');

divWrapper.append(toDoWrapper);


const divToDo = document.createElement ('div');
divToDo.classList.add('toDo');
toDoWrapper.append(divToDo);


const buttonCheckMark = document.createElement('button');
buttonCheckMark.classList.add("checkMark", "allButtons");
divToDo.append(buttonCheckMark);


const imgCheckMark = document.createElement('img');
imgCheckMark.classList.add("innerCheckmark");
imgCheckMark.src = ".\Icons\checkMark.svg";
buttonCheckMark.append(imgCheckMark);


const toDoTextarea = document.createElement('textarea');
toDoTextarea.classList.add('toDoTextarea');
divToDo.append(toDoTextarea);

const buttonCrossMark = document.createElement('button');
buttonCrossMark.classList.add("cross", "allButtons");
divToDo.append(buttonCrossMark);

const imgCrossMark = document.createElement('img');
imgCrossMark.classList.add("innerCheckmark");
imgCrossMark.src = ".\Icons\cross.svg";
buttonCrossMark.append(imgCrossMark);

const buttonDate = document.createElement('date');
buttonDate.classList.add("toDoDate")
divToDo.append(buttonDate);











const divToDo2 = document.createElement ('div');
divToDo2.classList.add('toDo');
toDoWrapper.append(divToDo2);


const buttonCheckMark2 = document.createElement('button');
buttonCheckMark2.classList.add("checkMark", "allButtons");
divToDo2.append(buttonCheckMark2);


const imgCheckMark2 = document.createElement('img');
imgCheckMark2.classList.add("innerCheckmark");
imgCheckMark2.src = ".\Icons\checkMark.svg";
buttonCheckMark.append(imgCheckMark2);


const toDoTextarea2 = document.createElement('textarea');
toDoTextarea2.classList.add('toDoTextarea');
divToDo2.append(toDoTextarea2);

const buttonCrossMark2 = document.createElement('button');
buttonCrossMark2.classList.add("cross", "allButtons");
divToDo2.append(buttonCrossMark2);

const imgCrossMark2 = document.createElement('img');
imgCrossMark2.classList.add("innerCheckmark");
imgCrossMark2.src = ".\Icons\cross.svg";
buttonCrossMark.append(imgCrossMark2);

const buttonDate2 = document.createElement('date');
buttonDate2.classList.add("toDoDate")
divToDo2.append(buttonDate2);







const style = document.createElement('style');
style.innerHTML = `
.wrapper {
    width: 420px;
    border: #0f0f0f 2px solid;
    border-radius: 10px;
    background-color: #d1dbde;
    
}

.header {
    display: flex;
    padding: 0px;
    margin-bottom: 40px;
}

.leftTopButton {
    border-radius: 10px;
    margin: 15px 15px 0px 15px;
    padding: 6px;
    cursor: pointer;
}

.centerTopText {
    border-radius: 10px;
    margin-top: 9px;
    margin-left: 27px;
    padding: 6px;
    border: 2px;
    border-color: black;
    cursor: pointer;
    text-align: center;
}

.rightTopButton {
    border-radius: 10px;
    margin: 15px 15px 0px 40px;
    padding: 6px 15px 6px 15px;
    cursor: pointer;
}

.toDo {
    border-radius: 10px;
    border: #0f0f0f 2px solid;
    border-color: black;
    margin: 0px 30px 15px 30px;
    display: flex;
    padding: 10px 10px 15px 10px;
    height: 80px;
}

.checkMark {
    border-radius: 10px;
    /* transform: scale();  */
    padding: 6px 18px 6px 18px;
    width: 50px;
    height: 30px;
    position: relative;
    top: 15px;
    cursor: pointer;
}

.innerCheckmark {
    transform: scale(0.37); 
    position: relative;
    top: -20px;
    right: 20px;
    cursor: pointer;
}

.toDoTextarea {
    margin-top: 9px;
    margin-left: 27px;
    padding: 6px;
    border: 2px;
    border-color: black;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
}

.cross {
    border-radius: 10px;
    padding: 0px 5px 0px 5px;
    position: relative;
    top: -7px;
    right: -54px;
    width: 50px;
    height: 30px;
    cursor: pointer;
}

.innerCross {
    height: 10px;
    width: 10px;
}
.toDoDate {
    border-radius: 10px;
    position: relative;
    top: 60px;
    right: -6px;
    height: 30px;
    width: 50px;
    cursor: pointer;
    
}

.allButtons {
    background-color: #4edec8;
}
`;

document.head.appendChild(style)