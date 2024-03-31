import { useEffect, useState } from "react";

type City = {
  name: string;
};

type Region = {
  name: string;
};

type Pokemon = {
  name: string;
};

const useFetchData = () => {
  const [regions, setRegions] = useState<Region[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [dates, setDates] = useState([]);
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/region/");
        const data = await response.json();
        setRegions(data.results);
      } catch (error) {
        console.error("Error fetching regions:", error);
      }
    };

    fetchRegions();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/location/?limit=100"
        );
        const data = await response.json();
        setCities(data.results);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/?limit=300"
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.error("Error fetching pokemon:", error);
      }
    };

    fetchPokemon();
  }, []);

  useEffect(() => {
    const fetchDates = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/scheduling/date"
        );
        const data = await response.json();
        setDates(data);
      } catch (error) {
        console.error("Error fetching dates:", error);
      }
    };

    fetchDates();
  }, []);

  useEffect(() => {
    const fetchTimes = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/scheduling/time",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          }
        );
        const data = await response.json();
        setTimes(data);
      } catch (error) {
        console.error("Error fetching times:", error);
      }
    };

    fetchTimes();
  }, []);

  return {
    regions,
    cities,
    pokemon,
    dates,
    times,
  };
};

export default useFetchData;
