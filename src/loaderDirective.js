import loaderImg from '@/assets/loader.svg'

export default {
  bind(el, binding) {
    const value = binding.value
    addLoader(el)
    const loader = el.querySelector('.v-loader')
    if (!value) loader.style.display = 'none'
  },
  update(el, binding) {
    const loader = el.querySelector('.v-loader')
    const value = binding.value
    if (value) {
      loader.style.display = 'flex'
    } else {
      loader.style.display = 'none'
    }
  }
}

function addLoader(el) {
  const loader = document.createElement('div')
  loader.className = 'v-loader'
  Object.assign(loader.style, {
    background: `url(${loaderImg}) rgba(0, 0, 0, 0.8) center no-repeat`,
    backgroundSize: '100px',
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  })
  el.appendChild(loader)
}
