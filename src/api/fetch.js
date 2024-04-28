const URL = process.env.REACT_APP_API_BASE_URL;
// Shows

// Create
export function createShow(show) {
  return;
}

// Delete
export function destroyShow(id) {
  return;
}

// Index/Get all
export function getAllShows() {
  return fetch(`${URL}/shows`).then((response) => response.json());
}

  /*
    fetch(get api)
      .then(convert api data to json)
      .then(get data and do something)
      .catch(catches errors)
  */

// Show/Get one
export function getOneShow(id) {
  return;
}

// Update
export function updateShow(id, show) {
  return;
}

// Movies

export function getAllMovies() {
  return;
}
