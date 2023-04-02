const dobInput = document.getElementById('dob');
const calculateButton = document.getElementById('calculate');
const downloadButton = document.getElementById('download');

const lifespan = 80; // Expected lifespan in years
const weeksInYear = 52; // Number of weeks in a year
const totalWeeks = lifespan * weeksInYear; //total weeks in expected lifespan

calculateButton.addEventListener('click', () => {
  const dob = new Date(dobInput.value); 
  const currentDate = new Date();

  // Calculate the difference between the two dates
  const difference = currentDate - dob;

  // Calculate the number of weeks
  const weeksLived = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));

  // Highlight the boxes corresponding to the weeks lived
  const boxes = document.querySelectorAll('.box');
  for (let i = 0; i < boxes.length; i++) {
    if (i < weeksLived) {
      boxes[i].classList.add('highlight');
    } else {
      boxes[i].classList.remove('highlight');
    }
  }
});

const tracker = document.querySelector('#lifespan-tracker');

// Generate the lifespan boxes
for (let i = 0; i < lifespan; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    tracker.appendChild(row);
  
    const yearNum = document.createElement('div');
    yearNum.classList.add('year');
    yearNum.textContent = i + 1;
    row.appendChild(yearNum);
    
    for (let j = 0; j < weeksInYear; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      row.appendChild(box);
    }
  }   