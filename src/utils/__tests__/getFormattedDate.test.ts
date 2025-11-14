import {getFormattedDate} from '../getFormattedDate';

describe('getFormattedCurrentDate', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2023-11-20T08:00:00Z'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('returns current date in Czech format by default', () => {
    expect(getFormattedDate()).toBe('20. listopadu 2023');
  });

  it('allows passing custom locale', () => {
    expect(getFormattedDate('en-US')).toBe('November 20, 2023');
  });
});
