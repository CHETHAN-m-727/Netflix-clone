import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";
const token = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGUyNzYwMDYxYWI5MzFjNzEyN2RkZWRhMGU3MzUxZCIsInN1YiI6IjY1YjkwOWQwOGMzMTU5MDE2MmYxYzY4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cYTEMhFxV4lM3xVnozToF7R-aWb4NrCeKcVXjTTT3Sg`; // Replace 'YOUR_ACCESS_TOKEN' with your actual access token

const instance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

const getTrendingMovies = async () => {
  try {
    const response = await instance.get("/trending/movie/day");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default instance;
