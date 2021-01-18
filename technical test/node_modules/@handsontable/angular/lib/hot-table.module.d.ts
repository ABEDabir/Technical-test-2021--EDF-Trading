import { ModuleWithProviders } from '@angular/core';
/**
 * Angular prevents use static public getters under NgModule decorator.
 * Moreover, ngc doesn't allow importing `Version` from external file.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './hot-table.component';
import * as ɵngcc2 from './hot-column.component';
declare class Version {
    static readonly version: string;
}
export declare class HotTableModule extends Version {
    static forRoot(): ModuleWithProviders<HotTableModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<HotTableModule, [typeof ɵngcc1.HotTableComponent, typeof ɵngcc2.HotColumnComponent], never, [typeof ɵngcc1.HotTableComponent, typeof ɵngcc2.HotColumnComponent]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<HotTableModule>;
}
export {};

//# sourceMappingURL=hot-table.module.d.ts.map