/**
 * J.S. Bach - Matthäus-Passion (St. Matthew Passion) BWV 244
 * Complete listing of all 68 movements.
 *
 * Numbering follows the Neue Bach-Ausgabe (NBA) standard edition.
 * Many editions use a different numbering with sub-sections (e.g., 26a, 26b).
 * This file uses the consolidated 68-movement count commonly found in
 * vocal scores and CD track listings (Bärenreiter / Breitkopf).
 *
 * Durations are approximate (in minutes), drawn from representative recordings
 * (Gardiner 1988, Herreweghe 1999, Suzuki 1999, Richter 1958, Klemperer 1961).
 *
 * Libretto: Christian Friedrich Henrici ("Picander"), 1725/1729
 * Biblical text: Gospel of Matthew, chapters 26–27 (Luther Bible)
 * Chorale texts: various Protestant hymn writers
 *
 * Scored for:
 *   - Two SATB choruses (Coro I & Coro II)
 *   - Two orchestras (each: 2 flutes, 2 oboes/oboe d'amore/oboe da caccia,
 *     strings, organ & continuo)
 *   - Viola da gamba (in No. 57)
 *   - Soloists: Evangelist (Tenor), Jesus (Bass-Baritone),
 *     Soprano I & II, Alto I & II, Tenor I & II, Bass I & II
 *   - Ripieno soprano chorus (in the opening movement only)
 *
 * Total approximate duration: 160–180 minutes (varies by interpretation)
 */

