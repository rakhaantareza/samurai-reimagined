import './style.css'

const menuButton = document.querySelector('.site-nav__toggle')
const menuDrawer = document.querySelector('.site-nav__drawer')
const menuLinks = [...document.querySelectorAll('.site-nav__links a')]
const menuButtonLabel = menuButton.querySelector('[aria-hidden="true"]')
const desktopMedia = window.matchMedia('(min-width: 900px)')

const setMenuState = (isOpen, { returnFocus = false } = {}) => {
  if (desktopMedia.matches) {
    document.body.classList.remove('nav-open')
    menuDrawer.removeAttribute('data-open')
    menuDrawer.removeAttribute('aria-hidden')
    menuButton.setAttribute('aria-expanded', 'false')
    menuButton.setAttribute('aria-label', 'Open navigation menu')
    menuButtonLabel.textContent = 'MENU'
    return
  }

  document.body.classList.toggle('nav-open', isOpen)
  menuDrawer.toggleAttribute('data-open', isOpen)
  menuDrawer.setAttribute('aria-hidden', String(!isOpen))
  menuButton.setAttribute('aria-expanded', String(isOpen))
  menuButton.setAttribute(
    'aria-label',
    isOpen ? 'Close navigation menu' : 'Open navigation menu',
  )
  menuButtonLabel.textContent = isOpen ? 'CLOSE' : 'MENU'

  if (isOpen) {
    menuLinks[0]?.focus()
  } else if (returnFocus) {
    menuButton.focus()
  }
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true'
  setMenuState(!isOpen)
})

menuLinks.forEach((link) => {
  link.addEventListener('click', () => setMenuState(false))
})

document.addEventListener('keydown', (event) => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true'

  if (!isOpen || desktopMedia.matches) return

  if (event.key === 'Escape') {
    setMenuState(false, { returnFocus: true })
    return
  }

  if (event.key !== 'Tab') return

  const focusableItems = [menuButton, ...menuLinks]
  const firstItem = focusableItems[0]
  const lastItem = focusableItems[focusableItems.length - 1]

  if (event.shiftKey && document.activeElement === firstItem) {
    event.preventDefault()
    lastItem.focus()
  } else if (!event.shiftKey && document.activeElement === lastItem) {
    event.preventDefault()
    firstItem.focus()
  }
})

desktopMedia.addEventListener('change', () => setMenuState(false))
setMenuState(false)