import React,{useEffect, useState} from 'react';
import FilterComponent from './FilterComponent';
import { css } from "@emotion/core";
import ListingComponent from './ListingComponent';
import axios from 'axios';
import './App.css';
import ClipLoader from "react-spinners/ClipLoader";
const override = css`
position: absolute;
top: 50%;
left: 50%;
`;
const App =()=> {
  const filters = ["USA","BITCOIN","APPLE","TechCrunch","Walls Street Journal"]
  const [filterSelect,setfilterSelect] = useState('BITCOIN');
  const [loader,setLoader]=useState(false);
  const filterData = {"USA":'us',"BITCOIN":'bitcoin',"APPLE":"apple","TechCrunch":"techcrunch","Walls Street Journal":'wsj.com'}
  const filterSelected = (data)=>{
    setfilterSelect(data)
    setLoader(true);
    axios.get(`https://newsapi.org/v2/everything?q=${filterData[data]}&apiKey=051b4cb654d34757b0cc49026875fdac`)
    .then(res=>{
      setDataarray(res.data.articles);
      setLoader(false)
    })
    .catch(err=>{
      setLoader(false)
      console.log(err)
    })
  }
  const [dataArray,setDataarray] = useState([]);
  useEffect(()=>{
    setLoader(true)
    axios.get(`https://newsapi.org/v2/everything?q=${filterData[filterSelect]}&apiKey=051b4cb654d34757b0cc49026875fdac`)
    .then(res=>{
      setDataarray(res.data.articles);
      setLoader(false)
    })
    .catch(err=>{
      setLoader(false)
      console.log(err)
    })
  },[])
  return (<>
  <ClipLoader color="orange" loading={loader}  size={150} css={override}/>
    <section className="App" key={filterSelected} className={`${loader?"loadingContent":""}`}>
      <FilterComponent filterSelected={filterSelected} filters={filters} filterSelect={filterSelect}/>
      <ListingComponent dataArray={[...dataArray]} />
    </section></>
  );
}

export default App;
