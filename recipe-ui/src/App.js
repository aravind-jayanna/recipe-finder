import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Modal from "./components/modal";
import {
  RecipeListContainer,
  RecipeContainer,
  IngredientsText,
  SeeMoreText,
  NoRecipesMessage,
  WelcomeMessage,
  AppIcon,
  Header,
  RecipeNameContainer,
  RecipeName,
  CaloriesBox,
  PageTitle,
  SearchFilterBox,
  SearchBar,
  Input,
  Button,
  Filters,
  Main,
  PaginationContainer,
  Footer,
} from "./components/styleHelper";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ hasSearched }) =>
    hasSearched ? "none" : "url(/lp.jpeg) no-repeat center center fixed"};
  background-size: cover;
  background-attachment: fixed;
  position: relative;
`;

const RecipeComponent = ({ recipeObj }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const calories = recipeObj._source.calories
    ? `${recipeObj._source.calories} kcal`
    : "N/A";

  return (
    <>
      <RecipeContainer>
        <RecipeNameContainer>
          <RecipeName>{recipeObj._source.title}</RecipeName>
          <>{calories}</>
        </RecipeNameContainer>
        <CaloriesBox>
          Protein: {recipeObj._source.protein} g<br />
          Sodium: {recipeObj._source.sodium} g<br />
          Fat: {recipeObj._source.fat} g<br />
        </CaloriesBox>
        <SeeMoreText>Rating: {recipeObj._source.rating} </SeeMoreText>

        <IngredientsText onClick={handleOpenModal}>
          Click here to view Recipe
        </IngredientsText>
      </RecipeContainer>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={recipeObj._source.title}
        description={recipeObj._source.desc}
        ingredients={recipeObj._source.ingredients.map(
          (ingredient) => ingredient
        )}
        directions={recipeObj._source.directions.map((item) => item)}
      />
    </>
  );
};

const Home = () => {
  const [query, setQuery] = useState("");
  const [calorieRange, setCalorieRange] = useState([0, 10000]);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  const pageSize = 20;

  useEffect(() => {
    if (query) {
      fetchResults(page);
    }
  }, [query, calorieRange, page]);

  const fetchResults = async (pageNumber) => {
    setLoading(true);
    const start = (pageNumber - 1) * pageSize;
    try {
      const response = await axios.get("http://127.0.0.1:5000/search", {
        params: {
          title: query,
          min: calorieRange[0],
          max: calorieRange[1],
          start: start,
          size: pageSize,
        },
      });

      setResults(response.data);
      setLoading(false);
      setShowWelcomeMessage(false); // Hide welcome message after search
    } catch (error) {
      console.error("Error fetching results:", error);
      setLoading(false);
    }
  };

  const handleSearch = () => {
    setPage(1); // Reset to first page on new search
    fetchResults(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    fetchResults(newPage);
  };

  return (
    <Container hasSearched={!showWelcomeMessage}>
      <Header>
        <AppIcon src="/app-icon.svg" />
        <PageTitle>Recipe Finder</PageTitle>
        <SearchFilterBox>
          <SearchBar>
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for recipes..."
            />
            <Button onClick={handleSearch} disabled={loading}>
              Search
            </Button>
          </SearchBar>
          <Filters>
            <div className="calorie-range">
              <label>Calories Range : </label>
              <input
                type="number"
                value={calorieRange[0]}
                onChange={(e) =>
                  setCalorieRange([parseInt(e.target.value), calorieRange[1]])
                }
                min="0"
              />
              <span> - </span>
              <input
                type="number"
                value={calorieRange[1]}
                onChange={(e) =>
                  setCalorieRange([calorieRange[0], parseInt(e.target.value)])
                }
                min="0"
              />
            </div>
          </Filters>
        </SearchFilterBox>
      </Header>
      <Main>
        {showWelcomeMessage ? (
          <WelcomeMessage>
            Welcome to Recipe Finder! Start by typing a recipe name in the
            search box above.
          </WelcomeMessage>
        ) : loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {" "}
            <RecipeListContainer>
              {results.length > 0 ? (
                results.map((recipeObj, index) => (
                  <RecipeComponent key={index} recipeObj={recipeObj} />
                ))
              ) : (
                <NoRecipesMessage>
                  No recipes found. Try a different search.
                </NoRecipesMessage>
              )}
            </RecipeListContainer>
            {results.length >= pageSize && (
              <PaginationContainer>
                <button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1 || loading}
                >
                  Previous
                </button>
                <span> Page {page} </span>
                <button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={results.length < pageSize || loading}
                >
                  Next
                </button>
              </PaginationContainer>
            )}
          </>
        )}
      </Main>
      <Footer>&copy; 2024 Recipe Finder. All rights reserved.</Footer>
    </Container>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
