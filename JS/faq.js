const btn1 = document.querySelector('.question1')
const btn2 = document.querySelector('.question2')
const btn3 = document.querySelector('.question3')
const btn4 = document.querySelector('.question4')
const btn5 = document.querySelector('.question5')
const answer1 = document.querySelector('.answer1')
const answer2 = document.querySelector('.answer2')
const answer3 = document.querySelector('.answer3')
const answer4 = document.querySelector('.answer4')
const answer5 = document.querySelector('.answer5')
btn1.addEventListener("click", function() {
    answer1.classList.toggle('answer1')
    answer2.classList.toggle('ac')
})
btn2.addEventListener("click", function() {
    answer2.classList.toggle('answer2')
    answer1.classList.toggle('a')
})
btn3.addEventListener("click", function() {
    answer3.classList.toggle('answer3')
})
btn4.addEventListener("click", function() {
    answer4.classList.toggle('answer4')
})
btn5.addEventListener("click", function() {
    answer5.classList.toggle('answer5')
})