import React, { Component } from 'react'
import Simditor from 'simditor'
import $ from 'jquery';
import './simditor.css';
import './editor.less';

export default class Editor extends Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		var editor = new Simditor({
			textarea: $('#editor')
		});
	}
	
	render() {
		return(
			<textarea id="editor" placeholder="请输入内容" autoFocus></textarea>
		)
	}
}

