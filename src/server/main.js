import express, { response } from "express";
import fetch from "node-fetch";
import ViteExpress from "vite-express";
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = 3000;

// TMDB API KEY
const key = process.env.VITE_TMDB_API_KEY;



// TMDB API OPTIONS
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${key}`
  }
};

// 
let trending;
let lastTrendingFetched;
// FETCHING ALL TRENDING MOVIES AND TVSHOWS
app.get("/trending", (req, res) => {
  // CHECKS IF ITS BEEN LONGGER THAN A DAY SINCE LAST FETCHED
  if (!lastTrendingFetched || Date.now() - lastTrendingFetched > 86400000) {
    // SETS IT TO THE LAST TIME WE FETCHED 
    lastTrendingFetched = Date.now();
    fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
      .then(response => response.json())
      .then(response => {
        trending = response;
        res.json(trending);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
      });
  } else {
    // IF ITS NOT LONGER THAN A DAY USE CACHE
    res.json(trending);
    console.log("cache trending")
  }
});

// 
let populartv;
let lastpopulartvFetched

// Fetching the latest popular tv
app.get("/populartv", (req, res) => {
  // CHECKS IF ITS BEEN LONGGER THAN A DAY SINCE LAST FETCHED
  if (!lastpopulartvFetched || Date.now() - lastpopulartvFetched > 86400000) {
    // SETS IT TO THE LAST TIME WE FETCHED 
    lastpopulartvFetched = Date.now();
    fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => {
        populartv = response;
        res.json(populartv);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
      });
  } else {
    // IF ITS NOT LONGER THAN A DAY USE CACHE
    res.json(populartv);
    console.log("cache populartv")
  }
});

// 
let nowplaying;
let lastnowPlayingFetched;

// Fethcing the now Playing 
app.get("/nowplaying", (_req, res) => {

  if (!lastnowPlayingFetched || Date.now() - lastnowPlayingFetched > 86400000) {
    lastnowPlayingFetched = Date.now()
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => {
        nowplaying = response;
        res.json(nowplaying)
      })
      .catch(err => res.status(500).json({ error: "Internal Server Error" }));

  } else {
    res.json(nowplaying);
    console.log("cache now playting")

  }
})


ViteExpress.listen(app, PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
