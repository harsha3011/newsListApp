import React, {useState} from 'react';
import './App.css';

const ListingComponent =({dataArray})=>{
    const [displayDetail,setDisplayDetails] = useState(false);
    const [displayIndex,setDisplayIndex] = useState(-1);
    const displayDetails = (i)=>{
        setDisplayDetails(!displayDetail);
        setDisplayIndex(displayDetail?'-1':i)
    }
return(<section className="row" > 
{dataArray.map((data,i)=>
    <article className="column " key={i}>
        <section className="w3-card-4 newsCard" >
            <section className="newsImage">
    <img src={data.urlToImage} alt="Not Available"  style={{width:"100%"}} />
            </section>
    <section className="w3-container newsDetails">
    <h4 className="newsHeader">{data.title}</h4> 
      <article className="newsContent">{data.content}</article>
    </section>
    <section className={`w3-container newsFooter ${displayDetail&&displayIndex===i?'footerExpanded':''} `}>
    <h6>{data.author?data.author:'Not Available'}</h6>
    <section className={`${displayDetail&&displayIndex===i}?'expandedData':''`}>
        <div style={{display: 'flex'}}>
        <p><time>{data.publishedAt}</time></p>
        <p onClick={()=>displayDetails(i)}> {displayDetail&&displayIndex===i?'less...':'more...'}</p>

        </div>
        { displayDetail&&displayIndex===i && <a href={data.url} rel="noreferrer"  target="_blank">{data.url}</a>}
        </section>
    </section>
       </section>
        </article>
    )}
    </section>

)}
export default ListingComponent;
