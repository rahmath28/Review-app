import React from 'react'
import { Link } from 'react-router-dom'



const Thanks = () => {
  return (
   <div className='thank bottom-space'>
     <p>
     Thank you for your valuable feedback! We truly appreciate your insights and suggestions, as they help us improve our services. Your input is essential in ensuring we meet your needs and expectations. We look forward to implementing your ideas and continuing to provide you with the best experience possible.</p>
     <h4>We invite you to visit us again soon!</h4>
     <Link to="/" className='btn btn-primary'>Back to Home</Link>

   </div>
  )
}

export default Thanks