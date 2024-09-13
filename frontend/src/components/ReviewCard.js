import React from 'react';
import VideoPlay from "../assets/images/play-btn.svg";
import ReviewStar from "../assets/images/review-star.svg";
const ReviewCard = ({ image, title, text, onPlayVideo }) => {
    return (
        <div className="shadow">
            <div className="review-card-img" onClick={onPlayVideo}>
                <img className='w-100' src={image} alt={title} />
                <img className='playvideo-btn' src={VideoPlay} alt="Play video" />
            </div>
            <div className="px-2">
                <div className="d-flex justify-content-center align-items-center flex-column my-3">
                    <h4>{title}</h4>
                    <p className="client-card-text">{text}</p>
                    <div className="d-flex mb-3">
                        <img src={ReviewStar} alt="" />
                        <img src={ReviewStar} alt="" />
                        <img src={ReviewStar} alt="" />
                        <img src={ReviewStar} alt="" />
                        <img src={ReviewStar} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
