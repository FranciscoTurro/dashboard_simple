import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { MAX_AREA, MAX_COMPANY, MAX_MONTH, TYPE } from '../types/variables.d';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getInitials = (inputString: string | null | undefined): string => {
  if (inputString == null || inputString == undefined) return 'JD';

  const words = inputString.trim().split(/\s+/);
  let initials = '';

  for (const word of words) {
    //for every item in the array
    if (word.length > 0) {
      initials += word[0].toUpperCase();
    }
  }

  return initials;
};

export const calculatePercentage = (number: number, type: TYPE): number => {
  let typeMax: number;
  if (type === 'COMPANY') typeMax = MAX_COMPANY;
  if (type === 'AREA') typeMax = MAX_AREA;
  if (type === 'MONTH') typeMax = MAX_MONTH;
  const percentage = (number / typeMax!) * 100;
  return parseFloat(percentage.toFixed(0));
};
