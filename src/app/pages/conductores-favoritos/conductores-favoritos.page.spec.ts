import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConductoresFavoritosPage } from './conductores-favoritos.page';

describe('ConductoresFavoritosPage', () => {
  let component: ConductoresFavoritosPage;
  let fixture: ComponentFixture<ConductoresFavoritosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConductoresFavoritosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
