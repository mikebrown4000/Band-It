import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import plusIcon from '../assets/plusIcon.png'
import minusIcon from '../assets/minusIcon.png'

class ListItem extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      collapsed: true
    };
  };

  handleClick(){
    this.setState(prevState =>({
      collapsed: !prevState.collapsed
    }));
  };

  toggleHeight() {
    return this.state.collapsed ? 'none' : 'block';
  };

  toggleIcon() {
    return this.state.collapsed ? plusIcon : minusIcon;
  };

  render(){
    const { title, endpoint, img, field1, field2, field3, field4 } = this.props.listItem;
    const styleObj = {
      display: this.toggleHeight()
    };
    return(
      <div className='event-container'>
        <div className='list-item-header'>
          <div className='icon-holder' onClick={this.handleClick}>
            <img src={this.toggleIcon()} className='icon' alt='icon'/>
          </div>
          <Link className='list-item-header-link' to={endpoint}>
            <h2>{title}</h2>
            <div className='img-holder'>
              <img src={img} alt='poster'/>
            </div>
          </Link>
        </div>
        <div className='expand-container' style={styleObj}>
          <div>
            {field1}
          </div>
          <div>
            {field2}
          </div>
        </div>
      </div>
    );
  };
};

export default ListItem
