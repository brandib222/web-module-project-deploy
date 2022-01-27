import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home (props) {

    const [dog, setDog] = useState({});

    useEffect(() => {
        axios.get(`https://dog.ceo/api/breeds/image/random`)
            .then(res => {
                setDog(res.data.message);
            }).catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <div className='container'>
             <h2>Refresh for New Dog </h2>
             <img src={dog} alt='its a dog'/>
        </div>
    )
}

export default Home;

// make an api call to display info
// `https://dog.ceo/api/breeds/image/random`




// make it work