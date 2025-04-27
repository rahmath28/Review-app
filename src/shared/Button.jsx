
// Button en component ah create pandrom na engallam enakuu button theva paduthu anga once na component ah create pannita simple ah multile times  import panni use  pannikalam , for example like js function.

//  oru component enna return pannuthunu theliva kudukkanum appothan use padra edathula beter ah irukku, (ex :  Button > button , Card >> card, Header > header)

// Button component return button , so that we can use button whenever we import it. atha import pannum pothu return la button iruntha thane namaku button kedaikum , so return la button irukku.

// children destructured that is react inbuilt element , Button ulla irukka elame enakku children than.

// Button componet oda parameter la irukkathu , default props name that is variable we pass in Button component pass panna porathu , return la irukkathu  dynamic ah change pandrathukkandi use pandra variable name.

//  button default props la  irukka props variables naa componet use pannumpothu pass pandrathu , return la irukkathu na props la pass pandratha get pandrathukanathu.

// Button type initially button ah irukku, version is primary, button initially enable ah irukku.

// button return irukka variable names dynamic ah changge pandrathukkandi ullathu, na props la pass pandratha get pandrathukkanathu.

// classname initially btn ah irukku , so next na version pass panna athu  btn oda add agum.

//rturn la kuduthurukka variable names vanthu na na antha components la pass pandratha get panna pora variables.

//  initially button enable ah irukku .

const Button = ( {children, type="button", version = "primary",isDisabled = false}) => {
  return (
    <button type = {type} disabled = {isDisabled} className={`btn btn-${version}`}>
      {/* props la kuduthathu than variables.. */}
      {/* inga return la type variable la na props la pass panna type get panna poren, disabled >> isDisabled la pass pannathu, classname initial btn ah irukku , version pass panna add agum. */}
        {children}
    </button>
  )
}

export default Button

// example for button children
{/* <Button> // componet ulla irukka ellame chilfren than
     send // {children here}
</Button> */}