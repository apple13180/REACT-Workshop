import plus from '../image/plus.svg'
import minus from '../image/minus.svg'
import deleteicon from '../image/delete-icn.svg'
import { MyCartContext } from '../management/context'

const CartItem =({id,image_url,name,price,quantity})=>{
    const {removeItem,toggleQuentity,formatNumber} = MyCartContext()
    return(
        <div className='item'>
            <div className='product_image'>
                <img src={image_url} alt={name}/>
            </div>
            <div className='description'>
                <span>{name}</span>
                <span>Price: {formatNumber(price)}</span>
            </div>
            <div className='quantity'>
                <button onClick={()=>toggleQuentity(id,"increment")}>
                    <img className='plus-btn' src={plus} alt='' />
                </button>
                <input type='text' value={quantity} disabled/>
                <button onClick={()=>toggleQuentity(id,"decrement")}>
                    <img className='minus-btn' src={minus} alt='' />
                </button>
            </div>
            <div className='total-price'>
                {formatNumber(quantity * price)}
            </div>
            <div className='remove' onClick={()=>removeItem(id)}>
                <img src={deleteicon} alt=''/>
            </div>
        </div>
    )
}
export default CartItem