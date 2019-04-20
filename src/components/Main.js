import React,{Component} from 'react'
import Title from './Title'
import Photowall from './Photowall'
import AddPhoto from './addPhoto'
import {Route} from 'react-router-dom'


/*const posts=[
    {id:'0',
     description:'Jesus Loves You',
    imageLink:'https://previews.123rf.com/images/miceking/miceking1605/miceking160500504/56619125-jesus-loves-you.jpg'
    },
    {id:'1',
    description:'Jesus Loves You',
    imageLink:'https://www.creativefabrica.com/wp-content/uploads/2018/04/Jesus-Loves-You-1.jpg'
    },
    {id:'2',
    description:'Jesus Loves You',
    imageLink:'https://st3.depositphotos.com/3637391/19283/i/1600/depositphotos_192838882-stock-photo-hand-lettering-jesus-loves-you.jpg'
    }
]*/

class Main extends Component{

    constructor(){
        super()
    /*    this.state = {
            posts:[ {id:0,
            description:'Jesus Loves You',
           imageLink:'https://previews.123rf.com/images/miceking/miceking1605/miceking160500504/56619125-jesus-loves-you.jpg'
           },
           {id:1,
           description:'Jesus Loves You',
           imageLink:'https://www.creativefabrica.com/wp-content/uploads/2018/04/Jesus-Loves-You-1.jpg'
           },
           {id:2,
           description:'Jesus Loves You',
           imageLink:'https://st3.depositphotos.com/3637391/19283/i/1600/depositphotos_192838882-stock-photo-hand-lettering-jesus-loves-you.jpg'
           }],
           screen:'photos' //photos or add Photo
        }

        this.removePhoto = this.removePhoto.bind(this);*/
        //this.navigate = this.navigate.bind(this);
    }

    /*componentDidMount(){
        const data = SimulateFetchFromDatabase();
        this.setState({
            posts:data
        })
    }

    addPhoto(postSubmitted){
        this.setState((state)=>({
            posts:state.posts.concat([postSubmitted])
        }))
    }

    removePhoto(postRemoved){
        console.log(postRemoved.description);

        this.setState((state)=>({
            posts:state.posts.filter(post => post!==postRemoved)
        }))
    }*/
    
    render(){
        console.log(this.props.posts)
        return (<div>
            <Route exact path="/" render={()=>(
                <div>
                   <Title title={'Photo Wall'}/>
                   <Photowall posts={this.props.posts}/>
                   {/*<Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/>*/}
               </div> 
            )}></Route>
                
            { /*<Route path="/addPhoto" render={({history})=>(
                 <AddPhoto onAddPhoto={(addedPost)=>{
                     this.addPhoto(addedPost);
                     history.push('/')
                 }}/>
                )}/>*/ }
                                    
                    
                </div>)
    }
}

function SimulateFetchFromDatabase(){
    return [
        {id:'0',
        description:'Jesus Loves You',
       imageLink:'https://previews.123rf.com/images/miceking/miceking1605/miceking160500504/56619125-jesus-loves-you.jpg'
       },
       {id:'1',
       description:'Jesus Loves You',
       imageLink:'https://www.creativefabrica.com/wp-content/uploads/2018/04/Jesus-Loves-You-1.jpg'
       },
       {id:'2',
       description:'Jesus Loves You',
       imageLink:'https://st3.depositphotos.com/3637391/19283/i/1600/depositphotos_192838882-stock-photo-hand-lettering-jesus-loves-you.jpg'
       }
    ]
}

export default Main;