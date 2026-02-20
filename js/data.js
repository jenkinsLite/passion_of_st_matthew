// St. Matthew Passion BWV 244 — Track Data
// Gardiner recording (Monteverdi Choir / English Baroque Soloists)
// Apple Music: https://music.apple.com/album/bach-st-matthew-passion-bwv-244/1452138402

const APPLE_MUSIC_ALBUM_URL = 'https://music.apple.com/album/bach-st-matthew-passion-bwv-244/1452138402';

const movements = [
  // ======================== DISC 1 — PART ONE ========================
  {
    number: 1, disc: 1, discTrack: 1, part: 1,
    type: "Chorus",
    titleDe: "Kommt, ihr Töchter, helft mir klagen",
    titleEn: "Come, ye daughters, help me lament",
    voicing: "Chorus I & II, Soprano in ripieno",
    duration: 6.88,
    german: [
      {s: "Chorus I & II", t: "Kommt, ihr Töchter, helft mir klagen,\nSehet! - Wen? - den Bräutigam!\nSeht ihn! - Wie? - als wie ein Lamm.\nSehet! - Was? - seht die Geduld,\nSeht! - Wohin? - auf unsre Schuld.\nSehet ihn aus Lieb und Huld\nHolz zum Kreuze selber tragen."},
      {s: "Soprano in ripieno", t: "O Lamm Gottes unschuldig,\nAm Stamm des Kreuzes geschlachtet,\nAllzeit erfunden geduldig,\nWiewohl du warest verachtet.\nAll Sünd hast du getragen,\nSonst müßten wir verzagen.\nErbarm dich unser, o Jesu."}
    ],
    english: [
      {s: "Chorus I & II", t: "Come, daughters, help me lament,\nbehold! - Whom? - the Bridegroom!\nBehold him! - how? - As a Lamb.\nBehold! - what? - behold the patience,\nlook! - where? - at our guilt.\nSee him, out of love and graciousness\nbear the wood for the Cross himself."},
      {s: "Soprano in ripieno", t: "O innocent Lamb of God,\nslaughtered on the trunk of the Cross,\npatient at all times,\nhowever you were scorned.\nyou have borne all sins,\notherwise we would have to despair.\nHave mercy on us, O Jesus."}
    ]
  },
  {
    number: 2, disc: 1, discTrack: 2, part: 1,
    type: "Recitative",
    titleDe: "Da Jesus diese Rede vollendet hatte",
    titleEn: "When Jesus had finished all these sayings",
    voicing: "Evangelist (Tenor), Jesus (Bass)",
    duration: 0.61,
    german: [
      {s: "Evangelist", t: "Da Jesus diese Rede vollendet hatte, sprach er zu seinen Jüngern:"},
      {s: "Jesus", t: "Ihr wisset daß nach zweien Tagen Ostern wird, und des Menschen Sohn wird überantwortet werden, daß er gekreuziget werde."}
    ],
    english: [
      {s: "Evangelist", t: "When Jesus had finished this speech, he said to his disciples:"},
      {s: "Jesus", t: "You know that in two days it will be Passover, and the Son of Man will be handed over to be crucified."}
    ]
  },
  {
    number: 3, disc: 1, discTrack: 3, part: 1,
    type: "Chorale",
    titleDe: "Herzliebster Jesu, was hast du verbrochen",
    titleEn: "Beloved Jesus, what law hast Thou broken",
    voicing: "Chorus I & II",
    duration: 0.69,
    german: [
      {s: "Chorus", t: "Herzliebster Jesu, was hast du verbrochen,\nDaß man ein solch scharf Urteil hat gesprochen?\nWas ist die Schuld, in was für Missetaten\nBist du geraten?"}
    ],
    english: [
      {s: "Chorus", t: "Heart's beloved Jesus, how have you transgressed,\nthat such a harsh sentence has been pronounced?\nWhat is the crime, of what kind of misdeed\nare you accused?"}
    ]
  },
  {
    number: 4, disc: 1, discTrack: 4, part: 1,
    type: "Recitative",
    titleDe: "Da versammleten sich die Hohenpriester",
    titleEn: "Then assembled together the chief priests",
    voicing: "Evangelist (Tenor), Jesus (Bass), Chorus I & II",
    duration: 2.98,
    german: [
      {s: "Evangelist", t: "Da versammleten sich die Hohenpriester und Schriftgelehrten und die Ältesten im Volk in den Palast des Hohenpriesters, der da hieß Kaiphas, und hielten Rat, wie sie Jesum mit Listen griffen und töteten. Sie sprachen aber:"},
      {s: "Chorus I & II", t: "Ja nicht auf das Fest, auf daß nicht ein Aufruhr werde im Volk."},
      {s: "Evangelist", t: "Da nun Jesus war zu Bethanien, im Hause Simonis des Aussätzigen, trat zu ihm ein Weib, die hatte ein Glas mit köstlichem Wasser und goß es auf sein Haupt, da er zu Tische saß. Da das seine Jünger sahen, wurden sie unwillig und sprachen:"},
      {s: "Chorus I", t: "Wozu dienet dieser Unrat? Dieses Wasser hätte mögen teuer verkauft und den Armen gegeben werden."},
      {s: "Evangelist", t: "Da das Jesus merkete, sprach er zu ihnen:"},
      {s: "Jesus", t: "Was bekümmert ihr das Weib? Sie hat ein gut Werk an mir getan. Ihr habet allezeit Armen bei euch, mich aber habt ihr nicht allezeit. Daß sie dies Wasser hat auf meinen Leib gegossen, hat sie getan, daß man mich begraben wird. Wahrlich, ich sage euch: Wo dies Evangelium geprediget wird in der ganzen Welt, da wird man auch sagen zu ihrem Gedächtnis, was sie getan hat."}
    ],
    english: [
      {s: "Evangelist", t: "Then the high priests and the scribes and the elders of the people gathered in the palace of the high priest, who was named Caiaphas, and took council how with deception they could seize Jesus and kill him. They said, however:"},
      {s: "Chorus I & II", t: "Not, indeed, during the festival, so that there will not be an uproar among the people."},
      {s: "Evangelist", t: "Now when Jesus was in Bethany, in the house of Simon the leper, a woman came to him with a cup filled with valuable water; and she poured it upon his head as he sat at the table. When his disciples saw this, they were against it and said:"},
      {s: "Chorus I", t: "What purpose does this foolishness serve? This water could have been sold for a high price and given to the poor."},
      {s: "Evangelist", t: "When Jesus heard this, he said to them:"},
      {s: "Jesus", t: "Why do you trouble the woman? She has done a good deed for me. You will have the poor with you always, but you will not always have me. She has poured this water on my body because I will be buried. Truly I say to you: wherever this Gospel will be preached in the whole world they will tell, in her memory, what she has done."}
    ]
  },
  {
    number: 5, disc: 1, discTrack: 5, part: 1,
    type: "Recitative",
    titleDe: "Du lieber Heiland du",
    titleEn: "Thou blessed Savior, Thou",
    voicing: "Alto",
    duration: 0.85,
    german: [
      {s: "Alto", t: "Du lieber Heiland du,\nWenn deiner Jünger töricht streiten,\nDaß diese fromme Weib\nMit Salben deinen Leib\nzum Grabe will bereiten,\nSo lasse mir inzwischen zu,\nVon meiner Augen Tränenflüssen\nEin Wasser auf sein Haupt zu gießen!"}
    ],
    english: [
      {s: "Alto", t: "O you dear Savior,\nwhen your disciples foolishly protest\nthat this virtuous woman\nprepares your body\nwith ointment for the grave,\nin the meantime let me,\nwith the flowing tears from my eyes,\npour a water upon your head!"}
    ]
  },
  {
    number: 6, disc: 1, discTrack: 6, part: 1,
    type: "Aria",
    titleDe: "Buß und Reu",
    titleEn: "Grief and pain",
    voicing: "Alto",
    duration: 3.92,
    german: [
      {s: "Alto", t: "Buß und Reu, Buß und Reu\nKnirscht das Sündenherz entzwei.\nDas die Tropfen meiner Zähren\nAngenehme Spezerei,\nTreuer Jesu, dir gebären."}
    ],
    english: [
      {s: "Alto", t: "Repentance and regret, repentance and regret\nrips the sinful heart in two.\nThus the drops of my tears,\ndesirable spices,\nare brought to you, loving Jesus."}
    ]
  },
  {
    number: 7, disc: 1, discTrack: 7, part: 1,
    type: "Recitative",
    titleDe: "Da ging hin der Zwölfen einer",
    titleEn: "Then one of the twelve, called Judas Iscariot",
    voicing: "Evangelist (Tenor), Judas (Bass)",
    duration: 0.65,
    german: [
      {s: "Evangelist", t: "Da ging hin der Zwölfen einer mit Namen Judas Ischarioth zu den Hohenpriestern und sprach:"},
      {s: "Judas", t: "Was wollt ihr mir geben? Ich will ihn euch verraten."},
      {s: "Evangelist", t: "Und sie boten ihm dreißig Silberlinge. Und von dem an suchte er Gelegenheit, daß er ihn verriete."}
    ],
    english: [
      {s: "Evangelist", t: "Then one of the twelve, named Judas Iscariot, went to the high priests and said:"},
      {s: "Judas", t: "What will you give me? I will betray him to you."},
      {s: "Evangelist", t: "And they offered him thirty silver pieces. And from then on he sought opportunity to betray him."}
    ]
  },
  {
    number: 8, disc: 1, discTrack: 8, part: 1,
    type: "Aria",
    titleDe: "Blute nur, du liebes Herz!",
    titleEn: "Bleed and break, thou loving heart!",
    voicing: "Soprano",
    duration: 4.44,
    german: [
      {s: "Soprano", t: "Blute nur, du liebes Herz!\nAch! ein Kind, das du erzogen,\nDas an deiner Brust gesogen,\nDroht den Pfleger zu ermorden,\nDenn es ist zur Schlange worden."}
    ],
    english: [
      {s: "Soprano", t: "Bleed out, you loving heart!\nAlas! A child that you raised,\nthat nursed at your breast,\nthreatens to murder its caretaker,\nsince it has become a serpent."}
    ]
  },
  {
    number: 9, disc: 1, discTrack: 9, part: 1,
    type: "Recitative",
    titleDe: "Aber am ersten Tage der süßen Brot",
    titleEn: "Now on the first day of Unleavened Bread",
    voicing: "Evangelist (Tenor), Jesus (Bass), Chorus I & II",
    duration: 2.07,
    german: [
      {s: "Evangelist", t: "Aber am ersten Tage der süßen Brot traten die Jünger zu Jesu und sprachen zu ihm:"},
      {s: "Chorus I", t: "Wo willst du, daß wir dir bereiten das Osterlamm zu essen?"},
      {s: "Evangelist", t: "Er sprach:"},
      {s: "Jesus", t: "Gehet hin in die Stadt zu einem und sprecht zu ihm: Der Meister läßt dir sagen: Meine Zeit ist hier, ich will bei dir die Ostern halten mit meinen Jüngern."},
      {s: "Evangelist", t: "Und die Jünger täten, wie ihnen Jesus befohlen hatte, und bereiteten das Osterlamm. Und am Abend satzte er sich zu Tische mit den Zwölfen. Und da sie aßen, sprach er:"},
      {s: "Jesus", t: "Wahrlich, ich sage euch: Einer unter euch wird mich verraten."},
      {s: "Evangelist", t: "Und sie wurden sehr betrübt und huben an, ein jeglicher unter ihnen, und sagten zu ihm:"},
      {s: "Chorus I", t: "Herr, bin ichs?"}
    ],
    english: [
      {s: "Evangelist", t: "But on the first day of unleavened bread the disciples came to Jesus and said to him:"},
      {s: "Chorus I", t: "Where do you want us to prepare to eat the Passover lamb?"},
      {s: "Evangelist", t: "He said:"},
      {s: "Jesus", t: "Go into the city to a certain person and say to him: the Master says to you: my time is here, I will hold Passover in your house with my disciples."},
      {s: "Evangelist", t: "And the disciples did as Jesus had commanded them, and prepared the Passover lamb. And in the evening he sat at dinner with the twelve. And as they ate, He said:"},
      {s: "Jesus", t: "Truly I say to you: one among you will betray me."},
      {s: "Evangelist", t: "And they were very troubled and began, each one among them, to say to him:"},
      {s: "Chorus I", t: "Lord, is it I?"}
    ]
  },
  {
    number: 10, disc: 1, discTrack: 10, part: 1,
    type: "Chorale",
    titleDe: "Ich bin's, ich sollte büßen",
    titleEn: "'Tis I whose sin doth bind Thee",
    voicing: "Chorus I & II",
    duration: 0.73,
    german: [
      {s: "Chorus", t: "Ich bins, ich sollte büßen,\nAn Händen und an Füßen\nGebunden in der Höll.\nDie Geißeln und die Banden\nUnd was du ausgestanden,\nDas hat verdienet meine Seel."}
    ],
    english: [
      {s: "Chorus", t: "It is I, I should atone,\nbound hand and foot\nin hell.\nThe scourges and the bonds\nand what you endured,\nmy soul has deserved."}
    ]
  },
  {
    number: 11, disc: 1, discTrack: 11, part: 1,
    type: "Recitative",
    titleDe: "Er antwortete und sprach",
    titleEn: "He answered and said",
    voicing: "Evangelist (Tenor), Jesus (Bass), Judas (Bass)",
    duration: 2.74,
    german: [
      {s: "Evangelist", t: "Er antwortete und sprach:"},
      {s: "Jesus", t: "Der mit der Hand mit mir in die Schüssel tauchet, der wird mich verraten. Des Menschen Sohn gehet zwar dahin, wie von ihm geschrieben stehet; doch wehe dem Menschen, durch welchen des Menschen Sohn verraten wird! Es wäre ihm besser, daß derselbige Mensch noch nie geboren wäre."},
      {s: "Evangelist", t: "Da antwortete Judas, der ihn verriet, und sprach:"},
      {s: "Judas", t: "Bin ichs, Rabbi?"},
      {s: "Evangelist", t: "Er sprach zu ihm:"},
      {s: "Jesus", t: "Du sagests."},
      {s: "Evangelist", t: "Da sie aber aßen, nahm Jesus das Brot, dankete und brachs und gabs den Jüngern und sprach:"},
      {s: "Jesus", t: "Nehmet, esset, das ist mein Leib."},
      {s: "Evangelist", t: "Und er nahm den Kelch und dankete, gab ihnen den und sprach:"},
      {s: "Jesus", t: "Trinket alle daraus; das ist mein Blut des neuen Testaments, welches vergossen wird für viele zur Vergebung der Sünden. Ich sage euch: Ich werde von nun an nicht mehr von diesem Gewächs des Weinstocks trinken bis an den Tag, da ichs neu trinken werde mit euch in meines Vaters Reich."}
    ],
    english: [
      {s: "Evangelist", t: "He answered and said:"},
      {s: "Jesus", t: "He who has dipped his hand in the bowl with me will betray me. The Son of Man will indeed pass away as it stands written of him; yet woe to the man through whom the Son of Man is betrayed! It would be better for him if this man had never been born."},
      {s: "Evangelist", t: "Then Judas, who betrayed him, answered and said:"},
      {s: "Judas", t: "Is it I, Rabbi?"},
      {s: "Evangelist", t: "He said to him:"},
      {s: "Jesus", t: "You say it."},
      {s: "Evangelist", t: "While they ate, however, Jesus took the bread, blessed and broke it and gave it to the disciples and said:"},
      {s: "Jesus", t: "Take, eat, this is my body."},
      {s: "Evangelist", t: "And he took the cup and blessed it, gave it to them and said:"},
      {s: "Jesus", t: "Drink from this, all of you; this is my blood of the new covenant, which is poured out for many for the forgiveness of sins. I say to you: from now on I will not drink again from this fruit of the vine until the day when I drink again with you in my Father's kingdom."}
    ]
  },
  {
    number: 12, disc: 1, discTrack: 12, part: 1,
    type: "Recitative",
    titleDe: "Wiewohl mein Herz in Tränen schwimmt",
    titleEn: "Though my heart swims in tears",
    voicing: "Soprano",
    duration: 1.31,
    german: [
      {s: "Soprano", t: "Wiewohl mein Herz in Tränen schwimmt,\nDaß Jesus von mir Abschied nimmt,\nso macht mich doch sein Testament erfreut:\nSein Fleisch und Blut, o Kostbarkeit,\nVermacht er mir in meine Hände.\nWie er es auf der Welt mit denen Seinen\nNicht böse können meinen,\nso liebt er sie bis an das Ende."}
    ],
    english: [
      {s: "Soprano", t: "Although my heart is swimming in tears,\nsince Jesus takes leave of me,\nyet his Testament brings me joy:\nhis flesh and blood, O most precious,\nhe bequeaths to my hands.\nJust as in the world, among his own,\nhe could not wish them harm,\njust so he loves them to the end."}
    ]
  },
  {
    number: 13, disc: 1, discTrack: 13, part: 1,
    type: "Aria",
    titleDe: "Ich will dir mein Herze schenken",
    titleEn: "I will give Thee my heart",
    voicing: "Soprano",
    duration: 3.23,
    german: [
      {s: "Soprano", t: "Ich will dir mein Herze schenken,\nSenke dich, mein Heil, hinein!\nIch will mich in dir versenken;\nIst dir gleich die Welt zu klein,\nEi, so sollst du mir allein\nMehr als Welt und Himmel sein."}
    ],
    english: [
      {s: "Soprano", t: "I will give you my heart;\nsink within, my Savior!\nI will sink into you;\nalthough the world is too small for you,\nah, you alone shall be for me\nmore than heaven and earth."}
    ]
  },
  {
    number: 14, disc: 1, discTrack: 14, part: 1,
    type: "Recitative",
    titleDe: "Und da sie den Lobgesang gesprochen hatten",
    titleEn: "And when they had sung a hymn",
    voicing: "Evangelist (Tenor), Jesus (Bass)",
    duration: 0.96,
    german: [
      {s: "Evangelist", t: "Und da sie den Lobgesang gesprochen hatten, gingen sie hinaus an den Ölberg. Da sprach Jesus zu ihnen:"},
      {s: "Jesus", t: "In dieser Nacht werdet ihr euch alle ärgern an mir. Denn es stehet geschrieben: \"Ich werde den Hirten schlagen, und die Schafe der Herde werden sich zerstreuen.\" Wenn ich aber auferstehe, will ich vor euch hingehen in Galiläam."}
    ],
    english: [
      {s: "Evangelist", t: "And when they had spoken the benediction, they went out to the Mount of Olives. Then Jesus said to them:"},
      {s: "Jesus", t: "Tonight you will all be angry at me. For it is written: \"I will strike the shepherd, and the sheep of the flock will be scattered.\" When, however, I rise again, I shall go before you into Galilee."}
    ]
  },
  {
    number: 15, disc: 1, discTrack: 15, part: 1,
    type: "Chorale",
    titleDe: "Erkenne mich, mein Hüter",
    titleEn: "Receive me, my Redeemer",
    voicing: "Chorus I & II",
    duration: 0.98,
    german: [
      {s: "Chorus", t: "Erkenne mich, mein Hüter,\nMein Hirte, nimm mich an!\nVon dir, Quell aller Güter,\nIst mir viel Guts getan.\nDein Mund hat mich gelabet\nMit Milch und süßer Kost,\nDein Geist hat mich begabet\nMit mancher Himmelslust."}
    ],
    english: [
      {s: "Chorus", t: "Acknowledge me, my Guardian,\nmy Shepherd, take me in!\nFrom you, source of all goodness,\nhas much good come to me.\nYour mouth has nourished me\nwith milk and sweet sustenance;\nyour spirit has lavished upon me\nmuch heavenly joy."}
    ]
  },
  {
    number: 16, disc: 1, discTrack: 16, part: 1,
    type: "Recitative",
    titleDe: "Petrus aber antwortete und sprach zu ihm",
    titleEn: "Peter answered and said unto Him",
    voicing: "Evangelist (Tenor), Jesus (Bass), Peter (Bass)",
    duration: 0.92,
    german: [
      {s: "Evangelist", t: "Petrus aber antwortete und sprach zu ihm:"},
      {s: "Peter", t: "Wenn sie auch alle sich an dir ärgerten, so will ich doch mich nimmermehr ärgern."},
      {s: "Evangelist", t: "Jesus sprach zu ihm:"},
      {s: "Jesus", t: "Wahrlich, ich sage dir: in dieser Nacht, ehe der Hahn krähet, wirst du mich dreimal verleugnen."},
      {s: "Evangelist", t: "Petrus sprach zu ihm:"},
      {s: "Peter", t: "Und wenn ich mit dir sterben müßte, so will ich dich nicht verleugnen."},
      {s: "Evangelist", t: "Desgleichen sagten auch alle Jünger."}
    ],
    english: [
      {s: "Evangelist", t: "Peter answered, however, and said to him:"},
      {s: "Peter", t: "Even though everyone will be angry at you, yet I will never be angry."},
      {s: "Evangelist", t: "Jesus said to him:"},
      {s: "Jesus", t: "Truly, I say to you: tonight, before the cock crows, you will deny me three times."},
      {s: "Evangelist", t: "Peter said to him:"},
      {s: "Peter", t: "Even if I must die with you, I will not deny you."},
      {s: "Evangelist", t: "All the other disciples also said the same."}
    ]
  },
  {
    number: 17, disc: 1, discTrack: 17, part: 1,
    type: "Chorale",
    titleDe: "Ich will hier bei dir stehen",
    titleEn: "I would beside Thee stand",
    voicing: "Chorus I & II",
    duration: 1.04,
    german: [
      {s: "Chorus", t: "Ich will hier bei dir stehen,\nVerachte mich doch nicht!\nVon dir will ich nicht gehen,\nWenn dir dein Herze bricht.\nWenn dein Herz wird erblassen\nIm letzten Todesstoß,\nAlsdenn will ich dich fassen,\nIn meinen Arm und Schoß."}
    ],
    english: [
      {s: "Chorus", t: "I will stay here with you,\ndo not scorn me!\nI will not leave you,\neven as your heart breaks.\nWhen your heart grows pale\nat the last stroke of death,\nThen I will hold you fast\nIn my arm and bosom."}
    ]
  },
  {
    number: 18, disc: 1, discTrack: 18, part: 1,
    type: "Recitative",
    titleDe: "Da kam Jesus mit ihnen zu einem Hofe",
    titleEn: "Then cometh Jesus with them unto a place",
    voicing: "Evangelist (Tenor), Jesus (Bass)",
    duration: 1.49,
    german: [
      {s: "Evangelist", t: "Da kam Jesus mit ihnen zu einem Hofe, der hieß Gethsemane, und sprach zu seinen Jüngern:"},
      {s: "Jesus", t: "Setzet euch hie, bis daß ich dort hingehe und bete."},
      {s: "Evangelist", t: "Und nahm zu sich Petrum und die zween Söhne Zebedäi und fing an zu trauern und zu zagen. Da sprach Jesus zu ihnen:"},
      {s: "Jesus", t: "Meine Seele ist betrübt bis an den Tod, bleibet hie und wachet mit mir!"}
    ],
    english: [
      {s: "Evangelist", t: "Then Jesus came with them to a garden, which was called Gethsemane, and spoke to his disciples:"},
      {s: "Jesus", t: "Sit here while I go over there and pray."},
      {s: "Evangelist", t: "And he took Peter and the two sons of Zebedee with him, and began to mourn and despair. Then Jesus said to them:"},
      {s: "Jesus", t: "My soul is troubled even to death; stay here and watch with me!"}
    ]
  },
  {
    number: 19, disc: 1, discTrack: 19, part: 1,
    type: "Recitative",
    titleDe: "O Schmerz! Hier zittert das gequälte Herz",
    titleEn: "O grief! Here trembles the tormented heart",
    voicing: "Tenor, Chorus II",
    duration: 1.96,
    german: [
      {s: "Tenor", t: "O Schmerz!\nHier zittert das gequälte Herz;\nwie sinkt es hin, wie bleicht sein Angesicht!\nWas ist die Ursach aller solcher Plagen?\nDer Richter führt ihn vor Gericht.\nDa ist kein Trost, kein Helfer nicht.\nAch! meine Sünden haben dich geschlagen;\nEr leidet alle Höllenqualen,\nEr soll vor fremden Raub bezahlen.\nIch, ach, Herr Jesu, habe dies verschuldet,\nwas du erduldet.\nAch, könnte meine Liebe dir,\nMein Heil, dein Zittern und dein Zagen\nvermindern oder helfen tragen,\nWie gerne blieb ich hier!"}
    ],
    english: [
      {s: "Tenor", t: "O pain!\nHere the tormented heart trembles;\nhow it sinks down, how his face pales!\nWhat is the cause of all this trouble?\nThe Judge leads him before judgment.\nNo comfort, no helper is there.\nAlas! My sins have struck you down;\nHe suffers all the torments of Hell,\nhe must pay for the crimes of others.\nI, alas, Lord Jesus, have earned this,\nthat you endure.\nAh! Could my love for you,\nmy Savior, diminish or bring aid\nto your trembling and your despair,\nhow gladly would I stay here!"}
    ]
  },
  {
    number: 20, disc: 1, discTrack: 20, part: 1,
    type: "Aria",
    titleDe: "Ich will bei meinem Jesu wachen",
    titleEn: "I would beside my Lord be watching",
    voicing: "Tenor, Chorus II",
    duration: 4.93,
    german: [
      {s: "Tenor", t: "Ich will bei meinem Jesu wachen,"},
      {s: "Chorus II", t: "So schlafen unsre Sünden ein."},
      {s: "Tenor", t: "Meinen Tod\nBüßet seine Seelennot;\nSein Trauren machet mich voll Freuden."},
      {s: "Chorus II", t: "Drum muß uns sein verdienstlich Leiden\nRecht bitter und doch süße sein."}
    ],
    english: [
      {s: "Tenor", t: "I will watch with my Jesus,"},
      {s: "Chorus II", t: "So our sins fall asleep."},
      {s: "Tenor", t: "My death\nis atoned for by his soul's anguish;\nhis sorrow makes me full of joy."},
      {s: "Chorus II", t: "Therefore his deserved suffering\nmust be truly bitter and yet sweet to us."}
    ]
  },
  {
    number: 21, disc: 1, discTrack: 21, part: 1,
    type: "Recitative",
    titleDe: "Und ging hin ein wenig",
    titleEn: "And He went a little further",
    voicing: "Evangelist (Tenor), Jesus (Bass)",
    duration: 0.68,
    german: [
      {s: "Evangelist", t: "Und ging hin ein wenig, fiel nieder auf sein Angesicht und betete und sprach:"},
      {s: "Jesus", t: "Mein Vater, ist's möglich, so gehe diese Kelch von mir; doch nicht wie ich will, sondern wie du willt."}
    ],
    english: [
      {s: "Evangelist", t: "And went away a bit, fell down on his face and prayed and said:"},
      {s: "Jesus", t: "My Father, if it is possible, let this cup pass from me; yet not as I will it, rather as you wish."}
    ]
  },
  {
    number: 22, disc: 1, discTrack: 22, part: 1,
    type: "Recitative",
    titleDe: "Der Heiland fällt vor seinem Vater nieder",
    titleEn: "The Savior falls before His Father down",
    voicing: "Bass",
    duration: 0.91,
    german: [
      {s: "Bass", t: "Der Heiland fällt vor seinem Vater nieder;\nDadurch erhebt er sich und alle\nvon unserm Falle\nHinauf zu Gottes Gnade wieder.\nEr ist bereit,\nDen Kelch, des Todes Bitterkeit\nzu trinken,\nIn welchen Sünden dieser Welt\nGegossen sind und häßlich stinken,\nWeil es dem lieben Gott gefällt."}
    ],
    english: [
      {s: "Bass", t: "The Savior falls down before his Father;\nthrough this he lifts up himself and everyone\nfrom our fall\nto God's grace again.\nHe is ready\nto drink the cup of\ndeath's bitterness,\nin which the sins of this world\nare poured and which stink horribly,\nsince it is pleasing to our loving God."}
    ]
  },
  {
    number: 23, disc: 1, discTrack: 23, part: 1,
    type: "Aria",
    titleDe: "Gerne will ich mich bequemen",
    titleEn: "Gladly will I submit myself",
    voicing: "Bass",
    duration: 3.87,
    german: [
      {s: "Bass", t: "Gerne will ich mich bequemen,\nKreuz und Becher anzunehmen,\nTrink ich doch dem Heiland nach.\nDenn sein Mund,\nDer mit Milch und Honig fließet,\nHat den Grund\nund des Leidens herbe Schmach\nDurch den ersten Trunk versüßet."}
    ],
    english: [
      {s: "Bass", t: "Gladly will I compel myself\nto take on the Cross and the Chalice,\nyet I drink after the Savior.\nFor his mouth,\nwhich flows with milk and honey,\nhas sweetened the grounds\nand the bitter taste of sorrow,\nthrough his first sip."}
    ]
  },
  {
    number: 24, disc: 1, discTrack: 24, part: 1,
    type: "Recitative",
    titleDe: "Und er kam zu seinen Jüngern",
    titleEn: "And He cometh unto the disciples",
    voicing: "Evangelist (Tenor), Jesus (Bass)",
    duration: 1.19,
    german: [
      {s: "Evangelist", t: "Und er kam zu seinen Jüngern und fand sie schlafend und sprach zu ihnen:"},
      {s: "Jesus", t: "Könnet ihr denn nicht eine Stunde mit mir wachen? Wachet, und betet, daß ihr nicht in Anfechtung fallet! Der Geist ist willig, aber das Fleisch ist schwach."},
      {s: "Evangelist", t: "Zum andernmal ging er hin, betete und sprach:"},
      {s: "Jesus", t: "Mein Vater, ists nicht möglich, daß dieser Kelch von mir gehe, ich trinke ihn denn, so geschehe dein Wille."}
    ],
    english: [
      {s: "Evangelist", t: "And he came back to his disciples and found them sleeping, and said to them:"},
      {s: "Jesus", t: "Couldn't you then remain awake with me one hour? Stay awake, and pray, so that you do not fall into temptation! The spirit is willing, but the flesh is weak."},
      {s: "Evangelist", t: "For a second time he went away, prayed and said:"},
      {s: "Jesus", t: "My Father, if it is not possible that this cup pass away from me, then I will drink it; thus may your will be done."}
    ]
  },
  {
    number: 25, disc: 1, discTrack: 25, part: 1,
    type: "Chorale",
    titleDe: "Was mein Gott will, das g'scheh allzeit",
    titleEn: "What my God wills, let that be done",
    voicing: "Chorus I & II",
    duration: 0.97,
    german: [
      {s: "Chorus", t: "Was mein Gott will, das gscheh allzeit,\nSein Will, der ist der beste,\nZu helfen den' er ist bereit,\nDie an ihn glauben feste.\nEr hilft aus Not, der fromme Gott,\nUnd züchtiget mit Maßen.\nWer Gott vertraut, fest auf ihn baut,\nDen will er nicht verlassen."}
    ],
    english: [
      {s: "Chorus", t: "What my God wills always occurs,\nHis will is the best;\nhe is ready to help those\nwho believe firmly in him.\nHe gives aid in need, this righteous God,\nand punishes with measure.\nWho trusts in God, rely upon him firmly,\nGod will never abandon."}
    ]
  },
  {
    number: 26, disc: 1, discTrack: 26, part: 1,
    type: "Recitative",
    titleDe: "Und er kam und fand sie aber schlafend",
    titleEn: "And He came and found them asleep again",
    voicing: "Evangelist (Tenor), Jesus (Bass), Judas (Bass)",
    duration: 2.29,
    german: [
      {s: "Evangelist", t: "Und er kam und fand sie aber schlafend, und ihre Augen waren voll Schlafs. Und er ließ sie und ging abermal hin und betete zum drittenmal und redete dieselbigen Worte. Da kam er zu seinen Jüngern und sprach zu ihnen:"},
      {s: "Jesus", t: "Ach! Wollt ihr nun schlafen und ruhen? Siehe, die Stunde ist hie, daß des Menschen Sohn in der Sünder Hände überantwortet wird. Stehet auf, lasset uns gehen; siehe, er ist da der mich verrät."},
      {s: "Evangelist", t: "Und als er noch redete, siehe, da kam Judas, der Zwölfen einer, und mit ihm einer große Schar mit Schwerten und mit Stangen von den Hohenpriester und Ältesten des Volks. Und der Verräter hatte ihnen ein Zeichen gegeben und gesagt: \"Welchen ich küssen werde, der ists, den greifet!\" Und alsbald trat er zu Jesu und sprach:"},
      {s: "Judas", t: "Gegrüßet seist du, Rabbi!"},
      {s: "Evangelist", t: "Und küssete ihn, Jesus aber sprach zu ihm:"},
      {s: "Jesus", t: "Mein Freund, warum bist du kommen?"},
      {s: "Evangelist", t: "Da traten sie hinzu und legte die Hände an Jesum und griffen ihn."}
    ],
    english: [
      {s: "Evangelist", t: "And he came back and found them sleeping, nevertheless, and their eyes were full of sleep. And he left them and went away another time and prayed for the third time, and spoke the same words. Then he came back to his disciples and said to them:"},
      {s: "Jesus", t: "Alas! Do you wish to sleep and rest now? Behold, the hour has come, when the Son of Man is to be handed over into the hands of sinners. Get up, let us go; see, he who betrays me is here."},
      {s: "Evangelist", t: "And as he was speaking, behold, there came Judas, one of the twelve, and with him a large troop from the high priest and the elders of the people with swords and spears. And the betrayer had given them a sign and said: \"The one that I will kiss is him; seize him!\" And just then he stepped forward to Jesus and said:"},
      {s: "Judas", t: "Greetings to you, Rabbi!"},
      {s: "Evangelist", t: "And kissed him. However Jesus said to him:"},
      {s: "Jesus", t: "My friend, why did you come?"},
      {s: "Evangelist", t: "Then they stepped forward and laid hands on Jesus and seized him."}
    ]
  },
  {
    number: 27, disc: 1, discTrack: 27, part: 1,
    type: "Aria",
    titleDe: "So ist mein Jesus nun gefangen",
    titleEn: "So is my Jesus now taken",
    voicing: "Soprano, Alto, Chorus II",
    duration: 5.04,
    german: [
      {s: "Soprano / Alto", t: "So ist mein Jesus nun gefangen."},
      {s: "Chorus II", t: "Laßt ihn, haltet, bindet nicht!"},
      {s: "Soprano / Alto", t: "Mond und Licht\nIst vor Schmerzen untergangen,\nWeil mein Jesus ist gefangen.\nSie führen ihn, er ist gebunden."},
      {s: "Chorus I & II", t: "Sind Blitze, sind Donner\nin Wolken verschwunden?\nEröffne den feurigen Abgrund, o Hölle,\nZertrümmre, verderbe, verschlinge, zerschelle\nMit plötzlicher Wut\nDen falschen Verräter, das mördrische Blut!"}
    ],
    english: [
      {s: "Soprano / Alto", t: "Thus my Jesus is now captured."},
      {s: "Chorus II", t: "Leave him, stop, don't bind him!"},
      {s: "Soprano / Alto", t: "Moon and light\nfor sorrow have set,\nsince my Jesus is captured.\nThey take him away, he is bound."},
      {s: "Chorus I & II", t: "Are lightning and thunder\nextinguished in the clouds?\nOpen the fiery abyss, O Hell,\ncrush, destroy, devour, smash\nwith sudden rage\nthe false betrayer, the murderous blood!"}
    ]
  },
  {
    number: 28, disc: 1, discTrack: 28, part: 1,
    type: "Recitative",
    titleDe: "Und siehe, einer aus denen, die mit Jesu waren",
    titleEn: "And behold, one of them which were with Jesus",
    voicing: "Evangelist (Tenor), Jesus (Bass)",
    duration: 2.02,
    german: [
      {s: "Evangelist", t: "Und siehe, einer aus denen, die mit Jesu waren, reckete die Hand aus, und schlug des Hohenpriesters Knecht und hieb ihm ein Ohr ab. Da sprach Jesus zu ihm:"},
      {s: "Jesus", t: "Stecke dein Schwert an seinen Ort; denn wer das Schwert nimmt, der soll durchs Schwert umkommen. Oder meinest du, daß ich nicht könnte meinen Vater bitten, daß er mir zuschickte mehr denn zwölf Legion Engel? Wie würde aber die Schrift erfüllet? Es muß also gehen."},
      {s: "Evangelist", t: "Zu der Stund sprach Jesus zu den Scharen:"},
      {s: "Jesus", t: "Ihr seid ausgegangen als zu einem Mörder, mit Schwerten und mit Stangen, mich zu fahen; bin ich doch täglich bei euch gesessen und habe gelehret im Tempel, und ihr habt mich nicht gegriffen. Aber das ist alles geschehen, daß erfüllet würden die Schriften der Propheten."},
      {s: "Evangelist", t: "Da verließen ihn alle Jünger und flohen."}
    ],
    english: [
      {s: "Evangelist", t: "And behold, one of those who were with Jesus stretched out his hand and struck a servant of the high priest, and cut off his ear. Then Jesus said to him:"},
      {s: "Jesus", t: "Put your sword back in its place; for whoever takes the sword will perish through the sword. Or do you think that I could not ask my Father to send me more than twelve legions of angels? How would the scripture be fulfilled then? It must happen thus."},
      {s: "Evangelist", t: "At the time Jesus said to the crowd:"},
      {s: "Jesus", t: "You have come out as if to a murderer, with swords and spears to take me; yet I have daily sat among you and have taught in the Temple, and you did not arrest me. However all of this has happened in order to fulfill the writings of the prophets."},
      {s: "Evangelist", t: "Then all the disciples deserted him and fled."}
    ]
  },
  {
    number: 29, disc: 1, discTrack: 29, part: 1,
    type: "Chorale",
    titleDe: "O Mensch, bewein dein Sünde groß",
    titleEn: "O man, bewail thy grievous sin",
    voicing: "Chorus I & II",
    duration: 5.58,
    german: [
      {s: "Chorus", t: "O Mensch, bewein dein Sünde groß,\nDarum Christus seins Vaters Schoß\nÄußert und kam auf Erden;\nVon einer Jungfrau rein und zart\nFür uns er hie geboren ward,\nEr wollt der Mittler werden,\nDen Toten er das Leben gab\nUnd legt dabei all Krankheit ab\nBis sich die Zeit herdrange,\nDaß er für uns geopfert würd,\nTrüg unser Sünden schwere Bürd\nWohl an dem Kreuze lange."}
    ],
    english: [
      {s: "Chorus", t: "O mankind, mourn your great sins,\nfor which Christ left his Father's bosom\nand came to earth;\nfrom a virgin pure and tender\nhe was born here for us,\nhe wished to become our Intercessor,\nhe gave life to the dead\nand laid aside all sickness\nuntil the time approached\nthat he would be offered for us,\nbearing the heavy burden of our sins\nindeed for a long time on the Cross."}
    ]
  },
  // ======================== DISC 2 — PART TWO ========================
  {
    number: 30, disc: 2, discTrack: 1, part: 2,
    type: "Aria",
    titleDe: "Ach, nun ist mein Jesus hin!",
    titleEn: "Alas, now is my Jesus gone!",
    voicing: "Alto, Chorus II",
    duration: 3.46,
    german: [
      {s: "Alto", t: "Ach, nun ist mein Jesus hin!"},
      {s: "Chorus II", t: "Wo ist denn dein Freund hingegangen,\nO du Schönste unter den Weibern?"},
      {s: "Alto", t: "Ist es möglich, kann ich schauen?"},
      {s: "Chorus II", t: "Wo hat sich dein Freund hingewandt?"},
      {s: "Alto", t: "Ach! mein Lamm in Tigerklauen,\nAch! wo ist mein Jesus hin?"},
      {s: "Chorus II", t: "So wollen wir mit dir ihn suchen."},
      {s: "Alto", t: "Ach! was soll ich der Seele sagen,\nWenn sie mich wird ängstlich fragen:\nAch! wo ist mein Jesus hin?"}
    ],
    english: [
      {s: "Alto", t: "Alas, now my Jesus is gone!"},
      {s: "Chorus II", t: "Where, then, has your beloved gone,\nO most beautiful among women?"},
      {s: "Alto", t: "Is it possible, can I behold it?"},
      {s: "Chorus II", t: "Which way has your beloved turned?"},
      {s: "Alto", t: "Alas! my lamb in the claws of a tiger;\nAlas! Where has my Jesus gone?"},
      {s: "Chorus II", t: "We will seek him with you."},
      {s: "Alto", t: "Alas! What shall I say to the soul,\nwhen she asks me anxiously:\nAlas! Where has my Jesus gone?"}
    ]
  },
  {
    number: 31, disc: 2, discTrack: 2, part: 2,
    type: "Recitative",
    titleDe: "Die aber Jesum gegriffen hatten",
    titleEn: "And they that had laid hold on Jesus",
    voicing: "Evangelist (Tenor)",
    duration: 1.04,
    german: [
      {s: "Evangelist", t: "Die aber Jesum gegriffen hatten, führeten ihn zu dem Hohenpriester Kaiphas, dahin die Schriftgelehrten und Ältesten sich versammlet hatten. Petrus aber folgete ihm nach von ferne bis in den Palast des Hohenpriesters und ging hinein und satzte sich bei die Knechte, auf daß er sähe, wo es hinaus wollte. Die Hohenpriester aber und Ältesten und der ganze Rat suchten falsche Zeugnis wider Jesum, auf daß sie ihn töteten, und funden keines."}
    ],
    english: [
      {s: "Evangelist", t: "But after they had arrested Jesus, they brought him to the High Priest Caiaphas, where the scribes and the elders had gathered. Peter, however, followed him from afar to the palace of the high priest, and went inside and sat with the servants, so he could see how it came out. The high priests, however, and the elders, and the entire council sought false witness against Jesus, so that they could put him to death, and found none."}
    ]
  },
  {
    number: 32, disc: 2, discTrack: 3, part: 2,
    type: "Chorale",
    titleDe: "Mir hat die Welt trüglich gericht'",
    titleEn: "The world has judged me falsely",
    voicing: "Chorus I & II",
    duration: 0.65,
    german: [
      {s: "Chorus", t: "Mir hat die Welt trüglich gericht'\nMit Lügen und mit falschem Gdicht,\nViel Netz und heimlich Strikke.\nHerr, nimm mein wahr\nIn dieser Gfahr,\nBhüt mich für falschen Tükken!"}
    ],
    english: [
      {s: "Chorus", t: "The world has judged me deceitfully,\nwith lies and false statements,\nmany traps and secret snares.\nLord, perceive me truthfully\nin this danger;\nprotect me from malicious falsehoods!"}
    ]
  },
  {
    number: 33, disc: 2, discTrack: 4, part: 2,
    type: "Recitative",
    titleDe: "Und wiewohl viel falsche Zeugen herzutraten",
    titleEn: "Yet though many false witnesses came",
    voicing: "Evangelist (Tenor), Witnesses, High Priest (Bass)",
    duration: 1.19,
    german: [
      {s: "Evangelist", t: "Und wiewohl viel falsche Zeugen herzutraten, funden sie doch keins. Zuletzt traten herzu zween falsche Zeugen und sprachen:"},
      {s: "Witnesses", t: "Er hat gesagt: Ich kann den Tempel Gottes abbrechen und in dreien Tagen denselben bauen."},
      {s: "Evangelist", t: "Und der Hohepriester stund auf und sprach zu ihm:"},
      {s: "High Priest", t: "Antwortest du nichts zu dem, das diese wider dich zeugen?"},
      {s: "Evangelist", t: "Aber Jesus schwieg stille."}
    ],
    english: [
      {s: "Evangelist", t: "And although many false witnesses came forward, they found none. Finally two false witnesses came forward and said:"},
      {s: "Witnesses", t: "He has said: I can destroy the temple of God and in three days build it up again."},
      {s: "Evangelist", t: "And the high priest stood up and said to him:"},
      {s: "High Priest", t: "Do you answer nothing to this, that they say against you?"},
      {s: "Evangelist", t: "But Jesus was silent."}
    ]
  },
  {
    number: 34, disc: 2, discTrack: 5, part: 2,
    type: "Recitative",
    titleDe: "Mein Jesus schweigt zu falschen Lügen stille",
    titleEn: "My Jesus remains silent to false lies",
    voicing: "Tenor",
    duration: 1.07,
    german: [
      {s: "Tenor", t: "Mein Jesus schweigt\nZu falschen Lügen stille,\nUm uns damit zu zeigen,\nDaß sein erbarmensvoller Wille\nvor uns zum Leiden sei geneigt,\nUnd daß wir in dergleichen Pein\nIhm sollen ähnlich sein\nUnd in Verfolgung stille schweigen."}
    ],
    english: [
      {s: "Tenor", t: "My Jesus is silent\nat false lies,\nin order to show us\nthat his merciful will\nis bent on suffering for us,\nand that we, in the same trouble,\nshould be like him\nand keep silent under persecution."}
    ]
  },
  {
    number: 35, disc: 2, discTrack: 6, part: 2,
    type: "Aria",
    titleDe: "Geduld! Wenn mich falsche Zungen stechen",
    titleEn: "Patience! When false tongues do sting me",
    voicing: "Tenor",
    duration: 3.79,
    german: [
      {s: "Tenor", t: "Geduld, Geduld!\nWenn mich falsche Zungen stechen.\nLeid ich wider meine Schuld\nSchimpf und Spott,\nEi, so mag der liebe Gott\nMeines Herzens Unschuld rächen."}
    ],
    english: [
      {s: "Tenor", t: "Patience, patience!\nWhen false tongues pierce.\nAlthough I suffer, contrary to my due,\nshame and scorn,\nindeed, dear God shall\nrevenge the innocence of my heart."}
    ]
  },
  {
    number: 36, disc: 2, discTrack: 7, part: 2,
    type: "Recitative",
    titleDe: "Und der Hohepriester antwortete",
    titleEn: "And the high priest answered",
    voicing: "Evangelist (Tenor), Jesus (Bass), High Priest (Bass), Chorus I & II",
    duration: 1.97,
    german: [
      {s: "Evangelist", t: "Und der Hohenpriester antwortete und sprach zu ihm:"},
      {s: "High Priest", t: "Ich beschwöre dich bei dem lebendigen Gott, daß du uns sagest, ob du seiest Christus, der Sohn Gottes?"},
      {s: "Evangelist", t: "Jesus sprach zu ihm:"},
      {s: "Jesus", t: "Du sagests. Doch sage ich euch: von nun an wirds geschehen, daß ihr sehen werdet des Menschen Sohn sitzen zur Rechten der Kraft und kommen in den Wolken des Himmels."},
      {s: "Evangelist", t: "Da zerriß der Hohepriester seine Kleider und sprach:"},
      {s: "High Priest", t: "Er hat Gott gelästert; was dürfen wir weiter Zeugnis? Siehe, itzt habt ihr seine Gotteslästerung gehöret. Was dünket euch?"},
      {s: "Evangelist", t: "Sie antworteten und sprachen:"},
      {s: "Chorus I & II", t: "Er ist des Todes schuldig!"},
      {s: "Evangelist", t: "Da speieten sie aus in sein Angesicht und schlugen ihn mit Fäusten. Etliche aber schlugen ihn ins Angesicht und sprachen:"},
      {s: "Chorus I & II", t: "Weissage uns, Christe, wer ists, der dich schlug?"}
    ],
    english: [
      {s: "Evangelist", t: "And the high priest answered and said to him:"},
      {s: "High Priest", t: "I abjure you by the living God to tell us whether you are the Christ, the Son of God!"},
      {s: "Evangelist", t: "Jesus said to him:"},
      {s: "Jesus", t: "You say it. Yet I say to you: from now on it will come to pass that you will see the Son of Man sitting at the right hand of Power, and approaching in the clouds of heaven."},
      {s: "Evangelist", t: "Then the high priest tore his garments and said:"},
      {s: "High Priest", t: "He has blasphemed God; what further witness do we need? Behold, now you have heard his blasphemy. What do you think?"},
      {s: "Evangelist", t: "They answered and said:"},
      {s: "Chorus I & II", t: "He is worthy of death!"},
      {s: "Evangelist", t: "Then they spit in his face and struck him with fists. Some of them, however, struck him in the face and said:"},
      {s: "Chorus I & II", t: "Prophesy to us, Christ, who is it who strikes you?"}
    ]
  },
  {
    number: 37, disc: 2, discTrack: 8, part: 2,
    type: "Chorale",
    titleDe: "Wer hat dich so geschlagen",
    titleEn: "Who was it that did smite Thee",
    voicing: "Chorus I & II",
    duration: 0.98,
    german: [
      {s: "Chorus", t: "Wer hat dich so geschlagen,\nMein Heil, und dich mit Plagen\nSo übel zugericht'?\nDu bist ja nicht ein Sünder\nWie wir und unsre Kinder,\nVon Missetaten weißt du nicht."}
    ],
    english: [
      {s: "Chorus", t: "Who has struck you thus,\nmy Savior, and with torments\nso evilly used you?\nYou are not at all a sinner\nlike us and our children;\nyou know nothing of transgressions."}
    ]
  },
  {
    number: 38, disc: 2, discTrack: 9, part: 2,
    type: "Recitative",
    titleDe: "Petrus aber saß draußen im Palast",
    titleEn: "Now Peter sat without in the palace",
    voicing: "Evangelist (Tenor), Maids (Soprano), Peter (Bass)",
    duration: 2.45,
    german: [
      {s: "Evangelist", t: "Petrus aber saß draußen im Palast; und es trat zu ihm eine Magd und sprach:"},
      {s: "Maid I", t: "Und du warest auch mit dem Jesus aus Galiläa."},
      {s: "Evangelist", t: "Er leugnete aber vor ihnen allen und sprach:"},
      {s: "Peter", t: "Ich weiß nicht, was du sagest."},
      {s: "Evangelist", t: "Als er aber zur Tür hinausging, sahe ihn eine andere und sprach zu denen, die da waren:"},
      {s: "Maid II", t: "Dieser war auch mit dem Jesu von Nazareth."},
      {s: "Evangelist", t: "Und er leugnete abermal und schwur dazu:"},
      {s: "Peter", t: "Ich kenne des Menschen nicht."},
      {s: "Evangelist", t: "Und über eine kleine Weile traten hinzu, die da stunden, und sprachen zu Petro:"},
      {s: "Chorus II", t: "Wahrlich, du bist auch einer von denen; denn deine Sprache verrät dich."},
      {s: "Evangelist", t: "Da hub er an sich zu verfluchen und zu schwören:"},
      {s: "Peter", t: "Ich kenne des Menschen nicht."},
      {s: "Evangelist", t: "Und alsbald krähete der Hahn. Da dachte Petrus an die Worte Jesu, da er zu ihm sagte: \"Ehe der Hahn krähen wird, wirst du mich dreimal verleugnen.\" Und ging heraus und weinete bitterlich."}
    ],
    english: [
      {s: "Evangelist", t: "Peter, however, sat outside of the palace; and a maid came up to him and said:"},
      {s: "Maid I", t: "And you were also with that Jesus of Galilee."},
      {s: "Evangelist", t: "He denied it however before them all and said:"},
      {s: "Peter", t: "I don't know what you are saying."},
      {s: "Evangelist", t: "As he was going out of the door, however, another one saw him and said to those who were near:"},
      {s: "Maid II", t: "This one was also with that Jesus from Nazareth."},
      {s: "Evangelist", t: "And he denied again, and swore to it:"},
      {s: "Peter", t: "I do not know the man."},
      {s: "Evangelist", t: "And after a little while people standing around came up and said to Peter:"},
      {s: "Chorus II", t: "Truly you are also one of them; your speech gives you away."},
      {s: "Evangelist", t: "Then he began to curse and swear:"},
      {s: "Peter", t: "I do not know the man."},
      {s: "Evangelist", t: "And just then the cock crew. Then Peter remembered the words of Jesus, when he said to him: \"Before the cock crows, you will deny me three times.\" And he went out and wept bitterly."}
    ]
  },
  {
    number: 39, disc: 2, discTrack: 10, part: 2,
    type: "Aria",
    titleDe: "Erbarme dich, mein Gott",
    titleEn: "Have mercy, my God",
    voicing: "Alto, Violin solo",
    duration: 7.05,
    german: [
      {s: "Alto", t: "Erbarme dich, mein Gott,\nUm meiner Zähren Willen!\nSchaue hier, Herz und Auge\nWeint vor dir bitterlich.\nErbarme dich, erbarme dich!"}
    ],
    english: [
      {s: "Alto", t: "Have mercy, my God,\nfor the sake of my tears!\nLook here, heart and eyes\nweep bitterly before you.\nHave mercy, have mercy!"}
    ]
  },
  {
    number: 40, disc: 2, discTrack: 11, part: 2,
    type: "Chorale",
    titleDe: "Bin ich gleich von dir gewichen",
    titleEn: "Though I have from Thee departed",
    voicing: "Chorus I & II",
    duration: 1.01,
    german: [
      {s: "Chorus", t: "Bin ich gleich von dir gewichen,\nStell ich mich doch wieder ein;\nHat uns doch dein Sohn verglichen\nDurch sein Angst und Todespein.\nIch verleugne nicht die Schuld,\nAber deine Gnad und Huld\nIst viel größer als die Sünde,\nDie ich stets in mir befinde."}
    ],
    english: [
      {s: "Chorus", t: "Although I have been separated from you,\nyet I bring myself back again;\neven so your Son set the example for us\nthrough his anguish and mortal pain.\nI do not deny my guilt,\nbut your grace and mercy\nis much greater than the sin\nthat I constantly discover in me."}
    ]
  },
  {
    number: 41, disc: 2, discTrack: 12, part: 2,
    type: "Recitative",
    titleDe: "Des Morgens aber hielten alle Hohenpriester",
    titleEn: "When the morning was come",
    voicing: "Evangelist (Tenor), Judas (Bass)",
    duration: 1.73,
    german: [
      {s: "Evangelist", t: "Des Morgens aber hielten alle Hohepriester und die Ältesten des Volks einen Rat über Jesum, daß sie ihn töteten. Und bunden ihn, führeten ihn hin und überantworteten ihn dem Landpfleger Pontio Pilato. Da das sahe Judas, der ihn verraten hatte, daß er verdammt war zum Tode, gereuete es ihn, und brachte herwieder die dreißig Silberlinge den Hohenpriestern und Ältesten und sprach:"},
      {s: "Judas", t: "Ich habe übel getan, daß ich unschuldig Blut verraten habe."},
      {s: "Evangelist", t: "Sie sprachen:"},
      {s: "Chorus I & II", t: "Was gehet uns das an? Da siehe du zu!"},
      {s: "Evangelist", t: "Und er warf die Silberlinge in den Tempel, hub sich davon, ging hin und erhängete sich selbst. Aber die Hohenpriester nahmen die Silberlinge und sprachen:"},
      {s: "High Priests", t: "Es taugt nicht, daß wir sie in den Gotteskasten legen, denn es ist Blutgeld."}
    ],
    english: [
      {s: "Evangelist", t: "The next day, however, all the high priests and the elders of the people held a council about Jesus so that they could put him to death. And they bound him, led him out and turned him over to the Governor, Pontius Pilate. When Judas, who betrayed him, saw that he was condemned to death, he felt remorse and brought back the thirty silver pieces to the high priests and the elders and said:"},
      {s: "Judas", t: "I have done evil by betraying innocent blood."},
      {s: "Evangelist", t: "They said:"},
      {s: "Chorus I & II", t: "How does that concern us? See to it yourself!"},
      {s: "Evangelist", t: "And he threw the silver pieces into the temple and left, and went away and hanged himself. However the high priests took the silver pieces and said:"},
      {s: "High Priests", t: "It will not do to put them into the coffers of God, since it is blood money."}
    ]
  },
  {
    number: 42, disc: 2, discTrack: 13, part: 2,
    type: "Aria",
    titleDe: "Gebt mir meinen Jesum wieder!",
    titleEn: "Give me back my Jesus!",
    voicing: "Bass",
    duration: 2.75,
    german: [
      {s: "Bass", t: "Gebt mir meinen Jesum wieder!\nSeht das Geld, den Mörderlohn,\nWirft euch der verlorne Sohn\nZu den Füßen nieder!"}
    ],
    english: [
      {s: "Bass", t: "Give me my Jesus back!\nSee the money, the murderer's fee,\ntossed at your feet by the\nlost son!"}
    ]
  },
  {
    number: 43, disc: 2, discTrack: 14, part: 2,
    type: "Recitative",
    titleDe: "Sie hielten aber einen Rat",
    titleEn: "And they took counsel",
    voicing: "Evangelist (Tenor), Pilate (Bass), Jesus (Bass)",
    duration: 2.08,
    german: [
      {s: "Evangelist", t: "Sie hielten aber einen Rat und kauften einen Töpfersakker darum zum Begräbnis der Pilger. Daher ist derselbige Akker genennet der Blutakker bis auf den heutigen Tag. Da ist erfüllet, das gesaget ist durch den Propheten Jeremias, da er spricht: \"Sie haben genommen dreißig Silberlinge, damit bezahlet ward der Verkaufte, welchen sie kauften von den Kinder Israel, und haben sie gegeben um einen Töpfersakker, als mir der Herr befohlen hat.\" Jesus aber stund vor der Landpfleger; und der Landpfleger fragte ihn und sprach:"},
      {s: "Pilate", t: "Bist du der Jüden König?"},
      {s: "Evangelist", t: "Jesus aber sprach zu ihm:"},
      {s: "Jesus", t: "Du sagests."},
      {s: "Evangelist", t: "Und da er verklagt war von den Hohenpriestern und Ältesten, antwortete er nichts. Da sprach Pilatus zu ihm:"},
      {s: "Pilate", t: "Hörest du nicht, wie hart sie dich verklagen?"},
      {s: "Evangelist", t: "Und er antwortete ihm nicht auf ein Wort, also, daß sich auch der Landpfleger sehr verwunderte."}
    ],
    english: [
      {s: "Evangelist", t: "They held a council, however, and bought a potter's field with the money for the burial of pilgrims. Therefore this same field is called the Field of Blood to this very day. Thus was fulfilled what was spoken through the Prophet Jeremiah, who said: \"They have taken thirty silver pieces, the price of him who was bought from the children of Israel, and have given them for a potter's field, as the Lord has commanded me.\" Jesus, however, stood before the Governor; and the Governor questioned him and said:"},
      {s: "Pilate", t: "Are you the King of the Jews?"},
      {s: "Evangelist", t: "Jesus, however, said to him:"},
      {s: "Jesus", t: "You say it."},
      {s: "Evangelist", t: "And to the accusations from the high priests and the elders he answered nothing. Then Pilate said to him:"},
      {s: "Pilate", t: "Do you not hear how harshly they accuse you?"},
      {s: "Evangelist", t: "And he answered him not even one word thus, to which even the Governor was greatly amazed."}
    ]
  },
  {
    number: 44, disc: 2, discTrack: 15, part: 2,
    type: "Chorale",
    titleDe: "Befiehl du deine Wege",
    titleEn: "Commit thy way to God",
    voicing: "Chorus I & II",
    duration: 1.1,
    german: [
      {s: "Chorus", t: "Befiel du deine Wege,\nund was dein Herze kränkt,\nDer allertreusten Pflege,\nDes, der den Himmel lenkt,\nDer Wolken, Luft und Winden\nGibt Wege, Lauf, und Bahn,\nEr will auch Wege finden\nDaß dein Fuß gehen kann."}
    ],
    english: [
      {s: "Chorus", t: "Commit your path,\nand whatever troubles your heart,\nto the most faithful caretaker,\nwho directs the heavens,\nwho to the clouds, air, and winds\ngives path, course, and passage;\nhe will find ways\nfor your feet to follow as well."}
    ]
  },
  {
    number: 45, disc: 2, discTrack: 16, part: 2,
    type: "Recitative",
    titleDe: "Auf das Fest aber hatte der Landpfleger Gewohnheit",
    titleEn: "Now at that feast the governor was wont",
    voicing: "Evangelist (Tenor), Pilate (Bass), Wife (Soprano), Chorus I & II",
    duration: 2.19,
    german: [
      {s: "Evangelist", t: "Auf das Fest aber hatte der Landpfleger Gewohnheit, dem Volk einen Gefangenen loszugeben, welchen sie wollten. Er hatte aber zu der Zeit einen Gefangenen, einen sonderlichen von andern, der hieß Barrabas. Und da sie versammlet waren, sprach Pilatus zu ihnen:"},
      {s: "Pilate", t: "Welchen wollt ihr, daß ich euch losgebe? Barrabam oder Jesum, von dem gesaget wird, er sei Christus?"},
      {s: "Evangelist", t: "Denn er wußte wohl, daß sie ihn aus Neid überantwortet hatten. Und da er auf dem Richtstuhl saß, schickete sein Weib zu ihm und ließ ihm sagen:"},
      {s: "Pilate's Wife", t: "Habe du nichts zu schaffen mit diesem Gerechten; ich habe heute viel erlitten im Traum von seinetwegen!"},
      {s: "Evangelist", t: "Aber die Hohenpriester und die Ältesten überredeten das Volk, daß sie um Barrabam bitten sollten und Jesum umbrächten. Da antwortete nun der Landpfleger und sprach zu ihnen:"},
      {s: "Pilate", t: "Welchen wollt ihr unter diesen Zweien, den ich euch soll losgeben?"},
      {s: "Evangelist", t: "Sie sprachen:"},
      {s: "Chorus I & II", t: "Barrabam!"},
      {s: "Evangelist", t: "Pilatus sprach zu ihnen:"},
      {s: "Pilate", t: "Was soll ich denn machen mit Jesu, von dem gesagt wird, er sei Christus?"},
      {s: "Evangelist", t: "Sie sprachen alle:"},
      {s: "Chorus I & II", t: "Laß ihn kreuzigen!"}
    ],
    english: [
      {s: "Evangelist", t: "At the festival, however, the Governor had a custom of releasing a prisoner to the people, whichever they wanted. He had, however, at the time a most unusual prisoner named Barabbas. And as they were gathered together, Pilate said to them:"},
      {s: "Pilate", t: "Which one do you want me to release to you? Barabbas or Jesus, of whom it is said, he is the Christ?"},
      {s: "Evangelist", t: "For he knew well that they had handed him over out of envy. And while he sat upon the judgment seat, his wife sent to him and her message said:"},
      {s: "Pilate's Wife", t: "Have nothing to do with this righteous man; I have suffered much in a dream today on his account!"},
      {s: "Evangelist", t: "But the high priests and the elders convinced the people that they should ask for Barabbas and convict Jesus. So when the Governor answered and said to them:"},
      {s: "Pilate", t: "Which one between the two do you want me to release to you?"},
      {s: "Evangelist", t: "They said:"},
      {s: "Chorus I & II", t: "Barabbas!"},
      {s: "Evangelist", t: "Pilate said to them:"},
      {s: "Pilate", t: "What shall I do then with Jesus, of whom it is said, he is the Christ?"},
      {s: "Evangelist", t: "They all said:"},
      {s: "Chorus I & II", t: "Let him be crucified!"}
    ]
  },
  {
    number: 46, disc: 2, discTrack: 17, part: 2,
    type: "Chorale",
    titleDe: "Wie wunderbarlich ist doch diese Strafe!",
    titleEn: "How wondrous is this punishment!",
    voicing: "Chorus I & II",
    duration: 0.71,
    german: [
      {s: "Chorus", t: "Wie wunderbarlich ist doch diese Strafe!\nDie gute Hirte leidet für die Schafe,\nDie Schuld bezahlt der Herre, der Gerechte,\nFür seine Knechte."}
    ],
    english: [
      {s: "Chorus", t: "How strange is this punishment!\nThe Good Shepherd suffers for the sheep.\nThe Lord, the Righteous One, atones for the crime\non his servant's behalf."}
    ]
  },
  {
    number: 47, disc: 2, discTrack: 18, part: 2,
    type: "Recitative",
    titleDe: "Der Landpfleger sagte",
    titleEn: "The governor said",
    voicing: "Evangelist (Tenor), Pilate (Bass)",
    duration: 0.29,
    german: [
      {s: "Evangelist", t: "Der Landpfleger sagte:"},
      {s: "Pilate", t: "Was hat er denn Übels getan?"}
    ],
    english: [
      {s: "Evangelist", t: "The Governor said:"},
      {s: "Pilate", t: "What evil has he done then?"}
    ]
  },
  {
    number: 48, disc: 2, discTrack: 19, part: 2,
    type: "Recitative",
    titleDe: "Er hat uns allen wohlgetan",
    titleEn: "He has done good to us all",
    voicing: "Soprano",
    duration: 1.26,
    german: [
      {s: "Soprano", t: "Er hat uns allen wohlgetan,\nden Blinden gab er das Gesicht,\nDie Lahmen macht' er gehend,\nEr sagt' uns seines Vaters Wort,\nEr trieb die Teufel fort,\nBetrübte hat er aufgericht',\nEr nahm die Sünder auf und an,\nSonst hat mein Jesus nichts getan."}
    ],
    english: [
      {s: "Soprano", t: "He has done good things for all of us;\nhe gave sight to the blind,\nhe made the lame to walk,\nhe told us his Father's word,\nhe drove out the devil,\nhe has strengthened the troubled.\nHe took sinners in and embraced them,\nother than that, my Jesus has done nothing!"}
    ]
  },
  {
    number: 49, disc: 2, discTrack: 20, part: 2,
    type: "Aria",
    titleDe: "Aus Liebe will mein Heiland sterben",
    titleEn: "Out of love my Savior is willing to die",
    voicing: "Soprano",
    duration: 5.46,
    german: [
      {s: "Soprano", t: "Aus Liebe will mein Heiland sterben,\nVon einer Sünde weiß er nichts,\nDaß das ewigen Verderben\nund die Strafe des Gerichts\nNicht auf meiner Seele bliebe."}
    ],
    english: [
      {s: "Soprano", t: "Out of love my Savior wants to die.\nHe knows nothing of a single sin;\nso that the eternal destruction\nand the punishment of judgment\nwould not remain upon my soul."}
    ]
  },
  {
    number: 50, disc: 2, discTrack: 21, part: 2,
    type: "Recitative",
    titleDe: "Sie schrieen aber noch mehr",
    titleEn: "But they cried out all the more",
    voicing: "Evangelist (Tenor), Pilate (Bass), Chorus I & II",
    duration: 1.78,
    german: [
      {s: "Evangelist", t: "Sie schrieen aber noch mehr und sprachen:"},
      {s: "Chorus I & II", t: "Laß ihn kreuzigen!"},
      {s: "Evangelist", t: "Da aber Pilatus sahe, daß er nichts schaffete, sondern daß ein viel größer Getümmel ward, nahm er Wasser und wusch die Hände vor dem Volk und sprach:"},
      {s: "Pilate", t: "Ich bin unschuldig an dem Blut dieses Gerechten, sehet ihr zu!"},
      {s: "Evangelist", t: "Da antwortete das ganze Volk und sprach:"},
      {s: "Chorus I & II", t: "Sein Blut komme über uns und unsre Kinder."},
      {s: "Evangelist", t: "Da gab er ihnen Barrabam los; aber Jesum ließ er geißeln und überantwortete ihn, daß er gekreuziget würde."}
    ],
    english: [
      {s: "Evangelist", t: "They screamed even more and said:"},
      {s: "Chorus I & II", t: "Let him be crucified!"},
      {s: "Evangelist", t: "When Pilate saw, however, that he achieved nothing, rather that a much greater riot occurred, he took water and washed his hands before the people and said:"},
      {s: "Pilate", t: "I am innocent of the blood of this righteous man, see to it yourselves!"},
      {s: "Evangelist", t: "Then all the people answered and said:"},
      {s: "Chorus I & II", t: "Let his blood be on us and on our children."},
      {s: "Evangelist", t: "Then he released Barabbas to them; but he had Jesus scourged and handed him over to be crucified."}
    ]
  },
  {
    number: 51, disc: 2, discTrack: 22, part: 2,
    type: "Recitative",
    titleDe: "Erbarm es Gott!",
    titleEn: "God have mercy!",
    voicing: "Alto",
    duration: 1.0,
    german: [
      {s: "Alto", t: "Erbarm es, Gott!\nHier steht der Heiland angebunden.\nO Geißelung, o Schläg, o Wunden!\nIhr Henker, haltet ein!\nErweichet euch der Seelen Schmerz,\nDer Anblick solches Jammers nicht?\nAch ja! ihr habt ein Herz,\nDas muß der Martersäule gleich\nUnd noch viel härter sein.\nErbarmt euch, haltet ein!"}
    ],
    english: [
      {s: "Alto", t: "Forgive this, God!\nHere stands the Savior bound.\nO scourging, O blows, O wounds!\nYou hangmen, stop!\nDoesn't the soul's anguish,\nthe sight of such horror soften you?\nAlas indeed! You have such hearts\nthat are like the whipping posts themselves\nand even much harder.\nHave mercy, stop!"}
    ]
  },
  {
    number: 52, disc: 2, discTrack: 23, part: 2,
    type: "Aria",
    titleDe: "Können Tränen meiner Wangen",
    titleEn: "If the tears upon my cheeks",
    voicing: "Alto",
    duration: 6.33,
    german: [
      {s: "Alto", t: "Können Tränen meiner Wangen\nNichts erlangen,\nO so nehmt mein Herz hinein!\nAber laßt es bei den Fluten,\nWenn die Wunden milde bluten,\nAuch die Opferschale sein."}
    ],
    english: [
      {s: "Alto", t: "If the tears on my cheeks\ncan do nothing,\nOh, then take my heart as well!\nYet let it be, in the flow,\nas the wounds gently bleed,\nthe offering-bowl as well."}
    ]
  },
  // ======================== DISC 3 — PART TWO (cont.) ========================
  {
    number: 53, disc: 3, discTrack: 1, part: 2,
    type: "Recitative",
    titleDe: "Da nahmen die Kriegsknechte des Landpflegers",
    titleEn: "Then the soldiers of the governor",
    voicing: "Evangelist (Tenor), Chorus I & II",
    duration: 1.12,
    german: [
      {s: "Evangelist", t: "Da nahmen die Kriegsknechte des Landpflegers Jesum zu sich in das Richthaus und sammleten über ihn die ganze Schar und zogen ihn aus und legeten ihm einen Purpurmantel an und flochten eine dornene Krone und satzten sie auf sein Haupt, und ein Rohr in seine rechte Hand, und beugeten die Knie vor ihm und spotteten ihn und sprachen:"},
      {s: "Chorus I & II", t: "Gegrüßet seist du, Jüdenkönig!"},
      {s: "Evangelist", t: "Und speieten ihn an und nahmen das Rohr und schlugen damit sein Haupt."}
    ],
    english: [
      {s: "Evangelist", t: "Then the soldiers of the Governor took Jesus with them into the courthouse and gathered around him the entire troop; and undressed him and put a purple mantle on him; and they wove a crown of thorns and set it upon his head, and a reed in his right hand, and they bowed before him and mocked him, saying:"},
      {s: "Chorus I & II", t: "Hail to you, King of the Jews!"},
      {s: "Evangelist", t: "And they spat on him and took the reed and struck his head with it."}
    ]
  },
  {
    number: 54, disc: 3, discTrack: 2, part: 2,
    type: "Chorale",
    titleDe: "O Haupt voll Blut und Wunden",
    titleEn: "O sacred head now wounded",
    voicing: "Chorus I & II",
    duration: 1.97,
    german: [
      {s: "Chorus", t: "O Haupt, voll Blut und Wunden,\nvoll Schmerz und voller Hohn!\nO Haupt, zu Spott gebunden\nmit einer Dornenkron!\nO Haupt, sonst schön gezieret\nMit höchster Ehr und Zier,\nJetzt aber hoch schimpfieret:\nGegrüsset seist du mir!\n\nDu edles Angesichte,\nDafür sonst schrickt und scheut\nDas große Weltgewichte,\nWie bist du so verspeit,\nWie bist du so erbleichet!\nWer hat dein Augenlicht,\nDem sonst kein Licht nicht gleichet,\nso schändlich zugericht'?"}
    ],
    english: [
      {s: "Chorus", t: "O head, full of blood and wounds,\nfull of suffering and shame!\nO head, bound in mockery\nwith a crown of thorns!\nO head, once beautifully adorned\nwith the highest honor and beauty,\nyet now supremely defiled:\nbe greeted by me!\n\nYou noble countenance,\nbefore which rather should tremble and cower\nthe great powers of the world,\nhow spat upon are you,\nHow ashen you have become!\nWho has treated the light of your eyes,\nwhich is like no other light,\nso shamefully?"}
    ]
  },
  {
    number: 55, disc: 3, discTrack: 3, part: 2,
    type: "Recitative",
    titleDe: "Und da sie ihn verspottet hatten",
    titleEn: "And after that they had mocked Him",
    voicing: "Evangelist (Tenor)",
    duration: 1.15,
    german: [
      {s: "Evangelist", t: "Und da sie ihn verspottet hatten, zogen sie ihm den Mantel aus und zogen ihm seine Kleider an und führeten ihn hin, daß sie ihn kreuzigten. Und indem sie hinausgingen, funden sie einen Menschen von Kyrene mit Namen Simon; den zwungen sie, daß er ihm sein Kreuz trug."}
    ],
    english: [
      {s: "Evangelist", t: "And when they had mocked him, they took off the mantle and put his clothes back on; and led him out to be crucified. And as they were going out, they found a man from Cyrene named Simon; they compelled him to carry his cross for him."}
    ]
  },
  {
    number: 56, disc: 3, discTrack: 4, part: 2,
    type: "Recitative",
    titleDe: "Ja, freilich will in uns das Fleisch und Blut",
    titleEn: "Yes, truly, the flesh and blood in us",
    voicing: "Bass",
    duration: 0.55,
    german: [
      {s: "Bass", t: "Ja, freilich will in uns das Fleisch und Blut\nZum Kreuz gezwungen sein;\nJe mehr es unsrer Seele gut,\nJe herber geht es ein."}
    ],
    english: [
      {s: "Bass", t: "Yes, willingly are flesh and blood\ncompelled to the Cross;\nThe better it is for our souls,\nthe bitterer it feels."}
    ]
  },
  {
    number: 57, disc: 3, discTrack: 5, part: 2,
    type: "Aria",
    titleDe: "Komm, süßes Kreuz",
    titleEn: "Come, sweet cross",
    voicing: "Bass, Viola da gamba",
    duration: 6.27,
    german: [
      {s: "Bass", t: "Komm, süßes Kreuz, so will ich sagen,\nMein Jesu, gib es immer her!\nWird mein Leiden einst zu schwer,\nSo hilfst du mir es selber tragen."}
    ],
    english: [
      {s: "Bass", t: "Come, sweet Cross, this I want to say:\nMy Jesus, give it always to me!\nIf my suffering becomes too heavy one day,\nyou yourself will help me bear it."}
    ]
  },
  {
    number: 58, disc: 3, discTrack: 6, part: 2,
    type: "Recitative",
    titleDe: "Und da sie an die Stätte kamen",
    titleEn: "And when they were come unto a place",
    voicing: "Evangelist (Tenor), Chorus I & II",
    duration: 3.33,
    german: [
      {s: "Evangelist", t: "Und da sie an die Stätte kamen mit Namen Golgatha, das ist verdeutschet Schädelstätt, gaben sie ihm Essig zu trinken mit Gallen vermischet; und da ers schmeckete, wollte ers nicht trinken. Da sie ihn aber gekreuziget hatten, teilten sie seine Kleider und wurfen das Los darum, auf das erfüllet würde, das gesaget ist durch den Propheten: \"Sie haben meine Kleider unter sich geteilet, und über mein Gewand haben sie das Los geworfen.\" Und sie saßen allda und hüteten sein. Und oben zu seinem Häupten hefteten sie die Ursach seines Todes geschrieben, nähmlich: \"Dies ist Jesus, der Jüdenkönig.\" Und da wurden zween Mörder mit ihm gekreuziget, einer zur Rechten und einer zur Linken. Die aber vorübergingen, lästerten ihn und schüttelten ihre Köpfe und sprachen:"},
      {s: "Chorus I & II", t: "Der du den Tempel Gottes zerbrichst und bauest ihn in dreien Tagen, hilf dir selber! Bist du Gottes Sohn, so steig herab vom Kreuz!"},
      {s: "Evangelist", t: "Desgleichen auch die Hohenpriester spotteten sein samt den Schriftgelehrten und Ältesten und sprachen:"},
      {s: "Chorus I & II", t: "Andern hat er geholfen und kann ihm selber nicht helfen. Ist er der König Israel, so steige er nun vom Kreuz, so wollen wir ihm glauben. Er hat Gott vertrauet, der erlöse ihn nun, lüstets ihn; denn er hat gesagt: \"Ich bin Gottes Sohn.\""},
      {s: "Evangelist", t: "Desgleichen schmäheten ihn auch die Mörder, die mit ihm gekreuziget waren."}
    ],
    english: [
      {s: "Evangelist", t: "And when they had come to the place named Golgotha, which is translated the Place of the Skull, they gave him vinegar to drink mixed with gall; and when he tasted it, he would not drink it. When they had crucified him, however, they divided up his clothing and tossed lots over them, so that what was spoken through the Prophets was fulfilled: \"They have divided my clothing among them, and over my robe they have cast lots.\" And they sat around and kept watch. And over his head they lifted up a written sentence of death, namely: \"This is Jesus, the King of the Jews.\" And there were two murderers crucified with him, one to his left and one to his right. But those who passed by cursed at him and shook their heads, saying:"},
      {s: "Chorus I & II", t: "You who destroy the temple of God and build it up again in three days, help yourself! If you are the Son of God, climb down from the Cross!"},
      {s: "Evangelist", t: "In the same way the high priests also mocked him, together with the scribes and the elders, saying:"},
      {s: "Chorus I & II", t: "He has helped others and he cannot help himself. If he is the King of Israel, let him climb down now from the Cross, and we will believe in him. He has trusted in God to rescue him now; he lied, because he said: \"I am the Son of God.\""},
      {s: "Evangelist", t: "In the same way he was reviled by the murderers who were crucified with him."}
    ]
  },
  {
    number: 59, disc: 3, discTrack: 7, part: 2,
    type: "Recitative",
    titleDe: "Ach Golgatha, unsel'ges Golgatha!",
    titleEn: "Ah, Golgotha, unhappy Golgotha!",
    voicing: "Alto",
    duration: 1.35,
    german: [
      {s: "Alto", t: "Ach Golgatha, unselges Golgatha!\nDer Herr der Herrlichkeit\nMuß schimpflich hier verderben,\nDer Segen und das Heil der Welt\nWird als ein Fluch ans Kreuz gestellt.\nDer Schöpfer Himmels und der Erden\nSoll Erd und Luft entzogen werden.\nDie Unschuld muß hier schuldig sterben,\nDas gehet meiner Seele nah;\nAch Golgatha, unselges Golgatha!"}
    ],
    english: [
      {s: "Alto", t: "Alas, Golgotha, unhappy Golgotha!\nThe Lord of glory\nmust shamefully perish here,\nthe blessing and salvation of the world\nis placed on the Cross as a curse.\nFrom the Creator of heaven and earth\nearth and air shall be withdrawn.\nThe innocent must die here guilty;\nthis touches my soul deeply;\nAlas, Golgotha, unhappy Golgotha!"}
    ]
  },
  {
    number: 60, disc: 3, discTrack: 8, part: 2,
    type: "Aria",
    titleDe: "Sehet, Jesus hat die Hand",
    titleEn: "See ye, Jesus hath His hand",
    voicing: "Alto, Chorus II",
    duration: 3.12,
    german: [
      {s: "Alto", t: "Sehet, Jesus hat die Hand\nUns zu fassen ausgespannt,"},
      {s: "Chorus II", t: "Kommt! – Wohin? – In Jesu Armen\nSucht Erlösung, nehmt Erbarmen,\nSuchet! – Wo? – In Jesu Armen."},
      {s: "Alto", t: "Lebet, sterbet, ruhet hier,\nIhr verlaßnen Küchlein ihr,"},
      {s: "Chorus II", t: "Bleibet! – Wo? – In Jesu Armen."}
    ],
    english: [
      {s: "Alto", t: "Look, Jesus has stretched out his hands\nto embrace us,"},
      {s: "Chorus II", t: "come! – where? – in Jesus' arms\nseek redemption, receive mercy,\nseek it! – where? – in Jesus' arms."},
      {s: "Alto", t: "Live, die, rest here,\nyou forsaken chicks,"},
      {s: "Chorus II", t: "stay! – where? – in Jesus' arms."}
    ]
  },
  {
    number: 61, disc: 3, discTrack: 9, part: 2,
    type: "Recitative",
    titleDe: "Und von der sechsten Stunde an",
    titleEn: "Now from the sixth hour",
    voicing: "Evangelist (Tenor), Jesus (Bass)",
    duration: 2.4,
    german: [
      {s: "Evangelist", t: "Und von der sechsten Stunde an war eine Finsternis über das ganze Land bis zu der neunten Stunde. Und um die neunte Stunde schriee Jesus laut und sprach:"},
      {s: "Jesus", t: "Eli, Eli, lama asabthani?"},
      {s: "Evangelist", t: "Das ist: \"Mein Gott, mein Gott, warum hast du mich verlassen?\" Etliche aber, die da stunden, da sie das höreten, sprachen sie:"},
      {s: "Chorus I", t: "Der rufet dem Elias!"},
      {s: "Evangelist", t: "Und bald lief einer unter ihnen, nahm einen Schwamm und füllete ihn mit Essig, und steckete ihn auf ein Rohr für ihn zu trinken. Die andern aber sprachen:"},
      {s: "Chorus II", t: "Halt! Laß sehen, ob Elias komme und ihm helfe."},
      {s: "Evangelist", t: "Aber Jesus schriee abermal laut und verschied."}
    ],
    english: [
      {s: "Evangelist", t: "And from the sixth hour there was a darkness over the entire land until the ninth hour. And at the ninth hour Jesus cried out loudly and said:"},
      {s: "Jesus", t: "Eli, Eli, lama sabachtani?"},
      {s: "Evangelist", t: "That is: \"My God, my God, why have you forsaken me?\" Some of those, however, who were standing by, when they heard this, said:"},
      {s: "Chorus I", t: "He is calling Elijah!"},
      {s: "Evangelist", t: "And some of them quickly ran, took a sponge and filled it with vinegar, and put it on a reed for him to drink. But the others said:"},
      {s: "Chorus II", t: "Stop! Let's see whether Elijah comes and helps him."},
      {s: "Evangelist", t: "But Jesus cried out loudly once again and died."}
    ]
  },
  {
    number: 62, disc: 3, discTrack: 10, part: 2,
    type: "Chorale",
    titleDe: "Wenn ich einmal soll scheiden",
    titleEn: "When I must depart one day",
    voicing: "Chorus I & II",
    duration: 1.74,
    german: [
      {s: "Chorus", t: "Wenn ich einmal soll scheiden,\nSo scheide nicht von mir,\nWenn ich den Tod soll leiden,\nSo tritt du denn herfür!\nWenn mir am allerbängsten\nWird um das Herze sein,\nSo reiß mich aus den Ängsten\nKraft deiner Angst und Pein."}
    ],
    english: [
      {s: "Chorus", t: "When I must depart one day,\ndo not part from me then,\nwhen I must suffer death,\ncome to me then!\nWhen the greatest anxiety\nwill constrict my heart,\nthen wrest me out of the horror\nby the power of your anguish and pain."}
    ]
  },
  {
    number: 63, disc: 3, discTrack: 11, part: 2,
    type: "Recitative",
    titleDe: "Und siehe da, der Vorhang im Tempel zerriß",
    titleEn: "And, behold, the veil of the temple was rent",
    voicing: "Evangelist (Tenor)",
    duration: 2.58,
    german: [
      {s: "Evangelist", t: "Und siehe da, der Vorhang im Tempel zerriß in zwei Stück von obenan bis untenaus. Und die Erde erbebete, und die Felsen zerrissen, und die Gräber täten sich auf, und stunden auf viel Leiber der Heiligen, die da schliefen, und gingen aus den Gräbern nach seiner Auferstehung und kamen in die heilige Stadt und erschienen vielen. Aber der Hauptmann und die bei ihm waren und bewahreten Jesum, da sie sahen das Erdbeben und was da geschah, erschraken sie sehr und sprachen:"},
      {s: "Chorus I & II", t: "Wahrlich, dieser ist Gottes Sohn gewesen."},
      {s: "Evangelist", t: "Und es waren viel Weiber da, die von ferne zusahen, die da waren nachgefolget aus Galiläa, und hatten ihm gedienet, unter welchen war Maria Magdalena, und Maria die Mutter Jacobi und Joses, und die Mutter der Kinder Zebedäi. Am Abend aber kam ein reicher Mann von Arimathia, der heiß Joseph, welcher auch ein Jünger Jesu war, der ging zu Pilato und bat ihn um den Leichnam Jesu. Da befahl Pilatus, man sollte ihm ihn geben."}
    ],
    english: [
      {s: "Evangelist", t: "And behold, the veil of the temple was torn in two pieces from top to bottom. And the earth shook, and the cliffs were rent, and the graves opened up, and many bodies of saints arose, who were sleeping, and came out of their graves after his resurrection and came into the Holy City and appeared to many people. The Captain, however, and those with him who were guarding Jesus, when they saw the earthquake and what happened then, they were terrified and said:"},
      {s: "Chorus I & II", t: "Truly, this was the Son of God."},
      {s: "Evangelist", t: "And there were many women there, watching from a distance, who had followed him from Galilee and had served him, among whom were Mary Magdalene, and Mary the mother of James and Joseph, and the mother of the sons of Zebedee. In the evening however, came a rich man from Arimathea, named Joseph, who was also a disciple of Jesus; he went to Pilate and asked him for Jesus' body. Then Pilate ordered that it be given to him."}
    ]
  },
  {
    number: 64, disc: 3, discTrack: 12, part: 2,
    type: "Recitative",
    titleDe: "Am Abend, da es kühle war",
    titleEn: "At evening, when it was cool",
    voicing: "Bass",
    duration: 1.83,
    german: [
      {s: "Bass", t: "Am Abend, da es kühle war,\nWard Adams Fallen offenbar;\nAm Abend drücket ihn der Heiland nieder.\nAm Abend kam die Taube wieder,\nUnd trug ein Ölblatt in dem Munde.\nO schöne Zeit! O Abendstunde!\nDer Friedensschluß ist nun mit Gott gemacht,\nDenn Jesus hat sein Kreuz vollbracht.\nSein Leichnam kömmt zur Ruh,\nAch! liebe Seele, bitte du,\nGeh, lasse dir den toten Jesum schenken,\nO heilsames, o köstlichs Angedenken!"}
    ],
    english: [
      {s: "Bass", t: "In the evening, when it was cool,\nAdam's fall was made apparent;\nin the evening the Savior bowed himself down.\nIn the evening the dove came back,\nbearing an olive leaf in its mouth.\nO lovely time! O evening hour!\nThe pact of peace with God has now been made,\nsince Jesus has completed his Cross.\nHis body comes to rest,\nAh! dear soul, ask,\ngo, have them give you the dead Jesus,\nO salutary, O precious remembrance!"}
    ]
  },
  {
    number: 65, disc: 3, discTrack: 13, part: 2,
    type: "Aria",
    titleDe: "Mache dich, mein Herze, rein",
    titleEn: "Make thee clean, my heart",
    voicing: "Bass",
    duration: 6.6,
    german: [
      {s: "Bass", t: "Mache dich, mein Herze, rein,\nIch will Jesum selbst begraben.\nDenn er soll nunmehr in mir\nFür und für\nSeine süße Ruhe haben.\nWelt, geh aus, laß Jesum ein!"}
    ],
    english: [
      {s: "Bass", t: "Make yourself pure, my heart,\nI want to bury Jesus myself.\nFor from now on he shall have in me,\nforever and ever,\nhis sweet rest.\nWorld, get out, let Jesus in!"}
    ]
  },
  {
    number: 66, disc: 3, discTrack: 14, part: 2,
    type: "Recitative",
    titleDe: "Und Joseph nahm den Leib",
    titleEn: "And when Joseph had taken the body",
    voicing: "Evangelist (Tenor), Pilate (Bass), Chorus I & II",
    duration: 2.59,
    german: [
      {s: "Evangelist", t: "Und Joseph nahm den Leib und wickelte ihn in ein rein Leinwand, und legte ihn in sein eigen neu Grab, welches er hatte in einen Fels hauen, und wälzete einen großen Stein vor die Tür des Grabes, und ging davon. Es war aber allda Maria Magdalena und die andere Maria, die satzten sich gegen das Grab. Des andern Tages, der da folget nach dem Rüsttage, kamen die Hohenpriester und Pharisäer sämtlich zu Pilato und sprachen:"},
      {s: "Chorus I & II", t: "Herr, wir haben gedacht, daß dieser Verführer sprach, da er noch lebete: \"Ich will nach dreien Tagen wieder auferstehen.\" Darum befiehl, daß man das Grab verwahre bis an den dritten Tag, auf daß nicht seine Jünger kommen und stehlen ihn, und sagen zu dem Volk: \"Er ist auferstanden von den Toten,\" und werde der letzte Betrug ärger denn der erste!"},
      {s: "Evangelist", t: "Pilatus sprach zu ihnen:"},
      {s: "Pilate", t: "Da habt ihr die Hüter; gehet hin und verwahrets, wie ihrs wisset!"},
      {s: "Evangelist", t: "Sie gingen hin und verwahreten das Grab mit Hütern und versiegelten den Stein."}
    ],
    english: [
      {s: "Evangelist", t: "And Joseph took the body, and wrapped it in a pure shroud, and laid it in his own new tomb, which he had carved out of a single rock, and rolled a large stone before the opening of the tomb and went away. But Mary Magdalene and the other Marys were there, and they sat opposite the tomb. On the next day, that followed after the Sabbath day, the high priests and Pharisees came all together to Pilate and said:"},
      {s: "Chorus I & II", t: "Lord, we have remembered that this deceiver said, when he was still alive: \"I will rise again after three days.\" Therefore order that the tomb be guarded until the third day, so that his disciples do not come and steal him, and say to the people, \"he has arisen from the dead,\" and the newest fraud would be worse than the first one!"},
      {s: "Evangelist", t: "Pilate said to them:"},
      {s: "Pilate", t: "You have guards there; go and guard it as you see fit!"},
      {s: "Evangelist", t: "They went forth and protected the tomb with guards and put a seal on the stone."}
    ]
  },
  {
    number: 67, disc: 3, discTrack: 15, part: 2,
    type: "Recitative",
    titleDe: "Nun ist der Herr zur Ruh gebracht",
    titleEn: "Now the Lord is laid to rest",
    voicing: "Soprano, Alto, Tenor, Bass, Chorus II",
    duration: 1.84,
    german: [
      {s: "Soloists", t: "Nun ist der Herr zur Ruh gebracht."},
      {s: "Chorus II", t: "Mein Jesu, gute Nacht!"},
      {s: "Soloists", t: "Die Müh ist aus, die unsre Sünden ihm gemacht."},
      {s: "Chorus II", t: "Mein Jesu, gute Nacht!"},
      {s: "Soloists", t: "O selige Gebeine,\nSeht, wie ich euch mit Buß und Reu beweine,\nDaß euch mein Fall in solche Not gebracht!"},
      {s: "Chorus II", t: "Mein Jesu, gute Nacht!"},
      {s: "Soloists", t: "Habt lebenslang vor euer Leiden tausend Dank,\nDaß ihr mein Seelenheil so wert geacht'."},
      {s: "Chorus II", t: "Mein Jesu, gute Nacht!"}
    ],
    english: [
      {s: "Soloists", t: "Now the Lord is brought to rest."},
      {s: "Chorus II", t: "My Jesus, good night!"},
      {s: "Soloists", t: "The weariness is over, that our sins have given him."},
      {s: "Chorus II", t: "My Jesus, good night!"},
      {s: "Soloists", t: "O blessed bones,\nsee, how I weep over you with repentance and regret,\nsince my fall has brought such anguish upon you!"},
      {s: "Chorus II", t: "My Jesus, good night!"},
      {s: "Soloists", t: "Lifelong, thousand thanks to you for your suffering,\nsince you held my soul's salvation so dear."},
      {s: "Chorus II", t: "My Jesus, good night!"}
    ]
  },
  {
    number: 68, disc: 3, discTrack: 16, part: 2,
    type: "Chorus",
    titleDe: "Wir setzen uns mit Tränen nieder",
    titleEn: "We sit down in tears",
    voicing: "Chorus I & II",
    duration: 5.31,
    german: [
      {s: "Chorus I & II", t: "Wir setzen uns mit Tränen nieder\nUnd rufen dir im Grabe zu:\nRuhe sanfte, sanfte ruh!\nRuht, ihr ausgesognen Glieder!\n– Ruhet sanfte, ruhet wohl. –\nEuer Grab und Leichenstein\nSoll den ängstlichen Gewissen\nEin bequemes Ruhekissen\nUnd der Seelen Ruhstatt sein.\n– Ruhet sanfte, sanfte ruht! –\nHöchst vergnügt\nSchlummern da die Augen ein."}
    ],
    english: [
      {s: "Chorus I & II", t: "We sit down with tears\nand call to you in the grave:\nrest gently, gently rest!\nRest, you exhausted limbs!\n– Rest gently, rest well. –\nYour grave and headstone\nshall, for the anxious conscience,\nbe a comfortable pillow\nand the resting place for the soul.\n– rest gently, gently rest! –\nHighly contented,\nthere the eyes fall asleep."}
    ]
  }
];

