import React, { useState } from "react";
import GenreDisplay from "./GenreDisplay";

const Genre = ({ genre }) => {
  return <GenreDisplay currentGenre={genreObject[`${genre}`]} />;
};

export default Genre;

let genreObject = {
  fantasy: {
    pageTitle: "Fantasy",
    genreHeading: "Step into the Realm of Wonders 🏰",
    genreDiscription:
      "In a world where magic lingers in the air, heroes and mythical creatures await those daring enough to venture beyond the veil of the ordinary. From enchanted forests to ancient kingdoms, the realms of fantasy invite you to escape the mundane and enter lands where anything is possible. Journey through epic tales of wizards, dragons, and forgotten worlds, where the only limit is your imagination. Prepare yourself, for the adventure of a lifetime lies just beyond this page.....",
    genreColor: "#C9E9D2",
    genreTopPicksHeading: "Epic Journeys Await: Must-Read Fantasy Adventures",
    genreTopPicks: [
      {
        bookCover: "/harry-potter.jpg",
        title: "Harry Potter",
        writer: "J.K. Rowling",
        genre: "Fantasy",
        rating: "4.5 ⭐️",
      },
      {
        bookCover: "/hobbit.jpg",
        title: "The Hobbit",
        writer: "J.R.R. Tolkien",
        genre: "Fantasy",
        rating: "4.3 ⭐️",
      },
      {
        bookCover: "/got.jpg",
        title: "A Game of Thrones",
        writer: "George R.R. Martin",
        genre: "Fantasy",
        rating: "4.4 ⭐️",
      },
      {
        bookCover: "/court-of-thorns-and-roses.jpg",
        title: "A Court of Thorns and Roses",
        writer: "Sarah J. Maas",
        genre: "Fantasy",
        rating: "4.2 ⭐️",
      },
      {
        bookCover: "/six-of-crows.jpg",
        title: "Six of Crows",
        writer: "Leigh Bardugo",
        genre: "Fantasy",
        rating: "4.5 ⭐️",
      },
      {
        bookCover: "/name-of-the-wind.jpg",
        title: "The Name of the Wind",
        writer: "Patrick Rothfuss",
        genre: "Fantasy",
        rating: "4.5 ⭐️",
      },
      {
        bookCover: "/final-empire.jpg",
        title: "The Final Empire",
        writer: "Brandon Sanderson",
        genre: "Fantasy",
        rating: "4.5 ⭐️",
      },
      {
        bookCover: "/the-lightning-thief.jpg",
        title: "The Lightning Thief",
        writer: "Rick Riordan",
        genre: "Fantasy",
        rating: "4.3 ⭐️",
      },
      {
        bookCover: "/cruel-prince.jpg",
        title: "The Cruel Prince",
        writer: "Holly Black",
        genre: "Fantasy",
        rating: "4 ⭐️",
      },
      {
        bookCover: "/shadow-and-bone.jpg",
        title: "Shadow and Bone",
        writer: "Leigh Bardugo",
        genre: "Fantasy",
        rating: "4 ⭐️",
      },
    ],
    genreTopAuthors: [
      {
        authorCover: "/george-martin.jpg",
        authorName: "George R. R. Martin",
        authorDescription:
          "You know this New Jersey native as the author of the high fantasy series A Song of Ice and Fire— the inspiration for the global phenomenon that is HBO's Game of Thrones.",
      },
      {
        authorCover: "/seanan.webp",
        authorName: "Seanan McGuire",
        authorDescription:
          "With the urban fantasy October Daye series, the Wayward Children series, and many other works of fantasy to her name, Seanan McGuire is one of the most prolific authors currently working in the genre. ",
      },
      {
        authorCover: "/brandon.jpg",
        authorName: "Brandon Sanderson",
        authorDescription:
          "From finishing Robert Jordan’s Wheel of Time series to penning his wholly original works in the Cosmere universe, including the Stormlight Archive, Brandon Sanderson has a great talent for worldbuilding and epic fantasy.",
      },
      {
        authorCover: "/patrick.jpg",
        authorName: "Patrick Rothfuss",
        authorDescription:
          "With The Name of the Wind, he established a name for himself as a seriously talented writer of heroic fantasy.The Kingkiller Chronicle is such a sweeping, exciting adventure with a deeply imagined magic system",
      },
      {
        authorCover: "/JRR.jpg",
        authorName: "J.R.R. Tolkien",
        authorDescription:
          "Born John Ronald Reuel Tolkien, his surname has gone on to become synonymous with epic fantasy. The Lord of the Rings built many of the genre's main characteristics",
      },
    ],
    genreQuotes: [
      {
        quoteWriter: "Dr. Seuss",
        quote:
          "“Fantasy is a necessary ingredient in living, it's a way of looking at life through the wrong end of a telescope.”",
      },
      {
        quoteWriter: "Albert Einstein",
        quote:
          "“Imagination is everything. It is the preview of life's coming attractions.”",
      },
      {
        quoteWriter: "J.R.R. Tolkien",
        quote:
          "“Do not meddle in the affairs of wizards, for they are subtle and quick to anger.”",
      },
      {
        quoteWriter: "George R.R. Martin",
        quote:
          "“They can keep their heaven. When I die, I’d sooner go to Middle-earth.”",
      },
      {
        quoteWriter: "Lloyd Alexander",
        quote:
          "“Fantasy is hardly an escape from reality. It's a way of understanding it.”",
      },
    ],
    genreDidYouKnow:
      "Many fantasy novels draw from ancient mythologies! Authors like J.R.R. Tolkien and C.S. Lewis were inspired by Norse and Greek mythology, bringing age-old tales to life in magical new worlds!",
  },
  horror: {
    pageTitle: "Horror",
    genreHeading: "Enter if You Dare 👻",
    genreDiscription:
      "Darkness awaits in places where shadows whisper, and unseen terrors lie just beyond your sight. The horror genre calls to the brave and curious, those who aren’t afraid to confront the unknown. Here, twisted tales of haunting spirits, cursed places, and primal fears take hold. Step carefully and prepare for a journey through stories that chill, disturb, and leave you looking over your shoulder long after you close the book.....",
    genreColor: "#DBB5B5",
    genreTopPicksHeading: "Fearful Favorites: Essential Horror Reads",
    genreTopPicks: [
      {
        bookCover: "/shinning.jpg",
        title: "The Shinning",
        writer: "Stephen King",
        genre: "Horror",
        rating: "4.3 ⭐️",
      },
      {
        bookCover: "/dracula.jpg",
        title: "Dracula",
        writer: "Bram Stoker",
        genre: "Horror",
        rating: "4 ⭐️",
      },
      {
        bookCover: "/haunting-of-hill-house.jpg",
        title: "The Haunting of Hill House",
        writer: "Shirley Jackson",
        genre: "Horror",
        rating: "4 ⭐️",
      },
      {
        bookCover: "/mexican-gothic.jpg",
        title: "Mexican Gothic",
        writer: "Silvia Moreno",
        genre: "Horror",
        rating: "4.1 ⭐️",
      },
      {
        bookCover: "/exorcist.jpg",
        title: "The Exorcist",
        writer: "William Peter Blatty",
        genre: "Horror",
        rating: "4.2 ⭐️",
      },
      {
        bookCover: "/coraline.jpg",
        title: "Coraline",
        writer: "Neil Gaiman",
        genre: "Horror",
        rating: "4.1 ⭐️",
      },
      {
        bookCover: "/only-good-indians.jpg",
        title: "The Only Good Indians",
        writer: "Stephen Graham Jones",
        genre: "Horror",
        rating: "4 ⭐️",
      },
      {
        bookCover: "/tender-is-the-flesh.jpg",
        title: "Tender Is the Flesh",
        writer: "Agustina Bazterrica",
        genre: "Horror",
        rating: "4.3 ⭐️",
      },
      {
        bookCover: "/bird-box.jpg",
        title: "Bird Box",
        writer: "Josh Malerman",
        genre: "Horror",
        rating: "4.4 ⭐️",
      },
      {
        bookCover: "/heart-shaped-box.jpg",
        title: "Heart-Shaped Box",
        writer: "Joe Hill",
        genre: "Horror",
        rating: "4.3 ⭐️",
      },
    ],
    genreTopAuthors: [
      {
        authorCover: "/stephen.jpg",
        authorName: "Stephen King",
        authorDescription:
          "King of Horror! Stephen King is the prolific writer of dozens of horror novels, with a dash of mystery, paranormal, and a little sci-fi thrown in for good measure.",
      },
      {
        authorCover: "/grahams.jpg",
        authorName: "Stephen Graham Jones",
        authorDescription:
          "Stephen Graham Jones is a Blackfeet Native American author best known for his horror audiobooks, but his works are often experimental in nature, ranging from literary to pulp horror.",
      },
      {
        authorCover: "/jonathan.jpg",
        authorName: "Jonathan Maberry",
        authorDescription:
          "Beware! Once you step into Jonathan Maberry's postapocalyptic world, there’s no going back. Horror fans know nothing beats a classic, and Maberry's action-packed classic baddies—zombies—are best.",
      },
      {
        authorCover: "/joe.jpg",
        authorName: "Joe Hill",
        authorDescription:
          "Joe Hill is the son of Stephen King, and while he may not be quite as prolific as his father (yet!), he's written an impressive array of comic books and horror novels.",
      },
      {
        authorCover: "/silvia.jpg",
        authorName: "Silvia Moreno-Garcia",
        authorDescription:
          "Silvia Moreno-Garcia was born in Mexico and now lives in Canada, and although she's a prolific writer across all genres, it's only recently that she's become well-known for her horror.",
      },
    ],
    genreQuotes: [
      {
        quoteWriter: "Stephen King",
        quote:
          "“Alone. Yes, that's the key word, the most awful word in the English tongue. Murder doesn't hold a candle to it and hell is only a poor synonym.”",
      },
      {
        quoteWriter: "Joe Hill",
        quote:
          "“Horror was rooted in sympathy . . . in understanding what it would be like to suffer the worst.”",
      },
      {
        quoteWriter: "Clive Barker",
        quote:
          "“Horror fiction shows us that the control we believe we have is purely illusory, and that every moment we teeter on chaos and oblivion.”",
      },
      {
        quoteWriter: "Robert Bloch",
        quote:
          "“The shortest horror story: The last man on Earth sat alone in a room, there was a knock on the door.”",
      },
      {
        quoteWriter: "Shirley Jackson",
        quote:
          "“I am like a small creature swallowed whole by a monster, she thought, and the monster feels my tiny little movements inside.”",
      },
    ],
    genreDidYouKnow:
      "Horror stories tap into universal fears! Iconic monsters like vampires and zombies have origins in folklore, shaped by our deepest anxieties over death, the unknown, and transformation",
  },
  mystery: {
    pageTitle: "Mystery",
    genreHeading: "Unlock the Secrets Within 🔎",
    genreDiscription:
      "Welcome to the world of hidden clues, elusive suspects, and thrilling twists. Mystery beckons you to follow a trail of breadcrumbs, to decipher cryptic puzzles and uncover secrets that others would rather keep buried. With every turn of the page, suspense mounts, and revelations loom in the shadows. Put on your detective hat and embark on an adventure where every clue brings you closer to the truth.....",
    genreColor: "#FFC6AC",
    genreTopPicksHeading: "Unravel the Secrets: Top Mystery Novels",
    genreTopPicks: [
      {
        bookCover: "/murder-orient-express.jpg",
        title: "Murder on the Orient Express",
        writer: "Agatha Christie",
        genre: "Mystery",
        rating: "4.2 ⭐️",
      },
      {
        bookCover: "/dragon-tattoo.jpg",
        title: "The Girl with the Dragon Tattoo",
        writer: "Stieg Larsson",
        genre: "Mystery",
        rating: "4.2 ⭐️",
      },
      {
        bookCover: "/gone-girl.jpg",
        title: "Gone Girl",
        writer: "Gillian Flynn",
        genre: "Mystery",
        rating: "4.1 ⭐️",
      },
      {
        bookCover: "/girl-on-train.jpg",
        title: "The Girl on the Train",
        writer: "Paula Hawkins",
        genre: "Mystery",
        rating: "4 ⭐️",
      },
      {
        bookCover: "/da-vinci-code.jpg",
        title: "The Da Vinci Code",
        writer: "Dan Brown",
        genre: "Mystery",
        rating: "4.4 ⭐️",
      },
      {
        bookCover: "/silent-patient.jpg",
        title: "The Silent Patient",
        writer: "Alex Michaelides",
        genre: "Mystery",
        rating: "4.6 ⭐️",
      },
      {
        bookCover: "/one-of-us-lying.jpg",
        title: "One of Us Is Lying",
        writer: "Karen M. McManus ",
        genre: "Mystery",
        rating: "4.1 ⭐️",
      },
      {
        bookCover: "/inheritance-games.jpg",
        title: "The Inheritance Games",
        writer: "Jennifer Lynn Barnes",
        genre: "Mystery",
        rating: "4.2 ⭐️",
      },
      {
        bookCover: "/cuckoo-calling.jpg",
        title: "The Cuckoo's Calling",
        writer: "Robert Galbraith",
        genre: "Mystery",
        rating: "4 ⭐️",
      },
      {
        bookCover: "/angels-and-demons.jpg",
        title: "Angels and Demons",
        writer: "Dan Brown",
        genre: "Mystery",
        rating: "4.4 ⭐️",
      },
    ],
    genreTopAuthors: [
      {
        authorCover: "/arthur.jpg",
        authorName: "Arthur Conan Doyle",
        authorDescription:
          "Elementary, my dear Watson. A doctor-turned-writer, Sir Arthur is the man behind the famous detective Sherlock Holmes.",
      },
      {
        authorCover: "/stieg.jpg.webp",
        authorName: "Stieg Larsson",
        authorDescription:
          "A Swedish journalist, Larsson is best known for writing the Millennium trilogy starring Lisbeth Salander and Mikael Blomkvist.",
      },
      {
        authorCover: "/agatha.png",
        authorName: "Agatha Christie",
        authorDescription:
          "The English crime novelist wrote dozens of mysteries, and is best known for her beloved fictional detectives Hercule Poirot and Miss Marple. She paved the way for many women authors.",
      },
      {
        authorCover: "/alex.jpg",
        authorName: "Alex Michaelides",
        authorDescription:
          "The Silent Patient was his first novel and was the biggest-selling debut in the world in 2019. It spent more than a year on the New York Times bestseller list and sold in a record-breaking forty-nine countries.",
      },
      {
        authorCover: "/dan.jpg",
        authorName: "Dan Brown",
        authorDescription:
          "Dan Brown is the author of numerous #1 bestselling novels, including The Da Vinci Code, which has become one of the best selling novels of all time as well as the subject of intellectual debate among readers and scholars.",
      },
    ],
    genreQuotes: [
      {
        quoteWriter: "Anais Nin",
        quote:
          "“The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.”",
      },
      {
        quoteWriter: "Thomas Moore",
        quote:
          "“It is only through mystery and madness that the soul is revealed”",
      },
      {
        quoteWriter: "Cormac McCarthy",
        quote:
          "“Your heart's desire is to be told some mystery. The mystery is that there is no mystery.”",
      },
      {
        quoteWriter: "Derek Landy",
        quote:
          "“Every solution to every problem is simple. It's the distance between the two where the mystery lies.”",
      },
      {
        quoteWriter: "Oscar Wilde",
        quote:
          "“The true mystery of the world is the visible, not the invisible.”",
      },
    ],
    genreDidYouKnow:
      "The mystery genre exploded in popularity thanks to Agatha Christie and Arthur Conan Doyle. Their famous detectives, Hercule Poirot and Sherlock Holmes, changed the way we think about solving crimes in fiction!",
  },
  romance: {
    pageTitle: "Romance",
    genreHeading: "Find Love in Every Chapter 💖",
    genreDiscription:
      "Here lies a world of tender connections, stolen glances, and hearts intertwined. Romance transports us to places where love blossoms in unexpected moments and passion defies all odds. From chance encounters to timeless bonds, these stories of the heart promise warmth, laughter, and the undeniable joy of love’s journey. Lose yourself in tales that celebrate the beauty of human connection and the thrill of happily-ever-after.....",
    genreColor: "#FF9B9B",
    genreTopPicksHeading: "Heartfelt Tales: Romance to Swoon Over",
    genreTopPicks: [
      {
        bookCover: "/beach-read.jpg",
        title: "Beach Read",
        writer: "Emily Henry",
        genre: "Romance",
        rating: "4.2 ⭐️",
      },
      {
        bookCover: "/hating-game.jpg",
        title: "The Hating Game",
        writer: "Sally Thorne",
        genre: "Romance",
        rating: "4 ⭐️",
      },
      {
        bookCover: "/twilight.jpg",
        title: "Twilight",
        writer: "Stephenie Meyer",
        genre: "Romance",
        rating: "4.5 ⭐️",
      },
      {
        bookCover: "/kiss-quotient.jpg",
        title: "The Kiss Quotient",
        writer: "Helen Hoang",
        genre: "Romance",
        rating: "4.1 ⭐️",
      },
      {
        bookCover: "/ugly-love.jpg",
        title: "Ugly Love",
        writer: "Colleen Hoover",
        genre: "Romance",
        rating: "4.2 ⭐️",
      },
      {
        bookCover: "/me-before-you.jpg",
        title: "Me Before You",
        writer: "Jojo Moyes",
        genre: "Romance",
        rating: "4.3 ⭐️",
      },
      {
        bookCover: "/deal.jpg",
        title: "The Deal",
        writer: "Elle Kennedy",
        genre: "Romance",
        rating: "4.1 ⭐️",
      },
      {
        bookCover: "/selection.jpg",
        title: "The Selection",
        writer: "Kiera Cass",
        genre: "Romance",
        rating: "4 ⭐️",
      },
      {
        bookCover: "/twisted-love.jpg",
        title: "Twisted Love",
        writer: "Ana Huang",
        genre: "Romance",
        rating: "4.2 ⭐️",
      },
      {
        bookCover: "/love-theoretically.jpg",
        title: "Love, Theoretically",
        writer: "Emily Henry ",
        genre: "Romance",
        rating: "4.2 ⭐️",
      },
    ],
    genreTopAuthors: [
      {
        authorCover: "/emily.jpg",
        authorName: "Emily Henry",
        authorDescription:
          "Emily Henry is the #1 New York Times bestselling author of Book Lovers, People We Meet on Vacation, and Beach Read, as well as the forthcoming Happy Place.",
      },
      {
        authorCover: "/sally.jpg",
        authorName: "Sally Thorne",
        authorDescription:
          "Sally Thorne is the USA Today bestselling author of the office rom-com The Hating Game (2016). It is her debut novel that has sold in over twenty-five countries and is being made into a major motion picture.",
      },
      {
        authorCover: "/stephenie.webp",
        authorName: "Stephenie Meyer",
        authorDescription:
          "Stephenie Meyer is the author of the bestselling Twilight series, The Host, and The Chemist. Twilight was one of 2005's most talked about novels and within weeks of its release the book debuted at #5 on The New York Times bestseller list",
      },
      {
        authorCover: "/jojo.jpg",
        authorName: "Jojo Moyes",
        authorDescription:
          "Jojo Moyes is a British novelist. Moyes' novel Foreign Fruit won the Romantic Novelists' Association (RNA) Romantic Novel of the Year in 2004.",
      },
      {
        authorCover: "/helen.jpg",
        authorName: "Helen Hoang",
        authorDescription:
          "Helen Hoang is that shy person who never talks. Until she does. And the worst things fly out of her mouth. She read her first romance novel in eighth grade and has been addicted ever since. Her journey inspired THE KISS QUOTIENT.",
      },
    ],
    genreQuotes: [
      {
        quoteWriter: "Dr. Seuss",
        quote:
          "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
      },
      {
        quoteWriter: "Stephen Chbosky",
        quote: "“We accept the love we think we deserve.”",
      },
      {
        quoteWriter: "Lao Tzu",
        quote:
          "“Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.”",
      },
      {
        quoteWriter: "Sarah Dessen",
        quote:
          "“There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.”",
      },
      {
        quoteWriter: "Robert A. Heinlein",
        quote:
          "“Love is that condition in which the happiness of another person is essential to your own.”",
      },
    ],
    genreDidYouKnow:
      "Romance is one of the oldest and most widely read genres! Some of the first romance stories were written over a thousand years ago and continue to inspire modern tales of love and connection.",
  },
  scifi: {
    pageTitle: "Sci-fi",
    genreHeading: "Explore the Cosmos and Beyond 👽",
    genreDiscription:
      "Step into a future filled with incredible technologies, alien worlds, and realities beyond our own. Science fiction invites you to dream of what’s possible, from intergalactic adventures to mind-bending discoveries at the edge of science. Enter a realm where human imagination pushes the boundaries of existence, and where the wonders of the universe await. Prepare for journeys that defy the laws of nature and explore the mysteries of the unknown.....",
    genreColor: "#D2E0FB",
    genreTopPicksHeading: "Beyond the Stars: Sci-Fi Classics You’ll Love",
    genreTopPicks: [
      {
        bookCover: "/dune.jpg",
        title: "Dune",
        writer: "Frank Herbert",
        genre: "Sci-fi",
        rating: "4.3 ⭐️",
      },
      {
        bookCover: "/enders-game.jpg",
        title: "Ender's Game",
        writer: "Orson Scott Card",
        genre: "Sci-fi",
        rating: "4.3 ⭐️",
      },
      {
        bookCover: "/guide-to-galaxy.jpg",
        title: "The Hitchhiker’s Guide to the Galaxy",
        writer: "Douglas Adams",
        genre: "Sci-fi",
        rating: "4.2 ⭐️",
      },
      {
        bookCover: "/martian.jpg",
        title: "The Martian",
        writer: "Andy Weir",
        genre: "Sci-fi",
        rating: "4.5 ⭐️",
      },
      {
        bookCover: "/ready-player-one.jpg",
        title: "Ready Player One",
        writer: "Ernest Cline",
        genre: "Sci-fi",
        rating: "4.3 ⭐️",
      },
      {
        bookCover: "/f451.jpg",
        title: "Fahrenheit 451",
        writer: "Ray Bradbury",
        genre: "Sci-fi",
        rating: "4 ⭐️",
      },
      {
        bookCover: "/1984.jpg",
        title: "1984",
        writer: "George Orwell",
        genre: "Sci-fi",
        rating: "4.7 ⭐️",
      },
      {
        bookCover: "/hunger-games.jpg",
        title: "The Hunger Games",
        writer: "Suzanne Collins",
        genre: "Sci-fi",
        rating: "4.4 ⭐️",
      },
      {
        bookCover: "/foundation.jpg",
        title: "Foundation",
        writer: "Isaac Asimov",
        genre: "Sci-fi",
        rating: "4.6 ⭐️",
      },
      {
        bookCover: "/android-sheep.jpg",
        title: "Do Androids Dream of Electric Sheep?",
        writer: "Philip K. Dick",
        genre: "Sci-fi",
        rating: "4.1 ⭐️",
      },
    ],
    genreTopAuthors: [
      {
        authorCover: "/frank.webp",
        authorName: "Frank Herbert",
        authorDescription:
          "Franklin Patrick Herbert Jr. was an American science fiction author best known for the 1965 novel Dune and its five sequels. Though he became famous for his novels, he also wrote short stories and worked as a newspaper journalist.",
      },
      {
        authorCover: "/issac.webp",
        authorName: "Isaac Asimov",
        authorDescription:
          "Works of prolific Russian-American writer Isaac Asimov include popular explanations of scientific principles, The Foundation Trilogy (1951-1953), and other volumes of fiction.",
      },
      {
        authorCover: "/george.webp",
        authorName: "George Orwell",
        authorDescription:
          "Eric Arthur Blair, better known by his pen name George Orwell, was an English author and journalist. Orwell is best known for the dystopian novel Nineteen Eighty-Four (published in 1949) and the satirical novella Animal Farm (1945)",
      },
      {
        authorCover: "/andy.webp",
        authorName: "Andy Weir",
        authorDescription:
          "ANDY WEIR built a career as a software engineer until the success of his first published novel, THE MARTIAN, allowed him to live out his dream of writing fulltime.",
      },
      {
        authorCover: "/douglas.JPG",
        authorName: "Douglas Adams",
        authorDescription:
          "Douglas Noel Adams was an English author, best known for The Hitchhiker's Guide to the Galaxy (HHGTTG). Originally a 1978 BBC radio comedy, The Hitchhiker's Guide to the Galaxy developed into a trilogy of five books.",
      },
    ],
    genreQuotes: [
      {
        quoteWriter: "Marie Lu",
        quote:
          "“Everything's science fiction until someone makes it science fact.”",
      },
      {
        quoteWriter: "Robyn Mundell",
        quote:
          "“Isn’t that what it means to be a scientist? To push the boundaries of the unknown? To bravely, actively explore the enormity of our universe ?”",
      },
      {
        quoteWriter: "Ray Bradbury",
        quote:
          "“Science fiction is the most important literature in the history of the world, because it's the history of ideas, the history of our civilization birthing itself.”",
      },
      {
        quoteWriter: "Frederik Pohl",
        quote:
          "“A good science fiction story should be able to predict not the automobile but the traffic jam.”",
      },
      {
        quoteWriter: "Ursula K. LeGuin",
        quote: "“Science fiction is not prescriptive; it is descriptive.”",
      },
    ],
    genreDidYouKnow:
      "Many sci-fi inventions inspired real-world technology! Concepts like space travel, robots, and even smart devices were imagined in sci-fi long before they became reality.",
  },
  thriller: {
    pageTitle: "Thriller",
    genreHeading: "Brace Yourself for Heart-Pounding Suspense ⏰",
    genreDiscription:
      "Get ready for a whirlwind of high-stakes drama, gripping twists, and edge-of-your-seat tension. In the thriller world, danger lurks around every corner, and adrenaline flows with every word. Plunge into stories of daring escapes, dangerous encounters, and relentless pursuits. With each page turn, suspense mounts, leading you to moments of breathless anticipation and heart-racing excitement. Are you ready for the thrill???",
    genreColor: "#FFF6E3",
    genreTopPicksHeading: "Edge of Your Seat: Gripping Thriller Must-Reads",
    genreTopPicks: [
      {
        bookCover: "/verity.jpg",
        title: "Verity",
        writer: "Colleen Hoover",
        genre: "Thriller",
        rating: "4.3 ⭐️",
      },
      {
        bookCover: "/housemaid.jpg",
        title: "The Housemaid",
        writer: "Freida McFadden",
        genre: "Thriller",
        rating: "4.5 ⭐️",
      },
      {
        bookCover: "/sharp-objects.jpg",
        title: "Sharp Objects",
        writer: "Gillian Flynn",
        genre: "Thriller",
        rating: "4.1 ⭐️",
      },
      {
        bookCover: "/guests-list.jpg",
        title: "The Guest List",
        writer: "Lucy Foley",
        genre: "Thriller",
        rating: "4 ⭐️",
      },
      {
        bookCover: "/good-girl-murder.jpg",
        title: "The Good Girl's Guide to Murder",
        writer: "Holly Jackson",
        genre: "Thriller",
        rating: "4.4 ⭐️",
      },
      {
        bookCover: "/women-window.jpg",
        title: "The Women in the Window",
        writer: "A.J. Finn",
        genre: "Thriller",
        rating: "4 ⭐️",
      },
      {
        bookCover: "/dark-matter.jpg",
        title: "Dark Matter",
        writer: "Blake Crouch",
        genre: "Thriller",
        rating: "4.3 ⭐️",
      },
      {
        bookCover: "/behind-closed-doors.jpg",
        title: "Behind Closed Doors",
        writer: "B.A. Paris",
        genre: "Thriller",
        rating: "4 ⭐️",
      },
      {
        bookCover: "/and-then-there-were-none.jpg",
        title: "And Then There Were None",
        writer: "Agatha Christie",
        genre: "Thriller",
        rating: "4.3 ⭐️",
      },
      {
        bookCover: "/pretty-girls.jpg",
        title: "Pretty Girls",
        writer: "Karin Slaughter",
        genre: "Thriller",
        rating: "4.1 ⭐️",
      },
    ],
    genreTopAuthors: [
      {
        authorCover: "/agatha.png",
        authorName: "Agatha Christie",
        authorDescription:
          "The English crime novelist wrote dozens of mysteries, and is best known for her beloved fictional detectives Hercule Poirot and Miss Marple. She paved the way for many women authors.",
      },
      {
        authorCover: "/gillian.jpg",
        authorName: "Gillian Flynn",
        authorDescription:
          "Gillian Flynn is an American author. She has so far written three novels, Sharp Objects, for which she won the 2007 Ian Fleming Steel Dagger for the best thriller, Dark Places, and her best-selling third novel Gone Girl.",
      },
      {
        authorCover: "/blake.jpg",
        authorName: "Blake Crouch",
        authorDescription:
          "Blake Crouch is a bestselling novelist and screenwriter. He is the author of the forthcoming novel, Dark Matter, for which he is writing the screenplay for Sony Pictures.",
      },
      {
        authorCover: "/lucy.jpg",
        authorName: "Lucy Foley",
        authorDescription:
          "She is the author of the murder mystery thrillers The Midnight Feast, The Paris Apartment, The Guest List and The Hunting Party — as well as the historical novels The Book of Lost and Found, The Invitation and Last Letter from Istanbul.",
      },
      {
        authorCover: "/freida.jpg",
        authorName: "Freida McFadden",
        authorDescription:
          "#1 New York Times, USA Today, Wall Street Journal, Publisher's Weekly, and Amazon Charts bestselling author Freida McFadden is an author who has penned multiple Kindle bestselling psychological thrillers and medical humor novels.",
      },
    ],
    genreQuotes: [
      {
        quoteWriter: "Terry Hayes,",
        quote:
          "“Nobody’s ever been arrested for a murder; they have only ever been arrested for not planning it properly.”",
      },
      {
        quoteWriter: "James Patterson",
        quote:
          "“Ultimately, a great thriller is a roller coaster ride. I like to think that's a promise I have never failed to keep, and one that I'd say has served my books well.”",
      },
      {
        quoteWriter: "Michael Eklund",
        quote:
          "“Every thriller needs a good bad guy; without a bad guy, there's no thriller.”",
      },
      {
        quoteWriter: "Gillian Flynn",
        quote:
          "“A great thriller, to me, is more about creating a sense of unease: a queasiness that comes with knowing something is not quite right.”",
      },
      {
        quoteWriter: "Lee Child",
        quote:
          "“The way to write a thriller is to ask a question at the beginning, and answer it at the end.”",
      },
    ],
    genreDidYouKnow:
      "Thrillers are known for their suspenseful twists! Writers often keep readers guessing with red herrings—clues that seem important but lead to surprising revelations and nail-biting tension.”",
  },
};
