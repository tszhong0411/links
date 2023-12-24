/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type * as CSS from 'csstype'

/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
declare module 'csstype' {
  interface Properties {
    [index: `--${string}`]: string
  }
}
