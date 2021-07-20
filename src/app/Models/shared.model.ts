export interface CityData{
coord:Coord;
base:string;
main:{temp:string};
dt:string;
sys:{sunrise:string;sunset:string}
name:string;
id:Number

}

export interface Coord{
    lon:number;
    lat:number;
}

export interface DailyData{
    list: CityData[];
}