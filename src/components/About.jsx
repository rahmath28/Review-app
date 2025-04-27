import React from 'react'
import Button from '../shared/Button'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div className='about'>
        <h2>Welcome to my About Us page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est reiciendis dolorum porro, provident itaque quibusdam similique doloremque maiores ipsam. Architecto aliquam corrupti ex voluptatem, modi repellat possimus molestiae corporis suscipit vitae praesentium laboriosam earum. Deserunt minus culpa fugit ipsum ab, fuga dignissimos vel alias quos exercitationem cupiditate explicabo totam? Enim.</p>
        <p>Lorem ipsum dolor  Quaerat esse, aliquam tenetur assumenda repellat minus ut mollitia ea veniam adipisci odio ab nesciunt nihil reprehenderit fuga vitae nostrum.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ratione voluptatibus quia ducimus deleniti dolore dolorem consectetur autem expedita voluptatem, necessitatibus nobis illo sed minus debitis eos deserunt assumenda non rem totam? Voluptates, quasi placeat inventore laboriosam, laborum amet rerum quibusdam veniam praesentium, cum consequuntur architecto ipsam maiores reprehenderit fugiat adipisci in nostrum quis labore quo. Illum tempore et quam aliquam maiores distinctio quaerat cum molestias nostrum nemo libero obcaecati possimus ipsam explicabo est eaque ab eveniet, tenetur consequuntur consequatur?</p>
        <Link to="/" className='btn btn-primary'>Back to Home</Link>
    </div>
  )
}

export default About