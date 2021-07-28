import React from 'react'

// Code MovieReviews Here
const MovieReviews = props => {
    return (
        <div className='review-list'>
            {props.reviews.map((movie, i) => {
                return (<div className="review" key={i}>
                    <h3>{movie.display_title}</h3>
                    <p>{movie.summary_short}</p>
                </div>)
            })}
        </div>
    )
}

export default MovieReviews