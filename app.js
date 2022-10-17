let myLibrary = []
let allCards = []
let title
let author
let totalPages
let pagesRead
let totalPagesInput
let ifCompletedSelect
let completedPagesInput
let newTitleInput
let editButton
let deleteButton
let dataID

// form variables:
let newBookHeader
let formHeader
let newBookTitle
let newTitle
let newBookAuthor
let newAuthor
let newBookPageCount
let newPageCount
let ifCompleted
let ifCompletedLabel
let ifCompletedOptionPlaceholder
let ifCompletedOptionCompleted
let ifCompletedOptionNotStarted
let ifCompletedOptionInProgress
let completedPagesDiv
let completedPagesLabel
let cancelButton
let discardButton
let confirmButton
let currBook
let editDeleteButtons

let addCard = document.querySelector(".add-card")
addCard.addEventListener("click", AddCardButtonFunction)


function AddCardButtonFunction() {
    DisableEditDeleteButtons()
    SaveIDAndRemoveAddCard()
    FormCreator()
    AppendForm()
    AddCardButtons()
}

function SaveIDAndRemoveAddCard() {
    addCard.setAttribute("data-id", `${myLibrary.length}`)
    dataID = Number(addCard.dataset.id)
    addCard.remove()
}

function AddCardButtons() {

    // Buttons made/added when the "AddCardButton" is pressed, rather than the "EditCardButton"
    discardButton = document.createElement("button")
    discardButton.setAttribute("class", "cancel")
    discardButton.setAttribute("type", "button")
    discardButton.innerHTML = "Discard"
    discardButton.addEventListener("click", DiscardButtonFunction)
    confirmButton = document.createElement("button")
    confirmButton.setAttribute("class", "confirm")
    confirmButton.innerHTML = "Confirm"
    newBookForm.addEventListener("submit", FormSubmitFunction)

    newBookForm.append(discardButton)
    newBookForm.append(confirmButton)

}

function DiscardButtonFunction() {
    EnableEditDeleteButtons()
    newBookForm.remove()
    CreateAddCardButton()
}



function BookCardCreator() {

    // Creating our Book Card Elements
    const bookCard = document.createElement("div")
    bookCard.setAttribute("class", "book-card")
    bookCard.setAttribute("data-id", `${dataID}`)

    // Edit/Delete buttons and container div
    const editSection = document.createElement("div")
    editSection.setAttribute("class", "edit-section")

    editButton = document.createElement("img")
    editButton.setAttribute("class", "card-icon edit-card")
    editButton.setAttribute("src", "images/pencil.svg")
    editButton.addEventListener("click", EditButtonFunction)

    deleteButton = document.createElement("img")
    deleteButton.setAttribute("class", "card-icon delete-card")
    deleteButton.setAttribute("src", "images/delete-forever.svg")
    deleteButton.addEventListener("click", DeleteButtonFunction)

    // Book Title:
    const bookTitle = document.createElement("h3")
    bookTitle.setAttribute("class", "book-title")
    bookTitle.innerHTML = currBook.title


    // Author:
    const bookAuthor = document.createElement("h4")
    bookAuthor.setAttribute("class", "book-author")
    bookAuthor.innerHTML = currBook.author

    // Pages:
    const numPages = document.createElement("h4")
    numPages.setAttribute("class", "num-pages")
    numPages.innerHTML = `Pages: ${currBook.totalPages}`

    // If Read Section
    const ifRead = document.createElement("div")
    let ifReadImg = "";
    if (currBook.pagesRead == currBook.totalPages) {
        ifReadImg = document.createElement("p")
        ifReadImg.innerHTML = `Pages Read: ${currBook.totalPages} / ${currBook.totalPages}`
        ifRead.setAttribute("class", "if-read completed")
    } else if (currBook.pagesRead != 0 && currBook.pagesRead != currBook.totalPages) {
        ifReadImg = document.createElement("p")
        ifReadImg.innerHTML = `Pages Read: ${currBook.pagesRead} / ${currBook.totalPages}`
        ifRead.setAttribute("class", "if-read in-progress")
    } else if (currBook.pagesRead == "0") {
        ifReadImg = document.createElement("p")
        ifReadImg.innerHTML = `Pages Read: 0 / ${currBook.totalPages}`
        ifRead.setAttribute("class", "if-read not-started")
    }




    mainContainer.insertBefore(bookCard, mainContainer.children[dataID])
    //mainContainer.append(bookCard)
    bookCard.append(editSection)
    editSection.append(editButton)
    editSection.append(deleteButton)
    bookCard.append(bookTitle)
    bookCard.append(bookAuthor)
    bookCard.append(numPages)
    bookCard.append(ifRead)
    ifRead.append(ifReadImg)

    newBookForm.remove()
}

