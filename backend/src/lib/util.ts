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

function getResponseObject(status:number,data:Array<any>|[] | {},ok:boolean,message:string) {
  const obj = {
    message: message,
    status:status,
    data:data,
    ok:ok
  }
  return obj
}



export { generateUniqueId, getResponseObject } 