import Image from 'next/image';
import classes from './page.module.css';
import Link from 'next/link';

export default function PoliciesPage() {
  return (
    <div>
        <div className={classes.detailHeader}>
            <div className={classes.detailTitleContainer}>
                <p className={classes.title}>청년창업 아이디어 경진대회 참가자 모집 공고</p>
                <p className={classes.organization}>광주 : 광주광역시 북구청</p>
            </div>
            <div className={classes.btnWrapper}>
                <button className={classes.bookmarkBtn}>
                    <Image 
                        src="/icons/plain-star.svg" 
                        alt="plain star"
                        width={24}
                        height={24}
                        priority
                    />
                </button>
                <Link href={"https://www.localhost:3000/"} className={classes.homePageLink}>
                    <Image 
                        src="/icons/link-icon.svg" 
                        alt="link icon"
                        width={24}
                        height={24}
                        priority
                    />
                    <p>지원하러가기</p>
                </Link>
            </div>
        </div>
        <div className={classes.line}></div>
        <section className={classes.supportSection}>
            <div className={classes.supportList}>
                <p className={classes.supportListTitle}>
                    지원 항목
                </p>
                <div className={classes.listWrapper}>
                    <div className={classes.list}>재정지원</div>
                    <div className={classes.list}>기타</div>
                </div>
            </div>
            <div className={classes.supportList}>
                <p className={classes.supportListTitle}>
                    지원 분야
                </p>
                <div className={classes.listWrapper}>
                    <div className={classes.list}>기술개발</div>
                    <div className={classes.list}>문화예술</div>
                    <div className={classes.list}>콘텐츠</div>
                </div>
            </div>
            <div className={classes.supportList}>
                <p className={classes.supportListTitle}>
                    지원 금액
                </p>
                <p>3,000,000원</p>
            </div>
        </section>
        <div className={classes.application}>
            <section className={classes.periodSection}>
                <div className={classes.applicationList}>
                    <p className={classes.applicationTitle}>신청 기간</p>
                    <p className={classes.applicationDetail}>
                        2025.07.14 - 2025.08.13. 18:00
                    </p>
                </div>
                <div className={classes.applicationList}>
                    <p className={classes.applicationTitle}>사업 기간</p>
                    <p className={classes.applicationDetail}>2025.08.26</p>
                </div>
            </section>
            <section className={classes.methodSection}>
                <div className={classes.applicationList}>
                    <p className={classes.applicationTitle}>신청 방법</p>
                    <p className={classes.applicationDetail}>
                        이메일
                    </p>
                </div>
                <div className={classes.applicationList}>
                    <p className={classes.applicationTitle}>심사 방법</p>
                    <p className={classes.applicationDetail}>단순신청, 기타</p>
                </div>
            </section>
        </div>
        <section className={classes.descriptionSection}>
            <div className={classes.descriptionList}>
                <p className={classes.descriptionTitle}>
                    지원 내용
                </p>
                <div className={classes.descriptionLine}></div>
                <p className={classes.descriptionDetail}>
                    공모전 및 경진대회
                </p>
            </div>
            <div className={classes.descriptionList}>
                <p className={classes.descriptionTitle}>
                    사업 요약
                </p>
                <div className={classes.descriptionLine}></div>
                <p className={classes.descriptionDetail}>
                    「대학(원)생 창업경진대회 참가자 모집(연장)공고」는 호남권 대학(원)생을 대상으로 광주 지역 도시문제 해결을 위한 창의적인 기술 기반 아이디어를 발굴·경쟁시키고, 
                    우수팀에 창업지원금을 제공하여 청년 창업을 촉진하기 위한 경진대회입니다
                </p>
            </div>
            <div className={classes.descriptionList}>
                <p className={classes.descriptionTitle}>
                    지원 대상
                </p>
                <div className={classes.descriptionLine}></div>
                <div className={classes.listWrapper}>
                    <div className={classes.list}>재정지원</div>
                    <div className={classes.list}>기타</div>
                </div>
            </div>
            <div className={classes.descriptionList}>
                <p className={classes.descriptionTitle}>
                    지원 대상 상세
                </p>
                <div className={classes.descriptionLine}></div>
                <p className={classes.descriptionDetail}>
                    호남권 대학(원)생(만 39세 이하)로 구성된 팀 혹은 개인
                </p>
            </div>
            <div className={classes.descriptionList}>
                <p className={classes.descriptionTitle}>
                    지원 제외 대상
                </p>
                <div className={classes.descriptionLine}></div>
                <p className={classes.descriptionDetail}>
                    동일 아이디어(유사 아이디어 포함)로 타 창업경진대회에서 상금 및 지원을 받은 이력이 있는 팀
                </p>
            </div>
        </section>
    </div>
  );
}