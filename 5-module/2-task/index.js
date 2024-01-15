function toggleText() {
  let text = document.getElementById("text")
  document.querySelector("button").addEventListener("click", (event) => {
    text.hidden = !text.hidden;
  })
}
