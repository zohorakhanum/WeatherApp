import { Component, OnInit } from '@angular/core';
import { HttpSharedService } from '../http-shared.service';
import {CityData} from './../Models/shared.model';

@Component({
  selector: 'app-city-view',
  templateUrl: './city-view.component.html',
  styleUrls: ['./city-view.component.scss']
})
export class CityViewComponent implements OnInit {
  constructor(private httpService:HttpSharedService) { }
  title = 'Select City for Next 5 days Data!'
  cityList = ['London','Belgium','Spain','Sweden','France'];
  cities = Array<CityData>();
  ngOnInit(): void {
    this.getCityData();
  }




/* 
Method to call API to fetch weather Data for the five cities
@Input : CityList */
private getCityData(){
    this.httpService.getCityData(this.cityList).subscribe(cityData =>{
      this.cities.push(cityData);
},(err)=>{
//capture error
},()=>{
  this.cities = this.formatDate(this.cities);
  this.cities.sort((a:CityData,b: CityData) =>{if(a.name< b.name) return -1;
  else return 1; });
})
}


/* 
Formatting timestamp to fetch currect time

*/
  private formatDate(cities:any){
     cities.map((city: { sys: { sunrise: number; sunset: number; }; }) =>{
      city.sys.sunrise = city.sys.sunrise * 1000
      city.sys.sunset = city.sys.sunset *1000   
});
return cities;

} 

}
