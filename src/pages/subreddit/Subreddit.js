import * as React from 'react';
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function Subreddit() {
    const {subredditId} = useParams();
    const [subreddit, setSubreddit] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`);
                console.log(response.data.data);
                setSubreddit(response.data.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <main>
                <p>De subreddit is: {subredditId}</p>
                <h2>Title</h2>
                <p>{subreddit.title}</p>
                <h2>Description</h2>
                <p>{subreddit.public_description}</p>
                <h2>Number of subscribers</h2>
                <p>{subreddit.subscribers}</p>
                <Link to="/">Take me back</Link>
            </main>
            <footer>
                <h6>In opdracht van Novi Hogechool © 2022</h6>
            </footer>
        </>
    );
};

export default Subreddit;