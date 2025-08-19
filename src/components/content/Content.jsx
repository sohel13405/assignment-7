import React, { useEffect, useState } from 'react';
import LeftContent from '../leftContent/LeftContent';


const Content = ({handleAddToCart, bids}) => {
    const [contents, setNewContent] = useState([])

    useEffect(() => {
        fetch('bid.json')
            .then((res) => res.json())
            .then(data => setNewContent(data))
    }, [])

    // console.log(contents)


    return (
        <div className=' '>
           


            <div className="all-content mt-12">
            {
                contents.map((content) => <LeftContent key={content.id} 
                content={content} 
                handleAddToCart={handleAddToCart}
                bids={bids}
                 ></LeftContent>)
            }
            </div>
        </div>
    );
};

export default Content;