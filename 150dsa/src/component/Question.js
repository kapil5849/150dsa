import React from 'react';
import '../styles/question.css';

const Question = ({ title, tags, description, detailsLink }) => {
    return (
        <div className="panel_border___58nj">
            <div className="panel_inner__YQLRW">
                <h4 className="panel_title__Lc_lX">
                    <small>🏆</small> {title}
                </h4>
                <ul className="panel_tags__00_MY">
                    {tags.map((tag, index) => (
                        <li key={index}>
                            <div className="undefined panel_tag__ePHQt">
                                <a href={tag.link} className="panel_neutral__eMV_0 panel_link__cgSje panel_small__y58oI">
                                    <div className="panel_border___58nj">{tag.name}</div>
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
                <p className="panel_description__PfntT muted">{description}</p>
                <p className="panel_details__Qi4IU muted">
                    <a href={detailsLink} className="more-detail">
                        more details »
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Question;