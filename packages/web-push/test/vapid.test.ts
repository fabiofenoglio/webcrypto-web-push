import { afterEach, beforeEach, describe, test, vi } from 'vitest';
import { vapidHeaders } from '../lib/vapid.js';
import { fakeSubscriptions, fakeVapid } from './fixtures.js';

describe('VAPID', () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers();
  });

  afterEach(() => {
    // restoring date after each test run
    vi.useRealTimers();
    vi.clearAllMocks();
  });

  test('Headers', async () => {
    vi.setSystemTime(new Date(2000, 1, 1, 13));

    await vapidHeaders(fakeSubscriptions.chrome, fakeVapid);
  });
});
