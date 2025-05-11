













// //// final last FINAL CODE AFTER USED OUR ENDPOINT AND MADE CHANGES IN OUR DB.JSON..///  // 

import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // id not need in fetch..

const FeedBackContext = createContext(); // feedback ku context create pandren.
// console.log(FeedBackContext) // has provider  in the createContext , so i have to share my states and funnctions by that provider.
 
export const FeedBackProvider = ( { children } ) => {  // export keyword is mandatory , Boiler plate code (syntax,emmit), ethukkana provider na feedback kana provider..


  // const [number, setNumber] = useState(0); // just for understand use effect created a state number and inumber function..

  // const iNumber = () =>{
  //   setNumber(prev =>{
  //     return prev+1;
  //   })
  // }

  const [feedBack, setFeedBack] = useState([]); // going to update feedbacks ,  in endpoint of json server.



  // STATE FOR EDIT FEEDBACK...(for edit ku na click pandra item ah oru state la get pannanum, get panni athu aprm update pannanum..)
  const [feedBackEdit, setFeedBackEdit] = useState({ // usestae en object na , na get panna porathu oru object..
    item: {}, // Item la initially entha  object illa , so edit false..
    edit: false, // Edit mode off initially.. (this is for validation..)
  });

    // FOR EDITFEEDBACK FUNCTION TO GET ITEM >> na editfeedback la click pandra appo antha item ah get pandren.., na get pandra item na create panna feedback edit state la ,
  // setfeedbackedit use panni update pandren , initial la empty ah iruntha antha item , object la , enakku kedacha item ah fill pandren, next appo enakku edit true pandren >> reason click panni item get pandren na , edit thana pannan poren so edit is true.....
  const editFeedback = (item) => { // passed item in a editfeedback function , in feedbackitem , so creating a function here..
    setFeedBackEdit({
      item: item, // first one is varible  to hold my object i click.
      edit: true, // na click panni item kedachutta edit true..
    });
  };

  useEffect(() => { //  normally call (sideeffect >> works whenever page loads.) , useefeect la oru function run aguthu..
    fetchFeedback(); // Fetch feedbackstate when the component loads.
  }, []); // empty array means dependencies.., dependenciess kudukkalana while loop mari run agite irukkum..


  // 1. Fetch feedback from the JSON server (GET method)
  
  const fetchFeedback = async () => { // this function is to display , server la irukka datas..
    const response = await fetch("https://your-service-name.onrender.com/posts");// ennoda end point..
    const data = await response.json(); // data  variablle now holds my  datas .. next update that in feedback state.
    console.log(data)
    setFeedBack(data); //  enakku kedacha datava setfeedbCK USE  panni update panniten , Update the state with fetched data ,   ******[ FINALLY AFTER GETTING DATA , UPDATE IN FEEDBACK STATE BY SETFEEDBACK METHOD]****
  };
  // intha function ah ippo call pandrathuthan matter.. initial ah na , site ah open pannupothu enakku display aganum( like >> domcontentloaded in js, here react >> useEffect hook..)
  

  // 2. Add new feedback to the JSON server (POST method)

  const addFeedBack = async (newFeedBack) => { // pasing my feedback.
    // newFeedBack.id = uuidv4(); // Assign a unique ID to the new feedback , [HERE ID IS NOT NEEDED FOR FETCH..., FETCH  automatically generate id ]
    const response = await fetch("https://your-service-name.onrender.com/posts",{ // First one is my endpoint , second na pass pandra data method. 
      method: "POST", // to add data (post method)
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedBack), // parameter la get pandra data va than pass pannanum..
    });
    const resData = await response.json(); // resdata contains  ennoda newfeedback here. >> next updating na pass pandra new data(newfeedback) in my feedback state..
    setFeedBack([resData, ...feedBack]); // Add the new feedback (resdata) to the state   , ******[ FINALLY AFTER GETTING DATA , UPDATE IN FEEDBACK STATE BY SETFEEDBACK METHOD]****
    // kedacha data va , spread operator use panni , [] arry la add pandrom..
    // clearEditState();// Clear the edit state after adding new feedback >> (USED IN EACH STATES >> // Reset the item to an empty object,// Set edit mode to false) refer cleareditstate function in line 362.  // here its not needed because i didnt edit here, 
  }; // called the addfeedback function in form..
  

  // 3. Update feedback on the JSON server (PUT method)
  const updateFeedback = async (id, updatedItem) => { // update feedback na  na edit la click  panni get panna item  ah, update pandra function.
    // id >> na click panni ennoda editfeedback statela fill ana item odaa id and updated item means , new feedback la na new ah type pandrathathan updated item nu vachurukken..
    const response =await fetch(`https://your-service-name.onrender.com/posts/${id}`, { // ithukku id theva ,template literals use panni id ah get pandren , next enna method nu soldrom..
      method: "PUT", // to update data (PUT METHOD)
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify(updatedItem), // enakku kedaikira new updated(na new ah type pannathu ) item than data , atha body ku json.stringify ah send pandren..
    
    });
    const resData = await response.json(); // resdata than ennoda updated data here. next update in feedback state.

    // update functionality feedback state la irukka ellathukku work aganum la , so athukkuthan map metod..
    
    setFeedBack(  //******[ FINALLY AFTER GETTING DATA , UPDATE IN FEEDBACK STATE BY SETFEEDBACK METHOD]****
      feedBack.map((item) => // map reason >>  each item ku intha method work aganum.
        item.id === id ? { ...item, ...resData } : item  // here curly braces reason , atha use pannithan entha oru variable ah yum get panna mudiyum // item.id which is equal to na pass pandra id ah iruntha , antha item ah oru copy eduthu, update pandra item oru copy eduthu setfeedback la update pandren..
      )
      // NE EDIT KU CLICK PANNA ID YUM , FEEDBACK AH LOOP PANNA ID YUM MATCH ANA , ATHA UPDATE PANDROM
      
      //  na click pandra item oda id and pass pandra id equal la iruntha , antha item ah oru copy edukkuren , next resdata na new ah type panna data .
      // Every item.id (from the full feedback list) is compared with the id of the item you clicked "Edit" on.
      // If both IDs match, it means: , "Hey! This is the exact feedback I'm trying to update." , So, it updates only that one using the new values.
    );

    // clearEditState(); // Clear the edit state after updating feedback, clear edit state ingathan theva..
  };



  // 4. Delete feedback from the JSON server (DELETE method)
  const deleteFeedBack = async (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      await fetch(`http://localhost:3000/posts/${id}`, {  // template literals use panni id ah get pandren, reason id ah vachuthan delete pannanum..
        method: "DELETE",
      });  // for delete , mentioning method is enough no ned to send data to body or headers, reason >> nama ethaiyum pass panna theva illa delete than pandrom, delete anathu diplay agathu..
      setFeedBack(feedBack.filter((item) => item.id !== id)); // Remove the deleted item from the state,  //******[ FINALLY AFTER GETTING DATA , UPDATE IN FEEDBACK STATE BY SETFEEDBACK METHOD]****
    }
  };

  // NO NEED FOR CLEAR EDIT STATE : SIMPLE LA FORM LA setFeedBackEdit state la item : {} empty object and edit false akiten , UPADTE KU APPRM DISABLE PANNITEN 

  // // 5. Function to clear the edit state, [ after click editfeedack state its state is updated and edit becomes trues, so after that , made to original state.]
  // const clearEditState = () => {
  //   setFeedBackEdit({
  //     item: {}, // Reset the item to an empty object
  //     edit: false, // Set edit mode to false
  //   }); 
  // };


  return ( // feedback provider returns >> feedbackContext.provider
    <FeedBackContext.Provider
      value={{ // provider la object ah kudutha than namma laala etsructure panna mudiyum..., intha value la than functions and objects pass pannanum..
        feedBack, // All feedback items
        feedBackEdit, // State for editing feedback
        addFeedBack, // Function to add new feedback
        deleteFeedBack, // Function to delete feedback
        editFeedback, // Set feedback to be edited
        updateFeedback, // Function to update feedback
        setFeedBackEdit, // for to disable edit sate after update ..

        // number,  >> these number state and i number function created and passed to just understand useeffect hook..
        // iNumber
      }}
    >
      {children} 
      {/* return oda parent  tag (means that feedbackContext.provider tag ku keela >> not its values..) ku keela irukka ellame enakku children than.. */}
    </FeedBackContext.Provider>
  );
};

