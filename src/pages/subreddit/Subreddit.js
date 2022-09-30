import * as React from 'react';
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import redditLogo from "../../assets/reddit-2-logo-png-transparent.png";
import "./Subreddit.css"

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
            <nav>
                <div className="nav-inner-container">
                    <ul>
                        <li>HOTTEST POSTS</li>
                        <li>REDDIT</li>
                        <li>MEMES</li>
                    </ul>
                </div>
            </nav>
            <header>
                <div className="header-inner-container">
                    <h2>{subreddit.display_name_prefixed}</h2>
                    <p>Subreddit specifications</p>
                </div>
            </header>
            <main className="main-subreddit">
                <div className="main-subreddit-inner-container">
                    <h2>Title</h2>
                    <p>{subreddit.title}</p>
                    <h2>Description</h2>
                    <p>{subreddit.public_description}</p>
                    <h2>Number of subscribers</h2>
                    <p className="subreddit-subscribers">{subreddit.subscribers}</p>
                    <div className="subreddit-link-div">
                        <Link to="/">
                            <p>˂ Take me back</p>
                        </Link>
                    </div>
                </div>
            </main>
            <footer>
                <h6>In opdracht van Novi Hogechool © 2022</h6>
            </footer>
        </>
    );
}

export default Subreddit;