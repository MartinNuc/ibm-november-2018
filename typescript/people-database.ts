interface Person {
  id: number;
  name: string;
}

const people: Person[] = [
  {
      id: 1,
      name: 'Peter'
  },
  {
      id: 2,
      name: 'Rachel'
  },
  {
      id: 3,
      name: 'John'
  },
  {
      id: 4,
      name: 'Tim'
  },
  {
      id: 5,
      name: 'Zed'
  }
];

let name;
import lodash from 'lodash';
let found = lodash.find(people, (item) => {
  return item.name === 'Tim';
})
console.log(found);
