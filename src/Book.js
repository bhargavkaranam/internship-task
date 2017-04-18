import React from 'react';
import './App.css'
class Book extends React.Component
{
	
	componentDidMount() {
		
	}
	render() {
		
		
		return (
			<div className="bookCard">
				<img alt="Loading" src={this.props.thumbnail} />
				<h1>{this.props.bookTitle}</h1>
				
				<a target="_blank" href={this.props.bookDetails.preview_url}>Preview</a>
				<a target="_blank" href={this.props.bookDetails.info_url}>More Info</a>
			</div>
		);
	}
}

export default Book;