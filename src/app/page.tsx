import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <div className={`${classes.title} flex-center-column`}>
          <p>막막한 창업 시작</p>
          <p>내 창업 상태부터 같이 진단해볼까요?</p>
        </div>
        <h3 className={classes.subtitle}>
          몇 가지 질문만 답하면 나에게 꼭 맞는 정책을 추천해드려요
        </h3>
        <Link href={"/diagnosis/1"}>
          <button className={classes.diagnosisBtn}>
            <p className={classes.btnText}>
              진단 받고 맞춤 정책 추천받기
            </p>
            <div className={classes.iconWrapper}>
              <Image 
                src="/icons/chevron-right.svg" 
                alt="arrow button"
                width={32}
                height={32} 
                priority
              />
            </div>
          </button>
        </Link>
      </div>
    </main>
  );
}
