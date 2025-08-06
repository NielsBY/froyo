// const flavors = ["vanilla", "chocolate", "strawberry", "mint", "coffee"];

// let order = prompt("Enter your order, options are:" + " " + flavors);

const order = prompt(
  "Enter your order, seperated by commas only, options are:",
  "vanilla, chocolate, strawberry, mint, coffee"
);

const flavors = order.split(",");

const counts = count(flavors);

console.table(counts);

function count(flavors) {
  const counts = {};
  for (const flavor of flavors) {
    if (flavor in counts) {
      counts[flavor]++;
    } else {
      counts[flavor] = 1;
    }
  }
  return counts;
}
