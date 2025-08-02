import Image from 'next/image';
import classes from './page.module.css';

export default function PolicyPage() {
  return (
    <table>
      <thead>
        <tr className={classes.headerRow}>
          <td className={`${classes.headerCell} ${classes.cellInterest}`}>관심</td>
          <td className={`${classes.headerCell} ${classes.cellName}`}>지원 사업명</td>
          <td className={`${classes.headerCell} ${classes.cellTarget}`}>대상</td>
          <td className={`${classes.headerCell} ${classes.cellItem}`}>지원항목</td>
          <td className={`${classes.headerCell} ${classes.cellPeriod}`}>신청기간</td>
          <td className={`${classes.headerCell} ${classes.cellMethod}`}>심사 방법</td>
          <td className={`${classes.headerCell} ${classes.cellRate}`}>매칭률</td>
        </tr>
      </thead>
      <tbody>
        <tr className={classes.tbodyRow}>
          <td className={`${classes.tbcellInterest}`}>
            <div className={classes.bookMarkWrapper}>
              <Image 
                src="/icons/policy-plain-star.svg" 
                alt="plain star"
                width={24}
                height={24}
                priority
              />
            </div>
          </td>
          <td className={`${classes.tbcellName}`}>
            <p className={classes.title}>대학(원)생 창업경진대회 참가자 모집 (연장)공고</p>
            <p className={classes.business}>광주테크노파크</p>
          </td>
          <td className={`${classes.tbcellTarget}`}>
            <div className={classes.targetlist}>
              예비 창업자
            </div>
          </td>
          <td className={`${classes.tbcellItem}`}>
            <div className={classes.list}>
              재정지원
            </div>
          </td>
          <td className={`${classes.tbcellPeriod}`}>
            <p className={classes.dDay}>D-day 25</p>
            <p className={classes.period}>~ 2025.08.03. 18:00</p>
          </td>
          <td className={`${classes.tbcellMethod}`}>
            사업계획서
          </td>
          <td className={`${classes.tbcellRate}`}>
            대상
          </td>
        </tr>
      </tbody>
    </table>
  );
}