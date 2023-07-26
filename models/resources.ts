import { ObjectId } from "mongodb";

export default class Resources {
  constructor(public type: string, public name: string, public link: string, public location: string, public id?: ObjectId) {}
}