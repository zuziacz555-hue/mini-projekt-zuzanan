const tasks = document.querySelectorAll('.task');
const progress = document.querySelector('#progress');

function updateProgress() {
  const checked = Array.from(tasks).filter((task) => task.checked).length;
  progress.textContent = `Zaznaczone zadania: ${checked}`;
}

tasks.forEach((task) => task.addEventListener('change', updateProgress));
updateProgress();
