'use client';

import React, { useState, useRef, useEffect } from 'react';
import classes from './CustomDropdown.module.css';
import Image from 'next/image';

interface Option {
  label: string;
  value: string;
}

interface Props {
  options: Option[];
  onApply: (selected: string[]) => void;
  text: string;
}

const CustomDropdown: React.FC<Props> = ({ options, onApply, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (value: string) => {
    setSelectedOptions((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleApply = () => {
    setIsOpen(false);
    onApply(selectedOptions);
  };

  // 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={classes.dropdownContainer} ref={dropdownRef}>
      <button className={`${classes.dropdownButton} ${isOpen ? classes.open : ''}`} onClick={toggleDropdown}>
        <span>{text}</span> 
        {isOpen ? <Image src="/icons/chevron-up.svg" alt="up button" width={16} height={16} priority/> : <Image src="/icons/chevron-down.svg" alt="down button" width={16} height={16} priority/>}
      </button>

      {isOpen && (
        <div className={classes.dropdownContent}>
          <div className={classes.checkboxGrid}>
            {options.map((option, idx) => (
              <label key={idx} className={classes.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option.value)}
                  onChange={() => handleCheckboxChange(option.value)}
                />
                {option.label}
              </label>
            ))}
          </div>
          <button className={classes.applyButton} onClick={handleApply}>
            적용하기
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;