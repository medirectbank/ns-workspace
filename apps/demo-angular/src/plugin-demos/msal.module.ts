import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { MsalComponent } from './msal.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: MsalComponent }])],
	declarations: [MsalComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class MsalModule {}
