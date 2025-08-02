'use client';

import { usePathname } from 'next/navigation';
import classes from './layout.module.css';
import Link from 'next/link';

interface InformationProps {
  children: React.ReactNode;
}

export default function InformationLayout({ children }: InformationProps) {
    const pathname = usePathname();

  return (
    <main className={classes.infoMain}>
        <div className={classes.infoContainer}>
            <div className={classes.diagnosisResult}>
                <p className={classes.title}>진단 결과</p>
                <p className={classes.status}>나의 창업 상태는 <span>#창업 단계 항목</span>(이)에요.</p>
                <div className={classes.roadmapContainer}>
                    <p>나에게 부족한</p>
                    <div className={classes.roadmapPoint}>
                        #창업 프로세스 항목
                    </div>
                    <p>을 추천 정책을 통해 확보하고 <span className={classes.roadmapBold}>#창업 단계 항목</span>(으) 넘어가 보세요!</p>
                </div>
            </div>
            <nav className={classes.tabContainer}>
                <Link href="/information/roadmap" className={pathname === '/information/roadmap' ? classes.active : classes.deactive}>창업 로드맵</Link>
                <Link href="/information/policy" className={pathname === '/information/policy' ? classes.active : classes.deactive}>추천 정책</Link>
            </nav>
            {children}
        </div>
    </main>
  );
}