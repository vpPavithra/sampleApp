import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.sunbird.app',
  appName: 'sampleApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
