import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSecretPageComponent } from './admin-secret-page.component';

describe('AdminSecretPageComponent', () => {
  let component: AdminSecretPageComponent;
  let fixture: ComponentFixture<AdminSecretPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSecretPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSecretPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
