import Link from 'next/link';
import classes from './page.module.css';
import Image from 'next/image';

export default function DiagnosisPage() {
  

  return (
    <main className={classes.diagnosisMain}>
      <section className={classes.diagnosisSection}>
        <div className={classes.diagnosisHeader}>
          <p>
            01 of 13
          </p>
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
              오늘 하루?
            </p>
            <p className={classes.questionSubtitle}>
              (이러한 일들이 있었어요)
            </p>
          </div>
          <div className={classes.optionsContainer}>
            <button
                className={classes.optionBtn}
            >
                예비 창업
            </button>
            <button
                className={classes.optionBtn}
            >
                예비 창업
            </button>
          </div>
        </div>
        <div className={classes.navigationButtons}>
            
            
        </div>
      </section>
    </main>
  );
}