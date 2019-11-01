const songs = [
  {
    title: "Abba - Dancing Queen",
    artists: ["ABBA", "EvGeny", "Blondie"],
    genre: "Pop",
    answer: "ABBA",
    url: "soundtrack/abba-dancing-queen-official-video.mp3"
  },
  {
    title: "Sade - Smooth Operator",
    artists: ["Toni Braxton", "Sade", "Alicia Keys"],
    genre: "Soul",
    answer: "Sade",
    url: "soundtrack/sade-smooth-operator.mp3",
    lyric: `He's laughing with another girl
    And playing with another heart
    Placing high stakes, making hearts ache
    He's loved in seven languages
    Jukebox life, diamond nights and ruby lights, high in the sky
    Heaven help him, when he falls
    Diamond life, lover boy
    He moves in space with minimum waste and maximum joy
    City lights, business nights
    When you require streetcar desire for higher heights
    No place for beginners or sensitive hearts
    When sentiment is left to chance
    No place to be ending but somewhere to start
    No need to ask, he's a smooth operator
    Smooth operator
    Smooth operator
    Smooth operator
    Coast to coast, LA to Chicago
    Western male
    Across the north and south to Key Largo
    Love for sale
    Face to face, each classic case
    We shadow box and double cross, yet need the chase
    A license to love, insurance to hold
    Melts all your memories and change into gold
    His eyes are like angels but his heart is cold
    No need to ask, he's a smooth operator
    Smooth operator
    Smooth operator
    Smooth operator
    Coast to coast, LA to Chicago
    Western male
    Across the north and south to Key Largo
    Love for sale`
  },
  {
    title: "Justin Timberlake - CAN'T STOP THE FEELING!",
    artists: ["Justin Bieber", "Justin Timberlake", "Ed Sheran"],
    genre: "Pop",
    answer: "Justin Timberlake",
    url:
      "soundtrack/justin-timberlake-cant-stop-the-feeling-from-dreamworks-animations-trolls-official-video.mp3"
  },
  {
    title: "U2 - With Or Without You",
    artists: ["Bruce Springsteen", "U2", "Depeche Mode"],
    genre: "Rock",
    answer: "U2",
    url: "soundtrack/u2-with-or-without-you.mp3"
  },
  {
    title: "Oasis - stand-by-me",
    artists: ["Blur", "The Verve", "Oasis"],
    genre: "Rock",
    answer: "Oasis",
    url: "soundtrack/oasis-stand-by-me-official-video.mp3"
  },
  {
    title: "Radiohead - High & Dry",
    artists: ["Radiohead", "Nirvanna", "Muse"],
    genre: "Rock",
    answer: "Radiohead",
    url: "soundtrack/radiohead-high-dry.mp3"
  },
  {
    title: "The Cardigans - My Favourite Game",
    artists: ["The Do", "Gwen Stefani", "The Cardigans"],
    genre: "Rock",
    answer: "The Cardigans",
    url: "soundtrack/the-cardigans-my-favourite-game.mp3"
  },
  {
    title: "The Rolling Stones - (I Can't Get No) Satisfaction",
    artists: ["The Rolling Stones", "Red Hot Chilli Peppers", "AC/DC"],
    genre: "Rock",
    answer: "The Rolling Stones",
    url:
      "soundtrack/the-rolling-stones-i-cant-get-no-satisfaction-official-lyric-video.mp3"
  },
  {
    title: "No Doubt - Don't Speak",
    artists: ["No Doubt", "Pink", "Alaniss Morisette"],
    genre: "Rock",
    answer: "No Doubt",
    url: "soundtrack/no-doubt-dont-speak-official-music-video.mp3"
  },
  {
    title: "Keziah Jones - Rythm is love",
    artists: ["Ben Harper", "Lenny Kravitz", "Keziah Jones"],
    genre: "Rock",
    answer: "Keziah Jones",
    url: "soundtrack/keziah-jones-rhythm-is-love-official-video.mp3"
  },
  {
    title: "Roy Orbison - Oh, Pretty Woman",
    artists: ["The Beatles", "Queen", "Roy Orbison"],
    genre: "Soul",
    answer: "Roy Orbison",
    url: "soundtrack/roy-orbison-oh-pretty-woman-from-black-white-night.mp3"
  },
  {
    title: "Red Hot Chili Peppers - Under The Bridge",
    artists: ["Nirvanna", "Guns N Roses", "Red Hot Chili Peppers"],
    genre: "Rock",
    answer: "Red Hot Chili Peppers",
    url:
      "soundtrack/red-hot-chili-peppers-under-the-bridge-official-music-video.mp3"
  },
  {
    title: "The Do - On My Shoulders",
    artists: ["The Doors", "The Do", "Portishead"],
    genre: "Rock",
    answer: "The Do",
    url: "soundtrack/the-do-on-my-shoulders.mp3"
  },
  {
    title: "Aerosmith - Cryin'",
    artists: ["Bon Jovi", "Aerosmith", "The Police"],
    genre: "Rock",
    answer: "Aerosmith",
    url: "soundtrack/aerosmith-cryin-official-music-video.mp3"
  },
  {
    title: "Maroon 5 - Sugar",
    artists: ["Maroon 5", "Justin Timberlake", "Sam Smith"],
    genre: "Pop",
    answer: "Maroon 5",
    url: "soundtrack/maroon-5-sugar.mp3"
  },
  {
    title: "Madonna - Like A Virgin",
    artists: ["Madonna", "Gwen Stefani", "Kylie Minogue"],
    genre: "Pop",
    answer: "Madonna",
    url: "soundtrack/madonna-like-a-virgin-official-music-video.mp3"
  },
  {
    title: "Bruno Mars - 24K Magic",
    artists: ["Pharell Williams", "Bruno Mars", "Charlie Puth"],
    genre: "Pop",
    answer: "Bruno Mars",
    url: "soundtrack/bruno-mars-24k-magic-official-video.mp3"
  },
  {
    title: "Camila Cabello - senorita",
    artists: ["Miley Cyrus", "Camila Cabello", "Arianna Grande"],
    genre: "Pop",
    answer: "Camila Cabello",
    url: "soundtrack/camila-cabello-senorita.mp3"
  },
  {
    title: "Ed Sheeran & Justin Bieber - I Don't Care",
    artists: ["Shawn Mendes", "Ed sheran", "Sam Smith"],
    genre: "Pop",
    answer: "Ed sheran",
    url: "soundtrack/ed-sheeran-justin-bieber-i-dont-care-official-video.mp3"
  },

  {
    title: "Mariah Carey - Always Be My Baby",
    artists: ["Gwen Stefani", "Mariah Carey", "Whitney Houston"],
    genre: "Pop",
    answer: "Mariah Carey",
    url: "soundtrack/mariah-carey-always-be-my-baby.mp3"
  },
  {
    title: "Los Del Rio - La Macarena",
    artists: ["Los Del Rio", "Village People", "Ricky Martin"],
    genre: "Pop",
    answer: "Los Del Rio",
    url: "soundtrack/los-del-rio-la-macarena-version-original.mp3"
  },
  {
    title: "Lenny Kravitz - It Ain't Over Til It's Over",
    artists: ["Lionel Ritchie", "Lenny Kravitz", "Seal"],
    genre: "Pop",
    answer: "Lenny Kravitz",
    url:
      "soundtrack/lenny-kravitz-it-aint-over-til-its-over-official-music-video.mp3"
  },
  {
    title: "Beyoncé - Single Ladies",
    artists: ["Rihanna", "Beyonce", "Alicia Keys"],
    genre: "RnB-RAP",
    answer: "Beyonce",
    url: "soundtrack/beyonce-drunk-in-love-explicit-ft-jay-z.mp3"
  },
  {
    title: "Lauryn Hill - Ex-Factor",
    artists: ["Lauren Hill", "The Fugees", "Erykah Badu"],
    genre: "RnB-RAP",
    answer: "Lauren Hill",
    url: "soundtrack/lauryn-hill-ex-factor-official-video.mp3"
  },
  {
    title: "Bruno Mars - Treasure",
    artists: ["Justin Timberlake", "Bruno Neptune", "Bruno Mars"],
    genre: "RnB-RAP",
    answer: "Bruno Mars",
    url: "soundtrack/bruno-mars-treasure-official-video.mp3"
  },
  {
    title: "Amy Winehouse - Valerie",
    artists: ["Amy Winehouse", "Whitney Houston", "Mary J Blige"],
    genre: "Soul",
    answer: "Amy Winehouse",
    url: "soundtrack/amy-winehouse-valerie.mp3"
  },
  {
    title: "Will Smith - Men In Black",
    artists: ["Will I Am", "Le Prince de Bel Air", "Will Smith"],
    genre: "RnB-RAP",
    answer: "Will Smith",
    url: "soundtrack/will-smith-men-in-black-video-version.mp3"
  },
  {
    title: "Missy Elliot",
    artists: ["Michelle Obama", "Missy Elliot", "Both"],
    genre: "RnB-RAP",
    answer: "Missy Elliot",
    url: "soundtrack/first-lady-michelle-obama-carpool-karaoke.mp3"
  },
  {
    title: "The Notorious B.I.G. - Juicy",
    artists: ["2PAC", "P. Daddy", "The Notorious B.I.G"],
    genre: "RnB-RAP",
    answer: "The Notorious B.I.G",
    url: "soundtrack/the-notorious-big-juicy-official-music-video.mp3"
  },
  {
    title: "Supremes - Where Did Our Love Go",
    artists: ["The Supremes", "Sister Sledge", "Diana Ross"],
    genre: "Soul",
    answer: "The Supremes",
    url: "soundtrack/supremes-where-did-our-love-go-1964-hd-0815007.mp3"
  },
  {
    title: "Marvin Gaye - Ain't No Mountain High Enough",
    artists: ["James Brown", "Otis Reading", "Marvin Gaye"],
    genre: "Soul",
    answer: "Marvin Gaye",
    url: "soundtrack/aint-no-mountain-high-enough.mp3"
  },
  {
    title: "Kool & The Gang - Celebration",
    artists: ["Stevie Wonder", "Kool & The Gang", "Earth, Wind & Fire"],
    genre: "Soul",
    answer: "Kool & The Gang",
    url: "soundtrack/kool-the-gang-celebration-official-video.mp3"
  },
  {
    title: "MC Hammer - U Can't Touch This",
    artists: ["MC Hammer", "Will Smith", "Scatman"],
    genre: "RnB-RAP",
    answer: "MC Hammer",
    url: "soundtrack/mc-hammer-u-cant-touch-this-official-video.mp3"
  },
  {
    title: "Prince - Kiss",
    artists: ["Mickael Jackson", "Queen", "Prince"],
    genre: "Pop",
    answer: "Prince",
    url: "soundtrack/prince-kiss-official-music-video.mp3"
  },
  {
    title: "Aretha Franklin - Think",
    artists: ["Diana Ross", "Tina Turner", "Aretha Franklin"],
    genre: "Soul",
    answer: "Aretha Franklin",
    url:
      "soundtrack/aretha-franklin-think-feat-the-blues-brothers-1080p-full-hd.mp3"
  },
  {
    title: "The Temptations - My Girl",
    artists: ["Marvin Gaye", "The Temptations", "Ray Charles"],
    genre: "Soul",
    answer: "The Temptations",
    url: "soundtrack/my-girl.mp3"
  }
];

export default songs;
