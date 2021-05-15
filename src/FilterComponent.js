import React from 'react';
import './App.css';

const FilterComponent =({filters,filterSelected,filterSelect}) => 
    <section className="filterCompoentContainer">
    { filters.map((filter,i)=>
    <section className="filterCompoentColum" key={i}>
        <button className={`filterCompoent ${filterSelect===filter?'selected':''}`} key={i} onClick={()=>filterSelected(filter)}>{filter}</button>
    </section>)}
    </section>
  
export default FilterComponent;
