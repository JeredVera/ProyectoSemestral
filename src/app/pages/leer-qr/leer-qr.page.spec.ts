import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeerQrPage } from './LeerQrPage';

describe('LeerQrPage', () => {
  let component: LeerQrPage;
  let fixture: ComponentFixture<LeerQrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LeerQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
