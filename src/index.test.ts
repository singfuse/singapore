import { describe, expect, it } from 'vitest'
import { VERSION } from './index'

describe('package', () => {
  it('should have version', () => {
    expect(VERSION).toBeTruthy()
  })
})
