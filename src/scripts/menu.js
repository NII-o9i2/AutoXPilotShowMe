// 移动端菜单栏切换
document.querySelector('.hamburger').addEventListener('click', () => document.querySelector('.nav-links').classList.toggle('fold'))

// 切换语言滑块
const slide = document.querySelector('.slide')
const spans = document.querySelectorAll('.lang-switch span')
document.querySelector('.lang-switch').addEventListener('click', () => {
  slide.classList.toggle('slide-move')
  spans.forEach(span => span.classList.toggle('active'))
  setTimeout(() => {
    if(window.location.pathname.includes('en')) {
    window.location.pathname = window.location.pathname.replace('/en', '')
  } else {
    window.location.pathname = window.location.pathname.replace('/', '/en/')
  }
  }, 300)
})