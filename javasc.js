function selectEmoji(selectedEmoji) {
  document.querySelector('#feedbackText').innerText = 'Your feedback';
  
  if (selectedEmoji === '☹️') {
    document.querySelector('#feedbackText').innerText += "'s Unhappy";
    document.querySelector('.feedback').classList.remove('blue', 'green');
    document.querySelector('.feedback').classList.add('red');
  } else if (selectedEmoji === '😐') {
    document.querySelector('#feedbackText').innerText += "'s Neutral";
    document.querySelector('.feedback').classList.remove('red', 'green');
    document.querySelector('.feedback').classList.add('blue');
  } else {
    document.querySelector('#feedbackText').innerText += "'s Satisfied";
    document.querySelector('.feedback').classList.remove('red', 'blue');
    document.querySelector('.feedback').classList.add('green');
  }
}