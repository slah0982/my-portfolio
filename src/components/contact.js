import SoicalMediaIcons from './Soical media'
import './contact.css'
import MainHeader from './main-header'
import OnviewAnmation from './onviewAnmation'

export default function Contact(){
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
                <form>
                    <label>Your name</label>
                    <input className='input' type='text'/>
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