import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedMsal } from '@demo/shared';
import {} from '@medirect/msal';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel(page);
}

export class DemoModel extends DemoSharedMsal {}
