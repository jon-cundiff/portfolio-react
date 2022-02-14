import React, { useEffect } from 'react';
const feedURL = "http://medium.com/feed/@jon-cundiff";

const Articles = () => {
    useEffect(() => {
        const fetchArticles = async() => {
            const feed = await fetch(
                `https://api.rss2json.com/v1/api.json?rss_url=${feedURL}`
            );

            console.log(feed);
        }
        
        fetchArticles();
    }, [])
    return (
        <div>
            I'm reading the feed! yeeee!
        </div>
    );
};

export default Articles;