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
    duration: 8.0,
    german: "Kommt, ihr Töchter, helft mir klagen,\nSehet \u2013 Wen? \u2013 den Bräutigam,\nSeht ihn \u2013 Wie? \u2013 als wie ein Lamm!\nSehet \u2013 Was? \u2013 seht die Geduld,\nSeht \u2013 Wohin? \u2013 auf unsre Schuld;\nSehet ihn aus Lieb und Huld\nHolz zum Kreuze selber tragen!\n\nO Lamm Gottes, unschuldig\nAm Stamm des Kreuzes geschlachtet,\nAllzeit erfund\u2019n geduldig,\nWiewohl du warest verachtet.\nAll Sünd hast du getragen,\nSonst müßten wir verzagen.\nErbarm dich unser, o Jesu!",
    english: "Come, ye daughters, help me lament,\nBehold \u2013 Whom? \u2013 the Bridegroom,\nSee Him \u2013 How? \u2013 as like a Lamb!\nBehold \u2013 What? \u2013 behold His patience,\nLook \u2013 Where? \u2013 upon our guilt;\nSee Him, out of love and grace,\nBearing the wood of the cross Himself!\n\nO Lamb of God, innocent,\nSlaughtered on the trunk of the cross,\nAlways found patient,\nHowever much Thou wert despised.\nAll sin hast Thou borne,\nElse we must needs despair.\nHave mercy on us, O Jesus!"
  },
  {
    number: 2, disc: 1, discTrack: 2, part: 1,
    type: "Recitative",
    titleDe: "Da Jesus diese Rede vollendet hatte",
    titleEn: "When Jesus had finished all these sayings",
    voicing: "Evangelist (Tenor), Jesus (Bass)",
    duration: 1.0,
    german: "Da Jesus diese Rede vollendet hatte, sprach er zu seinen Jüngern:\nIhr wisset, daß nach zweien Tagen Ostern wird, und des Menschen Sohn wird überantwortet werden, daß er gekreuziget werde.",
    english: "When Jesus had finished all these sayings, He said unto His disciples:\nYe know that after two days is the Passover, and the Son of Man shall be betrayed to be crucified."
  },
  {
    number: 3, disc: 1, discTrack: 3, part: 1,
    type: "Chorale",
    titleDe: "Herzliebster Jesu, was hast du verbrochen",
    titleEn: "Beloved Jesus, what law hast Thou broken",
    voicing: "Chorus I & II",
    duration: 1.0,
    german: "Herzliebster Jesu, was hast du verbrochen,\nDaß man ein solch scharf Urteil hat gesprochen?\nWas ist die Schuld, in was für Missetaten\nBist du geraten?",
    english: "Beloved Jesus, what law hast Thou broken,\nThat such a sharp sentence has been spoken?\nWhat is the guilt, in what kind of misdeeds\nHast Thou been caught?"
  },
  {
    number: 4, disc: 1, discTrack: 4, part: 1,
    type: "Recitative",
    titleDe: "Da versammleten sich die Hohenpriester",
    titleEn: "Then assembled together the chief priests",
    voicing: "Evangelist (Tenor), Jesus (Bass), Chorus I & II",
    duration: 5.0,
    german: "Da versammleten sich die Hohenpriester und Schriftgelehrten und die Ältesten im Volk in den Palast des Hohenpriesters, der da hieß Kaiphas, und hielten Rat, wie sie Jesum mit Listen griffen und töteten. Sie sprachen aber: Ja nicht auf das Fest, auf daß nicht ein Aufruhr werde im Volk.\nDa nun Jesus war zu Bethanien, im Hause Simonis des Aussätzigen, trat zu ihm ein Weib, die hatte ein Glas mit köstlichem Wasser und goß es auf sein Haupt, da er zu Tische saß. Da das seine Jünger sahen, wurden sie unwillig und sprachen: Wozu dienet dieser Unrat? Dieses Wasser hätte mögen teuer verkauft und den Armen gegeben werden.\nDa das Jesus merkete, sprach er zu ihnen: Was bekümmert ihr das Weib? Sie hat ein gut Werk an mir getan! Ihr habet allezeit Arme bei euch, mich aber habt ihr nicht allezeit. Daß sie dies Wasser hat auf meinen Leib gegossen, hat sie getan, daß man mich begraben wird. Wahrlich, ich sage euch: Wo dies Evangelium geprediget wird in der ganzen Welt, da wird man auch sagen zu ihrem Gedächtnis, was sie getan hat.",
    english: "Then assembled together the chief priests and the scribes and the elders of the people, unto the palace of the high priest, who was called Caiaphas, and held counsel that they might take Jesus by subtlety and kill Him. But they said: Not upon the feast day, lest there be an uproar among the people.\nNow when Jesus was in Bethany, in the house of Simon the leper, there came unto Him a woman having an alabaster box of very precious ointment, and poured it on His head, as He sat at meat. But when His disciples saw it, they had indignation, saying: To what purpose is this waste? For this ointment might have been sold for much, and given to the poor.\nWhen Jesus understood it, He said unto them: Why trouble ye the woman? For she hath wrought a good work upon Me! For ye have the poor always with you; but Me ye have not always. For in that she hath poured this ointment on My body, she did it for My burial. Verily I say unto you, wheresoever this Gospel shall be preached in the whole world, there shall also this, that this woman hath done, be told for a memorial of her."
  },
  {
    number: 5, disc: 1, discTrack: 5, part: 1,
    type: "Recitative",
    titleDe: "Du lieber Heiland du",
    titleEn: "Thou blessed Savior, Thou",
    voicing: "Alto",
    duration: 1.5,
    german: "Du lieber Heiland du,\nWenn deine Jünger töricht streiten,\nDaß dieses fromme Weib\nMit Salben deinen Leib\nZum Grabe bereiten,\nSo lasse mir inzwischen zu,\nVon meiner Augen Tränenflüssen\nEin Wasser auf dein Haupt zu gießen!",
    english: "Thou blessed Savior, Thou,\nWhen Thy disciples foolishly argue\nThat this devout woman\nWith ointment Thy body\nFor burial would prepare,\nThen meanwhile let me,\nFrom my eyes' flood of tears,\nPour a water upon Thy head!"
  },
  {
    number: 6, disc: 1, discTrack: 6, part: 1,
    type: "Aria",
    titleDe: "Buß und Reu",
    titleEn: "Grief and pain",
    voicing: "Alto",
    duration: 5.5,
    german: "Buß und Reu\nKnirscht das Sündenherz entzwei,\nDaß die Tropfen meiner Zähren\nAngenehme Spezerei,\nTreuer Jesu, dir gebären.",
    english: "Grief and pain\nRend the sinful heart in two,\nThat the drops of my weeping\nA pleasing ointment,\nFaithful Jesus, for Thee may bear."
  },
  {
    number: 7, disc: 1, discTrack: 7, part: 1,
    type: "Recitative",
    titleDe: "Da ging hin der Zwölfen einer",
    titleEn: "Then one of the twelve, called Judas Iscariot",
    voicing: "Evangelist (Tenor), Judas (Bass)",
    duration: 1.0,
    german: "Da ging hin der Zwölfen einer, mit Namen Judas Ischarioth, zu den Hohenpriestern und sprach: Was wollt ihr mir geben? Ich will ihn euch verraten. Und sie boten ihm dreißig Silberlinge. Und von dem an suchte er Gelegenheit, daß er ihn verriete.",
    english: "Then one of the twelve, called Judas Iscariot, went unto the chief priests and said unto them: What will ye give me? And I will deliver Him unto you. And they covenanted with him for thirty pieces of silver. And from that time he sought opportunity to betray Him."
  },
  {
    number: 8, disc: 1, discTrack: 8, part: 1,
    type: "Aria",
    titleDe: "Blute nur, du liebes Herz!",
    titleEn: "Bleed and break, thou loving heart!",
    voicing: "Soprano",
    duration: 4.5,
    german: "Blute nur, du liebes Herz!\nAch, ein Kind, das du erzogen,\nDas an deiner Brust gesogen,\nDroht den Pfleger zu ermorden,\nDenn es ist zur Schlange worden.",
    english: "Bleed and break, thou loving heart!\nAh, a child, that thou hast raised,\nThat at thy breast hath nursed,\nThreatens to murder its guardian,\nFor it has become a serpent."
  },
  {
    number: 9, disc: 1, discTrack: 9, part: 1,
    type: "Recitative",
    titleDe: "Aber am ersten Tage der süßen Brot",
    titleEn: "Now on the first day of Unleavened Bread",
    voicing: "Evangelist (Tenor), Jesus (Bass), Chorus I & II",
    duration: 3.0,
    german: "Aber am ersten Tage der süßen Brot traten die Jünger zu Jesu und sprachen zu ihm: Wo willst du, daß wir dir bereiten, das Osterlamm zu essen? Er sprach: Gehet hin in die Stadt zu einem und sprecht zu ihm: Der Meister läßt dir sagen: Meine Zeit ist hier, ich will bei dir die Ostern halten mit meinen Jüngern.\nUnd die Jünger täten, wie ihnen Jesus befohlen hatte, und bereiteten das Osterlamm.\nUnd am Abend setzte er sich zu Tische mit den Zwölfen. Und da sie aßen, sprach er: Wahrlich, ich sage euch: Einer unter euch wird mich verraten.\nUnd sie wurden sehr betrübt und huben an, ein jeglicher unter ihnen, und sagten zu ihm: Herr, bin ich's?",
    english: "Now on the first day of the Feast of Unleavened Bread the disciples came to Jesus, saying unto Him: Where wilt Thou that we prepare for Thee to eat the Passover? He said: Go into the city to such a man, and say unto him: The Master saith, My time is at hand; I will keep the Passover at thy house with My disciples.\nAnd the disciples did as Jesus had appointed them; and they made ready the Passover.\nNow when even was come, He sat down with the twelve. And as they did eat, He said: Verily I say unto you, that one of you shall betray Me.\nAnd they were exceeding sorrowful, and began every one of them to say unto Him: Lord, is it I?"
  },
  {
    number: 10, disc: 1, discTrack: 10, part: 1,
    type: "Chorale",
    titleDe: "Ich bin's, ich sollte büßen",
    titleEn: "'Tis I whose sin doth bind Thee",
    voicing: "Chorus I & II",
    duration: 1.0,
    german: "Ich bin's, ich sollte büßen,\nAn Händen und an Füßen\nGebunden in der Höll.\nDie Geißeln und die Banden\nUnd was du ausgestanden,\nDas hat verdienet meine Seel.",
    english: "'Tis I whose sin doth bind Thee,\nIn hands and feet they wind Thee,\nWith bonds in hell below.\nThe scourging and the binding,\nAnd all that Thou art finding,\n'Tis I who should such judgment know."
  },
  {
    number: 11, disc: 1, discTrack: 11, part: 1,
    type: "Recitative",
    titleDe: "Er antwortete und sprach",
    titleEn: "He answered and said",
    voicing: "Evangelist (Tenor), Jesus (Bass), Judas (Bass)",
    duration: 2.5,
    german: "Er antwortete und sprach: Der mit der Hand mit mir in die Schüssel tauchet, der wird mich verraten. Des Menschen Sohn gehet zwar dahin, wie von ihm geschrieben stehet; doch wehe dem Menschen, durch welchen des Menschen Sohn verraten wird! Es wäre ihm besser, daß derselbige Mensch noch nie geboren wäre. Da antwortete Judas, der ihn verriet, und sprach: Bin ich's, Rabbi? Er sprach zu ihm: Du sagest's.\nDa sie aber aßen, nahm Jesus das Brot, dankete und brach's und gab's den Jüngern und sprach: Nehmet, esset, das ist mein Leib. Und er nahm den Kelch und dankete, gab ihnen den und sprach: Trinket alle daraus; das ist mein Blut des neuen Testaments, welches vergossen wird für viele zur Vergebung der Sünden. Ich sage euch: Ich werde von nun an nicht mehr von diesem Gewächs des Weinstocks trinken bis an den Tag, da ich's neu trinken werde mit euch in meines Vaters Reich.",
    english: "He answered and said: He that dippeth his hand with Me in the dish, the same shall betray Me. The Son of Man goeth as it is written of Him: but woe unto that man by whom the Son of Man is betrayed! It had been good for that man if he had not been born. Then Judas, which betrayed Him, answered and said: Master, is it I? He said unto him: Thou hast said.\nAnd as they were eating, Jesus took bread, and blessed it, and brake it, and gave it to the disciples, and said: Take, eat; this is My body. And He took the cup, and gave thanks, and gave it to them, saying: Drink ye all of it; for this is My blood of the new testament, which is shed for many for the remission of sins. But I say unto you, I will not drink henceforth of this fruit of the vine, until that day when I drink it new with you in My Father's kingdom."
  },
  {
    number: 12, disc: 1, discTrack: 12, part: 1,
    type: "Recitative",
    titleDe: "Wiewohl mein Herz in Tränen schwimmt",
    titleEn: "Though my heart swims in tears",
    voicing: "Soprano",
    duration: 1.0,
    german: "Wiewohl mein Herz in Tränen schwimmt,\nDaß Jesus von mir Abschied nimmt,\nSo macht mich doch sein Testament erfreut:\nSein Fleisch und Blut, o Kostbarkeit,\nVermacht er mir in meine Hände.\nWie er es auf der Welt mit denen Seinen\nNicht böse können meinen,\nSo liebt er sie bis an das Ende.",
    english: "Though my heart swims in tears\nThat Jesus takes His leave of me,\nYet His testament makes me glad:\nHis flesh and blood, O precious gift,\nHe bequeaths into my hands.\nAs He in the world with His own\nCould never mean them ill,\nSo He loves them unto the end."
  },
  {
    number: 13, disc: 1, discTrack: 13, part: 1,
    type: "Aria",
    titleDe: "Ich will dir mein Herze schenken",
    titleEn: "I will give Thee my heart",
    voicing: "Soprano",
    duration: 4.0,
    german: "Ich will dir mein Herze schenken,\nSenke dich, mein Heil, hinein!\nIch will mich in dir versenken;\nIst dir gleich die Welt zu klein,\nEi, so sollst du mir allein\nMehr als Welt und Himmel sein.",
    english: "I will give Thee my heart,\nSink Thyself, my Savior, therein!\nI will immerse myself in Thee;\nThough the world is too small for Thee,\nAh, yet shalt Thou be to me alone\nMore than world and heaven."
  },
  {
    number: 14, disc: 1, discTrack: 14, part: 1,
    type: "Recitative",
    titleDe: "Und da sie den Lobgesang gesprochen hatten",
    titleEn: "And when they had sung a hymn",
    voicing: "Evangelist (Tenor), Jesus (Bass)",
    duration: 2.0,
    german: "Und da sie den Lobgesang gesprochen hatten, gingen sie hinaus an den Ölberg. Da sprach Jesus zu ihnen: In dieser Nacht werdet ihr euch alle ärgern an mir. Denn es stehet geschrieben: Ich werde den Hirten schlagen, und die Schafe der Herde werden sich zerstreuen. Wenn ich aber auferstehe, will ich vor euch hingehen in Galiläam.",
    english: "And when they had sung a hymn, they went out into the Mount of Olives. Then saith Jesus unto them: All ye shall be offended because of Me this night. For it is written: I will smite the shepherd, and the sheep of the flock shall be scattered abroad. But after I am risen again, I will go before you into Galilee."
  },
  {
    number: 15, disc: 1, discTrack: 15, part: 1,
    type: "Chorale",
    titleDe: "Erkenne mich, mein Hüter",
    titleEn: "Receive me, my Redeemer",
    voicing: "Chorus I & II",
    duration: 1.0,
    german: "Erkenne mich, mein Hüter,\nMein Hirte, nimm mich an!\nVon dir, Quell aller Güter,\nIst mir viel Guts getan.\nDein Mund hat mich gelabet\nMit Milch und süßer Kost,\nDein Geist hat mich begabet\nMit mancher Himmelslust.",
    english: "Receive me, my Redeemer,\nMy Shepherd, make me Thine!\nOf every good the Fountain,\nThou art the Spring of mine.\nThy lips have oft refreshed me\nWith milk and sweetest fare,\nThy Spirit oft hath blessed me\nWith many a heavenly care."
  },
  {
    number: 16, disc: 1, discTrack: 16, part: 1,
    type: "Recitative",
    titleDe: "Petrus aber antwortete und sprach zu ihm",
    titleEn: "Peter answered and said unto Him",
    voicing: "Evangelist (Tenor), Jesus (Bass), Peter (Bass)",
    duration: 1.5,
    german: "Petrus aber antwortete und sprach zu ihm: Wenn sie auch alle sich an dir ärgerten, so will ich doch mich nimmermehr ärgern. Jesus sprach zu ihm: Wahrlich, ich sage dir: In dieser Nacht, ehe der Hahn krähet, wirst du mich dreimal verleugnen. Petrus sprach zu ihm: Und wenn ich mit dir sterben müßte, so will ich dich nicht verleugnen. Desgleichen sagten auch alle Jünger.",
    english: "Peter answered and said unto Him: Though all men shall be offended because of Thee, yet will I never be offended. Jesus said unto him: Verily I say unto thee, that this night, before the cock crow, thou shalt deny Me thrice. Peter said unto Him: Though I should die with Thee, yet will I not deny Thee. Likewise also said all the disciples."
  },
  {
    number: 17, disc: 1, discTrack: 17, part: 1,
    type: "Chorale",
    titleDe: "Ich will hier bei dir stehen",
    titleEn: "I would beside Thee stand",
    voicing: "Chorus I & II",
    duration: 1.0,
    german: "Ich will hier bei dir stehen;\nVerachte mich doch nicht!\nVon dir will ich nicht gehen,\nWenn dir dein Herze bricht.\nWenn dein Herz wird erblassen\nIm letzten Todesstoß,\nAlsdenn will ich dich fassen\nIn meinen Arm und Schoß.",
    english: "I would beside Thee stand;\nDo not despise me then!\nFrom Thee I will not part,\nWhen Thy heart breaks at last.\nWhen Thy heart grows pale\nIn the last thrust of death,\nThen will I hold Thee fast\nIn my arm and my lap."
  },
  {
    number: 18, disc: 1, discTrack: 18, part: 1,
    type: "Recitative",
    titleDe: "Da kam Jesus mit ihnen zu einem Hofe",
    titleEn: "Then cometh Jesus with them unto a place",
    voicing: "Evangelist (Tenor), Jesus (Bass)",
    duration: 2.0,
    german: "Da kam Jesus mit ihnen zu einem Hofe, der hieß Gethsemane, und sprach zu seinen Jüngern: Setzet euch hie, bis daß ich dort hingehe und bete. Und nahm zu sich Petrum und die zween Söhne Zebedäi und fing an zu trauern und zu zagen. Da sprach Jesus zu ihnen: Meine Seele ist betrübt bis an den Tod, bleibet hie und wachet mit mir!",
    english: "Then cometh Jesus with them unto a place called Gethsemane, and saith unto the disciples: Sit ye here, while I go and pray yonder. And He took with Him Peter and the two sons of Zebedee, and began to be sorrowful and very heavy. Then saith Jesus unto them: My soul is exceeding sorrowful, even unto death: tarry ye here, and watch with Me!"
  },
  {
    number: 19, disc: 1, discTrack: 19, part: 1,
    type: "Recitative",
    titleDe: "O Schmerz! Hier zittert das gequälte Herz",
    titleEn: "O grief! Here trembles the tormented heart",
    voicing: "Tenor, Chorus II",
    duration: 2.5,
    german: "O Schmerz! Hier zittert das gequälte Herz;\nWie sinkt es hin, wie bleicht sein Angesicht!\nDer Richter führt ihn vor Gericht.\nDa ist kein Trost, kein Helfer nicht.\nEr leidet alle Höllenqualen,\nEr soll vor fremden Raub bezahlen.\nAch, könnte meine Liebe dir,\nMein Heil, dein Zittern und dein Zagen\nVermindern oder helfen tragen,\nWie gerne blieb ich hier!",
    english: "O grief! Here trembles the tormented heart;\nHow it sinks down, how pale his countenance!\nThe Judge leads Him before the court.\nThere is no comfort, no helper there.\nHe suffers all the pains of hell,\nHe must for others' robbery pay.\nAh, could my love for Thee,\nMy Savior, Thy trembling and Thy quaking\nDiminish or help to bear,\nHow gladly would I stay here!"
  },
  {
    number: 20, disc: 1, discTrack: 20, part: 1,
    type: "Aria",
    titleDe: "Ich will bei meinem Jesu wachen",
    titleEn: "I would beside my Lord be watching",
    voicing: "Tenor, Chorus II",
    duration: 6.0,
    german: "Ich will bei meinem Jesu wachen.\nSo schlafen unsre Sünden ein.\nMeinen Tod büßet seine Seelennot;\nSein Trauren machet mich voll Freuden.\nDrum muß uns sein verdienstlich Leiden\nRecht bitter und doch süße sein.",
    english: "I would beside my Lord be watching.\nSo shall our sins fall asleep.\nMy death is atoned by His soul's distress;\nHis sorrow fills me full of gladness.\nTherefore must His meritorious suffering\nBe truly bitter and yet sweet to us."
  },
  {
    number: 21, disc: 1, discTrack: 21, part: 1,
    type: "Recitative",
    titleDe: "Und ging hin ein wenig",
    titleEn: "And He went a little further",
    voicing: "Evangelist (Tenor), Jesus (Bass)",
    duration: 2.0,
    german: "Und ging hin ein wenig, fiel nieder auf sein Angesicht und betete und sprach: Mein Vater, ist's möglich, so gehe dieser Kelch von mir; doch nicht wie ich will, sondern wie du willst.",
    english: "And He went a little further, and fell on His face, and prayed, saying: O My Father, if it be possible, let this cup pass from Me: nevertheless not as I will, but as Thou wilt."
  },
  {
    number: 22, disc: 1, discTrack: 22, part: 1,
    type: "Recitative",
    titleDe: "Der Heiland fällt vor seinem Vater nieder",
    titleEn: "The Savior falls before His Father down",
    voicing: "Bass",
    duration: 1.0,
    german: "Der Heiland fällt vor seinem Vater nieder;\nDadurch erhebt er mich und alle\nVon unserm Falle\nHinauf zu Gottes Gnade wieder.",
    english: "The Savior falls before His Father down;\nThereby He raises me and all\nFrom our fall\nUp to God's grace again."
  },
  {
    number: 23, disc: 1, discTrack: 23, part: 1,
    type: "Aria",
    titleDe: "Gerne will ich mich bequemen",
    titleEn: "Gladly will I submit myself",
    voicing: "Bass",
    duration: 3.5,
    german: "Gerne will ich mich bequemen,\nKreuz und Becher anzunehmen,\nTrink ich doch dem Heiland nach.\nDenn sein Mund,\nDer mit Milch und Honig fließet,\nHat den Grund\nUnd des Leidens herbe Schmach\nDurch den ersten Trunk versüßet.",
    english: "Gladly will I submit myself\nTo take up the cross and cup,\nFor I drink after my Savior.\nFor His mouth,\nThat flows with milk and honey,\nHas the ground\nAnd the bitter shame of suffering\nThrough the first draught made sweet."
  },
  {
    number: 24, disc: 1, discTrack: 24, part: 1,
    type: "Recitative",
    titleDe: "Und er kam zu seinen Jüngern",
    titleEn: "And He cometh unto the disciples",
    voicing: "Evangelist (Tenor), Jesus (Bass)",
    duration: 2.0,
    german: "Und er kam zu seinen Jüngern und fand sie schlafend und sprach zu ihnen: Könnet ihr denn nicht eine Stunde mit mir wachen? Wachet und betet, daß ihr nicht in Anfechtung fallet! Der Geist ist willig, aber das Fleisch ist schwach.\nZum andernmal ging er hin, betete und sprach: Mein Vater, ist's nicht möglich, daß dieser Kelch von mir gehe, ich trinke ihn denn, so geschehe dein Wille.",
    english: "And He cometh unto the disciples, and findeth them asleep, and saith unto them: What, could ye not watch with Me one hour? Watch and pray, that ye enter not into temptation: the spirit indeed is willing, but the flesh is weak.\nHe went away again the second time, and prayed, saying: O My Father, if this cup may not pass away from Me, except I drink it, Thy will be done."
  },
  {
    number: 25, disc: 1, discTrack: 25, part: 1,
    type: "Chorale",
    titleDe: "Was mein Gott will, das g'scheh allzeit",
    titleEn: "What my God wills, let that be done",
    voicing: "Chorus I & II",
    duration: 1.5,
    german: "Was mein Gott will, das g'scheh allzeit,\nSein Will, der ist der beste,\nZu helfen den'n er ist bereit,\nDie an ihn gläuben feste.\nEr hilft aus Not, der fromme Gott,\nUnd züchtiget mit Maßen.\nWer Gott vertraut, fest auf ihn baut,\nDen will er nicht verlassen.",
    english: "What my God wills, let that be done,\nHis will, it is the best,\nTo help those He is ready,\nWho in Him believe firmly.\nHe helps in need, the righteous God,\nAnd chastens with discretion.\nWho trusts in God, builds firm on Him,\nHim will He not forsake."
  },
  {
    number: 26, disc: 1, discTrack: 26, part: 1,
    type: "Recitative",
    titleDe: "Und er kam und fand sie aber schlafend",
    titleEn: "And He came and found them asleep again",
    voicing: "Evangelist (Tenor), Jesus (Bass), Judas (Bass)",
    duration: 3.5,
    german: "Und er kam und fand sie aber schlafend, und ihre Augen waren voll Schlafs. Und er ließ sie und ging abermal hin und betete zum drittenmal und redete dieselbigen Worte. Da kam er zu seinen Jüngern und sprach zu ihnen: Ach! wollt ihr nun schlafen und ruhen? Siehe, die Stunde ist hie, daß des Menschen Sohn in der Sünder Hände überantwortet wird. Stehet auf, lasset uns gehen; siehe, er ist da, der mich verrät.\nUnd als er noch redete, siehe, da kam Judas, der Zwölfen einer, und mit ihm eine große Schar mit Schwerten und mit Stangen von den Hohenpriestern und Ältesten des Volks. Und der Verräter hatte ihnen ein Zeichen gegeben und gesagt: Welchen ich küssen werde, der ist's, den greifet! Und alsbald trat er zu Jesu und sprach: Gegrüßet seist du, Rabbi! Und küssete ihn.\nJesus aber sprach zu ihm: Mein Freund, warum bist du kommen?\nDa traten sie hinzu und legten die Hände an Jesum und griffen ihn.",
    english: "And He came and found them asleep again, for their eyes were heavy. And He left them, and went away again, and prayed the third time, saying the same words. Then cometh He to His disciples, and saith unto them: Sleep on now, and take your rest! Behold, the hour is at hand, and the Son of Man is betrayed into the hands of sinners. Rise, let us be going: behold, he is at hand that doth betray Me.\nAnd while He yet spake, lo, Judas, one of the twelve, came, and with him a great multitude with swords and staves, from the chief priests and elders of the people. Now he that betrayed Him gave them a sign, saying: Whomsoever I shall kiss, that same is He: hold Him fast! And forthwith he came to Jesus, and said: Hail, Master! And kissed Him.\nAnd Jesus said unto him: Friend, wherefore art thou come?\nThen came they and laid hands on Jesus, and took Him."
  },
  {
    number: 27, disc: 1, discTrack: 27, part: 1,
    type: "Aria",
    titleDe: "So ist mein Jesus nun gefangen",
    titleEn: "So is my Jesus now taken",
    voicing: "Soprano, Alto, Chorus II",
    duration: 5.0,
    german: "So ist mein Jesus nun gefangen.\nLaßt ihn, haltet, bindet nicht!\nMond und Licht\nIst vor Schmerzen untergangen,\nWeil mein Jesus ist gefangen.\nLaßt ihn, haltet, bindet nicht!\n\nSind Blitze, sind Donner in Wolken verschwunden?\nEröffne den feurigen Abgrund, o Hölle,\nZertrümmre, verderbe, verschlinge, zerschelle\nMit plötzlicher Wut\nDen falschen Verräter, das mördrische Blut!",
    english: "So is my Jesus now taken.\nLet Him go, stop, bind Him not!\nMoon and light\nHave gone down in grief,\nBecause my Jesus is taken.\nLet Him go, stop, bind Him not!\n\nHave lightnings, has thunder vanished in the clouds?\nOpen up thy fiery abyss, O Hell,\nShatter, destroy, engulf, dash to pieces\nWith sudden fury\nThe false betrayer, the murderous blood!"
  },
  {
    number: 28, disc: 1, discTrack: 28, part: 1,
    type: "Recitative",
    titleDe: "Und siehe, einer aus denen, die mit Jesu waren",
    titleEn: "And behold, one of them which were with Jesus",
    voicing: "Evangelist (Tenor), Jesus (Bass)",
    duration: 3.0,
    german: "Und siehe, einer aus denen, die mit Jesu waren, reckete die Hand aus und schlug des Hohenpriesters Knecht und hieb ihm ein Ohr ab. Da sprach Jesus zu ihm: Stecke dein Schwert an seinen Ort; denn wer das Schwert nimmt, der soll durchs Schwert umkommen. Oder meinest du, daß ich nicht könnte meinen Vater bitten, daß er mir zuschicke mehr denn zwölf Legion Engel? Wie würde aber die Schrift erfüllet? Es muß also gehen.\nZu der Stund sprach Jesus zu den Scharen: Ihr seid ausgegangen als zu einem Mörder mit Schwerten und mit Stangen, mich zu fahen; bin ich doch täglich bei euch gesessen und habe gelehret im Tempel, und ihr habt mich nicht gegriffen. Aber das ist alles geschehen, daß erfüllet würden die Schriften der Propheten.\nDa verließen ihn alle Jünger und flohen.",
    english: "And, behold, one of them which were with Jesus stretched out his hand, and drew his sword, and struck a servant of the high priest, and smote off his ear. Then said Jesus unto him: Put up again thy sword into his place: for all they that take the sword shall perish with the sword. Thinkest thou that I cannot now pray to My Father, and He shall presently give Me more than twelve legions of angels? But how then shall the Scriptures be fulfilled, that thus it must be?\nIn that same hour said Jesus to the multitudes: Are ye come out as against a thief with swords and staves for to take Me? I sat daily with you teaching in the temple, and ye laid no hold on Me. But all this was done, that the Scriptures of the prophets might be fulfilled.\nThen all the disciples forsook Him, and fled."
  },
  {
    number: 29, disc: 1, discTrack: 29, part: 1,
    type: "Chorale",
    titleDe: "O Mensch, bewein dein Sünde groß",
    titleEn: "O man, bewail thy grievous sin",
    voicing: "Chorus I & II",
    duration: 6.0,
    german: "O Mensch, bewein dein Sünde groß,\nDarum Christus seins Vaters Schoß\nÄußert und kam auf Erden;\nVon einer Jungfrau rein und zart\nFür uns er hie geboren ward,\nEr wollt der Mittler werden.\nDen Toten er das Leben gab\nUnd legt dabei all Krankheit ab,\nBis sich die Zeit herdrange,\nDaß er für uns geopfert würd,\nTrüg unsrer Sünden schwere Bürd\nWohl an dem Kreuze lange.",
    english: "O man, bewail thy grievous sin,\nFor which Christ left His Father's bosom\nAnd came down to earth;\nOf a virgin pure and gentle\nHe was born here for us,\nHe would become the Mediator.\nHe gave life to the dead\nAnd laid aside all sickness,\nUntil the time drew near\nThat He should be sacrificed for us,\nBearing our sins' heavy burden\nLong upon the cross."
  },
  // ======================== DISC 2 — PART TWO ========================
  {
    number: 30, disc: 2, discTrack: 1, part: 2,
    type: "Aria",
    titleDe: "Ach, nun ist mein Jesus hin!",
    titleEn: "Alas, now is my Jesus gone!",
    voicing: "Alto, Chorus II",
    duration: 5.0,
    german: "Ach, nun ist mein Jesus hin!\nIst es möglich, kann ich schauen?\nAch, mein Lamm in Tigerklauen,\nAch, wo ist mein Jesus hin?\n\nWo ist dein Freund hingegangen,\nO du Schönste unter den Weibern?\nWo hat sich dein Freund hingewandt?\nSo wollen wir mit dir ihn suchen.",
    english: "Alas, now is my Jesus gone!\nIs it possible, can I see?\nAh, my Lamb in tiger's claws,\nAh, where is my Jesus gone?\n\nWhither is thy Beloved gone,\nO thou fairest among women?\nWhither hath thy Beloved turned?\nThen will we seek Him with thee."
  },
  {
    number: 31, disc: 2, discTrack: 2, part: 2,
    type: "Recitative",
    titleDe: "Die aber Jesum gegriffen hatten",
    titleEn: "And they that had laid hold on Jesus",
    voicing: "Evangelist (Tenor)",
    duration: 2.0,
    german: "Die aber Jesum gegriffen hatten, führeten ihn zu dem Hohenpriester Kaiphas, dahin die Schriftgelehrten und Ältesten sich versammlet hatten. Petrus aber folgete ihm nach von ferne bis in den Palast des Hohenpriesters und ging hinein und satzte sich bei die Knechte, auf daß er sähe, wo es hinaus wollte. Die Hohenpriester aber und Ältesten und der ganze Rat suchten falsch Zeugnis wider Jesum, auf daß sie ihn töteten, und funden keines.",
    english: "And they that had laid hold on Jesus led Him away to Caiaphas the high priest, where the scribes and the elders were assembled. But Peter followed Him afar off unto the high priest's palace, and went in, and sat with the servants, to see the end. Now the chief priests, and elders, and all the council, sought false witness against Jesus, to put Him to death; but found none."
  },
  {
    number: 32, disc: 2, discTrack: 3, part: 2,
    type: "Chorale",
    titleDe: "Mir hat die Welt trüglich gericht'",
    titleEn: "The world has judged me falsely",
    voicing: "Chorus I & II",
    duration: 1.0,
    german: "Mir hat die Welt trüglich gericht'\nMit Lügen und mit falschem G'dicht,\nViel Netz und heimlich Stricke.\nHerr, nimm mein wahr in dieser G'fahr,\nB'hüt mich für falschen Tücke!",
    english: "The world has judged me falsely\nWith lies and with false tales,\nMany snares and secret traps.\nLord, protect me in this peril,\nGuard me from false deceit!"
  },
  {
    number: 33, disc: 2, discTrack: 4, part: 2,
    type: "Recitative",
    titleDe: "Und wiewohl viel falsche Zeugen herzutraten",
    titleEn: "Yet though many false witnesses came",
    voicing: "Evangelist (Tenor), Witnesses, High Priest (Bass)",
    duration: 2.0,
    german: "Und wiewohl viel falsche Zeugen herzutraten, funden sie doch keins. Zuletzt traten herzu zween falsche Zeugen und sprachen: Er hat gesagt: Ich kann den Tempel Gottes abbrechen und in dreien Tagen denselben bauen.\nUnd der Hohepriester stund auf und sprach zu ihm: Antwortest du nichts zu dem, das diese wider dich zeugen?\nAber Jesus schwieg stille.",
    english: "Yet though many false witnesses came, they found none. At the last came two false witnesses, and said: This fellow said, I am able to destroy the temple of God, and to build it in three days.\nAnd the high priest arose, and said unto Him: Answerest Thou nothing? What is it which these witness against Thee?\nBut Jesus held His peace."
  },
  {
    number: 34, disc: 2, discTrack: 5, part: 2,
    type: "Recitative",
    titleDe: "Mein Jesus schweigt zu falschen Lügen stille",
    titleEn: "My Jesus remains silent to false lies",
    voicing: "Tenor",
    duration: 1.0,
    german: "Mein Jesus schweigt zu falschen Lügen stille,\nUm uns damit zu zeigen,\nDaß sein erbarmungsvoller Wille\nVor uns zum Leiden sei geneigt,\nUnd daß wir in dergleichen Pein\nIhm sollen ähnlich sein\nUnd in Verfolgung stille schweigen.",
    english: "My Jesus remains silent to false lies,\nIn order to show us thereby\nThat His compassionate will\nIs inclined to suffer for us,\nAnd that we in similar torment\nShould be like Him\nAnd in persecution keep silent."
  },
  {
    number: 35, disc: 2, discTrack: 6, part: 2,
    type: "Aria",
    titleDe: "Geduld! Wenn mich falsche Zungen stechen",
    titleEn: "Patience! When false tongues do sting me",
    voicing: "Tenor",
    duration: 3.5,
    german: "Geduld! Geduld!\nWenn mich falsche Zungen stechen.\nLeid ich wider meine Schuld\nSchimpf und Spott,\nEi, so mag der liebe Gott\nMeines Herzens Unschuld rächen.",
    english: "Patience! Patience!\nWhen false tongues do sting me.\nIf I suffer against my guilt\nDisgrace and scorn,\nThen let the dear Lord God\nAvenge my heart's innocence."
  },
  {
    number: 36, disc: 2, discTrack: 7, part: 2,
    type: "Recitative",
    titleDe: "Und der Hohepriester antwortete",
    titleEn: "And the high priest answered",
    voicing: "Evangelist (Tenor), Jesus (Bass), High Priest (Bass), Chorus I & II",
    duration: 3.0,
    german: "Und der Hohepriester antwortete und sprach zu ihm: Ich beschwöre dich bei dem lebendigen Gott, daß du uns sagest, ob du seiest Christus, der Sohn Gottes. Jesus sprach zu ihm: Du sagest's. Doch sage ich euch: Von nun an wird's geschehen, daß ihr sehen werdet des Menschen Sohn sitzen zur Rechten der Kraft und kommen in den Wolken des Himmels.\nDa zerriß der Hohepriester seine Kleider und sprach: Er hat Gott gelästert! Was bedürfen wir weiter Zeugnis? Siehe, itzt habt ihr seine Gotteslästerung gehöret. Was dünket euch? Sie antworteten und sprachen: Er ist des Todes schuldig!\nDa speieten sie aus in sein Angesicht und schlugen ihn mit Fäusten. Etliche aber schlugen ihn ins Angesicht und sprachen: Weissage uns, Christe, wer ist's, der dich schlug?",
    english: "And the high priest answered and said unto Him: I adjure Thee by the living God, that Thou tell us whether Thou be the Christ, the Son of God. Jesus saith unto him: Thou hast said: nevertheless I say unto you, Hereafter shall ye see the Son of Man sitting on the right hand of power, and coming in the clouds of heaven.\nThen the high priest rent his clothes, saying: He hath spoken blasphemy! What further need have we of witnesses? Behold, now ye have heard His blasphemy. What think ye? They answered and said: He is guilty of death!\nThen did they spit in His face, and buffeted Him; and others smote Him with the palms of their hands, saying: Prophesy unto us, Thou Christ, who is he that smote Thee?"
  },
  {
    number: 37, disc: 2, discTrack: 8, part: 2, type: "Chorale",
    titleDe: "Wer hat dich so geschlagen", titleEn: "Who was it that did smite Thee",
    voicing: "Chorus I & II", duration: 1.5,
    german: "Wer hat dich so geschlagen,\nMein Heil, und dich mit Plagen\nSo übel zugericht'?\nDu bist ja nicht ein Sünder\nWie wir und unsre Kinder;\nVon Missetaten weißt du nicht.",
    english: "Who was it that did smite Thee,\nMy Savior, and with torments\nSo cruelly used Thee thus?\nThou art indeed no sinner\nAs we and all our children;\nOf misdeeds Thou dost know nothing."
  },
  {
    number: 38, disc: 2, discTrack: 9, part: 2, type: "Recitative",
    titleDe: "Petrus aber saß draußen im Palast", titleEn: "Now Peter sat without in the palace",
    voicing: "Evangelist (Tenor), Maids (Soprano), Peter (Bass)", duration: 3.0,
    german: "Petrus aber saß draußen im Palast; und es trat zu ihm eine Magd und sprach: Und du warest auch mit dem Jesu aus Galiläa. Er leugnete aber vor ihnen allen und sprach: Ich weiß nicht, was du sagest. Als er aber zur Tür hinausging, sahe ihn eine andere und sprach zu denen, die da waren: Dieser war auch mit dem Jesu von Nazareth. Und er leugnete abermal und schwur dazu: Ich kenne des Menschen nicht. Und über eine kleine Weile traten hinzu, die da stunden, und sprachen zu Petro: Wahrlich, du bist auch einer von denen; denn deine Sprache verrät dich. Da hub er an, sich zu verfluchen und zu schwören: Ich kenne des Menschen nicht. Und alsbald krähete der Hahn. Da dachte Petrus an die Worte Jesu, da er zu ihm sagte: Ehe der Hahn krähen wird, wirst du mich dreimal verleugnen. Und ging heraus und weinete bitterlich.",
    english: "Now Peter sat without in the palace: and a damsel came unto him, saying: Thou also wast with Jesus of Galilee. But he denied before them all, saying: I know not what thou sayest. And when he was gone out into the porch, another maid saw him, and said unto them that were there: This fellow was also with Jesus of Nazareth. And again he denied with an oath: I do not know the man. And after a while came unto him they that stood by, and said to Peter: Surely thou also art one of them; for thy speech betrayeth thee. Then began he to curse and to swear: I know not the man. And immediately the cock crew. And Peter remembered the word of Jesus, which said unto him: Before the cock crow, thou shalt deny Me thrice. And he went out, and wept bitterly."
  },
  {
    number: 39, disc: 2, discTrack: 10, part: 2, type: "Aria",
    titleDe: "Erbarme dich, mein Gott", titleEn: "Have mercy, my God",
    voicing: "Alto, Violin solo", duration: 7.0,
    german: "Erbarme dich, mein Gott,\nUm meiner Zähren willen!\nSchaue hier, Herz und Auge\nWeint vor dir bitterlich.\nErbarme dich, mein Gott.",
    english: "Have mercy, my God,\nFor the sake of my tears!\nLook here, heart and eyes\nWeep before Thee bitterly.\nHave mercy, my God."
  },
  {
    number: 40, disc: 2, discTrack: 11, part: 2, type: "Chorale",
    titleDe: "Bin ich gleich von dir gewichen", titleEn: "Though I have from Thee departed",
    voicing: "Chorus I & II", duration: 1.0,
    german: "Bin ich gleich von dir gewichen,\nStell ich mich doch wieder ein;\nHat uns doch dein Sohn verglichen\nDurch sein' Angst und Todespein.\nIch verleugne nicht die Schuld;\nAber deine Gnad und Huld\nIst viel größer als die Sünde,\nDie ich stets in mir befinde.",
    english: "Though I have from Thee departed,\nYet I come again to Thee;\nFor Thy Son has reconciled us\nThrough His agony and mortal pain.\nI deny not my guilt;\nBut Thy grace and Thy mercy\nAre far greater than the sin\nWhich I ever find within me."
  },
  {
    number: 41, disc: 2, discTrack: 12, part: 2, type: "Recitative",
    titleDe: "Des Morgens aber hielten alle Hohenpriester", titleEn: "When the morning was come",
    voicing: "Evangelist (Tenor), Judas (Bass)", duration: 3.0,
    german: "Des Morgens aber hielten alle Hohenpriester und die Ältesten des Volks einen Rat über Jesum, daß sie ihn töteten. Und bunden ihn, führeten ihn hin und überantworteten ihn dem Landpfleger Pontio Pilato.\nDa das sahe Judas, der ihn verraten hatte, daß er verdammt war zum Tode, gereuete es ihn und brachte herwieder die dreißig Silberlinge den Hohenpriestern und Ältesten und sprach: Ich habe übel getan, daß ich unschuldig Blut verraten habe. Sie sprachen: Was gehet uns das an? Da siehe du zu! Und er warf die Silberlinge in den Tempel, hub sich davon, ging hin und erhängete sich selbst.",
    english: "When the morning was come, all the chief priests and elders of the people took counsel against Jesus to put Him to death: and when they had bound Him, they led Him away, and delivered Him to Pontius Pilate the governor.\nThen Judas, which had betrayed Him, when he saw that He was condemned, repented himself, and brought again the thirty pieces of silver to the chief priests and elders, saying: I have sinned in that I have betrayed the innocent blood. And they said: What is that to us? See thou to that. And he cast down the pieces of silver in the temple, and departed, and went and hanged himself."
  },
  {
    number: 42, disc: 2, discTrack: 13, part: 2, type: "Aria",
    titleDe: "Gebt mir meinen Jesum wieder!", titleEn: "Give me back my Jesus!",
    voicing: "Bass", duration: 4.0,
    german: "Gebt mir meinen Jesum wieder!\nSeht, das Geld, den Mörderlohn,\nWirft euch der verlorne Sohn\nZu den Füßen nieder!",
    english: "Give me back my Jesus!\nSee, the money, the murderer's fee,\nThe lost son casts it down\nAt your feet!"
  },
  {
    number: 43, disc: 2, discTrack: 14, part: 2, type: "Recitative",
    titleDe: "Sie hielten aber einen Rat", titleEn: "And they took counsel",
    voicing: "Evangelist (Tenor), Pilate (Bass), Jesus (Bass)", duration: 2.5,
    german: "Sie hielten aber einen Rat und kauften einen Töpfersacker darum zum Begräbnis der Pilger. Daher ist derselbige Acker genennet der Blutacker bis auf den heutigen Tag. Da ist erfüllet, das gesagt ist durch den Propheten Jeremias.\nJesus aber stund vor dem Landpfleger; und der Landpfleger fragte ihn und sprach: Bist du der Jüden König? Jesus aber sprach zu ihm: Du sagest's. Und da er verklagt ward von den Hohenpriestern und Ältesten, antwortete er nichts.\nDa sprach Pilatus zu ihm: Hörest du nicht, wie hart sie dich verklagen?\nUnd er antwortete ihm nicht auf ein Wort, also daß sich auch der Landpfleger sehr verwunderte.",
    english: "And they took counsel, and bought with them the potter's field, to bury strangers in. Wherefore that field was called the Field of Blood, unto this day. Then was fulfilled that which was spoken by Jeremy the prophet.\nAnd Jesus stood before the governor: and the governor asked Him, saying: Art Thou the King of the Jews? And Jesus said unto him: Thou sayest. And when He was accused of the chief priests and elders, He answered nothing.\nThen said Pilate unto Him: Hearest Thou not how many things they witness against Thee?\nAnd He answered him to never a word; insomuch that the governor marvelled greatly."
  },
  {
    number: 44, disc: 2, discTrack: 15, part: 2, type: "Chorale",
    titleDe: "Befiehl du deine Wege", titleEn: "Commit thy way to God",
    voicing: "Chorus I & II", duration: 1.5,
    german: "Befiehl du deine Wege\nUnd was dein Herze kränkt\nDer allertreusten Pflege\nDes, der den Himmel lenkt.\nDer Wolken, Luft und Winden\nGibt Wege, Lauf und Bahn,\nDer wird auch Wege finden,\nDa dein Fuß gehen kann.",
    english: "Commit thy way to God,\nAnd what thy heart doth grieve,\nTo His most faithful keeping,\nWho rules the sky above.\nHe who gives clouds and breezes\nTheir path, their course, their way,\nHe also will find pathways\nWhere thy feet too may walk."
  },
  {
    number: 45, disc: 2, discTrack: 16, part: 2, type: "Recitative",
    titleDe: "Auf das Fest aber hatte der Landpfleger Gewohnheit",
    titleEn: "Now at that feast the governor was wont",
    voicing: "Evangelist (Tenor), Pilate (Bass), Wife (Soprano), Chorus I & II", duration: 4.0,
    german: "Auf das Fest aber hatte der Landpfleger Gewohnheit, dem Volk einen Gefangenen loszugeben, welchen sie wollten. Er hatte aber zu der Zeit einen Gefangenen, einen sonderlichen vor andern, der hieß Barrabas. Und da sie versammlet waren, sprach Pilatus zu ihnen: Welchen wollet ihr, daß ich euch losgebe? Barrabam oder Jesum, von dem gesagt wird, er sei Christus?\nUnd da er auf dem Richtstuhl saß, schickete sein Weib zu ihm und ließ ihm sagen: Habe du nichts zu schaffen mit diesem Gerechten; ich habe heute viel erlitten im Traum von seinetwegen.\nAber die Hohenpriester und die Ältesten überredeten das Volk, daß sie um Barrabam bitten sollten und Jesum umbrächten. Da antwortete nun der Landpfleger und sprach zu ihnen: Welchen wollt ihr unter diesen zweien, den ich euch soll losgeben? Sie sprachen: Barrabam!\nPilatus sprach zu ihnen: Was soll ich denn machen mit Jesu, von dem gesagt wird, er sei Christus? Sie sprachen alle: Laß ihn kreuzigen!",
    english: "Now at that feast the governor was wont to release unto the people a prisoner, whom they would. And they had then a notable prisoner, called Barabbas. Therefore when they were gathered together, Pilate said unto them: Whom will ye that I release unto you? Barabbas, or Jesus which is called Christ?\nWhen he was set down on the judgment seat, his wife sent unto him, saying: Have thou nothing to do with that just man: for I have suffered many things this day in a dream because of Him.\nBut the chief priests and elders persuaded the multitude that they should ask for Barabbas, and destroy Jesus. The governor answered and said unto them: Whether of the twain will ye that I release unto you? They said: Barabbas!\nPilate saith unto them: What shall I do then with Jesus which is called Christ? They all say unto him: Let Him be crucified!"
  },
  {
    number: 46, disc: 2, discTrack: 17, part: 2, type: "Chorale",
    titleDe: "Wie wunderbarlich ist doch diese Strafe!", titleEn: "How wondrous is this punishment!",
    voicing: "Chorus I & II", duration: 1.0,
    german: "Wie wunderbarlich ist doch diese Strafe!\nDer gute Hirte leidet für die Schafe,\nDie Schuld bezahlt der Herre, der Gerechte,\nFür seine Knechte.",
    english: "How wondrous is this punishment!\nThe good shepherd suffers for the sheep,\nThe debt is paid by the Lord, the righteous one,\nFor his servants."
  },
  {
    number: 47, disc: 2, discTrack: 18, part: 2, type: "Recitative",
    titleDe: "Der Landpfleger sagte", titleEn: "The governor said",
    voicing: "Evangelist (Tenor), Pilate (Bass)", duration: 1.0,
    german: "Der Landpfleger sagte: Was hat er denn Übles getan?",
    english: "The governor said: Why, what evil hath He done?"
  },
  {
    number: 48, disc: 2, discTrack: 19, part: 2, type: "Recitative",
    titleDe: "Er hat uns allen wohlgetan", titleEn: "He has done good to us all",
    voicing: "Soprano", duration: 1.5,
    german: "Er hat uns allen wohlgetan,\nDen Blinden gab er das Gesicht,\nDie Lahmen macht' er gehend,\nEr sagt' uns seines Vaters Wort,\nEr trieb die Teufel fort,\nBetrübte hat er aufgericht'.\nEr nahm die Sünder auf und an.\nSonst hat mein Jesus nichts getan.",
    english: "He has done good to us all,\nHe gave sight to the blind,\nHe made the lame to walk,\nHe told us His Father's word,\nHe drove the devils forth,\nThe sorrowful hath He raised up.\nHe took the sinners in and to Him.\nNaught else has my Jesus done."
  },
  {
    number: 49, disc: 2, discTrack: 20, part: 2, type: "Aria",
    titleDe: "Aus Liebe will mein Heiland sterben", titleEn: "Out of love my Savior is willing to die",
    voicing: "Soprano", duration: 5.0,
    german: "Aus Liebe will mein Heiland sterben,\nVon einer Sünde weiß er nichts.\nDaß das ewige Verderben\nUnd die Strafe des Gerichts\nNicht auf meiner Seele bliebe.",
    english: "Out of love my Savior is willing to die,\nOf any sin He knows nothing,\nSo that eternal perdition\nAnd the punishment of judgment\nMight not remain upon my soul."
  },
  {
    number: 50, disc: 2, discTrack: 21, part: 2, type: "Recitative",
    titleDe: "Sie schrieen aber noch mehr", titleEn: "But they cried out all the more",
    voicing: "Evangelist (Tenor), Pilate (Bass), Chorus I & II", duration: 3.0,
    german: "Sie schrieen aber noch mehr und sprachen: Laß ihn kreuzigen!\nDa aber Pilatus sahe, daß er nichts schaffete, sondern daß ein viel größer Getümmel ward, nahm er Wasser und wusch die Hände vor dem Volk und sprach: Ich bin unschuldig an dem Blut dieses Gerechten, sehet ihr zu. Da antwortete das ganze Volk und sprach: Sein Blut komme über uns und über unsre Kinder.\nDa gab er ihnen Barrabam los; aber Jesum ließ er geißeln und überantwortete ihn, daß er gekreuziget würde.",
    english: "But they cried out all the more, saying: Let Him be crucified!\nWhen Pilate saw that he could prevail nothing, but that rather a tumult was made, he took water, and washed his hands before the multitude, saying: I am innocent of the blood of this just person: see ye to it. Then answered all the people, and said: His blood be on us, and on our children.\nThen released he Barabbas unto them: and when he had scourged Jesus, he delivered Him to be crucified."
  },
  {
    number: 51, disc: 2, discTrack: 22, part: 2, type: "Recitative",
    titleDe: "Erbarm es Gott!", titleEn: "God have mercy!",
    voicing: "Alto", duration: 1.5,
    german: "Erbarm es Gott!\nHier steht der Heiland angebunden.\nO Geißelung, o Schläg, o Wunden!\nIhr Henker, haltet ein!\nErweichet euch\nDer Seelen Schmerz,\nDer Anblick solches Jammers nicht?\nAch ja! ihr habt ein Herz,\nDas muß der Martersäule gleich\nUnd noch viel härter sein.\nErbarmt euch, haltet ein!",
    english: "God have mercy!\nHere stands the Savior bound.\nO scourging, O blows, O wounds!\nYe hangmen, hold back!\nDoes not\nThe soul's pain,\nThe sight of such sorrow move you?\nAh yes! Ye have a heart\nThat must be like the pillar\nAnd even harder still.\nHave mercy, hold back!"
  },
  {
    number: 52, disc: 2, discTrack: 23, part: 2, type: "Aria",
    titleDe: "Können Tränen meiner Wangen", titleEn: "If the tears upon my cheeks",
    voicing: "Alto", duration: 5.5,
    german: "Können Tränen meiner Wangen\nNichts erlangen,\nO, so nehmt mein Herz hinein!\nAber laßt es bei den Fluten,\nSo die Wunden milde bluten,\nAuch die Opferschale sein!",
    english: "If the tears upon my cheeks\nCan gain nothing,\nO, then take my heart within!\nBut let it, beside the streams\nThat flow gently from His wounds,\nAlso be the sacrificial cup!"
  },
  // ======================== DISC 3 — PART TWO (cont.) ========================
  {
    number: 53, disc: 3, discTrack: 1, part: 2, type: "Recitative",
    titleDe: "Da nahmen die Kriegsknechte des Landpflegers",
    titleEn: "Then the soldiers of the governor",
    voicing: "Evangelist (Tenor), Chorus I & II", duration: 2.5,
    german: "Da nahmen die Kriegsknechte des Landpflegers Jesum zu sich in das Richthaus und sammleten über ihn die ganze Schar und zogen ihn aus und legeten ihm einen Purpurmantel an und flochten eine Dornenkrone und satzten sie auf sein Haupt und ein Rohr in seine rechte Hand und beugeten die Knie vor ihm und spotteten ihn und sprachen: Gegrüßet seist du, Jüdenkönig!\nUnd speieten ihn an und nahmen das Rohr und schlugen damit sein Haupt.",
    english: "Then the soldiers of the governor took Jesus into the common hall, and gathered unto Him the whole band of soldiers. And they stripped Him, and put on Him a scarlet robe. And when they had platted a crown of thorns, they put it upon His head, and a reed in His right hand: and they bowed the knee before Him, and mocked Him, saying: Hail, King of the Jews!\nAnd they spit upon Him, and took the reed, and smote Him on the head."
  },
  {
    number: 54, disc: 3, discTrack: 2, part: 2, type: "Chorale",
    titleDe: "O Haupt voll Blut und Wunden", titleEn: "O sacred head now wounded",
    voicing: "Chorus I & II", duration: 1.5,
    german: "O Haupt voll Blut und Wunden,\nVoll Schmerz und voller Hohn,\nO Haupt, zum Spott gebunden\nMit einer Dornenkron,\nO Haupt, sonst schön gezieret\nMit höchster Ehr und Zier,\nJetzt aber hoch schimpfieret,\nGegrüßet seist du mir!\n\nDu edles Angesichte,\nDavor sonst schrickt und scheut\nDas große Weltgewichte,\nWie bist du so bespeit,\nWie bist du so erbleichet!\nWer hat dein Augenlicht,\nDem sonst kein Licht nicht gleichet,\nSo schändlich zugericht'?",
    english: "O sacred head now wounded,\nWith grief and shame weighed down,\nO sacred head, surrounded\nWith thorns, Thine only crown,\nO sacred head, once graced\nWith highest honor and array,\nBut now so highly abased,\nI greet Thee, I am Thine!\n\nThou noble countenance,\nBefore which otherwise trembles and quakes\nThe great world's might,\nHow art Thou so bespattered,\nHow art Thou so grown pale!\nWho hath Thy shining eyes,\nTo which no light compares,\nSo shamefully mistreated?"
  },
  {
    number: 55, disc: 3, discTrack: 3, part: 2, type: "Recitative",
    titleDe: "Und da sie ihn verspottet hatten", titleEn: "And after that they had mocked Him",
    voicing: "Evangelist (Tenor)", duration: 1.5,
    german: "Und da sie ihn verspottet hatten, zogen sie ihm den Mantel aus und zogen ihm seine Kleider an und führeten ihn hin, daß sie ihn kreuzigten. Und indem sie hinausgingen, funden sie einen Menschen von Kyrene mit Namen Simon; den zwungen sie, daß er ihm sein Kreuz trug.",
    english: "And after that they had mocked Him, they took the robe off from Him, and put His own raiment on Him, and led Him away to crucify Him. And as they came out, they found a man of Cyrene, Simon by name: him they compelled to bear His cross."
  },
  {
    number: 56, disc: 3, discTrack: 4, part: 2, type: "Recitative",
    titleDe: "Ja, freilich will in uns das Fleisch und Blut", titleEn: "Yes, truly, the flesh and blood in us",
    voicing: "Bass", duration: 1.0,
    german: "Ja, freilich will in uns das Fleisch und Blut\nZum Kreuz gezwungen sein;\nJe mehr es unsrer Seele gut,\nJe herber geht es ein.",
    english: "Yes, truly, the flesh and blood in us\nMust be forced to bear the cross;\nThe better it is for our soul,\nThe more bitter it tastes."
  },
  {
    number: 57, disc: 3, discTrack: 5, part: 2, type: "Aria",
    titleDe: "Komm, süßes Kreuz", titleEn: "Come, sweet cross",
    voicing: "Bass, Viola da gamba", duration: 6.0,
    german: "Komm, süßes Kreuz, so will ich sagen,\nMein Jesu, gib es immer her!\nWird mir mein Leiden einst zu schwer,\nSo hilfst du mir es selber tragen.",
    english: "Come, sweet cross, so will I say,\nMy Jesus, give it ever to me!\nIf my suffering becomes too heavy,\nThou Thyself wilt help me bear it."
  },
  {
    number: 58, disc: 3, discTrack: 6, part: 2, type: "Recitative",
    titleDe: "Und da sie an die Stätte kamen", titleEn: "And when they were come unto a place",
    voicing: "Evangelist (Tenor), Chorus I & II", duration: 4.0,
    german: "Und da sie an die Stätte kamen mit Namen Golgatha, das ist verdeutschet Schädelstätt, gaben sie ihm Essig zu trinken mit Gallen vermischet; und da er's schmeckete, wollte er's nicht trinken.\nDa sie ihn aber gekreuziget hatten, teilten sie seine Kleider und wurfen das Los darum. Und sie saßen allda und hüteten sein. Und oben über sein Haupt hefteten sie die Ursach seines Todes geschrieben: Dies ist Jesus, der Jüden König.\nUnd da wurden zween Mörder mit ihm gekreuziget, einer zur Rechten und einer zur Linken. Die aber vorübergingen, lästerten ihn und schüttelten ihre Köpfe und sprachen: Der du den Tempel Gottes zerbrichst und bauest ihn in dreien Tagen, hilf dir selber! Bist du Gottes Sohn, so steig herab vom Kreuz!\nDesgleichen auch die Hohenpriester spotteten sein samt den Schriftgelehrten und Ältesten und sprachen: Andern hat er geholfen und kann sich selber nicht helfen. Ist er der König Israels, so steige er nun vom Kreuz, so wollen wir ihm glauben. Er hat Gott vertrauet; der erlöse ihn nun, lüstet's ihn; denn er hat gesagt: Ich bin Gottes Sohn. Desgleichen schmäheten ihn auch die Mörder, die mit ihm gekreuziget waren.",
    english: "And when they were come unto a place called Golgotha, that is to say, a place of a skull, they gave Him vinegar to drink mingled with gall: and when He had tasted thereof, He would not drink.\nAnd they crucified Him, and parted His garments, casting lots. And sitting down they watched Him there; and set up over His head His accusation written: THIS IS JESUS THE KING OF THE JEWS.\nThen were there two thieves crucified with Him, one on the right hand, and another on the left. And they that passed by reviled Him, wagging their heads, and saying: Thou that destroyest the temple of God, and buildest it in three days, save Thyself! If Thou be the Son of God, come down from the cross!\nLikewise also the chief priests mocking Him, with the scribes and elders, said: He saved others; Himself He cannot save. If He be the King of Israel, let Him now come down from the cross, and we will believe Him. He trusted in God; let Him deliver Him now, if He will have Him: for He said, I am the Son of God. The thieves also, which were crucified with Him, cast the same in His teeth."
  },
  {
    number: 59, disc: 3, discTrack: 7, part: 2, type: "Recitative",
    titleDe: "Ach Golgatha, unsel'ges Golgatha!", titleEn: "Ah, Golgotha, unhappy Golgotha!",
    voicing: "Alto", duration: 1.5,
    german: "Ach Golgatha, unsel'ges Golgatha!\nDer Herr der Herrlichkeit muß schimpflich hier verderben,\nDer Segen und das Heil der Welt\nWird auf das Kreuz gestellt.\nDer Schöpfer Himmels und der Erden\nSoll Erd und Luft entzogen werden.\nDie Unschuld muß hier schuldig sterben,\nDas gehet meiner Seele nah;\nAch Golgatha, unsel'ges Golgatha!",
    english: "Ah, Golgotha, unhappy Golgotha!\nThe Lord of Glory must perish shamefully here,\nThe blessing and the salvation of the world\nIs placed upon the cross.\nThe Creator of heaven and of earth\nShall be deprived of earth and air.\nInnocence must here die guilty,\nThat grieves my soul sorely;\nAh, Golgotha, unhappy Golgotha!"
  },
  {
    number: 60, disc: 3, discTrack: 8, part: 2, type: "Aria",
    titleDe: "Sehet, Jesus hat die Hand", titleEn: "See ye, Jesus hath His hand",
    voicing: "Alto, Chorus II", duration: 4.0,
    german: "Sehet, Jesus hat die Hand,\nUns zu fassen, ausgespannt,\nKommt! \u2013 Wohin? \u2013 in Jesu Armen\nSucht Erlösung, nehmt Erbarmen,\nSuchet! \u2013 Wo? \u2013 in Jesu Armen.\nLebet, sterbet, ruhet hier,\nIhr verlass'nen Küchlein ihr,\nBleibet \u2013 Wo? \u2013 in Jesu Armen.",
    english: "See ye, Jesus hath His hand,\nTo clasp us, outstretched,\nCome! \u2013 Where? \u2013 into Jesus' arms\nSeek redemption, take His mercy,\nSeek! \u2013 Where? \u2013 in Jesus' arms.\nLive, die, rest here,\nYe forsaken fledglings,\nStay \u2013 Where? \u2013 in Jesus' arms."
  },
  {
    number: 61, disc: 3, discTrack: 9, part: 2, type: "Recitative",
    titleDe: "Und von der sechsten Stunde an", titleEn: "Now from the sixth hour",
    voicing: "Evangelist (Tenor), Jesus (Bass)", duration: 4.0,
    german: "Und von der sechsten Stunde an ward eine Finsternis über das ganze Land bis zu der neunten Stunde. Und um die neunte Stunde schrie Jesus laut und sprach: Eli, Eli, lama asabthani? Das ist: Mein Gott, mein Gott, warum hast du mich verlassen?\nEtliche aber, die da stunden, da sie das höreten, sprachen sie: Der rufet dem Elias! Und bald lief einer unter ihnen, nahm einen Schwamm und füllete ihn mit Essig und steckete ihn auf ein Rohr und tränkete ihn. Die andern aber sprachen: Halt! Laß sehen, ob Elias komme und ihm helfe.\nAber Jesus schriee abermal laut und verschied.",
    english: "Now from the sixth hour there was darkness over all the land unto the ninth hour. And about the ninth hour Jesus cried with a loud voice, saying: Eli, Eli, lama sabachthani? That is to say, My God, My God, why hast Thou forsaken Me?\nSome of them that stood there, when they heard that, said: This man calleth for Elijah! And straightway one of them ran, and took a sponge, and filled it with vinegar, and put it on a reed, and gave Him to drink. The rest said: Let be, let us see whether Elijah will come to save Him.\nJesus, when He had cried again with a loud voice, yielded up the ghost."
  },
  {
    number: 62, disc: 3, discTrack: 10, part: 2, type: "Chorale",
    titleDe: "Wenn ich einmal soll scheiden", titleEn: "When I must depart one day",
    voicing: "Chorus I & II", duration: 2.0,
    german: "Wenn ich einmal soll scheiden,\nSo scheide nicht von mir,\nWenn ich den Tod soll leiden,\nSo tritt du dann herfür!\nWenn mir am allerbängsten\nWird um das Herze sein,\nSo reiß mich aus den Ängsten\nKraft deiner Angst und Pein!",
    english: "When I must depart one day,\nDo not depart from me,\nWhen I must suffer death,\nThen come forth to me!\nWhen I am filled with terror,\nWith fear within my heart,\nThen rescue me from anguish\nBy virtue of Thine own fear and pain!"
  },
  {
    number: 63, disc: 3, discTrack: 11, part: 2, type: "Recitative",
    titleDe: "Und siehe da, der Vorhang im Tempel zerriß",
    titleEn: "And, behold, the veil of the temple was rent",
    voicing: "Evangelist (Tenor)", duration: 3.0,
    german: "Und siehe da, der Vorhang im Tempel zerriß in zwei Stück von oben an bis unten aus. Und die Erde erbebete, und die Felsen zerrissen, und die Gräber täten sich auf, und stunden auf viel Leiber der Heiligen, die da schliefen, und gingen aus den Gräbern nach seiner Auferstehung und kamen in die heilige Stadt und erschienen vielen.\nAber der Hauptmann und die bei ihm waren und bewahreten Jesum, da sie sahen das Erdbeben und was da geschah, erschraken sie sehr und sprachen: Wahrlich, dieser ist Gottes Sohn gewesen.\nUnd es waren viel Weiber da, die von ferne zusahen, die da waren nachgefolget aus Galiläa und hatten ihm gedienet.",
    english: "And, behold, the veil of the temple was rent in twain from the top to the bottom; and the earth did quake, and the rocks rent; and the graves were opened; and many bodies of the saints which slept arose, and came out of the graves after His resurrection, and went into the holy city, and appeared unto many.\nNow when the centurion, and they that were with him, watching Jesus, saw the earthquake, and those things that were done, they feared greatly, saying: Truly this was the Son of God.\nAnd many women were there beholding afar off, which followed Jesus from Galilee, ministering unto Him."
  },
  {
    number: 64, disc: 3, discTrack: 12, part: 2, type: "Recitative",
    titleDe: "Am Abend, da es kühle war", titleEn: "At evening, when it was cool",
    voicing: "Bass", duration: 2.5,
    german: "Am Abend, da es kühle war,\nWard Adams Fallen offenbar;\nAm Abend drücket ihn der Heiland nieder.\nAm Abend kam die Taube wieder\nUnd trug ein Ölblatt in dem Munde.\nO schöne Zeit! O Abendstunde!\nDer Friedensschluß ist nun mit Gott gemacht,\nDenn Jesus hat sein Kreuz vollbracht.\nSein Leichnam kömmt zur Ruh,\nAch! liebe Seele, bitte du,\nGeh, lasse dir den toten Jesum schenken,\nO heilsames, o köstlichs Angedenken!",
    english: "At evening, when it was cool,\nAdam's fall was made manifest;\nAt evening the Savior bowed low.\nAt evening the dove came again\nAnd bore an olive leaf in its mouth.\nO beauteous time! O evening hour!\nThe peace with God is now concluded,\nFor Jesus has completed His cross.\nHis body comes to rest,\nAh! Dear soul, pray thou,\nGo, let the dead Jesus be given thee,\nO healing, O precious remembrance!"
  },
  {
    number: 65, disc: 3, discTrack: 13, part: 2, type: "Aria",
    titleDe: "Mache dich, mein Herze, rein", titleEn: "Make thee clean, my heart",
    voicing: "Bass", duration: 6.5,
    german: "Mache dich, mein Herze, rein,\nIch will Jesum selbst begraben.\nDenn er soll nunmehr in mir\nFür und für\nSeine süße Ruhe haben.\nWelt, geh aus, laß Jesum ein!",
    english: "Make thee clean, my heart,\nI will myself bury Jesus.\nFor He shall henceforth in me\nFor ever and ever\nHave His sweet rest.\nWorld, depart, let Jesus in!"
  },
  {
    number: 66, disc: 3, discTrack: 14, part: 2, type: "Recitative",
    titleDe: "Und Joseph nahm den Leib", titleEn: "And when Joseph had taken the body",
    voicing: "Evangelist (Tenor), Pilate (Bass), Chorus I & II", duration: 3.5,
    german: "Und Joseph nahm den Leib und wickelte ihn in ein rein Leinwand und legte ihn in sein eigen neu Grab, welches er hatte lassen in einen Fels hauen, und wälzete einen großen Stein vor die Tür des Grabes und ging davon.\nDes andern Tages kamen die Hohenpriester und Pharisäer sämtlich zu Pilato und sprachen: Herr, wir haben gedacht, daß dieser Verführer sprach, da er noch lebete: Ich will nach dreien Tagen wieder auferstehen. Darum befiehl, daß man das Grab verwahre bis an den dritten Tag.\nPilatus sprach zu ihnen: Da habt ihr die Hüter; gehet hin und verwahret's, wie ihr's wisset.\nSie gingen hin und verwahreten das Grab mit Hütern und versiegelten den Stein.",
    english: "And when Joseph had taken the body, he wrapped it in a clean linen cloth, and laid it in his own new tomb, which he had hewn out in the rock: and he rolled a great stone to the door of the sepulchre, and departed.\nNow the next day, the chief priests and Pharisees came together unto Pilate, saying: Sir, we remember that that deceiver said, while He was yet alive, After three days I will rise again. Command therefore that the sepulchre be made sure until the third day.\nPilate said unto them: Ye have a watch: go your way, make it as sure as ye can.\nSo they went, and made the sepulchre sure, sealing the stone, and setting a watch."
  },
  {
    number: 67, disc: 3, discTrack: 15, part: 2, type: "Recitative",
    titleDe: "Nun ist der Herr zur Ruh gebracht", titleEn: "Now the Lord is laid to rest",
    voicing: "Soprano, Alto, Tenor, Bass, Chorus II", duration: 2.5,
    german: "Nun ist der Herr zur Ruh gebracht.\nMein Jesu, gute Nacht!\n\nDie Müh ist aus, die unsre Sünden ihm gemacht.\nMein Jesu, gute Nacht!\n\nO selige Gebeine,\nSeht, wie ich euch mit Buß und Reu beweine,\nDaß euch mein Fall in solche Not gebracht!\nMein Jesu, gute Nacht!\n\nHabt lebenslang\nVor euer Leiden tausend Dank,\nDaß ihr mein Seelenheil so wert geacht'.\nMein Jesu, gute Nacht!",
    english: "Now the Lord is laid to rest.\nMy Jesus, good night!\n\nThe toil is past, that our sins have caused Him.\nMy Jesus, good night!\n\nO blessed limbs,\nSee, how I weep over you with grief and remorse,\nThat my fall has brought you to such distress!\nMy Jesus, good night!\n\nFor your whole life long\nA thousand thanks for your suffering,\nThat you have held my soul's salvation so dear.\nMy Jesus, good night!"
  },
  {
    number: 68, disc: 3, discTrack: 16, part: 2, type: "Chorus",
    titleDe: "Wir setzen uns mit Tränen nieder", titleEn: "We sit down in tears",
    voicing: "Chorus I & II", duration: 6.0,
    german: "Wir setzen uns mit Tränen nieder\nUnd rufen dir im Grabe zu:\nRuhe sanfte, sanfte ruh!\nRuht, ihr ausgesognen Glieder!\nEuer Grab und Leichenstein\nSoll dem ängstlichen Gewissen\nEin bequemes Ruhekissen\nUnd der Seelen Ruhstatt sein.\nHöchst vergnügt schlummern da die Augen ein.",
    english: "We sit down in tears\nAnd call to Thee in the grave:\nRest softly, softly rest!\nRest, ye exhausted limbs!\nYour grave and headstone\nShall for the anxious conscience\nBe a comfortable pillow\nAnd the resting place of the soul.\nIn utmost bliss the eyes slumber there."
  }
];

