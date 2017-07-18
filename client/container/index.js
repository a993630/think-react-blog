import React, { Component } from 'react'
import $ from 'jquery';
import { Button } from 'antd';
import Editor from '../common/Simditor/Simditor'

export default class App extends Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		
	}
	
	render() {
		return(
			<div>
				<Button/>
				<Editor />
			</div>
		)
	}
}