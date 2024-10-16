import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
    const navigate = useNavigate()

   const showDeatail=()=>{
    navigate(`/product/${item.id}`)

   }
   
    //if(item?.choice == false)
      //  {
       //     return null;
       // }
       // else{
  return (
    <div onClick={showDeatail}>
      <img src={item?.img} className='hover-image'/>
      <div>Conscious choice</div>
      <div> {item?.title} </div>
      <div>${item?.price}</div>
      <div>{item?.new == true?"신제품":""}</div>

    </div>
  )
//}
}

export default ProductCard
