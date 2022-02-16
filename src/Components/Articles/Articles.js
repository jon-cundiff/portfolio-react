import React, { useEffect, useState } from "react";
import ArticleSnippet from "./ArticleSnippet";

import "./Articles.css";

const feedURL = "https://v1.nocodeapi.com/joncundiff/medium/CgiAYqIzcPrPAubz";

const Articles = () => {
    const [articles, setArticles] = useState([]);

    const parseArticles = (feedArticles) => {
        const articleList = feedArticles.map((article) => {
            const condensedContent = article["content:encodedSnippet"]
                .substring(0, 200)
                .trim();

            const published = new Date(article.pubDate).toLocaleDateString();

            return {
                id: article.guid,
                categories: article.categories,
                content: condensedContent,
                link: article.link,
                published,
                title: article.title,
            };
        });

        setArticles(articleList);
    };

    const articleItems = articles.map((article) => (
        <ArticleSnippet article={article} key={article.id} />
    ));

    useEffect(() => {
        const fetchArticles = async () => {
            const feedResp = await fetch(feedURL);
            const feed = await feedResp.json();
            parseArticles(feed);
        };

        fetchArticles();
    }, []);
    return (
        <div className="container">
            <h1 className="title pull-ahead">Articles</h1>
            <p>I write articles about my programming journey on Medium.</p>
            <p>
                The content includes tips and tricks I'm learning and random
                discoveries and fails I stumble across.
            </p>
            <div className="article-container">{articleItems}</div>
        </div>
    );
};

export default Articles;
