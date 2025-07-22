import React from 'react'
import Card from './Card'

function Cards() {
    const card1 = {
        title1:"porfolio",
        title2:"Projects & Case Studies",
        desc:"Web Design, Webflow Development, and Creative Development."
    } 
     const card2 = {
       title1: "get in touch",
       title2: "Let's get to it. together.",
       desc:""
     }; 
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-20 flex gap-2">
        <Card width={"basis-1/3"} dets={card1} set1={false} set2={true} />
        <Card width={"basis-2/3"} dets={card2} set1={true} set2={false} />
      </div>
    </div>
  );
}

export default Cards