import React from 'react';
import './ArticleComponentCSS/Predefined.css';

const Predefined = ({ guidesLink, authorLink, authorName, beginnerTag, beginnerTagLink, smartContractsTag, smartContractsTagLink, date, children }) => {
    return (
        <div className="topnav-content">
            <ul className="pages-properties">
                {guidesLink && (
                    <li>
                        <span>📖</span>
                        <a href={guidesLink} className="pages-mr">
                            Guides
                        </a>
                    </li>
                )}
                {authorName && (
                    <li>
                        <span>👤</span>
                        <ul className="authors-container">
                            <li>
                                <a href={authorLink} target="_blank" rel="noopener noreferrer">
                                    {authorName}
                                </a>
                            </li>
                        </ul>
                    </li>
                )}
                {beginnerTag && (
                    <li>
                        <span>⭐</span>
                        <div>
                            <div className="panel-success panel-small">
                                <div className="panel-border">{beginnerTag}</div>
                            </div>
                        </div>
                    </li>
                )}
                {smartContractsTag && (
                    <li>
                        <span>🏷️</span>
                        <ul className="tags-container tags-small">
                            <li>
                                <div>
                                    <a href={smartContractsTagLink} className="panel-secondary panel-link panel-small">
                                        <div className="panel-border">{smartContractsTag}</div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </li>
                )}
                {date && (
                    <li>
                        <span>📅</span>
                        <span className="pages-muted">{date}</span>
                    </li>
                )}
            </ul>
            <main>
                <p>
                    <strong>{children}</strong>
                </p>
            </main>
        </div>
    );
};

export default Predefined;
