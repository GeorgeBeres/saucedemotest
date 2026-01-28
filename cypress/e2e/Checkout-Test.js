/// <reference types="cypress" />
import ProductGrid from "../PageObjects/ProductGrid";
import CartPage from "../PageObjects/CartPage";

describe("Checkout Test", () => {
  const productGrid = new ProductGrid();
  const cartPage = new CartPage();

  let highestPrice;

  it("Add product with highest price into cart", () => {
    productGrid
      .getProductPrice()
      .should("be.visible")
      .then(($prices) => {
        const priceNumbers = [...$prices].map((priceEl) => {
          const text = priceEl.innerText;
          return parseInt(text.replace("$", ""));
        });

        highestPrice = Math.max(...priceNumbers);

        cy.contains(".inventory_item_price", `$${highestPrice}`)
          .parent()
          .find("button")
          .click();
      });
  });

  it("Validate product visibility in cart", () => {
    productGrid.getCartIconButton().click();
    cy.url().should("include", "/cart.");
    cartPage.getProduct().should("be.visible");
    cartPage.getProductPrice().should("contain", highestPrice);
  });
});
