import 'isomorphic-fetch';
import MovieReviews from '../components/MovieReviews'
import React, { Component } from 'react';

const NYT_API_KEY = '9zUtAtOjQrRcV7GbZceH3FbKtLeckHdm';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
    + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()

        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handleSearch = (e) => {
        e.preventDefault()

        fetch(`${URL}&query=${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(data => this.setState({ reviews: data.results.map(movie => movie) }))
            .catch((e) => {
                console.log(e.messages)
            })
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSearch}>
                    <label>Search:</label>
                    <input type='text' onChange={this.handleChange}></input>
                    <input type='submit' value='OK'></input>
                </form>

                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

}

export default SearchableMovieReviewsContainer
