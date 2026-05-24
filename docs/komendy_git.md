# Komendy Git użyte podczas projektu

## Inicjalizacja i konfiguracja

| Komenda | Opis |
|---------|------|
| `git init` | Inicjalizuje nowe lokalne repozytorium Git w bieżącym folderze |
| `git config --global user.name "Imię"` | Ustawia globalną nazwę użytkownika |
| `git config --global user.email "email"` | Ustawia globalny adres e-mail |
| `git branch -M main` | Ustawia nazwę gałęzi głównej na `main` |

## Sprawdzanie stanu

| Komenda | Opis |
|---------|------|
| `git status` | Pokazuje stan plików (zmienione, nieśledzone, staged) |
| `git log` | Wyświetla historię commitów |
| `git log --oneline --decorate --graph --all` | Historia commitów w postaci zwięzłego grafu |
| `git branch` | Lista wszystkich lokalnych branchy |
| `git branch -a` | Lista wszystkich branchy (lokalnych i zdalnych) |

## Staging i commity

| Komenda | Opis |
|---------|------|
| `git add .` | Dodaje wszystkie zmienione pliki do staging area |
| `git add plik.txt` | Dodaje konkretny plik do staging area |
| `git commit -m "komunikat"` | Tworzy commit z podanym komunikatem |
| `git diff` | Pokazuje różnice między roboczym katalogiem a staging |

## Praca z branchami

| Komenda | Opis |
|---------|------|
| `git switch -c nazwa` | Tworzy nowy branch i przechodzi na niego |
| `git switch main` | Przechodzi na branch main |
| `git switch nazwa` | Przechodzi na istniejący branch |
| `git merge feature/nazwa` | Scala wskazany branch do aktualnego |

## Praca ze zdalnym repozytorium

| Komenda | Opis |
|---------|------|
| `git remote add origin URL` | Dodaje zdalne repozytorium jako origin |
| `git push -u origin main` | Wypycha main na GitHub i ustawia śledzenie |
| `git push origin BRANCH` | Wypycha wskazany branch na GitHub |
| `git push origin --all` | Wypycha wszystkie lokalne branche na GitHub |
| `git pull origin main` | Pobiera i scala zmiany ze zdalnego main |
| `git clone URL` | Klonuje zdalne repozytorium lokalnie |

## Sekwencja pracy na branchu

```bash
git switch main                        # 1. wróć na main
git switch -c feature/nazwa            # 2. utwórz nowy branch
# ... edytuj pliki ...
git status                             # 3. sprawdź zmiany
git add .                              # 4. dodaj zmiany
git commit -m "Opis zmiany"            # 5. zapisz commit
# ... powtórz kroki 3-5 dla kolejnych zmian ...
git push -u origin feature/nazwa       # 6. wypchnij na GitHub
## Typowe błędy i ich rozwiązania

| Błąd | Przyczyna | Rozwiązanie |
|------|-----------|------------|
| `nothing to commit` | Brak zmian w plikach | Edytuj plik, potem `git add` |
| `not a git repository` | Brak katalogu `.git` | Uruchom `git init` |
| `rejected (non-fast-forward)` | Zdalne repo ma nowe commity | Najpierw `git pull`, potem `git push` |
| `merge conflict` | Dwa branche zmieniły ten sam fragment | Ręczna edycja pliku, `git add`, `git commit` |
