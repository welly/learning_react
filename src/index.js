import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBubHtngYFHjN8MG9fovgEyXX2bW-Mql_U';
 
// Create a new component.
const App = function() {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// Take this component's generated html and put it on the page.

ReactDOM.render(<App />, document.querySelector('.container'));
