export interface PackageInfo {
  name: string
  rootPath: string
  packageJsonPath: string
  version: string
  packageJson: {
    name: string
    version: string
    dependencies?: Record<string, string>
    devDependencies?: Record<string, string>
    [key: string]: any
  }
}

export interface PackageResolvingOptions {
  paths?: string[]
}

export function isPackageExists(name: string, options?: PackageResolvingOptions): boolean

export function getPackageInfo(name: string, options?: PackageResolvingOptions): Promise<PackageInfo | undefined>
