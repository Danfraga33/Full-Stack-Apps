const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener('click', async () => {
  const selectedSector = document.querySelector('input[name="sector"]:checked').value
  console.log(selectedSector)
  try {
    const response = await fetch(`/api?sector=${selectedSector}`)
    const data = await response.json()
    console.log(data)
  } catch (err) {
    console.error(err)
  }
})