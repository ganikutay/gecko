import React from 'react'
import {Link} from'react-router-dom'





const CoinList = (props) => {


    const truncateOverview = (string, maxLenght) => {
        if(!string) return null;
        if(string.lenght <= maxLenght) return string;
        return `${string.substring(0, maxLenght)} ...`;
    }


    return (
        <div className="row">
                          
                {props.coins.map((coin,i) => ( 
                                        
                <div className="col-lg-3" key={i}> 
                    <div className="card mb-4 shadow-sm">
                        <img src={coin.image} className="card-img-top" alt="Sample coin" />  
                        <div className="card-body">
                            <h5 className="card-title">{coin.name}</h5>
                            
                            {/* <p className="card-text">{truncateOverview(coin.overview, 80)}</p> */}

                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" onClick={(event) => props.deleteCoinProp(coin)} className="btn btn-sm btn-outline-danger">Delete</button>
                                                        
                                <Link 
                                    type="button"
                                    className="btn btn-sm btn-outline-primary"
                                    to={`edit/${coin.id}`}  

                                    >Edit</Link>
                                
                                <h4><span className="badge badge-info">{coin.current_price}</span></h4>  
                            </div>
                        </div>
                    </div>
                </div>
                
                
                ))}
                
                
                 
                


            </div>
    )
}

export default CoinList
