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
           <OnviewAnmation duration={0.5}> <a href="https://www.facebook.com/profile.php?id=100008109253460" target="blank"><FaFacebookF title="facebook" style={IStyle}/></a></OnviewAnmation>
           <OnviewAnmation duration={1}><a href="https://wa.me/+218910153246" target="blank"><FaWhatsapp title="WhatsApp" style={IStyle}/></a></OnviewAnmation>
           <OnviewAnmation><a href="https://t.me/+218910153246"><PiTelegramLogo title="Telegram" style={IStyle}/></a>  </OnviewAnmation>     
        </div>
    )
}