import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginNgif } from './login-ngif';

describe('LoginNgif', () => {
  let component: LoginNgif;
  let fixture: ComponentFixture<LoginNgif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginNgif],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginNgif);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