function FormCreator() {

    // Creating all elements for our form and setting attributes (except the buttons)
    newBookForm = document.createElement("form");
    newBookForm.setAttribute("class", "new-book-form")
    newBookForm.setAttribute("action", "#")

    // Form Header
    newBookHeader = document.createElement("h3")
    formHeader = document.createElement("div")
    formHeader.setAttribute("class", "form-header")
    newBookHeader.setAttribute("class", "new-book-header")
    newBookHeader.innerHTML = "Add New Book"

    // Title Input:
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

    // Author Input:
    newBookAuthor = document.createElement("div")
    newBookAuthor.setAttribute("class", "new-book-author")

    newAuthor = document.createElement("label")
    newAuthor.setAttribute("for", "new-author")
    newAuthor.innerHTML = "Author:"

    newAuthorInput = document.createElement("input")
    newAuthorInput.setAttribute("type", "text")
    newAuthorInput.setAttribute("name", "new-author")
    newAuthorInput.setAttribute("id", "new-author-input")
    newAuthorInput.setAttribute("placeholder", "Ex: J.R.R. Tolkien")
    newAuthorInput.setAttribute("required", "")

    // Page Count Input:
    newBookPageCount = document.createElement("div")
    newBookPageCount.setAttribute("class", "new-book-page-count")

    newPageCount = document.createElement("label")
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
    ifCompleted = document.createElement("div")
    ifCompleted.setAttribute("class", "if-completed-div")
    ifCompletedLabel = document.createElement("label")
    ifCompletedLabel.setAttribute("for", "if-completed")
    ifCompletedLabel.innerHTML = "Have you completed the book?"
    ifCompletedSelect = document.createElement("select")
    ifCompletedSelect.setAttribute("name", "if-completed")
    ifCompletedSelect.setAttribute("id", "if-completed")
    ifCompletedSelect.setAttribute("required", "")
    ifCompletedOptionPlaceholder = document.createElement("option")
    ifCompletedOptionPlaceholder.setAttribute("value", "")
    ifCompletedOptionPlaceholder.setAttribute("disabled", "")
    ifCompletedOptionPlaceholder.setAttribute("selected", "")
    ifCompletedOptionPlaceholder.innerHTML = "-Options"

    ifCompletedOptionCompleted = document.createElement("option")
    ifCompletedOptionCompleted.setAttribute("value", "completed")
    ifCompletedOptionCompleted.innerHTML = "Completed"
    ifCompletedOptionNotStarted = document.createElement("option")
    ifCompletedOptionNotStarted.setAttribute("value", "not-started")
    ifCompletedOptionNotStarted.innerHTML = "Not Started"
    ifCompletedOptionInProgress = document.createElement("option")
    ifCompletedOptionInProgress.setAttribute("value", "in-progress")
    ifCompletedOptionInProgress.innerHTML = "In Progress"

    completedPagesDiv = document.createElement("div")
    completedPagesDiv.setAttribute("class", "completed-pages-div")
    completedPagesLabel = document.createElement("label")
    completedPagesLabel.setAttribute("for", "completed-pages-input")
    completedPagesLabel.innerHTML = "Completed Pages:"
    completedPagesInput = document.createElement("input")
    completedPagesInput.setAttribute("type", "number")
    completedPagesInput.setAttribute("name", "completed-pages-input")
    completedPagesInput.setAttribute("id", "completed-pages-input")
    completedPagesInput.setAttribute("disabled", "")
    completedPagesInput.setAttribute("min", "1")

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


}

function AppendForm() {
    // Appending Our Created Elements:
    mainContainer = document.querySelector(".main-container")
    //mainContainer.append(newBookForm)
    // parentElement.insertBefore(newElement, parentElement.children[x]);
    mainContainer.insertBefore(newBookForm, mainContainer.children[dataID])
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
    // Pages Completed
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

}



function FormSubmitFunction(event) {
    event.preventDefault()
    if (completedPagesInput.value > totalPagesInput.value) {
        //completedPagesInput.setCustomValidity("Pages read is higher than Total Pages")
        return
    } else {
        EnableEditDeleteButtons()
        let pagesRead = ""

        if (ifCompletedSelect.value == "completed") {
            pagesRead = totalPagesInput.value
        } else if (ifCompletedSelect.value == "not-started") {
            pagesRead = "0"
        } else if (ifCompletedSelect.value == "in-progress") {
            pagesRead = completedPagesInput.value
        }
        myLibrary.push(new SavedBookConstructor(newTitleInput.value, newAuthorInput.value, totalPagesInput.value, pagesRead))
        currBook = myLibrary[dataID]
        BookCardCreator()
        CreateAddCardButton()
    }
}



