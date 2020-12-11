import { addOrIncrement, dateStringToMonth } from "../utils";

test(`dateStringToMonth`, () => {
  expect(dateStringToMonth("2019-11-19T06:49:15Z")).toEqual("201911");
});

test(`addOrIncrement`, () => {
  const object = {
    cats: 2,
  };

  addOrIncrement(object, "cats");
  addOrIncrement(object, "dogs");
  expect(object).toEqual({
    cats: 3,
    dogs: 1,
  });
});
