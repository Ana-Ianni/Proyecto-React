import React from 'react';
import Item from "./Item";
import CategoryList from "./CategoryList";
import './style.css';

export default function ItemContainer(){

    return(
        <div className="itemContainer">
            <div className="category-wrap">
              <CategoryList/>
            </div>
            <Item/>
        </div>
    )
}