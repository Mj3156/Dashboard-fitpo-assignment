import React from 'react'
import './mainContainer.css';
import Topcard from './topcarddata';
import BarChartComp from './BarChartComp';
import PieChartComp from './PieChartComp';
import ProductSale from './ProductSale';


const Topcards = (props) => {
    return (
        <div className='top-cards'>
            <div className="icon">{props.icon}</div>
            <div className="description">
                <p>{props.type}</p>
                <h3>{props.amount}</h3>
                <p>{props.growth}</p>
            </div>
        </div>
    )
}


const MainContainer = () => {
  return (
        <div className='mainC'>
            <div className="main-content">
                <h1 className='heading'>Hello Mehul👋🏽,</h1>
                <div className="top4cards">
                    {Topcard.map((val) => {
                            return (
                                <Topcards
                                    key={val.id}
                                    icon={val.icon}
                                    type={val.type}
                                    amount={val.amount}
                                    growth={val.growth}
                                />
                            )
                        })}
                </div>
                <div className="graphs-container">
                    <div className="bar-graph-container">
                        <div className="heading-chart">
                            <div className="left-head-bar">
                                <h1>Overview</h1>
                                <p>Monthly Earning</p>
                            </div>
                            <div className="right-head-bar">
                                <button type='dropdown'>Quaterly </button>
                                <span>&#x2304;</span>
                            </div>
                        </div>
                        <BarChartComp />
                    </div>
                    <div className="pie-graph-container">
                        <h2>Customers</h2>
                        <p>65% Total new customers</p>
                        <PieChartComp/>
                    </div>
                </div>
                <div className="product-sell">
                    <ProductSale/>    
                </div>
              

            </div>
        </div>
    )
}

export default MainContainer