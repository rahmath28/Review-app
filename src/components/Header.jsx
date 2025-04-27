
import { useContext,useEffect } from "react";
import ThemeContext from "../context/FeedBackTheme";
import { FaRegMoon } from "react-icons/fa6";
import Button from "../shared/Button";
import { Link } from "react-router-dom";



//ella applicatin ku header theve,  header component ethukuna header ku na style kudukka poren.

// default props (props means argument la ) na enna na , antha component la na ethum pass pannalana ithu work agum., like function defult parameter..

//  pass panna props  la pass pannathu works agum.

const Header = ({ text = "Review App",  bgcolor = "#9A1750", textColor = "white" }) => { // default props we shouls pass in function parameters like  js.

  // intha text ,bgcolor, textcolor ellam just a variables than , na props pass pandra values , ennoda css properties works agum..

  //  react la original css use pannanumna camel cases la irukkanum like that : backgroundColor, color , color >> ku second word illa so athu normal ah than irukkum..

  const {theme,toggleTheme} = useContext(ThemeContext)

   // Set body class based on theme >> (sideeffect whenever page loads , i can change theme color )
   useEffect(() => {
    document.body.className = theme; // This will add the theme as a class to the body ( i think body ku theme set pandren.. )
  }, [theme]); // theme state eppolam update agutho appolam enakku sideeffect work agum..

  // created a header style in  dynamic (we can use multiple times) so i can use multiple times and add styles .
  const headerStyle = { // curly bracers use pannithan get panna mudiyum....
    backgroundColor: bgcolor, // backgroundColor >> header kana backgroundColor , naa props la pass pann pora bgcolor, so itha na thirumbi use pannanum na , header component la bg color la enna color pass pandreno atha ennoda backgroundColor display agum..
    color: textColor, // header kana (color is textcolor) is na props la pass pannapora text color..

  }
  return (
    <header style={headerStyle} >
      {/* adding style to header ina dynamic way.., so that i can use multiple times.. */}
      <div className="container">

        <div>
         {/* a tag use panna reload , agum so used link tag from react router dom. */}
        <Link to="/"><h2>{text}</h2></Link>
        <Link to="/about">About Us</Link>
        <div className="switch" >
       
        <Button version="primary">
        <FaRegMoon   onClick ={toggleTheme}   size={"30px"}  // Color when the switch is on
              />
        </Button>
        </div>        
        </div>

      </div>


    </header>
  )
}

export default Header 

// export and import ah modules nu solluvanga..., export pannubothu export default kuduthutta nama import pannumpothu, curly bracers use panna theva illa..