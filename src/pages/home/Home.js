import * as React from 'react';
import axios from "axios";
import {useEffect, useState} from "react";
import './Home.css';
import {Link} from "react-router-dom";
import redditLogo from "../../assets/reddit-2-logo-png-transparent.png"

function Home() {
    const [subredditList, setSubredditList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://www.reddit.com/hot.json?limit=15');
                console.log(response.data.data.children);
                setSubredditList(response.data.data.children);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, []);

    return (<>
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
                    <img src={redditLogo} alt="Reddit logo"/>
                </div>
            </header>
            <main className="main-outer-container">
                <div className="main-inner-container">
                    <div className="main-title-text">
                        <h2>Hottest posts</h2>
                        <p>on Reddit right now</p>
                    </div>
                    <div className="tiles-div">
                        {subredditList.map((subreddit) => {
                            return <section className="reddit-tile" key={subreddit.data.url}>
                                <div className="tile-title">
                                    <a href={"https://www.reddit.com" + subreddit.data.permalink}>
                                        <h4>{subreddit.data.title}</h4>
                                    </a>
                                </div>
                                <div className="tile-misc">
                                    <Link to={"/subreddit/" + subreddit.data.subreddit}>
                                        <p className="subreddit-name">{subreddit.data.subreddit_name_prefixed}</p>
                                    </Link>
                                    <p>Comments {subreddit.data.num_comments} - Ups {subreddit.data.ups}</p>
                                </div>
                            </section>
                        })}
                    </div>
                </div>
            </main>
            <footer>
                <h6>In opdracht van Novi Hogechool © 2022</h6>
            </footer>
        </>
    );
};

export default Home;