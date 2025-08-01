import Image from "next/image";
import classes from "./back-button.module.css";

interface BackBtnProps {
  onClick: () => void;
}

export default function BackBtn({onClick}: BackBtnProps) {
    return (
        <button className={classes.navBtn} onClick={onClick}>
            <div>
            <Image 
                src="/icons/d_backbtn.svg" 
                alt="back button"
                width={24}
                height={24} 
                priority
            />
            </div>
            <p>이전</p>
        </button>
    );
}