// ======================== 40-DAY SEGMENTATION ========================
const daySegments = [
  { day: 1,  movements: [1, 2],   title: "Opening Chorus & Prophecy" },
  { day: 2,  movements: [3, 4],   title: "The Plot Against Jesus" },
  { day: 3,  movements: [5, 6],   title: "Grief and Repentance" },
  { day: 4,  movements: [7],      title: "Judas's Betrayal" },
  { day: 5,  movements: [8, 9],   title: "The Last Supper Foretold" },
  { day: 6,  movements: [10, 11], title: "The Institution of Communion" },
  { day: 7,  movements: [12],     title: "Heart Swimming in Tears" },
  { day: 8,  movements: [13, 14], title: "A Gift of the Heart" },
  { day: 9,  movements: [15, 16], title: "Peter's Promise" },
  { day: 10, movements: [17],     title: "I Will Stand Beside Thee" },
  { day: 11, movements: [18, 19], title: "The Garden of Gethsemane" },
  { day: 12, movements: [20, 21], title: "Watching and Praying" },
  { day: 13, movements: [22, 23], title: "The Father's Will" },
  { day: 14, movements: [24],     title: "The Disciples Sleep" },
  { day: 15, movements: [25, 26], title: "The Betrayal" },
  { day: 16, movements: [27, 28], title: "The Arrest" },
  { day: 17, movements: [29],     title: "O Man, Bewail Thy Grievous Sin" },
  { day: 18, movements: [30, 31], title: "Alas! Where Is My Jesus?" },
  { day: 19, movements: [32, 33], title: "Before the High Priest" },
  { day: 20, movements: [34],     title: "Jesus Remains Silent" },
  { day: 21, movements: [35, 36], title: "Patience and Judgment" },
  { day: 22, movements: [37, 38], title: "Peter's Denial" },
  { day: 23, movements: [39, 40], title: "Have Mercy, My God" },
  { day: 24, movements: [41],     title: "Judas's Remorse" },
  { day: 25, movements: [42, 43], title: "Give Me Back My Jesus" },
  { day: 26, movements: [44, 45], title: "Before Pilate" },
  { day: 27, movements: [46],     title: "The Good Shepherd Suffers" },
  { day: 28, movements: [47, 48], title: "What Evil Has He Done?" },
  { day: 29, movements: [49, 50], title: "Out of Love" },
  { day: 30, movements: [51],     title: "God Have Mercy" },
  { day: 31, movements: [52, 53], title: "The Scourging" },
  { day: 32, movements: [54, 55], title: "O Sacred Head" },
  { day: 33, movements: [56, 57], title: "Come, Sweet Cross" },
  { day: 34, movements: [58],     title: "Golgotha" },
  { day: 35, movements: [59, 60], title: "The Crucifixion" },
  { day: 36, movements: [61, 62], title: "The Death of Jesus" },
  { day: 37, movements: [63],     title: "The Veil Is Rent" },
  { day: 38, movements: [64, 65], title: "The Burial" },
  { day: 39, movements: [66, 67], title: "Good Night, My Jesus" },
  { day: 40, movements: [68],     title: "We Sit Down in Tears" }
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

// Spotify track IDs for each of the 68 sections (Gardiner 2017 SDG recording)
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
