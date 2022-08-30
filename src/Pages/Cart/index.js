import React from 'react'
import CartCard from '../../Components/CartCard';
import Loader from '../../Components/Loader';
import { useHeader } from '../../Context/HeaderContext'
import { useProduct } from '../../Context/ProductContext';
import styles from './styles.module.css';

const Cart = () => {
    const {cartIds}=useHeader();
    const {loading,productList}=useProduct();
    const products=productList.filter((item)=>cartIds.includes(item.id));


  return (
    <div className={styles.main}>
        <div className={styles.cardGroup}>
        {
            !loading?(
                products.map((item)=>{
                    return(
                        <CartCard item={item} key={item.id}/>
                    )
                })
            ):<Loader/>
        }
        </div>

    </div>
  )
}

export default Cart