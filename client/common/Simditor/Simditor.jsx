import React, { Component } from 'react'
import Simditor from 'simditor'
import $ from 'jquery';
import './simditor.css';

export default class Editor extends Component {
	
	componentDidMount() {
		var editor = new Simditor({
			textarea: $('#editor')
		});
	}
	
	render() {
		<textarea id="editor" placeholder="请输入内容" autoFocus></textarea>
	}
}

