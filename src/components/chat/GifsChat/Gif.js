import React from 'react';


export const getGif= async(key)=>{
   const url= `https://api.giphy.com/v1/gifs/search?q=${key}&rating=PG&limit=1&api_key=DnKhsHbOOyW15hQ77467vSt21jCNVenP`;
   const resp = await fetch(url);
   const {data} = await resp.json();

   const gif = data.map(img=>{
       return {
           id:img.id,
           title:img.title,
           url:img.images?.downsized_small.mp4

       }
   })
   console.log(gif);
}

export const Gif = (props) => {
    console.log(props);
  return <div>
      
  </div>;
};
