export const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Adjust for navbar height
      behavior: "smooth",
    })
  }
}
