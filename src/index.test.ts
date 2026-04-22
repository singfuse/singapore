import { describe, expect, it } from 'vitest'
import { version } from './index'

describe('package', () => {
  it('should return version', () => {
    expect(version()).toBe('1.0.0')
  })
})