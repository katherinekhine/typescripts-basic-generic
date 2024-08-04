import { ProgrammingLanguage } from "./ProgrammingLanguage";

export class Developer {
  constructor(
    public id: string,
    public name: string,
    public FavLang: ProgrammingLanguage
  ) {}
}
