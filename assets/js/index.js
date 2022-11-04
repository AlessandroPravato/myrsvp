import BodymovinAnimation from './animations.js'
import initializeSwiper from './swiper.js'

addEventListener('DOMContentLoaded', (event) => {

  var animated_illustrations = document.querySelectorAll('[data-animation-target="illustration"]')
  animated_illustrations.forEach( element => {
    runHeroAnimation(element)
  }) 

  initializeSwiper()

})

function runHeroAnimation(element) {
  let container_selector = element.dataset.animationContainer || `#${element.id}`
  let animation_filepath = element.dataset.animationFilepath

  const animation = new BodymovinAnimation({
    container_selector: container_selector,
    path: animation_filepath
  })
}