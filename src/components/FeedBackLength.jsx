import { useContext } from "react"
import FeedBackContext from "../context/FeedBackContext"

// while importing use context and feedbackcontext both neede..

const FeedBackLength = () => {

   const {feedBack} =useContext(FeedBackContext)

  return (

    <div className="container">
      <div className="length">
        <p>Length :{feedBack.length}</p>
      </div>
    </div>

  )
}

export default FeedBackLength



//////////////WITH PROPS DRILLING //////

/*




const FeedBackLength = ({ feedBack }) => {
  return (

    <div className="container">
      <div className="length">
        <p>Length :({feedBack.length})</p>
      </div>
    </div>

  )
}

export default FeedBackLength

*/
