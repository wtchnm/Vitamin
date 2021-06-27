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
    get("FruitCardName").first().click();
    cy.location("pathname").should("eq", `/${fruitName.toLowerCase()}`);
  });

  it("Should go back to gallery on back button click", () => {
    get("BackLink").click();
    cy.location("pathname").should("eq", "/");
  });

  it("Should navigate to the details page on enter", () => {
    get("FruitCard").first().focus().type("{enter}");
    cy.location("pathname").should("eq", `/${fruitName.toLowerCase()}`);
  });

  it("Should render the fruit details correctly", () => {
    get("FruitImage").should("have.attr", "src").and("contain", fruitImage);
    get("FruitName").should("have.text", fruitName);
  });

  it("Should render a error message", () => {
    cy.viewport("iphone-xr");
    cy.intercept("/fruits.json", (request) => request.destroy()).as(
      "getFruits"
    );
    cy.reload();
    cy.wait("@getFruits");
    get("LoadingOrError").should("have.text", "Failed to fetch");
  });

  it("Should redirect to gallery when trying to access a invalid fruit", () => {
    cy.visit("/cypress");
    cy.location("pathname").should("eq", "/");
  });
});
