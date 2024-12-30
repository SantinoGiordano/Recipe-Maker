'use client'
import React, { useState } from 'react';
import food from '@/data/food.json'

// Define the types for the data items
interface Food {
  name: string;
  steps:string,
  ingredients:string
 
}

const SearchAnimal: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredFood, setFilteredFood] = useState<Food[]>(food);

  // Function to handle the search logic
  const searchAnimal = (input: string) => {
    const lowerCaseInput = input.toLowerCase();
    const filtered = food.filter((data) =>
      data.name.toLowerCase().includes(lowerCaseInput)
    );
    setFilteredFood(filtered);
  };

  // Handle the change in the search input
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
    searchAnimal(value); // Filter animals as you type
  };

  return (
    <div>
      <input
        id="searchbar"
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search food..."
      />
      <ul id="list-holder">
        {filteredFood.map((data, index) => (
          <li key={index}>
            {data.ingredients}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchAnimal;
