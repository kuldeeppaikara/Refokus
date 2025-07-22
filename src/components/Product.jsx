import React from 'react'
import Button from './Button'

function Product({val,mover,count, stopVideo}) {
  return (
    <div className="w-full h-[16rem]  px-5  ">
      <div onMouseEnter={() => {mover(count)}} onMouseLeave={() => stopVideo(count)} className="max-w-screen-xl min-h-60 mx-auto flex items-center justify-between gap-5 ">
        <h1 className="text-5xl capitalize">{val.title}</h1>
        <div className="details w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="flex items-center justify-between ">
            {val.live && <Button text="Get Started" />}
            {val.case && <Button text="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product