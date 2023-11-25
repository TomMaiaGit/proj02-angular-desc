import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAddPageComponent } from './usuario-add-page.component';

describe('UsuarioAddPageComponent', () => {
  let component: UsuarioAddPageComponent;
  let fixture: ComponentFixture<UsuarioAddPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioAddPageComponent]
    });
    fixture = TestBed.createComponent(UsuarioAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
