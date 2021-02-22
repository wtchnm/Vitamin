import fruits from "../../public/fruits.json";

const [
  {
    name: fruitName,
    image: {
      author: { name: authorName, url: authorURL },
      url: fruitImage,
    },
  },
] = fruits;

function get(id: string) {
  return cy.get(`[data-cy="${id}"]`);
}

it("Basic flow", () => {
  cy.visit("/");
  cy.location("pathname").should("eq", "/");
  cy.viewport("macbook-13");

  // App.tsx
  get("FruitCard").should("have.length", fruits.length);
  get("FruitCardImage")
    .first()
    .should("have.attr", "src")
    .and("contain", fruitImage);
  get("FruitImageAuthor")
    .first()
    .should("have.text", authorName)
    .and("have.attr", "href", authorURL)
    .click();
  get("FruitCardName").first().should("have.text", fruitName).click();

  // FruitDetails.tsx
  cy.location("pathname").should("eq", `/${fruitName.toLowerCase()}`);
  get("FruitImage").should("have.attr", "src").and("contain", fruitImage);
  get("FruitName").should("have.text", fruitName);
  get("BackLink").click();

  // App.tsx
  cy.location("pathname").should("eq", "/");
});
