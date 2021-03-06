import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../css/Navbar.css';

export default class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { format: 'hex', open: false };

		this.handleFormatChange = this.handleFormatChange.bind(this);
		this.closeSnackBar = this.closeSnackBar.bind(this);
	}

	handleFormatChange(evt) {
		this.setState({ format: evt.target.value, open: true });
		// this.props.handleFormatChange(evt.target.value);
	}

	closeSnackBar() {
		this.setState({ open: false });
	}

	render() {
		const { level, changeLevel } = this.props;
		const { format } = this.state;
		return (
			<header className="Navbar">
				<div className="logo">
					<Link to="/">reactcolorPicker</Link>
				</div>
				<div className="slider-container">
					<span>Level: {level}</span>
					<div className="slider">
						<Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
					</div>
				</div>
				<div className="select-container">
					<Select value={format} onChange={this.handleFormatChange}>
						<MenuItem value="hex">HEX - #FFF</MenuItem>
						<MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
						<MenuItem value="rgba">RGBA - rgb(255,255,255,1.0)</MenuItem>
					</Select>
				</div>
				<Snackbar
					anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
					open={this.state.open}
					autoHideDuration={3000}
					message={<span id="message-id">Format Changed to {format.toUpperCase()}!</span>}
					ContentProps={{ 'aria-describedby': 'message-id' }}
					onClose={this.closeSnackBar}
					action={[
						<IconButton onClick={this.closeSnackBar} color="inherit" key="close" aria-label="close">
							<CloseIcon />
						</IconButton>
					]}
				/>
			</header>
		);
	}
}
