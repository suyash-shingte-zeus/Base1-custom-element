import { LoadRemoteModuleOptions, LoadRemoteModuleScriptOptions, loadRemoteModule } from '@angular-architects/module-federation';
import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MfeLoaderService {

  private mfeMap: Map<string, any> = new Map<string, any>();

  constructor(private ngZone: NgZone) {

  }

  async loadMFE(loadRemoteEntryOptions: LoadRemoteModuleScriptOptions) {
    const mapKey = loadRemoteEntryOptions.remoteName + loadRemoteEntryOptions.exposedModule;
    const cachedMoule = this.mfeMap.get(mapKey)
    let module: any;
    if (cachedMoule) {
      module = cachedMoule;
      console.log("load mfe from cache", module)
    } else {
      module = await loadRemoteModule(loadRemoteEntryOptions);
      this.mfeMap.set(loadRemoteEntryOptions.remoteName + loadRemoteEntryOptions.exposedModule, module)
      console.log("load mfe from remote", module)
    }
    this.ngZone.runOutsideAngular(() => {
      module.default();
    });
  }
}
