// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
    const navLeft = vscode.commands.registerCommand(
        "touchBar-vscode.navLeft",
        () => {
            vscode.commands.executeCommand("workbench.action.previousEditor");
        }
    );
    const navRight = vscode.commands.registerCommand(
        "touchBar-vscode.navRight",
        () => {
            vscode.commands.executeCommand("workbench.action.nextEditor");
        }
    );
    context.subscriptions.push(navLeft, navRight);
}

// this method is called when your extension is deactivated
export function deactivate() {}
