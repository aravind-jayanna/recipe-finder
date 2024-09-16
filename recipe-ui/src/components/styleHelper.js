import styled from "styled-components";

export const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 1.5s linear infinite;
  margin: 20px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ErrorMessage = styled.div`
  color: #e74c3c;
  background: #f9d6d5;
  border: 1px solid #e74c3c;
  padding: 10px;
  border-radius: 5px;
  margin: 20px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
`;

export const NoRecipesMessage = styled.div`
  color: #95a5a6;
  background: #ecf0f1;
  border: 1px solid #bdc3c7;
  padding: 10px;
  border-radius: 5px;
  margin: 20px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  text-align: center; /* Center text */
  font-size: 1.2rem;
  color: #666;
`;

export const WelcomeMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
  border: 2px solid #3498db; /* Border to highlight the message */
  padding: 30px;
  border-radius: 10px;
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
  max-width: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow for better visibility */
`;

export const ClickableHeader = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background: #3498db;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #2980b9;
  }
`;

export const RecipeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const RecipeContainer = styled.div`
  background-color: #ffffe0; /* Pale Yellow background */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 200px; /* Adjust height as needed */
  border: 2px solid #00b0f8;
  gap: 10px;
`;

export const IngredientsText = styled.div`
  display: flex
  font-size: 15px;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  color: green;
  text-align: center;
`;

export const SeeMoreText = styled(IngredientsText)`
  color: red;
  border: solid 1px red;
`;

export const Header = styled.header`
  display: flex;
  background-color: black;
  color: white;
  box-shadow: 0 3px 6px 0 #555;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center; /* Align items to the center vertically */
`;

export const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
`;

export const AppIcon = styled.img`
  width: 80pxpx;
  height: 80px;
  margin: 20px;
`;

export const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
  margin: 15px;
`;

export const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  width: 50%;
`;
export const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 15px;
  font-weight: bold;
`;

export const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 20px;
  text-align: left; /* Align title to the left */
  width: 100%; /* Full width for header */
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  width: 100%;
  max-width: 530px;
  gap: 10px;
  align-items: center;
`;

export const Input = styled.input`
  flex: 1; /* Make input take up available space */
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const SearchFilterBox = styled.div`
  background-color: grey;
  color: black;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  max-width: 580px;
  box-shadow: 0 3px 6px 0 #ddd;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align contents to the start (left) */
  gap: 15px;
  margin-right: 20px;
`;

export const Filters = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

export const Main = styled.main`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: cen0ter;
  margin-right: 15px;
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.8);
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center; /* Centers children horizontally */
  gap: 10px; /* Adds space between pagination controls */
  margin-top: 20px; /* Adds space above the container */
  padding: 10px; /* Adds padding inside the container */
  background: white; /* Sets background color */
  box-shadow: 0 3px 6px 0 #ddd; /* Adds a shadow for better visibility */
  width: 100%; /* Ensures the container takes full width */
`;

export const RecipeNameContainer = styled.div`
  background-color: #e6e6fa; /* Light color for highlighting */
  border-radius: 8px;
  padding: 5px;
  width: 100%;
  box-shadow: 0 3px 6px 0 #ddd;
`;

export const RecipeName = styled.h2`
  margin: 0;
  font-size: 1rem;
  color: black;
`;

export const CaloriesBox = styled.div`
  color: black;
  border-radius: 8px;
  padding: 5px;
  // width: fit-content;
  margin: 5px auto; /* Center align */
`;
