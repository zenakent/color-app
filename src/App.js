import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './component/Palette';
import seedColors from './seedColors';

import { generatePalette } from './colorHelpers';
function App() {
	return (
		<Switch>
			<Route exact path="/" render={() => <h1>ROOT</h1>} />
			<Route exact path="/palette/:id" render={() => <h1>palette id</h1>} />
			{/* <div className="App">
				<Palette palette={generatePalette(seedColors[4])} />
			</div> */}
		</Switch>
	);
}

export default App;
