import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="location"
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
