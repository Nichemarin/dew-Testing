/* eslint-env jest */

import Client from "../src/client.js";
import Gazette from "../src/gazette.js";
import Magazine from "../src/magazine.js";
import Newspaper from "../src/newspaper.js";
import User from "../src/user.js";

test("A free publication notifies subscribers without billing them", () => {
  const gazette = new Gazette("The Streetlight");
  const pepe = new Client("Pepe");
  const lucy = new User("Lucy");
  gazette.attach(pepe);
  gazette.attach(lucy);

  const reading = gazette.publish();

  expect(reading).toContain(
    "Pepe is reading The Streetlight publication number 1",
  );
  expect(reading).toContain(
    "Lucy is reading The Streetlight publication number 1",
  );
  expect(pepe.billing).toBe(0);
});

test("A paid publication only notifies its client subscribers", () => {
  const magazine = new Magazine("Total JS", 2.99, "Programming");
  const pepe = new Client("Pepe");
  const lucy = new User("Lucy");
  magazine.attach(pepe);
  magazine.attach(lucy);

  const reading = magazine.publish();

  expect(reading).toEqual([
    "Pepe is reading Total JS publication number 1 of Programming",
  ]);
  expect(pepe.billing).toBe(2.99);
});

test("Publishing again advances the publication number and charges again", () => {
  const newspaper = new Newspaper(
    "Diario de Avisos",
    1.15,
    "Santa Cruz de Tenerife",
  );
  const mary = new Client("Mary");
  newspaper.attach(mary);

  expect(newspaper.publish()).toEqual([
    "Mary is reading Diario de Avisos publication number 1 of Santa Cruz de Tenerife",
  ]);
  expect(newspaper.publish()).toEqual([
    "Mary is reading Diario de Avisos publication number 2 of Santa Cruz de Tenerife",
  ]);
  expect(mary.billing).toBe(2.3);
});

test("Each publication instance starts with its own number", () => {
  const first = new Gazette("First");
  const second = new Gazette("Second");

  first.publish();

  expect(first.summary).toBe("First publication number 1");
  expect(second.summary).toBe("Second publication number 0");
});
