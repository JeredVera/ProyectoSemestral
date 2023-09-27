import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientesExtranosPage } from './clientes-extranos.page';

describe('ClientesExtranosPage', () => {
  let component: ClientesExtranosPage;
  let fixture: ComponentFixture<ClientesExtranosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientesExtranosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
