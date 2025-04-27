import { FaRegTrashCan } from "react-icons/fa6";
import { MdModeEditOutline } from "react-icons/md";
import Card from "../shared/Card";
import { useContext } from "react";
import FeedBackContext from "../context/FeedBackContext";



const FeedBackItem = ( { item } ) => { // FeedbackItem ah dstructure pannneerukkom..

   const { deleteFeedBack, editFeedback } = useContext(FeedBackContext)
   //  const handleClik =(e) =>{
   //     console.log(e);   
   //  }

   return (
      <Card>
         {/* card ku default props la pass panna color work aguthu, inga na props pass pannala.. */}
         <div className="text-display">
            {item.text}
            {/* icons ah  button ah create pannatha enakku onclick functionalities work , agum.. */}
            <button className="delete" onClick={() =>deleteFeedBack(item.id)} > 
               {/* direct ah deletefeeback function ku inga kedaikira item id  oru function ah referce ah vachu pass panniten .ah pass panniten, refernce illama kudutha athu direct ah antha function ah call pandra maari.. */}
               <FaRegTrashCan color="brown" size = {"15px"}/>
            </button>
            <button className="edit" onClick={() =>editFeedback(item) } >
               {/* intha function ethukkuna na etha click pandren no antha item ah get pandrathukku, inga state la destructure panna item ah pass pandren , so next antha function ah create pannanum. */}
               {/* passed item in editfeedback */}
               <MdModeEditOutline  color="green" size = {"15px"}/>
            </button>
         </div>
      </Card>
   )
}

export default FeedBackItem





// // AI CODE

// import { FaRegTrashCan } from "react-icons/fa6";
// import Card from "../shared/Card";
// import Button from "../shared/Button";

// const FeedBackItem = ({ item, handleDelete }) => {
//   const handleClick = () => {
// console.log(123)       // just written it for understanding.
// console.log(item.id) // just written it for understanding.

//     handleDelete(item.id);
//   };

//   return (
//     <Card>
//       <div className="text-display">
//         {item.text}
//         <Button
//           type="button"
//           version="delete" // Assuming you have a "danger" version in your Button component for styling
//           isDisabled={false}
//           onClick={handleClick} // Passing handleClick to Button's onClick
//         >
//           <FaRegTrashCan color="brown" />
//         </Button>
//       </div>
//     </Card>
//   );
// };

// export default FeedBackItem;


