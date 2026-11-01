/*
 * Kurzschreibweise für viele Rezepte auf einmal
 * ---------------------------------------------
 * Jedes Rezept ist eine Liste in dieser Reihenfolge:
 *   [id, titel, kategorie, schwierigkeit, zeit, portionen, emoji, farbe1, farbe2,
 *    beschreibung, zutaten, schritte, ruhezeit (optional)]
 *
 * zutaten:  'Name|Menge|Einheit; Name|Menge|Einheit; Salz'
 *           Menge leer lassen für "nach Geschmack", z. B. 'Salz||1 Prise'
 * schritte: '[5] Text ## Tipp'  ->  [5] = Timer mit 5 Minuten, ## = Tipp (beides optional)
 */
window.kurzRezepte = function (thema, liste) {
  liste.forEach(e => {
    const [id, titel, kategorie, schwierigkeit, zeit, portionen, emoji, f1, f2, beschreibung, zutaten, schritte, ruhezeit] = e;
    window.REZEPTE.push({
      id, titel, kategorie, schwierigkeit, zeit, portionen, emoji, thema,
      farbe: [f1, f2],
      beschreibung,
      ruhezeit: ruhezeit || 0,
      zutaten: zutaten.split(';').map(z => z.trim()).filter(Boolean).map(z => {
        const [name, menge, einheit] = z.split('|').map(t => (t || '').trim());
        return { name, menge: menge ? Number(menge) : null, einheit: einheit || '' };
      }),
      schritte: schritte.map(s => {
        const m = s.match(/^\[([\d.]+)\]\s*/);
        const [text, tipp] = (m ? s.slice(m[0].length) : s).split('##').map(t => t.trim());
        const schritt = { text };
        if (m) schritt.dauer = Number(m[1]);
        if (tipp) schritt.tipp = tipp;
        return schritt;
      })
    });
  });
};
