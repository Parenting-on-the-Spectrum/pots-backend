import { ObjectId } from "mongodb";

export default class Resources {
  constructor(public title: string, public info: string, public id?: ObjectId) {}
}