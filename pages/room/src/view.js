class View {
  constructor() {

  }

  createViewElement({muted = true, src, srcObject}) {
    const video = document.createElement('video')
    video.muted = true
    video.src = src
    video.srcObject = srcObject

    if(src) {
      video.controls = true
      video.loop = true
      Util.sleep(200).then(_ => video.play())
    }
    if(srcObject) {
      video.addEventListener("loadedmetadata", _ => video.play())
    }
    return video
  }

  renderVideo({stream= null, url = null}){
    const video = this.createVideoElement({src: url, srcObject: stream})
  }

  appendToHTMLTree(userId, video) {
    const div = document.createElement('div')
    div.id = userId
    div.classList.add('wrapper')
    div.append(video)
    const div2 = document.createElement('div')
    div2.innerText = isCurrentId? '' : userId

    const videoGrid = document.getElementById('video-grid')
  }
}