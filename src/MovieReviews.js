import React from 'react';
import {Card,} from 'react-bootstrap';
import './App.css'


const MovieReviews = (props) => {
    return (
        <>
            <div className='con'>

                        <Card style={{ maxWidth: '68rem' }} className="car">
                            <Card.Header><h5>{props.review.display_title}</h5></Card.Header>
                            <Card.Body>

                                <div className='top'>
                                    <div>
                                        <Card.Img
                                            variant="top"
                                            src={props.review.multimedia.src}
                                            width={180 + "px"}
                                            height={180 + "px"}
                                            className="img"
                                        />
                                    </div>
                                    <div className='item'>
                                        <Card.Title className='it'>-{props.review.byline}</Card.Title>
                                        <Card.Text className='it'>{props.review.critics_pick}</Card.Text>
                                        <Card.Text className='it'>{props.review.summary_short}</Card.Text>
                                        <Card.Text className='it'><h6>{props.review.headline}</h6></Card.Text>
                                    </div>
                                </div>
                            </Card.Body>

                        </Card>
            </div>
        </>
    );
}

export default MovieReviews;
