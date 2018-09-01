import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { MyComponent } from './main/my/my.component';

import { ErrorComponent } from './error/error.component';

// services
// import { ApiService } from './services/api.service';
// import { UserService } from './services/user.service';
// import { HeroService } from './services/hero.service';

// utils
// import { Interceptor } from './utils/interceptor';
// import { AuthGuard } from './utils/authGuard';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
