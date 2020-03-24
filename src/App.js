import React, { useState } from 'react';
import DisplayHeading from '@tds/core-display-heading'
import Search from './components/Search';
import Movies from './components/Movies';
import axios from 'axios';
function App() {


  const [state, setState] = useState({
    searchString: '',
    results: []
  })

  const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=56f4036e';

  const handleInput = e => {
    let movieSearchString = e.target.value;
    setState(prevState => {
      return { ...prevState, searchString: movieSearchString }
    });
  }

  const search = (e) => {
    if (e.key === 'Enter') {
      axios(apiUrl + '&s=' + state.searchString).then(({ data }) => {
        console.log(data)
        if (data.Response == 'True') {
          let results = data.Search;
          console.log(results);
          setState(prevState => {
            return {
              ...prevState,
              results: results,
            }
          })
          console.log('state', state)
        } else if (data.Response == 'False') {
          console.log('error')

        }
      })
    }
  }




  return (
    <div>
      <header>
        <DisplayHeading>Movie Database</DisplayHeading>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Movies results={state.results} />

      </main>
    </div >
  );
}


export default App;
