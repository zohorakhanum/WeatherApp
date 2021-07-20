import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {mergeMap } from 'rxjs/operators';
import { Observable, from, BehaviorSubject } from 'rxjs';
import {CityData,DailyData} from './Models/shared.model';

@Injectable({
  providedIn: 'root'
})
export class HttpSharedService {
  baseUrl = 'https://api.openweathermap.org/data/2.5/';
    urlAllCities = this.baseUrl +'weather?q=';
    urlHourly = this.baseUrl +'forecast?q=';
    appId= '3d8b309701a13f65b660fa2c64cdc517';
  constructor( public http:HttpClient) { }

  // API call to fetch all City weather datass
  getCityData(cityNames:string[]):Observable<CityData>{
    return from(cityNames).pipe(
      mergeMap(name => this.http.get<CityData>(this.urlAllCities+name+'&units=metric&appid='+this.appId)));
  }


//get hourly data
getDailyData(name:string):Observable<DailyData>{
 return this.http.get<DailyData>(this.urlHourly+name+'&units=metric&appid='+this.appId);
}

  //storing City Data
  private _weatherData = new BehaviorSubject<any>({});
  public get weatherData() {
    return this._weatherData.getValue();
}

public set weatherData(val: any) {
    this._weatherData.next(val);
}
}
