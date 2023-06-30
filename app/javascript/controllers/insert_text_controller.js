import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-text"
export default class extends Controller {
  static targets = ["form", "input", "text"]

  connect() {
    console.log("You are connected to the insert-text controller!");
    console.log("form", this.formTarget);
    console.log("text", this.textTarget);
  }

  // insert(event) {
  //   event.preventDefault();
  //   const url = `${this.formTarget.action}?query=${this.inputTarget.value}`;
  //   fetch(url, {
  //     headers: { "Accept": "text/html" } // Request HTML response instead of plain text
  //   })
  //     .then(response => response.text())
  //     .then(data => {
  //       this.textTarget.innerHTML = data;
  //       this.inputTarget.value = "";
  //     })
  // }

  insert(event) {
    event.preventDefault();
    const response = event.detail[0]; // Access the response from the event detail
    this.textTarget.innerHTML = response;
    this.inputTarget.value = ""; // Clear the input field
  }
}
