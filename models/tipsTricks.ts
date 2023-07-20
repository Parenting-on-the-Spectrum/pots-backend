import { ObjectId } from "mongodb";

export default class TipsTricks {
  constructor(public title: string, public info: string, public id?: ObjectId) {}
}