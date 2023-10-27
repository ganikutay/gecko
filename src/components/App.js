import React,{useEffect} from "react";
import SearchBar from "./SearchBar";
import CoinList from "./CoinList";
import axios from "axios";
//import AddMovie from "./AddMovie";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
//import EditMovie from "./EditMovie";







const App = () => {

   /*  state = {
        coins: [
            
          ],

          searchQuery: ""

    } */

//-----------------------------------------AXIOS ILE JSON DOSYALARI-------------------------------------------------------

useEffect(() => {
    getCoins();
}, [])

    
//---------------------------------getMovies()-------------------------------------
    const getCoins = async () => { 
        const response = await axios.get("http://localhost:3002/coins");
        console.log(response);
        this.setState({coins: response.data})
    }

/* 
 //------------------------------------------SEARCH MOVIE----------------------------------------
        const searchCoin = (event) => {
            console.log(event.target.value)
            this.setState({searchQuery: event.target.value})
        }


//-------------------------------------------------------------------------------------------------
    
        
        let filteredCoins = this.state.coins.filter(
            (coin) => {
                return coin.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        ).sort( (a,b) => { 
            return a.id < b.id ? 1 : a.id > b.id ? -1 : 0    
        })  */

 

        return(
            <>
            <Router>

                <div className="container">
                    <Switch> 
                        
                        <Route path="/" exact render={() => ( 
                        

                            <React.Fragment>     
                                {/* <div className="row">
                                    <div className="col-lg-12">
                                        <SearchBar searchCoinProp={searchCoin}/> 
                                    </div>
                                </div> */}

                                <CoinList
                                     /* coins={filteredCoins} 
                                    deleteCoinProp={deleteCoin}   */
                                />
                            </React.Fragment>

                        )}/> 
                    </Switch>
                </div> 

            </Router>
            </>
        ) 
    }

    /* npx json-server --watch src/api/coins.json --port 3002  */


export default App;
















/* 


const searchBook = (event) =>{
    console.log(event.target.value);
    setSearchQuery(event.target.value);
}


 let filteredBooks = books.filter(
    (book) => {return book.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1}).sort( (a,b) => {
        return a.id < b.id ? 1 : a.id > b.id ? -1 : 0}) */




