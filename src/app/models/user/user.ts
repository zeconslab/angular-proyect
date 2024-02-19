import {Address} from "../../components/address/address";
import {Company} from "../../components/address/company";

/**
 * User Interface
 * @type {{id: number, name: string, username: string, email: string, address: Address, phone: string, website: string, company: Company}}
 */
export interface User {
  id:number,
  name:string,
  username:string,
  email:string
  address:Address,
  phone:string
  website:string
  company:Company
}
