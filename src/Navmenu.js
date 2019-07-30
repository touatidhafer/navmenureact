import React, { Component } from 'react';
import './navmenu.css';
class Navmenu extends Component {
    constructor(props){
        super(props)
        this.state=({
            style:'hidden',
            dropped :true
        })
       
    }
    drop=()=>{
        if(this.state.dropped===true)
          this.setState ({
              style:'drope',
              dropped: false
          })
          else{
              this.setState({
                  style:'hidden',
                  dropped:true
              })
          }

    }
    render() { 
        return ( 
            <div className='navbar'>
                <ul className='menu'>
                    <li className='menu-item'>Home</li> 
                    <li className='menu-item' onClick={this.drop}>Services
                       <ul className={this.state.style}>
                           <li className='drop-items'>For entrepreneurs</li>
                           <li className='drop-items'>For students</li>
                           <li className='drop-items'>For hobbyists</li>
                                                 
                       </ul>
                    </li>

                    <li className='menu-item'>Contact</li>

                </ul>

            </div>
         );
    }
}
 
export default Navmenu;