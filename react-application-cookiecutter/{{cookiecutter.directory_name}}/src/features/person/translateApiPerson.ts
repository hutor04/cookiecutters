import {IPerson, IPersonApi} from "./personTypes";

const translateApiPerson = (
  {
    id,
    firstName,
    lastName
  }: IPersonApi): IPerson => (
  {
    id,
    firstName,
    lastName
  });

export default translateApiPerson;
