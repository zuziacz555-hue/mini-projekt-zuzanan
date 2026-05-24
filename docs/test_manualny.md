# Protokół testu ręcznego strony

## Informacje o teście

| Pole | Wartość |
|------|---------|
| Data testu | 24.05.2026 |
| Tester | Zuzanna Czupryńska |
| Przeglądarka | Google Chrome |
| Plik testowany | index.html |

---

## Lista przypadków testowych

### TC-01: Wyświetlenie strony

| Krok | Czynność | Oczekiwany wynik | Status |
|------|----------|-----------------|--------|
| 1 | Otwórz plik `index.html` w przeglądarce | Strona wyświetla się bez błędów | ✅ PASS |
| 2 | Sprawdź, czy wczytał się plik `style.css` | Strona ma poprawne style (kolor, czcionka, układ) | ✅ PASS |
| 3 | Sprawdź, czy wczytał się plik `script.js` | Konsola nie pokazuje błędów JS | ✅ PASS |

### TC-02: Sekcja Checklist

| Krok | Czynność | Oczekiwany wynik | Status |
|------|----------|-----------------|--------|
| 1 | Zaznacz jedno pole wyboru | Licznik zmienia się na „Zaznaczone zadania: 1" | ✅ PASS |
| 2 | Zaznacz kolejne dwa pola | Licznik zmienia się na „Zaznaczone zadania: 3" | ✅ PASS |
| 3 | Odznacz jedno pole | Licznik zmniejsza się do „Zaznaczone zadania: 2" | ✅ PASS |

### TC-03: Sekcja commitów (dodana na branchu feature/interfejs-zadania)

| Krok | Czynność | Oczekiwany wynik | Status |
|------|----------|-----------------|--------|
| 1 | Sprawdź, czy sekcja z listą commitów jest widoczna | Sekcja wyświetla listę commitów | ✅ PASS |
| 2 | Sprawdź, czy styl dodatkowy jest wczytany | Kolory i odstępy sekcji są poprawne | ✅ PASS |

### TC-04: Responsywność

| Krok | Czynność | Oczekiwany wynik | Status |
|------|----------|-----------------|--------|
| 1 | Zmniejsz okno przeglądarki do szerokości ~375px | Strona nie łamie się, tekst jest czytelny | ✅ PASS |
| 2 | Użyj DevTools (F12 → tryb mobilny) | Layout dostosowuje się do ekranu | ✅ PASS |

---

## Wynik testu

**Wszystkie testy przeszły pomyślnie.** Strona działa poprawnie w przeglądarce Chrome. Nie wykryto błędów JavaScript ani problemów z wyświetlaniem.

---

## Końcowa checklista oddania pracy

- [x] Repozytorium jest **publiczne**
- [x] README jest własny i uzupełniony (tytuł, autor, cel, struktura, branche, komendy, historia, link)
- [x] Na GitHub widoczny jest `main` oraz trzy branche: `feature/opis-readme`, `feature/komendy-git`, `feature/interfejs-zadania`
- [x] W historii jest **co najmniej 10 commitów** z czytelnymi komunikatami
- [x] Zmiany z branchy są scalone do `main`
- [x] Strona `index.html` otwiera się poprawnie w przeglądarce
- [ ] W Classroom przesłano link HTTPS do repozytorium
