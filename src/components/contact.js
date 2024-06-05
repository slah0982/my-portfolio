import SoicalMediaIcons from './Soical media'
import './contact.css'
import MainHeader from './main-header'
import OnviewAnmation from './onviewAnmation'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const serviceId = "service_1vlyo43";
    const templateId = "template_a51awp8";
    const publicKey = "7O63L_4SiJ-2jUtLG";

    

    // hundel chages on the inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value
        }));
    };

    // handle submit the form
    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.send(
          serviceId,
          templateId,
          {...formData, to_name: "salah"},
          publicKey
        ).then((result) => {
          console.log(result.text);
          alert('Thank you for the message, we will contact you as soon as possible.');
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        }).catch((error) => {
          console.error(error.text);
          alert('Failed to send message, please try again later.');
        });
    
    };
      


    return(
        <section id='contact'>
            <MainHeader title='CONTACT'/>
            <div className='container'>
                <div className='soical-media'>
                    <OnviewAnmation dir='x' dirValue={-100}>
                    <h1>Soical media</h1>
                    </OnviewAnmation>
                    <SoicalMediaIcons />
                </div>
                <form onSubmit={handleSubmit}>
                    <label>Your name</label>
                    <input
                        className='input'
                        onChange={handleChange}
                        required name='name'
                        value={formData.name} 
                        type='text'
                    />
                    <label>Your email</label>
                    <input
                        className='input'
                        onChange={handleChange}
                        required name='email'
                        value={formData.email} 
                        type='email'
                    />
                    <label>Message</label>
                    <textarea 
                        className='input'
                        onChange={handleChange}
                        name='message'
                        value={formData.message} 
                        maxLength={500} 
                        style={{minHeight: '100px'}}
                    />
                    <button>Send</button>
                </form>
            </div>
        </section>
    )
}