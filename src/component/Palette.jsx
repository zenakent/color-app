import React, { Component } from 'react';
import '../css/Palette.css';

import ColorBox from './ColorBox';
class Pallete extends Component {
	render() {
		const colorBoxes = this.props.palette.colors.map((color, idx) => (
			<ColorBox key={idx} background={color.color} name={color.name} />
		));
		return (
			<div className="Palette">
				{/* navbar goes here */}
				<div className="Palette-colors">{colorBoxes}</div>
				{/* footer eventually */}
			</div>
		);
	}
}

export default Pallete;
