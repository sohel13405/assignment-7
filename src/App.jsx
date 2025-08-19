
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Content from './components/content/Content'
import { useState } from 'react'
import RightContent from './components/rightContent/RightContent'
import toast, { Toaster } from 'react-hot-toast'





function App() {
  const [bids, setBids] = useState ([])

  const [countAmount, setCountAmount] = useState (0)

  
  
const handleAddToCart = (content) => {
  const exists = bids.find((item) => item.id === content.id);

  if (exists) {
    toast.error("❌ Item already in cart!");
    return;
  }

  
  setBids([...bids, content]);
  setCountAmount(countAmount + content.currentBidPrice);
  toast.success("✅ Item added to cart!");
};


const handleDelete = (id)=> {
const remainingBid = bids.filter((content)=> content.id !== id)
setBids(remainingBid)
toast.success("✅ Item successfully deleted");
}

const handlePrice = (price) => {
  const totalPrice = countAmount - price;
  setCountAmount(totalPrice)
}




  

 

  return (
    <>
      
      <Navbar></Navbar>
      <Banner></Banner>
      <Toaster position="top-right" reverseOrder={false} />


    <div className="main-container  ">
      <div className='mt-15 ml-25'>
      <h1 className='text-3xl'>Active Auctions</h1>
      <p>Discover and bid on extraordinary items</p>
      </div>

      
   
  <div className='flex mt-20  m-20 gap-12 '>
    
   <div className="left-container  w-[70%] bg-white rounded-2xl ">

   <div className="flex gap-12  justify-around pt-3 mt-5 space-x-12">
     <div className='text-[#8b8989] font-bold'> <h1>Items</h1></div>

      <div className='flex gap-16 text-[#8b8989] font-bold'>
      <h1>Current Bid</h1>
      <h1>Time left</h1>
      <h1>Bid now</h1>
      </div>
    </div>
    
    <Content 
    handleAddToCart={handleAddToCart}
    bids={bids}
  
     ></Content>
    
    </div>

    <div className="right-container w-[30%] text-center pt-5 bg-white rounded-2xl  ">
      <h1 className='text-2xl text-[#8b8989] bg-white border-[#e4e0e0] p-4 rounded-2xl  '> Favorite Items</h1>
      {
        bids.map((bid)=> <RightContent key={bid.id} bid={bid} handleDelete={handleDelete} handlePrice={handlePrice} ></RightContent>)
      }
      <h2 className='bg-white border-[#e4e0e0] p-4 rounded-2xl m-2 text-2xl font-bold'>Total Amount : $ {countAmount}</h2>
    </div>
  </div>


    </div>
    
      
      <Footer></Footer>
      
      
    </>
  )
}

export default App
