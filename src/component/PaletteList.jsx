import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MiniPalette from './MiniPalette';

export default class PaletteList extends Component {
	render() {
		const { palettes } = this.props;
		return (
			<div>
				<h1>React Colors</h1>
				<MiniPalette />
				{palettes.map((palette, idx) => (
					<p key={idx}>
						<Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
					</p>
				))}
			</div>
		);
	}
}
