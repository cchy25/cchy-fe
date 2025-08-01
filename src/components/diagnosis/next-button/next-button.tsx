import Image from "next/image";
import classes from "./next-button.module.css";

interface NextBtnProps {
  onClick: () => void;
}

export default function NextBtn({onClick}: NextBtnProps) {
  return (
    <button 
        className={classes.navBtn}
        onClick={onClick}
    >
        <p>다음</p>
        <div>
            <Image 
            src="/icons/d_nextbtn.svg" 
            alt="next button"
            width={24}
            height={24} 
            priority
            />
        </div>
    </button>
  );
}