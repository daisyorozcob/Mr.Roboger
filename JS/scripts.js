// Business Logic
function applySubstitutions(number) {
    const numberStr = String(number);
  
    if (numberStr.includes('3')) {
      return "Won't you be my neighbor?";
    } else if (numberStr.includes('2')) {
      return 'Boop!';
    } else if (numberStr.includes('1')) {
      return 'Beep!';
    } else {
      return number;
    }
  }
  
  function generateNumberList(inputNumber) {
    const numberList = [];
  
    for (let i = 0; i <= inputNumber; i++) {
      numberList.push(applySubstitutions(i));
    }
  
    return numberList;
  }
  
  module.exports = { applySubstitutions, generateNumberList };

  // Function to update the DOM with the generated results
function displayResults(resultList) {
    resultContainer.innerHTML = '';
  
    for (const item of resultList) {
      const listItem = document.createElement('p');
      listItem.textContent = item;
      resultContainer.appendChild(listItem);
    }
  }
  
  // Event listener for the generate button
  generateButton.addEventListener('click', () => {
    const inputNumber = parseInt(numberInput.value);
    if (!isNaN(inputNumber)) {
      const resultList = generateNumberList(inputNumber);
      displayResults(resultList);
    }
  });