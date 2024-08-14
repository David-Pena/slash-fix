import { describe, expect, it } from 'vitest'
import { execa } from 'execa'

describe('yarn fixer command', () => {
  it('should execute with a path', async () => {
    const { stdout } = await execa('yarn', ['fixer', 'path\to\some\file'])
    expect(stdout).toContain('Replacing backslashes in')
    expect(stdout).toContain('Normalized path copied to clipboard')
  })

  it('should report error when no path is given', async () => {
    try {
      await execa('yarn', ['fixer', ])
    } catch (error) {
      expect((error as any).stderr).toContain("Sorry, we did not receive any path to fix")
      expect((error as any).exitCode).toBe(1)
    }
  })
})