'use client';
import Image from "next/image";
import classes from "./back-button.module.css";
import { useRouter } from 'next/navigation';
import { useParams } from "next/navigation";

export default function BackBtn() {
    const router = useRouter();
    const { id } = useParams();
    const current = Number(id);

    const handleBack = () => {
        if (current > 1) {
        router.push(`/diagnosis/${current - 1}`);
        }
    };

    return (
        <button className={classes.navBtn} onClick={handleBack}>
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