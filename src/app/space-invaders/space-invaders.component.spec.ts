import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceInvadersComponent } from './space-invaders.component';

describe('SpaceInvadersComponent', () => {
  let component: SpaceInvadersComponent;
  let fixture: ComponentFixture<SpaceInvadersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpaceInvadersComponent]
    });
    fixture = TestBed.createComponent(SpaceInvadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
