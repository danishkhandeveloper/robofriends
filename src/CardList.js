import react from 'react'
import Card from './Card'

const CardList = ({robots}) =>{
    // if(true){
    //     throw new Error('NOOOOO');
    // }
    return (
        <div>
            {
                robots.map((user,index)=>{
                    return( <Card id={robots[index].id} name={robots[index].name} email={robots[index].email}/>)
                })
            }
        </div>
    )
    
}
export default CardList;