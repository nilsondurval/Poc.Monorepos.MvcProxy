import { AngularAppOptions, BrowserOptions, DevServerOptions } from '@teambit/angular-apps';

const angularOptions: BrowserOptions & DevServerOptions = {
  main: 'src/main.ts',
  polyfills: 'src/polyfills.ts',
  index: 'src/index.html',
  tsConfig: 'tsconfig.app.json',
  assets: ['src/favicon.ico', 'src/assets'],
  styles: ['src/styles.scss'],
};

export const MyApp2Options: AngularAppOptions = {
  sourceRoot: 'src',
  portRange: [3002, 3002],
  
  /**
   * Name of the app in Bit CLI.
   */
  name: 'my-app2',

  /**
   * Angular options for `bit build`
   */
  angularBuildOptions: angularOptions,

  /**
   * Angular options for `bit run`
   */
  angularServeOptions: angularOptions
};

export default MyApp2Options;
