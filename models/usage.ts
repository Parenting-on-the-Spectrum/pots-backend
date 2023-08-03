import { ObjectId } from "mongodb";

export default class UsageAPI {
  constructor(
    public age: number,
    public gender: string,
    public relation: string,
    public city: string,
    public state: string,
    public id?: ObjectId
  ) { }
}