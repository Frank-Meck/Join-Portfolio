import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutUnlogged } from './main-layout-unlogged';

describe('MainLayoutUnlogged', () => {
  let component: MainLayoutUnlogged;
  let fixture: ComponentFixture<MainLayoutUnlogged>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLayoutUnlogged]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLayoutUnlogged);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
