// import { Controller } from "@hotwired/stimulus"

// // Connects to data-controller="insert-text"
// export default class extends Controller {
//   static targets = ["form", "input", "comments"]

//   connect() {
//     console.log('Connected to the insert-text controller');
//     console.log('form', this.formTarget);
//     console.log('text', this.commentsTarget);
//   }

//   insert(event) {
//     event.preventDefault();
//     console.log(event);
//     const url = `${this.formTarget.action}?query=${this.inputTarget.value}`;
//     console.log(url);
//     fetch(url, {
//       headers: { "Accept": "text/html" },
//     })
//       .then(response => response.text())
//       .then(data => {
//         console.log("data", data);
//         this.textTarget.innerHTML = data;
//         this.inputTarget.value = ""; // Clear the input field
//       })
//   }
// }

// import { Controller } from "@hotwired/stimulus"

// export default class extends Controller {
//   static targets = ["form", "input", "text"]

//   connect() {
//     console.log('Connected to the insert-text controller');
//     console.log('form', this.formTarget);
//     console.log('text', this.textTarget);
//   }

//   insert(event) {
//     event.preventDefault();
//     const url = `${this.formTarget.action}?query=${encodeURIComponent(this.inputTarget.value)}`;

//     fetch(url, {
//       headers: { "Accept": "text/html" },
//     })
//       .then(response => response.text())
//       .then(data => {
//         const commentContainer = document.createElement("div");
//         commentContainer.innerHTML = data;

//         this.textTarget.appendChild(commentContainer);
//         this.inputTarget.value = ""; // Clear the input field
//       })
//       .catch(error => {
//         console.error("Error:", error);
//       });
//   }
// }

// import { Controller } from "@hotwired/stimulus"

// export default class extends Controller {
//   static targets = ["form", "input", "comments"]

//   connect() {
//     console.log("Connected to the insert-text controller");
//     console.log("form", this.formTarget);
//     console.log("comments", this.commentsTarget);
//   }

//   insert(event) {
//     event.preventDefault();
//     const url = `${this.formTarget.action}?query=${encodeURIComponent(this.inputTarget.value)}`;

//     fetch(url, {
//       headers: { "Accept": "text/html" },
//     })
//       .then(response => response.text())
//       .then(data => {
//         const commentContainer = document.createElement("div");
//         commentContainer.innerHTML = data;

//         this.commentsTarget.innerHTML = commentContainer.innerHTML;
//         this.inputTarget.value = ""; // Clear the input field
//       })
//       .catch(error => {
//         console.error("Error:", error);
//       });
//   }
// }

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
    // const url = `${this.formTarget.action}?query=${encodeURIComponent(this.inputTarget.value)}`;
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
        commentContainer.innerHTML = data.trim();
        this.commentsTarget.appendChild(commentContainer);
        this.inputTarget.value = ""; // Clear the input field
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }
}
