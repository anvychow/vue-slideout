import languages from './langs.json'

const langOrder = window.navigator.languages

function getLang() {
  // 从浏览器读取默认的语言
  for (let i = 0; i < langOrder.length; i++) {
    let lang = langOrder[i]
    if (languages.hasOwnProperty(lang)) {
      return lang
    }
  }
  // 默认设置为英文
  return 'en'
}

let langId = getLang()

const directive = {
  inserted: el => {
    // value 是 langId
    const define = languages[langId]
    if (!define) {
      // 不支持此语言，啥也不做
      return
    }
    let text = el.innerHTML
    // 处理vue在子元素标签上生成的 v-data 属性
    text = text.replace(/<(\w+).+?>(.+?)<\/\1>/g, (match, tag, content) => `<${tag}>${content}</${tag}>`)
    if (!define.hasOwnProperty(text)) {
      // 没有这项的其它语言，啥也不做
      console.log(text)
      return
    }
    el.innerHTML = define[text]
  }
}

export default {
  install(Vue) {
    Vue.directive('lang', directive)
  }
}