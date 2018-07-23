//
// Author:  Matt Lavery
// Date:    02/07/2018
// Purpose: Main Controller
//
// When         Who         What
// ------------------------------------------------------------------------------------------
// 02/07/2018   MLavery     Strictly set 'any' types to fix src\extension.ts(50,55): error TS7006: Parameter 'connection' implicitly has an 'any' type.
// 22/07/2018   MLavery     Updated openurl to opn (https://github.com/sindresorhus/opn)

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

import * as vscode from 'vscode';
import * as sqlops from 'sqlops';
import * as Utils from '../utils';
import ControllerBase from './controllerBase';
import * as opn from 'opn';

/**
 * The main controller class that initializes the extension
 */
export default class MainController extends ControllerBase {

    /**
     * Deactivates the extension
     */
    public deactivate(): void {
        Utils.logDebug('Main controller deactivated');
    }

    /**
     * Activates the extension
     */
    public activate(): Promise<boolean> {
        
        //
        // register the tasks
        //
        sqlops.tasks.registerTask('mssql-instance-insights.openVersionHealthCheck', e => this.openurl('https://sqlversions.azurewebsites.net/healthcheck?version='));

        //
        // register the commands
        //
        vscode.commands.registerCommand('mssql-instance-insights.openVersionHealthCheckCmd', () => {
            this.openurl('https://sqlversions.azurewebsites.net/healthcheck?version=');
        });
        vscode.commands.registerCommand('mssql-instance-insights.runVersionHealthCheck', () => {
            // TBA
    
            // Display a message box to the user
            vscode.window.showInformationMessage('This feature is comming soon!');
        });

        return Promise.resolve(true);
    }

    private openurl(link: string): void {
        // openurl.open(link);
        opn(link);
    }
}
