import classes from './complete-button.module.css';

interface CompleteBtnProps {
  onClick: () => void;
}

export default function CompleteBtn({onClick}: CompleteBtnProps) {
  return (
    <button className={classes.completeBtn} onClick={onClick}>
      진단 완료
    </button>
  );
}