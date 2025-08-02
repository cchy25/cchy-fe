'use client';

import Image from "next/image";
import classes from "./page.module.css";
import CustomDropdown from "@/components/customDropDown/CustomDropDown";

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


export default function PoliciesPage() {
    const handleApply = (selected: string[]) => {
        console.log('선택된 필터:', selected);
        // 필터에 따라 리스트 갱신 등 처리
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
                    <CustomDropdown text={"지역"} options={regionOptions} onApply={handleApply} />
                    <CustomDropdown text={"지원대상"} options={targetOptions} onApply={handleApply} />
                    <CustomDropdown text={"지원분야"} options={supportOptions} onApply={handleApply} />
                    <CustomDropdown text={"사업종류"} options={bizOptions} onApply={handleApply} />
                    <CustomDropdown text={"지원항목"} options={supportCategoryOptions} onApply={handleApply} />
                </div>
                <div className={classes.filterList}>
                    <div>
                        <div>
                            <p>창업 단계</p>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                    <button>
                        <Image src='/icons/reset.svg' alt="reset icon" width={24} height={24} priority />
                        <span>초기화</span>
                    </button>
                    <button>
                        적용하기
                    </button>
                </div>
            </div>
        </>
    );
}