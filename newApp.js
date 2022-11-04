(function () {
    const addCard = document.getElementById('addCard')
    addCard.addEventListener('click', formCreator)
    let myLibrary = []
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
    // Form/Container creation
    newForm = document.createElement("form");
    newForm.classList.add("new-book-form")
    newForm.setAttribute("action", "#")
    // Header creation
    formHeader = document.createElement("div")
    formHeader.classList.add("form-header")
    formHeader.innerHTML = "Add New Book"
    // Title section of our form
    titleDiv = document.createElement("div")
    titleDiv.classList.add('new-book-title')
    titleLabel = document.createElement("label")
    titleLabel.setAttribute('for', 'new-title')
    titleLabel.innerHTML = 'Title:'
    titleInput = document.createElement('input')
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('name', 'new-title')
    titleInput.setAttribute('id', 'new-title-input')
    titleInput.setAttribute('placeholder', 'Ex: The Hobbit')
    titleInput.setAttribute('required', '')
    //Author section of our form
    authorDiv = document.createElement('div')
    authorDiv.classList.add('new-book-author')
    authorLabel.document.createElement('label')
    authorLabel.setAttribute('for', 'new-author')
    authorLabel.innerHTML = 'Author:'
    authorInput = document.createElement('input')
    authorInput.setAttribute('type', 'text')
    authorInput.setAttribute('name', 'new-author')
    authorInput.setAttribute('id', 'new-author-input')
    authorInput.setAttribute('placeholder', 'Ex: J.R.R. Tolkien')
    authorInput.setAttribute('required', '')
    // Total Pages section of our form
    tPagesDiv = document.createElement('div')
    tPagesDiv.classList.add('new-book-page-count')
    tPagesLabel = document.createElement('label')
    tPagesLabel.setAttribute('for', 'new-page-count')
    tPagesLabel.innerHTML = 'Total Pages:'
    tPagesInput = document.createElement('input')
    tPagesInput.setAttribute('type', 'number')
    tPagesInput.setAttribute('name', 'new-page-count')
    tPagesInput.setAttribute('id', 'new-page-count-input')
    tPagesInput.setAttribute('placeholder', 'Ex: 304')
    tPagesInput.setAttribute('required', '')
    tPagesInput.setAttribute('min', '1')
    // Pages Read section of our form (new)
    pagesReadDiv = document.createElement('div')
    pagesReadDiv.classList.add('pages-read-count')
    pagesReadLabel = document.createElement('label')
    pagesReadLabel.setAttribute('for', 'pages-read')
    pagesReadLabel.innerHTML = 'Pages Read:'
    pagesReadInput = document.createElement('input')
    pagesReadInput.setAttribute('type', 'number')
    pagesReadInput.setAttribute('name', 'pages-read')
    pagesReadInput.setAttribute('id', 'pages-read-input')
    pagesReadInput.setAttribute('value', '0')
    pagesReadInput.setAttribute('placeholder', '0')
    // Discard Button section of our form
    discardButton = document.createElement("button")
    discardButton.classList.add('cancel')
    discardButton.setAttribute('type', 'button')
    discardButton.addEventListener('click', DiscardButtonFunction)
    // Confirm Button section of our form
    confirmButton = document.createElement('button')
    confirmButton.classList.add('confirm')
    newBookForm.addEventListener('submit', FormSubmitFunction)
}

function appendForm() {
    mainContainer = document.querySelector(".main-container")
    // insertBefore newForm incase we are editiing a book
    mainContainer.insertBefore(newForm, mainContainer.children[dataID])
    newForm.append(formHeader)
    newForm.append(titleDiv)
    titleDiv.append(titleLabel)
    titleDiv.append(titleInput)
    newForm.append(authorDiv)
    authorDiv.append(authorLabel)
    authorDiv.append(authorInput)
    newForm.append(tPagesDiv)
    tPagesDiv.append(tPagesLabel)
    tPagesDiv.append(tPagesInput)
    newForm.append(pagesReadDiv)
    pagesReadDiv.append(pagesReadLabel)
    pagesReadDiv.append(pagesReadInput)
    newForm.append(discardButton)
    newForm.append(confirmButton)
}

function submitForm(){
    
    myLibrary.push()
}
