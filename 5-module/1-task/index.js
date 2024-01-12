function hideSelf() {
  let btn = document.querySelector("button");
	btn.addEventListener("click", (event) => {
		btn.hidden = !btn.hidden;	
	})
}
