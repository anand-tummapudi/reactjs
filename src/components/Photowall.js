import React,{Component} from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

function Photowall(props){
    
        return <div>
            <Link className="addIcon" to="/addPhoto"></Link>
                {/*<a onClick={props.onNavigate} href="#addPhoto">Add Photo</a>*/}
                    {/*<button onClick={props.onNavigate} className="addIcon">+</button>*/}
                <div className="photoGrid">

                    {props.posts.sort(function(x,y){
                        return y.id - x.id
                    }).map((post,index)=><Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
                </div>
            </div>
}

/*class Photowall extends Component{
    render(){
        return <div>{this.props.posts.map((post,index)=><Photo key={index} post={post}/>)}</div>
    }
}*/

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto:PropTypes.func.isRequired
}

export default Photowall