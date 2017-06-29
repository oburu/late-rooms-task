import React, {Component} from 'react';
import ListItem from './list_item';

const HOTELS = require ('../hotels.json');

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      hotels: HOTELS,
      orderUp: false,
      orderDown: false
    };

    this.filter = this.filter.bind(this);
    this.handleOrderUp = this.handleOrderUp.bind(this);
    this.handleOrderDown = this.handleOrderDown.bind(this);
  }

  handleOrderUp(e){
    let hotels = this.state.hotels;
    this.setState({
      orderUp:true,
      orderDown:false,
      hotels: hotels.sort((a, b)=> Number(a.stars) - Number(b.stars))
    });
  }

  handleOrderDown(e){
    let hotels = this.state.hotels;
    this.setState({
      orderUp:false,
      orderDown:true,
      hotels: hotels.sort((a, b)=> Number(b.stars) - Number(a.stars))
    });
  }

  filter(e){
    this.setState({filter: e.target.value});
  }

  render(){
    //set styles for the buttons
    let arrowUpClassNames = this.state.orderUp ? "arrow arrow-up-on":"arrow arrow-up-off";
    let arrowDownClassNames = this.state.orderDown ? "arrow arrow-down-on":"arrow arrow-down-off";

    //control the filter bar
    let items = this.state.hotels;
    if(this.state.filter){
      items = items.filter((item) =>{
        let faci = item.facilities.filter(f => {
          return f.toLowerCase().includes(this.state.filter.toLowerCase());
        });
        return faci.length > 0;
      });
    }
    const hotels = items.map((hotel, i) => {
      return <ListItem key={i} hotel={hotel}/>
    });

    return(
      <div>
        <div className="controls">
          <div className="order-stars">
            <p>Star rating</p>
            <span className={arrowUpClassNames} onClick={this.handleOrderUp}/>
            <span className={arrowDownClassNames} onClick={this.handleOrderDown}/>
          </div>
          <input type="text" className="search-bar" onChange={this.filter} placeholder="Search facilities..."/>
        </div>
        <div className="list">
          {hotels}
        </div>
      </div>
    );
  }
}

export default List;
