let myLibrary = []

let addCard = document.querySelector(".add-card")
addCard.addEventListener("click", AddNewCard)
let mainContainer
let newBookForm
let newTitleInput
let newAuthorInput
let totalPagesInput
let ifCompletedSelect
let completedPagesInput

function AddNewCard() {
    console.log("function executed")
    addCard.remove()
    // Creating all elements for our form and setting attributes
    newBookForm = document.createElement("form");
    newBookForm.setAttribute("class", "new-book-form")
    newBookForm.setAttribute("action", "#")

    // Form Header
    const newBookHeader = document.createElement("h3")
    const formHeader = document.createElement("div")
    formHeader.setAttribute("class", "form-header")
    newBookHeader.setAttribute("class", "new-book-header")
    newBookHeader.innerHTML = "Add New Book"

    // Title Input:
    const newBookTitle = document.createElement("div")
    newBookTitle.setAttribute("class", "new-book-title")

    const newTitle = document.createElement("label")
    newTitle.setAttribute("for", "new-title")
    newTitle.innerHTML = "Title:"

    newTitleInput = document.createElement("input")
    newTitleInput.setAttribute("type", "text")
    newTitleInput.setAttribute("name", "new-title")
    newTitleInput.setAttribute("id", "new-title-input")
    newTitleInput.setAttribute("placeholder", "Ex: The Hobbit")
    newTitleInput.setAttribute("required", "")

    // Author Input:
    const newBookAuthor = document.createElement("div")
    newBookAuthor.setAttribute("class", "new-book-author")

    const newAuthor = document.createElement("label")
    newAuthor.setAttribute("for", "new-author")
    newAuthor.innerHTML = "Author:"

    newAuthorInput = document.createElement("input")
    newAuthorInput.setAttribute("type", "text")
    newAuthorInput.setAttribute("name", "new-author")
    newAuthorInput.setAttribute("id", "new-author-input")
    newAuthorInput.setAttribute("placeholder", "Ex: J.R.R. Tolkien")
    newAuthorInput.setAttribute("required", "")

    // Page Count Input:
    const newBookPageCount = document.createElement("div")
    newBookPageCount.setAttribute("class", "new-book-page-count")

    const newPageCount = document.createElement("label")
    newPageCount.setAttribute("for", "new-page-count")
    newPageCount.innerHTML = "Total Pages:"

    totalPagesInput = document.createElement("input")
    totalPagesInput.setAttribute("type", "number")
    totalPagesInput.setAttribute("name", "new-page-count")
    totalPagesInput.setAttribute("id", "new-page-count-input")
    totalPagesInput.setAttribute("placeholder", "Ex: 304")
    totalPagesInput.setAttribute("required", "")
    totalPagesInput.setAttribute("min", "1")


    // Completed Book/Complete Pages input:
    const ifCompleted = document.createElement("div")
    ifCompleted.setAttribute("class", "if-completed-div")
    const ifCompletedLabel = document.createElement("label")
    ifCompletedLabel.setAttribute("for", "if-completed")
    ifCompletedLabel.innerHTML = "Have you completed the book?"
    ifCompletedSelect = document.createElement("select")
    ifCompletedSelect.setAttribute("name", "if-completed")
    ifCompletedSelect.setAttribute("id", "if-completed")
    ifCompletedSelect.setAttribute("required", "")
    const ifCompletedOptionPlaceholder = document.createElement("option")
    ifCompletedOptionPlaceholder.setAttribute("value", "")
    ifCompletedOptionPlaceholder.setAttribute("disabled", "")
    ifCompletedOptionPlaceholder.setAttribute("selected", "")
    ifCompletedOptionPlaceholder.innerHTML = "-Options"

    const ifCompletedOptionCompleted = document.createElement("option")
    ifCompletedOptionCompleted.setAttribute("value", "completed")
    ifCompletedOptionCompleted.innerHTML = "Completed"
    const ifCompletedOptionNotStarted = document.createElement("option")
    ifCompletedOptionNotStarted.setAttribute("value", "not-started")
    ifCompletedOptionNotStarted.innerHTML = "Not Started"
    const ifCompletedOptionInProgress = document.createElement("option")
    ifCompletedOptionInProgress.setAttribute("value", "in-progress")
    ifCompletedOptionInProgress.innerHTML = "In Progress"

    const completedPagesDiv = document.createElement("div")
    completedPagesDiv.setAttribute("class", "completed-pages-div")
    const completedPagesLabel = document.createElement("label")
    completedPagesLabel.setAttribute("for", "completed-pages-input")
    completedPagesLabel.innerHTML = "Completed Pages:"
    completedPagesInput = document.createElement("input")
    completedPagesInput.setAttribute("type", "number")
    completedPagesInput.setAttribute("name", "completed-pages-input")
    completedPagesInput.setAttribute("id", "completed-pages-input")
    completedPagesInput.setAttribute("disabled", "")

    ifCompletedSelect.addEventListener("change", function () {
        if (ifCompletedSelect.value == "in-progress") {
            if (completedPagesInput.disabled == true) {
                completedPagesInput.removeAttribute("disabled")
                completedPagesInput.setAttribute("required", "")
            }
        } else if (ifCompletedSelect.value == "completed") {
            completedPagesInput.value = ""
            if (completedPagesInput.disabled == false) {
                completedPagesInput.setAttribute("disabled", "")
                completedPagesInput.removeAttribute("required")
            }
        } else if (ifCompletedSelect.value == "not-started") {
            completedPagesInput.value = ""
            if (completedPagesInput.disabled == false) {
                completedPagesInput.setAttribute("disabled", "")
                completedPagesInput.removeAttribute("required")
            }
        }
    })

    // Buttons
    const cancelButton = document.createElement("button")
    cancelButton.setAttribute("class", "cancel")
    cancelButton.setAttribute("type", "button")
    cancelButton.innerHTML = "Cancel"
    cancelButton.addEventListener("click", CancelButtonFunction)
    const confirmButton = document.createElement("button")
    confirmButton.setAttribute("class", "confirm")
    //confirmButton.setAttribute("type", "submit")
    confirmButton.innerHTML = "Confirm"
    newBookForm.addEventListener("submit", FormSubmitFunction)


    // Appending Our Created Elements:
    mainContainer = document.querySelector(".main-container")
    mainContainer.append(newBookForm)
    newBookForm.append(formHeader)
    formHeader.append(newBookHeader)
    // Title Input
    newBookForm.append(newBookTitle)
    newBookTitle.append(newTitle)
    newBookTitle.append(newTitleInput)
    // Author Input
    newBookForm.append(newBookAuthor)
    newBookAuthor.append(newAuthor)
    newBookAuthor.append(newAuthorInput)
    // Pages Input
    newBookForm.append(newBookPageCount)
    newBookPageCount.append(newPageCount)
    newBookPageCount.append(totalPagesInput)
    // Pages CompleteD
    newBookForm.append(ifCompleted)
    ifCompleted.append(ifCompletedLabel)
    ifCompleted.append(ifCompletedSelect)
    ifCompletedSelect.append(ifCompletedOptionPlaceholder)
    ifCompletedSelect.append(ifCompletedOptionCompleted)
    ifCompletedSelect.append(ifCompletedOptionNotStarted)
    ifCompletedSelect.append(ifCompletedOptionInProgress)
    ifCompleted.append(completedPagesDiv)
    completedPagesDiv.append(completedPagesLabel)
    completedPagesDiv.append(completedPagesInput)
    // Buttons
    newBookForm.append(cancelButton)
    newBookForm.append(confirmButton)
}



