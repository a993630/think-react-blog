import React, { Component } from 'react'
import Simditor from 'simditor'
import $ from 'jquery';
import Editor from '../common/Simditor/Simditor'

export default class App extends Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		
	}
	
	render() {
		return (
			<div>
				<Simditor />
			</div>
		)
	}
}