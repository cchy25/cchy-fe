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
      // 복수 선택 문항은 배열이고 길이가 0보다 커야 함
      return Array.isArray(value) && value.length > 0;
    }
    // 단일 선택 문항은 값이 존재해야 함 (null도 유효한 답변이 될 수 있음)
    return answers.hasOwnProperty(q.id);
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

      // 만약 value가 null이 아니고, result 객체에 이미 해당 field가 있다면
      // 배열로 만들어서 값을 추가
      if (value !== null && result.hasOwnProperty(field)) {
        // 기존 값이 배열이 아니면 배열로 만들고, 새 값을 추가
        if (!Array.isArray(result[field])) {
          result[field] = [result[field]];
        }
        // value가 배열이면 spread 연산자로 합치고, 아니면 그냥 추가
        if (Array.isArray(value)) {
          result[field].push(...value);
        } else {
          result[field].push(value);
        }
      } else if (value !== null) {
        // 기존에 필드가 없거나, null이 아닌 값인 경우
        // isMultiple이 true이면 배열로, false이면 단일 값으로 저장
        result[field] = question.isMultiple ? (Array.isArray(value) ? value : [value]) : value;
      }
    });

    // 중복 제거 (배열인 경우)
    for (const key in result) {
      if (Array.isArray(result[key])) {
        result[key] = [...new Set(result[key])];
      }
    }

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