import { atom } from 'recoil';

// 답변을 { questionId: answer } 형태로 관리
export const userAnswersState = atom<Map<number, string | string[] | boolean | null>>({
  key: 'userAnswersState',
  default: new Map(),
});

export const totalQuestionsState = atom<number>({
  key: 'totalQuestionsState',
  default: 13,
});

export const currentQuestionState = atom<number>({
  key: 'currentQuestionState',
  default: 1,
});