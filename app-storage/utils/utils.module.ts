import { NgModule } from '@angular/core';
import { SortPipe } from './pipes/sort.pipe';
import { TrimTextPipe } from './pipes/trimText.pipe';
import { ElapsedPipe } from './pipes/elapsed.pipe';

const ALL_PIPES = [
	SortPipe,
	TrimTextPipe,
	ElapsedPipe
];

@NgModule({
	declarations : ALL_PIPES,
	exports : ALL_PIPES,
	imports : [],
	providers : []
})
export class UtilsModule{

}