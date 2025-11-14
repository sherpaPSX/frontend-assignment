import {getFormattedDate} from '../getFormattedDate';

describe('getFormattedCurrentDate', () => {
  const testDate = new Date('2023-11-20T08:00:00Z');

  it('returns date in Czech format by default', () => {
    expect(getFormattedDate(testDate)).toBe('20. listopadu 2023');
  });

  it('allows passing custom locale', () => {
    expect(getFormattedDate(testDate, 'en-US')).toBe('November 20, 2023');
  });
});
