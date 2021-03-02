import { Component, NgZone } from '@angular/core';
import { DemoSharedMsal } from '@demo/shared';
import {} from '@medirect/msal';

@Component({
	selector: 'demo-msal',
	templateUrl: 'msal.component.html',
})
export class MsalComponent {
	demoShared: DemoSharedMsal;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedMsal();
	}
}
