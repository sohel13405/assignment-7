import React from 'react';
import BImg from '../../assets/Banner-min.jpg'


const Banner = () => {
    return (
        <div
        className="  h-[600px] flex flex-col  items-start pl-30 space-y-2 pt-40 bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${BImg})`,
        }}
      >
        <h1 className="text-5xl font-bold ">Bid on Unique Items from Around <br /> the World</h1>
        <p className="">
        Discover rare collectibles, luxury goods, and vintage treasures in  <br />our curated auctions
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    );
};

export default Banner;