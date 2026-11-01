/*
 * Rezepte im Stil von Steffen Henssler
 * ------------------------------------
 * Typisch für ihn: schnell, unkompliziert, viel Fisch, Sushi und Asia-Aromen.
 * Die Rezepte sind von seiner Küche inspiriert und in eigenen Worten geschrieben,
 * keine Kopien aus seinen Büchern.
 */
window.REZEPTE.push(
  /* ===== Vorspeisen ===== */
  {
    id: 'tataki',
    titel: 'Thunfisch-Tataki mit Sesam',
    kategorie: 'vorspeise',
    inspiration: 'Steffen Henssler',
    schwierigkeit: 2,
    zeit: 20,
    portionen: 4,
    emoji: '🍣',
    farbe: ['#F28B82', '#3D2C2E'],
    beschreibung: 'Außen kurz angebraten, innen roh: Thunfisch in Sesamkruste mit Ponzu und Frühlingszwiebeln.',
    zutaten: [
      { name: 'Thunfisch', menge: 300, einheit: 'g' },
      { name: 'Sesam', menge: 4, einheit: 'EL' },
      { name: 'Sojasauce', menge: 4, einheit: 'EL' },
      { name: 'Limette', menge: 1, einheit: '' },
      { name: 'Frühlingszwiebeln', menge: 2, einheit: '' },
      { name: 'Ingwer', menge: 1, einheit: 'cm' },
      { name: 'Sesamöl', menge: 1, einheit: 'TL' },
      { name: 'Pflanzenöl', menge: 1, einheit: 'EL' },
      { name: 'Salz', menge: null }
    ],
    schritte: [
      { text: 'Thunfisch (Sushi-Qualität) zu einem gleichmäßigen Block schneiden, leicht salzen und rundum in Sesam wälzen.' },
      { text: 'Pfanne sehr heiß werden lassen, Öl hineingeben und den Thunfisch von allen Seiten nur kurz anbraten.', dauer: 1, tipp: 'Wirklich nur wenige Sekunden pro Seite – innen soll der Fisch roh bleiben.' },
      { text: 'Für die Ponzu Sojasauce mit Limettensaft, geriebenem Ingwer und Sesamöl verrühren.' },
      { text: 'Thunfisch mit einem scharfen Messer in fingerdicke Scheiben schneiden, auf einer Platte auffächern, mit Ponzu beträufeln und mit Frühlingszwiebelringen bestreuen.' }
    ]
  },
  {
    id: 'california-roll',
    titel: 'California Rolls',
    kategorie: 'vorspeise',
    inspiration: 'Steffen Henssler',
    schwierigkeit: 3,
    zeit: 60,
    portionen: 4,
    emoji: '🍙',
    farbe: ['#A8E6CF', '#2F4F4F'],
    beschreibung: 'Inside-Out-Rolls mit Surimi, Avocado und Gurke – der Einstieg ins Sushi-Rollen.',
    zutaten: [
      { name: 'Sushireis', menge: 300, einheit: 'g' },
      { name: 'Reisessig', menge: 4, einheit: 'EL' },
      { name: 'Noriblätter', menge: 4, einheit: '' },
      { name: 'Surimi', menge: 150, einheit: 'g' },
      { name: 'Avocado', menge: 1, einheit: '' },
      { name: 'Gurke', menge: 0.5, einheit: '' },
      { name: 'Mayonnaise', menge: 2, einheit: 'EL' },
      { name: 'Sesam', menge: 3, einheit: 'EL' },
      { name: 'Sojasauce', menge: null, einheit: 'zum Dippen' },
      { name: 'Zucker', menge: 1, einheit: 'EL' },
      { name: 'Salz', menge: 1, einheit: 'TL' }
    ],
    schritte: [
      { text: 'Sushireis in einem Sieb so lange waschen, bis das Wasser klar bleibt. Mit 400 ml Wasser aufkochen und zugedeckt bei kleinster Hitze garen.', dauer: 12, tipp: 'Das Waschen entfernt überschüssige Stärke – so wird der Reis klebrig, aber nicht matschig.' },
      { text: 'Reis zugedeckt neben dem Herd ruhen lassen. Reisessig mit Zucker und Salz erwärmen, bis sich alles gelöst hat.', dauer: 10 },
      { text: 'Reis in eine flache Schüssel geben, Essigmischung darüberträufeln und mit einem Holzlöffel unterheben. Auf Raumtemperatur abkühlen lassen.' },
      { text: 'Avocado und Gurke in lange Streifen schneiden. Surimi zerzupfen und mit Mayonnaise mischen.' },
      { text: 'Bambusmatte mit Frischhaltefolie umwickeln. Ein halbes Noriblatt darauflegen, mit nassen Händen dünn Reis darauf verteilen, mit Sesam bestreuen und umdrehen, sodass der Reis unten liegt.' },
      { text: 'Füllung auf das untere Drittel legen und mithilfe der Matte straff einrollen.', tipp: 'Fest andrücken, aber nicht quetschen – sonst quillt die Füllung heraus.' },
      { text: 'Rolle mit einem nassen, scharfen Messer in acht Stücke schneiden und mit Sojasauce servieren.' }
    ]
  },
  {
    id: 'chili-garnelen',
    titel: 'Chili-Knoblauch-Garnelen',
    kategorie: 'vorspeise',
    inspiration: 'Steffen Henssler',
    schwierigkeit: 1,
    zeit: 15,
    portionen: 4,
    emoji: '🦐',
    farbe: ['#FF8A65', '#C62828'],
    beschreibung: 'In zehn Minuten fertig: Garnelen in brutzelndem Knoblauch-Chili-Öl mit Petersilie und Baguette.',
    zutaten: [
      { name: 'Garnelen', menge: 400, einheit: 'g' },
      { name: 'Knoblauch', menge: 4, einheit: 'Zehen' },
      { name: 'Chilischote', menge: 1, einheit: '' },
      { name: 'Petersilie', menge: 0.5, einheit: 'Bund' },
      { name: 'Zitrone', menge: 1, einheit: '' },
      { name: 'Baguette', menge: 1, einheit: '' },
      { name: 'Olivenöl', menge: 100, einheit: 'ml' },
      { name: 'Salz', menge: null }
    ],
    schritte: [
      { text: 'Garnelen schälen, den Darm entfernen und trocken tupfen. Knoblauch in Scheiben, Chili in Ringe schneiden.' },
      { text: 'Olivenöl in einer Pfanne erhitzen, Knoblauch und Chili darin kurz anbraten, bis es duftet.', dauer: 1 },
      { text: 'Garnelen dazugeben und bei hoher Hitze braten, bis sie rosa sind. Einmal wenden.', dauer: 3, tipp: 'Garnelen werden schnell zäh – sobald sie rosa sind, sind sie fertig.' },
      { text: 'Mit Salz, Zitronensaft und gehackter Petersilie abschmecken und direkt in der Pfanne mit Baguette zum Auftunken servieren.' }
    ]
  },

  /* ===== Hauptspeisen ===== */
  {
    id: 'teriyaki-lachs',
    titel: 'Teriyaki-Lachs mit Gurkensalat',
    kategorie: 'hauptspeise',
    inspiration: 'Steffen Henssler',
    schwierigkeit: 1,
    zeit: 25,
    portionen: 4,
    emoji: '🐟',
    farbe: ['#FFA07A', '#8B3A3A'],
    beschreibung: 'Glänzend glasierter Lachs mit hausgemachter Teriyaki-Sauce, Reis und knackigem Sesam-Gurkensalat.',
    zutaten: [
      { name: 'Lachs', menge: 4, einheit: 'Filets' },
      { name: 'Reis', menge: 250, einheit: 'g' },
      { name: 'Sojasauce', menge: 6, einheit: 'EL' },
      { name: 'Honig', menge: 2, einheit: 'EL' },
      { name: 'Reisessig', menge: 3, einheit: 'EL' },
      { name: 'Ingwer', menge: 2, einheit: 'cm' },
      { name: 'Knoblauch', menge: 1, einheit: 'Zehe' },
      { name: 'Gurke', menge: 1, einheit: '' },
      { name: 'Sesam', menge: 2, einheit: 'EL' },
      { name: 'Sesamöl', menge: 1, einheit: 'TL' },
      { name: 'Pflanzenöl', menge: 1, einheit: 'EL' },
      { name: 'Salz', menge: null }
    ],
    schritte: [
      { text: 'Reis nach Packungsanleitung kochen.', dauer: 15 },
      { text: 'Gurke in dünne Scheiben hobeln, salzen und kurz ziehen lassen. Dann ausdrücken und mit 2 EL Reisessig, Sesamöl und Sesam mischen.' },
      { text: 'Für die Teriyaki-Sauce Sojasauce, Honig, restlichen Reisessig, geriebenen Ingwer und Knoblauch verrühren.' },
      { text: 'Lachs in Öl auf der Hautseite knusprig braten, wenden und kurz weiterbraten.', dauer: 5 },
      { text: 'Teriyaki-Sauce in die Pfanne gießen und den Lachs darin wenden, bis die Sauce sirupartig einkocht und den Fisch glasiert.', dauer: 2, tipp: 'Nicht zu lange einkochen – Honig verbrennt schnell und wird bitter.' },
      { text: 'Lachs mit Reis und Gurkensalat anrichten und mit etwas Sesam bestreuen.' }
    ]
  },
  {
    id: 'fisch-tacos',
    titel: 'Fisch-Tacos mit Mango-Salsa',
    kategorie: 'hauptspeise',
    inspiration: 'Steffen Henssler',
    schwierigkeit: 2,
    zeit: 35,
    portionen: 4,
    emoji: '🌮',
    farbe: ['#FFD166', '#EF476F'],
    beschreibung: 'Knusprig gebratener Fisch in warmen Tortillas mit fruchtiger Mango-Salsa und Limetten-Creme.',
    zutaten: [
      { name: 'Kabeljau', menge: 500, einheit: 'g' },
      { name: 'Tortillas', menge: 8, einheit: 'kleine' },
      { name: 'Mango', menge: 1, einheit: '' },
      { name: 'Rote Zwiebel', menge: 1, einheit: '' },
      { name: 'Koriander', menge: 0.5, einheit: 'Bund' },
      { name: 'Limette', menge: 2, einheit: '' },
      { name: 'Chilischote', menge: 1, einheit: '' },
      { name: 'Sauerrahm', menge: 150, einheit: 'g' },
      { name: 'Paprikapulver', menge: 1, einheit: 'TL' },
      { name: 'Mehl', menge: 3, einheit: 'EL' },
      { name: 'Pflanzenöl', menge: 3, einheit: 'EL' },
      { name: 'Salz', menge: null }
    ],
    schritte: [
      { text: 'Für die Salsa Mango, rote Zwiebel und Chili fein würfeln. Mit gehacktem Koriander, Saft einer Limette und Salz mischen.' },
      { text: 'Sauerrahm mit dem Saft der zweiten Limette und einer Prise Salz verrühren.' },
      { text: 'Fisch in fingerdicke Streifen schneiden, mit Salz und Paprikapulver würzen und in Mehl wenden.' },
      { text: 'Öl in einer Pfanne erhitzen und die Fischstreifen rundum goldbraun braten.', dauer: 4 },
      { text: 'Tortillas in einer trockenen Pfanne kurz erwärmen.', tipp: 'Warme Tortillas brechen nicht beim Falten.' },
      { text: 'Tortillas mit Fisch, Mango-Salsa und Limetten-Creme füllen, mit Koriander bestreuen und sofort servieren.' }
    ]
  },
  {
    id: 'smash-burger',
    titel: 'Smash-Burger',
    kategorie: 'hauptspeise',
    inspiration: 'Steffen Henssler',
    schwierigkeit: 1,
    zeit: 25,
    portionen: 4,
    emoji: '🍔',
    farbe: ['#F6C453', '#8B4513'],
    beschreibung: 'Hauchdünn in die heiße Pfanne gedrückte Patties mit Röstkruste, geschmolzenem Käse und Burgersauce.',
    zutaten: [
      { name: 'Faschiertes', menge: 600, einheit: 'g' },
      { name: 'Burger-Buns', menge: 4, einheit: '' },
      { name: 'Cheddar', menge: 8, einheit: 'Scheiben' },
      { name: 'Zwiebel', menge: 1, einheit: '' },
      { name: 'Essiggurken', menge: 4, einheit: '' },
      { name: 'Mayonnaise', menge: 4, einheit: 'EL' },
      { name: 'Ketchup', menge: 2, einheit: 'EL' },
      { name: 'Senf', menge: 1, einheit: 'TL' },
      { name: 'Butter', menge: 1, einheit: 'EL' },
      { name: 'Salz', menge: null },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Für die Sauce Mayonnaise, Ketchup, Senf und eine fein gehackte Essiggurke verrühren. Zwiebel in sehr feine Ringe schneiden.' },
      { text: 'Faschiertes in acht lockere Kugeln teilen – nicht kneten.' },
      { text: 'Buns aufschneiden und die Schnittflächen in Butter goldbraun rösten.' },
      { text: 'Eine gusseiserne Pfanne sehr heiß werden lassen. Fleischkugeln hineinlegen und sofort mit einem Pfannenwender ganz flach drücken. Salzen und pfeffern.', dauer: 2, tipp: 'Genau in den ersten Sekunden flach drücken – danach nicht mehr, sonst geht der Saft verloren.' },
      { text: 'Wenden, sofort eine Scheibe Cheddar auf jedes Patty legen und weitere 30 Sekunden braten.', dauer: 0.5 },
      { text: 'Je zwei Patties übereinander auf die Buns setzen, mit Sauce, Zwiebelringen und Gurkenscheiben belegen.' }
    ]
  },

  /* ===== Desserts ===== */
  {
    id: 'mango-milchreis',
    titel: 'Kokos-Milchreis mit Mango',
    kategorie: 'dessert',
    inspiration: 'Steffen Henssler',
    schwierigkeit: 1,
    zeit: 35,
    portionen: 4,
    emoji: '🥭',
    farbe: ['#FFD166', '#F4A261'],
    beschreibung: 'Cremiger Milchreis mit Kokosmilch und Limette, dazu frische Mango – wie in Thailand.',
    zutaten: [
      { name: 'Milchreis', menge: 200, einheit: 'g' },
      { name: 'Kokosmilch', menge: 400, einheit: 'ml' },
      { name: 'Milch', menge: 400, einheit: 'ml' },
      { name: 'Zucker', menge: 60, einheit: 'g' },
      { name: 'Mango', menge: 2, einheit: '' },
      { name: 'Limette', menge: 1, einheit: '' },
      { name: 'Kokosraspel', menge: 2, einheit: 'EL' },
      { name: 'Salz', menge: null, einheit: '1 Prise' }
    ],
    schritte: [
      { text: 'Milchreis mit Kokosmilch, Milch, Zucker und einer Prise Salz aufkochen. Bei kleinster Hitze unter gelegentlichem Rühren quellen lassen.', dauer: 30, tipp: 'Immer wieder umrühren, damit nichts am Topfboden ansetzt.' },
      { text: 'Inzwischen Kokosraspel ohne Fett goldbraun rösten.', dauer: 2 },
      { text: 'Mangos schälen und in Würfel schneiden. Mit etwas Limettensaft marinieren.' },
      { text: 'Abgeriebene Limettenschale unter den Milchreis rühren. In Schalen füllen, Mango darauf verteilen und mit Kokosraspeln bestreuen.' }
    ]
  },
  {
    id: 'erdbeeren-balsamico',
    titel: 'Pfeffer-Erdbeeren mit Balsamico & Mascarpone',
    kategorie: 'dessert',
    inspiration: 'Steffen Henssler',
    schwierigkeit: 1,
    zeit: 15,
    portionen: 4,
    emoji: '🍓',
    farbe: ['#FF6B6B', '#C9184A'],
    beschreibung: 'Ein schnelles Dessert mit Wow-Effekt: marinierte Erdbeeren mit Balsamico, schwarzem Pfeffer und Vanille-Mascarpone.',
    zutaten: [
      { name: 'Erdbeeren', menge: 500, einheit: 'g' },
      { name: 'Balsamico', menge: 2, einheit: 'EL' },
      { name: 'Zucker', menge: 2, einheit: 'EL' },
      { name: 'Mascarpone', menge: 250, einheit: 'g' },
      { name: 'Vanillezucker', menge: 1, einheit: 'Pkg.' },
      { name: 'Basilikum', menge: 4, einheit: 'Blätter' },
      { name: 'Pfeffer', menge: null, einheit: 'frisch gemahlen' }
    ],
    schritte: [
      { text: 'Erdbeeren waschen, putzen und vierteln. Mit Balsamico, Zucker und reichlich frisch gemahlenem Pfeffer mischen und ziehen lassen.', dauer: 10, tipp: 'Pfeffer verstärkt die Süße der Erdbeeren – klingt verrückt, schmeckt aber großartig.' },
      { text: 'Mascarpone mit Vanillezucker und einem Schuss Erdbeersaft aus der Schüssel cremig rühren.' },
      { text: 'Mascarpone in Gläser geben, Erdbeeren darauf verteilen und mit fein geschnittenem Basilikum garnieren.' }
    ]
  },
  {
    id: 'bananen-tempura',
    titel: 'Bananen-Tempura mit Salzkaramell',
    kategorie: 'dessert',
    inspiration: 'Steffen Henssler',
    schwierigkeit: 2,
    zeit: 25,
    portionen: 4,
    emoji: '🍌',
    farbe: ['#FFE066', '#B5651D'],
    beschreibung: 'Bananen im hauchdünnen, knusprigen Tempurateig mit warmer Karamellsauce und Vanilleeis.',
    zutaten: [
      { name: 'Bananen', menge: 3, einheit: '' },
      { name: 'Mehl', menge: 100, einheit: 'g' },
      { name: 'Speisestärke', menge: 2, einheit: 'EL' },
      { name: 'Mineralwasser', menge: 150, einheit: 'ml' },
      { name: 'Zucker', menge: 100, einheit: 'g' },
      { name: 'Schlagobers', menge: 100, einheit: 'ml' },
      { name: 'Butter', menge: 20, einheit: 'g' },
      { name: 'Vanilleeis', menge: 4, einheit: 'Kugeln' },
      { name: 'Pflanzenöl', menge: 500, einheit: 'ml' },
      { name: 'Salz', menge: null, einheit: 'Fleur de Sel' }
    ],
    schritte: [
      { text: 'Für das Karamell Zucker in einem Topf ohne Rühren goldbraun schmelzen. Vom Herd nehmen, Obers vorsichtig einrühren, Butter und eine Prise Fleur de Sel dazugeben.', tipp: 'Vorsicht, das Karamell spritzt, wenn das Obers dazukommt.' },
      { text: 'Öl in einem Topf auf etwa 175 °C erhitzen.' },
      { text: 'Mehl und Stärke mit eiskaltem Mineralwasser nur kurz verrühren – kleine Klümpchen sind erwünscht.', tipp: 'Eiskaltes Sprudelwasser und kurzes Rühren machen Tempura besonders luftig und knusprig.' },
      { text: 'Bananen schräg in dicke Stücke schneiden, durch den Teig ziehen und portionsweise goldgelb ausbacken.', dauer: 2 },
      { text: 'Kurz auf Küchenpapier abtropfen lassen und mit warmem Karamell und Vanilleeis servieren.' }
    ]
  },

  /* ===== Luxury ===== */
  {
    id: 'sashimi',
    titel: 'Sashimi-Platte mit Ponzu',
    kategorie: 'luxury',
    inspiration: 'Steffen Henssler',
    schwierigkeit: 3,
    zeit: 30,
    portionen: 4,
    emoji: '🎏',
    farbe: ['#FF8FAB', '#2B2D42'],
    beschreibung: 'Feinste rohe Fischscheiben von Thunfisch, Lachs und Gelbschwanzmakrele mit Ponzu, Wasabi und Ingwer.',
    zutaten: [
      { name: 'Thunfisch', menge: 200, einheit: 'g' },
      { name: 'Lachs', menge: 200, einheit: 'g' },
      { name: 'Hamachi', menge: 150, einheit: 'g' },
      { name: 'Sojasauce', menge: 4, einheit: 'EL' },
      { name: 'Limette', menge: 1, einheit: '' },
      { name: 'Wasabi', menge: 1, einheit: 'TL' },
      { name: 'Eingelegter Ingwer', menge: 2, einheit: 'EL' },
      { name: 'Rettich', menge: 100, einheit: 'g' },
      { name: 'Kresse', menge: 1, einheit: 'Kistchen' }
    ],
    schritte: [
      { text: 'Fisch in bester Sashimi-Qualität kaufen und bis zum Schneiden gut gekühlt lassen.', tipp: 'Das Geheimnis von Sashimi ist allein die Frische – sprich mit deinem Fischhändler.' },
      { text: 'Rettich schälen und in hauchdünne Fäden schneiden oder hobeln. In Eiswasser knackig werden lassen.', dauer: 10 },
      { text: 'Für die Ponzu Sojasauce mit Limettensaft verrühren.' },
      { text: 'Fisch mit einem sehr scharfen, langen Messer in einem einzigen Zug gegen die Faser in etwa 5 mm dicke Scheiben schneiden.', tipp: 'Ziehen statt sägen – so bleiben die Schnittflächen glatt und glänzend.' },
      { text: 'Rettichfäden abtropfen lassen und als Bett auf eine gekühlte Platte legen. Fischscheiben schuppenartig daraufsetzen, mit Wasabi, Ingwer, Kresse und Ponzu servieren.' }
    ]
  },
  {
    id: 'ribeye-wasabi',
    titel: 'Rib-Eye-Steak mit Wasabi-Butter',
    kategorie: 'luxury',
    inspiration: 'Steffen Henssler',
    schwierigkeit: 2,
    zeit: 30,
    portionen: 2,
    emoji: '🥩',
    farbe: ['#C0392B', '#2C1A1D'],
    beschreibung: 'Dry-aged Rib-Eye mit kräftiger Kruste, schmelzender Wasabi-Limetten-Butter und knusprigen Röstzwiebeln.',
    zutaten: [
      { name: 'Rib-Eye-Steak', menge: 2, einheit: 'Stück (à 350 g)' },
      { name: 'Butter', menge: 80, einheit: 'g' },
      { name: 'Wasabi', menge: 1, einheit: 'TL' },
      { name: 'Limette', menge: 1, einheit: '' },
      { name: 'Sojasauce', menge: 1, einheit: 'TL' },
      { name: 'Schalotten', menge: 2, einheit: '' },
      { name: 'Pflanzenöl', menge: 2, einheit: 'EL' },
      { name: 'Salz', menge: null, einheit: 'grobes Meersalz' },
      { name: 'Pfeffer', menge: null }
    ],
    schritte: [
      { text: 'Steaks eine Stunde vorher aus dem Kühlschrank nehmen. Ofen auf 120 °C vorheizen.' },
      { text: 'Weiche Butter mit Wasabi, Sojasauce und abgeriebener Limettenschale verrühren, zu einer Rolle formen und kalt stellen.' },
      { text: 'Schalotten in feine Ringe schneiden und in etwas Öl langsam knusprig braun braten.', dauer: 8 },
      { text: 'Steaks trocken tupfen, salzen und in einer sehr heißen Pfanne mit Öl von jeder Seite scharf anbraten.', dauer: 2, tipp: 'Das Steak erst wenden, wenn es sich von selbst von der Pfanne löst – dann sitzt die Kruste.' },
      { text: 'Im Ofen bis zu einer Kerntemperatur von 54 °C garen.', dauer: 12 },
      { text: 'Kurz rasten lassen, pfeffern und mit einer Scheibe Wasabi-Butter und Röstzwiebeln servieren.', dauer: 4 }
    ]
  },
  {
    id: 'miso-kabeljau',
    titel: 'Kabeljau mit Miso-Glasur',
    kategorie: 'luxury',
    inspiration: 'Steffen Henssler',
    schwierigkeit: 3,
    zeit: 25,
    ruhezeit: 720,
    portionen: 4,
    emoji: '🍱',
    farbe: ['#E9C46A', '#264653'],
    beschreibung: 'Über Nacht in süßer Miso-Marinade eingelegter Kabeljau, karamellisiert unter dem Grill – zart wie Butter.',
    zutaten: [
      { name: 'Kabeljau', menge: 4, einheit: 'Filets' },
      { name: 'Miso-Paste', menge: 150, einheit: 'g' },
      { name: 'Mirin', menge: 4, einheit: 'EL' },
      { name: 'Sake', menge: 4, einheit: 'EL' },
      { name: 'Zucker', menge: 60, einheit: 'g' },
      { name: 'Pak Choi', menge: 2, einheit: '' },
      { name: 'Sesamöl', menge: 1, einheit: 'TL' },
      { name: 'Ingwer', menge: 1, einheit: 'cm' }
    ],
    schritte: [
      { text: 'Mirin und Sake kurz aufkochen, Miso-Paste und Zucker einrühren, bis eine glatte Paste entsteht. Abkühlen lassen.' },
      { text: 'Kabeljau trocken tupfen, rundum mit der Marinade bestreichen und zugedeckt im Kühlschrank ziehen lassen, am besten über Nacht.', dauer: 720, tipp: 'Mindestens 12 Stunden – je länger, desto tiefer zieht das Aroma ein.' },
      { text: 'Ofengrill auf höchste Stufe vorheizen. Überschüssige Marinade vom Fisch abstreifen.' },
      { text: 'Fisch auf ein Blech mit Backpapier legen und unter dem Grill garen, bis die Oberfläche dunkel karamellisiert ist.', dauer: 10, tipp: 'Dabeibleiben! Der Zucker in der Marinade bräunt sehr schnell.' },
      { text: 'Pak Choi halbieren und in Sesamöl mit geriebenem Ingwer kurz anbraten.', dauer: 3 },
      { text: 'Kabeljau mit Pak Choi anrichten und sofort servieren.' }
    ]
  },

  /* ===== Sterneküche ===== */
  {
    id: 'thunfisch-wantan',
    titel: 'Thunfisch-Tatar mit Avocado-Wasabi & Wan-Tan-Chips',
    kategorie: 'sterne',
    inspiration: 'Steffen Henssler',
    schwierigkeit: 3,
    zeit: 40,
    portionen: 4,
    emoji: '🥢',
    farbe: ['#E63946', '#1D3557'],
    beschreibung: 'Würziges Thunfisch-Tatar auf Avocado-Wasabi-Creme mit hauchdünnen, knusprigen Wan-Tan-Chips.',
    zutaten: [
      { name: 'Thunfisch', menge: 300, einheit: 'g' },
      { name: 'Avocado', menge: 2, einheit: '' },
      { name: 'Wasabi', menge: 1, einheit: 'TL' },
      { name: 'Limette', menge: 2, einheit: '' },
      { name: 'Sojasauce', menge: 2, einheit: 'EL' },
      { name: 'Sesamöl', menge: 1, einheit: 'TL' },
      { name: 'Frühlingszwiebeln', menge: 2, einheit: '' },
      { name: 'Wan-Tan-Blätter', menge: 8, einheit: '' },
      { name: 'Sesam', menge: 1, einheit: 'EL' },
      { name: 'Kresse', menge: 1, einheit: 'Kistchen' },
      { name: 'Pflanzenöl', menge: 300, einheit: 'ml' },
      { name: 'Salz', menge: null }
    ],
    schritte: [
      { text: 'Wan-Tan-Blätter diagonal halbieren. Öl auf 170 °C erhitzen und die Dreiecke darin goldbraun und knusprig ausbacken.', dauer: 1, tipp: 'Das geht in Sekunden – sofort herausnehmen, sobald sie Farbe bekommen.' },
      { text: 'Chips auf Küchenpapier abtropfen lassen und leicht salzen.' },
      { text: 'Avocados mit Wasabi, Saft einer Limette und Salz zu einer glatten Creme pürieren.' },
      { text: 'Thunfisch in feine Würfel schneiden. Mit Sojasauce, Sesamöl, restlichem Limettensaft, Frühlingszwiebeln und Sesam marinieren.', tipp: 'Erst kurz vor dem Servieren marinieren – die Säure gart den Fisch sonst an.' },
      { text: 'Avocado-Creme als Spiegel auf den Teller streichen, Tatar mit einem Ring daraufsetzen, Chips senkrecht hineinstecken und mit Kresse vollenden.' }
    ]
  },
  {
    id: 'jakobsmuschel-yuzu',
    titel: 'Jakobsmuschel mit Yuzu-Beurre-blanc',
    kategorie: 'sterne',
    inspiration: 'Steffen Henssler',
    schwierigkeit: 4,
    zeit: 45,
    portionen: 4,
    emoji: '🐚',
    farbe: ['#FFF3B0', '#335C67'],
    beschreibung: 'Gebratene Jakobsmuscheln auf Blumenkohlpüree mit zitrusfrischer Yuzu-Buttersauce und Forellenkaviar.',
    zutaten: [
      { name: 'Jakobsmuscheln', menge: 8, einheit: 'Stück' },
      { name: 'Blumenkohl', menge: 400, einheit: 'g' },
      { name: 'Milch', menge: 200, einheit: 'ml' },
      { name: 'Butter', menge: 160, einheit: 'g' },
      { name: 'Yuzusaft', menge: 3, einheit: 'EL' },
      { name: 'Schalotten', menge: 1, einheit: '' },
      { name: 'Weißwein', menge: 80, einheit: 'ml' },
      { name: 'Forellenkaviar', menge: 40, einheit: 'g' },
      { name: 'Schnittlauch', menge: 0.5, einheit: 'Bund' },
      { name: 'Pflanzenöl', menge: 1, einheit: 'EL' },
      { name: 'Salz', menge: null }
    ],
    schritte: [
      { text: 'Blumenkohl in Röschen teilen und in Milch mit etwas Salz weich kochen.', dauer: 15 },
      { text: 'Blumenkohl abgießen (etwas Milch aufheben) und mit 30 g Butter sehr fein pürieren. Durch ein Sieb streichen und warm halten.' },
      { text: 'Für die Beurre blanc Schalotte fein würfeln und mit Weißwein und Yuzusaft fast vollständig einkochen.', dauer: 6 },
      { text: 'Bei kleiner Hitze die restliche kalte Butter in Würfeln nach und nach einschwenken. Salzen und warm halten.', tipp: 'Die Sauce darf nie kochen, sonst trennt sie sich.' },
      { text: 'Jakobsmuscheln trocken tupfen, salzen und in einer sehr heißen Pfanne mit wenig Öl pro Seite goldbraun braten.', dauer: 1.5 },
      { text: 'Püree in die Tellermitte setzen, je zwei Muscheln darauf anrichten, mit Yuzu-Beurre-blanc umgießen und mit Forellenkaviar und Schnittlauch vollenden.' }
    ]
  },
  {
    id: 'lachs-dashi',
    titel: 'Lachs mi-cuit in Dashi mit Rettich',
    kategorie: 'sterne',
    inspiration: 'Steffen Henssler',
    schwierigkeit: 4,
    zeit: 60,
    portionen: 4,
    emoji: '🍥',
    farbe: ['#FFB4A2', '#6D597A'],
    beschreibung: 'Bei niedriger Temperatur halb gegarter Lachs in klarer, umamireicher Dashi mit Rettich, Shiitake und Shiso.',
    zutaten: [
      { name: 'Lachs', menge: 400, einheit: 'g' },
      { name: 'Kombu', menge: 10, einheit: 'g' },
      { name: 'Bonitoflocken', menge: 15, einheit: 'g' },
      { name: 'Sojasauce', menge: 2, einheit: 'EL' },
      { name: 'Mirin', menge: 1, einheit: 'EL' },
      { name: 'Rettich', menge: 150, einheit: 'g' },
      { name: 'Shiitake', menge: 6, einheit: '' },
      { name: 'Frühlingszwiebeln', menge: 1, einheit: '' },
      { name: 'Shiso', menge: 4, einheit: 'Blätter' },
      { name: 'Olivenöl', menge: 2, einheit: 'EL' },
      { name: 'Salz', menge: null, einheit: 'Fleur de Sel' }
    ],
    schritte: [
      { text: 'Kombu in 1 l kaltem Wasser einweichen.', dauer: 30, tipp: 'Kombu ist getrockneter Seetang und die Basis jeder Dashi – sie liefert natürliches Umami.' },
      { text: 'Wasser mit Kombu langsam erhitzen und die Alge kurz vor dem Kochen herausnehmen. Bonitoflocken dazugeben, vom Herd ziehen und ziehen lassen.', dauer: 5 },
      { text: 'Dashi durch ein feines Tuch abseihen und mit Sojasauce und Mirin abschmecken.' },
      { text: 'Ofen auf 50 °C vorheizen. Lachs in vier Stücke schneiden, mit Olivenöl bestreichen und im Ofen glasig garen.', dauer: 20, tipp: 'Mi-cuit heißt „halb gegart“ – der Lachs bleibt innen glasig und unglaublich zart.' },
      { text: 'Rettich in feine Scheiben schneiden, Shiitake in Scheiben, und beides in der heißen Dashi kurz ziehen lassen.', dauer: 3 },
      { text: 'Lachs in tiefe Teller setzen, mit Fleur de Sel bestreuen, Gemüse dazugeben, heiße Dashi angießen und mit Frühlingszwiebel und Shiso vollenden.' }
    ]
  }
);

/* Menü im Henssler-Stil */
window.MENUES.push({
  id: 'henssler-asia',
  titel: 'Hensslers Asia-Abend',
  kategorie: 'luxury',
  inspiration: 'Steffen Henssler',
  emoji: '🍣',
  farbe: ['#F28B82', '#1D3557'],
  beschreibung: 'Thunfisch-Tataki, Miso-Kabeljau und Kokos-Milchreis mit Mango – modern, leicht und voller Umami.',
  gaenge: ['tataki', 'miso-kabeljau', 'mango-milchreis']
});