export default FeedBackContext;

// use this feedbackContext in app.jsx ellathoda parent ah itha pass pannanum...

// next work on loading and toogle theme.









































































// import { createContext, useState, useEffect } from "react"

// // needed uuid here because , i am passing uuid in the context api now, after context api.
// import { v4 as uuidv4 } from "uuid"

// // why context api >> if i have states in context and i need it in another compoent we can just import that and get anywhere simply.( just by importing usecontext and use the datas )

// const FeedBackContext = createContext(); // feddbackcontext dra variable la, create context() irukku.

// // console.log(FeedBackContext)

// // provider is to pass value like state, function etc..

// // NOTE ** provider values ah state, function pass pannalam, ana state createcontext() irukka variable la than irukkum.

// export const FeedBackProvider = ({ children }) => { // boiler plate code.like synntax, export word is must, and children destructure is must because we use provider in top of the components.( so the below components of feedbackprovider is children of it , so we can pass and get values to each components)

//   const [feedBack, setFeedBack] = useState([
//     { id: 1, text: " Fast, efficient, and reliable! 1." },
//     { id: 2, text: "Great experience, will use again! 2" },
//     { id: 3, text: "Excellent, highly recommend! 3." },
//     { id: 4, text: "Quality product,  expectations! 4." }


//   ])

