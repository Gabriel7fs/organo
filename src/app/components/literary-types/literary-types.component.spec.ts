import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteraryTypesComponent } from './literary-types.component';

describe('LiteraryGenreComponent', () => {
  let component: LiteraryTypesComponent;
  let fixture: ComponentFixture<LiteraryTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiteraryTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiteraryTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
