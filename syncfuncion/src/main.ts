import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cXmVCf1NpRGFGfV5yd0VCallUTnVeUj0eQnxTdEZiWX9bcXJQQ2NdWEx3Xg==');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
