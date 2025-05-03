import React, { useContext, useEffect, useState } from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button'
import FeedBackContext from '../context/FeedBackContext'
import { useNavigate } from 'react-router-dom'


// use navigate hook is used to , navigating (shifting to anothe page) to another page.


const FeedBackForm = () => {

    // just for understanding , finally after completed the project used and checked usenavigate hook.. (dont get confused.)

    const navigate = useNavigate() // created a variable and store the method on it.


    // destructuring feedback edit and its state.

    const { addFeedBack, feedBackEdit, updateFeedback, setFeedBackEdit } = useContext(FeedBackContext)
    // initial ah add feedback functiona h inga usecontext use panni , destructure pandrom...

    // passed add feedback in props drill of handle add.refer below.


    // FOR FORM I CREATE THREE STATES. one for to get data, one for btn enable or disable, last one for to display error message..

    const [text, setText] = useState("") // for to get data.
    const [btnDisable, setBtnDisable] = useState(true) //  for enable or disable. initially (btn disabled..)
    const [message, setMessage] = useState("") // to pass error message.


    // next , na input field la type pandratha get pannanum.. (athukku oru event irukku >> onChange for input field..)


    // enakku oru oru time uhm editfeedback state change agum poguthu, hello console agum.
    useEffect(() => {
        if (feedBackEdit.edit === true) { // na click pannita feedBackEdit state la na click pandrathu update agidum , so appo edit true agidum.
            setBtnDisable(false) // enable btn.
            setText(feedBackEdit.item.text) // click pannupothu feedbackedit state la click panna item , fill agidum athoda text ah  , na initial al create pnna text state la settext use panni  get panneerukken.
            
            // reason to pass in settext en na input la na text state la the data vah get pandren.

            // so next submit

            // initaial ah feedBackEdit la item mpty ah irukku, click pannumpothu enakku kedaikira item oda text ah inga get pandren.
        }
    }, [feedBackEdit]) // these works whwnever page loads, mean na click pandra item  state la update gum appo than intha sideeffect work agum..(whenever i click sideeffect function works..)
 
    // na eppo la edit icon ah click pandreno appo lam ennoda feedBackEdit true agum and antha item fill agum state la , appo intha side effect work agum..

    // whenever my feedbackedit changes , button will enable, settext will update .

  
    const handleTextChange = (e) => {
        // console.log(e.target) // got input .

        // console.log(e.target.value) //  e.target la input ,  .value la got text ., kedacha text ah state la update  pandra.

        setText(e.target.value) // ithula text pass panneerukken, so text statela naa type pandra data update agum ., so next antha text input value ku pass pandren.
        // ippo input la na type pandratha ennoda text state la update panneerukken, enna type pannalum athu store agum..
        // intha state ah ennoda input oda value ku pass pandren appo than , submit pannumpothu enakku data kedaikum..

        // STATE LA TYPE PANDRATHA GET PANNI 3 CONDITIONS KUDUKKUREN..

        if (text === "") { // text means ennoda state..
            setBtnDisable(true) // Disabled.
            setMessage(null) // no message passed.
            // trim method >> removes unwanted spaces, only calculate characters.. and we can check length for string..
        } else if (text !== "" && text.trim().length <= 10) {   // two condtions 1 st is etho type panniten input la, next for character.
            setBtnDisable(true)  // Disabled..
            setMessage("Text must be atleast 10 characters") // passing message ,na pass pandra inth message ah input grp ku keela get pandren.
        } else {
            setBtnDisable(false) //  finall enabled for submission.
            setMessage(null) // no message passed. 
            // everyting okay next submit.
        }
       
        // got text with  these 3 connditions next , submit.
    }

    const handleTextSubmit = (e) => { // passed e to stop reload. dont forget it..
        e.preventDefault()

        // better while submit check condition again., here greater than 10 ah iruntha than athu nadakkum.
        if (text.trim().length >= 10) { 

            // na get pandra text ah oru object ah vanguren.

            const newFeedBack = {
                text: text // first text is varible to hold my data, second text whre i got  my text data...
            }

            // console.log(newFeedBack) // got text as object. // next.
            if (feedBackEdit.edit === true) { // na item ah ui la click pandra appo ennoda state fill agi edit true agidum, 
                //feedbackedit state item na get  pandra appo enakku true agidum..

                updateFeedback(feedBackEdit.item.id, newFeedBack) // params la pass pandrathu, feedbackedit state la fill agura item oda id, and new ah type pandra feedback..
                  // edit true na update aganum , illa na add feedback apdiye irukkum.
                // update feedback la na click panna appo  fill ana item id and new feedback means na new ah type pandrathu...

                setFeedBackEdit({  // after updating , done edit false again , orelse review will added repeatedly on once selected edit item.
                    item: {},
                    edit: false
                })
            } else {
                addFeedBack(newFeedBack) // working properly after props drill got , data and consoled  in app.jsx.

                // after added feedback navigated to about page, we can navigate to another page by passing only path in navigate. ex: below.
                navigate("/thank")
            
            }
            
            setBtnDisable(true) // DISABLED AFTER SUBMISSION...
            setMessage(null) // no message passing..
            setText("") // Empty the textt state after submission...
            
        }


    }
    // console.log(text)
    return (
        // card ulla irukka elllame athoda children than.
        <Card>
            <form onSubmit={handleTextSubmit} >
                {/* form has onSubmit event in react */}
                <h2>Add your Feedback</h2>
                <div className="input-group">
                    <input value={text} onChange={handleTextChange} type="text" placeholder='Add your reviews here' />
                    {/* onchange event , input la type pandratha get pandrathu.. */}
                    <Button  type="submit" isDisabled={btnDisable} className="input-btn" >
                        send
                    </Button>
                </div>
                {message && <p className='error'>{message}</p>}
                {/*  curly bracers is must to get data  */}
                {/* if message occured ,i get it in a para with classname error and style color red .(error message)*/}

            </form>
        </Card>


    )
}

