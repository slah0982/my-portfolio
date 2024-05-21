import { FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";

export default function SoicalMediaIcons(){
    const IStyle = {fontSize: '1.5rem'}
    return(
        <div 
            className="icons"
            style={{
                display: 'flex',
                gap: '10px'
            }}
        >
            <a href="/"><FaFacebookF title="facebook" style={IStyle}/></a>
            <a href="/"><FaWhatsapp title="WhatsApp" style={IStyle}/></a>
            <a href="/"><PiTelegramLogo title="Telegram" style={IStyle}/></a>       
        </div>
    )
}