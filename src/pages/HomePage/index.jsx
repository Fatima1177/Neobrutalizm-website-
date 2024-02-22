import './style.scss';
import HeadingText from '../../components/HeadingText'
import Header from '../../components/Header'

import ProductCard from '../../components/ProductCard';
import Footer from '../../components/Footer';
import FooterBottom from '../../components/FooterBottom'
import SignUpSec from '../../components/SignUpSec';
import LifeStyleCard from '../../components/LifeStyleCard';
import LineSec from '../../components/LineSec';
import { useEffect, useState} from 'react'
import BtnGreen from '../../components/BtnGreen';
import CollectionSec from '../../components/CollectionSec';


const HomePage = () => {
  

  const [allProducts, setAllProducts] = useState([])

  const getData = async() => {
  try{
    const res = await fetch('http://localhost:3000/products')
    const json = await res.json()

    if(res.status === 200) {
      setAllProducts(json)
    }
    else{
      alert("Data gelmedi")
    }

  }catch(err){
    console.log(err)
  }
  
}

useEffect(() =>{
  getData()
},[])

  return (
    <div id='homePage-wrapper'>
      <div className="container">
        <Header/>
        <section id='hero'></section>
        <LineSec/>
        <HeadingText title="Payday Deals"/>
        <div className="products-wrapper">
          {
            allProducts.map(product =>{
              return <ProductCard product={product}/>
            })
          }

        </div>
        <BtnGreen title="View All"/>
        <HeadingText title="Top Collections"/>
        <CollectionSec/>
        <HeadingText title="Best Seller"/>

        <div className="products-wrapper">
          {
            allProducts.map(product =>{
              return <ProductCard product={product}/>
            })
          }

        </div>
        <BtnGreen title="View All"/>
        <SignUpSec/>
        
        <HeadingText title="Lifestyle"/>


        <LifeStyleCard/>
        <BtnGreen title="Read All"/>
        <Footer/>
        <FooterBottom/>

      </div>

    </div>
  )
}

export default HomePage