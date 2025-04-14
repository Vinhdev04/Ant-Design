import React from 'react';
import "./CardItem.css";
function CardItem(props) {
    const { title = "" ,style} = props;
    return (
        <div>
            <div className="card-item" style={style}>
             {title &&  <h4>{ title}</h4>}
            </div>
        </div>
    );
}

export default CardItem;