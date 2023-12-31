declare module '*.scss' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  // eslint-disable-next-line no-undef
  const content: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default content;
}
declare const __IS_DEV__:boolean;
