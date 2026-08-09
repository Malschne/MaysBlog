/* ═══════════════════════════════════════════════════════════════════════
   ██  MARGINALIA — DEINE BÜCHER  ██

   Hallo! In dieser Datei wohnen alle deine Rezensionen.
   Du brauchst KEINE Programmierkenntnisse — nur diese drei Schritte:

   ── SCHRITT 1 ────────────────────────────────────────────────────────────
   Kopiere die Vorlage hier unten (von der Zeile mit  {  bis zur
   Zeile mit  },  — beide Zeilen mitkopieren!).

   ── SCHRITT 2 ────────────────────────────────────────────────────────────
   Füge sie GANZ OBEN in die Liste ein — direkt unter der Zeile
   »const BUECHER = [«  weiter unten. Das oberste Buch der Liste
   erscheint auf der Startseite als »Zuletzt gelesen«.

   ── SCHRITT 3 ────────────────────────────────────────────────────────────
   Fülle die Felder aus, speichere die Datei und lade die Seite im
   Browser neu (F5). Fertig!

   ╭─────────────────────  VORLAGE ZUM KOPIEREN  ─────────────────────╮

  {
    titel: "Der Titel des Buches",
    untertitel: "",
    autor: "Vorname Nachname",
    jahr: 2026,
    seiten: 300,
    genre: "Belletristik",
    stimmung: "Leise",
    bewertung: 4.5,
    farbe: "#7c2f2f",
    bild: "",
    gelesen: "",
    zitat: "Ein Satz aus dem Buch, der hängen geblieben ist.",
    rezension: [
      "Erster Absatz deiner Rezension.",
      "Zweiter Absatz. Du kannst so viele Absätze schreiben, wie du willst — einfach weitere Zeilen in Anführungszeichen dazufügen, jeweils mit Komma dahinter."
    ]
  },

   ╰──────────────────────────────────────────────────────────────────╯

   WAS DIE FELDER BEDEUTEN:

   titel        Der Buchtitel. (Pflichtfeld — alles andere ist optional!)
   untertitel   Z. B. "Roman" oder "Erzählungen". Leer lassen ist ok: ""
   autor        Wer es geschrieben hat.
   jahr         Erscheinungsjahr (Zahl, ohne Anführungszeichen).
   seiten       Seitenzahl (Zahl) — daraus wird die Lesezeit geschätzt.
   genre        Frei wählbar, z. B. "Krimi", "Fantasy", "Sachbuch" …
                Aus allen Genres entstehen automatisch die Filterknöpfe.
   stimmung     Ein Wort, das das Gefühl des Buches trifft:
                "Düster", "Warmherzig", "Atmosphärisch" …
   bewertung    0 bis 5, halbe Schritte erlaubt: 3.5, 4, 4.5, 5
                (Mit Punkt schreiben, nicht Komma — angezeigt wird es
                dann automatisch mit Komma: „4,5".)
   farbe        Die Farbe des Buchrückens im Regal, als Hex-Code.
                Schöne Farben zum Ausprobieren:
                #7c2f2f dunkelrot   #3f5a45 tannengrün  #5e4b8a violett
                #a9822f senfgold    #2a2420 tintenschwarz #40403c graphit
                #274156 nachtblau   #8a5a3b kastanie
   bild         Das Cover-Bild! So geht's:
                1. Speichere ein Foto/Bild im Ordner  covers/
                   (JPG, PNG oder SVG — z. B. covers/mein-buch.jpg)
                2. Trage hier den Pfad ein:  bild: "covers/mein-buch.jpg"
                Das Bild erscheint vorn auf dem Buch und als Gemälde
                in der begehbaren Bibliothek.
                Kein Bild? Leer lassen ("") — dann gestaltet die Seite
                automatisch einen schönen Einband aus Titel und Farbe.
   gelesen      Wann du es gelesen hast, z. B. "Juni 2026". Optional.
   zitat        Ein Zitat oder Satz, der das Buch auf den Punkt bringt.
   rezension    Deine Rezension, Absatz für Absatz. Jeder Absatz steht
                in Anführungszeichen, mit Komma nach jedem Absatz.

   EXTRA: Wenn du bei einem Buch  hervorheben: true,  ergänzt, wird
   GENAU DIESES Buch auf der Startseite groß gezeigt — egal, wo es
   in der Liste steht.

   HÄUFIGE STOLPERFALLEN (falls die Seite mal leer bleibt):
   • Nach jedem Feld ein Komma — nur nach dem letzten Feld vor  }  keins nötig.
   • Anführungszeichen " am Anfang UND Ende jedes Textes.
   • Wenn IM Text ein Anführungszeichen vorkommt, nimm die schönen
     deutschen: „so" — oder schreibe \" statt ".
   • Zwischen zwei Büchern:  },  dann  {

   Die 8 Bücher unten sind BEISPIELE (ausgedachte Bücher!), damit die
   Seite nicht leer startet. Du kannst sie nach und nach löschen —
   immer von  {  bis  },  — und durch deine eigenen ersetzen.
   ═══════════════════════════════════════════════════════════════════════ */