// ======================== DAY SEGMENTS ========================

const daySegments = [
  { day: 1,  movements: [1],              title: "Opening: Come, Ye Daughters" },
  { day: 2,  movements: [2, 3],           title: "The Plot Against Jesus" },
  { day: 3,  movements: [4, 5, 6],        title: "The Anointing at Bethany" },
  { day: 4,  movements: [7, 8],           title: "Grief and Repentance" },
  { day: 5,  movements: [9, 10],          title: "Judas's Betrayal" },
  { day: 6,  movements: [11, 12],         title: "The Last Supper Begins" },
  { day: 7,  movements: [13, 14, 15],     title: "The Institution of Communion" },
  { day: 8,  movements: [16, 17],         title: "The Mount of Olives" },
  { day: 9,  movements: [18, 19],         title: "Gethsemane" },
  { day: 10, movements: [20, 21],         title: "Watching with Jesus" },
  { day: 11, movements: [22, 23],         title: "Thy Will Be Done" },
  { day: 12, movements: [24, 25],         title: "The Betrayal and Arrest" },
  { day: 13, movements: [26, 27],         title: "Jesus Is Taken" },
  { day: 14, movements: [28, 29],         title: "Before the High Priest" },
  { day: 15, movements: [30, 31],         title: "The Verdict of the Council" },
  { day: 16, movements: [32, 33, 34],     title: "Mocking and the Chorale" },
  { day: 17, movements: [35, 36],         title: "Peter's Denial" },
  { day: 18, movements: [37, 38],         title: "Have Mercy, My God" },
  { day: 19, movements: [39, 40],         title: "Remorse and Morning Counsel" },
  { day: 20, movements: [41, 42],         title: "Judas's End and Before Pilate" },
  { day: 21, movements: [43, 44],         title: "Commit Thy Way / Barabbas" },
  { day: 22, movements: [45, 46, 47],     title: "Barabbas and Crucify Him" },
  { day: 23, movements: [48, 49],         title: "He Has Done Good to Us All" },
  { day: 24, movements: [50, 51],         title: "Out of Love" },
  { day: 25, movements: [52, 53],         title: "The Scourging" },
  { day: 26, movements: [54, 55],         title: "Tears of Sorrow" },
  { day: 27, movements: [56, 57],         title: "The Crown of Thorns" },
  { day: 28, movements: [58, 59],         title: "Come, Sweet Cross" },
  { day: 29, movements: [60],             title: "Golgotha" },
  { day: 30, movements: [61, 62],         title: "The Mocking at the Cross" },
  { day: 31, movements: [63, 64],         title: "Ah, Golgotha!" },
  { day: 32, movements: [65],             title: "The Death of Jesus" },
  { day: 33, movements: [66, 67],         title: "The Veil Is Rent" },
  { day: 34, movements: [68],             title: "We Sit Down in Tears" },
  // Days 35-40 revisit key themes for meditation
  { day: 35, movements: [1],              title: "Reflection: Come, Ye Daughters" },
  { day: 36, movements: [29],             title: "Reflection: O Man, Bewail" },
  { day: 37, movements: [41],             title: "Reflection: Have Mercy, My God" },
  { day: 38, movements: [53],             title: "Reflection: Out of Love" },
  { day: 39, movements: [65],             title: "Reflection: When I One Day Must Depart" },
  { day: 40, movements: [68],             title: "Reflection: We Sit Down in Tears" }
];

