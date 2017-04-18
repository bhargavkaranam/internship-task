import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Book from './Book';
const jsonpFallback = require("jsonp-fallback")

class OpenLibraryBookCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      returnJson : [],
      details : []
    };
  }
  componentWillMount() {
    
    jsonpFallback("https://openlibrary.org/api/books?bibkeys=ISBN:" + this.props.isbn + "&callback=random&details=true")
  .then(data => {
    this.setState({returnJson : data['ISBN:' + this.props.isbn],details : data['ISBN:' + this.props.isbn].details});
    
    
  })
  .catch(console.error)
  }

  render() {

    return (

      <Book thumbnail={this.state.returnJson.thumbnail_url} bookTitle={this.state.details.title} bookDetails={this.state.returnJson} bookAuthors={this.state.details.authors}>
        
      </Book>
      )
    }
  }

  export default OpenLibraryBookCard;
