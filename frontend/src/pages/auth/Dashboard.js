import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Dashboard = () => {
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

    const handleDelete = async (r) => {
        if (r && typeof r === 'object' && r._id) {

            try {
                const url = `dwbackendapi.vercel.app/api/v1/review/delete-review`;

                const res = await axios.post(url, { _id: r._id }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (res.data.success) {
                    toast.success(res.data.message);
                    getAllReviews();

                } else {
                    toast.error(res.data.message);
                }
            } catch (error) {
                console.error(error);
                toast.error("Something went wrong !!");
            }
        } else {
            console.error('Invalid p object:', r);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="mt-top"></div>
            <div className="container pt-5">
                <div className="d-flex justify-content-between mb-4">
                    <h2>Video Management Dashboard</h2>
                    <Link className="btn btn-primary" to={"/dashboard/admin/add"}>
                        Add Video
                    </Link>
                </div>
                <div className="row my-5">
                    {reviews.length > 0 ? (
                        reviews.map((r) => (
                            <div className="col-md-4 mb-4" key={r._id}>
                                <div className="card">
                                    <img
                                        style={{ height: "200px" }}
                                        src={`dwbackendapi.vercel.app/uploads/${r.image}`}
                                        className="img-fluid"
                                        alt={r.name}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{r.name}</h5>
                                        <h5 className="card-title mb-3">{r.profession}</h5>

                                        <video className='w-100'
                                            style={{ height: "150px" }}
                                            src={`dwbackendapi.vercel.app/uploads/${r.video}`}
                                            controls
                                        ></video>
                                    </div>
                                    <div className="m-2">
                                        <button onClick={() => handleDelete(r)} className='btn btn-danger'>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No reviews found</p> // Show a message if there are no reviews
                    )}
                </div>
            </div>
        </div>
    );
};



export default Dashboard;
