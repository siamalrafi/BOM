// console.log('This is the added');
const showAlert = () => {
    const num = Math.random() * 10;
    // console.log(num);
    if (num < 5) {
        alert('Number is small')
    }
}
// showAlert();

const AskSomethin = () => {
    const decision = confirm('Are you coming Here');
    if (decision === true) {
        const taka = confirm('Okay Fine! Give me some money to go.');
        if (taka === true) {
            alert('Tahola to toi jaitacos')
        } else {
            alert('Sorry VAI')
        }
    } else {
        alert('Ja Bata ! DGM.')
    }
}

const getUserInfo = () => {
const userName = prompt('Tell us your name');
if(!!userName){
    console.log('Welcome to here', userName);
}
}




