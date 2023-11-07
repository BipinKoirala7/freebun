import crypto from 'crypto'

function generateUniqueId(length:number) {
  const size = Math.ceil(length / 2)
  const buffer = crypto.randomBytes(size)
  let code = buffer.toString("hex")
  code = code.substring(0, length)
  return code
}

export { generateUniqueId} 