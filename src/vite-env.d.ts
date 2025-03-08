/// <reference types="vite/client" />
declare module '*.svg' {
  import { FunctionComponent, SVGAttributes } from 'react'
  const content: FunctionComponent<SVGAttributes<SVGElement>>
  export default content
}

declare module '*.png' {
  import { FunctionComponent, SVGAttributes } from 'react'
  const content: FunctionComponent<SVGAttributes<SVGElement>>
  export default content
}

declare module '*.pdf' {
  import { FunctionComponent, SVGAttributes } from 'react'
  const content: FunctionComponent<SVGAttributes<SVGElement>>
  export default content
}