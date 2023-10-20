import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientesrandomPage } from './clientesrandom.page';

describe('ClientesrandomPage', () => {
  let component: ClientesrandomPage;
  let fixture: ComponentFixture<ClientesrandomPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientesrandomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
