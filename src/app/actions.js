"use server";

export async function foo1(name) {
  // do something
  console.log("Foo1 server function called");
  return name ? { name: `foo1-${name}` } : { name: `foo1` };
}
