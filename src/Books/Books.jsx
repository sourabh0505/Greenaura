import React from 'react';
import './books.css';

function Books() {
  return (
    <div className='books'>
    <h1 className='book-heading'>Recommended Books</h1>

    <div className="all-books">
    <div className='bookcard'>
        <img className='book-image' src="https://m.media-amazon.com/images/I/91qqCUAMO2L._SY466_.jpg"/>
        <div className="bookcardbody">
            <h3 className='book-title'>Non-Conventional Energy Resources | 3rd Edition</h3>
            <p className='book-text'>The book covers the various components of undergraduate course on Non-Conventional Energy Resources (Alternative Energy Resources, Renewable Energy Resources)...</p>
            <button className='book-btn'>View book details</button>
        </div>
    </div>

    <div className='bookcard'>
        <img className='book-image' src="https://m.media-amazon.com/images/I/71eWiVCudkL._SY466_.jpg"/>
        <div className="bookcardbody">
            <h3 className='book-title'>Fundamentals and Applications of Renewable Energy</h3>
            <p className='book-text'>A comprehensive new textbook on the fundamentals of renewable energy that bridges the gap between theory and application. At a time when clear and relevant information about the fundamental principles and real-world application of renewable energy is being sought eagerly, this is the text to guide students. Written by three leading field experts...</p>
            <button className='book-btn'>View book details</button>
        </div>
    </div>

    <div className='bookcard'>
        <img className='book-image' src="https://m.media-amazon.com/images/I/31Wq9jFcTTL.jpg"/>
        <div className="bookcardbody">
            <h3 className='book-title'>Climate Change- Law , Policy and Governance</h3>
            <p className='book-text'>This splendid work discusses in detail the issue of climate change and gives an overview of challenges and possibilities in controlling these changes...</p>
            <button className='book-btn'>View book details</button>
        </div>
    </div>

    <div className='bookcard'>
        <img className='book-image' src="https://m.media-amazon.com/images/I/918hM+7TOxL._SY466_.jpg"/>
        <div className="bookcardbody">
            <h3 className='book-title'>Freakonomics: A Rogue Economist Explores the Hidden Side of Everything</h3>
            <p className='book-text'>The book, 'Freakonomics: A Rogue Economist Explores the Hidden Side of Everything is an interesting book that combines the theories of economics with everyday issues and topics and presents a series of fascinating exercises that are engaging...</p>
            <button className='book-btn'>View book details</button>
        </div>
    </div>
    </div>

</div>
  )
}

export default Books