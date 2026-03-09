import { theme } from 'antdv-next'

const colorMode = useColorMode()

export const useSwitchTheme = (selected: Ref<boolean>) => {
  const { defaultAlgorithm, darkAlgorithm } = theme
  const themeArr = {
    defaultAlgorithm,
    darkAlgorithm
  }
  
  const setTheme = ref(themeArr['defaultAlgorithm'])
  const switchTheme = (e: Event) => {
    transitionAnimation(e, selected, colorMode)
    setTheme.value = selected.value
      ? themeArr['defaultAlgorithm']
      : themeArr['darkAlgorithm']
  }
  return [switchTheme, setTheme]
}
