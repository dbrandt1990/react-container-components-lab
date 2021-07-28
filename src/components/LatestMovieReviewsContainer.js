import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from '../components/MovieReviews'


const NYT_API_KEY = '9zUtAtOjQrRcV7GbZceH3FbKtLeckHdm';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
    + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
    constructor() {
        super()

        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
            .then(response => response.json())
            .then(data => this.setState({ reviews: data.results.map(movie => movie) }))
            .catch((e) => {
                console.log(e.messages)
            })

    }


    render() {
        return <div className='latest-movie-reviews'>
            <MovieReviews reviews={this.state.reviews} />
        </div>
    }
}

export default LatestMovieReviewsContainer;