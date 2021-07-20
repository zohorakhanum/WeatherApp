import { Component, OnInit } from '@angular/core';
import { HttpSharedService } from '../http-shared.service';
import { ActivatedRoute } from '@angular/router';
import { DailyData ,CityData} from '../Models/shared.model';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  constructor(private httpService:HttpSharedService,
    public activedRoute: ActivatedRoute) { }
    cityData:any;
    hourlyData:DailyData = {list:[]};
    cityName:any ='';
  ngOnInit(): void {
   this.fetchCityDetails();
    
  }

  private  fetchCityDetails(){
    this.cityName = this.activedRoute.snapshot.params.cityid;
    this.httpService.getDailyData(this.activedRoute.snapshot.params.cityid).subscribe((data:DailyData) =>{
    this.hourlyData = data;
      },
    ()=>{
      //err
    },()=>{
      this.filterHourlyData(this.hourlyData.list);
    
    }) 
  }

  private filterHourlyData(data:any){
    this.cityData = 
    data.filter((dat: { dt_txt: string | number | Date; }) =>
     new Date(dat.dt_txt).getHours() == 9
    );
    
    
  }

}
