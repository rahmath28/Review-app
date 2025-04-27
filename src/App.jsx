import { useState } from "react"
import Header from "./components/Header"
import FeedBackList from "./components/FeedBackList"
import FeedBackLength from "./components/FeedBackLength"
import FeedBackForm from "./components/FeedBackForm"
import { FeedBackProvider } from "./context/FeedBackContext"
import Footer from "./components/Footer"
import { ThemeProvider } from "./context/FeedBackTheme"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./components/About"
import Thanks from "./components/Thanks"


// first react router dom install pannathan routers use panna mudiyum..

// routes ku always child route than irukkanum..



const App = () => {


  return (

    // theme for all so ellethukku mela atha pass panneerukken..
    //  router ellam component kum mela than irukkanum....
    <Router>
      <ThemeProvider>
        <FeedBackProvider>
          <Header />

          <div className="container">
            {/* Routes ku aduthu direct ah route than irukkanum..  */}
            <Routes>
              <Route path="/" element={
                <>
                {/* initial ah entha element lam render aganumo athallam route la irukkum.. */}
                  <FeedBackForm />
                  <FeedBackLength />
                  <FeedBackList />
                </>
              } />
              {/* setting next route */}
              <Route path="/about" element={<About />} />
              {/* setting next route */}
              <Route path ="/thank" element={<Thanks/>}/>


            </Routes>
          </div>
          <Footer />

        </FeedBackProvider>
      </ThemeProvider>
    </Router>


  )
}

export default App








//////////////// WITH PROPS DRILLING /////////////

/*
 
import { useState } from "react"
import Header from "./components/Header"
import FeedBackList from "./components/FeedBackList"
import FeedBackLength from "./components/FeedBackLength"
import FeedBackForm from "./components/FeedBackForm"
import { v4 as uuidv4 } from "uuid"

const App = () => {

  const [feedBack, setFeedBack] = useState([ // array of three objets.
    { id: 1, text: "This is sample 1" },
    { id: 2, text: "This is sample 2" },
    { id: 3, text: "This is sample 3" }


  ])
  // created function to get newFeedBack.
  const addFeedBack = (newFeedBack) => {
    // console.log(newFeedBack) // after props drill got data.

    // i dont have id here, so using mpm uuidv4.// to generate id.
    // just imported and consoled.

    // console.log(uuidv4()) // generating id randomly.

//  newfeedback is object so we can add anything by using dot.

    newFeedBack.id = uuidv4(); // now passed id for newfeedback.

    //  console.log(newFeedBack) // got both text and id.

  // in react state update  pannanum nala , spread operator vachuthan , state update pannum , athu setfeedback function ah vechu, spread operator is like copy of the state.


    setFeedBack([newFeedBack, ...feedBack]) // updating in state with setFeedBack.

  } // passe it in form , because i have a newfeedback there. and btn submit.


  // for delete feedBack.
  // anga kedachatha intha function ku  pass panni ,inga state update pandrom.


  const deleteFeedBack = (id) => {
    if (confirm("Are you sure ?")) {
      setFeedBack(
        feedBack.filter(item => item.id !== id)  // i think filter returns array // first item >> array  of  objects in feedback,  item.id naa pass pandrathoda id la  ethu not equal ah irukko atha filter panna soldren,  athan filter method.
      )
    }

  }
  return (
    <>
      <Header /> // is for all componets , occupies full width (but contents of header is 70% i assigned in header componenr ), because container is below header.
      <div className="container"> // 70% width space.
        <FeedBackForm handleAdd={addFeedBack} />
        <FeedBackLength feedBack={feedBack} />
        <FeedBackList feedBack={feedBack} handleDelete={deleteFeedBack} />

      </div>
    </>
  )
}

export default App

*/