import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'capacitor-http-json-exception-issue',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    CapacitorHttp: {
      enabled: true
    }
  }
};

export default config;
