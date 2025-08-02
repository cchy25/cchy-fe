import classes from './page.module.css';

export default function RoadmapPage() {
  return (
    <>
        <div className={classes.container}>
            <div className={classes.stepContainer}>
                <p className={classes.stepTitle}>Step1 : 창업 준비</p>
                <div className={`${classes.step} ${classes.active}`}>
                    창업 상황 진단
                </div>
                <div className={`${classes.step} ${classes.deactive}`}>
                    창업 아이템 발굴
                </div>
            </div>
            <div className={classes.stepContainer}>
                <p className={classes.stepTitle}>Step2 : 창업 기획</p>
                <div className={`${classes.step} ${classes.active}`}>
                    비즈니스 모델 수림
                </div>
                <div className={`${classes.step} ${classes.deactive}`}>
                    창업 멘토링
                </div>
            </div>
            <div className={classes.stepContainer}>
                <p className={classes.stepTitle}>Step3  : 창업 (사업화)</p>
                <div className={`${classes.step} ${classes.active}`}>
                    비즈니스 모델 수림
                </div>
                <div className={`${classes.step} ${classes.deactive}`}>
                    창업 멘토링
                </div>
            </div>
            <div className={classes.stepContainer}>
                <p className={classes.stepTitle}>Step4  : 창업 안정화</p>
                <div className={`${classes.step} ${classes.active}`}>
                    비즈니스 모델 수림
                </div>
                <div className={`${classes.step} ${classes.deactive}`}>
                    창업 멘토링
                </div>
            </div>
        </div>
        <div className={classes.stepfooter}>
            <p>Tip! 원하는 항목을 선택하면, 내 상황에 맞게 필요한 단계만 켜고 끌 수 있어요.</p>
            <button className={classes.saveBtn}>
                저장하기
            </button>
        </div>
        <div className={classes.descriptionContainer}>
            <p className={classes.descriptionTitle}>지금 나에게 이 창업 단계가 왜 필요한 걸까요?</p>
            <div className={classes.item}>
                <p className={classes.itemTitle}>창업 아이템 발굴</p>
                <p className={classes.itemSub}>아직 명확한 아이템이 없다면, 문제를 정의하고 아이디어를 넓히는 게 먼저예요. 문제를 잘 찾으면 기회가 보여요.</p>
            </div>
        </div>
    </>
  );
}