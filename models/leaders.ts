import { ObjectId } from "mongodb";

export default class Leaders {
  constructor(public name: string, public postnomials: Array<string>, public picture: string, public id?: ObjectId) {}
}