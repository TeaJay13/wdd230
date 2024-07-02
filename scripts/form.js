let confirmItem = document.querySelector("#confirm")

confirmItem.addEventListener("focusout", () => {
    let passwordItem = document.querySelector("#password")
    if (confirmItem.value != passwordItem.value) {
        document.querySelector("#message").innerText = "Passwords do not match!"
        passwordItem.focus()
    }
    else {
        document.querySelector("#message").innerText = ""
    }
})