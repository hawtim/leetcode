
function getURLFromString(string) {
  const protocol = '(https?|ftp|file):\/\/'
  const common = 'A-Za-z0-9-+&@#/%=~_'
  const separate = '!:,.;'
  // 前面的通用串必须出现一次 ?
  const regexp = new RegExp(`${protocol}[${common}?|${separate}]+[${common}|]`, 'gim')
  return string.match(regexp)
}


function getUrlParams(url) {
  const obj = {}
  const regexp = /[?|&]([a-zA-Z0-9]+=[A-Za-z0-9-+@#./%=~_!:,.;]+)/gim
  let temp
  while ((temp = regexp.exec(url)) !== null) {
    const [key, value] = temp[1].split('=')
    obj[key] = value
  }
  return obj
}

var url = 'https://www.google.com/search?q=sss&oq=sdsdada12321&aqs=chrome..69i57.7635j0j1&sourceid=chrome&ie=UTF-8'
var url1 = 'https://www.google.com/search?q=%E+url+%?&oq=%E58F&aqs=chrome.!:,;69i57j33i10i160l2.6963j0j1&sourceid=chrome&ie=UTF-8'

const params = getUrlParams(url)
console.log('params', params)

const params1 = getUrlParams(url1)
console.log('params1', params1)

// console.log(getURLFromString(url))