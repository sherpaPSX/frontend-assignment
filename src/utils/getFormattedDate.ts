export const getFormattedDate = (date: Date, locale: string = 'cs-CZ') => {
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date provided');
  }
  const formatter = new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return formatter.format(date);
};
