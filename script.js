const button = document.getElementById("btn")
const list = document.getElementById("list")
const input = document.getElementById("input")
const deleteList = document.querySelectorAll(".delete")
const listItem = document.getElementById("list")
const alertAdd = document.querySelector(".alert-1")
const alertRemove = document.querySelector(".alert-2")



button.addEventListener("click", () => {
  const text = input.value.trim()

  if (text === "") {
    alert("Digite o nome de um item.")
    return
  }

  // Criar o novo item da lista.
  const newItem = document.createElement("li")
  newItem.className = "item flex items-center gap-3 border-2 rounded-xl bg-[var(--bg-secondary)]"
  
  // Criar o label com checkbox.
  const label = document.createElement("label")
  label.className = "checkbox-container"
  label.htmlFor = "chk"

  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"

  const checkIcon = document.createElement("span")
  checkIcon.className = "check-icon"

  label.appendChild(checkbox)
  label.appendChild(checkIcon)

  // Criar o parágrafo com o texto.
  const textItem = document.createElement("p")
  textItem.textContent = text

  // Criar o ícone de delete.
  const iconeGarbage = document.createElement("img")
  iconeGarbage.src = "icons/garbage.svg"
  iconeGarbage.alt = "Excluir item"
  iconeGarbage.className = "delete"

  // Montar o item.
  newItem.appendChild(label)
  newItem.appendChild(textItem)
  newItem.appendChild(iconeGarbage)

  // Adicionar à lista.
  list.appendChild(newItem)

  // Limpar o input.
  input.value = ""

  alertAdd.style.display = "flex"
  alertAdd.style.opacity = "1"
  setTimeout(() => {
    alertAdd.style.display = "none"
    alertAdd.style.opacity = "0"
  }, 3000)
  
})


//Criando a função de exclusão da li direto na ul.
listItem.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove() 

    alertRemove.style.display = "flex"
    alertRemove.style.opacity = "1"
    setTimeout(() => {
      alertRemove.style.display = "none"
      alertRemove.style.opacity = "0"
    }, 3000)

   }
})