//     // THIS IS FOR  JSON DB ENDPOINT FETCH.
//     useEffect(() =>{ **** useefect hook (works whenevere page loads)

//       fetchFeedback() // called gunction when page loads (sideeffect), whenever page loads this function is called.
//     },[])

//   /// FINALLY AFTER USED CONTEXT API,  USING JSON SERVER (MOCK DATABASE >> USED ONLY FOR TESTING AND PROTOTYPE ) FOR STORING DATA///

//   const fetchFeedback = async () =>{ // this is like get function fetch from our db.json (endpoint).

//     const response = await fetch("http://localhost:3000/posts"); // fetching data from our post endpoint.

//     const data = await response.json(); // here i will get data.

//   //  console.log(data) // consoled and checked, it displays (array of three objects,  >> ((3) [{…}, {…}, {…}]) which is in our endpoint db.json , next update in feedback state.) 

//   setFeedBack(data) // setfeedback ku grathu ennoda state. enooda state la enakku kedaikira data va update panniten., now i called the function whenever page load my data will be displayed in ui because , i have updated it in my state.

// used useeffect hook for displaying feedback, below expample is the hook effect.

//   }
/*
//     useEffect(() =>{ **** useefect hook (works whenevere page loads)

//       fetchFeedback() // called function when page loads (sideeffect works), whenever page loads this function is called.
//     },[]) // empty array means dependencies, if we dont pass it it functions like while loop.

*/



//   >> INSTEAD OF USING LIKE THIS WE CAN DIRECTLY FETCH  IN OUR FUNCTION.******************************************** check below this function) WITH[ IMPORTANT ] line 100

// CHECK THE CODE BELOW THIS TYPE.( fetch la function ah library mari create pandrathukku bathila , direct ah function la use pannalam , check below this function) WITH[ IMPORTANT ] line 100




