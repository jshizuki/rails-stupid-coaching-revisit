import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-text"
export default class extends Controller {
  static targets = ["form", "input", "text"]

  connect() {
    console.log('Connected to the insert-text controller');
    console.log('form', this.formTarget);
    console.log('text', this.textTarget);
  }

  insert(event) {
    event.preventDefault();
    // console.log(event);
    // const url = `${this.formTarget.action}?query=${this.inputTarget.value}`;
    const url = this.formTarget.getAttribute("action");
    console.log(url);
    fetch(url, {
      method: "POST",
      headers: { "Accept": "text/html" },
      body: new FormData(this.formTarget)
    })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        this.textTarget.innerHTML = data;
        this.inputTarget.value = ""; // Clear the input field
      })
  }
}

// fetch(this.formTarget.action, {
//   method: "POST",
//   headers: { "Accept": "application/json" },
//   body: new FormData(this.formTarget)
// })
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data)
//   })
