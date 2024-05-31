import { FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import OnviewAnmation from "./onviewAnmation";

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
           <OnviewAnmation duration={0.5}> <a href="/"><FaFacebookF title="facebook" style={IStyle}/></a></OnviewAnmation>
           <OnviewAnmation duration={1}><a href="/"><FaWhatsapp title="WhatsApp" style={IStyle}/></a></OnviewAnmation>
           <OnviewAnmation><a href="/"><PiTelegramLogo title="Telegram" style={IStyle}/></a>  </OnviewAnmation>     
        </div>
    )
}