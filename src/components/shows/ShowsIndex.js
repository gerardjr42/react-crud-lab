//react methods
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllShows } from "../../api/fetch";

//components
import ErrorMessage from "../errors/ErrorMessage";
import ShowListing from "./ShowListing";

//import css and functionality
import "./ShowsIndex.css";



export default function ShowsIndex() {
  const [loadingError, setLoadingError] = useState(false);
  const [shows, setShows] = useState([]);
  const [allShows, setAllShows] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  //Make a function that will grab our input value
  function handleTextChange(e) {
    const title = e.target.value;
    //Add our filtered function as a ternary. If input value has length, meaning user inputted something, then run the filteredShow function, else do nothing
    const result = title.length ? filterShows(title, allShows) : allShows;
    setSearchTitle(title);
    setShows(result);
  }

  //Let's check if our searchTitle is holding our input value
  // console.log(searchTitle);

  //Create a function that will filter out shows based on our search input value
  function filterShows(search, shows) {
    return shows.filter((show) => {
      return show.title.toLowerCase().match(search.toLowerCase());
    })
  }

  useEffect(() => {
    getAllShows()
      .then((response) => {
        setShows(response);
        setAllShows(response);
        setLoadingError(false);
      })
      .catch((error) => {
        console.error(error);
        setLoadingError(true);
      })
  }, []);
  
  //Above grabs our json data and saves it to shows. Let's console log this to check if we actually got the data
  // console.log(shows);

  return (
    <div>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section className="shows-index-wrapper">
          <h2>All Shows</h2>
          <button>
            <Link to="/shows/new">Add a new show</Link>
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search Shows:
            <input
              type="text"
              value={searchTitle}
              id="searchTitle"
              onChange={handleTextChange}
            />
          </label>
          <section className="shows-index">
            {/* <!-- ShowListing components --> */}
            {shows.map((show) => {
              return <ShowListing show={show} key={show.id} />
            })}
          </section>
        </section>
      )}
    </div>
  );
}
