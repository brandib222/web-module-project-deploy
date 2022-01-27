import React from 'react';

function AddDog (props) {
    return (
        <div className='add-dog-container'>
            <h1>This is where you add your dog</h1>
            <form>
                <input 
                    type='text'
                    name='dog-name'
                    placeholder='doggo name'
                />
                 <input 
                    type='text'
                    name='url'
                    placeholder='doggo pic url'
                />
            </form>
        </div>
    )
}

export default AddDog;

// build a form to add your own dog