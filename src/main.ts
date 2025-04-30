import {Person} from "./person";
import {Role} from "./role_type";

let fpm: Person  = new Person('Fred', 'Morrison', Role.Volunteer);
console.log(`Person: ${fpm.toString()}`);

