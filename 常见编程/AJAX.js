function ajax(options) {
  // 不传则默认为GET请求
  let method = options.method || 'GET',
  // get 的参数
  params = options.params,
  // post 的请求体
  data = options.data,
    url =  options.url + (params ? '?' + Object.keys(params).map(key => key + '=' + params[key]).join('&') : ''),
    async = options.async === false ? false : true,
    success = options.success,
    headers = options.headers
  let xhr
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest()
  } else {
    xhr = new ActiveXObject()
  }
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      success && success(xhr.responseText)
    }
  }
  xhr.open(method, url, async)
  if (headers) {
    Object.keys(headers).forEach(key => xhr.setRequestHeader(key, headers[key]))
  }
  methods == 'GET' ? xhr.send() : xhr.send(data)
}

