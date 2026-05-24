# GitHub i SSH

Repozytorium można wysyłać na GitHub przez adres SSH w formacie:

```bash
git@github.com:USER/REPO.git
```

Przed użyciem SSH należy mieć dodany klucz publiczny do konta GitHub i sprawdzić połączenie poleceniem:

```bash
ssh -T git@github.com
```
