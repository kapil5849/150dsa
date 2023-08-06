import React from 'react';
import '../styles/question.css';

const Question = ({ title, description, detailsLink }) => {
    return (
        <div className="panel_border___58nj">
            <div className="panel_inner__YQLRW">
                <h4 className="panel_title__Lc_lX">
                    <small>🏆</small> {title}
                </h4>
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