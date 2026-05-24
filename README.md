# Moja karta pracy Git

## Autor

Imię i nazwisko: Zuzanna Kania  
Klasa / grupa: 2B

---

## Cel projektu

Celem projektu jest nauka pracy z systemem kontroli wersji Git oraz platformą GitHub. Podczas realizacji projektu uczę się, jak inicjować lokalne repozytorium, tworzyć commity z czytelnymi komunikatami, pracować na osobnych branchach i scalać zmiany do gałęzi głównej, a następnie publikować kod na GitHub.

---

## Opis projektu

Mini projekt to prosta strona internetowa służąca jako karta pracy z Gita. Zawiera interaktywną checklistę zadań do wykonania podczas nauki Git, listę komend oraz dokumentację pracy na trzech branchach roboczych.

---

## Jak uruchomić projekt

1. Pobierz lub sklonuj repozytorium z GitHub:
   ```
   git clone https://github.com/Zuzanka/git-mini-projekt-zuzanna-kania.git
   ```
2. Wejdź do folderu projektu:
   ```
   cd git-mini-projekt-zuzanna-kania
   ```
3. Otwórz plik `index.html` w przeglądarce (np. dwukrotnie klikając na plik).
4. Sprawdź, czy strona wyświetla się poprawnie razem ze stylami i skryptem.

---

## Struktura plików

```
git-mini-projekt-zuzanna-kania/
├── index.html              # strona startowa mini projektu
├── style.css               # podstawowe style strony
├── script.js               # prosta interakcja i licznik zadań
├── style_dodatkowy.css     # dodatkowe style (branch feature/interfejs-zadania)
├── script_dodatkowy.js     # dodatkowy skrypt (branch feature/interfejs-zadania)
├── data/
│   ├── zadania.json        # przykładowe dane z listą zadań
│   └── komendy.json        # lista komend Git w formacie JSON
├── docs/
│   ├── opis.md             # opis projektu
│   ├── checklista_git.md   # checklista wykonania pracy
│   ├── autor.md            # informacje o autorze
│   ├── zasady_pracy.md     # zasady pracy z Git
│   ├── komendy_git.md      # opis użytych komend Git
│   ├── github_ssh.md       # opis pracy z GitHub i SSH
│   └── test_manualny.md    # protokół testu ręcznego strony
├── pliki-do-branchy/       # materiały pomocnicze do pracy na branchach
└── .gitignore              # ignorowanie zbędnych plików
```

---

## Wymagane branche

| Branch | Opis zmian |
|--------|-----------|
| `main` | Gałąź główna – bazowe pliki startowe, scalenie wszystkich branchy |
| `feature/opis-readme` | Uzupełnienie README, dodanie docs/autor.md i docs/zasady_pracy.md |
| `feature/komendy-git` | Dodanie listy komend Git, opisu SSH i danych w JSON |
| `feature/interfejs-zadania` | Rozbudowa strony o sekcję commitów, style dodatkowe i test ręczny |

---

## Najważniejsze komendy Git użyte podczas pracy

```bash
git init                          # inicjalizacja repozytorium
git status                        # sprawdzenie stanu plików
git add .                         # dodanie wszystkich zmian do staging
git commit -m "komunikat"         # zapis commita z opisem
git branch                        # lista branchy
git switch -c feature/nazwa       # utworzenie i przejście na nowy branch
git switch main                   # powrót do gałęzi main
git merge feature/nazwa           # scalenie brancha do main
git remote add origin URL         # dodanie zdalnego repozytorium
git push -u origin main           # wypchnięcie main na GitHub
git push origin --all             # wypchnięcie wszystkich branchy
git log --oneline --graph --all   # historia commitów w formie grafu
```

---

## Historia commitów

W repozytorium znajduje się co najmniej 10 commitów, które pokazują kolejne etapy pracy:

1. `main` – Start projektu ze starterem
2. `feature/opis-readme` – Uzupełnienie celu projektu w README
3. `feature/opis-readme` – Dodanie informacji o autorze
4. `feature/opis-readme` – Opis struktury plików i zasad pracy
5. `feature/komendy-git` – Dodanie listy podstawowych komend Git
6. `feature/komendy-git` – Opis pracy z remote origin i GitHub
7. `feature/komendy-git` – Dodanie danych komend w pliku JSON
8. `feature/interfejs-zadania` – Rozbudowa strony startowej o sekcję commitów
9. `feature/interfejs-zadania` – Uzupełnienie stylów strony
10. `feature/interfejs-zadania` – Dodanie testu ręcznego i końcowej checklisty
11. `main` – Scalenie branchy i porządek końcowy

---

## Dodatkowy opis projektu

### Czego dotyczy projekt?

Projekt dotyczy ćwiczenia historii zmian, pracy na branchach i publikacji repozytorium na GitHub. Poprzez samodzielne wykonanie wszystkich etapów (init → commit → branch → merge → push) uczę się realnego przepływu pracy z Git.

### Moje najważniejsze komendy

- `git init` – inicjalizuje repozytorium lokalnie
- `git add .` – dodaje wszystkie zmiany do staging area
- `git commit -m "..."` – zapisuje zmianę w historii
- `git switch -c feature/nazwa` – tworzy nowy branch i przełącza się na niego
- `git merge feature/nazwa` – scala branch do main
- `git push origin --all` – wypycha wszystkie branche na GitHub
- `git log --oneline --graph --all` – pokazuje graficzną historię commitów

---

## Link do repozytorium

https://github.com/zuziacz555-hue/mini-projekt-zuzanan
