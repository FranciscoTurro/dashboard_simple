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
