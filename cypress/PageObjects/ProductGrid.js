export default class ProductGrid {

    getProductPrice() {
        return cy.get(".inventory_item_price");
    }

    getAddToCartButton() {
        return cy.get(".btn_primary");
    }

    getCartIconButton() {
        return cy.get('#shopping_cart_container')
    }

}