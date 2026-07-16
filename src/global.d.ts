// Temporary global declarations to satisfy JSX types while @types/react installs
declare module 'react/jsx-runtime' {
  function jsx(type: any, props?: any, key?: any): any;
  function jsxs(type: any, props?: any, key?: any): any;
  function jsxDEV(type: any, props?: any, key?: any): any;
  export { jsx, jsxs, jsxDEV };
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
