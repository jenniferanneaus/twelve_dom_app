import React from 'react'
import Thumbnail from './Thumbnail'

function Question(props) {
    const thumbnails = props.data.map(thumbnail =>
        {return(<Thumbnail key={thumbnail.id} img={thumbnail.img} text={thumbnail.text} />)}
    )

    return (
        <div className="container-small thumbnail-collection" id="days">
            {thumbnails}
        </div>
    )
}

export default Question