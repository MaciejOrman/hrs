import { getBaseHref } from 'app/shared/app-base';
import { AuthService } from 'app/shared/auth.service';
import { SelectivePreloadingStrategy } from 'app/shared/selective-preloading-strategy';
import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    SelectivePreloadingStrategy,
    {
      provide: APP_BASE_HREF,
      useFactory: getBaseHref
    }
  ]
})
export class SharedModule { }
