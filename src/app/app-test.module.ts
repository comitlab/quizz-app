import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ActivatedRoute} from '@angular/router';

// For Common Mock test
@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  imports: [RouterTestingModule, HttpClientTestingModule],
  exports: [RouterTestingModule, HttpClientTestingModule],
  providers: [{
    provide: ActivatedRoute,
    useValue: {
      snapshot: {
      }
    }
  }]
})
export class AppTestModule {}
