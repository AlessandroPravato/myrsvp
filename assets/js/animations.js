const DEFAULT_OPTIONS = {
  container_selector: null,
  path: null,
  message: null,
  name: "Default Animation",
  loop: true,
  autoplay: true,
}

export default class BodymovinAnimation {
  #container_selector
  #path
  #message
  #name
  #loop
  #autoplay

  constructor(options) {
    this.update({ ...DEFAULT_OPTIONS, ...options })
    this.runAnimation(this.#container_selector, this.#path, this.#message, this.#name, this.#loop, this.#autoplay)
  }

  set container_selector(value) {
    this.#container_selector = value
  }
  set path(value) {
    this.#path = value
  }
  set message(value) {
    this.#message = value
  }
  set loop(value) {
    this.#loop = value
  }
  set autoplay(value) {
    this.#autoplay = value
  }

  update(options) {
    Object.entries(options).forEach(([key, value]) => {
      this[key] = value
    })
  }
  
  runAnimation(container_selector, path, message, name, loop, autoplay) {
    
    if ( !container_selector || !path ) return
    
    let base_container = document.querySelector(container_selector)

    // Create placeholder for the animation
    let animation_container = document.createElement("span")
    animation_container.classList.add('animation-container')
    base_container.appendChild(animation_container)
    
    // Add message if any
    if (message) {
      let message_node = document.createElement("h5")
      message_node.insertAdjacentHTML('afterbegin', message)
      base_container.appendChild(message_node)
    }
    
    console.log("CALLING BODYMOVIN ANIMATION")
    // Call bodymovin animation
    var animation = bodymovin.loadAnimation({
      container: animation_container,
      path: path,
      renderer: 'svg',
      loop: loop,
      autoplay: autoplay,
      name: name
    });
  }

}