const movements = [

  // =======================================================================
  //  ERSTER TEIL / PART ONE  (Movements 1–29)
  // =======================================================================

  {
    number: 1,
    type: "chorus",
    part: 1,
    section: "Prologue",
    germanTitle: "Kommt, ihr Töchter, helft mir klagen",
    englishTitle: "Come, ye daughters, share my mourning",
    scoring: "Coro I & II, Orchestra I & II, Ripieno Soprano (chorale: 'O Lamm Gottes, unschuldig')",
    key: "E minor",
    duration: 7.5,
    bibleRef: null,
    notes: "Monumental opening double chorus in 12/8 time. The ripieno soprano intones the chorale cantus firmus 'O Lamm Gottes, unschuldig' (O Lamb of God, most holy) above a dramatic dialogue between the two main choruses."
  },

  // --- The Conspiracy and Anointing at Bethany ---

  {
    number: 2,
    type: "recitative",
    part: 1,
    section: "The Conspiracy",
    germanTitle: "Da Jesus diese Rede vollendet hatte, sprach er zu seinen Jüngern",
    englishTitle: "When Jesus had finished all these sayings, He said unto His disciples",
    scoring: "Evangelist (T), Jesus (B), Strings, Continuo",
    key: null,
    duration: 1.0,
    bibleRef: "Matthew 26:1–2",
    notes: "Jesus foretells His crucifixion. Jesus' words (vox Christi) are always accompanied by sustained strings — the so-called 'halo' — except at His final cry from the cross."
  },
  {
    number: 3,
    type: "chorale",
    part: 1,
    section: "The Conspiracy",
    germanTitle: "Herzliebster Jesu, was hast du verbrochen",
    englishTitle: "Beloved Jesus, what is Thy transgression",
    scoring: "Coro I & II",
    key: "D minor",
    duration: 1.0,
    bibleRef: null,
    notes: "Hymn text by Johann Heermann (1630); melody by Johann Crüger."
  },
  {
    number: 4,
    type: "recitative",
    part: 1,
    section: "The Conspiracy",
    germanTitle: "Da versammleten sich die Hohenpriester und Schriftgelehrten und die Ältesten im Volk",
    englishTitle: "Then assembled together the chief priests and the scribes and the elders of the people",
    scoring: "Evangelist (T), Continuo",
    key: null,
    duration: 1.5,
    bibleRef: "Matthew 26:3–5",
    notes: "The conspiracy in the palace of Caiaphas. Includes the turba interjection 'Ja nicht auf das Fest' (No. 4e/5 in some numberings)."
  },
  {
    number: 5,
    type: "recitative",
    part: 1,
    section: "The Anointing at Bethany",
    germanTitle: "Da nun Jesus war zu Bethanien, im Hause Simonis des Aussätzigen",
    englishTitle: "Now when Jesus was in Bethany, in the house of Simon the leper",
    scoring: "Evangelist (T), Continuo",
    key: null,
    duration: 2.0,
    bibleRef: "Matthew 26:6–13",
    notes: "A woman anoints Jesus with precious ointment. The disciples protest the expense; Jesus defends her act as preparation for His burial."
  },
  {
    number: 6,
    type: "recitative",
    part: 1,
    section: "The Anointing at Bethany",
    germanTitle: "Buß und Reu",
    englishTitle: "Grief and remorse",
    scoring: "Alto (Coro II), Continuo",
    key: null,
    duration: 0.5,
    bibleRef: null,
    notes: "Brief accompanied recitative introducing the following aria. Text: Picander."
  },
  {
    number: 7,
    type: "aria",
    part: 1,
    section: "The Anointing at Bethany",
    germanTitle: "Buß und Reu knirscht das Sündenherz entzwei",
    englishTitle: "Grief and sin rend the guilty heart in twain",
    scoring: "Alto (Coro II), Flauto dolce I/II, Continuo",
    key: "F-sharp minor",
    duration: 5.5,
    bibleRef: null,
    notes: "Siciliano rhythm. The woman's tears of anointing become the congregation's tears of penitence. Text: Picander."
  },

  // --- Judas' Betrayal ---

  {
    number: 8,
    type: "recitative",
    part: 1,
    section: "Judas' Betrayal",
    germanTitle: "Da ging hin der Zwölfen einer, mit Namen Judas Ischarioth, zu den Hohenpriestern",
    englishTitle: "Then went one of the twelve, called Judas Iscariot, unto the chief priests",
    scoring: "Evangelist (T), Judas (B), Continuo",
    key: null,
    duration: 0.75,
    bibleRef: "Matthew 26:14–16",
    notes: "Judas agrees to betray Jesus for thirty pieces of silver."
  },
  {
    number: 9,
    type: "aria",
    part: 1,
    section: "Judas' Betrayal",
    germanTitle: "Blute nur, du liebes Herz!",
    englishTitle: "Bleed on, thou dear heart!",
    scoring: "Soprano (Coro II), Flauto dolce I/II, Continuo",
    key: "B minor",
    duration: 4.5,
    bibleRef: null,
    notes: "Lament over Judas' treachery: the child Jesus nourished has become a serpent. Text: Picander."
  },

  // --- The Last Supper ---

  {
    number: 10,
    type: "recitative",
    part: 1,
    section: "The Last Supper",
    germanTitle: "Aber am ersten Tage der süßen Brot traten die Jünger zu Jesu",
    englishTitle: "Now the first day of the feast of unleavened bread the disciples came to Jesus",
    scoring: "Evangelist (T), Continuo",
    key: null,
    duration: 0.5,
    bibleRef: "Matthew 26:17",
    notes: "Brief narrative linking to the disciples' question."
  },
  {
    number: 11,
    type: "chorus",
    part: 1,
    section: "The Last Supper",
    germanTitle: "Wo willst du, daß wir dir bereiten, das Osterlamm zu essen?",
    englishTitle: "Where wilt Thou that we prepare for Thee to eat the Passover?",
    scoring: "Coro I",
    key: "E major",
    duration: 0.75,
    bibleRef: "Matthew 26:17b",
    notes: "Turba chorus of the Disciples (Chorus I only)."
  },
  {
    number: 12,
    type: "recitative",
    part: 1,
    section: "The Last Supper",
    germanTitle: "Er sprach: Gehet hin in die Stadt zu einem und sprecht zu ihm",
    englishTitle: "He said: Go into the city to such a man, and say unto him",
    scoring: "Evangelist (T), Jesus (B), Strings, Continuo",
    key: null,
    duration: 2.0,
    bibleRef: "Matthew 26:18–22",
    notes: "Jesus sends disciples to prepare the Passover; at supper He announces one of them will betray Him."
  },
  {
    number: 13,
    type: "chorus",
    part: 1,
    section: "The Last Supper",
    germanTitle: "Herr, bin ich's?",
    englishTitle: "Lord, is it I?",
    scoring: "Coro I & II (11 entries)",
    key: null,
    duration: 0.75,
    bibleRef: "Matthew 26:22b",
    notes: "Eleven overlapping entries — one for each faithful disciple. Intensely chromatic and dissonant."
  },
  {
    number: 14,
    type: "recitative",
    part: 1,
    section: "The Last Supper",
    germanTitle: "Er antwortete und sprach",
    englishTitle: "He answered and said",
    scoring: "Evangelist (T), Jesus (B), Judas (B), Strings, Continuo",
    key: null,
    duration: 1.0,
    bibleRef: "Matthew 26:23–25",
    notes: "Jesus identifies the betrayer. Judas asks 'Bin ich's, Rabbi?' (Is it I, Master?)"
  },
  {
    number: 15,
    type: "chorale",
    part: 1,
    section: "The Last Supper",
    germanTitle: "Erkenne mich, mein Hüter",
    englishTitle: "Receive me, my Redeemer",
    scoring: "Coro I & II",
    key: "B major",
    duration: 1.0,
    bibleRef: null,
    notes: "Text: Paul Gerhardt (1656). Melody: 'O Haupt voll Blut und Wunden' (Hans Leo Hassler, 1601). First statement of the Passion Chorale."
  },
  {
    number: 16,
    type: "recitative",
    part: 1,
    section: "The Last Supper",
    germanTitle: "Und da sie aßen, nahm Jesus das Brot, dankete und brach's",
    englishTitle: "And as they were eating, Jesus took bread, and blessed it, and brake it",
    scoring: "Evangelist (T), Jesus (B), Strings, Continuo",
    key: null,
    duration: 1.5,
    bibleRef: "Matthew 26:26–29",
    notes: "The Institution of the Lord's Supper. 'This is my body... this is my blood of the new testament.'"
  },
  {
    number: 17,
    type: "recitative",
    part: 1,
    section: "The Last Supper",
    germanTitle: "Ich will dir mein Herze schenken",
    englishTitle: "I would bestow my heart on Thee",
    scoring: "Soprano (Coro I), Oboe d'amore I/II, Continuo",
    key: "A-flat major",
    duration: 3.5,
    bibleRef: null,
    notes: "Lyrical accompanied recitative (sometimes classified as aria/arioso). A devotional response to the Eucharist. Text: Picander."
  },

  // --- The Mount of Olives ---

  {
    number: 18,
    type: "recitative",
    part: 1,
    section: "The Mount of Olives",
    germanTitle: "Und da sie den Lobgesang gesprochen hatten, gingen sie hinaus an den Ölberg",
    englishTitle: "And when they had sung a hymn, they went out into the Mount of Olives",
    scoring: "Evangelist (T), Jesus (B), Strings, Continuo",
    key: null,
    duration: 2.0,
    bibleRef: "Matthew 26:30–32",
    notes: "Jesus foretells that the disciples will desert Him and that He will go before them into Galilee."
  },
  {
    number: 19,
    type: "chorale",
    part: 1,
    section: "The Mount of Olives",
    germanTitle: "Ich will hier bei dir stehen; verachte mich doch nicht!",
    englishTitle: "I would beside Thee stand; reject me not, I pray!",
    scoring: "Coro I & II",
    key: "E major",
    duration: 1.0,
    bibleRef: null,
    notes: "Text: Paul Gerhardt. Melody: 'O Haupt voll Blut und Wunden.'"
  },
  {
    number: 20,
    type: "recitative",
    part: 1,
    section: "The Mount of Olives",
    germanTitle: "Petrus aber antwortete und sprach zu ihm",
    englishTitle: "Peter answered and said unto Him",
    scoring: "Evangelist (T), Jesus (B), Peter (B), Strings, Continuo",
    key: null,
    duration: 1.5,
    bibleRef: "Matthew 26:33–35",
    notes: "Peter protests his loyalty; Jesus predicts Peter will deny Him three times before the cock crows."
  },
  {
    number: 21,
    type: "chorale",
    part: 1,
    section: "The Mount of Olives",
    germanTitle: "Erkenne mich, mein Hüter",
    englishTitle: "Receive me, my Redeemer",
    scoring: "Coro I & II",
    key: "E-flat major",
    duration: 1.0,
    bibleRef: null,
    notes: "Same text as No. 15 but different key and harmonization. Melody: 'O Haupt voll Blut und Wunden.'"
  },

  // --- Gethsemane ---

  {
    number: 22,
    type: "recitative",
    part: 1,
    section: "Gethsemane",
    germanTitle: "Da kam Jesus mit ihnen zu einem Hofe, der hieß Gethsemane",
    englishTitle: "Then cometh Jesus with them unto a place called Gethsemane",
    scoring: "Evangelist (T), Jesus (B), Strings, Continuo",
    key: null,
    duration: 1.5,
    bibleRef: "Matthew 26:36–38",
    notes: "Arrival at Gethsemane. 'My soul is exceeding sorrowful, even unto death.'"
  },
  {
    number: 23,
    type: "recitative",
    part: 1,
    section: "Gethsemane",
    germanTitle: "O Schmerz! Hier zittert das gequälte Herz",
    englishTitle: "O grief! Here trembles the tormented heart",
    scoring: "Tenor (Coro I), Coro II (chorale: 'Was ist die Ursach aller solcher Plagen'), Oboe, Continuo",
    key: "B minor",
    duration: 2.5,
    bibleRef: null,
    notes: "Accompanied recitative with interpolated chorale stanzas. Text: Picander / Paul Gerhardt."
  },
  {
    number: 24,
    type: "aria",
    part: 1,
    section: "Gethsemane",
    germanTitle: "Ich will bei meinem Jesu wachen",
    englishTitle: "I would beside my Lord be watching",
    scoring: "Tenor (Coro I), Oboe, Coro II, Continuo",
    key: "F-sharp minor",
    duration: 6.0,
    bibleRef: null,
    notes: "Ternary da-capo aria with choral interjections: 'So schlafen unsre Sünden ein' (Thus shall our sins fall into slumber). Text: Picander."
  },
  {
    number: 25,
    type: "recitative",
    part: 1,
    section: "Gethsemane",
    germanTitle: "Und ging hin ein wenig, fiel nieder auf sein Angesicht und betete",
    englishTitle: "And He went a little farther, and fell on His face, and prayed",
    scoring: "Evangelist (T), Jesus (B), Strings, Continuo",
    key: null,
    duration: 2.5,
    bibleRef: "Matthew 26:39–44",
    notes: "The Agony in the Garden. Three prayers: 'O my Father, if it be possible, let this cup pass from me.' The disciples fall asleep each time."
  },

  // --- The Arrest ---

  {
    number: 26,
    type: "recitative",
    part: 1,
    section: "The Arrest",
    germanTitle: "Und er kam zu seinen Jüngern und fand sie schlafend",
    englishTitle: "And He came to His disciples, and found them sleeping",
    scoring: "Evangelist (T), Jesus (B), Judas (B), Strings, Continuo",
    key: null,
    duration: 2.0,
    bibleRef: "Matthew 26:45–50",
    notes: "Jesus wakes the disciples; Judas arrives with the armed crowd. The kiss of betrayal: 'Hail, Master!' (Gegrüßet seist du, Rabbi!)"
  },
  {
    number: 27,
    type: "aria",
    part: 1,
    section: "The Arrest",
    germanTitle: "So ist mein Jesus nun gefangen",
    englishTitle: "So is my Jesus now taken captive",
    scoring: "Soprano & Alto (Coro II), Flauto I/II, Oboe I/II, Continuo; then Coro I & II",
    key: "E major / E minor",
    duration: 5.0,
    bibleRef: null,
    notes: "Duet aria with dramatic double-chorus interruption: 'Laßt ihn, haltet, bindet nicht!' (Leave him! Stop! Bind him not!) expanding into the thunderous 'Sind Blitze, sind Donner in Wolken verschwunden?' Text: Picander."
  },
  {
    number: 28,
    type: "recitative",
    part: 1,
    section: "The Arrest",
    germanTitle: "Und siehe, einer aus denen, die mit Jesu waren, reckete die Hand aus",
    englishTitle: "And, behold, one of them which were with Jesus stretched out his hand",
    scoring: "Evangelist (T), Jesus (B), Strings, Continuo",
    key: null,
    duration: 3.0,
    bibleRef: "Matthew 26:51–56",
    notes: "A servant's ear is cut off; Jesus rebukes violence. 'Then all the disciples forsook Him, and fled.'"
  },
  {
    number: 29,
    type: "chorale",
    part: 1,
    section: "Close of Part One",
    germanTitle: "O Mensch, bewein dein Sünde groß",
    englishTitle: "O man, bewail thy grievous sin",
    scoring: "Coro I (with Coro II), Orchestra I & II",
    key: "E-flat major",
    duration: 6.5,
    bibleRef: null,
    notes: "Grand chorale fantasia closing Part One. Originally the opening chorus of the 1727 version (BWV 244b). Melody by Matthias Greiter (1525); text by Sebald Heyden. A vast, emotional summation of Part One."
  },

  // =======================================================================
  //  ZWEITER TEIL / PART TWO  (Movements 30–68)
  // =======================================================================

  {
    number: 30,
    type: "aria",
    part: 2,
    section: "Opening of Part Two",
    germanTitle: "Ach, nun ist mein Jesus hin!",
    englishTitle: "Alas! Now is my Jesus gone!",
    scoring: "Alto (Coro I), Oboe d'amore I/II, Continuo; Coro II (interjections)",
    key: "G-sharp minor",
    duration: 4.0,
    bibleRef: null,
    notes: "Opening of Part Two. Dialogue between the Daughter of Zion (alto) and the Faithful (Coro II): 'Wo ist denn dein Freund hingegangen?' (Where has your beloved gone?) — alluding to Song of Solomon. Text: Picander."
  },

  // --- Before Caiaphas ---

  {
    number: 31,
    type: "recitative",
    part: 2,
    section: "Before Caiaphas",
    germanTitle: "Die aber Jesum gegriffen hatten, führeten ihn zu dem Hohenpriester Kaiphas",
    englishTitle: "And they that had laid hold on Jesus led Him to Caiaphas the high priest",
    scoring: "Evangelist (T), Continuo",
    key: null,
    duration: 1.0,
    bibleRef: "Matthew 26:57–58",
    notes: "Jesus is led to Caiaphas. Peter follows at a distance and sits with the servants."
  },
  {
    number: 32,
    type: "chorale",
    part: 2,
    section: "Before Caiaphas",
    germanTitle: "Mir hat die Welt trüglich gericht't mit Lügen und mit falschem G'dicht",
    englishTitle: "The world has set for me a snare with lies and false pretence",
    scoring: "Coro I & II",
    key: "A major",
    duration: 0.75,
    bibleRef: null,
    notes: "Text: Adam Reusner (1533). Melody: 'O Welt, ich muß dich lassen' (Heinrich Isaac)."
  },
  {
    number: 33,
    type: "recitative",
    part: 2,
    section: "Before Caiaphas",
    germanTitle: "Und wiewohl viel falsche Zeugen herzutraten, funden sie doch keins",
    englishTitle: "Now though many false witnesses came, yet found they none",
    scoring: "Evangelist (T), Witnesses (A, T), High Priest (B), Jesus (B), Strings, Continuo",
    key: null,
    duration: 3.0,
    bibleRef: "Matthew 26:59–64",
    notes: "False witnesses; the High Priest adjures Jesus; Jesus declares 'Du sagest's' (Thou hast said it) and prophesies the Son of Man at the right hand of power."
  },
  {
    number: 34,
    type: "recitative",
    part: 2,
    section: "Before Caiaphas",
    germanTitle: "Mein Jesus schweigt zu falschen Lügen stille",
    englishTitle: "My Jesus holds His peace at lying speeches",
    scoring: "Tenor (Coro II), Continuo",
    key: null,
    duration: 1.0,
    bibleRef: null,
    notes: "Accompanied recitative meditating on Jesus' silence in the face of false accusation. Text: Picander."
  },
  {
    number: 35,
    type: "aria",
    part: 2,
    section: "Before Caiaphas",
    germanTitle: "Geduld! Wenn mich falsche Zungen stechen",
    englishTitle: "Patience! When false tongues do sting me",
    scoring: "Tenor (Coro II), Continuo",
    key: "D minor",
    duration: 3.5,
    bibleRef: null,
    notes: "Aria with continuo only. A meditation on patient endurance. Text: Picander."
  },
  {
    number: 36,
    type: "recitative",
    part: 2,
    section: "The Condemnation",
    germanTitle: "Und der Hohepriester antwortete und sprach",
    englishTitle: "And the high priest answered and said",
    scoring: "Evangelist (T), High Priest (B), Continuo",
    key: null,
    duration: 1.0,
    bibleRef: "Matthew 26:65–66",
    notes: "The High Priest rends his clothes: 'He hath spoken blasphemy!'"
  },
  {
    number: 37,
    type: "chorus",
    part: 2,
    section: "The Condemnation",
    germanTitle: "Er ist des Todes schuldig!",
    englishTitle: "He is guilty of death!",
    scoring: "Coro I & II",
    key: null,
    duration: 0.5,
    bibleRef: "Matthew 26:66b",
    notes: "Violent turba chorus — the verdict of the Sanhedrin."
  },
  {
    number: 38,
    type: "recitative",
    part: 2,
    section: "The Condemnation",
    germanTitle: "Da speieten sie aus in sein Angesicht und schlugen ihn mit Fäusten",
    englishTitle: "Then did they spit in His face, and buffeted Him",
    scoring: "Evangelist (T), Continuo",
    key: null,
    duration: 0.75,
    bibleRef: "Matthew 26:67–68",
    notes: "Jesus is struck and mocked. Includes the turba chorus 'Weissage uns, Christe' (Prophesy to us, Christ)."
  },
  {
    number: 39,
    type: "chorale",
    part: 2,
    section: "The Condemnation",
    germanTitle: "Wer hat dich so geschlagen, mein Heil, und dich mit Plagen",
    englishTitle: "O Lord, who dares to smite Thee, and falsely to indict Thee",
    scoring: "Coro I & II",
    key: null,
    duration: 1.0,
    bibleRef: null,
    notes: "Text: Paul Gerhardt. Melody: 'O Haupt voll Blut und Wunden.'"
  },

  // --- Peter's Denial ---

  {
    number: 40,
    type: "recitative",
    part: 2,
    section: "Peter's Denial",
    germanTitle: "Petrus aber saß draußen im Palast; und es trat zu ihm eine Magd",
    englishTitle: "Now Peter sat without in the palace: and a damsel came unto him",
    scoring: "Evangelist (T), Peter (B), Maids (S I/II), Bystanders, Continuo",
    key: null,
    duration: 3.0,
    bibleRef: "Matthew 26:69–75",
    notes: "Peter's threefold denial and the crowing of the cock. 'And he went out, and wept bitterly.' The Evangelist's melisma on 'weinete bitterlich' (wept bitterly) is one of the most poignant moments."
  },
  {
    number: 41,
    type: "aria",
    part: 2,
    section: "Peter's Denial",
    germanTitle: "Erbarme dich, mein Gott, um meiner Zähren willen!",
    englishTitle: "Have mercy, Lord, on me, regard my bitter weeping!",
    scoring: "Alto (Coro II), Violino solo, Continuo",
    key: "B minor",
    duration: 7.0,
    bibleRef: null,
    notes: "Perhaps the most celebrated movement of the entire work. Sublime solo violin obbligato over a lilting siciliano bass. One of the pinnacles of Baroque music. Text: Picander."
  },
  {
    number: 42,
    type: "chorale",
    part: 2,
    section: "Peter's Denial",
    germanTitle: "Bin ich gleich von dir gewichen, stell ich mich doch wieder ein",
    englishTitle: "Though I have from Thee departed, I will yet return again",
    scoring: "Coro I & II",
    key: null,
    duration: 1.0,
    bibleRef: null,
    notes: "Text: Christian Friedrich Richter. Melody: 'Werde munter, mein Gemüte' (Johann Schop)."
  },

  // --- The Death of Judas ---

  {
    number: 43,
    type: "recitative",
    part: 2,
    section: "The Death of Judas",
    germanTitle: "Des Morgens aber hielten alle Hohenpriester und die Ältesten des Volks einen Rat über Jesum, daß sie ihn töteten",
    englishTitle: "When the morning was come, all the chief priests and elders of the people took counsel against Jesus to put Him to death",
    scoring: "Evangelist (T), Judas (B), Continuo",
    key: null,
    duration: 2.5,
    bibleRef: "Matthew 27:1–4",
    notes: "The remorse of Judas. He returns the thirty pieces: 'I have sinned in that I have betrayed the innocent blood.'"
  },
  {
    number: 44,
    type: "chorus",
    part: 2,
    section: "The Death of Judas",
    germanTitle: "Was gehet uns das an? Da siehe du zu!",
    englishTitle: "What is that to us? See thou to that!",
    scoring: "Coro I & II",
    key: null,
    duration: 0.5,
    bibleRef: "Matthew 27:4b",
    notes: "Brutally dismissive turba chorus of the priests."
  },
  {
    number: 45,
    type: "recitative",
    part: 2,
    section: "The Death of Judas",
    germanTitle: "Und er warf die Silberlinge in den Tempel, hub sich davon, ging hin und erhängete sich selbst",
    englishTitle: "And he cast down the pieces of silver in the temple, and departed, and went and hanged himself",
    scoring: "Evangelist (T), Two Priests (B I/II), Continuo",
    key: null,
    duration: 1.5,
    bibleRef: "Matthew 27:5–8",
    notes: "Judas hangs himself. The priests buy the Potter's Field (Aceldama) with the blood money."
  },
  {
    number: 46,
    type: "aria",
    part: 2,
    section: "The Death of Judas",
    germanTitle: "Gebt mir meinen Jesum wieder!",
    englishTitle: "Give me back my Lord and Saviour!",
    scoring: "Bass (Coro II), Violino solo, Continuo",
    key: "G minor",
    duration: 3.5,
    bibleRef: null,
    notes: "Vigorous bass aria with virtuosic solo violin obbligato. The thirty silver pieces are flung back. Text: Picander."
  },

  // --- Before Pilate ---

  {
    number: 47,
    type: "recitative",
    part: 2,
    section: "Before Pilate",
    germanTitle: "Sie hielten aber einen Rat und kauften einen Töpfersacker darum",
    englishTitle: "And they took counsel, and bought with them the potter's field",
    scoring: "Evangelist (T), Pilate (B), Jesus (B), Strings, Continuo",
    key: null,
    duration: 3.0,
    bibleRef: "Matthew 27:7–14",
    notes: "Fulfillment of Jeremiah's prophecy. Jesus is led before Pilate and questioned: 'Art thou the King of the Jews?' Jesus answers 'Du sagest's' but nothing more."
  },
  {
    number: 48,
    type: "chorale",
    part: 2,
    section: "Before Pilate",
    germanTitle: "Befiehl du deine Wege und was dein Herze kränkt",
    englishTitle: "Commit thy way to Jesus, thy burdens and thy cares",
    scoring: "Coro I & II",
    key: null,
    duration: 1.0,
    bibleRef: null,
    notes: "Text: Paul Gerhardt (1653). Melody: 'O Haupt voll Blut und Wunden.'"
  },
  {
    number: 49,
    type: "recitative",
    part: 2,
    section: "Before Pilate",
    germanTitle: "Auf das Fest aber hatte der Landpfleger Gewohnheit, dem Volk einen Gefangenen loszugeben",
    englishTitle: "Now at that feast the governor was wont to release unto the people a prisoner",
    scoring: "Evangelist (T), Pilate (B), Pilate's Wife (S), Continuo",
    key: null,
    duration: 2.0,
    bibleRef: "Matthew 27:15–22",
    notes: "The choice between Barabbas and Jesus. Pilate's wife sends word: 'Have thou nothing to do with that just man.' The crowd demands Barabbas."
  },
  {
    number: 50,
    type: "chorus",
    part: 2,
    section: "Before Pilate",
    germanTitle: "Laß ihn kreuzigen!",
    englishTitle: "Let Him be crucified!",
    scoring: "Coro I & II",
    key: null,
    duration: 0.75,
    bibleRef: "Matthew 27:22b",
    notes: "First 'Crucify' chorus. Stark, violent homophony."
  },
  {
    number: 51,
    type: "recitative",
    part: 2,
    section: "Before Pilate",
    germanTitle: "Der Landpfleger sagte: Was hat er denn Übles getan?",
    englishTitle: "The governor said: Why, what evil hath He done?",
    scoring: "Evangelist (T), Pilate (B), Continuo",
    key: null,
    duration: 0.5,
    bibleRef: "Matthew 27:23a",
    notes: "Pilate's attempt to reason with the crowd."
  },
  {
    number: 52,
    type: "recitative",
    part: 2,
    section: "Before Pilate",
    germanTitle: "Er hat uns allen wohlgetan",
    englishTitle: "He has done good unto us all",
    scoring: "Soprano (Coro I), Oboe I/II, Continuo",
    key: null,
    duration: 2.0,
    bibleRef: null,
    notes: "Accompanied recitative pleading Jesus' innocence: He healed the blind, the lame, the sick. Text: Picander."
  },
  {
    number: 53,
    type: "aria",
    part: 2,
    section: "Before Pilate",
    germanTitle: "Aus Liebe will mein Heiland sterben",
    englishTitle: "For love my Saviour now is dying",
    scoring: "Soprano (Coro I), Flauto traverso, Oboe da caccia I/II (no continuo)",
    key: "A minor",
    duration: 4.5,
    bibleRef: null,
    notes: "Ethereal aria uniquely scored without bass continuo — only flute and two oboe da caccia. The absence of the bass line symbolizes Jesus' innocence ('von einer Sünde weiß er nichts'). Text: Picander."
  },
  {
    number: 54,
    type: "chorus",
    part: 2,
    section: "Before Pilate",
    germanTitle: "Laß ihn kreuzigen!",
    englishTitle: "Let Him be crucified!",
    scoring: "Coro I & II",
    key: null,
    duration: 1.0,
    bibleRef: "Matthew 27:23b",
    notes: "Second 'Crucify' chorus, more intense and elaborated than the first."
  },
  {
    number: 55,
    type: "recitative",
    part: 2,
    section: "Before Pilate",
    germanTitle: "Da aber Pilatus sahe, daß er nichts schaffete",
    englishTitle: "When Pilate saw that he could prevail nothing",
    scoring: "Evangelist (T), Pilate (B), Continuo",
    key: null,
    duration: 1.0,
    bibleRef: "Matthew 27:24–26",
    notes: "Pilate washes his hands: 'I am innocent of the blood of this just person.'"
  },
  {
    number: 56,
    type: "chorus",
    part: 2,
    section: "Before Pilate",
    germanTitle: "Sein Blut komme über uns und unsre Kinder!",
    englishTitle: "His blood be on us and on our children!",
    scoring: "Coro I & II",
    key: null,
    duration: 0.75,
    bibleRef: "Matthew 27:25",
    notes: "Turba chorus of the crowd accepting responsibility for Jesus' death."
  },
  {
    number: 57,
    type: "recitative",
    part: 2,
    section: "The Scourging and Mocking",
    germanTitle: "Da gab er ihnen Barrabam los, aber Jesum ließ er geißeln und überantwortete ihn, daß er gekreuziget würde",
    englishTitle: "Then released he Barabbas unto them: and when he had scourged Jesus, he delivered Him to be crucified",
    scoring: "Evangelist (T), Continuo",
    key: null,
    duration: 1.5,
    bibleRef: "Matthew 27:26–30",
    notes: "The scourging; the soldiers' mockery: crown of thorns, scarlet robe, reed sceptre. Includes the turba chorus 'Gegrüßet seist du, Jüdenkönig!' (Hail, King of the Jews!)."
  },
  {
    number: 58,
    type: "recitative",
    part: 2,
    section: "The Way to Golgotha",
    germanTitle: "Erbarm es Gott! Hier steht der Heiland angebunden",
    englishTitle: "God have mercy! Here stands the Saviour bound",
    scoring: "Alto (Coro II), Continuo",
    key: null,
    duration: 1.5,
    bibleRef: null,
    notes: "Accompanied recitative contemplating the scourging. Text: Picander."
  },
  {
    number: 59,
    type: "aria",
    part: 2,
    section: "The Way to Golgotha",
    germanTitle: "Können Tränen meiner Wangen nichts erlangen",
    englishTitle: "If my tears be unavailing, take my heart",
    scoring: "Alto (Coro II), Flauto traverso I/II, Oboe da caccia I/II, Continuo",
    key: "C minor",
    duration: 6.0,
    bibleRef: null,
    notes: "Deeply expressive alto aria. Text: Picander."
  },
  {
    number: 60,
    type: "recitative",
    part: 2,
    section: "The Way to Golgotha",
    germanTitle: "Und da sie ihn verspottet hatten, zogen sie ihm den Mantel aus",
    englishTitle: "And after that they had mocked Him, they took the robe off from Him",
    scoring: "Evangelist (T), Continuo",
    key: null,
    duration: 1.0,
    bibleRef: "Matthew 27:31–32",
    notes: "Jesus is led out to be crucified. Simon of Cyrene is compelled to carry the cross."
  },
  {
    number: 61,
    type: "recitative",
    part: 2,
    section: "The Way to Golgotha",
    germanTitle: "Ja freilich will in uns das Fleisch und Blut zum Kreuz gezwungen sein",
    englishTitle: "Yes verily, our flesh and blood must needs be forced unto the cross",
    scoring: "Bass (Coro II), Continuo",
    key: null,
    duration: 1.0,
    bibleRef: null,
    notes: "Accompanied recitative on the necessity of taking up one's cross. Text: Picander."
  },
  {
    number: 62,
    type: "aria",
    part: 2,
    section: "The Way to Golgotha",
    germanTitle: "Komm, süßes Kreuz, so will ich sagen",
    englishTitle: "Come, sweet cross, so would I say",
    scoring: "Bass (Coro II), Viola da gamba, Continuo",
    key: "A minor",
    duration: 6.0,
    bibleRef: null,
    notes: "Spacious bass aria with viola da gamba obbligato. The cross is transformed from burden to blessing. Text: Picander."
  },

  // --- The Crucifixion ---

  {
    number: 63,
    type: "recitative",
    part: 2,
    section: "The Crucifixion",
    germanTitle: "Und da sie an die Stätte kamen mit Namen Golgatha",
    englishTitle: "And when they were come unto a place called Golgotha",
    scoring: "Evangelist (T), Continuo; Coro I & II (turba interjections)",
    key: null,
    duration: 4.0,
    bibleRef: "Matthew 27:33–44",
    notes: "The Crucifixion narrative. Jesus is offered gall; the inscription 'This is Jesus the King of the Jews' is placed above. Includes turba choruses of passersby and priests mocking Him."
  },

  // --- The Death of Jesus ---

  {
    number: 64,
    type: "recitative",
    part: 2,
    section: "The Death of Jesus",
    germanTitle: "Und von der sechsten Stunde an ward eine Finsternis über das ganze Land",
    englishTitle: "Now from the sixth hour there was darkness over all the land",
    scoring: "Evangelist (T), Jesus (B), Continuo (no string halo for Jesus' final cry)",
    key: null,
    duration: 3.0,
    bibleRef: "Matthew 27:45–50",
    notes: "Darkness over the land. Jesus cries 'Eli, Eli, lama asabthani?' — uniquely without the string 'halo', symbolizing His abandonment. Bystanders offer vinegar. 'Jesus, when He had cried again with a loud voice, yielded up the ghost.'"
  },
  {
    number: 65,
    type: "chorale",
    part: 2,
    section: "The Death of Jesus",
    germanTitle: "Wenn ich einmal soll scheiden, so scheide nicht von mir",
    englishTitle: "When I at last must suffer, then part Thou not from me",
    scoring: "Coro I & II",
    key: null,
    duration: 1.5,
    bibleRef: null,
    notes: "The most famous setting of the Passion Chorale, at the moment of Jesus' death. Piercing chromatic harmonization. Text: Paul Gerhardt. Melody: 'O Haupt voll Blut und Wunden.'"
  },

  // --- The Earthquake and Aftermath ---

  {
    number: 66,
    type: "recitative",
    part: 2,
    section: "The Earthquake",
    germanTitle: "Und siehe da, der Vorhang im Tempel zerriß in zwei Stück",
    englishTitle: "And, behold, the veil of the temple was rent in twain",
    scoring: "Evangelist (T), Continuo; Coro I & II (turba: 'Wahrlich, dieser ist Gottes Sohn gewesen')",
    key: null,
    duration: 2.5,
    bibleRef: "Matthew 27:51–58",
    notes: "The earthquake; the veil of the temple is torn; rocks split; the dead arise. The centurion's confession: 'Truly this was the Son of God.' The women watch from afar. Joseph of Arimathea asks Pilate for the body."
  },
  {
    number: 67,
    type: "recitative",
    part: 2,
    section: "The Burial",
    germanTitle: "Am Abend, da es kühle war",
    englishTitle: "At evening, when the air was cool",
    scoring: "Bass (Coro I), Soprano, Alto, Tenor, Coro II, Orchestra II",
    key: null,
    duration: 2.5,
    bibleRef: null,
    notes: "Accompanied recitative. Adam's fall is reversed: 'At evening, cool was the air, Adam's fall was made manifest; at evening, the Redeemer bowed low.' Text: Picander."
  },
  {
    number: 68,
    type: "chorus",
    part: 2,
    section: "The Burial",
    germanTitle: "Wir setzen uns mit Tränen nieder und rufen dir im Grabe zu: Ruhe sanfte, sanfte ruh!",
    englishTitle: "In tears of grief, dear Lord, we leave Thee; rest softly, softly rest!",
    scoring: "Coro I & II, Orchestra I & II",
    key: "C minor",
    duration: 6.0,
    bibleRef: null,
    notes: "Closing double chorus in sarabande rhythm. A vast, gentle lullaby of farewell to the entombed Christ. 'Ruhe sanfte, sanfte ruh!' (Rest softly, softly rest!) The work ends in C minor — grief unresolved until Easter. Text: Picander."
  }
];

// ---------------------------------------------------------------------------
//  Summary statistics
// ---------------------------------------------------------------------------
const totalDuration = movements.reduce((sum, m) => sum + m.duration, 0);
const partOneDuration = movements.filter(m => m.part === 1).reduce((sum, m) => sum + m.duration, 0);
const partTwoDuration = movements.filter(m => m.part === 2).reduce((sum, m) => sum + m.duration, 0);

const typeCounts = movements.reduce((acc, m) => {
  acc[m.type] = (acc[m.type] || 0) + 1;
  return acc;
}, {});

/**
 * Type breakdown:
 *   chorus:     ~10 (opening/closing + turba choruses)
 *   recitative: ~30 (Evangelist narration + accompanied recitatives)
 *   aria:       ~12
 *   chorale:    ~12
 *   arioso:      0 (some recitatives have arioso character; No. 17 is borderline)
 *
 * Approximate total duration: ~165 minutes
 */

module.exports = { movements, totalDuration, partOneDuration, partTwoDuration, typeCounts };
