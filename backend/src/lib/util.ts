import crypto from 'crypto'

function getObjectByid(Array: Array<any>, id:string,identifierName:string) {
  const givenArray = Array
  return givenArray.filter(item => item[identifierName] === id)
}

function generateUniqueId(length: number) {
  // userId length must be 20
  // gameId length must be 16
  // wordArr length must be 10
  const size = Math.ceil(length / 2)
  const buffer = crypto.randomBytes(size)
  let code = buffer.toString("hex")
  code = code.substring(0, length)
  return code
}

function getResponseObject(
  status: number,
  data: Array<any> | [],
  ok: boolean,
  message: string, error: boolean)
{
  const obj = {
    message: message,
    status:status,
    data:data,
    ok: ok,
    error:error
  }
  return obj
}



export { generateUniqueId, getResponseObject ,getObjectByid  } 