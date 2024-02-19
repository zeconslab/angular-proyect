import {Geolocalizacion} from "./geolocalizacion";

export interface Address {
  street:string,
  suite:string,
  city:string,
  zipcode:string
  geo:Geolocalizacion
}
