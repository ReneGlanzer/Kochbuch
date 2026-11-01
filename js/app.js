(function () {
  'use strict';

  /* ---------- Daten & Konstanten ---------- */

  const REZEPTE = window.REZEPTE || [];
  const MENUES = window.MENUES || [];
  const rezeptById = Object.fromEntries(REZEPTE.map(r => [r.id, r]));
  const menueById = Object.fromEntries(MENUES.map(m => [m.id, m]));

  const KATEGORIEN = [
    { id: 'vorspeise', name: 'Vorspeisen', emoji: '🥗' },
    { id: 'hauptspeise', name: 'Hauptspeisen', emoji: '🍽️' },
    { id: 'dessert', name: 'Desserts', emoji: '🍰' },
    { id: 'luxury', name: 'Luxury', emoji: '💎' },
    { id: 'sterne', name: 'Sterneküche', emoji: '⭐' }
  ];
  const STUFEN = ['', 'Einfach', 'Mittel', 'Anspruchsvoll', 'Ausgefallen'];
  const ZEITEN = [{ wert: 0, name: 'Egal' }, { wert: 30, name: 'bis 30 Min' }, { wert: 60, name: 'bis 1 h' }, { wert: 120, name: 'bis 2 h' }];
  // Grundzutaten, die bei der Zutatensuche vorausgesetzt werden
  const BASIS = new Set(['Salz', 'Pfeffer', 'Wasser', 'Olivenöl', 'Pflanzenöl', 'Zucker']);

  const gesamtZeit = r => r.zeit + (r.ruhezeit || 0);
  const katName = id => (KATEGORIEN.find(k => k.id === id) || {}).name || (id === 'alltag' ? 'Menü' : '');

  MENUES.forEach(m => {
    m.rezepte = m.gaenge.map(id => rezeptById[id]).filter(Boolean);
    m.schwierigkeit = Math.max(...m.rezepte.map(r => r.schwierigkeit));
    m.zeit = m.rezepte.reduce((s, r) => s + gesamtZeit(r), 0);
    m.portionen = 4;
  });

  // Schlagwort (Feld "thema"): keine eigene Kategorie, wird nur angezeigt und durchsucht
  const THEMA_NAMEN = {
    gesund: '🥦 Gesunde Küche',
    schnell: '⚡ Schnelle Küche',
    hausmannskost: '🏡 Traditionelle Hausmannskost',
    huhn: '🐔 Mit Huhn',
    faschiertes: '🍖 Mit Faschiertem',
    kalt: '❄️ Kalte Vorspeise',
    einfach: '👌 Einfache Nachspeise',
    lasagne: '🧇 Lasagne',
    pasta: '🍝 Pasta',
    reis: '🍚 Reisgericht',
    sport: '💪 Sport & Gesund',
    asiatisch: '🥢 Asiatische Küche',
    mexikanisch: '🌮 Mexikanische Küche',
    deutsch: '🥨 Deutscher Klassiker',
    oesterreich: '🏔️ Österreichischer Klassiker',
    vorrat: '🏠 Aus dem Vorrat – geht immer',
    billig: '💶 Günstig kochen',
    amerikanisch: '🍔 American Klassiker'
  };

  // Suchtext pro Rezept/Menü: Titel, Beschreibung, Schlagwort, Koch und Zutaten
  const normal = t => String(t).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  // Jedes Rezept bekommt getrennte Suchfelder, damit Treffer im Titel weiter oben landen
  REZEPTE.forEach(r => {
    r.sTitel = normal(r.titel);
    r.sKopf = normal([r.thema, THEMA_NAMEN[r.thema], r.inspiration, katName(r.kategorie)].filter(Boolean).join(' '));
    r.sText = normal(r.beschreibung);
    r.sZutaten = normal(r.zutaten.map(z => z.name).join(' '));
    r.suchtext = [r.sTitel, r.sKopf, r.sText, r.sZutaten].join(' ');
  });
  MENUES.forEach(m => {
    m.sTitel = normal(m.titel);
    m.sKopf = normal(['menü', katName(m.kategorie), m.inspiration].filter(Boolean).join(' ') + ' ' + m.rezepte.map(r => r.sTitel).join(' '));
    m.sText = normal(m.beschreibung);
    m.sZutaten = m.rezepte.map(r => r.sKopf + ' ' + r.sText + ' ' + r.sZutaten).join(' ');
    m.suchtext = [m.sTitel, m.sKopf, m.sText, m.sZutaten].join(' ');
  });

  /* ---------- Suche: Synonyme, Wortstämme, Tippfehler, Rangfolge ---------- */

  // Wörter in einer Gruppe gelten bei der Suche als gleichwertig (österreichisch, deutsch, englisch)
  const SYNONYME = [
    ['kartoffel', 'erdapfel', 'potato'], ['hackfleisch', 'faschiert', 'hack', 'mince'],
    ['sahne', 'obers', 'schlagobers'], ['tomate', 'paradeis'], ['quark', 'topfen'],
    ['huhn', 'hahnchen', 'hendl', 'chicken', 'geflugel', 'poulet', 'pollo'], ['pute', 'truthahn', 'turkey'],
    ['pilz', 'schwammerl', 'champignon', 'mushroom'], ['blumenkohl', 'karfiol'], ['aprikose', 'marille'],
    ['pflaume', 'zwetschk', 'zwetschg'], ['meerrettich', 'kren'], ['aubergine', 'melanzani'],
    ['grune bohne', 'fisole'], ['hefe', 'germ'], ['brotchen', 'semmel', 'weckerl'], ['puderzucker', 'staubzucker'],
    ['rosenkohl', 'kohlsprossen'], ['johannisbeere', 'ribisel'], ['pfannkuchen', 'palatschinke', 'pancake', 'crepe'],
    ['frikadelle', 'laibchen', 'fleischlaberl', 'bulette', 'patty'], ['wurst', 'wurstel', 'sausage', 'hot dog'],
    ['rind', 'beef', 'steak'], ['schwein', 'pork', 'schweins'], ['garnele', 'shrimp', 'scampi', 'gamba', 'prawn'],
    ['dessert', 'nachspeise', 'nachtisch', 'suss', 'mehlspeise'], ['nudel', 'pasta', 'spaghetti', 'noodle'],
    ['scharf', 'chili', 'spicy'], ['mais', 'corn', 'elote'], ['kurbis', 'pumpkin'], ['lauch', 'porree'],
    ['karotte', 'mohre', 'mohrrube', 'rubli'], ['rote rube', 'rote bete', 'rande'], ['sellerie', 'zeller'],
    ['amerika', 'amerikanisch', 'usa', 'american'], ['mexiko', 'mexikanisch', 'mexican', 'tex-mex'],
    ['asien', 'asiatisch', 'asia'], ['china', 'chinesisch'], ['japan', 'japanisch'], ['korea', 'koreanisch'],
    ['thai', 'thailand', 'thailandisch'], ['indien', 'indisch', 'india'], ['taiwan', 'taiwanesisch'],
    ['vietnam', 'vietnamesisch'], ['deutsch', 'deutschland', 'german'], ['osterreich', 'wiener', 'austria'],
    ['italien', 'italienisch'], ['billig', 'gunstig', 'preiswert', 'sparen'], ['vorrat', 'vorratsschrank'],
    ['schnell', 'quick', 'blitz'], ['gesund', 'leicht', 'healthy'], ['sterne', 'gourmet', 'fine dining'],
    ['luxus', 'luxury', 'edel'], ['fruhstuck', 'breakfast', 'brunch'], ['kuchen', 'torte', 'cake'], ['keks', 'cookie', 'platzchen']
  ];
  const SYN_INDEX = new Map();
  SYNONYME.forEach(g => g.forEach(w => SYN_INDEX.set(w, g)));

  // Einfache Wortstämme: "Nudeln" findet "Nudel", "Burgers" findet "Burger"
  function stamm(w) {
    if (w.length > 6 && w.endsWith('en')) return w.slice(0, -2);
    if (w.length > 5 && /[nse]$/.test(w)) return w.slice(0, -1);
    return w;
  }

  // Alle Schreibweisen, unter denen ein Suchwort gefunden werden darf
  function varianten(w) {
    const v = new Set([w, stamm(w)]);
    SYN_INDEX.forEach((g, key) => {
      if (key === w || key === stamm(w) || (key.length >= 4 && w.startsWith(key)) || (w.length >= 4 && key.startsWith(w))) {
        g.forEach(x => v.add(x));
      }
    });
    return [...v];
  }

  let WORTSCHATZ = null;
  function wortschatz() {
    if (!WORTSCHATZ) {
      WORTSCHATZ = new Map();
      REZEPTE.forEach(r => (r.sTitel + ' ' + r.sKopf + ' ' + r.sZutaten).split(/[^a-z0-9ß]+/).forEach(w => {
        if (w.length >= 4) WORTSCHATZ.set(w, (WORTSCHATZ.get(w) || 0) + 1);
      }));
    }
    return WORTSCHATZ;
  }

  function abstand(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return max + 1;
    let vor = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
      const akt = [i];
      let min = i;
      for (let j = 1; j <= b.length; j++) {
        akt[j] = Math.min(vor[j] + 1, akt[j - 1] + 1, vor[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
        if (akt[j] < min) min = akt[j];
      }
      if (min > max) return max + 1;
      vor = akt;
    }
    return vor[b.length];
  }

  // Bei Tippfehlern das ähnlichste bekannte Wort vorschlagen ("Lasange" -> "lasagne")
  function korrektur(w) {
    if (w.length < 4) return null;
    const max = w.length <= 5 ? 1 : 2;
    let best = null, bestD = max + 1, bestN = 0;
    wortschatz().forEach((n, kandidat) => {
      const d = abstand(w, kandidat.slice(0, Math.max(w.length, Math.min(kandidat.length, w.length + 2))), max);
      if (d < bestD || (d === bestD && n > bestN)) { best = kandidat; bestD = d; bestN = n; }
    });
    return bestD <= max ? best : null;
  }

  // Wandelt die Eingabe in eine Liste von Suchwörtern mit allen Varianten um
  function suchAnfrage(text) {
    const woerter = normal(text).split(/[\s,]+/).filter(w => w.length > 1 || /\d/.test(w));
    const korrigiert = [];
    const teile = woerter.map(w => {
      let v = varianten(w);
      if (!REZEPTE.some(r => v.some(x => r.suchtext.includes(x)))) {
        const k = korrektur(w);
        if (k) { korrigiert.push(k); v = varianten(k); }
      }
      return v;
    });
    return { teile, korrigiert };
  }

  // Punkte: Titel zählt am meisten, dann Küche/Schlagwort, Beschreibung, Zutaten
  function suchPunkte(e, anfrage) {
    let summe = 0;
    for (const v of anfrage.teile) {
      let p = 0;
      for (const x of v) {
        if (e.sTitel.startsWith(x)) p = Math.max(p, 14);
        else if (e.sTitel.includes(' ' + x) || e.sTitel.includes('-' + x)) p = Math.max(p, 12);
        else if (e.sTitel.includes(x)) p = Math.max(p, 6);
        else if (e.sKopf.includes(x)) p = Math.max(p, 7);
        else if (e.sText.includes(x)) p = Math.max(p, 4);
        else if (e.sZutaten.includes(x)) p = Math.max(p, 2);
      }
      if (!p) return 0;
      summe += p;
    }
    return summe;
  }
  const PRO_SEITE = 40;

  const ALLE_ZUTATEN = [...new Set(REZEPTE.flatMap(r => r.zutaten.map(z => z.name)))]
    .filter(n => !BASIS.has(n))
    .sort((a, b) => a.localeCompare(b, 'de'));

  /* ---------- Zustand ---------- */

  const state = {
    kat: new Set(),
    suche: '',
    anzeigen: PRO_SEITE,
    stufe: new Set(),
    typ: 'alle',
    zeit: 0,
    zutaten: new Set(laden('zutaten', [])),
    nurKomplett: false,
    portionen: {}
  };
  let seite = '';
  let koch = null;

  // Bibliothek: gemerkte Rezepte/Menüs (id -> Zeitpunkt) und Gekocht (id -> { n: Anzahl, zuletzt: Zeitpunkt })
  const bib = {
    gemerkt: laden('gemerkt', {}),
    gekocht: laden('gekocht', {}),
    tab: 'gemerkt',
    sortierung: 'zuletzt'
  };

  function laden(key, fallback) {
    try { return JSON.parse(localStorage.getItem('kochbuch-' + key)) || fallback; } catch (e) { return fallback; }
  }
  function speichern(key, wert) {
    try { localStorage.setItem('kochbuch-' + key, JSON.stringify(wert)); } catch (e) { /* egal */ }
  }

  /* ---------- Hilfsfunktionen ---------- */

  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => [...(el || document).querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function zeitText(min) {
    if (min < 60) return min + ' Min';
    const h = Math.floor(min / 60), m = min % 60;
    return m ? `${h} h ${m} Min` : `${h} h`;
  }

  const BRUCH = { 0.25: '¼', 0.5: '½', 0.75: '¾' };
  function zahl(n) {
    if (n >= 100) return String(Math.round(n / 5) * 5);
    if (n >= 10) return String(Math.round(n));
    const q = Math.max(0.25, Math.round(n * 4) / 4);
    const ganz = Math.floor(q), rest = q - ganz;
    return rest ? (ganz || '') + BRUCH[rest] : String(ganz);
  }

  function mengeText(z, faktor) {
    if (z.menge == null) return z.einheit || 'etwas';
    let menge = z.menge * faktor, einheit = z.einheit;
    if ((einheit === 'g' || einheit === 'ml') && menge >= 1000) {
      menge = Math.round(menge / 100) / 10;
      einheit = einheit === 'g' ? 'kg' : 'l';
      return `${String(menge).replace('.', ',')} ${einheit}`;
    }
    const n = zahl(menge);
    return einheit ? `${n} ${einheit}` : n;
  }

  function uhr(sek) {
    sek = Math.ceil(sek);
    const h = Math.floor(sek / 3600), m = Math.floor((sek % 3600) / 60), s = sek % 60;
    const mm = String(m).padStart(h ? 2 : 1, '0'), ss = String(s).padStart(2, '0');
    return h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
  }

  function stufeHtml(n) {
    let dots = '';
    for (let i = 1; i <= 4; i++) dots += `<i class="${i <= n ? 'voll' : ''}"></i>`;
    return `<span class="stufe stufe-${n}"><span class="punkte">${dots}</span>${STUFEN[n]}</span>`;
  }

  const farben = e => `--c1:${e.farbe[0]};--c2:${e.farbe[1]}`;

  const HERZ = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.2 3 4.5 6.7 4.5c2.1 0 3.6 1.1 4.6 2.6.2.3.6.3.8 0 1-1.5 2.5-2.6 4.6-2.6 3.7 0 5.8 3.7 4.3 7.2C19.5 16.4 12 21 12 21z"/></svg>';
  const istGemerkt = id => !!bib.gemerkt[id];
  const gekochtInfo = id => bib.gekocht[id];

  function datumText(ts) {
    const d = new Date(ts), heute = new Date();
    const tage = Math.round((new Date(heute.toDateString()) - new Date(d.toDateString())) / 864e5);
    if (tage === 0) return 'heute';
    if (tage === 1) return 'gestern';
    if (tage < 7) return `vor ${tage} Tagen`;
    return d.toLocaleDateString('de-AT', { day: 'numeric', month: 'short', year: d.getFullYear() === heute.getFullYear() ? undefined : 'numeric' });
  }

  function herzKnopf(id, klasse) {
    const an = istGemerkt(id);
    return `<button class="herz ${klasse || ''} ${an ? 'an' : ''}" data-action="merken" data-id="${id}" aria-pressed="${an}" aria-label="${an ? 'Nicht mehr merken' : 'Merken'}">${HERZ}</button>`;
  }

  function gekochtBadge(id) {
    const g = gekochtInfo(id);
    return g ? `<span class="gekocht-badge">✓ ${g.n > 1 ? g.n + '× ' : ''}gekocht</span>` : '';
  }

  function merkenUmschalten(id, btn) {
    const an = !istGemerkt(id);
    if (an) bib.gemerkt[id] = Date.now(); else delete bib.gemerkt[id];
    speichern('gemerkt', bib.gemerkt);
    $$(`[data-action="merken"][data-id="${id}"]`).forEach(b => {
      b.classList.toggle('an', an);
      b.setAttribute('aria-pressed', an);
      b.setAttribute('aria-label', an ? 'Nicht mehr merken' : 'Merken');
      const t = $('.knopf-text', b);
      if (t) t.textContent = an ? 'Gemerkt' : 'Merken';
      if (an) { b.classList.remove('platzt'); void b.offsetWidth; b.classList.add('platzt'); }
    });
    toast(an ? 'In „Gemerkt“ gespeichert' : 'Aus „Gemerkt“ entfernt', an ? '❤️' : '🤍');
    zaehlerAktualisieren();
    if (seite === 'bibliothek' && bib.tab === 'gemerkt' && !an) {
      const karte = btn && btn.closest('.karte');
      if (karte) { karte.classList.add('karte-raus'); setTimeout(() => bibliothekListe(), 320); }
    }
  }

  function gekochtMarkieren(id, still) {
    const g = bib.gekocht[id] || { n: 0, zuletzt: 0 };
    g.n++; g.zuletzt = Date.now();
    bib.gekocht[id] = g;
    speichern('gekocht', bib.gekocht);
    if (!still) toast(g.n === 1 ? 'Als gekocht gespeichert' : `Schon ${g.n}× gekocht – super!`, '✅');
    zaehlerAktualisieren();
    return g;
  }

  function gekochtEntfernen(id) {
    delete bib.gekocht[id];
    speichern('gekocht', bib.gekocht);
    toast('Aus „Gekocht“ entfernt', '↩️');
    zaehlerAktualisieren();
  }

  function zaehlerAktualisieren() {
    const n = Object.keys(bib.gemerkt).length;
    $$('[data-zaehler="gemerkt"]').forEach(el => { el.textContent = n; el.hidden = !n && el.classList.contains('nav-zahl'); });
    $$('[data-zaehler="gekocht"]').forEach(el => { el.textContent = Object.keys(bib.gekocht).length; });
  }

  let toastTimer;
  function toast(text, emoji) {
    let el = $('#toast');
    if (!el) { el = document.createElement('div'); el.id = 'toast'; el.className = 'toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
    el.innerHTML = `<span class="toast-emoji">${emoji || '✨'}</span>${esc(text)}`;
    el.classList.remove('zeigen'); void el.offsetWidth; el.classList.add('zeigen');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('zeigen'), 2200);
  }

  // Zutaten im Anleitungstext hervorheben
  function markiereZutaten(text, r) {
    const namen = r.zutaten.map(z => z.name).sort((a, b) => b.length - a.length)
      .map(n => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    // Nur ganze Wörter (auch Mehrzahl wie "Zwiebeln"), damit z. B. "Salzwasser" nicht markiert wird
    const re = new RegExp('(?<![\\wäöüÄÖÜß])(?:' + namen.join('|') + ')(?:n|e|en)?(?![\\wäöüÄÖÜß])', 'g');
    return esc(text).replace(re, '<mark>$&</mark>');
  }

  /* ---------- Rendern ---------- */

  const app = document.getElementById('app');

  // Moderne Seitenwechsel: View Transitions (Chrome), sonst sanftes Einblenden
  const VT = !!document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches;
  let ersteSeite = true;

  function zeige(html, name) {
    {
      seite = name;
      document.body.classList.toggle('koch-aktiv', name === 'kochen');
      const navName = name === 'rezept' || name === 'menue' ? '' : name;
      $$('[data-nav]').forEach(a => a.classList.toggle('aktiv', a.dataset.nav === navName));
      app.classList.remove('seite-rein');
      app.innerHTML = html;
      if (!inUebergang) { void app.offsetWidth; app.classList.add('seite-rein'); }
      window.scrollTo(0, 0);
      navPille();
      zaehlerAktualisieren();
      karteEinblenden();
    }
  }

  // Seitenwechsel über den Router laufen in einer View Transition (alte und neue Seite werden überblendet)
  let inUebergang = false;
  function mitUebergang(fn) {
    if (!VT || ersteSeite) { ersteSeite = false; fn(); rueckwaerts = false; return; }
    document.documentElement.dataset.richtung = rueckwaerts ? 'zurueck' : 'vor';
    const t = document.startViewTransition(() => { inUebergang = true; try { fn(); } finally { inUebergang = false; } });
    t.finished.finally(() => { $$('.vt-held').forEach(el => el.classList.remove('vt-held')); rueckwaerts = false; });
  }

  // Leuchtende Pille unter dem aktiven Menüpunkt gleitet mit
  function navPille() {
    const nav = $('.nav'), pille = $('.nav-pille'), an = $('.nav a.aktiv');
    if (!nav || !pille) return;
    if (!an) { pille.style.opacity = 0; return; }
    pille.style.opacity = 1;
    pille.style.width = an.offsetWidth + 'px';
    pille.style.transform = `translateX(${an.offsetLeft}px)`;
  }

  // Karten erscheinen erst, wenn sie in den sichtbaren Bereich scrollen
  let beobachter = null;
  function karteEinblenden() {
    const karten = $$('.karte:not(.sichtbar), .reveal:not(.sichtbar)');
    if (!('IntersectionObserver' in window)) { karten.forEach(k => k.classList.add('sichtbar')); return; }
    if (!beobachter) {
      beobachter = new IntersectionObserver(eintraege => {
        let n = 0;
        eintraege.forEach(en => {
          if (!en.isIntersecting) return;
          en.target.style.setProperty('--v', n++);
          en.target.classList.add('sichtbar');
          beobachter.unobserve(en.target);
        });
      }, { rootMargin: '0px 0px -40px 0px', threshold: 0.05 });
    }
    karten.forEach(k => beobachter.observe(k));
  }

  // Zahlen zählen kurz hoch (z. B. "981 Rezepte")
  function zahlenHochzaehlen(box) {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    $$('[data-zahl]', box).forEach(el => {
      const ziel = Number(el.dataset.zahl), start = performance.now(), dauer = 900;
      if (!ziel) return;
      const schritt = jetzt => {
        const t = Math.min(1, (jetzt - start) / dauer), e = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(ziel * e);
        if (t < 1) requestAnimationFrame(schritt);
      };
      requestAnimationFrame(schritt);
    });
  }

  function kopf(titel, text) {
    return `<div class="seitenkopf">
      <button class="rund" data-action="zurueck" aria-label="Zurück">←</button>
      <div><h1>${titel}</h1>${text ? `<p>${text}</p>` : ''}</div>
    </div>`;
  }

  function karteRezept(r, i, extra) {
    return `<a class="karte" href="#/rezept/${r.id}" style="--i:${i};${farben(r)}">
      <div class="karte-bild"><span class="karte-emoji">${r.emoji}</span>${herzKnopf(r.id)}${gekochtBadge(r.id)}</div>
      <div class="karte-text">
        <div class="kat-label">${katName(r.kategorie)}</div>
        <h3>${esc(r.titel)}</h3>
        <div class="meta"><span>⏱ ${zeitText(gesamtZeit(r))}</span>${stufeHtml(r.schwierigkeit)}</div>
        ${extra || ''}
      </div>
    </a>`;
  }

  function karteMenue(m, i) {
    return `<a class="karte karte-menue" href="#/menue/${m.id}" style="--i:${i};${farben(m)}">
      <div class="karte-bild">
        <span class="menue-badge">Menü · ${m.rezepte.length} Gänge</span>${herzKnopf(m.id)}${gekochtBadge(m.id)}
        <span class="emoji-stapel">${m.rezepte.map((r, j) => `<span style="--j:${j}">${r.emoji}</span>`).join('')}</span>
      </div>
      <div class="karte-text">
        <div class="kat-label">${m.kategorie === 'alltag' ? 'Menü' : 'Menü · ' + katName(m.kategorie)}</div>
        <h3>${esc(m.titel)}</h3>
        <div class="meta"><span>⏱ ${zeitText(m.zeit)}</span>${stufeHtml(m.schwierigkeit)}</div>
      </div>
    </a>`;
  }

  function leer(emoji, text) {
    return `<div class="leer"><div class="leer-emoji">${emoji}</div><p>${text}</p></div>`;
  }

  /* ---------- Startseite ---------- */

  function seiteStart() {
    const tipp = REZEPTE[new Date().getDate() % REZEPTE.length];
    zeige(`
      <section class="hero">
        <div class="hero-emoji">🍳</div>
        <h1 class="woerter">${'Was kochen wir heute?'.split(' ').map((w, i) => `<span style="--w:${i}">${w}</span>`).join(' ')}</h1>
        <p><strong data-zahl="${REZEPTE.length}">${REZEPTE.length}</strong> Rezepte und <strong data-zahl="${MENUES.length}">${MENUES.length}</strong> Menüs – von einfach bis Sterneküche.</p>
        <form class="suche suche-gross start-suche" id="startsuche"><span>🔍</span><input type="search" name="q" placeholder="Gericht, Zutat oder Küche suchen …" autocomplete="off" enterkeyhint="search"></form>
      </section>

      <div class="kacheln">
        <a class="kachel kachel-a" href="#/rezepte" data-reset="1" style="--i:0">
          <span class="kachel-emoji">📖</span>
          <strong>Rezept wählen</strong>
          <span>Nach Art, Typ und Schwierigkeit filtern</span>
        </a>
        <a class="kachel kachel-b" href="#/zutaten" style="--i:1">
          <span class="kachel-emoji">🧺</span>
          <strong>Was hab ich zuhause?</strong>
          <span>Zutaten antippen, passende Rezepte finden</span>
        </a>
      </div>

      <div class="bib-kacheln">
        <a class="bib-kachel" href="#/bibliothek/gemerkt" style="--i:2"><span class="bib-icon herz-icon">${HERZ}</span><span><strong>Gemerkt</strong><small><b data-zaehler="gemerkt">${Object.keys(bib.gemerkt).length}</b> Gerichte</small></span><span class="pfeil">→</span></a>
        <a class="bib-kachel" href="#/bibliothek/gekocht" style="--i:3"><span class="bib-icon">✅</span><span><strong>Gekocht</strong><small><b data-zaehler="gekocht">${Object.keys(bib.gekocht).length}</b> Gerichte</small></span><span class="pfeil">→</span></a>
      </div>

      <h2 class="abschnitt">Kategorien</h2>
      <div class="kategorien">
        ${KATEGORIEN.map((k, i) => `
          <a class="kategorie" href="#/rezepte" data-kat="${k.id}" style="--i:${i + 2}">
            <span>${k.emoji}</span>${k.name}
          </a>`).join('')}
        <a class="kategorie" href="#/rezepte" data-typ="menue" style="--i:${KATEGORIEN.length + 2}"><span>🍷</span>Menüs</a>
      </div>

      <h2 class="abschnitt">Schnellsuche</h2>
      <div class="schnellsuche schnellsuche-start">${SCHNELLSUCHE.map(([emoji, wort]) => `<button class="chip" data-action="suchwort" data-value="${esc(wort)}">${emoji} ${esc(wort)}</button>`).join('')}</div>

      <h2 class="abschnitt">Tipp des Tages</h2>
      <div class="karten karten-einzeln">${karteRezept(tipp, 8)}</div>
    `, 'start');
    zahlenHochzaehlen(app);
    $('#startsuche').addEventListener('submit', e => {
      e.preventDefault();
      const q = e.target.q.value.trim();
      if (!q) return;
      filterZuruecksetzen();
      state.suche = q;
      location.hash = '#/rezepte';
    });
  }

  /* ---------- Filter ---------- */

  function chip(gruppe, wert, label, an) {
    return `<button class="chip ${an ? 'an' : ''}" data-action="filter" data-group="${gruppe}" data-value="${wert}">${label}</button>`;
  }

  function filterLeiste(mitTyp) {
    return `<div class="filter">
      <div class="filter-zeile"><span class="filter-label">Art</span><div class="chips">
        ${KATEGORIEN.map(k => chip('kat', k.id, k.emoji + ' ' + k.name, state.kat.has(k.id))).join('')}
      </div></div>
      ${mitTyp ? `<div class="filter-zeile"><span class="filter-label">Typ</span><div class="segment">
        ${chip('typ', 'alle', 'Alles', state.typ === 'alle')}
        ${chip('typ', 'rezept', 'Einzelrezepte', state.typ === 'rezept')}
        ${chip('typ', 'menue', 'Menüs', state.typ === 'menue')}
      </div></div>` : ''}
      <div class="filter-zeile"><span class="filter-label">Schwierigkeit</span><div class="chips">
        ${[1, 2, 3, 4].map(n => chip('stufe', n, STUFEN[n], state.stufe.has(n))).join('')}
      </div></div>
      <div class="filter-zeile"><span class="filter-label">Zeit</span><div class="segment">
        ${ZEITEN.map(z => chip('zeit', z.wert, z.name, state.zeit === z.wert)).join('')}
      </div></div>
    </div>`;
  }

  function passtFilter(e, istMenue, anfrage) {
    if (state.kat.size && !state.kat.has(e.kategorie)) return false;
    if (anfrage && anfrage.teile.length && !(e.punkte = suchPunkte(e, anfrage))) return false;
    if (state.stufe.size && !state.stufe.has(e.schwierigkeit)) return false;
    if (state.zeit && (istMenue ? e.zeit : gesamtZeit(e)) > state.zeit) return false;
    return true;
  }

  function filterKlick(btn) {
    const g = btn.dataset.group, v = btn.dataset.value;
    if (g === 'bib-sort') { bib.sortierung = v; return bibliothekListe(); }
    if (g === 'kat' || g === 'stufe') {
      const wert = g === 'stufe' ? Number(v) : v;
      state[g].has(wert) ? state[g].delete(wert) : state[g].add(wert);
      btn.classList.toggle('an', state[g].has(wert));
    } else {
      state[g] = g === 'zeit' ? Number(v) : v;
      $$('[data-group]', btn.parentElement).forEach(b => b.classList.toggle('an', b === btn));
    }
    ergebnisse();
  }

  function filterZuruecksetzen() {
    state.kat.clear(); state.stufe.clear(); state.typ = 'alle'; state.zeit = 0; state.suche = '';
  }

  function ergebnisse() {
    if (seite === 'rezepte') ergebnisseRezepte();
    if (seite === 'zutaten') ergebnisseZutaten();
  }

  /* ---------- Rezepte-Seite ---------- */

  // Schnellsuche: keine eigenen Kategorien, nur fertige Suchbegriffe zum Antippen
  const SCHNELLSUCHE = [
    ['🍜', 'Ramen'], ['🥢', 'Asiatisch'], ['🍛', 'Indisch'], ['🌶️', 'Thailändisch'], ['🇰🇷', 'Koreanisch'],
    ['🧋', 'Taiwanesisch'], ['🌮', 'Mexikanisch'], ['🍔', 'Amerikanisch'], ['🥨', 'Deutsch'], ['🏔️', 'Österreich'],
    ['🏠', 'Vorrat'], ['💶', 'Günstig'], ['⚡', 'Schnell'], ['🥦', 'Gesund'], ['🐔', 'Huhn'], ['🍝', 'Pasta']
  ];

  function setzeSuche(text, feldSetzen) {
    state.suche = text;
    if (feldSetzen && $('#rsuche')) { $('#rsuche').value = text; $('.suche-x').hidden = !text; }
    $$('.schnellsuche .chip').forEach(c => c.classList.toggle('an', !!text && normal(c.dataset.value) === normal(text)));
    ergebnisseRezepte();
  }

  function seiteRezepte() {
    zeige(`
      ${kopf('Rezept wählen', 'Wähle aus, worauf du Lust hast – die Liste passt sich sofort an.')}
      <div class="suche suche-gross"><span>🔍</span><input id="rsuche" type="search" placeholder="Gericht, Zutat oder Küche – z. B. Ramen, Erdäpfel, Thai …" autocomplete="off" enterkeyhint="search" value="${esc(state.suche)}"><button class="suche-x" data-action="suche-leeren" aria-label="Suche leeren" ${state.suche ? '' : 'hidden'}>✕</button></div>
      <div class="schnellsuche">${SCHNELLSUCHE.map(([emoji, wort]) => `<button class="chip chip-klein ${normal(state.suche) === normal(wort) ? 'an' : ''}" data-action="suchwort" data-value="${esc(wort)}">${emoji} ${esc(wort)}</button>`).join('')}</div>
      <p class="suchhinweis" id="suchhinweis" hidden></p>
      ${filterLeiste(true)}
      <div class="ergebnis-kopf"><span id="anzahl"></span><button class="link" data-action="reset">Filter zurücksetzen</button></div>
      <div class="karten" id="ergebnisse"></div>
    `, 'rezepte');
    let warte;
    $('#rsuche').addEventListener('input', e => {
      clearTimeout(warte);
      $('.suche-x').hidden = !e.target.value;
      warte = setTimeout(() => { setzeSuche(e.target.value.trim(), false); }, 250);
    });
    $('#rsuche').addEventListener('keydown', e => { if (e.key === 'Enter') { e.target.blur(); setzeSuche(e.target.value.trim(), false); } });
    ergebnisseRezepte();
  }

  // Zeigt zuerst nur PRO_SEITE Karten, damit die Liste auch auf älteren Tablets flüssig bleibt
  function ergebnisseRezepte(mehr) {
    state.anzeigen = mehr ? state.anzeigen + PRO_SEITE : PRO_SEITE;
    const anfrage = state.suche ? suchAnfrage(state.suche) : null;
    const menues = state.typ === 'rezept' ? [] : MENUES.filter(m => passtFilter(m, true, anfrage));
    const rezepte = state.typ === 'menue' ? [] : REZEPTE.filter(r => passtFilter(r, false, anfrage));
    let alle = menues.map(m => ['m', m]).concat(rezepte.map(r => ['r', r]));
    // Bei einer Suche: beste Treffer zuerst (Titel vor Zutaten), Menüs nur bei gleicher Punktzahl vorne
    if (anfrage && anfrage.teile.length) alle = alle.map((x, i) => [x, i]).sort((a, b) => b[0][1].punkte - a[0][1].punkte || a[1] - b[1]).map(x => x[0]);
    const hinweis = $('#suchhinweis');
    if (hinweis) {
      hinweis.innerHTML = anfrage && anfrage.korrigiert.length ? `Meintest du <strong>${esc(anfrage.korrigiert.join(', '))}</strong>? Ich zeige passende Treffer.` : '';
      hinweis.hidden = !hinweis.innerHTML;
    }
    const start = mehr ? state.anzeigen - PRO_SEITE : 0;
    const html = alle.slice(start, state.anzeigen)
      .map(([art, e], i) => art === 'm' ? karteMenue(e, i) : karteRezept(e, i)).join('');
    const n = alle.length;
    $('#anzahl').textContent = n === 1 ? '1 Treffer' : n + ' Treffer';
    const box = $('#ergebnisse');
    $$('.mehr-zeile', box).forEach(el => el.remove());
    if (mehr) box.insertAdjacentHTML('beforeend', html);
    else box.innerHTML = html || leer('🤷', 'Keine Treffer. Probier es mit weniger Filtern oder einem anderen Suchwort.');
    if (n > state.anzeigen) {
      box.insertAdjacentHTML('beforeend', `<div class="mehr-zeile"><button class="btn-zweit" data-action="mehr">Weitere ${Math.min(PRO_SEITE, n - state.anzeigen)} anzeigen</button></div>`);
    }
    karteEinblenden();
  }

  /* ---------- Zutaten-Seite ---------- */

  function seiteZutaten() {
    zeige(`
      ${kopf('Was hab ich zuhause?', 'Tippe an, was du hast. Salz, Pfeffer, Öl, Zucker und Wasser setzen wir voraus.')}
      <div class="zutaten-wahl">
        <div class="suche"><span>🔍</span><input id="zsuche" type="search" placeholder="Zutat suchen …" autocomplete="off"></div>
        <div class="chips zutat-wolke" id="zwolke">
          ${ALLE_ZUTATEN.map(n => `<button class="chip ${state.zutaten.has(n) ? 'an' : ''}" data-action="zutat" data-value="${esc(n)}">${esc(n)}</button>`).join('')}
        </div>
        <div class="zutaten-fuss">
          <span id="zanzahl"></span>
          <button class="link" data-action="zutaten-leeren">Auswahl löschen</button>
        </div>
      </div>
      ${filterLeiste(false)}
      <label class="schalter"><input type="checkbox" id="nurKomplett" ${state.nurKomplett ? 'checked' : ''}><span class="schalter-knopf"></span>Nur Rezepte, für die ich alles habe</label>
      <div class="karten" id="ergebnisse"></div>
    `, 'zutaten');
    $('#zsuche').addEventListener('input', e => {
      const q = e.target.value.trim().toLowerCase();
      $$('#zwolke .chip').forEach(c => { c.hidden = q && !c.dataset.value.toLowerCase().includes(q); });
    });
    $('#nurKomplett').addEventListener('change', e => { state.nurKomplett = e.target.checked; ergebnisseZutaten(); });
    ergebnisseZutaten();
  }

  function ergebnisseZutaten() {
    const n = state.zutaten.size;
    $('#zanzahl').textContent = n === 1 ? '1 Zutat gewählt' : n + ' Zutaten gewählt';
    if (!n) {
      $('#ergebnisse').innerHTML = leer('🧺', 'Wähle oben mindestens eine Zutat aus.');
      return;
    }
    const treffer = REZEPTE.filter(r => passtFilter(r)).map(r => {
      const noetig = [...new Set(r.zutaten.map(z => z.name).filter(z => !BASIS.has(z)))];
      const fehlt = noetig.filter(z => !state.zutaten.has(z));
      const hat = noetig.length - fehlt.length;
      return { r, noetig, fehlt, hat, quote: hat / noetig.length };
    })
      .filter(t => t.hat > 0 && (!state.nurKomplett || !t.fehlt.length))
      .sort((a, b) => b.quote - a.quote || a.fehlt.length - b.fehlt.length);

    $('#ergebnisse').innerHTML = treffer.map((t, i) => {
      const fehltText = t.fehlt.length
        ? `<div class="fehlt">Fehlt: ${esc(t.fehlt.slice(0, 4).join(', '))}${t.fehlt.length > 4 ? ' …' : ''}</div>`
        : '<div class="fehlt komplett">✓ Du hast alles!</div>';
      const extra = `<div class="treffer"><div class="treffer-balken"><i style="transform:scaleX(${t.quote})"></i></div>
        <span>${t.hat} von ${t.noetig.length}</span></div>${fehltText}`;
      return karteRezept(t.r, i, extra);
    }).join('') || leer('🥲', 'Dazu passt leider noch nichts. Wähle mehr Zutaten oder weniger Filter.');
    karteEinblenden();
  }

  function zutatKlick(btn) {
    const z = btn.dataset.value;
    state.zutaten.has(z) ? state.zutaten.delete(z) : state.zutaten.add(z);
    btn.classList.toggle('an', state.zutaten.has(z));
    speichern('zutaten', [...state.zutaten]);
    ergebnisseZutaten();
  }

  /* ---------- Rezept-Detail ---------- */

  function zutatenListe(r) {
    const faktor = (state.portionen[r.id] || r.portionen) / r.portionen;
    return r.zutaten.map((z, i) => `
      <li style="--i:${i}" data-action="abhaken">
        <span class="haken"></span>
        <span class="menge">${esc(mengeText(z, faktor))}</span>
        <span class="zutat-name">${esc(z.name)}</span>
      </li>`).join('');
  }

  function seiteRezept(r) {
    const p = state.portionen[r.id] || r.portionen;
    zeige(`
      <article class="detail">
        <header class="detail-hero" style="${farben(r)}">
          <button class="rund hell" data-action="zurueck" aria-label="Zurück">←</button>
          <div class="detail-emoji">${r.emoji}</div>
          <span class="blase b1"></span><span class="blase b2"></span><span class="blase b3"></span>
        </header>
        <div class="detail-kopf">
          <div class="kat-label">${katName(r.kategorie)}</div>
          <h1>${esc(r.titel)}</h1>
          <p class="lead">${esc(r.beschreibung)}</p>
          ${THEMA_NAMEN[r.thema] ? `<p class="inspiration">${THEMA_NAMEN[r.thema]}</p>` : ''}
          ${r.inspiration ? `<p class="inspiration">👨‍🍳 Inspiriert von ${esc(r.inspiration)} – in eigenen Worten nachgeschrieben</p>` : ''}
          ${aktionen(r.id)}
          <div class="fakten">
            <div><small>Zeit</small><strong>${zeitText(r.zeit)}</strong>${r.ruhezeit ? `<small>+ ${zeitText(r.ruhezeit)} warten</small>` : ''}</div>
            <div><small>Schwierigkeit</small>${stufeHtml(r.schwierigkeit)}</div>
            <div><small>Schritte</small><strong>${r.schritte.length}</strong></div>
          </div>
        </div>
        <div class="detail-raster">
          <section class="box">
            <div class="box-kopf">
              <h2>Zutaten</h2>
              <div class="portionen">
                <button class="rund klein" data-action="portion" data-delta="-1" aria-label="Weniger">−</button>
                <span><b id="pzahl">${p}</b> Port.</span>
                <button class="rund klein" data-action="portion" data-delta="1" aria-label="Mehr">+</button>
              </div>
            </div>
            <ul class="zutaten" id="zliste">${zutatenListe(r)}</ul>
          </section>
          <section class="box">
            <h2>Zubereitung</h2>
            <ol class="schritte-liste">
              ${r.schritte.map((s, i) => `<li style="--i:${i}"><span class="nr">${i + 1}</span><div>
                <p>${markiereZutaten(s.text, r)}</p>
                ${s.dauer ? `<span class="dauer">⏱ ${zeitText(s.dauer)}</span>` : ''}
              </div></li>`).join('')}
            </ol>
          </section>
        </div>
        <div class="start-leiste"><button class="btn-primaer gross" data-action="kochen">▶ Kochmodus starten</button></div>
      </article>
    `, 'rezept');
  }

  // Knöpfe "Merken" und "Gekocht" auf Rezept- und Menüseiten
  function aktionen(id) {
    const an = istGemerkt(id), g = gekochtInfo(id);
    return `<div class="aktionen" id="aktionen">
      <button class="aktion herz-aktion ${an ? 'an' : ''}" data-action="merken" data-id="${id}" aria-pressed="${an}">${HERZ}<span class="knopf-text">${an ? 'Gemerkt' : 'Merken'}</span></button>
      <button class="aktion gekocht-aktion ${g ? 'an' : ''}" data-action="gekocht" data-id="${id}"><span class="haken-kreis">✓</span><span class="knopf-text">${g ? 'Nochmal gekocht' : 'Als gekocht markieren'}</span></button>
      ${g ? `<p class="gekocht-info">${g.n}× gekocht · zuletzt ${datumText(g.zuletzt)} · <button class="link klein" data-action="gekocht-weg" data-id="${id}">entfernen</button></p>` : ''}
    </div>`;
  }

  function aktionenNeu(id) {
    const box = $('#aktionen');
    if (!box) return;
    box.outerHTML = aktionen(id);
    const neu = $('#aktionen .gekocht-aktion');
    if (neu && gekochtInfo(id)) { neu.classList.add('platzt'); }
  }

  function portionKlick(btn) {
    const r = rezeptById[location.hash.split('/')[2]];
    if (!r) return;
    const neu = Math.min(20, Math.max(1, (state.portionen[r.id] || r.portionen) + Number(btn.dataset.delta)));
    state.portionen[r.id] = neu;
    const zahlEl = $('#pzahl');
    zahlEl.textContent = neu;
    zahlEl.classList.remove('hupf'); void zahlEl.offsetWidth; zahlEl.classList.add('hupf');
    const erledigt = $$('#zliste li').map(li => li.classList.contains('erledigt'));
    $('#zliste').innerHTML = zutatenListe(r);
    $$('#zliste li').forEach((li, i) => { li.classList.toggle('erledigt', erledigt[i]); li.style.animation = 'none'; });
  }

  /* ---------- Menü-Detail ---------- */

  function einkaufsliste(m) {
    const map = new Map();
    m.rezepte.forEach(r => {
      const faktor = m.portionen / r.portionen;
      r.zutaten.forEach(z => {
        const key = z.name + '|' + (z.menge == null ? '' : z.einheit);
        const e = map.get(key) || { name: z.name, einheit: z.einheit, menge: z.menge == null ? null : 0 };
        if (z.menge != null) e.menge += z.menge * faktor;
        map.set(key, e);
      });
    });
    return [...map.values()].sort((a, b) => a.name.localeCompare(b.name, 'de'));
  }

  function seiteMenue(m) {
    const namen = m.rezepte.length === 3 ? ['Vorspeise', 'Hauptgang', 'Dessert'] : m.rezepte.map((_, i) => `${i + 1}. Gang`);
    zeige(`
      <article class="detail">
        <header class="detail-hero" style="${farben(m)}">
          <button class="rund hell" data-action="zurueck" aria-label="Zurück">←</button>
          <div class="emoji-stapel gross">${m.rezepte.map((r, j) => `<span style="--j:${j}">${r.emoji}</span>`).join('')}</div>
          <span class="blase b1"></span><span class="blase b2"></span><span class="blase b3"></span>
        </header>
        <div class="detail-kopf">
          <div class="kat-label">${m.kategorie === 'alltag' ? 'Menü' : 'Menü · ' + katName(m.kategorie)}</div>
          <h1>${esc(m.titel)}</h1>
          <p class="lead">${esc(m.beschreibung)}</p>
          ${aktionen(m.id)}
          <div class="fakten">
            <div><small>Gesamtzeit</small><strong>${zeitText(m.zeit)}</strong></div>
            <div><small>Schwierigkeit</small>${stufeHtml(m.schwierigkeit)}</div>
            <div><small>Gänge</small><strong>${m.rezepte.length}</strong></div>
          </div>
        </div>
        <section class="gaenge">
          ${m.rezepte.map((r, i) => `
            <a class="gang" href="#/rezept/${r.id}" style="--i:${i};${farben(r)}">
              <span class="gang-emoji">${r.emoji}</span>
              <div><small>${namen[i]}</small><strong>${esc(r.titel)}</strong><span>⏱ ${zeitText(gesamtZeit(r))}</span></div>
              <span class="pfeil">→</span>
            </a>`).join('')}
        </section>
        <details class="box einkauf">
          <summary><h2>🛒 Einkaufsliste für ${m.portionen} Personen</h2></summary>
          <ul class="zutaten">
            ${einkaufsliste(m).map((z, i) => `<li style="--i:${i}" data-action="abhaken"><span class="haken"></span>
              <span class="menge">${esc(mengeText(z, 1))}</span><span class="zutat-name">${esc(z.name)}</span></li>`).join('')}
          </ul>
        </details>
      </article>
    `, 'menue');
  }

  /* ---------- Bibliothek: Gemerkt & Gekocht ---------- */

  function seiteBibliothek(tab) {
    if (tab === 'gemerkt' || tab === 'gekocht') bib.tab = tab;
    zeige(`
      ${kopf('Meine Bibliothek', 'Deine gemerkten Rezepte und alles, was du schon gekocht hast.')}
      <div class="tabs" id="bibtabs" role="tablist">
        <span class="tabs-pille"></span>
        <button class="tab ${bib.tab === 'gemerkt' ? 'an' : ''}" data-action="bib-tab" data-value="gemerkt" role="tab">❤️ Gemerkt <span class="tab-zahl" data-zaehler="gemerkt">${Object.keys(bib.gemerkt).length}</span></button>
        <button class="tab ${bib.tab === 'gekocht' ? 'an' : ''}" data-action="bib-tab" data-value="gekocht" role="tab">✅ Gekocht <span class="tab-zahl" data-zaehler="gekocht">${Object.keys(bib.gekocht).length}</span></button>
      </div>
      <div id="bibkopf"></div>
      <div class="karten" id="ergebnisse"></div>
    `, 'bibliothek');
    tabsPille();
    bibliothekListe();
  }

  function tabsPille() {
    const box = $('#bibtabs');
    if (!box) return;
    const an = $('.tab.an', box), pille = $('.tabs-pille', box);
    pille.style.width = an.offsetWidth + 'px';
    pille.style.transform = `translateX(${an.offsetLeft - 4}px)`;
  }

  function eintrag(id) { return rezeptById[id] ? ['r', rezeptById[id]] : menueById[id] ? ['m', menueById[id]] : null; }

  function bibliothekListe() {
    const kopfBox = $('#bibkopf'), box = $('#ergebnisse');
    if (!box) return;
    let liste;
    if (bib.tab === 'gemerkt') {
      liste = Object.entries(bib.gemerkt).sort((a, b) => b[1] - a[1]).map(([id]) => eintrag(id)).filter(Boolean);
      kopfBox.innerHTML = liste.length ? `<div class="ergebnis-kopf"><span>${liste.length === 1 ? '1 gemerktes Gericht' : liste.length + ' gemerkte Gerichte'}</span></div>` : '';
      box.innerHTML = liste.length
        ? liste.map(([art, e], i) => art === 'm' ? karteMenue(e, i) : karteRezept(e, i)).join('')
        : leer('🤍', 'Noch nichts gemerkt. Tippe auf das Herz bei einem Rezept, dann landet es hier.');
    } else {
      const eintraege = Object.entries(bib.gekocht).map(([id, g]) => [eintrag(id), g]).filter(x => x[0]);
      eintraege.sort((a, b) => bib.sortierung === 'oft' ? b[1].n - a[1].n || b[1].zuletzt - a[1].zuletzt : b[1].zuletzt - a[1].zuletzt);
      const gesamt = eintraege.reduce((s, x) => s + x[1].n, 0);
      kopfBox.innerHTML = eintraege.length ? `
        <div class="bib-statistik">
          <div><strong data-zahl="${eintraege.length}">${eintraege.length}</strong><small>Gerichte gekocht</small></div>
          <div><strong data-zahl="${gesamt}">${gesamt}</strong><small>Mal am Herd</small></div>
          <div><strong>${datumText(Math.max(...eintraege.map(x => x[1].zuletzt)))}</strong><small>zuletzt gekocht</small></div>
        </div>
        <div class="ergebnis-kopf"><span>Sortieren</span><div class="segment">
          ${chip('bib-sort', 'zuletzt', 'Zuletzt', bib.sortierung === 'zuletzt')}
          ${chip('bib-sort', 'oft', 'Am häufigsten', bib.sortierung === 'oft')}
        </div></div>` : '';
      box.innerHTML = eintraege.length
        ? eintraege.map(([[art, e], g], i) => {
            const extra = `<div class="gekocht-zeile">✓ ${g.n}× gekocht · ${datumText(g.zuletzt)}</div>`;
            return art === 'm' ? karteMenue(e, i) : karteRezept(e, i, extra);
          }).join('')
        : leer('🍳', 'Noch nichts gekocht. Markiere ein Rezept als gekocht oder koche es im Kochmodus bis zum Ende.');
    }
    zahlenHochzaehlen(kopfBox);
    karteEinblenden();
  }

  /* ---------- Kochmodus ---------- */

  function seiteKochen(r) {
    koch = { r, i: 0, timer: {}, tick: null, lock: null, audio: null };
    zeige(`
      <div class="koch" style="${farben(r)}">
        <div class="koch-oben">
          <button class="rund" data-action="koch-ende" aria-label="Kochmodus beenden">✕</button>
          <div class="koch-titel"><small>Kochmodus</small><strong>${esc(r.titel)}</strong></div>
          <span class="koch-zahl" id="kzahl"></span>
        </div>
        <div class="fortschritt"><i id="kbalken"></i></div>
        <div class="pillen" id="pillen"></div>
        <div class="buehne" id="buehne"></div>
        <div class="koch-nav" id="knav">
          <button class="btn-zweit" data-action="schritt" data-delta="-1" id="kzurueck">← Zurück</button>
          <button class="btn-primaer" data-action="schritt" data-delta="1" id="kweiter">Weiter →</button>
        </div>
      </div>
    `, 'kochen');
    schrittZeigen(0, 0);
    wischen($('#buehne'));
    wachHalten();
    koch.tick = setInterval(timerTick, 250);
  }

  function schrittZeigen(neu, richtung) {
    const r = koch.r, n = r.schritte.length;
    if (neu < 0) return;
    if (neu >= n) return finale();
    koch.i = neu;
    const s = r.schritte[neu];
    const el = document.createElement('article');
    el.className = 'schritt ' + (richtung < 0 ? 'von-links' : 'von-rechts');
    el.innerHTML = `
      <div class="schritt-nr">${neu + 1}</div>
      <p class="schritt-text">${markiereZutaten(s.text, r)}</p>
      ${s.tipp ? `<div class="tipp"><span>💡</span><p>${esc(s.tipp)}</p></div>` : ''}
      ${s.dauer ? timerHtml(neu, s.dauer) : ''}`;
    const buehne = $('#buehne');
    $$('.schritt:not(.raus)', buehne).forEach(alt => {
      alt.classList.add('raus', richtung < 0 ? 'nach-rechts' : 'nach-links');
      setTimeout(() => alt.remove(), 450);
    });
    buehne.appendChild(el);
    $('#kzahl').textContent = `${neu + 1} / ${n}`;
    $('#kbalken').style.transform = `scaleX(${(neu + 1) / n})`;
    $('#kzurueck').disabled = neu === 0;
    $('#kweiter').textContent = neu === n - 1 ? 'Fertig 🎉' : 'Weiter →';
    timerTick();
  }

  function timerHtml(i, dauer) {
    return `<div class="timer" data-timer="${i}">
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle class="ring-hg" cx="60" cy="60" r="52"></circle>
        <circle class="ring" cx="60" cy="60" r="52"></circle>
      </svg>
      <div class="timer-info">
        <span class="timer-zeit">${uhr(dauer * 60)}</span>
        <button class="btn-timer" data-action="timer" data-i="${i}">Timer starten</button>
      </div>
    </div>`;
  }

  const UMFANG = 2 * Math.PI * 52;

  function timerKlick(i) {
    const s = koch.r.schritte[i];
    let t = koch.timer[i];
    if (!t || t.fertig) t = koch.timer[i] = { gesamt: s.dauer * 60, rest: s.dauer * 60, laeuft: false, fertig: false };
    if (t.laeuft) {
      t.rest = Math.max(0, (t.ende - Date.now()) / 1000);
      t.laeuft = false;
    } else {
      t.ende = Date.now() + t.rest * 1000;
      t.laeuft = true;
      tonVorbereiten();
    }
    timerTick();
  }

  function timerTick() {
    if (!koch) return;
    const jetzt = Date.now();
    Object.keys(koch.timer).forEach(k => {
      const t = koch.timer[k];
      if (t.laeuft) {
        t.rest = Math.max(0, (t.ende - jetzt) / 1000);
        if (t.rest === 0) { t.laeuft = false; t.fertig = true; alarm(); }
      }
      const el = $(`[data-timer="${k}"]`);
      if (el) {
        $('.timer-zeit', el).textContent = t.fertig ? 'Fertig!' : uhr(t.rest);
        $('.ring', el).style.strokeDashoffset = UMFANG * (1 - t.rest / t.gesamt);
        $('.btn-timer', el).textContent = t.fertig ? 'Neu starten' : t.laeuft ? 'Pause' : 'Weiter';
        el.classList.toggle('laeuft', t.laeuft);
        el.classList.toggle('fertig', t.fertig);
      }
    });
    pillenAktualisieren();
  }

  // Laufende Timer anderer Schritte oben als kleine "Pillen" anzeigen
  function pillenAktualisieren() {
    const box = $('#pillen');
    if (!box) return;
    const sichtbar = Object.keys(koch.timer).filter(k => Number(k) !== koch.i && (koch.timer[k].laeuft || koch.timer[k].fertig));
    $$('.pille', box).forEach(p => { if (!sichtbar.includes(p.dataset.i)) p.remove(); });
    sichtbar.forEach(k => {
      const t = koch.timer[k];
      let p = $(`.pille[data-i="${k}"]`, box);
      if (!p) {
        p = document.createElement('button');
        p.className = 'pille';
        p.dataset.action = 'geh-zu';
        p.dataset.i = k;
        box.appendChild(p);
      }
      p.classList.toggle('fertig', t.fertig);
      p.textContent = `⏱ Schritt ${Number(k) + 1} · ${t.fertig ? 'fertig!' : uhr(t.rest)}`;
    });
  }

  function tonVorbereiten() {
    try {
      if (!koch.audio) koch.audio = new (window.AudioContext || window.webkitAudioContext)();
      koch.audio.resume();
    } catch (e) { /* kein Ton */ }
  }

  function alarm() {
    if (navigator.vibrate) navigator.vibrate([300, 150, 300, 150, 300]);
    const ctx = koch && koch.audio;
    if (!ctx) return;
    [0, 0.35, 0.7].forEach(start => {
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.frequency.value = 880;
      gain.gain.setValueAtTime(0.0001, ctx.currentTime + start);
      gain.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + 0.25);
      osc.connect(gain).connect(ctx.destination);
      osc.start(ctx.currentTime + start);
      osc.stop(ctx.currentTime + start + 0.3);
    });
  }

  function finale() {
    const r = koch.r;
    koch.i = r.schritte.length;
    const g = gekochtMarkieren(r.id, true);
    $('#knav').classList.add('weg');
    $('#kzahl').textContent = '';
    const b = $('#buehne');
    b.innerHTML = `<div class="finale">
      <div class="konfetti" id="konfetti"></div>
      <div class="finale-emoji">${r.emoji}</div>
      <h2>Guten Appetit!</h2>
      <p>Du hast „${esc(r.titel)}“ fertig gekocht.</p>
      <p class="finale-bib">✅ In „Gekocht“ gespeichert${g.n > 1 ? ` – schon ${g.n}× gekocht` : ''}</p>
      <button class="btn-primaer" data-action="koch-ende">Zurück zum Rezept</button>
    </div>`;
    konfetti($('#konfetti'));
  }

  function konfetti(box) {
    const farbenListe = ['#E0633A', '#F2A65A', '#F6D365', '#3FA66B', '#6FC3F0', '#B33771'];
    let html = '';
    for (let i = 0; i < 36; i++) {
      const winkel = Math.random() * Math.PI * 2, weite = 120 + Math.random() * 220;
      html += `<i style="--x:${Math.cos(winkel) * weite}px;--y:${Math.sin(winkel) * weite - 80}px;--r:${Math.random() * 720 - 360}deg;--d:${Math.random() * 0.25}s;background:${farbenListe[i % farbenListe.length]}"></i>`;
    }
    box.innerHTML = html;
  }

  function wischen(el) {
    let x0 = null, y0 = 0;
    el.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    el.addEventListener('touchend', e => {
      if (x0 === null || !koch || koch.i >= koch.r.schritte.length) return;
      const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
      x0 = null;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        const d = dx < 0 ? 1 : -1;
        schrittZeigen(koch.i + d, d);
      }
    });
  }

  // Bildschirm im Kochmodus nicht ausschalten (geht nur über https)
  async function wachHalten() {
    try { if (navigator.wakeLock) koch.lock = await navigator.wakeLock.request('screen'); } catch (e) { /* egal */ }
  }

  function kochStoppen() {
    if (!koch) return;
    clearInterval(koch.tick);
    if (koch.lock) koch.lock.release().catch(() => {});
    if (koch.audio) koch.audio.close().catch(() => {});
    koch = null;
  }

  /* ---------- Router ---------- */

  function route() { mitUebergang(routeJetzt); }

  function routeJetzt() {
    kochStoppen();
    const teile = location.hash.slice(1).split('/').filter(Boolean);
    const id = teile[1];
    switch (teile[0]) {
      case 'rezepte': return seiteRezepte();
      case 'zutaten': return seiteZutaten();
      case 'rezept': return rezeptById[id] ? seiteRezept(rezeptById[id]) : seiteStart();
      case 'menue': return menueById[id] ? seiteMenue(menueById[id]) : seiteStart();
      case 'kochen': return rezeptById[id] ? seiteKochen(rezeptById[id]) : seiteStart();
      case 'bibliothek': return seiteBibliothek(id);
      default: return seiteStart();
    }
  }

  // Zählt Seitenwechsel innerhalb der App, damit "Zurück" nie aus der App hinausführt
  let tiefe = 0;
  let rueckwaerts = false;
  window.addEventListener('popstate', () => { rueckwaerts = true; });
  window.addEventListener('hashchange', () => { tiefe++; route(); });

  function zurueck(ziel) {
    rueckwaerts = true;
    if (tiefe > 0) history.back();
    else location.replace(ziel || '#/');
  }

  /* ---------- Klicks ---------- */

  document.addEventListener('click', e => {
    // Geteiltes Element: das Kartenbild "fliegt" in den Kopf der Detailseite
    const karte = VT && !e.target.closest('[data-action]') && e.target.closest('a.karte, a.gang');
    if (karte) {
      const bild = $('.karte-bild, .gang-emoji', karte), alt = $('.detail-hero');
      if (alt) alt.style.viewTransitionName = 'none';
      if (bild) bild.classList.add('vt-held');
    }
    const link = e.target.closest('a[data-kat], a[data-typ], a[data-reset]');
    if (link) {
      filterZuruecksetzen();
      if (link.dataset.kat) state.kat.add(link.dataset.kat);
      if (link.dataset.typ) state.typ = link.dataset.typ;
    }

    const el = e.target.closest('[data-action]');
    if (!el) return;
    switch (el.dataset.action) {
      case 'zurueck': return zurueck();
      case 'merken': e.preventDefault(); e.stopPropagation(); return merkenUmschalten(el.dataset.id, el);
      case 'gekocht': gekochtMarkieren(el.dataset.id); return aktionenNeu(el.dataset.id);
      case 'gekocht-weg': gekochtEntfernen(el.dataset.id); return aktionenNeu(el.dataset.id);
      case 'bib-tab':
        if (bib.tab === el.dataset.value) return;
        bib.tab = el.dataset.value;
        $$('#bibtabs .tab').forEach(t => t.classList.toggle('an', t === el));
        tabsPille();
        history.replaceState(null, '', '#/bibliothek/' + bib.tab);
        return bibliothekListe();
      case 'filter': return filterKlick(el);
      case 'reset': filterZuruecksetzen(); return seiteRezepte();
      case 'mehr': return ergebnisseRezepte(true);
      case 'suchwort': {
        const wort = el.dataset.value;
        if (seite !== 'rezepte') { filterZuruecksetzen(); state.suche = wort; location.hash = '#/rezepte'; return; }
        return setzeSuche(normal(state.suche) === normal(wort) ? '' : wort, true);
      }
      case 'suche-leeren': setzeSuche('', true); return $('#rsuche').focus();
      case 'zutat': return zutatKlick(el);
      case 'zutaten-leeren':
        state.zutaten.clear(); speichern('zutaten', []);
        $$('#zwolke .chip').forEach(c => c.classList.remove('an'));
        return ergebnisseZutaten();
      case 'abhaken': return el.classList.toggle('erledigt');
      case 'portion': return portionKlick(el);
      case 'kochen': location.hash = '#/kochen/' + location.hash.split('/')[2]; return;
      case 'schritt': {
        const d = Number(el.dataset.delta);
        return schrittZeigen(koch.i + d, d);
      }
      case 'timer': return timerKlick(Number(el.dataset.i));
      case 'geh-zu': {
        const ziel = Number(el.dataset.i);
        return schrittZeigen(ziel, ziel > koch.i ? 1 : -1);
      }
      case 'koch-ende': return zurueck('#/rezept/' + koch.r.id);
    }
  });

  document.addEventListener('keydown', e => {
    if (!koch || koch.i >= koch.r.schritte.length) return;
    if (e.key === 'ArrowRight') schrittZeigen(koch.i + 1, 1);
    if (e.key === 'ArrowLeft') schrittZeigen(koch.i - 1, -1);
    if (e.key === 'Escape') zurueck('#/rezept/' + koch.r.id);
  });

  // Kopfleiste wird beim Scrollen gläsern, Bild im Rezeptkopf bewegt sich leicht mit (Parallax)
  let scrollPlan = false;
  window.addEventListener('scroll', () => {
    if (scrollPlan) return;
    scrollPlan = true;
    requestAnimationFrame(() => {
      scrollPlan = false;
      const y = window.scrollY;
      document.body.classList.toggle('gescrollt', y > 8);
      const held = $('.detail-hero');
      if (held && y < 400) {
        held.style.setProperty('--px', (y * 0.35).toFixed(1) + 'px');
        held.style.setProperty('--po', Math.max(0, 1 - y / 320).toFixed(2));
      }
    });
  }, { passive: true });
  window.addEventListener('resize', () => { navPille(); tabsPille(); });

  /* ---------- Start ---------- */

  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }

  route();
})();
