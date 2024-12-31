'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import food from '@/data/food.json';

// Define the types for the data items
interface Food {
  name: string;
  ingredients: string;
  steps: { step_number: number; description: string }[];
}

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredFood, setFilteredFood] = useState<Food[]>(food);
  const router = useRouter(); // Initialize useRouter

  // Function to handle the search logic
  const Search = (input: string) => {
    const lowerCaseInput = input.toLowerCase();
    const filtered = food.filter((data) =>
      data.name.toLowerCase().includes(lowerCaseInput)
    );
    setFilteredFood(filtered);
  };

  // Handle the change in the search input
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value); // Store the query as entered
    Search(value); // Filter items based on typed query
  };

  // Function to handle the click and navigate to the dynamic page
  const handleItemClick = (id: string) => {
    router.push(`/about/${id}`); // Navigate to the dynamic route
  };

  // Function to decode the search query (remove % signs)
  const decodeSearchQuery = (query: string) => {
    return decodeURIComponent(query); // Decodes URL-encoded characters like %20
  };

  return (
    <div className="p-8 space-y-6">
      
      <div className="flex justify-center items-center">
        <input
          id="searchbar"
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search food..."
          className="w-full max-w-lg p-3 rounded-md shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
        />
      </div>
      
      
      <ul id="list-holder" className="space-y-4">
        {filteredFood.map((data, index) => (
          <li key={index} className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-md hover:bg-gray-50 transition ease-in-out duration-200">
            
            <p
              onClick={() => handleItemClick(data.name)}
              className="text-lg font-semibold text-gray-800 hover:text-blue-600 cursor-pointer"
            >
              {decodeSearchQuery(data.name)} 
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