export default FeedBackForm



///////////////WITH PROPS DRILLING //////

/// why created feedback form >> reason naa type panni submit pandratha get pannanum so created a form 
/*
//  type panni get pannanum na form than theva. (input with btn.)

//  enakku add padren, na submit pandra data venum so created a form.


// FORM events >> onchange na input la na type pandrathu, onSubmit na to get data for form submission. .

// single form than irukku so direct ah form la onSubmit used.

import React, { useState } from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button'

const FeedBackForm = ({ handleAdd }) => {

    const [text, setText ] = useState("")
    const [btnDisable, setBtnDisable] = useState(true) // initiallybt disabled, itha than na form sedn btn ku props la pass pannerukken.
    const [message, setMessage] = useState("") // review oru minum charcters thevenu display pandrathuku.

    const handleTextChange = (e) => { // get panna poren text.
        // console.log(e.target) // got input 

        // console.log(e.target.value) // got text, value variable la than state irukku.

        //  got text next update it in state to get it.

        // settext na create panni vachurukku state , athula uppdate [pannanum na settext method use panni than panna mudiyum]

        setText(e.target.value) // ithula text pass panneerukken, so text state la naa type pandra data update agum.
       
        // next pass it in input value to get data ehen submit 

        if (text === "") {
            setBtnDisable(true) // not enable., disabled.
            setMessage(null) // no message passed.
        } else if (text !== "" && text.trim().length <= 10) { // trim method doent count  spaces , only chracters.(spaces ah consider pannama , characters ah mattum consider pannum.)
            setBtnDisable(true)  // not enable.
            setMessage("Text must be atleast 10 characters") // intha message ah form la get pandre, input-groups keela.

        
        } else {
            setBtnDisable(false) // finally button enabled.
            setMessage(null) // no message passed. // everyting okay next submit.
        }

    }

    const handleTextSubmit = (e) => { // we must pass e in function parameter of form , to stop reload.
        e.preventDefault() // to  stop reload.

        // ippo data kedachuruchu, antha data va oru object ah get pandren.

        const newFeedBack = {
            text: text // first text is just a varible to hold my data, second text whre i get text.
        }
        // console.log(newFeedBack) // got text as object. // next.

        handleAdd(newFeedBack) // working properly after props drill got , data and consoled  in app.jsx.
        setBtnDisable(true) // not enable.
        setText("") // no message.
        
        // to update it in original feedback state, props drill that state as function, to pass the data got.
    }
    // console.log(text)
    return (
        // card ulla irukka elllame athoda children than.
        <Card>
            <form onSubmit={handleTextSubmit} >
                <h2>Add your Feedback</h2>
                <div className="input-group">
                    <input value={text} onChange={handleTextChange} type="text" placeholder='Add your reviews here' />
                    // onchange na type pandra appo nadakkurathu.
                    // kedaikira text input oda value la venum, because submit click pandra appo athu theve.
                    <Button isDisabled={btnDisable} type={"submit"} >
                        send
                    </Button>
                </div>
                {message && <p className='error'>{message}</p>} // intha condition ennna na if message iruntha atha para la message ah get pandren.

            </form>
        </Card>


    )
}

export default FeedBackForm

*/