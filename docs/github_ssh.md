# Praca z GitHub i SSH

## Czym jest GitHub?

GitHub to platforma hostingowa dla repozytoriów Git. Pozwala przechowywać kod w chmurze, przeglądać historię zmian, pracować zespołowo i udostępniać projekty publicznie lub prywatnie.

## Połączenie z GitHub – dwie metody

### Metoda 1: HTTPS (prostsza, użyta w tym projekcie)

Przy każdym push/pull podajemy login i token dostępowy (PAT – Personal Access Token).

```bash
git remote add origin https://github.com/USER/REPOZYTORIUM.git
git push -u origin main
```

### Metoda 2: SSH (zalecana przez nauczyciela)

SSH pozwala łączyć się z GitHub bez hasła, za pomocą pary kluczy (prywatny/publiczny).

#### Kroki konfiguracji SSH:

1. Wygeneruj parę kluczy SSH:
   ```bash
   ssh-keygen -t ed25519 -C "twoj@email.com"
   ```
2. Wyświetl klucz publiczny:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
3. Dodaj klucz publiczny do GitHub:
   - Wejdź na GitHub → Settings → SSH and GPG keys → New SSH key
   - Wklej zawartość klucza publicznego
4. Przetestuj połączenie:
   ```bash
   ssh -T git@github.com
   ```
5. Dodaj zdalne repozytorium przez SSH:
   ```bash
   git remote add origin git@github.com:USER/REPOZYTORIUM.git
   ```

## Tworzenie repozytorium na GitHub

1. Zaloguj się na github.com
2. Kliknij **New repository** (przycisk `+` → „New repository")
3. Podaj nazwę repozytorium (np. `git-mini-projekt-zuzanna-kania`)
4. Ustaw widoczność na **Public**
5. **NIE zaznaczaj** „Initialize repository" (już mamy lokalne repo)
6. Kliknij **Create repository**
7. Skopiuj adres HTTPS lub SSH i użyj go w `git remote add origin`

## Oddanie linku

Do Classroom należy przesłać link HTTPS (nie SSH!):
```
https://github.com/USER/git-mini-projekt-zuzanna-kania
```
