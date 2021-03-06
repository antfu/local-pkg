import { existsSync, promises as fs } from 'fs'
import { findUp } from 'find-up'

export async function loadPackageJSON(cwd = process.cwd()): Promise<Record<string, any> | null> {
  const path = await findUp('package.json', { cwd } as any)
  if (!path || !existsSync(path))
    return null
  return JSON.parse(await fs.readFile(path, 'utf-8'))
}

export async function isPackageListed(name: string, cwd?: string) {
  const pkg = await loadPackageJSON(cwd) || {}

  return (name in (pkg.dependencies || {})) || (name in (pkg.devDependencies || {}))
}
