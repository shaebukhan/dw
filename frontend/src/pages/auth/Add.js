import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [profession, setProfession] = useState("");
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate fields
        if (!name || !profession || !image || !video) {
            toast.error("All fields are required!");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("profession", profession);
        formData.append("image", image);
        formData.append("video", video);

        try {
            // Send POST request to backend
            const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/review/add`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.data.success) {
                // Success message
                toast.success("Data added successfully!");

                // Clear the form after submission
                setName("");
                setProfession("");
                setImage(null);
                setVideo(null);
                navigate("/dashboard/admin");
            } else {
                toast.error(response.data.message);
            }

        } catch (error) {
            // Error handling
            console.log(error);

            toast.error("Failed to add data. Please try again.");
        }
    };

    return (
        <>
            <Navbar />
            <div className="mt-top"></div>
            <div className="m-h-100">
                <div className="container pt-5">
                    <div className="d-flex justify-content-center align-items-center">
                        <form className='p-3' onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label>Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Name"
                                />
                            </div>
                            <div className="mb-3">
                                <label>Profession</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={profession}
                                    onChange={(e) => setProfession(e.target.value)}
                                    placeholder="Profession"
                                />
                            </div>
                            <div className="mb-3">
                                <label>Image Thumbnail</label>
                                <input
                                    className="form-control"
                                    type="file"
                                    accept='image/*'
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </div>
                            <div className="mb-3">
                                <label>Video</label>
                                <input
                                    className="form-control"
                                    type="file"
                                    accept='video/*'
                                    onChange={(e) => setVideo(e.target.files[0])}
                                />
                            </div>
                            <button type='submit' className='btn btn-primary'>Add Data</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Add;
