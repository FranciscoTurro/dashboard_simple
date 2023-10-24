import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { MAX_COMPANY } from '../types/variables.d';

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

export const calculatePercentage = (number: number): number => {
  const percentage = (number / MAX_COMPANY) * 100;
  return parseFloat(percentage.toFixed(0));
};
