export default defineNuxtPlugin(() => {
  const block = (event: Event) => event.preventDefault()
  const blockKeys = (event: KeyboardEvent) => {
    if (
      event.key === 'F12' ||
      (event.ctrlKey && event.shiftKey && ['I', 'J', 'C'].includes(event.key.toUpperCase())) ||
      (event.ctrlKey && event.key.toUpperCase() === 'U')
    ) {
      event.preventDefault()
    }
  }
  window.addEventListener('contextmenu', block)
  window.addEventListener('keydown', blockKeys)
})