function CreateAddCardButton() {
    const mainContainer = document.querySelector(".main-container")
    addCard = document.createElement("div")
    addCard.setAttribute("class", "add-card")

    const addButton = document.createElement("img")
    addButton.setAttribute("class", "add-button")
    addButton.setAttribute("src", "images/plus-circle-outline.svg")
    addCard.addEventListener("click", AddCardButtonFunction)

    mainContainer.append(addCard)
    addCard.append(addButton)
}


function SavedBookConstructor(title, author, totalPages, pagesRead) {
    this.title = title
    this.author = author
    this.totalPages = totalPages
    this.pagesRead = pagesRead
}






// Delete button Function

function DeleteButtonFunction(e) {
    let dataID = Number(e.target.parentElement.parentElement.dataset.id)
    allCards = document.querySelectorAll(`[data-id]`)
    // for loop to change the data-ids of all of the cards that come after the deleted cards, decreasing them by 1
    for (let i = dataID + 1; i < allCards.length; i++) {
        //let currDataID = allCards[i].dataset.id
        allCards[i].setAttribute("data-id", i - 1)

    }
    myLibrary.splice(dataID, 1)
    document.querySelector(`[data-id="${dataID}"]`).remove()
}

// Edit button Function

function EditButtonFunction(e) {
    DisableEditDeleteButtons()
    FormCreator()
    dataID = Number(e.target.parentElement.parentElement.dataset.id)
    currBook = myLibrary[dataID]
    AppendForm()
    EditCardButtons()
    newTitleInput.value = myLibrary[dataID].title
    newAuthorInput.value = myLibrary[dataID].author
    totalPagesInput.value = myLibrary[dataID].totalPages
    document.querySelector(`[data-id="${dataID}"]`).remove()
    completedPagesInput.setAttribute("placeholder", myLibrary[dataID].pagesRead)
    addCard.remove()

}

function EditCardButtons() {
    cancelButton = document.createElement("button")
    cancelButton.setAttribute("class", "cancel")
    cancelButton.setAttribute("type", "button")
    cancelButton.innerHTML = "Cancel"
    cancelButton.addEventListener("click", CancelButtonFunction)
    confirmButton = document.createElement("button")
    confirmButton.setAttribute("class", "confirm")
    confirmButton.innerHTML = "Save"
    newBookForm.addEventListener("submit", SaveButtonFunction)

    newBookForm.append(cancelButton)
    newBookForm.append(confirmButton)
}

function CancelButtonFunction() {
    EnableEditDeleteButtons()
    currBook = myLibrary[dataID]
    BookCardCreator()
    CreateAddCardButton()
}

function SaveButtonFunction(event) {
    event.preventDefault()
    EnableEditDeleteButtons()
    let pagesRead = ""

    if (ifCompletedSelect.value == "completed") {
        pagesRead = totalPagesInput.value
    } else if (ifCompletedSelect.value == "not-started") {
        pagesRead = "0"
    } else if (ifCompletedSelect.value == "in-progress") {
        pagesRead = completedPagesInput.value
    }
    myLibrary[dataID] = new SavedBookConstructor(newTitleInput.value, newAuthorInput.value, totalPagesInput.value, pagesRead)
    currBook = myLibrary[dataID]
    BookCardCreator()
    CreateAddCardButton()
}
// Need to have two different set of buttons for forms we are editing vs. creating. One will be Discard/Submit for a new book which we will attach when we click the "add-card"
// button. And the other will be a Cancel/Confirm for a book we are editing, which will attach to the "edit-card" button.
// when Discard is clicked, it will simply delete the form and re-add the "add-card" button.
// when Cancel is clicked, it will take the information from myLibrary that's stored under the current data-id index and will create the card based on that info.

function DisableEditDeleteButtons() {
    //editDeleteButtons = document.querySelectorAll(".card-icon")
    allEditButtons = document.querySelectorAll(".edit-card")
    allDeleteButtons = document.querySelectorAll(".delete-card")
    allDeleteButtons.forEach(element => {
        element.removeEventListener("click", DeleteButtonFunction)
    })
    allEditButtons.forEach(element => {
        element.removeEventListener("click", EditButtonFunction)
    })

}

function EnableEditDeleteButtons() {
    allEditButtons = document.querySelectorAll(".edit-card")
    allDeleteButtons = document.querySelectorAll(".delete-card")
    allDeleteButtons.forEach(element => {
        element.addEventListener("click", DeleteButtonFunction)
    })
    allEditButtons.forEach(element => {
        element.addEventListener("click", EditButtonFunction)
    })
}

// Creating all of the books with a local/cloud stored myLibrary

function CreateAllBooksFunction() {
    myLibrary.forEach(element => {
        title = element.title
        author = element.author
        pagesRead = element.pagesRead
        totalPages = element.totalPages
    });

}


// const bookFactory = function(title, author, totalPages) {
//     const bookInfo = function(){console.log(`The book ${title} by ${author} has ${totalPages} pages.`)}
//     return {title, author, totalPages}
// };
