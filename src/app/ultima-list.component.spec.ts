import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { UltimaListAppComponent } from '../app/ultima-list.component';

beforeEachProviders(() => [UltimaListAppComponent]);

describe('App: UltimaList', () => {
  it('should create the app',
      inject([UltimaListAppComponent], (app: UltimaListAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ultima-list works!\'',
      inject([UltimaListAppComponent], (app: UltimaListAppComponent) => {
    expect(app.title).toEqual('ultima-list works!');
  }));
});
