import { Developer } from "./Developer";
import { ProgrammingLanguage } from "./ProgrammingLanguage";
import { Repository } from "./Repository";

const language = new Repository<ProgrammingLanguage>();
const developer = new Repository<Developer>();

const java = new ProgrammingLanguage("1", "Java", "OOP");
const javascript = new ProgrammingLanguage("2", "Javascript", "Multi-Paradigm");
const python = new ProgrammingLanguage("3", "Python", "Scripting Paradigm");
const ruby = new ProgrammingLanguage("4", "Ruby", "OOP");
const c = new ProgrammingLanguage("5", "C", "OOP");

// Add Language
language.add(java);
language.add(javascript);
language.add(python);
language.add(ruby);
language.add(c);

const li = language.get("2");
console.log(li);
console.log("name", li?.name);
console.log("paradigm", li?.paradigm);
language.remove("1");
console.log(language.getAll());

// Create Developer
const dev1 = new Developer("1", "bobo", java);
const dev2 = new Developer("2", "nono", java);
const dev3 = new Developer("3", "john", java);
const dev4 = new Developer("4", "smith", java);

developer.add(dev1);
developer.add(dev2);
developer.add(dev3);

let d2 = developer.get("2");
console.log(d2);
console.log("name", d2?.name);
console.log("Fav Lan is", d2?.FavLang.name);
console.log("Lang Paradigm is", d2?.FavLang.paradigm);
console.log(developer.getAll());
