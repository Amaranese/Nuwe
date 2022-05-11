import './CommentsCarousel.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

const CommentsCarousel = () => {

    const [reviews, setReviews] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(reviews.length)


    useEffect(() => {
        setLength(reviews.length)
    }, [reviews])

    useEffect(() => {
        Axios.get('data/reviews.json')
            .then((response) => {
                setReviews(response.data)
            });
    }, [])

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevIndex => prevIndex + 1) 
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1)
        }
    }


    return (
        <div className="container">

            <div className="wrapper">

                {currentIndex > 0 ? <button className="left-arrow" onClick={prev}>&#60;</button> : <button style={{ visibility: 'hidden' }} className="left-arrow" onClick={prev}>&larr;</button>}

                <div className="content-wrapper">

                    <div className="content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>


                        {reviews.map((review) => {
                            return (

                                <div className="card-container" key={review.index}>
                                    <div className="card-data">
                                        <img className="user-img" src={review.avatar} alt="user" />
                                        <h4>{review.name}</h4>
                                    </div>
                                    <div className='card-txt'>
                                        <p>{review.comment}</p>
                                    </div>
                                </div>
                            );
                        })}


                    </div>
                </div>
                {currentIndex < (length - 1) ? <button className="right-arrow" onClick={next}> &#62; </button> : ''}
            </div>
        </div>
    );
}

export default CommentsCarousel;
