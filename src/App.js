import React from 'react';
import Palette from './component/Palette';
import seedColors from './seedColors';

function App() {
	return (
		<div className="App">
			<Palette pallete={seedColors[4]} />
		</div>
	);
}

export default App;
