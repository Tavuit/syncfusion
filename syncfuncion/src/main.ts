import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cXmpCf1JpQnxbf1xzZFBMYF9bRXdPIiBoS35RdURjWXdfd3RQQ2BcUUVz');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
