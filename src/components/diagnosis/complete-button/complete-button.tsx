'use client';
import classes from './complete-button.module.css';
import { useRouter } from 'next/navigation';
import { diagnosisQuestions } from '@/data/question';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function CompleteBtn() {
  const router = useRouter();
  const answers = useSelector((state: RootState) => state.answers.answers);

  const allAnswered = diagnosisQuestions.every(q => {
    const value = answers[q.id];
    if (q.isMultiple) {
      return Array.isArray(value) && value.length > 0;
    }
    return value !== undefined;
  });

  const handleSubmit = async () => {
    if (!allAnswered) {
      alert('모든 질문에 답변해주세요.');
      return;
    }

    const result: Record<string, any> = {};

    Object.entries(answers).forEach(([questionIdStr, value]) => {
      const questionId = Number(questionIdStr);
      const question = diagnosisQuestions.find(q => q.id === questionId);
      if (!question) return;

      const field = question.options[0]?.field;
      if (!field) return;

      if (Array.isArray(value)) {
        result[field] = [...value];
      } else {
        result[field] = value;
      }
    });

    console.log('최종 제출 데이터:', result);

    try {
      // await fetch('/api/diagnosis', {
      //   method: 'POST',
      //   body: JSON.stringify(result),
      //   headers: { 'Content-Type': 'application/json' },
      // });
      router.push('/information/roadmap');
    } catch (err) {
      console.error('제출 오류:', err);
    }
  };

  return (
    <button 
      className={classes.completeBtn} 
      onClick={handleSubmit}
      disabled={!allAnswered}  
    >
      진단 완료
    </button>
  );
}