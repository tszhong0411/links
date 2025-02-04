import { type KnipConfig } from 'knip'

const config: KnipConfig = {
  ignoreBinaries: ['only-allow'],
  ignoreDependencies: ['prettier-plugin-*']
}

export default config
