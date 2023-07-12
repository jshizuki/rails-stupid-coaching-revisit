import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["form", "input", "comments"]

  connect() {
    console.log("Connected to the insert-text controller");
    console.log("form", this.formTarget);
    console.log("comments", this.commentsTarget);
  }

  insert(event) {
    event.preventDefault();
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`;

    fetch(url, {
      headers: { "Accept": "text/html" },
    })
      .then(response => response.text())
      .then(data => {
        // console.log(data);
        // this.commentsTarget.innerHTML = data
        const commentContainer = document.createElement("div");
        console.log(commentContainer);
        commentContainer.innerHTML = data;
        this.commentsTarget.appendChild(commentContainer);
        this.inputTarget.value = ""; // Clear the input field
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }
}
