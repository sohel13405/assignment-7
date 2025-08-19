
import { GoX } from 'react-icons/go';

const RightContent = ({bid, handleDelete, handlePrice}) => {
    

    // console.log(bid)
    return (
        <div>
            <div className='parent mt-7 flex gap-7 border bg-white border-[#e4e0e0] p-4 rounded-2xl m-2'>

                <div>
                    <img className='w-20 h-20' src={bid.image} alt="" />
                </div>

                <div>
                    <div className='flex items-center gap-12'>
                    <h1>{bid.title}</h1>

                    <button onClick={()=>{
                        handleDelete(bid.id); 
                        handlePrice(bid.currentBidPrice)}} 
                        className='btn'><GoX />
                    </button>
                    
                    </div>

                    <div className='flex mt-6 gap-6'>
                        <h1>$ {bid.currentBidPrice}</h1>
                        <h2>{bid.timeLeft}</h2>
                    </div>
                </div>

               
            </div>
        </div>
    );
};

export default RightContent;

