/*
 * Rezepte im Stil von Gordon Ramsay
 * ---------------------------------
 * Typisch für ihn: klassische französische Technik, perfekte Garpunkte,
 * kräftige Saucen und präzises Anrichten.
 * Die Rezepte sind von seiner Küche inspiriert und in eigenen Worten geschrieben,
 * keine Kopien aus seinen Büchern oder Sendungen.
 */
window.REZEPTE.push(
  {
    id: 'hummer-ravioli',
    titel: 'Hummer-Ravioli mit Krustentier-Bisque',
    kategorie: 'sterne',
    inspiration: 'Gordon Ramsay',
    schwierigkeit: 4,
    zeit: 120,
    ruhezeit: 30,
    portionen: 4,
    emoji: '🦞',
    farbe: ['#FF7F50', '#7A1F1F'],
    beschreibung: 'Hauchdünne Pasta, gefüllt mit Hummer und Lachsfarce, in einer samtigen Bisque aus den Hummerkarkassen.',
    zutaten: [
      { name: 'Hummer', menge: 1, einheit: 'Stück (ca. 700 g)' },
      { name: 'Lachs', menge: 100, einheit: 'g' },
      { name: 'Schlagobers', menge: 250, einheit: 'ml' },
      { name: 'Mehl', menge: 200, einheit: 'g' },
      { name: 'Eier', menge: 2, einheit: '' },
      { name: 'Schalotten', menge: 2, einheit: '' },
      { name: 'Karotte', menge: 1, einheit: '' },
      { name: 'Tomatenmark', menge: 1, einheit: 'EL' },
      { name: 'Cognac', menge: 3, einheit: 'EL' },
      { name: 'Weißwein', menge: 150, einheit: 'ml' },
      { name: 'Estragon', menge: 2, einheit: 'Zweige' },
      { name: 'Butter', menge: 40, einheit: 'g' },
      { name: 'Olivenöl', menge: 2, einheit: 'EL' },
      { name: 'Salz', menge: null },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Für den Nudelteig Mehl, Eier, Olivenöl und eine Prise Salz zu einem glatten, festen Teig kneten. In Folie gewickelt rasten lassen.', dauer: 30, tipp: 'Gut zehn Minuten kneten – der Teig muss seidig glatt sein, damit er sich hauchdünn ausrollen lässt.' },
      { text: 'Hummer in sprudelndem Salzwasser garen, in Eiswasser abschrecken und das Fleisch aus Schwanz und Scheren lösen. Die Schalen aufheben.', dauer: 5 },
      { text: 'Für die Bisque Schalen grob zerkleinern und in Öl kräftig anrösten. Schalotten, Karotte und Tomatenmark mitrösten, mit Cognac und Weißwein ablöschen.', dauer: 8 },
      { text: 'Mit Wasser knapp bedecken, Estragon dazugeben und leise köcheln lassen. Durch ein feines Sieb passieren, auf ein Drittel einkochen und mit 150 ml Obers verfeinern.', dauer: 40 },
      { text: 'Für die Füllung Lachs mit restlichem Obers, Salz und Pfeffer zu einer feinen Farce mixen. Hummerfleisch würfeln und unterheben. Kalt stellen.', tipp: 'Alles muss eiskalt sein, sonst gerinnt die Farce beim Mixen.' },
      { text: 'Teig mit der Nudelmaschine hauchdünn ausrollen. Füllung in Häufchen daraufsetzen, mit einer zweiten Teigbahn abdecken, Luft herausdrücken und Ravioli ausstechen.' },
      { text: 'Ravioli in leicht siedendem Salzwasser garen.', dauer: 3 },
      { text: 'Bisque mit kalter Butter aufmixen, bis sie schäumt. Ravioli in tiefe Teller setzen und mit der Bisque umgießen.' }
    ]
  },
  {
    id: 'heilbutt',
    titel: 'Heilbutt mit Erbsen à la Française',
    kategorie: 'sterne',
    inspiration: 'Gordon Ramsay',
    schwierigkeit: 3,
    zeit: 40,
    portionen: 4,
    emoji: '🐟',
    farbe: ['#C8E6C9', '#2E7D32'],
    beschreibung: 'Goldbraun gebratener Heilbutt auf Erbsen mit Speck, Perlzwiebeln und Salat, gebunden mit Butter.',
    zutaten: [
      { name: 'Heilbutt', menge: 4, einheit: 'Filets' },
      { name: 'Erbsen', menge: 400, einheit: 'g' },
      { name: 'Speck', menge: 80, einheit: 'g' },
      { name: 'Perlzwiebeln', menge: 12, einheit: '' },
      { name: 'Kopfsalat', menge: 1, einheit: 'Herz' },
      { name: 'Gemüsebrühe', menge: 150, einheit: 'ml' },
      { name: 'Butter', menge: 80, einheit: 'g' },
      { name: 'Minze', menge: 4, einheit: 'Blätter' },
      { name: 'Zitrone', menge: 1, einheit: '' },
      { name: 'Pflanzenöl', menge: 2, einheit: 'EL' },
      { name: 'Salz', menge: null },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Speck in feine Streifen schneiden und in einem Topf knusprig auslassen. Geschälte Perlzwiebeln dazugeben und leicht anbräunen.', dauer: 5 },
      { text: 'Brühe angießen und die Zwiebeln zugedeckt weich dünsten.', dauer: 8 },
      { text: 'Erbsen und in Streifen geschnittenes Salatherz dazugeben, kurz mitgaren und mit kalter Butter, gehackter Minze, Salz und Pfeffer binden.', dauer: 3 },
      { text: 'Heilbutt trocken tupfen und salzen. In einer heißen Pfanne mit Öl auf der Hautseite goldbraun braten.', dauer: 4, tipp: 'Den Fisch nicht bewegen, bis er sich von selbst löst – so entsteht die goldene Kruste.' },
      { text: 'Wenden, ein Stück Butter dazugeben und den Fisch mit der schäumenden Butter übergießen, bis er gerade durch ist. Einen Spritzer Zitrone darüber.', dauer: 2 },
      { text: 'Erbsen in tiefe Teller geben und den Heilbutt mit der knusprigen Seite nach oben daraufsetzen.' }
    ]
  },
  {
    id: 'lammkarree',
    titel: 'Lammkarree mit Kräuterkruste & Ratatouille-Tian',
    kategorie: 'sterne',
    inspiration: 'Gordon Ramsay',
    schwierigkeit: 3,
    zeit: 75,
    portionen: 4,
    emoji: '🐑',
    farbe: ['#A5D6A7', '#5D4037'],
    beschreibung: 'Rosa Lammkarree mit grüner Kräuter-Senf-Kruste, fächerförmig geschichtetem Gemüse und Rosmarinjus.',
    zutaten: [
      { name: 'Lammkarree', menge: 2, einheit: 'Stück (à 8 Rippen)' },
      { name: 'Semmelbrösel', menge: 60, einheit: 'g' },
      { name: 'Petersilie', menge: 1, einheit: 'Bund' },
      { name: 'Thymian', menge: 4, einheit: 'Zweige' },
      { name: 'Rosmarin', menge: 2, einheit: 'Zweige' },
      { name: 'Senf', menge: 2, einheit: 'EL' },
      { name: 'Zucchini', menge: 1, einheit: '' },
      { name: 'Melanzani', menge: 1, einheit: '' },
      { name: 'Tomaten', menge: 3, einheit: '' },
      { name: 'Knoblauch', menge: 3, einheit: 'Zehen' },
      { name: 'Kalbsfond', menge: 200, einheit: 'ml' },
      { name: 'Butter', menge: 30, einheit: 'g' },
      { name: 'Olivenöl', menge: 5, einheit: 'EL' },
      { name: 'Salz', menge: null },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Ofen auf 180 °C vorheizen. Zucchini, Melanzani und Tomaten in gleich dünne Scheiben schneiden.' },
      { text: 'Gemüsescheiben abwechselnd und dachziegelartig in eine kleine Form schichten. Mit Olivenöl, gehacktem Knoblauch, Thymian und Salz würzen und backen.', dauer: 40, tipp: 'Gleich dicke Scheiben garen gleichmäßig – eine Mandoline hilft.' },
      { text: 'Für die Kruste Petersilie, Semmelbrösel, etwas Thymian und Olivenöl im Mixer zu feinen grünen Bröseln mixen.' },
      { text: 'Lammkarrees salzen, pfeffern und in einer heißen Pfanne rundum anbraten. Kurz abkühlen lassen, mit Senf bestreichen und die Kräuterbrösel andrücken.', dauer: 4 },
      { text: 'Karrees im Ofen rosa garen (Kerntemperatur 56 °C).', dauer: 15 },
      { text: 'Bratrückstand mit Kalbsfond ablöschen, Rosmarin dazugeben, einkochen und mit kalter Butter binden.', dauer: 6 },
      { text: 'Lamm rasten lassen, zwischen den Knochen in Koteletts schneiden und mit Ratatouille-Tian und Jus anrichten.', dauer: 5 }
    ]
  },
  {
    id: 'perlhuhn-morcheln',
    titel: 'Perlhuhnbrust mit Morchelrahm & Erdäpfel-Fondant',
    kategorie: 'sterne',
    inspiration: 'Gordon Ramsay',
    schwierigkeit: 3,
    zeit: 70,
    portionen: 4,
    emoji: '🍄',
    farbe: ['#D7CCC8', '#5D4037'],
    beschreibung: 'Saftige Perlhuhnbrust mit knuspriger Haut, cremiger Morchelsauce und in Butter geschmorten Erdäpfeln.',
    zutaten: [
      { name: 'Perlhuhnbrust', menge: 4, einheit: 'Stück mit Haut' },
      { name: 'Morcheln', menge: 20, einheit: 'g getrocknet' },
      { name: 'Erdäpfel', menge: 4, einheit: 'große' },
      { name: 'Schalotten', menge: 2, einheit: '' },
      { name: 'Weißwein', menge: 100, einheit: 'ml' },
      { name: 'Hühnerfond', menge: 300, einheit: 'ml' },
      { name: 'Schlagobers', menge: 150, einheit: 'ml' },
      { name: 'Butter', menge: 100, einheit: 'g' },
      { name: 'Thymian', menge: 4, einheit: 'Zweige' },
      { name: 'Knoblauch', menge: 2, einheit: 'Zehen' },
      { name: 'Pflanzenöl', menge: 2, einheit: 'EL' },
      { name: 'Salz', menge: null },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Morcheln in warmem Wasser einweichen. Danach gut abspülen und das Einweichwasser durch ein Tuch filtern und aufheben.', dauer: 20, tipp: 'Morcheln sind oft sandig – gründlich spülen lohnt sich.' },
      { text: 'Erdäpfel schälen, zu gleich hohen Zylindern zuschneiden und in einer Pfanne mit Butter auf beiden Seiten goldbraun anbraten.', dauer: 8 },
      { text: 'Thymian, Knoblauch und so viel Hühnerfond angießen, dass die Erdäpfel zur Hälfte bedeckt sind. Im Ofen bei 180 °C weich schmoren.', dauer: 30 },
      { text: 'Perlhuhnbrust salzen und auf der Hautseite in Öl bei mittlerer Hitze knusprig braten. Wenden, Butter dazugeben, arrosieren und im Ofen fertig garen.', dauer: 12 },
      { text: 'Schalotten fein würfeln und in Butter anschwitzen, Morcheln dazugeben, mit Weißwein und Morchelwasser ablöschen, einkochen, Obers dazugeben und sämig reduzieren.', dauer: 10 },
      { text: 'Perlhuhn rasten lassen und schräg aufschneiden. Mit Erdäpfel-Fondant und Morchelrahm anrichten.', dauer: 4 }
    ]
  },
  {
    id: 'kuerbis-risotto',
    titel: 'Kürbis-Risotto mit Salbei-Nussbutter',
    kategorie: 'sterne',
    inspiration: 'Gordon Ramsay',
    schwierigkeit: 3,
    zeit: 50,
    portionen: 4,
    emoji: '🎃',
    farbe: ['#FFB74D', '#8D6E63'],
    beschreibung: 'Cremiges Risotto mit Butternusskürbis, gerösteten Kürbiswürfeln, knusprigem Salbei und Parmesan.',
    zutaten: [
      { name: 'Risottoreis', menge: 300, einheit: 'g' },
      { name: 'Butternusskürbis', menge: 600, einheit: 'g' },
      { name: 'Schalotten', menge: 2, einheit: '' },
      { name: 'Weißwein', menge: 150, einheit: 'ml' },
      { name: 'Gemüsebrühe', menge: 1000, einheit: 'ml' },
      { name: 'Parmesan', menge: 60, einheit: 'g' },
      { name: 'Mascarpone', menge: 2, einheit: 'EL' },
      { name: 'Butter', menge: 80, einheit: 'g' },
      { name: 'Salbei', menge: 12, einheit: 'Blätter' },
      { name: 'Olivenöl', menge: 3, einheit: 'EL' },
      { name: 'Salz', menge: null },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Ofen auf 200 °C vorheizen. Kürbis schälen. Ein Drittel in kleine Würfel schneiden, mit Öl und Salz auf ein Blech geben und rösten. Den Rest grob würfeln und in etwas Brühe weich kochen.', dauer: 20 },
      { text: 'Gekochten Kürbis zu einem feinen Püree mixen.' },
      { text: 'Schalotten fein würfeln und in Öl anschwitzen. Reis dazugeben, glasig werden lassen und mit Weißwein ablöschen.' },
      { text: 'Nach und nach heiße Brühe angießen und rühren, bis der Reis fast gar ist. Dann das Kürbispüree unterrühren.', dauer: 18 },
      { text: 'Vom Herd nehmen, Mascarpone, Parmesan und ein Stück kalte Butter kräftig einrühren. Abschmecken.', tipp: 'Das Risotto soll fließen, wenn du den Teller leicht kippst – „all’onda“, wie eine Welle.' },
      { text: 'Restliche Butter aufschäumen, bis sie hellbraun ist, Salbeiblätter darin knusprig braten.', dauer: 2 },
      { text: 'Risotto auf Teller geben, mit gerösteten Kürbiswürfeln, Salbei und einem Löffel Nussbutter vollenden.' }
    ]
  },
  {
    id: 'wildpilz-veloute',
    titel: 'Wildpilz-Velouté mit Trüffel-Crostini',
    kategorie: 'sterne',
    inspiration: 'Gordon Ramsay',
    schwierigkeit: 3,
    zeit: 45,
    portionen: 4,
    emoji: '🥣',
    farbe: ['#BCAAA4', '#4E342E'],
    beschreibung: 'Samtige, aufgeschäumte Pilzsuppe mit gebratenen Waldpilzen und knusprigen Trüffel-Crostini.',
    zutaten: [
      { name: 'Champignons', menge: 400, einheit: 'g' },
      { name: 'Steinpilze', menge: 150, einheit: 'g' },
      { name: 'Schalotten', menge: 2, einheit: '' },
      { name: 'Knoblauch', menge: 1, einheit: 'Zehe' },
      { name: 'Hühnerfond', menge: 700, einheit: 'ml' },
      { name: 'Schlagobers', menge: 150, einheit: 'ml' },
      { name: 'Butter', menge: 60, einheit: 'g' },
      { name: 'Baguette', menge: 0.5, einheit: '' },
      { name: 'Trüffelöl', menge: 1, einheit: 'TL' },
      { name: 'Thymian', menge: 2, einheit: 'Zweige' },
      { name: 'Schnittlauch', menge: 0.5, einheit: 'Bund' },
      { name: 'Salz', menge: null },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Einige schöne Steinpilze für die Garnitur beiseitelegen. Restliche Pilze grob schneiden.' },
      { text: 'Schalotten und Knoblauch in Butter anschwitzen, Pilze und Thymian dazugeben und kräftig braten, bis die Flüssigkeit verdampft ist.', dauer: 8, tipp: 'Erst salzen, wenn die Pilze Farbe haben – sonst ziehen sie Wasser.' },
      { text: 'Mit Hühnerfond aufgießen und köcheln lassen.', dauer: 15 },
      { text: 'Obers dazugeben, sehr fein mixen und durch ein Sieb passieren. Abschmecken.' },
      { text: 'Baguette in dünne Scheiben schneiden, im Ofen knusprig rösten und mit Trüffelöl beträufeln.', dauer: 6 },
      { text: 'Beiseitegelegte Steinpilze in Scheiben schneiden und in Butter goldbraun braten.', dauer: 3 },
      { text: 'Suppe mit einem Stück kalter Butter aufschäumen, in Teller füllen, Pilze daraufsetzen, mit Schnittlauch bestreuen und mit den Crostini servieren.' }
    ]
  },
  {
    id: 'sticky-toffee',
    titel: 'Sticky Toffee Pudding',
    kategorie: 'dessert',
    inspiration: 'Gordon Ramsay',
    schwierigkeit: 2,
    zeit: 25,
    ruhezeit: 35,
    portionen: 6,
    emoji: '🍯',
    farbe: ['#D7A86E', '#6B3E26'],
    beschreibung: 'Der britische Dessertklassiker: saftiger Dattelkuchen, getränkt in warmer Toffeesauce.',
    zutaten: [
      { name: 'Datteln', menge: 200, einheit: 'g' },
      { name: 'Natron', menge: 1, einheit: 'TL' },
      { name: 'Butter', menge: 170, einheit: 'g' },
      { name: 'Brauner Zucker', menge: 300, einheit: 'g' },
      { name: 'Eier', menge: 2, einheit: '' },
      { name: 'Mehl', menge: 180, einheit: 'g' },
      { name: 'Backpulver', menge: 1, einheit: 'TL' },
      { name: 'Schlagobers', menge: 300, einheit: 'ml' },
      { name: 'Vanilleeis', menge: 6, einheit: 'Kugeln' },
      { name: 'Salz', menge: null, einheit: '1 Prise' }
    ],
    schritte: [
      { text: 'Ofen auf 180 °C vorheizen und eine Form buttern. Datteln entsteinen, hacken und mit 250 ml kochendem Wasser und Natron übergießen.', dauer: 10, tipp: 'Das Natron macht die Datteln weich und sorgt für die typische dunkle, saftige Krume.' },
      { text: '70 g Butter mit 120 g braunem Zucker cremig rühren, Eier nach und nach einrühren.' },
      { text: 'Mehl, Backpulver und Salz unterheben, dann die Datteln samt Flüssigkeit einrühren. Teig in die Form füllen.' },
      { text: 'Pudding backen, bis ein Holzstäbchen sauber herauskommt.', dauer: 35 },
      { text: 'Für die Toffeesauce restliche Butter und restlichen Zucker schmelzen, Obers dazugeben und sämig köcheln lassen.', dauer: 5 },
      { text: 'Den warmen Pudding mehrmals einstechen und mit einem Drittel der Sauce tränken. In Stücke schneiden und mit restlicher Sauce und Vanilleeis servieren.' }
    ]
  },
  {
    id: 'passionsfrucht-souffle',
    titel: 'Passionsfrucht-Soufflé',
    kategorie: 'sterne',
    inspiration: 'Gordon Ramsay',
    schwierigkeit: 4,
    zeit: 45,
    portionen: 4,
    emoji: '☁️',
    farbe: ['#FFE082', '#F57F17'],
    beschreibung: 'Luftig hoch aufgegangenes Soufflé mit intensivem Passionsfruchtaroma – Timing ist alles.',
    zutaten: [
      { name: 'Passionsfrucht', menge: 6, einheit: '' },
      { name: 'Eier', menge: 4, einheit: '' },
      { name: 'Zucker', menge: 100, einheit: 'g' },
      { name: 'Speisestärke', menge: 1, einheit: 'EL' },
      { name: 'Milch', menge: 100, einheit: 'ml' },
      { name: 'Butter', menge: 20, einheit: 'g' },
      { name: 'Staubzucker', menge: 1, einheit: 'EL' }
    ],
    schritte: [
      { text: 'Ofen auf 190 °C vorheizen. Förmchen mit weicher Butter in senkrechten Strichen von unten nach oben ausstreichen und mit Zucker ausstreuen.', tipp: 'Die senkrechten Butterstriche sind kein Zufall – an ihnen „klettert“ das Soufflé nach oben.' },
      { text: 'Passionsfrüchte auslöffeln und durch ein Sieb streichen, sodass etwa 100 ml Saft entstehen.' },
      { text: 'Milch mit der Hälfte des Saftes und 30 g Zucker aufkochen. Stärke mit 2 Dottern verrühren, einrühren und unter Rühren eindicken lassen. Restlichen Saft dazugeben und abkühlen lassen.' },
      { text: 'Alle vier Eiklar mit dem restlichen Zucker zu cremigem, festem Schnee schlagen. Ein Drittel kräftig unter die Basis rühren, den Rest vorsichtig unterheben.' },
      { text: 'Masse in die Förmchen füllen, glatt streichen und mit dem Daumen den Rand freiwischen.', tipp: 'Der freie Rand sorgt dafür, dass das Soufflé gerade und gleichmäßig hochsteigt.' },
      { text: 'Soufflés backen, bis sie hoch aufgegangen und goldgelb sind. Die Ofentür dabei nicht öffnen!', dauer: 12 },
      { text: 'Sofort mit Staubzucker bestäuben und ohne Zeit zu verlieren servieren – ein Soufflé wartet nicht.' }
    ]
  },
  {
    id: 'zitronen-tarte',
    titel: 'Zitronen-Tarte mit Baiser',
    kategorie: 'sterne',
    inspiration: 'Gordon Ramsay',
    schwierigkeit: 3,
    zeit: 60,
    ruhezeit: 150,
    portionen: 8,
    emoji: '🍋',
    farbe: ['#FFF59D', '#F9A825'],
    beschreibung: 'Mürber Butterteig, eine säuerlich-cremige Zitronenfüllung und abgeflämmtes Baiser.',
    zutaten: [
      { name: 'Mehl', menge: 200, einheit: 'g' },
      { name: 'Butter', menge: 220, einheit: 'g' },
      { name: 'Staubzucker', menge: 60, einheit: 'g' },
      { name: 'Eier', menge: 6, einheit: '' },
      { name: 'Zitrone', menge: 4, einheit: '' },
      { name: 'Zucker', menge: 300, einheit: 'g' },
      { name: 'Salz', menge: null, einheit: '1 Prise' }
    ],
    schritte: [
      { text: 'Mehl, 100 g kalte Butterwürfel, Staubzucker und Salz zu Bröseln verreiben, 1 Ei dazugeben und rasch zu einem Teig verkneten. Kalt stellen.', dauer: 30, tipp: 'Schnell arbeiten und den Teig nicht zu lange kneten – so bleibt er mürbe.' },
      { text: 'Teig ausrollen, eine Tarteform damit auslegen, mit Backpapier und Hülsenfrüchten beschweren und bei 180 °C blind backen.', dauer: 20 },
      { text: 'Für die Füllung Saft und Schale der Zitronen mit 150 g Zucker, 3 Eiern und 2 Dottern über dem Wasserbad dick-cremig schlagen. Restliche Butter in Stücken einrühren.', dauer: 10 },
      { text: 'Creme in den Tarteboden füllen und kalt stellen, bis sie fest ist.', dauer: 120 },
      { text: 'Die 2 übrigen Eiklar mit 150 g Zucker über dem Wasserbad warm schlagen, dann vom Herd nehmen und zu glänzendem, festem Baiser kalt schlagen.', dauer: 8 },
      { text: 'Baiser mit einem Spritzbeutel in Tupfen auf die Tarte setzen und mit einem Bunsenbrenner abflämmen.' }
    ]
  }
);

