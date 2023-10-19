import React from 'react'
import { Saledata } from './Saledata'

const ProductSaleData = (props) => {
    console.log(props.img)
    return (
        <div className='product-sale-inner-container'>
            <div className='left-inner'>
                <div className="img">
                    <img src={`${props.img}`} alt="" />
                </div>
                <div className="h1-and-detail">
                    <h1>{props.h1 }</h1>
                    <p>{ props.details}</p>
                </div>
            </div>
            <div className='right-inner'>
                <ul>
                    <li>{props.stock }</li>
                    <li>{props.price }</li>
                    <li>{props.totalSales }</li>
                    
                </ul>
            </div>
        </div>
    )
}



const ProductSale = () => {
  return (
        <div className='product-sale-container'>
            <div className="top-heading-product-sale">
                <h3>Product Sell</h3>
                <div className="search-and-select">
                    <input type="search" name="productSearch" id="product-sale-search" placeholder='Search' />
                    <select name="Sale-days" id="sale-days">
                        <option value="30days">Last 30 days</option>
                        <option value="60days">Last 60 days</option>
                        <option value="90days">Last 90 days</option>
                    </select>
                </div>
            </div>
            <div className="heading-row">
                <div className="left-heading-row">
                    <p>Product Name</p>  
                </div>             
                <div className="right-heading-row">
                    <ul>
                      <li>Stock</li>
                      <li>Price</li>
                      <li>Total sales</li>
                    </ul>  
                </div>             
            </div>          
          <div>
                {Saledata.map((val) => {
                    return (
                        <ProductSaleData
                            key={val.id}
                            img={val.img}
                            h1={val.h1}
                            details={val.details}
                            stock={val.stock}
                            price={val.price}
                            totalSales={val.totalSales}
                        />
                    )
                })}
          </div>
        </div>
    )
}

export default ProductSale;