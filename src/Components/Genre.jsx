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
  },
  horror: {
    pageTitle: "Horror",
    genreHeading: "Enter if You Dare 👻",
    genreDiscription:
      "Darkness awaits in places where shadows whisper, and unseen terrors lie just beyond your sight. The horror genre calls to the brave and curious, those who aren’t afraid to confront the unknown. Here, twisted tales of haunting spirits, cursed places, and primal fears take hold. Step carefully and prepare for a journey through stories that chill, disturb, and leave you looking over your shoulder long after you close the book.....",
    genreColor: "#DBB5B5",
    genreTopPicksHeading: "Fearful Favorites: Essential Horror Reads",
  },
  mystery: {
    pageTitle: "Mystery",
    genreHeading: "Unlock the Secrets Within 🔎",
    genreDiscription:
      "Welcome to the world of hidden clues, elusive suspects, and thrilling twists. Mystery beckons you to follow a trail of breadcrumbs, to decipher cryptic puzzles and uncover secrets that others would rather keep buried. With every turn of the page, suspense mounts, and revelations loom in the shadows. Put on your detective hat and embark on an adventure where every clue brings you closer to the truth.....",
    genreColor: "#FFC6AC",
    genreTopPicksHeading: "Unravel the Secrets: Top Mystery Novels",
  },
  romance: {
    pageTitle: "Romance",
    genreHeading: "Find Love in Every Chapter 💖",
    genreDiscription:
      "Here lies a world of tender connections, stolen glances, and hearts intertwined. Romance transports us to places where love blossoms in unexpected moments and passion defies all odds. From chance encounters to timeless bonds, these stories of the heart promise warmth, laughter, and the undeniable joy of love’s journey. Lose yourself in tales that celebrate the beauty of human connection and the thrill of happily-ever-after.....",
    genreColor: "#FF9B9B",
    genreTopPicksHeading: "Heartfelt Tales: Romance to Swoon Over",
  },
  scifi: {
    pageTitle: "Sci-fi",
    genreHeading: "Explore the Cosmos and Beyond 👽",
    genreDiscription:
      "Step into a future filled with incredible technologies, alien worlds, and realities beyond our own. Science fiction invites you to dream of what’s possible, from intergalactic adventures to mind-bending discoveries at the edge of science. Enter a realm where human imagination pushes the boundaries of existence, and where the wonders of the universe await. Prepare for journeys that defy the laws of nature and explore the mysteries of the unknown.....",
    genreColor: "#D2E0FB",
    genreTopPicksHeading: "Beyond the Stars: Sci-Fi Classics You’ll Love",
  },
  thriller: {
    pageTitle: "Thriller",
    genreHeading: "Brace Yourself for Heart-Pounding Suspense ⏰",
    genreDiscription:
      "Get ready for a whirlwind of high-stakes drama, gripping twists, and edge-of-your-seat tension. In the thriller world, danger lurks around every corner, and adrenaline flows with every word. Plunge into stories of daring escapes, dangerous encounters, and relentless pursuits. With each page turn, suspense mounts, leading you to moments of breathless anticipation and heart-racing excitement. Are you ready for the thrill???",
    genreColor: "#FFF6E3",
    genreTopPicksHeading: "Edge of Your Seat: Gripping Thriller Must-Reads",
  },
};
