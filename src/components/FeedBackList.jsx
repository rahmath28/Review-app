import { useContext, useEffect } from "react"
import FeedBackItem from "./FeedBackItem"
import FeedBackContext from "../context/FeedBackContext"


//context create pannale ,, use than pannuvom so usecontext imported here.

// feedbackcontext la than state irukku, provider la value feedback state ah pass panni , inga getpanni , seperate item ah feedback item ku pass pandren..

const FeedBackList = () => {

// na FEEDBACKPROVIDER value la pass panna feedback ah get pandren

   // usecontext la irukka state ah display panna poren , map panni seperate ah..


   const {feedBack } = useContext(FeedBackContext) // ithuthan syntax to get data from usecontext (Boiler plate code..)

    if (feedBack.length === 0) {
        return <p className=" container feed-len">No FeedBack Yet</p> // container kulla enakku kedaikum .. 
    }
    // { feedBack.length === 0 && <p>No FeedBack Yet</p> } // this condition no needed.
    // useEffect(() =>{
    //     console.log("hello number works")
    // },[number]) 
    return (


        <div className="feedBack-list">
            {/* {number}
            <button className="btn btn-primary" onClick={iNumber}>click</button> */}
            {/*  na useContext la   irunthu get panna feedback ah map pandren.. , for map  use pannale >>  curly bracers must  and also pass id in key (must key means that item >> id )..*/}
            {
                feedBack.map((item) => (// passing each items to feedbackitem..
                    <FeedBackItem key={item.id} item={item}  /> // feedbackItem component ku props ah pass pandren..// item oru variable la objects ah pass pandren.
                )) 
            }

        </div>

    )
}

export default FeedBackList





///////////////WITH PROPS DRILLING /////

/*
import FeedBackItem from "./FeedBackItem"


const FeedBackList = ({ feedBack, handleDelete }) => {

    if (feedBack.length === 0) {
        return <p className="feed-len">No FeedBack Yet</p>
    }
    { feedBack.length === 0 && <p>No FeedBack Yet</p> }
    return (


        <div className="feedBack-list">
            {
                feedBack.map((item) => ( // na get pandra each item , feedback item component ku pass pandren.
                    <FeedBackItem key={item.id} item={item} handleDelete={handleDelete} /> // item props name that is varible and on it am passing each item.
                ))
            }

        </div>

    )
}

export default FeedBackList

*/