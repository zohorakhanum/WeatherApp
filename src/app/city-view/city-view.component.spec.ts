import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityViewComponent } from './city-view.component';
import { HttpSharedService } from '../http-shared.service';

describe('CityViewComponent', () => {
  let component: CityViewComponent;
  let fixture: ComponentFixture<CityViewComponent>;
  let httpService: HttpSharedService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityViewComponent ] ,
      providers: [
      HttpSharedService
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityViewComponent);
    httpService = TestBed.get(HttpSharedService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the API  onInit', () => {
    component.ngOnInit();
    expect(httpService.getCityData).toHaveBeenCalled();
});


}

