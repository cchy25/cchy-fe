import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AnswerValue = string | string[] | boolean | null;

interface AnswerState {
  answers: { [key: number]: AnswerValue }; // questionId 별 답변 저장
}

const initialState: AnswerState = {
  answers: {},
};

const answerSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    setAnswer: (
      state,
      action: PayloadAction<{ questionId: number; value: AnswerValue }>
    ) => {
      state.answers[action.payload.questionId] = action.payload.value;
    },
    toggleMultipleAnswer: (
      state,
      action: PayloadAction<{ questionId: number; value: string }>
    ) => {
      const current = state.answers[action.payload.questionId];
      const array = Array.isArray(current) ? [...current] : [];
      const exists = array.includes(action.payload.value);
      const newArray = exists
        ? array.filter((v) => v !== action.payload.value)
        : [...array, action.payload.value];
      state.answers[action.payload.questionId] = newArray;
    },
    selectAllOptions: (
        state,
        action: PayloadAction<{ questionId: number; values: string[] }>
    ) => {
        state.answers[action.payload.questionId] = action.payload.values;
    },
  },
});

export const { setAnswer, toggleMultipleAnswer, selectAllOptions } = answerSlice.actions;
export default answerSlice.reducer;