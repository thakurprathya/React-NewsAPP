import React, {useEffect, useState} from 'react';
import Item from './item';
import Loader from './loader';

const MainComp =(props)=>{ 
  //defining states
  const [articles, setArticles]= useState([]);
  const [loading, setLoading]= useState(true);

  const CapitalizeStr = (string)=>{ return (string.charAt(0).toUpperCase() + string.slice(1)); } //func to capitalize string
  
  useEffect(()=>{
      (async ()=>{
        let url=`https://newscafapi.p.rapidapi.com/apirapid/news/${props.category===""?"":props.category+"/"}`;
        props.setProgress(10);  //initialzing progress bar on loading and changing category
        setLoading(true);  //enabling loader
        let data= await fetch(url, {
          method: "GET",
          headers: {"Content-type": "application/json; charset=UTF-8",
                    "X-RapidAPI-Key": props.apiKey,
                    "X-RapidAPI-Host": props.apiHost}
        }); //cdm will wait for this promise to resolve
        props.setProgress(30);  //setting width after fetch
        let parsed_data= await data.json();
        props.setProgress(70);  //setting width after parsing data
        //setting states
        setArticles(parsed_data);
        setLoading(false);
        props.setProgress(100);  //finalizing progress bar
        document.title= `News App ${CapitalizeStr(props.category)}`;
      })();

      return ()=>{};
      //eslint-disable-next-line
  },[props.category]);

    return (
      <>
        <h1 className='text-center' style={{marginTop:"120px", marginBottom:"10px"}}><b>Top {CapitalizeStr(props.category)} Headlines</b></h1>
        {loading && <Loader/>} {/*if loading true then display loader, used here for first time loding on reloding the page*/}
        
          <div className='container my-4'>
            <div className="row"> {/*using bootstrap table classes for auto arrangements */}
                {articles.map((element)=>{
                    return (
                    <div className="col-md-3" key={element.source_url}>  {/*using url as key*/}
                        <Item title={element.title?element.title.slice(0,35):""} content={element.content?element.content.slice(0,80):""} 
                        image={element.img?element.img:"https://rb.gy/irh0ey"} itemurl={element.source_url}
                        date={element.date} source={element.source_name}/>
                    </div>
                    )
                })}
            </div>
          </div>
      </>
    )
}

export default MainComp;