function FormSubmitFunction(event) {
    event.preventDefault()
    console.log("CreateCard function fired")
    BookCardCreator()
    CreateAddCardButton()

}

function CancelButtonFunction() {
    newBookForm.remove()
    CreateAddCardButton()
}

function CreateAddCardButton() {
    console.log("CreateAddCardButton function fired")
    const mainContainer = document.querySelector(".main-container")
    addCard = document.createElement("div")
    addCard.setAttribute("class", "add-card")

    const addButton = document.createElement("img")
    addButton.setAttribute("class", "add-button")
    addButton.setAttribute("src", "images/plus-circle-outline.svg")
    addCard.addEventListener("click", AddNewCard)

    mainContainer.append(addCard)
    addCard.append(addButton)
}


function SavedBookConstructor(title, author, totalPages, pagesRead){
    this.title = title
    this.author = author
    this.totalPages = totalPages
    this.pagesRead = pagesRead
}

const bookCard0 = document.querySelector(`[data-id="0"]`)

function BookCardCreator(){


    let pagesRead = ""

    if (ifCompletedSelect.value == "completed"){
        pagesRead = "completed"
    }else if (ifCompletedSelect.value == "not-started"){
        pagesRead = "0"
    }else if (ifCompletedSelect.value == "in-progress"){
        pagesRead = completedPagesInput.value
    }
    myLibrary.push(new SavedBookConstructor(newTitleInput.value, newAuthorInput.value, totalPagesInput.value, pagesRead))


    // Creating our Book Card Elements
    const bookCard = document.createElement("div")
    bookCard.setAttribute("class", "book-card")
    bookCard.setAttribute("data-id", `${myLibrary.length - 1}`)

    // Edit/Delete buttons and container div
    const editSection = document.createElement("div")
    editSection.setAttribute("class", "edit-section")

    const editCard = document.createElement("img")
    editCard.setAttribute("class", "card-icon edit-card")
    editCard.setAttribute("src", "images/pencil.svg")

    const deleteCard = document.createElement("img")
    deleteCard.setAttribute("class", "card-icon delete-card")
    deleteCard.setAttribute("src", "images/delete-forever.svg")

    // Book Title:
    const bookTitle = document.createElement("h3")
    bookTitle.setAttribute("class", "book-title")
    bookTitle.innerHTML = newTitleInput.value
    

    // Author:
    const bookAuthor = document.createElement("h4")
    bookAuthor.setAttribute("class", "book-author")
    bookAuthor.innerHTML = newAuthorInput.value

    // Pages:
    const numPages = document.createElement("h4")
    numPages.setAttribute("class", "num-pages")
    numPages.innerHTML = `Pages: ${totalPagesInput.value}`

    // If Read Section
    const ifRead = document.createElement("div")
    let ifReadImg = "";
    if (ifCompletedSelect.value == "completed") {
        ifReadImg = document.createElement("p")
        ifReadImg.innerHTML = `Pages Read: ${totalPagesInput.value} / ${totalPagesInput.value}`
        ifRead.setAttribute("class", "if-read completed")
    } else if (ifCompletedSelect.value == "in-progress") {
        ifReadImg = document.createElement("p")
        ifReadImg.innerHTML = `Pages Read: ${completedPagesInput.value} / ${totalPagesInput.value}`
        ifRead.setAttribute("class", "if-read in-progress")
    } else if (ifCompletedSelect.value == "not-started") {
        ifReadImg = document.createElement("p")
        ifReadImg.innerHTML = `Pages Read: 0 / ${totalPagesInput.value}`
        ifRead.setAttribute("class", "if-read not-started")
    }


    newBookForm.remove()

    mainContainer.append(bookCard)
    bookCard.append(editSection)
    editSection.append(editCard)
    editSection.append(deleteCard)
    bookCard.append(bookTitle)
    bookCard.append(bookAuthor)
    bookCard.append(numPages)
    bookCard.append(ifRead)
    ifRead.append(ifReadImg)
}


// Trying to clean up our functions:

function CreateAllBooksFunction(){
    myLibrary.forEach(element => {
        title = element.title
        author = element.author
        pagesRead = element.pagesRead
        totalPages = element.totalPages
    });

}