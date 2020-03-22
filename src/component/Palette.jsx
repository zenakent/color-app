import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
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
				<div className="slider">
					<Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={this.changeLevel} />
				</div>

				{/* navbar goes here */}
				<div className="Palette-colors">{colorBoxes}</div>
				{/* footer eventually */}
			</div>
		);
	}
}

export default Pallete;
