// Dodatkowy skrypt - branch feature/interfejs-zadania
// Rozbudowuje funkcjonalność strony o sekcję historii commitów

document.addEventListener('DOMContentLoaded', function () {

  // Dane commitów projektu
  const commits = [
    { num: 1, branch: 'main',                      msg: 'Start projektu ze starterem' },
    { num: 2, branch: 'feature/opis-readme',        msg: 'Uzupełnienie celu projektu w README' },
    { num: 3, branch: 'feature/opis-readme',        msg: 'Dodanie informacji o autorze' },
    { num: 4, branch: 'feature/opis-readme',        msg: 'Opis struktury plików i zasad pracy' },
    { num: 5, branch: 'feature/komendy-git',        msg: 'Dodanie listy podstawowych komend Git' },
    { num: 6, branch: 'feature/komendy-git',        msg: 'Opis pracy z remote origin i GitHub' },
    { num: 7, branch: 'feature/komendy-git',        msg: 'Dodanie danych komend w pliku JSON' },
    { num: 8, branch: 'feature/interfejs-zadania',  msg: 'Rozbudowa strony startowej o sekcję commitów' },
    { num: 9, branch: 'feature/interfejs-zadania',  msg: 'Uzupełnienie stylów strony' },
    { num: 10, branch: 'feature/interfejs-zadania', msg: 'Dodanie testu ręcznego i końcowej checklisty' },
    { num: 11, branch: 'main',                      msg: 'Scalenie branchy i porządek końcowy' }
  ];

  // Wstaw sekcję z listą commitów
  const commitSection = document.getElementById('commit-section');
  if (commitSection) {
    const ul = document.createElement('ul');
    ul.className = 'commit-list';

    commits.forEach(function (c) {
      const li = document.createElement('li');
      li.innerHTML =
        '<span class="commit-num">' + c.num + '</span>' +
        '<span class="commit-branch">' + c.branch + '</span>' +
        '<span>' + c.msg + '</span>';
      ul.appendChild(li);
    });

    commitSection.appendChild(ul);

    // Podsumowanie
    const bar = document.createElement('div');
    bar.className = 'summary-bar';
    bar.innerHTML = 'Łączna liczba commitów: <strong>' + commits.length + '</strong>' +
      ' <span class="badge badge-ok">✓ wymóg spełniony</span>';
    commitSection.appendChild(bar);
  }

});
