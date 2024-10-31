import React from 'react';

export default function YouTube({id}) {
    return (
        <iframe
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube Video"
            frameBorder="0"
            width="560" 
            height="315" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
    );
}