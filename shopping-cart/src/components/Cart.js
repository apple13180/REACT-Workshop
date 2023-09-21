import { MyCartContext } from "../management/context"
import CartItem from "./CartItem"

const Cart=()=>{
    const {cart,total,formatNumber} = MyCartContext()
    if(cart.length === 0){
        return(
            <div className="shopping-cart">
                <div className="empty">ไม่มีสินค้าในตะกร้า</div>
            </div>
        )
    } else {
        return (
            <div className='shopping-cart'>
                <div className='title'>สินค้าในตะกร้า</div>
                {cart.map((data,index)=>{
                    return <CartItem key={data.id} {...data}/>
                })}
                <div className='footer'>ยอดรวม {formatNumber(total)} บาท</div>
            </div>
        )
    }
}
export default Cart