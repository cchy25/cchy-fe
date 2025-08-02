'use client';

import Link from 'next/link';
import classes from './page.module.css';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { diagnosisQuestions } from '@/data/question';
import BackBtn from '@/components/diagnosis/back-button/back-button';
import NextBtn from '@/components/diagnosis/next-button/next-button';
import CompleteBtn from '@/components/diagnosis/complete-button/complete-button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { selectAllOptions, setAnswer, toggleMultipleAnswer } from '@/store/answerSlice/answerSlice';

export default function DiagnosisPage() {
  const { id } = useParams();
  const questionId = Number(id);
  const dispatch = useDispatch();

  const answers = useSelector((state: RootState) => state.answers.answers);
  const total = diagnosisQuestions.length;

  const question = diagnosisQuestions.find(q => q.id === questionId);
  if (!question) return <div>문항을 찾을 수 없습니다.</div>;

  const selectedValues = answers[question.id] ?? (question.isMultiple ? [] : null);

  const handleOptionClick = (optionValue: any) => {
  const isRegionQuestion = question.id === 14;
  const isAllRegion = optionValue === "ALL";

  if (question.isMultiple) {
      if (isRegionQuestion && isAllRegion) {
        const allRegionValues = question.options
          .filter(opt => opt.value !== "ALL")
          .map(opt => opt.value as string);

        const currentValues = Array.isArray(selectedValues) ? selectedValues : [];

        // 이미 전체 선택된 상태라면 → 모두 해제
        const isAllSelected =
          currentValues.length === allRegionValues.length &&
          allRegionValues.every(v => currentValues.includes(v));

        if (isAllSelected) {
          dispatch(selectAllOptions({ questionId: question.id, values: [] }));
        } else {
          dispatch(selectAllOptions({ questionId: question.id, values: allRegionValues }));
        }
      } else {
        dispatch(toggleMultipleAnswer({ questionId: question.id, value: optionValue }));
      }
    } else {
      dispatch(setAnswer({ questionId: question.id, value: optionValue }));
    }
  };

  const isSelected = (value: any) => {
    if (!(question.id in answers)) return false; 

    if (question.isMultiple) {
      if (!Array.isArray(selectedValues)) return false;
      // 지역 문항이라면 전체 선택된 경우 모든 버튼 활성화
      if (question.id === 14 && selectedValues.length === question.options.length - 1) {
        return true;
      }
      return selectedValues.includes(value);
    }
    return selectedValues === value;
  };

  return (
    <main className={classes.diagnosisMain}>
      <section className={classes.diagnosisSection}>
        <div className={classes.diagnosisHeader}>
          <p>{String(questionId).padStart(2, '0')} of {total}</p>
          <Link href={"/"}>
            <div className={classes.closeBtn}>
              <Image 
                src="/icons/x.svg" 
                alt="close button"
                width={24}
                height={24} 
                priority
              />
            </div>
          </Link>
        </div>
        <div className={classes.questionBody}>
          <div className={classes.question}>
            <p className={classes.questionText}>
              {question.text}
            </p>
            {question.subtitle && (
              <p className={classes.questionSubtitle}>{question.subtitle}</p>
            )}
          </div>
          <div 
            className={`${classes.optionsContainer} ${
              question.id === 14 ? classes.scrollableOptions : ''
            }`}
          >
            {question.options.map((option, index) => (
              <button
                key={index}
                className={
                  isSelected(option.value)
                    ? `${classes.optionBtn} ${classes.active}`
                    : classes.optionBtn
                }
                onClick={() => handleOptionClick(option.value)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
        <div 
          className={`${classes.navigationButtons} ${
            questionId > 1 && questionId < total
              ? classes.bothButtons
              : questionId < total
              ? classes.nextOnly
              : ''
          }`}
        >
            {questionId > 1 && <BackBtn />}
            {questionId < total ? <NextBtn /> : <CompleteBtn />}
        </div>
      </section>
    </main>
  );
}