  const cards = document.querySelectorAll('.card');
  let hasFlippedCard= false;
  let lockBoard=false;
  let firstCard, secondCard;
  let movesText = document.getElementById('flips');
  this.moves = 0;
  movesText.innerText = moves;
  this.matchedCards = [];

function flipCard() {
     if (lockBoard) return;
      if (this === firstCard) return;
   this.classList.add('flip');
     if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
  } else {
      hasFlippedCard= false;
      secondCard=this; 
      checkForMatch();
  }
}

function checkForMatch () {
      moves++;
          movesText.innerText = moves;
       if(firstCard.dataset.framework=== secondCard.dataset.framework ) {
        disableCards();
      } else {
              unflipCards();
             }
              if(this.matchedCards.length === 8) {
            victory();
            startGame();
              }
   
      }

function disableCards() {
    updateGrade();
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
    this.matchedCards.push(firstCard);
        this.matchedCards.push(secondCard);
   resetBoard();
}

function unflipCards() {
    lockBoard=true;
    remove_life();
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
     resetBoard();
  }, 1000);
}

function resetBoard() {
      [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 8);
    card.style.order = randomPos;
  });
};


const overlays = document.querySelectorAll('.overlay');


function victory() {
             document.getElementById('victory-text').classList.add('visible');
             Array.from(cards).forEach(card => card.removeEventListener('click', flipCard)); 
             shuffle();
             clearInterval(interval);
               grade_results.innerText = grade;
              
}

function defeat() {
             document.getElementById('game-over-text').classList.add('visible');
             Array.from(cards).forEach(card => card.removeEventListener('click', flipCard)); 
            clearInterval(interval);
            shuffle();
}

 overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
             heartsList.innerHTML = '';
    heartsList.innerHTML += '<li><i class="fa fa-star"></i></li>';
    heartsList.innerHTML += '<li><i class="fa fa-star"></i></li>';
    heartsList.innerHTML += '<li><i class="fa fa-star"></i></li>';
    heartsList.innerHTML += '<li><i class="fa fa-star"></i></li>';
    heartsList.innerHTML += '<li><i class="fa fa-star"></i></li>';
            overlay.classList.remove('visible');
            clearInterval();
             startGame();
    
    
        });
    });

     
// Lifes container //
 let starsList = document.getElementById('stars-list');
function remove_life() {
		      starsList.removeChild(starsList.children[0]);
		
        
     if ( starsList.innerHTML == '' ) {
                 defeat();
				}
    }
    
 // prueba
 let heartsList= document.getElementById('hearts-list')
 let gradeSpan = document.getElementById('grade');
 let grade_results = document.getElementById('grade_results');
 let grade = '';
   gradeSpan.innerText = grade;
    function updateGrade() {
    if(moves > 6) {
      if(grade !== "Average") {
        grade = "Average";
        gradeSpan.innerHTML = grade;
         heartsList.removeChild(heartsList.children[0]);
      }
    }
    if(moves >7 ) {
      if(grade !== "Poor") {
        grade = "Poor";
        gradeSpan.innerHTML = grade;
        heartsList.removeChild(heartsList.children[0]);
      }
    }
  }
     grade_results.innerHTML = grade;
    // Start game//
 
    function startGame() {
       let movesText = document.getElementById('flips');
  this.moves = 0;
  movesText.innerHTML = moves;
     Array.from(cards).forEach(card => {
            card.classList.remove('flip');
            card.classList.remove('matched');
        });  
         this.matchedCards = [];  
          this.matchedCards.length=0;
          shuffle();
          Array.from(cards).forEach(card => card.addEventListener('click', flipCard)); 
    
     starsList.innerHTML = '';
    starsList.innerHTML += '<li><i class="fa fa-star"></i></li>';
    starsList.innerHTML += '<li><i class="fa fa-star"></i></li>';
    starsList.innerHTML += '<li><i class="fa fa-star"></i></li>';
     starsList.innerHTML += '<li><i class="fa fa-star"></i></li>';
    starsList.innerHTML += '<li><i class="fa fa-star"></i></li>';
     second = 0;
    minute = 0; 
    hour = 0;
    var timer = document.querySelector("#time-remaining");
    timer.innerHTML = "0 mins 0 secs";
    clearInterval(interval);
    startTimer();
     grade = '';
      gradeSpan.innerHTML = grade;
    }


    //timer 
  var second = 0, minute = 0; hour = 0;
var timer = document.querySelector("#time-remaining");
var interval;
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+"mins "+second+"secs";
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}


   
      