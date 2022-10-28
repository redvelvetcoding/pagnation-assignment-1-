import React, { useEffect, useState } from 'react';

function User () {

   const[currentPosition, setCurrentPosition] = useState(0);
   const[news, setNews] = useState (null);
   const[loading, setLoading] = useState(true);
   const[listItems, setListItems] = useState([])


   useEffect(() => {
      const newsItems = [
         {
            title:"Simi Adekunle",
            url:"Simi@gmail.com",
            description:"09094464535",
         },
         {
               title:"Miracle Taiwo",
               url:"taiwo@gmail.com",
               description:"0804345233",
         },
         {
            title:"Okeke Amara",
            url:"amara@gmail.com",
            description:"07053645546",
         },
         {
            title:"Bisi Winfred",
            url:"bisi@gmail.com",
            description:"08065454643",
         },
         {
            title:"Kalu Okafor",
            url:"okafor@gmail.com",
            description:"08094757467",
         },
      ];
    const item = newsItems[currentPosition];
    setListItems(newsItems);
    setNews(item);
    setLoading(false);
   }, [currentPosition])

   const handleNext =(event)=>{
      event.preventDefault();
      const length = listItems.length;
      const count = length - 1;
     if(currentPosition < count){
      setCurrentPosition(currentPosition + 1);
     }else{
      setCurrentPosition (0);
     }
   };

   const handlePrevious =(event)=>{
      event.preventDefault();
      if(currentPosition > 0){
         setCurrentPosition((prev)=>prev - 1);
      }else{
         setCurrentPosition(0);
      }
   };


   return(
      <section className='section'>
         <section className='name'>
          { loading ? (
            <div>loading</div>
            ):(
            <div  className='name_item'>
            <h2>{news.title}</h2>
            <p>{news.description}</p>
            <a href={news.url}>{news.url}</a>
            </div>
            )}
            </section>
            <div className='box_btn'>
               <button onClick={handlePrevious} className='btn'>Prev</button>
               <button onClick={handleNext} className='btn'>Next</button>
            </div>
      </section>

   );
}

export default User;