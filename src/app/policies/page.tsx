'use client';

import Image from "next/image";
import classes from "./page.module.css";
import CustomDropdown from "@/components/customDropDown/CustomDropDown";
import { useState } from "react";

const regionOptions = [
  { label: '광주', value: 'GWANGJU' },
];

const targetOptions = [
  { label: '여성 기업', value: 'WOMEN' },
  { label: '대학생', value: 'UNIX' },
  { label: '사회적 기업', value: 'SOC' },
  { label: '1인 창업', value: 'SOLO' },
  { label: '소상공인', value: 'SMBIZ' },
  { label: '해당사항 없음', value: '' },
];

const supportOptions = [
    { label: '문화·예술', value: 'CULTURE' },
    { label: '콘텐츠', value: 'CONTENT' },
    { label: '기술 개발', value: 'TECH' },
    { label: '제조업', value: 'MANUFACTURE' },
    { label: '농업', value: 'ARGRICULTURE' },
    { label: '요식업 (식당·카페 등)', value: 'FB' },
    { label: '사회 문제 해결', value: 'SOCIAL' },
    { label: '기타', value: 'ETC' },   
]

const bizOptions = [
    { label: '공모전및경진대회', value: 'CONTEST' },
    { label: '창업지원사업', value: 'SUPPORT' },
    { label: '기타', value: 'ETC' },
]

const supportCategoryOptions = [
    { label: '재정지원', value: 'FUNDING' },
    { label: '시제품제작', value: 'PROTOTYPE' },
    { label: '공간지원', value: 'SPACE' },
    { label: '교육', value: 'TUTOR' },
    { label: '네트워킹', value: 'NETWORK' },
    { label: '멘토링', value: 'MENTORING' },
    { label: '창업팀빌딩', value: ' TEAM' },
    { label: '행정지원', value: 'ADMIN' },
    { label: '투자유치', value: 'INVESTMENT' },
    { label: '마케팅/판로개척', value: 'MARKETING' },
    { label: '인력/고용', value: 'HR' },
    { label: '글로벌', value: 'GLOBAL' },
    { label: '기타', value: 'ETC' },
]

type FilterState = Record<string, string[]>;

export default function PoliciesPage() {
    const [selectedFilters, setSelectedFilters] = useState<FilterState>({
        지역: [],
        지원대상: [],
        지원분야: [],
        사업종류: [],
        지원항목: [],
    });

    const handleApply = (category: string, selected: string[]) => {
        setSelectedFilters((prev) => ({
        ...prev,
        [category]: selected,
        }));
    };

    const handleRemoveItem = (category: string, value: string) => {
        setSelectedFilters((prev) => ({
        ...prev,
        [category]: prev[category].filter((v) => v !== value),
        }));
    };

    const handleReset = () => {
        setSelectedFilters({
        지역: [],
        지원대상: [],
        지원분야: [],
        사업종류: [],
        지원항목: [],
        });
    };

    const handleFinalApply = () => {
        console.log("서버에 보낼 전체 필터:", selectedFilters);
        // 서버 조회 요청 처리
    };

    return (
        <>
            <div className={classes.searchBar}>
                <div>
                    <Image 
                        src="/icons/search.svg" 
                        alt="search"
                        width={24}
                        height={24}
                        priority
                    />
                </div>
                <input placeholder="검색"/>
            </div>
            <div className={classes.container}>
                <div className={classes.filterContainer}>
                    <CustomDropdown text={"지역"} options={regionOptions} onApply={(s) => handleApply("지역", s)} selected={selectedFilters["지역"]} />
                    <CustomDropdown text={"지원대상"} options={targetOptions} onApply={(s) => handleApply("지원대상", s)} selected={selectedFilters["지원대상"]} />
                    <CustomDropdown text={"지원분야"} options={supportOptions} onApply={(s) => handleApply("지원분야", s)} selected={selectedFilters["지원분야"]} />
                    <CustomDropdown text={"사업종류"} options={bizOptions} onApply={(s) => handleApply("사업종류", s)} selected={selectedFilters["사업종류"]} />
                    <CustomDropdown text={"지원항목"} options={supportCategoryOptions} onApply={(s) => handleApply("지원항목", s)} selected={selectedFilters["지원항목"]} />
                </div>
                <div className={classes.filterList}>
                    <div className={classes.filteringWrapper}>
                        {Object.entries(selectedFilters).map(([category, values]) =>
                            values.map((value) => {
                                const optionLabel = [...regionOptions, ...targetOptions, ...supportOptions, ...bizOptions, ...supportCategoryOptions]
                                .find((o) => o.value === value)?.label || value;

                                return (
                                    <div key={`${category}-${value}`} className={classes.listItem}>
                                        <p>{optionLabel}</p>
                                        <div className={classes.closeBtn} onClick={() => handleRemoveItem(category, value)}>
                                        <Image src="/icons/x.svg" alt="close icon" width={16} height={16} priority />
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                    <div className={classes.btnWrapper}>
                        <button className={classes.resetBtn} onClick={handleReset}>
                            <Image src='/icons/reset.svg' alt="reset icon" width={24} height={24} priority />
                            <span>초기화</span>
                        </button>
                        <button className={classes.applyBtn} onClick={handleFinalApply}>
                            적용하기
                        </button>
                    </div>
                </div>
            </div>
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
        </>
    );
}