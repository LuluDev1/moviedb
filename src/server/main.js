import express from "express";
import fetch from "node-fetch";
import ViteExpress from "vite-express";
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = 3000;

// TMDB API KEY
const key = process.env.VITE_TMDB_API_KEY;

let trending;
let lastTrendingFetched;

// TMDB API OPTIONS
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${key}`
  }
};

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
    console.log("cache")
  }
});

ViteExpress.listen(app, PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
