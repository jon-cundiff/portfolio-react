import React from "react";

const ArticleSnippet = ({ article }) => {
    const { categories, content, link, title } = article;
    const categoryItems = categories.map((category) => (
        <div key={category} className="category-item">
            {category}
        </div>
    ));

    return (
        <div className="article pull-ahead">
            <h2>{title}</h2>
            <div className="category-container">
                <b>Categories:</b>
                {categoryItems}
            </div>
            <p>{content}...</p>
            <p>
                <i>
                    Read the full article on{" "}
                    <a href={link} target="_blank" rel="noreferrer">
                        Medium
                    </a>
                    !
                </i>
            </p>
        </div>
    );
};

export default ArticleSnippet;
