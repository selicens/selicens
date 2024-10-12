export const transitionAnimation = (e: Event, selected: Ref<boolean>, colorMode: any) => {
  //selected.value = !selected.value
  const transition = document.startViewTransition(() => {
    colorMode.preference = selected.value ? 'dark' : 'light'
  })
  transition.ready.then(() => {
    // 获取鼠标点击的位置
    const { clientX, clientY } = e as MouseEvent
    console.log(e)
    // 计算半径，以鼠标点击的位置为圆心，到四个角的距离中最大的那个作为半径
    const radius = Math.hypot(
      Math.max(clientX, window.innerWidth - clientX),
      Math.max(clientY, window.innerHeight - clientY)
    )
    const clipPath = [
      `circle(0% at ${clientX}px ${clientY}px)`,
      `circle(${radius}px at ${clientX}px ${clientY}px)`
    ]
    // 自定义动画
    document.documentElement.animate(
      {
        // 如果要切换到暗色主题，我们在过渡的时候从半径 100% 的圆开始，到 0% 的圆结束
        clipPath: selected.value ? clipPath.reverse() : clipPath
      },
      {
        duration: 500,
        // 如果要切换到暗色主题，我们应该裁剪 view-transition-old(root) 的内容
        pseudoElement: selected.value
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)'
      }
    )
  })
}
