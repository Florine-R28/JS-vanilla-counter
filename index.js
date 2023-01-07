let counter = 0;
const lessBtn = document.getElementById('less-button');
const resetBtn = document.getElementById('reset-button');
const addBtn = document.getElementById('add-button');
const totalScore = document.getElementById('total');

addBtn.addEventListener('click', function() {
  counter++;  
  totalScore.innerText = counter;
})

lessBtn.addEventListener('click', function() {
  counter--;
  if (counter < 0){
    counter = 0;
  }
  totalScore.innerText = counter;
})

resetBtn.addEventListener('click', function(){
  counter = 0; 
  totalScore.innerText = counter;
})

