//
// Author:  Matt Lavery
// Date:    23/07/2018
// Purpose: create Instance Data model
//
// When         Who         What
// ------------------------------------------------------------------------------------------
// 23/07/2018   MLavery     Initial Code
//

//
// to do : Need to look to add this to mainController.ts for the additional info when needed
//

'use strict';

import { InstanceUtils } from '../controllers/instanceUtils';
// import { DecorationRangeBehavior } from 'vscode';
import * as sqlops from 'sqlops';

export class CreateInstanceData {
	public ownerUri: string;
	
	constructor(ownerUri:string) {
        this.ownerUri = ownerUri;
	}

    public async getServerVersion() : Promise<any> {
        let queryService = await InstanceUtils.getQueryProvider();
        queryService.runQueryAndReturn(this.ownerUri, 'SELECT @@VERSION').then( (result: any) => {
            console.log("instanceData.get.result=" + JSON.stringify(result));
            return '12.0.1234.0';
        });
    }
}