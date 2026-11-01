/*
 * Rezept-Datenbank
 * ----------------
 * Neue Rezepte einfach unten in die Liste kopieren und anpassen.
 *
 * kategorie:     'vorspeise' | 'hauptspeise' | 'dessert' | 'luxury' | 'sterne'
 * schwierigkeit: 1 = Einfach, 2 = Mittel, 3 = Anspruchsvoll, 4 = Ausgefallen
 * zeit:          Arbeitszeit in Minuten, ruhezeit (optional): Kühl-/Wartezeit in Minuten
 * zutaten:       menge als Zahl (wird beim Portionen-Ändern umgerechnet) oder null
 * schritte:      dauer (optional) in Minuten -> im Kochmodus erscheint ein Timer
 */
window.REZEPTE = [
  {
    id: 'bruschetta',
    titel: 'Tomaten-Bruschetta',
    kategorie: 'vorspeise',
    schwierigkeit: 1,
    zeit: 15,
    portionen: 4,
    emoji: '🍅',
    farbe: ['#F7A35C', '#E5534B'],
    beschreibung: 'Knuspriges Röstbrot mit aromatischen Tomaten, Knoblauch und frischem Basilikum.',
    zutaten: [
      { name: 'Ciabatta', menge: 1, einheit: 'Stück' },
      { name: 'Tomaten', menge: 4, einheit: '' },
      { name: 'Knoblauch', menge: 1, einheit: 'Zehe' },
      { name: 'Basilikum', menge: 0.5, einheit: 'Bund' },
      { name: 'Olivenöl', menge: 4, einheit: 'EL' },
      { name: 'Salz', menge: null },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Tomaten waschen, halbieren, die Kerne entfernen und das Fruchtfleisch in kleine Würfel schneiden.' },
      { text: 'Basilikum in feine Streifen schneiden. Tomaten mit Basilikum, dem Großteil des Olivenöls, Salz und Pfeffer mischen und ziehen lassen.', dauer: 5, tipp: 'Durch das Ziehenlassen verbinden sich die Aromen und die Tomaten werden schön saftig.' },
      { text: 'Ciabatta in etwa 1,5 cm dicke Scheiben schneiden und im Ofen bei 220 °C oder in einer Pfanne goldbraun rösten.', dauer: 4 },
      { text: 'Die warmen Brotscheiben mit der halbierten Knoblauchzehe einreiben und mit dem restlichen Olivenöl beträufeln.' },
      { text: 'Die Tomatenmischung auf den Brotscheiben verteilen und sofort servieren.' }
    ]
  },
  {
    id: 'kuerbissuppe',
    titel: 'Kürbiscremesuppe mit Kernöl',
    kategorie: 'vorspeise',
    schwierigkeit: 1,
    zeit: 40,
    portionen: 4,
    emoji: '🎃',
    farbe: ['#F6C453', '#EE8A3C'],
    beschreibung: 'Samtige Suppe aus Hokkaido-Kürbis mit einem Hauch Ingwer, gerösteten Kernen und steirischem Kürbiskernöl.',
    zutaten: [
      { name: 'Hokkaido-Kürbis', menge: 800, einheit: 'g' },
      { name: 'Zwiebel', menge: 1, einheit: '' },
      { name: 'Knoblauch', menge: 1, einheit: 'Zehe' },
      { name: 'Ingwer', menge: 2, einheit: 'cm' },
      { name: 'Gemüsebrühe', menge: 800, einheit: 'ml' },
      { name: 'Kokosmilch', menge: 200, einheit: 'ml' },
      { name: 'Butter', menge: 1, einheit: 'EL' },
      { name: 'Kürbiskerne', menge: 2, einheit: 'EL' },
      { name: 'Kürbiskernöl', menge: 1, einheit: 'EL' },
      { name: 'Salz', menge: null },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Kürbis waschen, halbieren, entkernen und in grobe Würfel schneiden.', tipp: 'Beim Hokkaido kann die Schale dranbleiben – sie wird beim Kochen ganz weich.' },
      { text: 'Zwiebel, Knoblauch und Ingwer schälen und fein hacken.' },
      { text: 'Butter in einem Topf erhitzen und die Zwiebel darin glasig anschwitzen. Knoblauch und Ingwer kurz mitbraten.', dauer: 3 },
      { text: 'Kürbis dazugeben, kurz mitrösten und mit der Gemüsebrühe aufgießen. Zugedeckt köcheln lassen, bis der Kürbis weich ist.', dauer: 20 },
      { text: 'Inzwischen die Kürbiskerne in einer Pfanne ohne Fett rösten, bis sie zu knacken beginnen.', dauer: 3 },
      { text: 'Kokosmilch zur Suppe geben, alles fein pürieren und mit Salz und Pfeffer abschmecken.' },
      { text: 'Suppe in Teller füllen, mit gerösteten Kernen bestreuen und ein paar Tropfen Kürbiskernöl darüberträufeln.' }
    ]
  },
  {
    id: 'carpaccio',
    titel: 'Rindercarpaccio mit Parmesan',
    kategorie: 'vorspeise',
    schwierigkeit: 2,
    zeit: 20,
    ruhezeit: 30,
    portionen: 4,
    emoji: '🥩',
    farbe: ['#E5534B', '#8E2B2B'],
    beschreibung: 'Hauchdünnes Rinderfilet mit Rucola, gehobeltem Parmesan, Pinienkernen und Zitronen-Dressing.',
    zutaten: [
      { name: 'Rinderfilet', menge: 250, einheit: 'g' },
      { name: 'Rucola', menge: 50, einheit: 'g' },
      { name: 'Parmesan', menge: 40, einheit: 'g' },
      { name: 'Pinienkerne', menge: 2, einheit: 'EL' },
      { name: 'Zitrone', menge: 1, einheit: '' },
      { name: 'Olivenöl', menge: 4, einheit: 'EL' },
      { name: 'Salz', menge: null, einheit: 'Fleur de Sel' },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Das Rinderfilet von Sehnen befreien, fest in Frischhaltefolie wickeln und ins Gefrierfach legen.', dauer: 30, tipp: 'Leicht angefroren lässt sich das Fleisch hauchdünn schneiden.' },
      { text: 'Pinienkerne in einer Pfanne ohne Fett goldbraun rösten.', dauer: 3 },
      { text: 'Für das Dressing Zitronensaft mit Olivenöl, Salz und Pfeffer verrühren.' },
      { text: 'Das Filet mit einem sehr scharfen Messer in hauchdünne Scheiben schneiden. Die Scheiben zwischen Frischhaltefolie mit einem Topfboden noch dünner drücken.' },
      { text: 'Fleisch fächerartig auf Teller legen, mit Rucola, gehobeltem Parmesan und Pinienkernen belegen und mit dem Dressing beträufeln.' }
    ]
  },
  {
    id: 'schnitzel',
    titel: 'Wiener Schnitzel mit Erdäpfelsalat',
    kategorie: 'hauptspeise',
    schwierigkeit: 2,
    zeit: 70,
    portionen: 4,
    emoji: '🍋',
    farbe: ['#F6D365', '#E0A83A'],
    beschreibung: 'Der Klassiker: dünnes Kalbsschnitzel mit souffliertem Panier und schlotzigem Erdäpfelsalat.',
    zutaten: [
      { name: 'Kalbsschnitzel', menge: 4, einheit: 'Stück' },
      { name: 'Mehl', menge: 100, einheit: 'g' },
      { name: 'Eier', menge: 2, einheit: '' },
      { name: 'Semmelbrösel', menge: 150, einheit: 'g' },
      { name: 'Butterschmalz', menge: 300, einheit: 'g' },
      { name: 'Zitrone', menge: 1, einheit: '' },
      { name: 'Erdäpfel', menge: 1000, einheit: 'g' },
      { name: 'Zwiebel', menge: 1, einheit: '' },
      { name: 'Rindsuppe', menge: 250, einheit: 'ml' },
      { name: 'Essig', menge: 4, einheit: 'EL' },
      { name: 'Senf', menge: 1, einheit: 'TL' },
      { name: 'Schnittlauch', menge: 0.5, einheit: 'Bund' },
      { name: 'Pflanzenöl', menge: 4, einheit: 'EL' },
      { name: 'Zucker', menge: null, einheit: '1 Prise' },
      { name: 'Salz', menge: null },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Erdäpfel in der Schale in Salzwasser weich kochen.', dauer: 25 },
      { text: 'Zwiebel fein würfeln und mit Rindsuppe, Essig, Senf, Zucker, Salz und Pfeffer aufkochen.' },
      { text: 'Erdäpfel noch warm schälen, blättrig schneiden und mit der heißen Marinade übergießen. Öl dazugeben, vorsichtig mischen und ziehen lassen.', dauer: 20, tipp: 'Warme Erdäpfel saugen die Marinade besser auf – so wird der Salat richtig schlotzig.' },
      { text: 'Kalbsschnitzel zwischen Frischhaltefolie auf etwa 4 mm dünn klopfen, salzen und pfeffern.' },
      { text: 'Panierstraße vorbereiten: Mehl, verquirlte Eier und Semmelbrösel in drei Teller. Schnitzel zuerst in Mehl, dann in Ei und zuletzt in Bröseln wenden.', tipp: 'Die Brösel nicht andrücken – nur so kann das Panier beim Backen schön aufgehen.' },
      { text: 'Butterschmalz in einer großen Pfanne auf etwa 170 °C erhitzen. Schnitzel schwimmend pro Seite goldbraun backen und die Pfanne dabei leicht schwenken.', dauer: 3, tipp: 'Durch das Schwenken läuft heißes Fett über das Schnitzel und das Panier wellt sich.' },
      { text: 'Schnitzel kurz auf Küchenpapier abtropfen lassen. Mit Zitronenspalten und dem Erdäpfelsalat mit Schnittlauch servieren.' }
    ]
  },
  {
    id: 'aglio-olio',
    titel: 'Spaghetti Aglio e Olio',
    kategorie: 'hauptspeise',
    schwierigkeit: 1,
    zeit: 20,
    portionen: 2,
    emoji: '🍝',
    farbe: ['#F6D365', '#7BC67B'],
    beschreibung: 'Wenige Zutaten, großer Geschmack: Spaghetti mit Knoblauch, Chili, Olivenöl und Petersilie.',
    zutaten: [
      { name: 'Spaghetti', menge: 250, einheit: 'g' },
      { name: 'Knoblauch', menge: 4, einheit: 'Zehen' },
      { name: 'Chilischote', menge: 1, einheit: '' },
      { name: 'Petersilie', menge: 0.5, einheit: 'Bund' },
      { name: 'Olivenöl', menge: 6, einheit: 'EL' },
      { name: 'Parmesan', menge: 30, einheit: 'g' },
      { name: 'Salz', menge: null }
    ],
    schritte: [
      { text: 'Reichlich Wasser kräftig salzen und die Spaghetti darin al dente kochen.', dauer: 9 },
      { text: 'Inzwischen den Knoblauch in dünne Scheiben, die Chilischote in feine Ringe schneiden und die Petersilie hacken.' },
      { text: 'Olivenöl in einer großen Pfanne sanft erhitzen. Knoblauch und Chili bei niedriger Hitze goldgelb werden lassen.', tipp: 'Nicht braun werden lassen – dunkler Knoblauch schmeckt bitter.' },
      { text: 'Eine Tasse Nudelwasser aufheben. Spaghetti abgießen, in die Pfanne geben und mit einem Schuss Nudelwasser schwenken, bis eine cremige Sauce entsteht.' },
      { text: 'Petersilie unterheben und nach Wunsch mit frisch geriebenem Parmesan servieren.' }
    ]
  },
  {
    id: 'curry',
    titel: 'Gemüse-Curry mit Kokos',
    kategorie: 'hauptspeise',
    schwierigkeit: 1,
    zeit: 35,
    portionen: 4,
    emoji: '🍛',
    farbe: ['#F6C453', '#3FA66B'],
    beschreibung: 'Cremiges, mildes Curry mit Süßkartoffel, Kichererbsen und Spinat – dazu duftender Reis.',
    zutaten: [
      { name: 'Süßkartoffel', menge: 1, einheit: '' },
      { name: 'Paprika', menge: 1, einheit: '' },
      { name: 'Zucchini', menge: 1, einheit: '' },
      { name: 'Kichererbsen', menge: 1, einheit: 'Dose' },
      { name: 'Zwiebel', menge: 1, einheit: '' },
      { name: 'Knoblauch', menge: 2, einheit: 'Zehen' },
      { name: 'Ingwer', menge: 2, einheit: 'cm' },
      { name: 'Currypaste', menge: 2, einheit: 'EL' },
      { name: 'Kokosmilch', menge: 400, einheit: 'ml' },
      { name: 'Spinat', menge: 100, einheit: 'g' },
      { name: 'Limette', menge: 1, einheit: '' },
      { name: 'Reis', menge: 250, einheit: 'g' },
      { name: 'Pflanzenöl', menge: 2, einheit: 'EL' },
      { name: 'Salz', menge: null }
    ],
    schritte: [
      { text: 'Reis nach Packungsanleitung kochen.', dauer: 15 },
      { text: 'Süßkartoffel schälen und würfeln. Paprika und Zucchini in mundgerechte Stücke schneiden. Kichererbsen abspülen.' },
      { text: 'Zwiebel, Knoblauch und Ingwer fein hacken und in Öl anschwitzen. Currypaste dazugeben und eine Minute mitrösten.', tipp: 'Durch das Rösten entfaltet die Currypaste ihr volles Aroma.' },
      { text: 'Süßkartoffel kurz mitbraten, dann Kokosmilch und einen Schuss Wasser dazugeben und köcheln lassen.', dauer: 10 },
      { text: 'Paprika, Zucchini und Kichererbsen dazugeben und weiterköcheln, bis das Gemüse bissfest ist.', dauer: 8 },
      { text: 'Spinat unterheben, bis er zusammenfällt. Mit Limettensaft und Salz abschmecken und mit Reis servieren.' }
    ]
  },
  {
    id: 'kasnocken',
    titel: 'Pinzgauer Kasnocken',
    kategorie: 'hauptspeise',
    schwierigkeit: 2,
    zeit: 45,
    portionen: 4,
    emoji: '🧀',
    farbe: ['#F6D365', '#E8893C'],
    beschreibung: 'Hausgemachte Nocken mit würzigem Bergkäse und knusprigen Röstzwiebeln, serviert in der Pfanne.',
    zutaten: [
      { name: 'Mehl', menge: 400, einheit: 'g' },
      { name: 'Eier', menge: 4, einheit: '' },
      { name: 'Milch', menge: 150, einheit: 'ml' },
      { name: 'Bergkäse', menge: 200, einheit: 'g' },
      { name: 'Zwiebel', menge: 2, einheit: '' },
      { name: 'Butter', menge: 3, einheit: 'EL' },
      { name: 'Schnittlauch', menge: 0.5, einheit: 'Bund' },
      { name: 'Muskatnuss', menge: null, einheit: '1 Prise' },
      { name: 'Salz', menge: null }
    ],
    schritte: [
      { text: 'Mehl, Eier, Milch und eine Prise Salz zu einem zähen Teig schlagen, bis er Blasen wirft. Kurz rasten lassen.', dauer: 10 },
      { text: 'Zwiebeln in feine Ringe schneiden und in der Hälfte der Butter langsam goldbraun rösten.', dauer: 10 },
      { text: 'Bergkäse grob reiben. Einen großen Topf mit Salzwasser zum Kochen bringen.' },
      { text: 'Teig durch ein Nockerlsieb ins kochende Wasser streichen. Sobald die Nocken an der Oberfläche schwimmen, abseihen.', tipp: 'Lieber in zwei Portionen arbeiten, damit die Nocken nicht zusammenkleben.' },
      { text: 'Restliche Butter in einer Pfanne schmelzen, Nocken hineingeben und den Käse nach und nach unterheben, bis er schmilzt. Mit Muskatnuss würzen.' },
      { text: 'Mit Röstzwiebeln und Schnittlauch bestreuen und direkt in der Pfanne servieren. Dazu passt grüner Salat.' }
    ]
  },
  {
    id: 'kaiserschmarrn',
    titel: 'Kaiserschmarrn',
    kategorie: 'dessert',
    schwierigkeit: 2,
    zeit: 30,
    portionen: 4,
    emoji: '🥞',
    farbe: ['#F6D365', '#E39B4F'],
    beschreibung: 'Flaumig, karamellisiert und mit Staubzucker – dazu Apfelmus. Ein Stück Österreich.',
    zutaten: [
      { name: 'Mehl', menge: 200, einheit: 'g' },
      { name: 'Milch', menge: 400, einheit: 'ml' },
      { name: 'Eier', menge: 5, einheit: '' },
      { name: 'Zucker', menge: 40, einheit: 'g' },
      { name: 'Vanillezucker', menge: 1, einheit: 'Pkg.' },
      { name: 'Rosinen', menge: 50, einheit: 'g' },
      { name: 'Rum', menge: 2, einheit: 'EL' },
      { name: 'Butter', menge: 40, einheit: 'g' },
      { name: 'Staubzucker', menge: 2, einheit: 'EL' },
      { name: 'Apfelmus', menge: 200, einheit: 'g' },
      { name: 'Salz', menge: null, einheit: '1 Prise' }
    ],
    schritte: [
      { text: 'Rosinen in Rum einweichen. Eier trennen.' },
      { text: 'Dotter mit Milch, Mehl, Vanillezucker und einer Prise Salz glatt rühren.' },
      { text: 'Eiklar mit dem Zucker zu steifem Schnee schlagen und locker unter den Teig heben.', tipp: 'Heben statt rühren – so bleibt die Luft im Teig und der Schmarrn wird flaumig.' },
      { text: 'Butter in einer großen Pfanne schmelzen, Teig eingießen, Rosinen darüberstreuen und bei mittlerer Hitze stocken lassen.', dauer: 4 },
      { text: 'Teig vierteln, wenden und weiterbacken. Dann mit zwei Gabeln in Stücke reißen.', dauer: 3 },
      { text: 'Etwas Butter und Zucker dazugeben und den Schmarrn kurz karamellisieren. Mit Staubzucker bestreuen und mit Apfelmus servieren.' }
    ]
  },
  {
    id: 'mousse',
    titel: 'Schokoladenmousse',
    kategorie: 'dessert',
    schwierigkeit: 2,
    zeit: 25,
    ruhezeit: 180,
    portionen: 4,
    emoji: '🍫',
    farbe: ['#9A6B4B', '#3E2723'],
    beschreibung: 'Luftig-zarte Mousse aus dunkler Schokolade mit frischen Himbeeren.',
    zutaten: [
      { name: 'Zartbitterschokolade', menge: 200, einheit: 'g' },
      { name: 'Eier', menge: 4, einheit: '' },
      { name: 'Schlagobers', menge: 200, einheit: 'ml' },
      { name: 'Zucker', menge: 30, einheit: 'g' },
      { name: 'Himbeeren', menge: 100, einheit: 'g' },
      { name: 'Salz', menge: null, einheit: '1 Prise' }
    ],
    schritte: [
      { text: 'Schokolade über einem Wasserbad schmelzen und etwas abkühlen lassen.', tipp: 'Die Schokolade sollte nicht wärmer als 45 °C werden, sonst wird sie krümelig.' },
      { text: 'Eier trennen. Dotter mit der Hälfte des Zuckers cremig aufschlagen.' },
      { text: 'Schlagobers halbsteif schlagen. Eiklar mit Salz und restlichem Zucker zu steifem Schnee schlagen.' },
      { text: 'Schokolade unter die Dottercreme rühren. Dann zuerst das Obers und danach den Schnee in zwei Portionen vorsichtig unterheben.' },
      { text: 'Mousse in Gläser füllen und kalt stellen.', dauer: 180 },
      { text: 'Mit frischen Himbeeren garnieren und servieren.' }
    ]
  },
  {
    id: 'rinderfilet',
    titel: 'Rinderfilet mit Rotweinjus & Trüffelpüree',
    kategorie: 'luxury',
    schwierigkeit: 3,
    zeit: 80,
    portionen: 4,
    emoji: '🍷',
    farbe: ['#B33771', '#5B1A3C'],
    beschreibung: 'Rosa gegartes Rinderfilet, glänzende Rotweinjus und cremiges Püree mit Trüffel – ein Festessen.',
    zutaten: [
      { name: 'Rinderfilet', menge: 800, einheit: 'g' },
      { name: 'Erdäpfel', menge: 800, einheit: 'g' },
      { name: 'Butter', menge: 120, einheit: 'g' },
      { name: 'Milch', menge: 150, einheit: 'ml' },
      { name: 'Trüffelöl', menge: 1, einheit: 'TL' },
      { name: 'Trüffel', menge: 10, einheit: 'g' },
      { name: 'Schalotten', menge: 3, einheit: '' },
      { name: 'Rotwein', menge: 300, einheit: 'ml' },
      { name: 'Kalbsfond', menge: 300, einheit: 'ml' },
      { name: 'Thymian', menge: 4, einheit: 'Zweige' },
      { name: 'Rosmarin', menge: 2, einheit: 'Zweige' },
      { name: 'Knoblauch', menge: 2, einheit: 'Zehen' },
      { name: 'Pflanzenöl', menge: 2, einheit: 'EL' },
      { name: 'Salz', menge: null },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Das Filet eine Stunde vorher aus dem Kühlschrank nehmen. Ofen auf 120 °C vorheizen.', tipp: 'Zimmerwarmes Fleisch gart gleichmäßiger.' },
      { text: 'Erdäpfel schälen und in Salzwasser weich kochen.', dauer: 20 },
      { text: 'Schalotten fein würfeln, in etwas Butter anschwitzen, mit Rotwein ablöschen und auf ein Drittel einkochen.', dauer: 12 },
      { text: 'Kalbsfond dazugeben und die Jus nochmals um die Hälfte einkochen lassen.', dauer: 10 },
      { text: 'Filet salzen und in heißem Öl rundum scharf anbraten. Thymian, Rosmarin, angedrückten Knoblauch und ein Stück Butter dazugeben und das Fleisch damit übergießen.', dauer: 4, tipp: 'Dieses Übergießen mit schäumender Butter nennt man Arrosieren.' },
      { text: 'Filet im Ofen bis zu einer Kerntemperatur von 54 °C garen (medium rare).', dauer: 25, tipp: 'Ein Bratenthermometer macht das Ergebnis viel sicherer.' },
      { text: 'Erdäpfel abgießen, kurz ausdampfen lassen und durch die Presse drücken. Warme Milch und kalte Butterstücke unterrühren, mit Trüffelöl und Salz abschmecken.' },
      { text: 'Filet in Alufolie rasten lassen. Inzwischen die Jus mit einem kalten Stück Butter binden.', dauer: 8 },
      { text: 'Filet in Tranchen schneiden, mit Püree und Jus anrichten und frischen Trüffel darüberhobeln.' }
    ]
  },
  {
    id: 'jakobsmuscheln',
    titel: 'Jakobsmuscheln auf Erbsenpüree',
    kategorie: 'luxury',
    schwierigkeit: 3,
    zeit: 35,
    portionen: 4,
    emoji: '🐚',
    farbe: ['#6FC3F0', '#2F6FD6'],
    beschreibung: 'Perfekt gebratene Jakobsmuscheln auf samtigem Minz-Erbsenpüree mit Nussbutter und Prosciutto-Chip.',
    zutaten: [
      { name: 'Jakobsmuscheln', menge: 8, einheit: 'Stück' },
      { name: 'Erbsen', menge: 300, einheit: 'g' },
      { name: 'Minze', menge: 4, einheit: 'Blätter' },
      { name: 'Butter', menge: 80, einheit: 'g' },
      { name: 'Gemüsebrühe', menge: 100, einheit: 'ml' },
      { name: 'Zitrone', menge: 1, einheit: '' },
      { name: 'Prosciutto', menge: 4, einheit: 'Scheiben' },
      { name: 'Pflanzenöl', menge: 1, einheit: 'EL' },
      { name: 'Salz', menge: null },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Prosciutto auf ein Backblech legen und im Ofen bei 180 °C knusprig backen.', dauer: 9 },
      { text: 'Erbsen in der Brühe garen, dann mit Minze und einem Stück Butter fein pürieren, durch ein Sieb streichen und salzen.', dauer: 4, tipp: 'Durch das Sieb wird das Püree besonders samtig.' },
      { text: 'Für die Nussbutter die restliche Butter bei mittlerer Hitze schmelzen, bis sie hellbraun ist und nussig duftet. Einen Spritzer Zitronensaft dazugeben.' },
      { text: 'Jakobsmuscheln gut trocken tupfen und salzen. In einer sehr heißen Pfanne mit wenig Öl pro Seite kurz braten.', dauer: 1.5, tipp: 'Nicht bewegen! Nur so entsteht die goldene Kruste.' },
      { text: 'Püree als Spiegel auf Teller streichen, Muscheln daraufsetzen, mit Nussbutter beträufeln und den Prosciutto-Chip darüberbröseln.' }
    ]
  },
  {
    id: 'saibling',
    titel: 'Confierter Saibling, Fenchel & Beurre blanc',
    kategorie: 'sterne',
    schwierigkeit: 4,
    zeit: 70,
    portionen: 4,
    emoji: '🐟',
    farbe: ['#8FD8C0', '#2F7F70'],
    beschreibung: 'Bei 50 °C in Olivenöl gegarter Saibling – glasig und zart – mit geschmortem Fenchel, Fenchelsalat und klassischer Buttersauce.',
    zutaten: [
      { name: 'Saibling', menge: 4, einheit: 'Filets' },
      { name: 'Fenchel', menge: 2, einheit: 'Knollen' },
      { name: 'Orange', menge: 1, einheit: '' },
      { name: 'Olivenöl', menge: 500, einheit: 'ml' },
      { name: 'Schalotten', menge: 2, einheit: '' },
      { name: 'Weißwein', menge: 100, einheit: 'ml' },
      { name: 'Essig', menge: 2, einheit: 'EL' },
      { name: 'Butter', menge: 150, einheit: 'g' },
      { name: 'Dill', menge: 0.5, einheit: 'Bund' },
      { name: 'Salz', menge: null, einheit: 'Fleur de Sel' }
    ],
    schritte: [
      { text: 'Eine Fenchelknolle hauchdünn hobeln und in Eiswasser legen. Die zweite in Spalten schneiden, mit Orangensaft, etwas Öl und Salz in eine Form geben und im Ofen bei 180 °C schmoren.', dauer: 25 },
      { text: 'Für die Beurre blanc Schalotten fein würfeln und mit Weißwein und Essig fast vollständig einkochen.', dauer: 8 },
      { text: 'Hitze reduzieren und die kalte Butter in Würfeln nach und nach einschwenken. Salzen und warm halten.', tipp: 'Die Sauce darf nicht kochen – über 65 °C trennt sie sich.' },
      { text: 'Olivenöl in einem kleinen Topf auf genau 50 °C erwärmen.', tipp: 'Ohne Thermometer geht es hier nicht – die Temperatur ist das Geheimnis.' },
      { text: 'Saiblingsfilets ohne Haut leicht salzen und im warmen Öl confieren, bis sie glasig und zart sind.', dauer: 12 },
      { text: 'Gehobelten Fenchel abtropfen lassen und mit Orangenzesten, etwas Öl und Salz marinieren.' },
      { text: 'Geschmorten Fenchel anrichten, Saibling daraufsetzen, mit Beurre blanc umgießen, Fenchelsalat und Dill darauf verteilen und mit Fleur de Sel vollenden.' }
    ]
  },
  {
    id: 'fondant',
    titel: 'Schokoladen-Fondant mit Salzkaramell',
    kategorie: 'sterne',
    schwierigkeit: 3,
    zeit: 40,
    portionen: 4,
    emoji: '🌋',
    farbe: ['#D4A373', '#4E342E'],
    beschreibung: 'Außen zart, innen flüssig – mit selbst gemachtem Salzkaramell.',
    zutaten: [
      { name: 'Zartbitterschokolade', menge: 150, einheit: 'g' },
      { name: 'Butter', menge: 130, einheit: 'g' },
      { name: 'Eier', menge: 3, einheit: '' },
      { name: 'Zucker', menge: 150, einheit: 'g' },
      { name: 'Mehl', menge: 30, einheit: 'g' },
      { name: 'Kakaopulver', menge: 1, einheit: 'EL' },
      { name: 'Schlagobers', menge: 100, einheit: 'ml' },
      { name: 'Salz', menge: null, einheit: 'Fleur de Sel' }
    ],
    schritte: [
      { text: 'Ofen auf 200 °C vorheizen. Vier Förmchen buttern und mit Kakao ausstäuben.' },
      { text: 'Schokolade mit dem Großteil der Butter über dem Wasserbad schmelzen.' },
      { text: 'Eier mit etwa 60 g Zucker schaumig schlagen.', dauer: 5 },
      { text: 'Schokolade unterrühren, Mehl darübersieben und vorsichtig unterheben. Masse in die Förmchen füllen.', tipp: 'Die gefüllten Förmchen kannst du auch Stunden vorher vorbereiten und kalt stellen.' },
      { text: 'Für das Karamell den restlichen Zucker ohne Rühren goldbraun schmelzen. Vom Herd nehmen, warmes Obers vorsichtig einrühren, restliche Butter und Fleur de Sel dazugeben.', tipp: 'Vorsicht, das Karamell spritzt beim Obers-Eingießen!' },
      { text: 'Fondants backen, bis der Rand fest und die Mitte noch weich ist.', dauer: 11 },
      { text: 'Eine Minute ruhen lassen, auf Teller stürzen und mit dem Salzkaramell servieren.' }
    ]
  },

  /* ===== Vorspeisen ===== */
  {
    id: 'caprese',
    titel: 'Caprese mit Burrata',
    kategorie: 'vorspeise',
    schwierigkeit: 1,
    zeit: 10,
    portionen: 4,
    emoji: '🧀',
    farbe: ['#F28B82', '#7BC67B'],
    beschreibung: 'Reife Tomaten, cremige Burrata, Basilikum und ein Schuss Balsamico – Sommer auf dem Teller.',
    zutaten: [
      { name: 'Tomaten', menge: 4, einheit: '' },
      { name: 'Burrata', menge: 2, einheit: 'Stück' },
      { name: 'Basilikum', menge: 0.5, einheit: 'Bund' },
      { name: 'Balsamico', menge: 2, einheit: 'EL' },
      { name: 'Olivenöl', menge: 4, einheit: 'EL' },
      { name: 'Salz', menge: null, einheit: 'Fleur de Sel' },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Tomaten waschen und in Scheiben oder Spalten schneiden. Auf einer Platte auslegen und leicht salzen.', tipp: 'Tomaten nie aus dem Kühlschrank verwenden – zimmerwarm schmecken sie viel aromatischer.' },
      { text: 'Burrata abtropfen lassen und in die Mitte setzen. Erst bei Tisch aufreißen, damit die cremige Füllung herausläuft.' },
      { text: 'Basilikumblätter darüberzupfen, mit Olivenöl und Balsamico beträufeln und mit Pfeffer und Fleur de Sel vollenden.' }
    ]
  },
  {
    id: 'frittatensuppe',
    titel: 'Frittatensuppe',
    kategorie: 'vorspeise',
    schwierigkeit: 1,
    zeit: 30,
    portionen: 4,
    emoji: '🥣',
    farbe: ['#F6D365', '#C98B3C'],
    beschreibung: 'Kräftige Rindsuppe mit feinen Palatschinken-Streifen und Schnittlauch – der Wirtshaus-Klassiker.',
    zutaten: [
      { name: 'Mehl', menge: 100, einheit: 'g' },
      { name: 'Milch', menge: 200, einheit: 'ml' },
      { name: 'Eier', menge: 2, einheit: '' },
      { name: 'Rindsuppe', menge: 1000, einheit: 'ml' },
      { name: 'Schnittlauch', menge: 0.5, einheit: 'Bund' },
      { name: 'Butter', menge: 1, einheit: 'EL' },
      { name: 'Muskatnuss', menge: null, einheit: '1 Prise' },
      { name: 'Salz', menge: null }
    ],
    schritte: [
      { text: 'Mehl, Milch, Eier und eine Prise Salz zu einem glatten, eher dünnen Teig verrühren und kurz quellen lassen.', dauer: 10 },
      { text: 'Etwas Butter in einer Pfanne erhitzen und aus dem Teig hauchdünne Palatschinken backen.', tipp: 'Die Pfanne schwenken, damit sich der Teig ganz dünn verteilt.' },
      { text: 'Palatschinken auskühlen lassen, eng einrollen und in feine Streifen schneiden.' },
      { text: 'Rindsuppe aufkochen und mit Salz und Muskatnuss abschmecken.' },
      { text: 'Frittaten in Teller verteilen, mit heißer Suppe übergießen und mit Schnittlauch bestreuen.' }
    ]
  },
  {
    id: 'champignons',
    titel: 'Gebackene Champignons mit Sauce Tartare',
    kategorie: 'vorspeise',
    schwierigkeit: 2,
    zeit: 35,
    portionen: 4,
    emoji: '🍄',
    farbe: ['#D7B98E', '#8D6E63'],
    beschreibung: 'Knusprig panierte Champignons mit hausgemachter Sauce Tartare.',
    zutaten: [
      { name: 'Champignons', menge: 400, einheit: 'g' },
      { name: 'Mehl', menge: 80, einheit: 'g' },
      { name: 'Eier', menge: 2, einheit: '' },
      { name: 'Semmelbrösel', menge: 120, einheit: 'g' },
      { name: 'Pflanzenöl', menge: 500, einheit: 'ml' },
      { name: 'Mayonnaise', menge: 150, einheit: 'g' },
      { name: 'Essiggurken', menge: 3, einheit: '' },
      { name: 'Kapern', menge: 1, einheit: 'EL' },
      { name: 'Petersilie', menge: 0.5, einheit: 'Bund' },
      { name: 'Zitrone', menge: 0.5, einheit: '' },
      { name: 'Salz', menge: null }
    ],
    schritte: [
      { text: 'Für die Sauce Tartare Essiggurken, Kapern und Petersilie fein hacken und mit Mayonnaise und einem Spritzer Zitronensaft verrühren. Kalt stellen.' },
      { text: 'Champignons putzen – nicht waschen, nur mit Küchenpapier abreiben – und leicht salzen.', tipp: 'Gewaschene Pilze saugen sich mit Wasser voll und spritzen beim Backen.' },
      { text: 'Pilze nacheinander in Mehl, verquirlten Eiern und Semmelbröseln wenden.' },
      { text: 'Öl in einem Topf auf etwa 170 °C erhitzen und die Champignons portionsweise goldbraun backen.', dauer: 4 },
      { text: 'Auf Küchenpapier abtropfen lassen und heiß mit der Sauce Tartare und Zitronenspalten servieren.' }
    ]
  },
  {
    id: 'ziegenkaese',
    titel: 'Ziegenkäse im Speckmantel mit Honig',
    kategorie: 'vorspeise',
    schwierigkeit: 1,
    zeit: 20,
    portionen: 4,
    emoji: '🍯',
    farbe: ['#F6C453', '#A0522D'],
    beschreibung: 'Warmer Ziegenkäse, knuspriger Speck und Honig auf Rucola mit gerösteten Walnüssen.',
    zutaten: [
      { name: 'Ziegenkäse', menge: 4, einheit: 'Taler' },
      { name: 'Speck', menge: 8, einheit: 'Scheiben' },
      { name: 'Honig', menge: 2, einheit: 'EL' },
      { name: 'Rucola', menge: 80, einheit: 'g' },
      { name: 'Walnüsse', menge: 40, einheit: 'g' },
      { name: 'Balsamico', menge: 2, einheit: 'EL' },
      { name: 'Olivenöl', menge: 3, einheit: 'EL' },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Ofen auf 200 °C vorheizen. Jeden Ziegenkäsetaler mit zwei Scheiben Speck umwickeln.' },
      { text: 'Auf ein Backblech legen und backen, bis der Speck knusprig und der Käse weich ist.', dauer: 10 },
      { text: 'Inzwischen die Walnüsse grob hacken und in einer Pfanne ohne Fett rösten.', dauer: 3 },
      { text: 'Rucola mit Olivenöl und Balsamico marinieren und auf Teller verteilen.' },
      { text: 'Ziegenkäse daraufsetzen, mit Honig beträufeln, Walnüsse darüberstreuen und mit Pfeffer würzen.' }
    ]
  },
  {
    id: 'lachstatar',
    titel: 'Lachstatar mit Avocado',
    kategorie: 'vorspeise',
    schwierigkeit: 2,
    zeit: 25,
    portionen: 4,
    emoji: '🥑',
    farbe: ['#FFA07A', '#6BAF5B'],
    beschreibung: 'Frischer Lachs mit Limette und Dill, geschichtet auf cremiger Avocado.',
    zutaten: [
      { name: 'Lachs', menge: 300, einheit: 'g' },
      { name: 'Avocado', menge: 2, einheit: '' },
      { name: 'Limette', menge: 1, einheit: '' },
      { name: 'Schalotten', menge: 1, einheit: '' },
      { name: 'Dill', menge: 0.5, einheit: 'Bund' },
      { name: 'Olivenöl', menge: 2, einheit: 'EL' },
      { name: 'Salz', menge: null },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Lachs (in Sushi-Qualität) mit einem scharfen Messer in kleine Würfel schneiden und kalt stellen.', tipp: 'Frag beim Fischhändler nach Sushi-Qualität – der Lachs wird roh gegessen.' },
      { text: 'Schalotte sehr fein würfeln, Dill hacken. Mit Lachs, Olivenöl, etwas Limettensaft, Salz und Pfeffer vermengen.' },
      { text: 'Avocados halbieren, Fruchtfleisch würfeln, mit restlichem Limettensaft und Salz marinieren.' },
      { text: 'Einen Servierring auf den Teller stellen, zuerst Avocado, dann Lachstatar einfüllen und leicht andrücken. Ring vorsichtig abziehen und mit Dill garnieren.' }
    ]
  },

  /* ===== Hauptspeisen ===== */
  {
    id: 'bolognese',
    titel: 'Spaghetti Bolognese',
    kategorie: 'hauptspeise',
    schwierigkeit: 1,
    zeit: 30,
    ruhezeit: 60,
    portionen: 4,
    emoji: '🍅',
    farbe: ['#E5534B', '#F2A65A'],
    beschreibung: 'Langsam geschmorte Fleischsauce mit Rotwein – je länger sie köchelt, desto besser.',
    zutaten: [
      { name: 'Spaghetti', menge: 500, einheit: 'g' },
      { name: 'Faschiertes', menge: 500, einheit: 'g' },
      { name: 'Zwiebel', menge: 1, einheit: '' },
      { name: 'Karotte', menge: 1, einheit: '' },
      { name: 'Sellerie', menge: 1, einheit: 'Stange' },
      { name: 'Knoblauch', menge: 2, einheit: 'Zehen' },
      { name: 'Passierte Tomaten', menge: 500, einheit: 'ml' },
      { name: 'Tomatenmark', menge: 2, einheit: 'EL' },
      { name: 'Rotwein', menge: 150, einheit: 'ml' },
      { name: 'Olivenöl', menge: 3, einheit: 'EL' },
      { name: 'Parmesan', menge: 50, einheit: 'g' },
      { name: 'Salz', menge: null },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Zwiebel, Karotte, Sellerie und Knoblauch sehr fein würfeln.' },
      { text: 'Olivenöl in einem breiten Topf erhitzen und das Faschierte darin krümelig und kräftig braun anbraten.', dauer: 8, tipp: 'Nicht zu viel auf einmal in den Topf – das Fleisch soll braten, nicht kochen.' },
      { text: 'Gemüse dazugeben und mitbraten, bis es weich ist. Tomatenmark einrühren und kurz mitrösten.', dauer: 5 },
      { text: 'Mit Rotwein ablöschen und einkochen lassen. Passierte Tomaten dazugeben, salzen, pfeffern und zugedeckt bei kleiner Hitze schmoren.', dauer: 60 },
      { text: 'Spaghetti in reichlich Salzwasser al dente kochen.', dauer: 9 },
      { text: 'Spaghetti mit der Sauce vermengen und mit frisch geriebenem Parmesan servieren.' }
    ]
  },
  {
    id: 'gulasch',
    titel: 'Rindsgulasch',
    kategorie: 'hauptspeise',
    schwierigkeit: 2,
    zeit: 30,
    ruhezeit: 150,
    portionen: 4,
    emoji: '🥘',
    farbe: ['#D9534F', '#7B2D26'],
    beschreibung: 'Saftiges Wiener Saftgulasch mit viel Zwiebel und Paprika – am besten am nächsten Tag aufgewärmt.',
    zutaten: [
      { name: 'Rindfleisch', menge: 1000, einheit: 'g' },
      { name: 'Zwiebel', menge: 4, einheit: '' },
      { name: 'Paprikapulver', menge: 3, einheit: 'EL' },
      { name: 'Tomatenmark', menge: 1, einheit: 'EL' },
      { name: 'Knoblauch', menge: 2, einheit: 'Zehen' },
      { name: 'Kümmel', menge: 1, einheit: 'TL' },
      { name: 'Majoran', menge: 1, einheit: 'TL' },
      { name: 'Essig', menge: 1, einheit: 'EL' },
      { name: 'Pflanzenöl', menge: 4, einheit: 'EL' },
      { name: 'Salz', menge: null }
    ],
    schritte: [
      { text: 'Rindfleisch (Wadschinken) in etwa 4 cm große Würfel schneiden. Zwiebeln halbieren und in feine Streifen schneiden.' },
      { text: 'Öl in einem schweren Topf erhitzen und die Zwiebeln langsam goldbraun rösten.', dauer: 15, tipp: 'Die Zwiebeln sind das Geheimnis: Sie zerfallen später und binden die Sauce ganz von selbst.' },
      { text: 'Topf kurz vom Herd nehmen, Paprikapulver und Tomatenmark einrühren und sofort mit Essig und einem Schuss Wasser ablöschen.', tipp: 'Paprika verbrennt sehr schnell und wird dann bitter – deshalb vom Herd nehmen.' },
      { text: 'Fleisch, gehackten Knoblauch, Kümmel, Majoran und Salz dazugeben. Knapp mit Wasser bedecken und zugedeckt bei kleiner Hitze schmoren, bis das Fleisch weich ist.', dauer: 150 },
      { text: 'Deckel abnehmen und die Sauce etwas einkochen lassen. Mit Salz abschmecken und mit Semmeln oder Nockerln servieren.' }
    ]
  },
  {
    id: 'lachs-dill',
    titel: 'Lachs mit Zitronen-Dill-Sauce',
    kategorie: 'hauptspeise',
    schwierigkeit: 1,
    zeit: 30,
    portionen: 4,
    emoji: '🐠',
    farbe: ['#FFA07A', '#E8735A'],
    beschreibung: 'Saftiges Lachsfilet mit knuspriger Haut, cremiger Dillsauce und Reis.',
    zutaten: [
      { name: 'Lachs', menge: 4, einheit: 'Filets' },
      { name: 'Reis', menge: 250, einheit: 'g' },
      { name: 'Schlagobers', menge: 200, einheit: 'ml' },
      { name: 'Weißwein', menge: 100, einheit: 'ml' },
      { name: 'Dill', menge: 1, einheit: 'Bund' },
      { name: 'Zitrone', menge: 1, einheit: '' },
      { name: 'Butter', menge: 1, einheit: 'EL' },
      { name: 'Pflanzenöl', menge: 1, einheit: 'EL' },
      { name: 'Salz', menge: null },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Reis nach Packungsanleitung kochen.', dauer: 15 },
      { text: 'Lachsfilets trocken tupfen und salzen. In einer Pfanne mit Öl auf der Hautseite braten, bis die Haut knusprig ist.', dauer: 5, tipp: 'Den Lachs dabei nicht bewegen und die Haut leicht andrücken, damit sie flach bleibt.' },
      { text: 'Wenden, Butter dazugeben und noch kurz fertig garen. Herausnehmen und warm halten.', dauer: 2 },
      { text: 'Bratrückstand mit Weißwein ablöschen, Schlagobers dazugeben und cremig einkochen. Mit gehacktem Dill, Zitronensaft, Salz und Pfeffer abschmecken.' },
      { text: 'Lachs mit Reis und Sauce anrichten und mit Zitronenspalten servieren.' }
    ]
  },
  {
    id: 'ofenhendl',
    titel: 'Ofenhendl mit Wurzelgemüse',
    kategorie: 'hauptspeise',
    schwierigkeit: 1,
    zeit: 20,
    ruhezeit: 70,
    portionen: 4,
    emoji: '🍗',
    farbe: ['#F6C453', '#C0612B'],
    beschreibung: 'Knuspriges Brathendl mit Rosmarin-Erdäpfeln und Karotten – alles aus einem Blech.',
    zutaten: [
      { name: 'Huhn', menge: 1, einheit: 'ganzes' },
      { name: 'Erdäpfel', menge: 800, einheit: 'g' },
      { name: 'Karotte', menge: 4, einheit: '' },
      { name: 'Zwiebel', menge: 2, einheit: '' },
      { name: 'Knoblauch', menge: 1, einheit: 'Knolle' },
      { name: 'Rosmarin', menge: 3, einheit: 'Zweige' },
      { name: 'Paprikapulver', menge: 1, einheit: 'EL' },
      { name: 'Zitrone', menge: 1, einheit: '' },
      { name: 'Olivenöl', menge: 5, einheit: 'EL' },
      { name: 'Salz', menge: null },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Ofen auf 200 °C Umluft vorheizen. Huhn innen und außen trocken tupfen.' },
      { text: 'Olivenöl mit Paprikapulver, Salz und Pfeffer verrühren und das Huhn rundum damit einreiben. Halbierte Zitrone und einen Rosmarinzweig in die Bauchhöhle stecken.' },
      { text: 'Erdäpfel und Karotten in grobe Stücke, Zwiebeln in Spalten schneiden. Mit Knoblauchzehen, restlichem Rosmarin, Öl und Salz auf einem Blech vermengen.' },
      { text: 'Huhn mit der Brust nach oben auf das Gemüse setzen und braten, bis die Haut goldbraun und knusprig ist.', dauer: 70, tipp: 'Fertig ist das Huhn, wenn beim Einstechen in die Keule klarer Saft austritt (Kerntemperatur 75 °C).' },
      { text: 'Huhn kurz rasten lassen, zerteilen und mit dem Gemüse servieren.', dauer: 5 }
    ]
  },
  {
    id: 'risotto',
    titel: 'Pilzrisotto',
    kategorie: 'hauptspeise',
    schwierigkeit: 2,
    zeit: 40,
    portionen: 4,
    emoji: '🍚',
    farbe: ['#E6D3A3', '#8D6E63'],
    beschreibung: 'Cremiges Risotto mit gebratenen Champignons, Parmesan und Petersilie.',
    zutaten: [
      { name: 'Risottoreis', menge: 300, einheit: 'g' },
      { name: 'Champignons', menge: 400, einheit: 'g' },
      { name: 'Schalotten', menge: 2, einheit: '' },
      { name: 'Weißwein', menge: 150, einheit: 'ml' },
      { name: 'Gemüsebrühe', menge: 1000, einheit: 'ml' },
      { name: 'Butter', menge: 60, einheit: 'g' },
      { name: 'Parmesan', menge: 60, einheit: 'g' },
      { name: 'Petersilie', menge: 0.5, einheit: 'Bund' },
      { name: 'Olivenöl', menge: 3, einheit: 'EL' },
      { name: 'Salz', menge: null },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Gemüsebrühe in einem Topf heiß halten. Schalotten fein würfeln, Champignons in Scheiben schneiden.' },
      { text: 'Champignons in einer heißen Pfanne mit Olivenöl kräftig anbraten, salzen und beiseitestellen.', dauer: 5 },
      { text: 'Schalotten in etwas Olivenöl glasig anschwitzen, Reis dazugeben und unter Rühren glasig werden lassen. Mit Weißwein ablöschen.' },
      { text: 'Nach und nach heiße Brühe angießen und immer wieder rühren, bis der Reis cremig und noch leicht bissfest ist.', dauer: 18, tipp: 'Immer nur so viel Brühe nachgießen, dass der Reis knapp bedeckt ist.' },
      { text: 'Topf vom Herd nehmen, Pilze, kalte Butter und geriebenen Parmesan kräftig unterrühren. Kurz zugedeckt ruhen lassen.', dauer: 2, tipp: 'Dieses Einrühren heißt „Mantecare“ und macht das Risotto so schön schlotzig.' },
      { text: 'Mit Salz, Pfeffer und gehackter Petersilie abschmecken und sofort servieren.' }
    ]
  },

  /* ===== Desserts ===== */
  {
    id: 'apfelstrudel',
    titel: 'Apfelstrudel',
    kategorie: 'dessert',
    schwierigkeit: 2,
    zeit: 35,
    ruhezeit: 35,
    portionen: 6,
    emoji: '🍎',
    farbe: ['#F2A65A', '#B5651D'],
    beschreibung: 'Hauchdünner Teig, saftige Äpfel, Zimt und Rosinen – noch warm mit Staubzucker.',
    zutaten: [
      { name: 'Strudelteig', menge: 1, einheit: 'Packung' },
      { name: 'Äpfel', menge: 1000, einheit: 'g' },
      { name: 'Zucker', menge: 80, einheit: 'g' },
      { name: 'Zimt', menge: 1, einheit: 'TL' },
      { name: 'Rosinen', menge: 50, einheit: 'g' },
      { name: 'Semmelbrösel', menge: 60, einheit: 'g' },
      { name: 'Butter', menge: 100, einheit: 'g' },
      { name: 'Zitrone', menge: 0.5, einheit: '' },
      { name: 'Staubzucker', menge: 2, einheit: 'EL' }
    ],
    schritte: [
      { text: 'Ofen auf 190 °C vorheizen. Äpfel schälen, entkernen, blättrig schneiden und mit Zucker, Zimt, Rosinen und Zitronensaft mischen.' },
      { text: 'Die Hälfte der Butter schmelzen. In der restlichen Butter die Semmelbrösel goldbraun rösten.', dauer: 3 },
      { text: 'Strudelteig auf einem bemehlten Küchentuch auslegen und mit flüssiger Butter bestreichen.' },
      { text: 'Brösel auf dem unteren Drittel verteilen, Äpfel daraufgeben. Seiten einschlagen und den Strudel mithilfe des Tuchs einrollen.', tipp: 'Die Brösel saugen den Apfelsaft auf, damit der Teig unten knusprig bleibt.' },
      { text: 'Strudel mit der Naht nach unten auf ein Blech legen, mit Butter bestreichen und goldbraun backen.', dauer: 35 },
      { text: 'Etwas abkühlen lassen, mit Staubzucker bestreuen und lauwarm servieren – gerne mit Vanilleeis oder Schlagobers.' }
    ]
  },
  {
    id: 'panna-cotta',
    titel: 'Panna cotta mit Himbeeren',
    kategorie: 'dessert',
    schwierigkeit: 1,
    zeit: 15,
    ruhezeit: 240,
    portionen: 4,
    emoji: '🍮',
    farbe: ['#F8C8D0', '#D6336C'],
    beschreibung: 'Zart gestockte Vanillecreme mit frischer Himbeersauce.',
    zutaten: [
      { name: 'Schlagobers', menge: 400, einheit: 'ml' },
      { name: 'Milch', menge: 100, einheit: 'ml' },
      { name: 'Zucker', menge: 60, einheit: 'g' },
      { name: 'Vanilleschote', menge: 1, einheit: '' },
      { name: 'Gelatine', menge: 3, einheit: 'Blatt' },
      { name: 'Himbeeren', menge: 250, einheit: 'g' },
      { name: 'Staubzucker', menge: 2, einheit: 'EL' }
    ],
    schritte: [
      { text: 'Gelatine in kaltem Wasser einweichen.', dauer: 5 },
      { text: 'Vanilleschote längs aufschneiden und das Mark herauskratzen. Schlagobers, Milch, Zucker, Mark und Schote aufkochen und leise köcheln lassen.', dauer: 5 },
      { text: 'Vom Herd nehmen, Schote entfernen und die ausgedrückte Gelatine einrühren, bis sie sich aufgelöst hat.' },
      { text: 'Creme in Gläser oder Förmchen füllen und kalt stellen, bis sie fest ist.', dauer: 240 },
      { text: 'Himbeeren mit Staubzucker pürieren und durch ein Sieb streichen. Über die Panna cotta geben und mit ganzen Beeren garnieren.' }
    ]
  },
  {
    id: 'topfenknoedel',
    titel: 'Topfenknödel mit Butterbröseln',
    kategorie: 'dessert',
    schwierigkeit: 2,
    zeit: 40,
    ruhezeit: 30,
    portionen: 4,
    emoji: '🍡',
    farbe: ['#F6E7C1', '#D4A373'],
    beschreibung: 'Flaumige Knödel aus Topfen, gewälzt in süßen Butterbröseln.',
    zutaten: [
      { name: 'Topfen', menge: 500, einheit: 'g' },
      { name: 'Butter', menge: 110, einheit: 'g' },
      { name: 'Eier', menge: 2, einheit: '' },
      { name: 'Grieß', menge: 120, einheit: 'g' },
      { name: 'Semmelbrösel', menge: 100, einheit: 'g' },
      { name: 'Zucker', menge: 50, einheit: 'g' },
      { name: 'Vanillezucker', menge: 1, einheit: 'Pkg.' },
      { name: 'Zitrone', menge: 1, einheit: '' },
      { name: 'Staubzucker', menge: 2, einheit: 'EL' },
      { name: 'Salz', menge: null, einheit: '1 Prise' }
    ],
    schritte: [
      { text: '50 g weiche Butter mit Vanillezucker, einer Prise Salz und abgeriebener Zitronenschale schaumig rühren. Eier nach und nach einrühren.' },
      { text: 'Topfen und Grieß unterrühren und die Masse zugedeckt kalt stellen.', dauer: 30, tipp: 'Der Grieß braucht die Zeit zum Quellen – sonst fallen die Knödel auseinander.' },
      { text: 'Mit nassen Händen etwa 12 Knödel formen. In leicht siedendem Salzwasser ziehen lassen, bis sie aufsteigen.', dauer: 12 },
      { text: 'Inzwischen restliche Butter schmelzen, Brösel und Zucker darin goldbraun rösten.', dauer: 4 },
      { text: 'Knödel mit einem Schaumlöffel herausheben, in den Bröseln wälzen und mit Staubzucker bestreuen. Dazu passt Zwetschkenröster.' }
    ]
  },
  {
    id: 'tiramisu',
    titel: 'Tiramisu',
    kategorie: 'dessert',
    schwierigkeit: 1,
    zeit: 30,
    ruhezeit: 240,
    portionen: 6,
    emoji: '☕',
    farbe: ['#C8A27A', '#4E342E'],
    beschreibung: 'Der italienische Klassiker mit Mascarpone, Espresso und Kakao.',
    zutaten: [
      { name: 'Mascarpone', menge: 500, einheit: 'g' },
      { name: 'Eier', menge: 4, einheit: '' },
      { name: 'Zucker', menge: 80, einheit: 'g' },
      { name: 'Biskotten', menge: 200, einheit: 'g' },
      { name: 'Espresso', menge: 300, einheit: 'ml' },
      { name: 'Amaretto', menge: 3, einheit: 'EL' },
      { name: 'Kakaopulver', menge: 2, einheit: 'EL' }
    ],
    schritte: [
      { text: 'Espresso kochen, abkühlen lassen und mit Amaretto mischen.' },
      { text: 'Eier trennen. Dotter mit Zucker hell und cremig aufschlagen, dann Mascarpone unterrühren.', dauer: 5 },
      { text: 'Eiklar zu steifem Schnee schlagen und vorsichtig unter die Mascarponecreme heben.' },
      { text: 'Biskotten kurz in den Espresso tauchen und eine Form damit auslegen. Die Hälfte der Creme darauf verteilen. Vorgang wiederholen.', tipp: 'Nur ganz kurz eintauchen – sonst werden die Biskotten matschig.' },
      { text: 'Tiramisu zugedeckt kalt stellen, am besten über Nacht.', dauer: 240 },
      { text: 'Vor dem Servieren dick mit Kakao bestäuben.' }
    ]
  },
  {
    id: 'creme-brulee',
    titel: 'Crème brûlée',
    kategorie: 'dessert',
    schwierigkeit: 2,
    zeit: 20,
    ruhezeit: 220,
    portionen: 4,
    emoji: '🔥',
    farbe: ['#F6D365', '#C8762E'],
    beschreibung: 'Seidige Vanillecreme unter einer knackenden Karamellkruste.',
    zutaten: [
      { name: 'Schlagobers', menge: 400, einheit: 'ml' },
      { name: 'Eier', menge: 4, einheit: 'Dotter' },
      { name: 'Zucker', menge: 80, einheit: 'g' },
      { name: 'Vanilleschote', menge: 1, einheit: '' }
    ],
    schritte: [
      { text: 'Ofen auf 150 °C vorheizen. Obers mit Vanillemark und Schote aufkochen, vom Herd nehmen und kurz ziehen lassen.', dauer: 10 },
      { text: 'Dotter mit 50 g Zucker verrühren – nicht schaumig schlagen. Das warme Obers ohne Schote langsam unterrühren.', tipp: 'Möglichst keine Luft einrühren, sonst bekommt die Creme Blasen.' },
      { text: 'Creme in flache Förmchen füllen und in ein tiefes Blech stellen. Heißes Wasser bis zur halben Höhe angießen und im Ofen stocken lassen.', dauer: 40 },
      { text: 'Auskühlen lassen und kalt stellen.', dauer: 180 },
      { text: 'Kurz vor dem Servieren den restlichen Zucker dünn darüberstreuen und mit einem Bunsenbrenner karamellisieren, bis er goldbraun ist.', tipp: 'Ohne Brenner: Förmchen ganz oben unter den heißen Grill stellen und dabei bleiben.' }
    ]
  },

  /* ===== Luxury ===== */
  {
    id: 'hummer',
    titel: 'Hummer mit Knoblauchbutter',
    kategorie: 'luxury',
    schwierigkeit: 3,
    zeit: 40,
    portionen: 2,
    emoji: '🦞',
    farbe: ['#FF7F50', '#B22222'],
    beschreibung: 'Halbierter Hummer, unter dem Grill mit Kräuter-Knoblauchbutter gratiniert, dazu knuspriges Baguette.',
    zutaten: [
      { name: 'Hummer', menge: 1, einheit: 'Stück (ca. 700 g)' },
      { name: 'Butter', menge: 100, einheit: 'g' },
      { name: 'Knoblauch', menge: 3, einheit: 'Zehen' },
      { name: 'Petersilie', menge: 0.5, einheit: 'Bund' },
      { name: 'Zitrone', menge: 1, einheit: '' },
      { name: 'Baguette', menge: 1, einheit: '' },
      { name: 'Salz', menge: null },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Einen großen Topf mit stark gesalzenem Wasser zum Sprudeln bringen. Den Hummer kopfüber hineingeben und garen.', dauer: 6, tipp: 'Faustregel: etwa 8 Minuten pro Kilo – der Hummer wird unter dem Grill noch fertig gegart.' },
      { text: 'Hummer in Eiswasser abschrecken, damit er nicht weitergart.', dauer: 2 },
      { text: 'Butter weich rühren und mit gepresstem Knoblauch, gehackter Petersilie, Zitronenschale, Salz und Pfeffer verkneten.' },
      { text: 'Hummer mit einem großen Messer der Länge nach halbieren, Darm und Magen entfernen. Scheren knacken.' },
      { text: 'Hummerhälften mit der Schnittfläche nach oben aufs Blech legen, dick mit Knoblauchbutter bestreichen und unter dem heißen Grill gratinieren.', dauer: 5 },
      { text: 'Mit Zitronenspalten und warmem Baguette servieren – die geschmolzene Butter zum Auftunken nicht vergessen.' }
    ]
  },
  {
    id: 'trueffel-tagliatelle',
    titel: 'Tagliatelle mit weißem Trüffel',
    kategorie: 'luxury',
    schwierigkeit: 2,
    zeit: 20,
    portionen: 2,
    emoji: '🍄',
    farbe: ['#E6D3A3', '#6D5A3F'],
    beschreibung: 'Puristisch und edel: frische Pasta, Butter, Parmesan – und großzügig gehobelter Trüffel.',
    zutaten: [
      { name: 'Tagliatelle', menge: 250, einheit: 'g' },
      { name: 'Trüffel', menge: 15, einheit: 'g' },
      { name: 'Butter', menge: 60, einheit: 'g' },
      { name: 'Parmesan', menge: 50, einheit: 'g' },
      { name: 'Salz', menge: null },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Trüffel mit einer weichen Bürste vorsichtig säubern.', tipp: 'Trüffel nie waschen – er saugt Wasser auf und verliert sein Aroma.' },
      { text: 'Frische Tagliatelle in reichlich Salzwasser bissfest kochen.', dauer: 3 },
      { text: 'Butter in einer großen Pfanne schmelzen. Pasta tropfnass hineingeben, mit einem Schuss Nudelwasser und geriebenem Parmesan zu einer glänzenden Sauce schwenken.' },
      { text: 'Auf vorgewärmte Teller geben, pfeffern und den Trüffel am Tisch hauchdünn darüberhobeln.' }
    ]
  },
  {
    id: 'wellington',
    titel: 'Beef Wellington',
    kategorie: 'luxury',
    schwierigkeit: 4,
    zeit: 90,
    ruhezeit: 30,
    portionen: 6,
    emoji: '🥐',
    farbe: ['#E0A458', '#7B3F00'],
    beschreibung: 'Rinderfilet in Pilz-Duxelles, Prosciutto und goldenem Blätterteig – der Showstopper für Festtage.',
    zutaten: [
      { name: 'Rinderfilet', menge: 1000, einheit: 'g' },
      { name: 'Blätterteig', menge: 1, einheit: 'Rolle' },
      { name: 'Champignons', menge: 500, einheit: 'g' },
      { name: 'Prosciutto', menge: 10, einheit: 'Scheiben' },
      { name: 'Schalotten', menge: 2, einheit: '' },
      { name: 'Thymian', menge: 3, einheit: 'Zweige' },
      { name: 'Senf', menge: 2, einheit: 'EL' },
      { name: 'Eier', menge: 1, einheit: '' },
      { name: 'Butter', menge: 30, einheit: 'g' },
      { name: 'Pflanzenöl', menge: 2, einheit: 'EL' },
      { name: 'Salz', menge: null },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Filet salzen, pfeffern und in sehr heißem Öl rundum kräftig anbraten. Noch warm mit Senf bestreichen und auskühlen lassen.', dauer: 4 },
      { text: 'Für die Duxelles Champignons, Schalotten und Thymianblätter sehr fein hacken. In Butter so lange braten, bis alle Flüssigkeit verdampft ist. Salzen und auskühlen lassen.', dauer: 15, tipp: 'Die Pilzmasse muss richtig trocken sein, sonst weicht der Teig auf.' },
      { text: 'Frischhaltefolie auslegen, Prosciutto überlappend darauflegen und die Duxelles darauf verstreichen. Filet daraufsetzen und mithilfe der Folie straff einrollen. Kalt stellen.', dauer: 20 },
      { text: 'Ofen auf 200 °C vorheizen. Blätterteig ausrollen, Filet ohne Folie darauflegen, einwickeln und die Ränder mit verquirltem Ei verkleben.' },
      { text: 'Mit Ei bestreichen, mit dem Messerrücken ein Muster einritzen und nochmals kurz kalt stellen.', dauer: 10 },
      { text: 'Wellington backen, bis der Teig goldbraun ist und die Kerntemperatur 52 °C erreicht.', dauer: 35, tipp: 'Ein Bratenthermometer ist hier Pflicht – so wird das Filet perfekt rosa.' },
      { text: 'Vor dem Anschneiden rasten lassen, dann mit einem scharfen Messer in dicke Scheiben schneiden.', dauer: 10 }
    ]
  },
  {
    id: 'blinis-kaviar',
    titel: 'Blinis mit Kaviar & Crème fraîche',
    kategorie: 'luxury',
    schwierigkeit: 2,
    zeit: 40,
    ruhezeit: 60,
    portionen: 4,
    emoji: '🥂',
    farbe: ['#5C6B8A', '#1C2541'],
    beschreibung: 'Kleine, flaumige Hefepfannkuchen mit Crème fraîche, Kaviar und Schnittlauch – perfekt zum Champagner.',
    zutaten: [
      { name: 'Mehl', menge: 150, einheit: 'g' },
      { name: 'Milch', menge: 200, einheit: 'ml' },
      { name: 'Eier', menge: 2, einheit: '' },
      { name: 'Trockenhefe', menge: 1, einheit: 'TL' },
      { name: 'Butter', menge: 30, einheit: 'g' },
      { name: 'Crème fraîche', menge: 150, einheit: 'g' },
      { name: 'Kaviar', menge: 50, einheit: 'g' },
      { name: 'Schnittlauch', menge: 0.5, einheit: 'Bund' },
      { name: 'Zucker', menge: null, einheit: '1 Prise' },
      { name: 'Salz', menge: null, einheit: '1 Prise' }
    ],
    schritte: [
      { text: 'Milch lauwarm erwärmen und mit Hefe und Zucker verrühren. Mehl, Dotter, geschmolzene Butter und Salz dazugeben und glatt rühren.' },
      { text: 'Teig zugedeckt an einem warmen Ort gehen lassen, bis er Blasen wirft.', dauer: 60 },
      { text: 'Eiklar zu steifem Schnee schlagen und locker unter den Teig heben.' },
      { text: 'Eine beschichtete Pfanne mit wenig Butter auspinseln. Je einen Esslöffel Teig hineingeben und kleine Blinis auf beiden Seiten goldbraun backen.', dauer: 2, tipp: 'Sobald sich oben Bläschen zeigen, ist es Zeit zum Wenden.' },
      { text: 'Blinis leicht auskühlen lassen, je einen Klecks Crème fraîche und etwas Kaviar daraufsetzen und mit Schnittlauch garnieren.', tipp: 'Kaviar nie mit Metall berühren – ein Perlmutt- oder Kunststofflöffel schont den Geschmack.' }
    ]
  },
  {
    id: 'entenbrust',
    titel: 'Entenbrust mit Orangensauce',
    kategorie: 'luxury',
    schwierigkeit: 3,
    zeit: 50,
    portionen: 4,
    emoji: '🍊',
    farbe: ['#FFA94D', '#A0412D'],
    beschreibung: 'Rosa gebratene Entenbrust mit knuspriger Haut und glänzender Orangen-Honig-Sauce.',
    zutaten: [
      { name: 'Entenbrust', menge: 2, einheit: 'Stück' },
      { name: 'Orange', menge: 3, einheit: '' },
      { name: 'Kalbsfond', menge: 200, einheit: 'ml' },
      { name: 'Honig', menge: 1, einheit: 'EL' },
      { name: 'Butter', menge: 30, einheit: 'g' },
      { name: 'Thymian', menge: 3, einheit: 'Zweige' },
      { name: 'Essig', menge: 1, einheit: 'EL' },
      { name: 'Salz', menge: null },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Ofen auf 160 °C vorheizen. Die Haut der Entenbrust rautenförmig einschneiden, ohne das Fleisch zu verletzen. Salzen und pfeffern.' },
      { text: 'Entenbrust mit der Hautseite nach unten in die kalte Pfanne legen und bei mittlerer Hitze langsam braten, bis das Fett austritt und die Haut knusprig ist.', dauer: 10, tipp: 'In der kalten Pfanne starten – so schmilzt das Fett langsam und die Haut wird richtig kross.' },
      { text: 'Wenden, kurz anbraten und mit Thymian im Ofen fertig garen (Kerntemperatur 56 °C).', dauer: 10 },
      { text: 'Entenbrust in Alufolie rasten lassen.', dauer: 8 },
      { text: 'Fett aus der Pfanne gießen. Honig karamellisieren, mit Essig und dem Saft von zwei Orangen ablöschen, Kalbsfond dazugeben und sirupartig einkochen. Kalte Butter einrühren.', dauer: 8 },
      { text: 'Entenbrust in Scheiben schneiden, mit Orangenfilets anrichten und mit der Sauce überziehen.' }
    ]
  },

  /* ===== Sterneküche ===== */
  {
    id: 'rote-rueben-tatar',
    titel: 'Rote-Rüben-Tatar mit Kren-Schaum',
    kategorie: 'sterne',
    schwierigkeit: 3,
    zeit: 40,
    ruhezeit: 50,
    portionen: 4,
    emoji: '🫐',
    farbe: ['#C2185B', '#4A0E2E'],
    beschreibung: 'Vegetarisches Tatar aus Roten Rüben mit luftigem Krenschaum und Kresse – fein, farbintensiv, überraschend.',
    zutaten: [
      { name: 'Rote Rüben', menge: 500, einheit: 'g' },
      { name: 'Schalotten', menge: 1, einheit: '' },
      { name: 'Kapern', menge: 1, einheit: 'EL' },
      { name: 'Senf', menge: 1, einheit: 'TL' },
      { name: 'Essig', menge: 2, einheit: 'EL' },
      { name: 'Olivenöl', menge: 3, einheit: 'EL' },
      { name: 'Kren', menge: 2, einheit: 'EL' },
      { name: 'Schlagobers', menge: 100, einheit: 'ml' },
      { name: 'Milch', menge: 100, einheit: 'ml' },
      { name: 'Kresse', menge: 1, einheit: 'Kistchen' },
      { name: 'Salz', menge: null },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Rote Rüben in Salzwasser weich kochen.', dauer: 45, tipp: 'Handschuhe anziehen – Rote Rüben färben stark.' },
      { text: 'Abkühlen lassen, schälen und in sehr feine Würfel schneiden (Brunoise).' },
      { text: 'Schalotte und Kapern fein hacken. Mit Rüben, Senf, Essig, Olivenöl, Salz und Pfeffer marinieren.', dauer: 10 },
      { text: 'Für den Schaum Obers und Milch erwärmen (nicht kochen), Kren und Salz einrühren. Mit dem Stabmixer schräg an der Oberfläche aufschäumen.', tipp: 'Den Mixer knapp unter die Oberfläche halten – so zieht er Luft und es entsteht ein stabiler Schaum.' },
      { text: 'Tatar mit einem Ring in die Tellermitte setzen, den Schaum daneben löffeln und mit Kresse garnieren.' }
    ]
  },
  {
    id: 'onsen-ei',
    titel: '63-Grad-Ei mit Erdäpfelschaum & Trüffel',
    kategorie: 'sterne',
    schwierigkeit: 3,
    zeit: 30,
    ruhezeit: 45,
    portionen: 4,
    emoji: '🥚',
    farbe: ['#FFE08A', '#C9A227'],
    beschreibung: 'Bei exakt 63 °C gegartes Ei mit cremigem Dotter, luftigem Erdäpfelschaum und Trüffel.',
    zutaten: [
      { name: 'Eier', menge: 4, einheit: 'sehr frische' },
      { name: 'Erdäpfel', menge: 300, einheit: 'g' },
      { name: 'Schlagobers', menge: 150, einheit: 'ml' },
      { name: 'Milch', menge: 100, einheit: 'ml' },
      { name: 'Butter', menge: 40, einheit: 'g' },
      { name: 'Trüffel', menge: 10, einheit: 'g' },
      { name: 'Schnittlauch', menge: 0.5, einheit: 'Bund' },
      { name: 'Salz', menge: null, einheit: 'Fleur de Sel' }
    ],
    schritte: [
      { text: 'Einen großen Topf Wasser auf genau 63 °C bringen und die Temperatur mit einem Thermometer halten. Eier in der Schale hineinlegen.', dauer: 45, tipp: 'Bei 63 °C stockt das Eiweiß nur leicht, der Dotter wird wie flüssiges Gold.' },
      { text: 'Inzwischen Erdäpfel schälen, würfeln und in Salzwasser weich kochen.', dauer: 15 },
      { text: 'Erdäpfel abgießen und mit Obers, Milch und Butter fein pürieren. Durch ein Sieb streichen und salzen – die Masse soll flüssig wie eine Suppe sein.' },
      { text: 'Masse warm halten und kurz vor dem Servieren mit dem Stabmixer aufschäumen.' },
      { text: 'Schaum in tiefe Teller geben. Eier vorsichtig aufschlagen und das Ei in die Mitte gleiten lassen. Mit Fleur de Sel, Schnittlauch und frisch gehobeltem Trüffel vollenden.' }
    ]
  },
  {
    id: 'kalbsruecken',
    titel: 'Kalbsrücken rosa mit Sellerie-Variation',
    kategorie: 'sterne',
    schwierigkeit: 4,
    zeit: 90,
    portionen: 4,
    emoji: '🍖',
    farbe: ['#E8C39E', '#6B4226'],
    beschreibung: 'Zart rosa Kalbsrücken mit Selleriepüree, gebratenem Sellerie, Haselnuss-Butter und Kalbsjus.',
    zutaten: [
      { name: 'Kalbsrücken', menge: 700, einheit: 'g' },
      { name: 'Knollensellerie', menge: 1, einheit: 'Knolle' },
      { name: 'Butter', menge: 120, einheit: 'g' },
      { name: 'Milch', menge: 200, einheit: 'ml' },
      { name: 'Haselnüsse', menge: 40, einheit: 'g' },
      { name: 'Kalbsfond', menge: 300, einheit: 'ml' },
      { name: 'Äpfel', menge: 1, einheit: '' },
      { name: 'Thymian', menge: 4, einheit: 'Zweige' },
      { name: 'Knoblauch', menge: 2, einheit: 'Zehen' },
      { name: 'Pflanzenöl', menge: 2, einheit: 'EL' },
      { name: 'Salz', menge: null },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Ofen auf 100 °C vorheizen. Kalbfleisch eine Stunde vorher aus dem Kühlschrank nehmen.' },
      { text: 'Sellerie schälen. Die Hälfte würfeln und in Milch mit etwas Salz weich kochen. Aus der anderen Hälfte vier dicke Scheiben schneiden.', dauer: 20 },
      { text: 'Gekochten Sellerie mit etwas Milch und 40 g Butter sehr fein pürieren und durch ein Sieb streichen.', tipp: 'Je länger du mixt, desto samtiger wird das Püree.' },
      { text: 'Kalbsrücken salzen und in Öl rundum anbraten. Thymian, Knoblauch und ein Stück Butter dazugeben und arrosieren. Im Ofen bis 56 °C Kerntemperatur garen.', dauer: 40 },
      { text: 'Kalbsfond auf ein Drittel einkochen und mit kalter Butter binden.', dauer: 15 },
      { text: 'Selleriescheiben in Butter von beiden Seiten goldbraun braten. Haselnüsse hacken und in brauner Butter rösten. Apfel in feine Stifte schneiden.', dauer: 8 },
      { text: 'Fleisch rasten lassen und in Tranchen schneiden. Püree, gebratenen Sellerie, Fleisch und Jus anrichten, mit Haselnussbutter und Apfelstiften vollenden.', dauer: 5 }
    ]
  },
  {
    id: 'ceviche',
    titel: 'Jakobsmuschel-Ceviche mit Passionsfrucht',
    kategorie: 'sterne',
    schwierigkeit: 3,
    zeit: 25,
    ruhezeit: 10,
    portionen: 4,
    emoji: '🍋',
    farbe: ['#FFD166', '#06A77D'],
    beschreibung: 'Rohe Jakobsmuscheln, in Limette und Passionsfrucht gegart, mit Gurke, Chili und Koriander.',
    zutaten: [
      { name: 'Jakobsmuscheln', menge: 8, einheit: 'Stück' },
      { name: 'Passionsfrucht', menge: 2, einheit: '' },
      { name: 'Limette', menge: 2, einheit: '' },
      { name: 'Chilischote', menge: 0.5, einheit: '' },
      { name: 'Gurke', menge: 0.5, einheit: '' },
      { name: 'Koriander', menge: 0.5, einheit: 'Bund' },
      { name: 'Olivenöl', menge: 2, einheit: 'EL' },
      { name: 'Salz', menge: null, einheit: 'Fleur de Sel' }
    ],
    schritte: [
      { text: 'Jakobsmuscheln (Sashimi-Qualität) trocken tupfen und quer in dünne Scheiben schneiden. Fächerartig auf gekühlte Teller legen.', tipp: 'Kurz anfrieren erleichtert das gleichmäßige Schneiden.' },
      { text: 'Passionsfrüchte halbieren und das Fruchtfleisch mit Limettensaft, Olivenöl und Salz verrühren.' },
      { text: 'Gurke in feine Würfel, Chili in hauchdünne Ringe schneiden.' },
      { text: 'Marinade über die Muscheln geben und kurz ziehen lassen, bis sie am Rand weißlich werden.', dauer: 10 },
      { text: 'Mit Gurke, Chili, Korianderblättern und etwas Fleur de Sel garnieren und sofort servieren.' }
    ]
  },
  {
    id: 'weisse-schoko',
    titel: 'Weiße Schokolade, Himbeere & Basilikum',
    kategorie: 'sterne',
    schwierigkeit: 4,
    zeit: 60,
    ruhezeit: 120,
    portionen: 4,
    emoji: '🍓',
    farbe: ['#FFC2D1', '#C9184A'],
    beschreibung: 'Ganache aus weißer Schokolade, Himbeer-Gel, Mandel-Crumble und Basilikum – ein Dessert wie im Sternerestaurant.',
    zutaten: [
      { name: 'Weiße Schokolade', menge: 150, einheit: 'g' },
      { name: 'Schlagobers', menge: 250, einheit: 'ml' },
      { name: 'Himbeeren', menge: 250, einheit: 'g' },
      { name: 'Zucker', menge: 90, einheit: 'g' },
      { name: 'Agar-Agar', menge: 1, einheit: 'TL' },
      { name: 'Basilikum', menge: 6, einheit: 'Blätter' },
      { name: 'Butter', menge: 50, einheit: 'g' },
      { name: 'Mehl', menge: 50, einheit: 'g' },
      { name: 'Mandeln', menge: 50, einheit: 'g' }
    ],
    schritte: [
      { text: 'Für die Ganache 100 ml Obers aufkochen und über die gehackte weiße Schokolade gießen. Glatt rühren, restliches kaltes Obers einrühren und kalt stellen.', dauer: 120, tipp: 'Die Ganache muss richtig durchkühlen, damit sie sich später cremig aufschlagen lässt.' },
      { text: 'Für das Gel Himbeeren mit 50 g Zucker pürieren und durch ein Sieb streichen. Mit Agar-Agar aufkochen und zwei Minuten köcheln.', dauer: 2 },
      { text: 'Gel in eine flache Form gießen und fest werden lassen. Dann mit dem Stabmixer zu einem glänzenden Gel mixen und in eine Spritzflasche füllen.', dauer: 30 },
      { text: 'Ofen auf 170 °C vorheizen. Butter, Mehl, gemahlene Mandeln und restlichen Zucker zu Streuseln verreiben und goldbraun backen.', dauer: 12 },
      { text: 'Ganache cremig aufschlagen und mit zwei Löffeln zu Nocken formen.' },
      { text: 'Crumble auf den Teller streuen, Ganache-Nocken daraufsetzen, Himbeer-Gel in Punkten dazu spritzen und mit frischen Himbeeren und kleinen Basilikumblättern vollenden.' }
    ]
  }

];

