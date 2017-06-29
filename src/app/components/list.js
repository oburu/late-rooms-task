import React, {Component} from 'react';
import ListItem from './list_item.js';

const HOTELS = require ('../hotels.json');

class List extends Component {
  constructor(props){
    super(props);
    this.state = HOTELS;

    this.filter = this.filter.bind(this);
  }

  filter(e){
    this.setState({filter: e.target.value});
  }

  render(){
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
            <span className="arrow arrow-up-off"/>
            <span className="arrow arrow-down-off"/>
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
