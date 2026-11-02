# Mein Kochbuch

Kochapp mit Rezeptdatenbank, Zutatensuche und animiertem Kochmodus.

## Ausprobieren am PC

`index.html` doppelt anklicken. Die App öffnet sich im Browser und funktioniert sofort.

## Was die App kann

- **Rezept wählen:** filtern nach Art (Vorspeise, Hauptspeise, Dessert, Luxury, Sterneküche), Typ (Einzelrezept oder Menü), Schwierigkeit und Zeit.
- **Was hab ich zuhause?** Zutaten antippen, die App zeigt passende Rezepte und was noch fehlt.
- **Rezeptseite:** Portionen umrechnen, Zutaten abhaken, Zutaten im Text hervorgehoben.
- **Kochmodus:** ein Schritt nach dem anderen, wischen oder Pfeiltasten, Timer mit Ton und Vibration, Abschluss mit Konfetti.
- **Menüs:** drei Gänge mit gemeinsamer Einkaufsliste.

## Neue Rezepte hinzufügen

In `js/rezepte.js` ein bestehendes Rezept kopieren, eine neue `id` vergeben und die Werte anpassen. Die Erklärung der Felder steht oben in der Datei. Mit dem Feld `inspiration: 'Name'` erscheint der Koch automatisch als Filter und Kachel.

## Dateien

| Datei | Inhalt |
|---|---|
| `index.html` | Grundgerüst der Seite |
| `css/style.css` | Design und Animationen |
| `js/app.js` | Logik: Filter, Suche, Kochmodus |
| `js/rezepte.js` | Rezept- und Menü-Datenbank |
| `js/rezepte-henssler.js` | Rezepte im Stil von Steffen Henssler (in eigenen Worten) |
| `js/rezepte-ramsay.js` | Rezepte und Menüs im Stil von Gordon Ramsay (in eigenen Worten) |
| `js/kurzform.js` | Kurzschreibweise für viele Rezepte auf einmal |
| `js/rezepte-gesund.js` | 50 Rezepte gesunde Küche |
| `js/rezepte-schnell.js` | 50 Rezepte schnelle Küche (max. 20 Minuten) |
| `js/rezepte-hausmannskost.js` | 30 Rezepte traditionelle Hausmannskost |
| `js/rezepte-huhn-faschiertes.js` | 20 Rezepte mit Huhn, 15 mit Faschiertem |
| `js/rezepte-kalt-einfach.js` | 10 kalte Vorspeisen, 10 einfache Nachspeisen |
| `js/rezepte-pasta-reis.js` | 10 Lasagne, 10 Pasta, 10 Reisgerichte |
| `js/rezepte-sport.js` | 20 Rezepte Sport & Gesund |
| `js/rezepte-mehr-vorspeisen.js` | 100 weitere Vorspeisen |
| `js/rezepte-mehr-hauptspeisen.js` | 100 weitere Hauptspeisen |
| `js/rezepte-mehr-desserts.js` | 100 weitere Desserts |
| `js/rezepte-mehr-luxury.js` | 100 weitere Luxury-Rezepte |
| `js/rezepte-mehr-sterne.js` | 100 weitere Sterneküche-Rezepte |
| `js/menues-mehr.js` | 100 weitere Menüs |
| `js/rezepte-asiatisch.js` | 60 asiatische Rezepte: Ramen, Indisch, Thailändisch, Asiatisch, Taiwanesisch, Koreanisch, davon 10 Sterneküche |
| `js/rezepte-mexikanisch.js` | 24 mexikanische Rezepte, davon 4 Sterneküche |
| `js/rezepte-deutsch.js` | 10 deutsche Klassiker |
| `js/rezepte-oesterreich.js` | 10 österreichische Klassiker |
| `js/rezepte-vorrat.js` | 30 Rezepte mit Zutaten, die man meist zuhause hat |
| `js/rezepte-billig.js` | 20 Rezepte mit günstigen Zutaten |
| `js/rezepte-amerikanisch.js` | 30 American Klassiker |
| `js/rezepte-backen.js` | 100 Backrezepte: Sauerteig & Starter, Brot, Toast, Brioche, Gebäck, Kuchen (Schnellsuche „Backen“) |
| `js/menues-welt.js` | 14 asiatische und mexikanische Menüs |
| `manifest.json`, `sw.js`, `icons/` | Installation auf dem Tablet und Offline-Betrieb |

## Suche

Die Suche findet Gerichte über Titel, Küche, Beschreibung und Zutaten. Treffer im Titel stehen oben.
Österreichische, deutsche und englische Wörter gelten als gleich (Erdäpfel = Kartoffel, Faschiertes = Hackfleisch, Obers = Sahne …).
Bei Tippfehlern wird das ähnlichste Wort vorgeschlagen. Die Schnellsuche-Knöpfe sind fertige Suchbegriffe, keine eigenen Kategorien.

## Bibliothek

Mit dem Herz merkst du dir Rezepte und Menüs, mit „Als gekocht markieren“ zählst du, wie oft du etwas gekocht hast.
Wer den Kochmodus bis zum Ende durchgeht, bekommt das Rezept automatisch als gekocht eingetragen.
Beides findest du unter „Bibliothek“. Gespeichert wird im Browser des Geräts (localStorage), also pro Gerät.
