export const getFormattedDate = (date: Date, locale: string = 'cs-CZ') => {
  const formatter = new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return formatter.format(date);
};
