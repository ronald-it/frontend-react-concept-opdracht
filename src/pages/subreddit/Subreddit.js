import * as React from 'react';
import {useParams} from "react-router-dom";

function Subreddit() {
    const {subredditId} = useParams();

    return (
        <div>
            <p>De subreddit is: {subredditId}</p>
            <h2>Title</h2>
            <p>Lorem ipsum</p>
            <h2>Description</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur eos, facere ipsa nam suscipit tempora tenetur voluptatibus. Aut dolore dolorum, eius excepturi fugit maxime optio perspiciatis repellat vitae voluptate.</p>
            <h2>Number of subscribers</h2>
            <p>xxx.xxx</p>
        </div>
    );
};

export default Subreddit;