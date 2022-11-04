(function () {
    const addCard = document.getElementById('addCard')
    addCard.addEventListener('click', formCreator)
})()

function CardConstructor(title, author, totalPages, pagesRead) {
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
    this.pagesRead = pagesRead;
    this.completionStatus = function () {
        if (pagesRead > 0 && totalPages == pagesRead) { return true }
        pagesRead > 0 ? totalPages - pagesRead : false
    }
}

function formCreator() {

    newForm = document.createElement("form");
    newForm.classList.add("new-book-form")
    newForm.setAttribute("action", "#")

    formHeader = document.createElement("div")
    formHeader.classList.add("form-header")
    formHeader.innerHTML = "Add New Book"

    newBookTitle = document.createElement("div")
    newBookTitle.setAttribute("class", "new-book-title")

    newTitle = document.createElement("label")
    newTitle.setAttribute("for", "new-title")
    newTitle.innerHTML = "Title:"

    newTitleInput = document.createElement("input")
    newTitleInput.setAttribute("type", "text")
    newTitleInput.setAttribute("name", "new-title")
    newTitleInput.setAttribute("id", "new-title-input")
    newTitleInput.setAttribute("placeholder", "Ex: The Hobbit")
    newTitleInput.setAttribute("required", "")


}