// ======================== HELPERS ========================

function getMovementByNumber(num) {
  return movements.find(m => m.number === num);
}

function getMovementsForDay(day) {
  const segment = daySegments.find(s => s.day === day);
  if (!segment) return [];
  return segment.movements.map(num => getMovementByNumber(num)).filter(Boolean);
}

// Apple Music track IDs for each of the 68 sections (Gardiner recording)
const APPLE_MUSIC_TRACK_IDS = {
  1: '1452138614',  2: '1452138624',  3: '1452138840',  4: '1452138848',
  5: '1452138861',  6: '1452139084',  7: '1452139166',  8: '1452139194',
  9: '1452139298', 10: '1452139411', 11: '1452139528', 12: '1452139552',
 13: '1452139698', 14: '1452139777', 15: '1452139870', 16: '1452139947',
 17: '1452139966', 18: '1452140109', 19: '1452140220', 20: '1452140243',
 21: '1452140386', 22: '1452140500', 23: '1452140551', 24: '1452140571',
 25: '1452140737', 26: '1452140754', 27: '1452140917', 28: '1452140929',
 29: '1452141122', 30: '1452141135', 31: '1452141143', 32: '1452141421',
 33: '1452141429', 34: '1452141435', 35: '1452141442', 36: '1452141808',
 37: '1452141818', 38: '1452141826', 39: '1452141831', 40: '1452142169',
 41: '1452142175', 42: '1452142181', 43: '1452142185', 44: '1452142190',
 45: '1452142194', 46: '1452142620', 47: '1452142628', 48: '1452142635',
 49: '1452142645', 50: '1452143045', 51: '1452143062', 52: '1452143161',
 53: '1452143172', 54: '1452143184', 55: '1452143498', 56: '1452143507',
 57: '1452143515', 58: '1452143732', 59: '1452143745', 60: '1452143967',
 61: '1452143978', 62: '1452143989', 63: '1452144209', 64: '1452144220',
 65: '1452144390', 66: '1452144406', 67: '1452144572', 68: '1452144588'
};

