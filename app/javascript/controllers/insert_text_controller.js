import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-text"
export default class extends Controller {
  static targets = ["form", "input", "text"]

  connect() {
    console.log("You are connected to the insert-text controller!");
    console.log("form", this.formTarget);
    console.log("text", this.textTarget);
    console.log("element", this.element);
  }

  insert(event) {
    event.preventDefault();
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`;
    fetch(url, {headers: {"Accept": "text/plain"}})
      .then(response => response.text())
      .then((data) => {
        this.textTarget.outerHTML = data
      })
  }

}
