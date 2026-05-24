# Zasady pracy z Git

## Zasada 1 – Małe, regularne commity

Każdy commit powinien dotyczyć jednej konkretnej zmiany. Nie robimy jednego dużego commita na koniec pracy, lecz wiele małych po każdej logicznej zmianie.

## Zasada 2 – Czytelne komunikaty commitów

Komunikat commita powinien jasno opisywać CO zostało zmienione i DLACZEGO. Przykłady dobrych komunikatów:
- `Dodanie listy podstawowych komend Git`
- `Uzupełnienie celu projektu w README`
- `Rozbudowa strony startowej o sekcję commitów`

## Zasada 3 – Praca na branchach

Nowe funkcje lub zmiany wykonujemy na osobnym branchu, nie bezpośrednio na `main`. Dzięki temu `main` zawsze pozostaje stabilny.

```
git switch -c feature/nowa-funkcja   # nowy branch
# ... praca ...
git switch main
git merge feature/nowa-funkcja       # scalenie
```

## Zasada 4 – Regularne push

Po zakończeniu pracy na branchu wypychamy zmiany na GitHub:
```
git push origin feature/nazwa-brancha
```

## Zasada 5 – Nie usuwamy branchy przed oceną

Po scaleniu branchy do `main` nie usuwamy ich, żeby nauczyciel mógł sprawdzić historię pracy na poszczególnych gałęziach.

## Zasada 6 – Sprawdzamy status przed commitem

Przed każdym `git add` i `git commit` uruchamiamy `git status`, żeby sprawdzić, jakie pliki zostały zmienione.