// Spotify track IDs for each of the 68 sections (Gardiner recording)
const SPOTIFY_ALBUM_ID = '0HLXs2zVPKuRwaOkAVGqow';
const SPOTIFY_TRACK_IDS = {
  1: '6cGC7PGVDENo8QUgI87Dmy',  2: '3ZK8WvuZJwZrMeIC1ILnY6',
  3: '6Fe4odj5Tns2HDrSZ2E1FL',  4: '1vWXKN6cKaBVny9bWPL5vD',
  5: '4QSPp3Fqyarxv4bJR1qTYo',  6: '3mjWCwDa3cQfqfZ4Isj7FI',
  7: '76AcN1lIxaEyrla4iYCam0',  8: '08lgJgHnJGHzROjnK29OHs',
  9: '4EWs9Pt0hhhMnHX8LXmnkL', 10: '361RlYLbt2AgSXHLb86amB',
 11: '6K3fg6J8lGbKoxJpbJvhk9', 12: '6QSf4ap5mJi5ZUKqZPtEoR',
 13: '62yEkktGzX4EO2rOrUUc6F', 14: '01gwKLye5RICt1neW9BwjF',
 15: '2xFKgWQ9v0XCIOVOzLxZ70', 16: '0RKstoV2Ey3TidiIwYnoX3',
 17: '12W43UDIl9y5kUCBnIZqcY', 18: '3LP9oh8vnZrPkFWuSeKK6N',
 19: '3f5jnc59Ml1ELNcYTRrNxQ', 20: '6q7KX5RKbHnEonTiQu9huh',
 21: '7voQ6wcjBCqD4WMrbHWEJb', 22: '5AMQcZmfPxIOMokiEyQTG1',
 23: '2Zcx15Afc49UB0Z49yQLCg', 24: '3ZVoAYLTjyt1yTaEdAlleF',
 25: '23RU6aDbyChWSJKlsz2fdj', 26: '5Rlmy1mF9SSRmmXcdUDt65',
 27: '3QwyYhAky3FOPz6G3wJczE', 28: '1INh5HsV1l5OLl6gBAn9El',
 29: '2MV5v1pY1naBdm6xO3ACLN', 30: '3x1aV7lS3hh5J0d5Mm3Ad0',
 31: '2emYVK27ywItwzCG6PDJeY', 32: '3eInvdRw7GUAcOQOnqJkPU',
 33: '6tTPIq8wzDQ3IDR5lRNIYR', 34: '7qpuqHKKogi3uXvPH5tTPe',
 35: '6ofxoQZGPIqhZ5PiTdl1IE', 36: '6ePA4DYjsvcpgJWePEpKml',
 37: '5UA60Udduc4YuPwX4slqS6', 38: '3oPZHUJ5qEYzJTo7exn42K',
 39: '1egsdLgnk37TMTIugIMo7S', 40: '4L9aDTrJ16TbP6bdueL4FC',
 41: '64zmR2Tn0nw2HJ9mxmqwwR', 42: '77BqBgy72BXTN7swI4c7Ar',
 43: '0UUvmA8MkkF8oSs3NxCPjV', 44: '30zMtCsilFlndzXOkRHfbN',
 45: '5DvQKYEFzZM5ujNgday3pK', 46: '6M1sNc8V2am9xptkuz9YeD',
 47: '2pCjkOMH3HY4tnGiOvGXaX', 48: '1JJZXM4iXOUuZoCfdwBPi0',
 49: '61Z2UxoEUiCeMllTy2dLwT', 50: '65xOWOIuAwivAUrmuoSm5m',
 51: '7AnvVUAqHIq4reeayy3WMv', 52: '20f6xGi3iZcepAI67hRbL4',
 53: '3zWS11bxTI0Xzosbrv29Dm', 54: '2402997smQRgN8VRKtuzgv',
 55: '1UMWgMJETDGjrMY0QpXXRh', 56: '3l8d7JPaC5btRp8jO8PecO',
 57: '7ppN9h6RYTfpWWqfDP5Ax1', 58: '5cbbbjKd0LWJobRx732gbx',
 59: '0PUpkHLg8ElGnGocxvyfWT', 60: '0LiHfnVwEbsG6TwEFrIoos',
 61: '4341zssCrX2Q5JtRBi8cxb', 62: '2SqmoIEXtLJk7XCJpN88bE',
 63: '6tg3M60DrpitTEZs1VVruE', 64: '7irNxGjRvUSF8CPUPruheG',
 65: '10m6HNE5ISZm0KQZ2ftswm', 66: '1QvWXyigUG3A0BMz4eOaf8',
 67: '726jwp3feay7rdLmKzKQb6', 68: '2Cj3gecvDWNoaNr3FuQRnH'
};

function getAppleMusicEmbedUrl(movement) {
  const trackId = APPLE_MUSIC_TRACK_IDS[movement.number];
  if (trackId) return `https://embed.music.apple.com/album/bach-st-matthew-passion-bwv-244/1452138402?i=${trackId}`;
  return `https://embed.music.apple.com/album/bach-st-matthew-passion-bwv-244/1452138402`;
}

function getSpotifyEmbedUrl(movement) {
  const trackId = SPOTIFY_TRACK_IDS[movement.number];
  if (trackId) return `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`;
  return `https://open.spotify.com/embed/album/${SPOTIFY_ALBUM_ID}?utm_source=generator&theme=0`;
}

function formatDuration(minutes) {
  const mins = Math.floor(minutes);
  const secs = Math.round((minutes - mins) * 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}