//   // FOR POST (adding something ) in our db.json(endpoint).
  
// //  POST is the correct method for adding new data to the server.

//  const postFeedback = async (url,data) =>{ // this is like get function fetch from our db.json (endpoint).

//     const response = await fetch("http://localhost:3000/posts",{ // post(adding data) in my end point .
      
//      method:"POST",
//      headers:{
//       "Content-type" : "application/json"
//      },
//      body:JSON.stringify(data)

//     }); // fetching data from our post endpoint.

//    // use (result or resdata ) instead of redeclaring 'data' here.
//    // const data = await response.json();  >> error dispplays because , i already used data variable in function paremeter , so change data to (resdata or result).
//    const resdata = await response.json(); // here i will get data, (existing data than irukkum nu nenaikiren initially en na na innum complete pannala.)

//    //so next addfeedback la updatepannumpothu , ennoda endpoint db.json la update aganum. reason >> why addfeedback ennoda end point la addpannanum, sousing post method.

  

//   //  console.log(resdata) // consoled and checked, it displays (array of three objects,  >> ((3) [{…}, {…}, {…}]) which is in our endpoint db.json , next update in feedback state.) 

//   // console.log(resdata)
// resdata naa pass panna pora data, ...feedback original feedback oda copy ( reason >> state la na update pannnum na spread opeartor use panni than updatae pannanum).
//   setFeedBack([resdata, ...feedBack]); // Append the new feedback to the existing array.
// now i have to call this function, where i have created addfeddback.


//   }

 //   [ IMPORTANT ]    USE LIKE THIS WE CAN DIRECTLY FETCH  IN OUR FUNCTION.***********************************************
/*


  const addFeedBack = async (newFeedBack) => {
    newFeedBack.id = uuidv4(); // Assign a unique ID to the new feedback
    const response = await fetch("http://localhost:3000/posts", { // eena method nu soldren. (POST >> ADDING DATA).
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedBack),
    });
    const resData = await response.json();
    setFeedBack([resData, ...feedBack]); // Add the new feedback to the state ,[ FINALLY AFTER GETTING DATA , UPDATE IN FEEDBACK STATE]

    clearEditState(); // Clear the edit state after adding new feedback >> (USED IN EACH STATES.)
  };


*/
  

//   // FOR TO UPDATE IN DB.JSON   >> INSTEAD OF USING LIKE THIS WE CAN DIRECTLY FETCH  IN OUR FUNCTION.
  
//   const putFeedback = async (url, data) =>{ // first one is url and the second one is data.

//     const response = await fetch("http://localhost:3000/posts", { // my endpoint .
//       method: "PUT",
//       headers: {
//         "Content-type": "application/json"
//       },
//       body: JSON.stringify(data) // na parameter la pass pandra data.
//     });

//     const resdata = await response.json()

//     console.log(resdata)
//   }

  

//     // for editFeedback we have create state first..
//     // initially edit false ah irukku, item empty ah irukke en na na initial la ethum pannala.
//     const [feedBackEdit, setFeedBackEdit] = useState({
//       item :{}, // item >> object.
//       edit :false
//   })
  
//   //2. Add new feedback to the JSON server (POST method)
//   //THIS ADDFEEDBACK FOR FETCH DB.JSON ENDPOINT.

//   const addFeedBack = async (newFeedBack) => { // newfeedback enaku puthusda kedaikirathu.
//     // newFeedBack.id = uuidv4(); // id not need in fetch id will automatically , generate in fetch.

  
//     // POST (ADDING data) the new feedback to the server and update local state.

//     // enakku kedaikira object ah ennoda endpoint la post (ADD) pannanum athukku na create panna function ah use pandren.

//     // postfeedback is function i created to POST (add data ) In my db.json. 

//    // i passed the newfeedback i get , iin my db

//     await postFeedback("http://localhost:3000/posts", newFeedBack); // reson why used post feedback function is above. ,

