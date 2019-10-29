import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PelayananSalinanComponent } from './pelayanan-salinan.component';

describe('PelayananSalinanComponent', () => {
  let component: PelayananSalinanComponent;
  let fixture: ComponentFixture<PelayananSalinanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelayananSalinanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelayananSalinanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
