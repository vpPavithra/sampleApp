import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EcmlPlayerPage } from './ecml-player.page';

describe('EcmlPlayerPage', () => {
  let component: EcmlPlayerPage;
  let fixture: ComponentFixture<EcmlPlayerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EcmlPlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
