import React, { useState, useRef, useEffect } from 'react';
import LightStar from "../assets/images/star-light.svg";
import BoldStar from "../assets/images/star-sm.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReviewCard from './ReviewCard';
import { Modal } from 'antd';
import axios from 'axios';

const ClientReview = () => {


    const [reviews, setReviews] = useState([]);

    const getAllReviews = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/review/reviews`);
            if (data?.success) {
                setReviews(data.reviews);
            }
        } catch (error) {
            console.log(error);

        }
    };

    useEffect(() => {
        getAllReviews();
    }, []);

    // State for modal visibility and selected video URL
    const [visible, setVisible] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");

    // Ref for the video element
    const videoRef = useRef(null);

    // Show modal and set video URL
    const showModal = (url) => {
        setVideoUrl(url); // Set the clicked video's URL
        setVisible(true); // Show modal
    };

    // Hide modal and stop video by clearing URL
    const hideModal = () => {
        setVisible(false); // Close modal
    };

    // useEffect to clear video URL and pause video when modal closes
    useEffect(() => {
        if (!visible && videoRef.current) {
            videoRef.current.pause(); // Pause the video if the modal is closed
            videoRef.current.currentTime = 0; // Reset video time
            setVideoUrl(""); // Clear video URL
        }
    }, [visible]); // Runs whenever `visible` state changes

    // Slider settings
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Default number of slides to show on large screens
        slidesToScroll: 1,
        centerPadding: '10px',
        nextArrow: <div>Next</div>,
        prevArrow: <div>Prev</div>,
        responsive: [
            {
                breakpoint: 1200, // For screens below 1200px
                settings: {
                    slidesToShow: 3, // Show 3 slides
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 980, // For screens below 1200px
                settings: {
                    slidesToShow: 2, // Show 3 slides
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768, // For screens below 768px (tablets)
                settings: {
                    slidesToShow: 1, // Show 2 slides
                    slidesToScroll: 1,
                    infinite: true,
                },
            },

        ],
    };


    return (
        <>
            <div className="client-review-space">
                <h1 className="client-review-title text-center">Client’s review</h1>
                <img className='light-star' src={LightStar} alt="" />
                <img className='bold-star' src={BoldStar} alt="" />
                <div className="slider-sub">
                    <Slider {...settings}>
                        {reviews.length > 0 ? (
                            reviews.map((r) => (
                                <ReviewCard
                                    key={r._id}
                                    image={r.image}
                                    title={r.name}
                                    text={r.profession}
                                    onPlayVideo={() => showModal(r.video)} // Correct video
                                />
                            ))
                        ) : (
                            <h5>No reviews found</h5> // Show a message if there are no reviews
                        )}

                    </Slider>
                </div>
            </div>

            {/* Modal for video */}
            <Modal onCancel={hideModal} footer={null} open={visible} maskClosable={false} confirmLoading={false}>
                {videoUrl && (
                    <video
                        key={videoUrl} // This key forces the video to re-render when the URL changes
                        ref={videoRef} // Attach the ref to control the video
                        width="100%"
                        height='100%'
                        controls
                        autoPlay
                    >
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </Modal>
        </>
    );
};

export default ClientReview;
