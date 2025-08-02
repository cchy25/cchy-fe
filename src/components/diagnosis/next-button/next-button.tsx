'use client';
import Image from "next/image";
import classes from "./next-button.module.css";
import { useRouter } from 'next/navigation';
import { diagnosisQuestions } from "@/data/question";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function NextBtn() {
  const router = useRouter();
  const { id } = useParams();
  const current = Number(id);
  const total = diagnosisQuestions.length;
  const answers = useSelector((state: RootState) => state.answers.answers);

  const question = diagnosisQuestions.find(q => q.id === current);

  const isAnswered = (() => {
    const value = answers[current];
    if (!question) return false;

    if (question.isMultiple) {
      return Array.isArray(value) && value.length > 0;
    }
    return value !== undefined;
  })();

  const handleNext = () => {
    if (!isAnswered) return; // 응답 안했으면 이동 금지
    if (current < total) {
      router.push(`/diagnosis/${current + 1}`);
    }
  };

  return (
    <button 
        className={classes.navBtn}
        onClick={handleNext}
        disabled={!isAnswered}
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