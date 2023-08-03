import { ObjectId } from "mongodb";

export default class Users {
  constructor(
    public username: string,
    public password: string,
    public firstName: string,
    public lastName: string,
    public id?: ObjectId
  ) { }
}