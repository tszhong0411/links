/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
declare module 'csstype' {
  interface Properties {
    [index: `--${string}`]: string
  }
}
