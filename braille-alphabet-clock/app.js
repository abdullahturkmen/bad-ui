let clockContent = document.getElementsByClassName('clock')[0];
let timeType;

const getTime = () => {

    clockContent.innerHTML = '';

    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    numConvertToBrailleArray({ type: 'hour', value: hour });
    numConvertToBrailleArray({ type: 'minute', value: minute });
    numConvertToBrailleArray({ type: 'second', value: second });

}

const numConvertToBrailleArray = (data) => {

    let num = data.value;

    if (num < 10) {
        num = `0${num}`;
    }

    let letters;

    for (let i = 0; i < num.toString().length; i++) {

        switch (num.toString()[i]) {
            case '1':
                letters = ['colored', '', '', ''];
                break;
            case '2':
                letters = ['colored', '', 'colored', ''];
                break;
            case '3':
                letters = ['colored', 'colored', '', ''];
                break;
            case '4':
                letters = ['colored', 'colored', '', 'colored'];
                break;
            case '5':
                letters = ['colored', '', '', 'colored'];
                break;
            case '6':
                letters = ['colored', 'colored', 'colored', ''];
                break;
            case '7':
                letters = ['colored', 'colored', 'colored', 'colored'];
                break;
            case '8':
                letters = ['colored', '', 'colored', 'colored'];
                break;
            case '9':
                letters = ['', 'colored', 'colored', ''];
                break;
            default:
                letters = ['', 'colored', 'colored', 'colored'];
        }

        arrayConvertToDiv({ type: data.type, lists: letters });

    }

}


const arrayConvertToDiv = (lettersArray) => {

    let dotContent = '';
    let dotContentItem;

    dotContent = `<div class="${lettersArray.type}">`;

    lettersArray.lists.forEach((element) => {
      
        if (!!element) {
            dotContentItem = `<div class="${element}"></div>`;
        }
        else {
            dotContentItem = `<div></div>`;
        }

        dotContent += dotContentItem;

    });

    dotContent += `</div>`;

    divAddToClockContent(dotContent);
}

const divAddToClockContent = (tags) => {
    clockContent.innerHTML += tags;
}

document.onload = getTime();

setInterval(() => getTime(), 1000);

