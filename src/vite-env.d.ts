/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
declare module '*.svg?react' {
  import { ComponentType, SVGProps } from 'react';
  const ReactComponent: ComponentType<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
