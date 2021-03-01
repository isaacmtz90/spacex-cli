const axios = require('axios');
const apiURL = 'https://api.spacexdata.com/v3/';


module.exports = {
  queryResourceAll: (category) => {
    const queryString = `${apiURL}${category}`;
    return axios.get(queryString);
    // .then((resp) => resp.json())
    //   .catch((err)=>err);
  },
  queryResourceOne: (category, id) => {
      const queryString = `${apiURL}${category}/${id}`;
      return axios.get(queryString);
      // .then((resp) => resp.json())
      // .catch((err)=>err);
  }
}
