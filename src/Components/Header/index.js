import React from 'react'
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { useHeader } from '../../Context/HeaderContext';
import styles from './styles.module.css';
import { useProduct } from '../../Context/ProductContext';

const Header = () => {
    const {cartIds,cartTotal}=useHeader();
    const {setCategory}=useProduct();

  return (
    <div className='flex'>
        <Link to='/'className=''>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAB9dre7bcCm5Wp7i0yS5p9n3cc3dPSjrq_g&usqp=CAU" onClick={()=>setCategory("")} style={{width: "200px",
    height: "100px"}}></img>
        </Link>
        
        <Link to='/fav' className='block mt-4 ml-auto mr-6'>
            <div  style={{width:"150px",
    height:"50px",
    borderRadius: "5px",
    border:"1px solid black",
    boxShadow: "1px 1px 4px 1px grey",
    fontSize: "20px",
    fontWeight: "bold",textAlign:"center",marginRight: "8vw",
    marginTop: "3vh"}}>
                <button>WishList
                    <span><HeartIcon  style={{color:"red",transform:"scale(0.3)",marginTop:"-5vh"}}/></span>
                </button>
                <div className={styles.favNum}></div>:<></>
            </div>
        </Link>
        <Link to='/cart' className='block mt-3'>
            <div className='relative block'>
                <button className={styles.cartButton}>
                    <ShoppingCartIcon />
                </button>
                {cartTotal>0?<div className={styles.cartNum}>{cartIds.length}</div>:<></>}
            </div>
        </Link>
    </div>
  )
}

export default Header