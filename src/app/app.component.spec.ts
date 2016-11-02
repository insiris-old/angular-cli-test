/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppModule } from './app.module';
import {AppComponent} from './app.component';
import {DateComponentComponent} from 'date-component';
import { WibbleComponent } from './wibble/wibble.component';

describe('App: MasterApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, WibbleComponent, DateComponentComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
