import crypto from 'crypto'
import axios from 'axios'
import { ServerApiResponsePropsT } from '../types'

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

function getResponseObject(status:number,data:Array<any>|[],ok:boolean,message:string) {
  const obj = {
    message: message,
    status:status,
    data:data,
    ok:ok
  }
  return obj
}

async function checkValidUserId(userId: string): Promise<boolean | Error>{
  try {
    const response = await axios.get('http://localhost:4000/api/users/' + userId)
    const user:ServerApiResponsePropsT = await response.data
    if (user.data.length > 0) {
      return true
    }
    else {
      return false
    }
  }
  catch (error) {
    return new Error('Something went wrong')
  }
}

export { generateUniqueId, getResponseObject, checkValidUserId } 