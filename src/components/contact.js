import SoicalMediaIcons from './Soical media'
import './contact.css'
import MainHeader from './main-header'

export default function Contact(){
    return(
        <section id='contact'>
            <MainHeader title='CONTACT'/>
            <div className='container'>
                <div className='soical-media'>
                    <h1>Soical media</h1>
                    <SoicalMediaIcons />
                </div>
                <form>
                    <label>Your name</label>
                    <input className='input'/>
                    <label>Your email</label>
                    <input className='input' type='email'/>
                    <label>Message</label>
                    <textarea className='input' maxLength={500} style={{minHeight: '100px'}}/>
                    <button>Send</button>
                </form>
            </div>
        </section>
    )
}