import plus from '../image/plus.svg'
import minus from '../image/minus.svg'
import deleteicon from '../image/delete-icn.svg'

const CartItem =({id,image_url,name,price,quantity})=>{
    return(
        <div className='item'>
            <div className='product_image'>
                <img src={image_url} alt={name}/>
            </div>
            <div className='description'>
                <span>{name}</span>
                <span>Price: {price}</span>
            </div>
            <div className='quantity'>
                <button>
                    <img className='plus-btn' src={plus} alt='' />
                </button>
                <input type='text' value={quantity} disabled/>
                <button>
                    <img className='minus-btn' src={minus} alt='' />
                </button>
            </div>
            <div className='total-price'>
                {quantity * price}
            </div>
            <div className='remove'>
                <img src={deleteicon} alt=''/>
            </div>
        </div>
    )
}
export default CartItem