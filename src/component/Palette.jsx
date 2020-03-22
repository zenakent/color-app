import React, { Component } from 'react';
import Navbar from './Navbar';
import '../css/Palette.css';

import ColorBox from './ColorBox';

class Pallete extends Component {
	constructor(props) {
		super(props);

		this.state = { level: 500 };
		this.changeLevel = this.changeLevel.bind(this);
	}

	changeLevel(level) {
		this.setState({ level });
		console.log(level);
	}

	render() {
		const { colors } = this.props.palette;
		const { level } = this.state;
		const colorBoxes = colors[this.state.level].map((color, idx) => (
			<ColorBox key={idx} background={color.hex} name={color.name} />
		));
		return (
			<div className="Palette">
				<Navbar level={level} changeLevel={this.changeLevel} />
				{/* navbar goes here */}
				<div className="Palette-colors">{colorBoxes}</div>
				{/* footer eventually */}
			</div>
		);
	}
}

export default Pallete;
