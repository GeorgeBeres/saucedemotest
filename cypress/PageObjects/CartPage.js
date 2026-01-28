export default class CartPage {

    getProduct() {
        return cy.get('.cart_item_label');
    }

    getProductPrice() {
        return cy.get(".cart_item");
    }
}