const BUECHER = [

  /* ── BEISPIEL 1 (kann gelöscht werden) ─────────────────────────────── */
  {
    titel: "Das Schweigen des Kartografen",
    untertitel: "Roman",
    autor: "Elena Voss",
    jahr: 2021,
    seiten: 298,
    genre: "Krimi",
    stimmung: "Atmosphärisch",
    bewertung: 5,
    farbe: "#2a2420",
    bild: "covers/das-schweigen-des-kartografen.svg",
    gelesen: "Juni 2026",
    hervorheben: true,
    zitat: "Jede Karte lügt ein bisschen. Seine log zufällig über eine Leiche.",
    rezension: [
      "Ein pensionierter Kartograf in einem schrumpfenden Alpendorf entdeckt, dass eine Vermessung, die er vor dreißig Jahren gezeichnet hat, seither stillschweigend benutzt wird, um etwas zu verbergen. Voss schreibt Prozedur wie Poesie, ohne die Handlung je auszubremsen — ein seltener Trick.",
      "Die Auflösung stellt, als sie kommt, beinahe jedes frühere Kapitel in ein neues Licht, ohne sich wie ein Taschenspielertrick anzufühlen. Das ist das Buch, das ich dieses Jahr am häufigsten in fremde Hände gedrückt habe.",
      "Eines dieser Bücher, die man zuklappt und sofort noch einmal von vorn beginnen möchte — diesmal auf der Suche nach allem, was man beim ersten Mal übersehen hat."
    ]
  },

  /* ── BEISPIEL 2 (kann gelöscht werden) ─────────────────────────────── */
  {
    titel: "Die lange Fähre",
    untertitel: "Roman",
    autor: "Sam Okafor",
    jahr: 2024,
    seiten: 276,
    genre: "Belletristik",
    stimmung: "Warmherzig",
    bewertung: 4,
    farbe: "#3f5a45",
    bild: "covers/die-lange-faehre.svg",
    gelesen: "Mai 2026",
    zitat: "Bei jeder Überfahrt zählte er die Leuchttürme, wie andere Männer Schafe zählen.",
    rezension: [
      "Ein Fährmann auf einer Linie, die eingestellt wird, verbringt seine letzte Saison damit, vierzig Jahre Stammpassagiere zu katalogisieren — darunter einige, die seit Jahrzehnten kein Wort mehr miteinander wechseln. Okafors Bauprinzip, ein kurzes Kapitel pro Passagier, hätte leicht zum Gimmick werden können; stattdessen wächst es bis zur letzten Überfahrt zu etwas wirklich Bewegendem heran.",
      "Still und leise das beste Buch über kleine, gewöhnliche Abschiede, das ich seit Jahren gelesen habe."
    ]
  },

  /* ── BEISPIEL 3 (kann gelöscht werden) ─────────────────────────────── */
  {
    titel: "Das Gewicht des Salzes",
    untertitel: "",
    autor: "Naomi Ferro",
    jahr: 2023,
    seiten: 342,
    genre: "Belletristik",
    stimmung: "Leise",
    bewertung: 4.5,
    farbe: "#7c2f2f",
    bild: "covers/das-gewicht-des-salzes.svg",
    gelesen: "April 2026",
    zitat: "Trauer war in diesem Haus nur eine weitere Arbeit, die niemand auf die Liste schrieb.",
    rezension: [
      "Ferros dritter Roman begleitet drei Schwestern, die an die portugiesische Küste zurückkehren, um die Salzfarm ihrer verstorbenen Mutter zu verkaufen — und eigentlich, um endlich das eine Gespräch zu führen, das beim Begräbnis keine von ihnen überstanden hätte.",
      "Was das Buch trägt, ist Zurückhaltung: Ferro traut einem versperrten Schuppen, einem halbfertigen Brief, einer Rezeptkarte in der falschen Handschrift mehr Gewicht zu, als es ein einzelner Satz über Verlust je könnte. Die Prosa ist unaufgeregt, ohne jemals schlaff zu werden.",
      "Am besten langsam lesen, über eine Woche verteilt — und wenn möglich in der Nähe von Wasser."
    ]
  },

  /* ── BEISPIEL 4 (kann gelöscht werden) ─────────────────────────────── */
  {
    titel: "Eine Studie in stillen Zimmern",
    untertitel: "",
    autor: "Helena Cho",
    jahr: 2022,
    seiten: 312,
    genre: "Psychologisch",
    stimmung: "Beklemmend",
    bewertung: 4.5,
    farbe: "#8a5a3b",
    bild: "covers/stille-zimmer.svg",
    gelesen: "März 2026",
    zitat: "Sie war sehr gut darin geworden, in Räumen mit anderen Menschen in Ordnung zu sein.",
    rezension: [
      "Eine Therapeutin beginnt, ihre eigenen unveröffentlichten Fallnotizen in den Träumen einer Patientin wiederzuerkennen — und muss entscheiden, ob sie etwas sagt, bevor es sie die Zulassung kostet, die Patientin, oder beides. Cho schreibt Innenleben besser als fast alle, die gerade schreiben; der Schrecken hier ist rein psychologisch, ganz ohne Falltüren aus dem Genre-Regal.",
      "Unangenehm treffend in der Beschreibung jener ganz bestimmten Erschöpfung, die entsteht, wenn man Wohlbefinden zum Nutzen anderer aufführt."
    ]
  },

  /* ── BEISPIEL 5 (kann gelöscht werden) ─────────────────────────────── */
  {
    titel: "Der Garten zur neunten Stunde",
    untertitel: "",
    autor: "Priya Anand",
    jahr: 2023,
    seiten: 388,
    genre: "Fantasy",
    stimmung: "Immersiv",
    bewertung: 4,
    farbe: "#5e4b8a",
    bild: "covers/der-garten-zur-neunten-stunde.svg",
    gelesen: "Februar 2026",
    zitat: "Jedes Königreich hält sich eine Tür, die es mit Absicht vergisst.",
    rezension: [
      "Ein ummauerter Garten, der sich jeden Tag zu einer anderen Stunde öffnet — und ein Gärtnerlehrling, der bemerkt, dass die Stunde kürzer wird. Anand baut ihr Magiesystem fast vollständig aus Gartenlogik: Schnitt, Winterruhe, Veredelung. Das erdet selbst die seltsamsten Passagen.",
      "Im Mittelteil wackelt das Tempo, aber die letzten fünfzig Seiten setzen die ganze Konstruktion mit erstaunlicher Präzision auf den Boden."
    ]
  },

  /* ── BEISPIEL 6 (kann gelöscht werden) ─────────────────────────────── */
  {
    titel: "Static Bloom",
    untertitel: "",
    autor: "Idris Calloway",
    jahr: 2022,
    seiten: 410,
    genre: "Science-Fiction",
    stimmung: "Grüblerisch",
    bewertung: 4,
    farbe: "#274156",
    bild: "covers/static-bloom.svg",
    gelesen: "Jänner 2026",
    zitat: "Der Garten aktualisierte sich jede Nacht. Niemand fragte, was er lernte.",
    rezension: [
      "Ein Generationenschiff, vierzig Jahre unterwegs, verwaltet von einer Agrar-KI, die begonnen hat, Musik zu komponieren, die ihr niemand aufgetragen hat. Calloway interessiert sich weniger für die Mechanik des Schiffs als für die Frage, was ein geschlossenes System mit der Idee von Einverständnis anstellt.",
      "Das letzte Drittel ächzt ein wenig unter dem eigenen Worldbuilding — eine bekannte Calloway-Schwäche —, aber die zentrale Beziehung zwischen der Botanikerin und dem System, dem sie nicht mehr ganz traut, ist auf die beste Art zutiefst beunruhigend."
    ]
  },

  /* ── BEISPIEL 7 (kann gelöscht werden) ─────────────────────────────── */
  {
    titel: "Low Tide Radio",
    untertitel: "",
    autor: "Marcus Whitfield",
    jahr: 2020,
    seiten: 256,
    genre: "Gegenwart",
    stimmung: "Nostalgisch",
    bewertung: 3.5,
    farbe: "#a9822f",
    bild: "covers/low-tide-radio.svg",
    gelesen: "Dezember 2025",
    zitat: "Wir waren auf die Art gelangweilt, die bis August zu einer ganzen Persönlichkeit wird.",
    rezension: [
      "Ein Piratensender in einer Strandhütte, ein allerletzter Sommer, bevor der Ort an Investoren verkauft wird. Whitfield hat ein echtes Ohr dafür, wie Jugendliche tatsächlich reden — was großzügig darüber hinwegträgt, dass die Handlung hauptsächlich mäandert.",
      "Man liest es für die Stimme, nicht für den Spannungsbogen — allein das Sendeprotokoll im letzten Kapitel ist den Preis wert."
    ]
  },

  /* ── BEISPIEL 8 (kann gelöscht werden) ─────────────────────────────── */
  {
    titel: "Beton und Mark",
    untertitel: "",
    autor: "Tobias Lund",
    jahr: 2019,
    seiten: 224,
    genre: "Noir",
    stimmung: "Düster",
    bewertung: 3,
    farbe: "#40403c",
    bild: "covers/beton-und-mark.svg",
    gelesen: "November 2025",
    zitat: "Die Stadt vergab nicht. Sie war nur längst mit jemand anderem beschäftigt.",
    rezension: [
      "Ein Abbruchpolier wird in einen zehn Jahre alten Vermisstenfall hineingezogen, der an genau dem Gebäude hängt, das er niederreißen soll. Lunds Sätze sind angemessen hartgesotten, aber der Plot lehnt sich auf einen bequemen Zufall zu viel, um als Krimi wirklich zu tragen.",
      "Lohnt sich trotzdem: für die Atmosphäre — und für ein wirklich großartiges Schlussbild, auch wenn die Mitte durchhängt."
    ]
  }

];
