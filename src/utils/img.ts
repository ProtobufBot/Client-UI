const getImage = function (bytes: Uint8Array): string {
  let data = ""
  for (let i = 0; i < bytes.length; i++) {
    data += String.fromCharCode(bytes[i])
  }
  return "data:image/png;base64," + window.btoa(data)
}
export {getImage}
