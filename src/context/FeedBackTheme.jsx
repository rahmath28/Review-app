import { createContext, useState } from "react";

const ThemeContext =createContext(null)

//next create provider to pass functions and state..

export const ThemeProvider =( {children} )=>{ // export keyword is mandatory..

    // state for to manage theme.

    const [theme, setTheme] = useState("light") // initially theme light mode la irukku..

    // create  a toggle function to change mode .

    const toggleTheme =() =>{

        // going to manage theme state.

        setTheme(curr => (curr === "light" ? "dark" :"light")) // if else.
        // curr >> means cuurent theme light ah iruntha dark mode aganum, else light..
        // 'curr === "light"' checks if the current theme is light, then switches to dark, else switches to light.

    };


    return(
         //  value la ennoda theme state amd function ah pass panneerukken...
        <ThemeContext.Provider value ={{ theme, toggleTheme}}> 
        {/* passed theme and function.. */}
        {children}

        </ThemeContext.Provider>
    )
}

export default ThemeContext









//////////// INITIAL MISTAKEN CODE , WITHOUT UNDERSTANDING..////


// import { createContext } from "react";

// const FeedBackTheme = createContext();

// export const FeedBackThemeProvider = ( {children} ) =>{

//     // const themeStyle = {
//     //     backgroundColor :"grey",
        
//     //       // Align items in the center
        
//     // }
//     const themeStyle =() =>{
//         backgroundColor ="grey"
//     }

//     return(
//         <FeedBackTheme.Provider  value ={{
//             themeStyle
//         }}>
//         {children}
//         </FeedBackTheme.Provider>
//     )
// }

// export default FeedBackTheme