/* Menüs im Ramsay-Stil */
window.MENUES.push(
  {
    id: 'ramsay-klassiker',
    titel: 'Ramsays Klassiker',
    kategorie: 'luxury',
    inspiration: 'Gordon Ramsay',
    emoji: '🇬🇧',
    farbe: ['#D7A86E', '#7A1F1F'],
    beschreibung: 'Jakobsmuscheln auf Erbsenpüree, Beef Wellington und Sticky Toffee Pudding – seine berühmtesten Gerichte an einem Abend.',
    gaenge: ['jakobsmuscheln', 'wellington', 'sticky-toffee']
  },
  {
    id: 'ramsay-degustation',
    titel: 'Degustation in 5 Gängen',
    kategorie: 'sterne',
    inspiration: 'Gordon Ramsay',
    emoji: '🎩',
    farbe: ['#FF7F50', '#2E2A3B'],
    beschreibung: 'Velouté, Hummer-Ravioli, Heilbutt, Lammkarree und Soufflé – ein Menü wie im Sternerestaurant.',
    gaenge: ['wildpilz-veloute', 'hummer-ravioli', 'heilbutt', 'lammkarree', 'passionsfrucht-souffle']
  },
  {
    id: 'ramsay-herbst',
    titel: 'Herbstmenü à la Ramsay',
    kategorie: 'sterne',
    inspiration: 'Gordon Ramsay',
    emoji: '🍂',
    farbe: ['#FFB74D', '#4E342E'],
    beschreibung: 'Kürbis-Risotto mit Salbei, Perlhuhn mit Morcheln und Sticky Toffee Pudding – wärmend und elegant.',
    gaenge: ['kuerbis-risotto', 'perlhuhn-morcheln', 'sticky-toffee']
  },
  {
    id: 'ramsay-lamm',
    titel: 'Frühlingsmenü mit Lamm',
    kategorie: 'sterne',
    inspiration: 'Gordon Ramsay',
    emoji: '🌸',
    farbe: ['#A5D6A7', '#F9A825'],
    beschreibung: 'Hummer-Ravioli, Lammkarree mit Kräuterkruste und Zitronen-Tarte mit Baiser.',
    gaenge: ['hummer-ravioli', 'lammkarree', 'zitronen-tarte']
  }
);
