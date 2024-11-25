document.addEventListener("DOMContentLoaded", () => {
	const editButtonTitle = document.getElementById("edit-button-title")
	const editButtonStory = document.getElementById("edit-button-story")
	const deleteButton = document.getElementById("delete-button")

	editButtonTitle.addEventListener("click", function () {
		const selectedItem = document.querySelector(".form-check-input:checked")
		if (selectedItem) {
			const titleHolder = selectedItem.closest(".accordion-item").querySelector("[id^='title-holder']")

			titleHolder.setAttribute("contenteditable", "true")
			titleHolder.focus()
		}
	})

	editButtonStory.addEventListener("click", function () {
		const selectedItem = document.querySelector(".form-check-input:checked")
		if (selectedItem) {
			const storyHolder = selectedItem.closest(".accordion-item").querySelector("[id^='story-holder']")

			storyHolder.setAttribute("contenteditable", "true")
			storyHolder.focus()
		}
	})

/* 	deleteButton.addEventListener("click", function () {
		fetch("/delete-selected", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id: getSelectedId(),
			}),
		})
	})

	function getSelectedId() {
		const selectedItemToDelete = document.querySelector(".form-check-input:checked")
		if (selectedItemToDelete.id) {
			return selectedItemToDelete.id
		}
	}
 */
	deleteButton.addEventListener("click", function () {
		const selectedItemToDelete = document.querySelector(".form-check-input:checked")
		if (selectedItemToDelete) {
			const elemToBeDeleted = selectedItemToDelete.closest(".accordion-item").remove()
		}
	})
})
