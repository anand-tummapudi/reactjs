import React,{Component} from 'react';

class addPhoto extends Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
       const imageLink =  event.target.elements.link.value
       const description = event.target.elements.description.value
       const post = {
           id: new Date,
           description:description,
           imageLink:imageLink
       }
       
       this.props.onAddPhoto(post)

        if(description && imageLink){   
            console.log("Adding new Post");
            this.props.onAddPhoto(post)
        }   
    }
    render(){
        return (
        <div>
        <h1>Photowall</h1>
        <div>
            <form className="form" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Link" name="link"/>
                <input type="text" placeholder="Description" name="description"/>
                <button>Post</button>
            </form>
        </div>
        </div>
        )}
}

export default addPhoto;