//    // first one is url , second one is data i passed in function parameter.
//   };
  

//    //THIS DELETEFEEDBACK FOR FETCH DB.JSON ENDPOINT.

//   const deleteFeedBack = async (id) => { // pass panna id ah get pandren.
//     if (confirm("Are you sure ?")) {
//       await fetch(`http://localhost:3000/posts/${id}`, {
//         method: 'DELETE'
//       });
//       setFeedBack(
//         feedBack.filter(item => item.id !== id) // item id which is not equal to naa pass pandra id.
//       )
//     }

//   }


//   /*
//   // FOR ADDFEEDBACK AFTER CONTEXT API.

//   // created function to get newFeedBack.

//  const addFeedBack = (newFeedBack) => {

//     // newFeedBack form la irunthu get pandra text ah , oru object ah vaguren text variable la.

//     // console.log(newFeedBack) // after props drill got data.

//     // i dont have id here, so using mpm uuidv4.
//     // just imported and consoled.

//     // console.log(uuidv4()) // generating id randomly.

//     newFeedBack.id = uuidv4();

//     //  console.log(newFeedBack) // got both text and id.

//     // i cant directly update in state like in js . push methods, here by using spread operator (coping or cloning  the state and update the state.  )

//     setFeedBack([newFeedBack, ...feedBack]) // updating in state with setFeedBack function .


//   }
//   */
  

//  /*
//       // FOR DELETEFEEDBACK AFTER CONTEXT API.

//     // shifting deletefeedback function from app to feedbackcontext because i dont have stte  in app , now state in feedback context.

//   // for delete feedBack. // copied frpm app.jsx to here to update .

//   // to delete create  icon , and add onclick event to it , and get item whre we get in feedback item.

//   const deleteFeedBack = (id) => { // pass panna id ah get pandren.
//     if (confirm("Are you sure ?")) {
//       setFeedBack(
//         feedBack.filter(item => item.id !== id) // item id which is not equal to naa pass pandra id.
//       )
//     }

//   }

//   */

//   const updateFeedback =(id, updItem) =>{ // form la pass pannatha get pandren
//     setFeedBack( // update in feedback state by using setfeedback
//       feedBack.map((item) => (item.id === id) ? {...item, ...updItem} : item) // get panna item ah copy pandren, update item ah copy pandren , else already irukka item.
//     )
//   }



//   // create a editFeedback function , to get item(review or object .)
//   // intha function ethukkuna , initial la enakku edit false ah irukku en na na ethaiyum , edit pannala,function la na edit panna poren.
//   // function la get pandra item ah edit panna poren.

//   // na get pandra item ah , feedbackedit state la , item nu oru empty object vachurunthen athula update pandren, so appo edit true agum.

//   const editFeedback = (item) => { // feedbackitem la pass panna item ah get pandren., so next update pannanum.
//     setFeedBackEdit({ // feedbackedit state la get panna item ah update pandren.
//       item: item,//first irukka item initaial stae la declare panna empty object ah hold panna variable, next item enallu kedaikira object.
//       edit: true // edit pandren na edit true.
//     })
//   }

//   // afer pass both state and function in provider.
//   // get both in form because form la than edit pannanum.

  
//   return (
//     <FeedBackContext.Provider value={{
//       feedBack, // passed state i have created.
//       feedBackEdit, // passed feedBackEdit state i have created in form , because edit functionality works there.
//       addFeedBack, // i shifted addFeedBACK from app to context  after context api , beacuse i dont have state in app, here  i have the state.
//       deleteFeedBack, // i shifted deleteFeedBack from app to context after context api , beacuse i dont have state in app, here i have the state.
//       editFeedback ,
//       updateFeedback
//     }}>

//       {children}
//     </FeedBackContext.Provider>
//   )
// }
// // provider ku ulla irukka elllame children than., provider ellathukku top la than irukkanum beacuse ithula than sate irukku.

// export default FeedBackContext;