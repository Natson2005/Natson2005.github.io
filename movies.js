// Edit this file to add, move or remove titles. Nothing else needs to change.
//
// t     title
// d     release date, YYYY-MM-DD (the countdown runs to 00:00 on that day, in the visitor's time zone)
// k     "movie" or "tv"
// g     genres: use "Action", "Fantasy", "Sci-Fi", "Adventure" (a title can have several)
// by    one short line: studio, director or platform, and any date change
// clash optional: title of another big release opening the same day
//
// Dates come from studio announcements and trade press and can move. Last checked: 25 Oct 2026.

window.UPDATED = "25 October 2026";

window.RELEASES = [
  // In cinemas (opened in October 2026)
  { t: "Street Fighter", d: "2026-10-16", k: "movie", g: ["Action"], by: "Paramount and Capcom. PG-13 martial arts adaptation." },
  { t: "Whalefall", d: "2026-10-16", k: "movie", g: ["Adventure"], by: "20th Century Studios. Open-sea survival adventure." },
  { t: "Clayface", d: "2026-10-23", k: "movie", g: ["Action", "Sci-Fi"], by: "Warner Bros. and DC Studios. R-rated body horror." },
  { t: "Wildwood", d: "2026-10-23", k: "movie", g: ["Fantasy", "Adventure"], by: "Laika. Stop-motion fantasy directed by Travis Knight." },

  // November 2026
  { t: "Ghost Soldier", d: "2026-11-06", k: "movie", g: ["Action"], by: "Sony. Jim Caviezel as an off-grid ex-Special Forces weapons designer, directed by William Eubank." },
  { t: "Godzilla Minus Zero", d: "2026-11-06", k: "movie", g: ["Action", "Sci-Fi", "Adventure"], by: "GKIDS. Limited release." },
  { t: "The Cat in the Hat", d: "2026-11-06", k: "movie", g: ["Fantasy", "Adventure"], by: "Warner Bros. Animated family adventure." },
  { t: "The Rings of Power, Season 3", d: "2026-11-11", k: "tv", g: ["Fantasy", "Adventure"], by: "Prime Video. Four episodes on day one, then two a week to Nov 25." },
  { t: "The Hunger Games: Sunrise on the Reaping", d: "2026-11-20", k: "movie", g: ["Action", "Adventure", "Sci-Fi"], by: "Lionsgate. Prequel set at the 50th Games, in IMAX." },
  { t: "Hexed", d: "2026-11-25", k: "movie", g: ["Fantasy", "Adventure"], by: "Walt Disney Animation Studios." },
  { t: "Blade Runner 2099", d: "2026-11-25", k: "tv", g: ["Sci-Fi", "Action"], by: "Prime Video. Eight-episode limited series, all released at once." },

  // December 2026
  { t: "Violent Night 2", d: "2026-12-04", k: "movie", g: ["Action"], by: "Universal. Holiday action sequel." },
  { t: "Avengers: Doomsday", d: "2026-12-18", k: "movie", g: ["Action", "Sci-Fi", "Adventure"], by: "Marvel Studios. Directed by Anthony and Joe Russo.", clash: "Dune: Part Three" },
  { t: "Dune: Part Three", d: "2026-12-18", k: "movie", g: ["Sci-Fi", "Adventure", "Action"], by: "Warner Bros. and Legendary. Denis Villeneuve closes his trilogy.", clash: "Avengers: Doomsday" },
  { t: "Jumanji: Open World", d: "2026-12-25", k: "movie", g: ["Adventure", "Fantasy", "Action"], by: "Sony. Moved from Dec 11 to Christmas Day." },

  // 2027
  { t: "Children of Blood and Bone", d: "2027-01-15", k: "movie", g: ["Fantasy", "Action", "Adventure"], by: "Directed by Gina Prince-Bythewood, from Tomi Adeyemi's novel." },
  { t: "The Beekeeper 2", d: "2027-01-15", k: "movie", g: ["Action"], by: "Jason Statham returns. Directed by Timo Tjahjanto." },
  { t: "Fing!", d: "2027-01-15", k: "movie", g: ["Sci-Fi", "Adventure"], by: "Family sci-fi adventure with Taika Waititi and Mia Wasikowska." },
  { t: "Karoshi", d: "2027-01-29", k: "movie", g: ["Action"], by: "Action thriller with Isabel May, Giancarlo Esposito and Cynthia Erivo." },
  { t: "Narnia: The Magician's Nephew", d: "2027-02-12", k: "movie", g: ["Fantasy", "Adventure"], by: "Greta Gerwig. Moved from Thanksgiving 2026. IMAX previews Feb 10, Netflix on Apr 2." },
  { t: "Sonic the Hedgehog 4", d: "2027-03-19", k: "movie", g: ["Action", "Adventure"], by: "Paramount. Fourth Sonic film." },
  { t: "Godzilla x Kong: Supernova", d: "2027-03-26", k: "movie", g: ["Sci-Fi", "Action", "Adventure"], by: "Directed by Grant Sputore." },
  { t: "Day Drinker", d: "2027-03-26", k: "movie", g: ["Action"], by: "Action thriller with Johnny Depp and Penélope Cruz." },
  { t: "Spaceballs: The New One", d: "2027-04-23", k: "movie", g: ["Sci-Fi"], by: "Sci-fi spoof sequel directed by Josh Greenbaum, with Mel Brooks." },
  { t: "The Legend of Zelda", d: "2027-04-30", k: "movie", g: ["Fantasy", "Adventure"], by: "Sony and Nintendo. Moved up a week from May 7." },
  { t: "F.A.S.T.", d: "2027-05-14", k: "movie", g: ["Action"], by: "Action crime thriller written by Taylor Sheridan." },
  { t: "Star Wars: Starfighter", d: "2027-05-28", k: "movie", g: ["Sci-Fi", "Adventure"], by: "Lucasfilm. Ryan Gosling and Amy Adams, directed by Shawn Levy." },
  { t: "John Rambo", d: "2027-06-04", k: "movie", g: ["Action"], by: "Noah Centineo and David Harbour." },
  { t: "How to Train Your Dragon 2", d: "2027-06-11", k: "movie", g: ["Fantasy", "Adventure", "Action"], by: "Universal and DreamWorks. Live-action sequel." },
  { t: "Spider-Man: Beyond the Spider-Verse", d: "2027-06-25", k: "movie", g: ["Action", "Adventure", "Sci-Fi"], by: "Sony Pictures Animation. Moved from June 4." },
  { t: "Shrek 5", d: "2027-06-30", k: "movie", g: ["Fantasy", "Adventure"], by: "Universal and DreamWorks Animation." },
  { t: "Man of Tomorrow", d: "2027-07-09", k: "movie", g: ["Action", "Sci-Fi", "Adventure"], by: "DC Studios. James Gunn's Superman sequel." },
  { t: "Silo, Season 4", d: "2027-07-09", k: "tv", g: ["Sci-Fi"], by: "Apple TV. Final season." },
  { t: "A Minecraft Movie: Squared", d: "2027-07-23", k: "movie", g: ["Adventure", "Fantasy", "Action"], by: "Warner Bros. Jack Black and Jason Momoa return." },
  { t: "A Quiet Place Part III", d: "2027-07-30", k: "movie", g: ["Sci-Fi"], by: "Paramount. Written and directed by John Krasinski." },
  { t: "Jason Statham Stole My Bike", d: "2027-08-06", k: "movie", g: ["Action"], by: "Action comedy directed by David Leitch." },
  { t: "Shiver", d: "2027-08-13", k: "movie", g: ["Sci-Fi", "Action"], by: "Keanu Reeves, directed by Tim Miller." },
  { t: "Teenage Mutant Ninja Turtles: Mutant Mayhem 2", d: "2027-08-13", k: "movie", g: ["Action", "Adventure"], by: "Animated sequel." },
  { t: "The Batman Part II", d: "2027-10-01", k: "movie", g: ["Action"], by: "Warner Bros. Matt Reeves, with Robert Pattinson." },
  { t: "The Mummy: The Book of the Dead", d: "2027-10-15", k: "movie", g: ["Action", "Adventure", "Fantasy"], by: "Universal." },
  { t: "Untitled Daniels Event Film", d: "2027-11-19", k: "movie", g: ["Sci-Fi", "Action"], by: "Daniel Kwan and Daniel Scheinert, with Matt Damon." },
  { t: "Frozen III", d: "2027-11-24", k: "movie", g: ["Fantasy", "Adventure"], by: "Walt Disney Animation Studios." },
  { t: "Avengers: Secret Wars", d: "2027-12-17", k: "movie", g: ["Action", "Sci-Fi", "Adventure"], by: "Marvel Studios.", clash: "The Hunt for Gollum" },
  { t: "The Lord of the Rings: The Hunt for Gollum", d: "2027-12-17", k: "movie", g: ["Fantasy", "Adventure"], by: "Warner Bros. Andy Serkis returns as Gollum.", clash: "Avengers: Secret Wars" }
];
