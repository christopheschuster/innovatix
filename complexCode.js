/**
 * Filename: complexCode.js
 * 
 * Description:
 * This code demonstrates a complex implementation of a shopping cart application.
 * It includes various features like adding/removing items, calculating total price,
 * applying discounts, and generating a detailed invoice.
 */
 
// Class representing an Item in the shopping cart
class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }

  toString() {
    return `${this.name}: $${this.price} x ${this.quantity}`;
  }
}

// Class representing the Shopping Cart
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(itemName) {
    this.items = this.items.filter(item => item.name !== itemName);
  }

  calculateTotalPrice() {
    let total = 0;
    for (let item of this.items) {
      total += item.getTotalPrice();
    }
    return total;
  }
  
  applyDiscount(discountPercentage) {
    let discountFactor = (100 - discountPercentage) / 100;
    for (let item of this.items) {
      item.price *= discountFactor;
    }
  }
  
  generateInvoice() {
    console.log('---------- INVOICE ----------');
    for (let item of this.items) {
      console.log(item.toString());
    }
    console.log('-------------------------------');
    console.log('Total Price: $' + this.calculateTotalPrice());
    console.log('-------------------------------');
  }
}

// Create a new shopping cart instance
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(new Item('Book', 10, 2));
cart.addItem(new Item('Shirt', 25, 1));
cart.addItem(new Item('Headphones', 50, 1));

// Remove an item from the cart
cart.removeItem('Shirt');

// Apply a discount of 20% to the cart
cart.applyDiscount(20);

// Generate and display the invoice
cart.generateInvoice();

// Output:
// ---------- INVOICE ----------
// Book: $8 x 2
// Headphones: $40 x 1
// -------------------------------
// Total Price: $56
// -------------------------------