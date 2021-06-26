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

describe("Basic flow", () => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  it("Should render the fruit gallery correctly", () => {
    cy.visit("/");
    cy.location("pathname").should("eq", "/");

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
    get("FruitCardName").first().should("have.text", fruitName);
  });

  it("Should navigate to the details page on click", () => {
    get("FruitCard").first().click();
    cy.location("pathname").should("eq", `/${fruitName.toLowerCase()}`);
  });

  it("Should render the fruit details correctly", () => {
    get("FruitImage").should("have.attr", "src").and("contain", fruitImage);
    get("FruitName").should("have.text", fruitName);
  });

  it("Should go back to gallery on back button click", () => {
    get("BackLink").click();
    cy.location("pathname").should("eq", "/");
  });
});
