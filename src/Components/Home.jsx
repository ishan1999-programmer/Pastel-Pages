import SearchPage from "./SearchPage";
import HomePage from "./HomePage";

const Home = ({ searchValue }) => {
  return (searchValue ? <SearchPage searchValue={searchValue} /> : <HomePage />);
};

export default Home;
