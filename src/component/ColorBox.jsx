import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../css/ColorBox.css';

export default class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			copied: false
		};

		this.changeCopyState = this.changeCopyState.bind(this);
	}

	changeCopyState() {
		this.setState({ copied: true }, () => {
			setTimeout(() => this.setState({ copied: false }), 1500);
		});
	}

	render() {
		const { name, background } = this.props;
		const { copied } = this.state;
		return (
			<CopyToClipboard text={background} onCopy={this.changeCopyState}>
				<div className="ColorBox" style={{ background: background }}>
					<div className={`copy-overlay ${copied && 'show'}`} style={{ background: background }} />
					<div className={`copy-message ${copied && 'show'}`}>
						<h1>Copied</h1>
						<p>{this.props.background}</p>
					</div>
					<div className="copy-container">
						<div className="box-content">
							<span>{name} </span>
						</div>
						<button className="copy-button">Copy</button>
					</div>
					<span className="see-more">More</span>
				</div>
			</CopyToClipboard>
		);
	}
}
