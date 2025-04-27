import { useContext } from "react"
import { FaTruckMonster } from "react-icons/fa6"
import ThemeContext from "../context/FeedBackTheme"
// const{theme} =useContext(ThemeContext)

// card oda white background vera engayathu venum na use panndrathukkaga na card ah component ah ctreate panndren.

// children >> react oda inbuilt element atha destructure pandrom, card component ulla irukka ellame enakku children than.

// reverse is nama create pandra props. used default props in function parameter like js.

// reverse props  is  to change card color.., venumna color change pannikalam so..

// for boolean values double quotes is not needed.

// card component initially card ah return pannuthu (<div className={`card > initially card than irukku ), initially card ah than irukku , props la pass panna reverse condition true na double quotes la kudutha reverse add agirum , reverse false na card mattum irukkum reverse add agathu. .

// add style for card.reverse class.

// enakku future already irukka class la ethum add aganum na props la pass panni true kuduthu, next get pandra comndition la " pass pannanum." (like reverse props)

const Card = ( {children, reverse =true} ) => { // default props na function parameter la pass pannanum..
  return (
    // <div className={`card ${reverse ? "reverse" : null } `}> // intha maari use pannalam..
    //  below && operator use panniyum , pannal && nale true than so reerse class add agum.. , && use panna null use panna theva illa..
    <div className={`card ${reverse && "reverse" } `}>
      {/* reverse true na intha reverse class add agum.. */}
        {children}
        {/* card kulla irukka elame children than.. */}
    </div>
  )
}

export default Card

// example for card
{/* <card>
   sample text // this is children here
  </card> */}