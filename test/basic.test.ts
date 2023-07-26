/// <reference types="vitest" />

import { expect, test, vi } from 'vitest';

test('toHaveBeenCalledAfter', () => {
  const mock1 = vi.fn();
  const mock2 = vi.fn();
  mock2();
  mock1();
  expect(mock1).toHaveBeenCalledAfter(mock2);
});

test('toHaveBeenCalledBefore', () => {
  const mock1 = vi.fn();
  const mock2 = vi.fn();
  mock1();
  mock2();
  expect(mock1).toHaveBeenCalledBefore(mock2);
});

test('toHaveBeenCalledExactlyOnceWith', () => {
  const mock = vi.fn();
  mock('hello');
  expect(mock).toHaveBeenCalledExactlyOnceWith('hello');
});

test('toBeOneOf', () => {
  expect(2).toBeOneOf([1, 2, 3]);
});