/*
 * Menüs bestehen aus Rezept-IDs von oben.
 * kategorie: 'alltag' | 'luxury' | 'sterne'
 */
window.MENUES = [
  {
    id: 'klassiker',
    titel: 'Österreichischer Klassiker',
    kategorie: 'alltag',
    emoji: '🏔️',
    farbe: ['#F6D365', '#E0633A'],
    beschreibung: 'Suppe, Schnitzel, Schmarrn – das Sonntagsessen, wie es sein soll.',
    gaenge: ['kuerbissuppe', 'schnitzel', 'kaiserschmarrn']
  },
  {
    id: 'genussabend',
    titel: 'Schneller Genießer-Abend',
    kategorie: 'alltag',
    emoji: '🕯️',
    farbe: ['#F7A35C', '#7B4B94'],
    beschreibung: 'Drei Gänge mit wenig Aufwand. Die Mousse kannst du schon am Vortag machen.',
    gaenge: ['bruschetta', 'aglio-olio', 'mousse']
  },
  {
    id: 'veggie',
    titel: 'Veggie-Genuss',
    kategorie: 'alltag',
    emoji: '🌿',
    farbe: ['#9BD77C', '#3FA66B'],
    beschreibung: 'Vegetarisch, wärmend und unkompliziert.',
    gaenge: ['kuerbissuppe', 'curry', 'mousse']
  },
  {
    id: 'luxus',
    titel: 'Luxus-Dinner',
    kategorie: 'luxury',
    emoji: '💎',
    farbe: ['#B33771', '#3B1F4A'],
    beschreibung: 'Für besondere Anlässe: Carpaccio, Rinderfilet mit Trüffel und flüssiger Schokolade.',
    gaenge: ['carpaccio', 'rinderfilet', 'fondant']
  },
  {
    id: 'sternemenue',
    titel: 'Sterne-Menü zuhause',
    kategorie: 'sterne',
    emoji: '⭐',
    farbe: ['#6FC3F0', '#2F3E73'],
    beschreibung: 'Feine Technik, große Wirkung – ein Menü wie im Gourmetrestaurant.',
    gaenge: ['jakobsmuscheln', 'saibling', 'fondant']
  },
  {
    id: 'wirtshaus',
    titel: 'Wiener Wirtshaus',
    kategorie: 'alltag',
    emoji: '🍺',
    farbe: ['#F6C453', '#8B4513'],
    beschreibung: 'Frittatensuppe, Gulasch und Apfelstrudel – ehrliche Hausmannskost.',
    gaenge: ['frittatensuppe', 'gulasch', 'apfelstrudel']
  },
  {
    id: 'trattoria',
    titel: 'Italienische Trattoria',
    kategorie: 'alltag',
    emoji: '🇮🇹',
    farbe: ['#7BC67B', '#E5534B'],
    beschreibung: 'Caprese, Pilzrisotto und Tiramisu – wie ein Abend in der Toskana.',
    gaenge: ['caprese', 'risotto', 'tiramisu']
  },
  {
    id: 'gala',
    titel: 'Gala-Dinner',
    kategorie: 'luxury',
    emoji: '🥂',
    farbe: ['#5C6B8A', '#B33771'],
    beschreibung: 'Blinis mit Kaviar, Beef Wellington und Crème brûlée – für den ganz großen Abend.',
    gaenge: ['blinis-kaviar', 'wellington', 'creme-brulee']
  },
  {
    id: 'degustation',
    titel: 'Sterne-Degustation in 4 Gängen',
    kategorie: 'sterne',
    emoji: '🌟',
    farbe: ['#06A77D', '#4A0E2E'],
    beschreibung: 'Ceviche, 63-Grad-Ei, Kalbsrücken und ein Dessert aus weißer Schokolade – ein Abend voller Technik.',
    gaenge: ['ceviche', 'onsen-ei', 'kalbsruecken', 'weisse-schoko']
  }
];
