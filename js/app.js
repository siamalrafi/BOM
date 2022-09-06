document.getElementById('btn-add-name').addEventListener('click', function () {
const nameFiled =document.getElementById('name-filed');
const nameValue = nameFiled.value ;
console.log(nameValue);

localStorage.setItem('name', nameValue);
})

document.getElementById('btn-add-age').addEventListener('click',function(){
const ageFiled = document.getElementById('age-field');
const ageValue = ageFiled.value;

localStorage.setItem('age', ageValue);
});


document.getElementById('btn-remove-name').addEventListener('click',function(){
localStorage.removeItem('name');
});
document.getElementById('btn-remove-age').addEventListener('click',function(){
localStorage.removeItem('age')




})



