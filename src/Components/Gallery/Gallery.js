import React from 'react'
import './gallery.css'

function Gallery() {
  return (
    <section className='Gallery-section' id='gallery'>
        <div className="gallery-container">
            <h1>Gallery</h1>
            <div className="gallery-images">
            <img src={require('./galleryImages/img-6.jpg')} />
            <img src={require('./galleryImages/img-7.jpg')} />
            <img src={require('./galleryImages/img-8.jpg')} />
            <img src={require('./galleryImages/img-10.jpg')} />
            <img src={require('./galleryImages/img-15.jpg')} />
            <img src={require('./galleryImages/img-11.jpg')} />
            <img src={require('./galleryImages/img-9.jpg')} />
            <img src={require('./galleryImages/img-12.jpg')} />
            <img src={require('./galleryImages/img-14.jpg')} />
            <img src={require('./galleryImages/img-13.jpg')} />

            </div>
        </div>
    </section>
  )
}

export default Gallery