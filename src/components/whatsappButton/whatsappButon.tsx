import {FaWhatsapp} from 'react-icons/fa';
import styles from './whatsapButton.module.css';
export interface WhatsappButtonProps {
    phoneNumber: string;
    message: string;
    onclick?: () => void;
    className?: string;
}
export default function WhatsappButton({ phoneNumber, message, onclick, className }: WhatsappButtonProps) {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    return (
    <button className={className} onClick={() => {
        window.open(whatsappUrl, '_blank');
        if (onclick) {
            onclick();
        }
    }}>
        <FaWhatsapp />
        <span className={styles.chatText}>Chat Us</span>
     </button>
    );
}