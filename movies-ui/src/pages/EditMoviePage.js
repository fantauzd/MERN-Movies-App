import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EditMoviePage = () => {

    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [language, setLanguage] = useState('');

    const navigate = useNavigate();

    const editMovie = async () => {
        const response = await fetch('/movies', {
            method: 'PUT',
            body: JSON.stringify({title: title, year: year, language: language}),
            headers: {
                'Content-Type': 'application/JSON'
            },
        });
        if(response.status === 200) {
            alert('Movie has been updated!');
        } else {
            alert('Failed to edit movie.');
            console.log(`Failed to edit movie, status code = ${response.status}`);
        }
        navigate("/");
    };

    return (
        <div>
            <h1>Edit Movie</h1>
        </div>
    );
}

export default EditMoviePage;