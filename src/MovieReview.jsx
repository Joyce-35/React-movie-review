import React, { Component } from 'react';
import MovieReviews from './MovieReviews';

class MovieReview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews:[]    
        }
    }
    componentDidMount(){
        fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=oq8IfjiBOSKI7D0jO9zj64CoHV7XWD0d")
        .then((res) => res.json())
        .then((reviews)=>{
            console.log("reviews", reviews)
            this.setState({reviews: reviews.results})
        })
        .catch((err)=>console.log(err))
    }
    render() {
        return (
            <>
                <h4 className='header'>Movie Reviews</h4>
                <hr />
                <div>
                    {this.state.reviews.map((review) =>(
                        <MovieReviews  review ={review} />
                    ))}
                </div>
            </>
        );
    }
}

export default MovieReview;
