'use client';
import Image from 'next/image';
import classes from './page.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PolicyPage() {
  const [policies, setPolicies] = useState<any[]>([]); // 정책 목록
  const [pageInfo, setPageInfo] = useState({ totalPages: 0, currentPage: 0 }); // 페이지 정보
  const [loading, setLoading] = useState(false);

  const fetchRecommendedPolicies = async (page: number) => {
    try {
      setLoading(true); // 로딩 시작

      const token = localStorage.getItem('accessToken');
      const response = await axios.post(
        'https://api.qstart.xyz/v1/policies/search',
        { page: page }, // 페이지 넘버를 요청 본문에 추가
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        }
      );

      // 데이터가 잘 오면
      setPolicies(response.data.content); // content에서 실제 정책 데이터 추출
      setPageInfo({
        totalPages: response.data.page.totalPages, // 총 페이지 수
        currentPage: response.data.page.number, // 현재 페이지
      });
    } catch (error) {
      console.error('정책 추천 데이터 요청 실패:', error);
      setPolicies([]);
    } finally {
      setLoading(false); // 로딩 완료
    }
  };

  useEffect(() => {
    fetchRecommendedPolicies(0); // 초기 페이지(0번 페이지) 로드
  }, []);

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return '상시 모집';
    const date = new Date(dateStr);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

  const renderEvaluationMethods = (methods: string[]) => {
    return methods.map((method) => {
      if (method === 'PLANNER') return '사업계획서';
      return method;
    }).join(', ');
  };

  const renderSupportCategories = (categories: string[]) => {
    return categories.map((cat) => {
      if (cat === 'FUNDING') return '재정지원';
      if (cat === 'ADMIN') return '행정지원';
      return cat;
    }).join(', ');
  };

  const calculateDDay = (dateStr: string | null) => {
    if (!dateStr) return '';
    const today = new Date();
    const end = new Date(dateStr);
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 0 ? `D-day ${diffDays}` : '마감';
  };

  const handlePageChange = (page: number) => {
    fetchRecommendedPolicies(page); // 페이지 변경 시 데이터 요청
  };

  return (
    <div>
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
          {loading ? (
            <tr>
              <td colSpan={7} className={classes.noData}>
                데이터 로딩 중...
              </td>
            </tr>
          ) : policies.length > 0 ? (
            policies.map((policy, index) => (
              <tr className={classes.tbodyRow} key={index}>
                <td className={classes.tbcellInterest}>
                  <div className={classes.bookMarkWrapper}>
                    <Image
                      src={
                        policy.bookmarked
                          ? '/icons/policy-filled-star.svg'
                          : '/icons/policy-plain-star.svg'
                      }
                      alt="bookmark"
                      width={24}
                      height={24}
                      priority
                    />
                  </div>
                </td>
                <td className={classes.tbcellName}>
                  <a href={policy.url} target="_blank" rel="noopener noreferrer">
                    <p className={classes.title}>{policy.title}</p>
                  </a>
                  <p className={classes.business}>{policy.organization ?? '기관 정보 없음'}</p>
                </td>
                <td className={classes.tbcellTarget}>
                  {Array.isArray(policy.targets) && policy.targets.length > 0 
                    ? policy.targets.map((target, index) => (
                        <div className={classes.targetlist} key={index}>{target}</div> // 또는 필요한 스타일을 적용
                      ))
                    : '대상 정보 없음'}
                </td>
                <td className={classes.tbcellItem}>
                  <div className={classes.list}>{renderSupportCategories(policy.supportCategories)}</div>
                </td>
                <td className={classes.tbcellPeriod}>
                  <p className={classes.dDay}>{calculateDDay(policy.applyEndAt)}</p>
                  <p className={classes.period}>~ {formatDate(policy.applyEndAt)}</p>
                </td>
                <td className={classes.tbcellMethod}>
                  {renderEvaluationMethods(policy.evaluationMethods)}
                </td>
                <td className={classes.tbcellRate}>
                  {policy.accuracy ? `${policy.accuracy}%` : '대상'}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className={classes.noData}>
                데이터가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* 페이지네이션 버튼 */}
      <div className={classes.pagination}>
        <button
          onClick={() => handlePageChange(pageInfo.currentPage - 1)}
          disabled={pageInfo.currentPage <= 0}
        >
          이전
        </button>
        <span>
          {pageInfo.currentPage + 1} / {pageInfo.totalPages}
        </span>
        <button
          onClick={() => handlePageChange(pageInfo.currentPage + 1)}
          disabled={pageInfo.currentPage >= pageInfo.totalPages - 1}
        >
          다음
        </button>
      </div>
    </div>
  );
}