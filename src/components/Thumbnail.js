import React from 'react'

function Thumbnail(props) {
    const bgImg = {
        backgroundImage: 'url(' + props.img + ')',
    } 

    return (
        <div className="thumbnail-container" style={bgImg}>
            <a href='#' className="thumbnail-link">
                <div className="thumbnail-overlay">
                    <p className="thumbnail-text">{props.text}</p>
                </div>
            </a>
        </div>
    )
}

export default Thumbnail