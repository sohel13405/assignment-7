

import { GoHeart } from 'react-icons/go';

const LeftContent = ({content,handleAddToCart, bids  }) => {

    const isAdded = bids.some((item) => item.id === content.id);





    return (
        <div>
            <div className='flex justify-around  items-center m-7 border border-[#e4e0e0] p-4 rounded-2xl'>
                <img className='w-15 h-15' src={content.image} />
                <h1>{content.title}</h1>
                <h2>$ {content.currentBidPrice}</h2>
                <h3>{content.timeLeft}</h3>

                
                <button onClick={()=>{
                    handleAddToCart(content)
                    
                }}  
                    
                className={`btn rounded-xl ${isAdded ? "bg-green-500 text-white" : "bg-gray-200"}`}><GoHeart className='w-5 h-5' /></button>
            </div>
        </div>
    );
};

export default LeftContent;


