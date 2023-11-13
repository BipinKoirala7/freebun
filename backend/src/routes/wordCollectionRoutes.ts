import express, { Request, Response } from 'express'
import axios, { AxiosResponse } from 'axios'

import { generateUniqueId, getResponseObject } from '../lib/util'
import { ServerApiResponsePropsT, wordArrT } from '../types'
import { checkValidGameId, checkWordCollectionPresence } from '../middleware'

const wordCollectionRoutes = express.Router()

// get routes for word collection
wordCollectionRoutes.get('/game/:game_id', async (req: Request, res: Response) => {
    console.log('start route /game/:game_id', req.params)
    const gameId = req.params.game_id
    try {
        const result:AxiosResponse<Array<wordArrT>> = await axios.get(`http://localhost:3000/wordCollection?game_id=${gameId}`)
        const data = result.data
        console.log(data)
        if (data.length > 0) {
             res
                .status(result.status)
                .send(getResponseObject(result.status,data,true,result.statusText))
        }
        else {
             res
                .status(result.status)
                .send(getResponseObject(result.status,[],false,'There is no info about the game'))
        }
    }
    catch (error) {
        res
            .status(404)
            .send(getResponseObject(404,[],false,'Something went wrong'))
    }
    console.log('end route /game/:game_id')
})

// post request for wordCollection
wordCollectionRoutes.post('/game/:game_id/new', async (req: Request, res: Response) => {
    console.log('start route /game/:game_id/new', req.params)
    const game_id = req.params.game_id
    try {
        const isValidGameId = await checkValidGameId(game_id)
        const isThereAlreadyWordCollection = await checkWordCollectionPresence(game_id)
        console.log('isValidGameId',  isValidGameId)
        console.log('checkWordCollectionPresence',  isThereAlreadyWordCollection)
        if ( !(typeof isThereAlreadyWordCollection == 'boolean')) {
            console.log('non boolean response')
             res
                .status(res.statusCode)
                .send(getResponseObject(res.statusCode,[],false,'There is no game related to the given information'))
        }
        else if (isValidGameId && !isThereAlreadyWordCollection) {
            console.log('expected return')
            const wordObj:wordArrT = {
                game_id: game_id,
                wordArr_id: generateUniqueId(10),
                wordList:[]
            }
            const result:AxiosResponse<wordArrT> = await axios.post('http://localhost:3000/wordCollection', wordObj)
            const wordArr = result.data
            console.log('wordArr',wordArr)
            res
                .status(result.status)
                .send(getResponseObject(result.status,[wordArr],true,result.statusText))
        }
        else {
            console.log('unwanted return')
            res
                .status(res.statusCode)
                .send(getResponseObject(res.statusCode,[],true,'Information is wrong or their is already a collection established'))
        }
    }
    catch (error: any) {
        console.log(error) 
        res
            .status(res.statusCode)
            .send(getResponseObject(res.statusCode,[],false,error.message))
    }
    console.log('end route /game/:game_id/new')
})

wordCollectionRoutes.patch('/game/:game_id/word', async (req: Request, res: Response) => {
    console.log('start route /game/:game_id/word', req.params,req.body)
    // nested routing is not supported without custom routes and I don't see any prospect in learning cutom 
    // routes so I will bend the way with get filter push and post
    const gameId = req.params.game_id
    try {
        const isGameIdvlid = await checkValidGameId(gameId)
        if (typeof isGameIdvlid !== 'boolean') {
            console.log('types comes as error or non boolean')
            res
                .status(200)
                .send(getResponseObject(200, [], false, 'the given information is wrong'))
        }
        else if (isGameIdvlid) {
            // body the word that is to pushed in the wordlist array
            const body = req.body
            // body-> end
            // get the collecion word data from the file
            const wordCollectionwithgivenId:AxiosResponse<ServerApiResponsePropsT<wordArrT  & {id:string}>> = await axios.get(`http://localhost:4000/api/wordCollection/game/${gameId}`)
            const wordInfo = wordCollectionwithgivenId.data.data
            // collection get -> end
            // creating updated array with required element pushed to wordList
            const newupdatedArray: Array<string> = wordInfo[0].wordList
            console.log(wordInfo[0].id)
            newupdatedArray.push(body.word)
            const updatedArray: wordArrT = {
                game_id: wordInfo[0].game_id,
                wordArr_id: wordInfo[0].wordArr_id,
                wordList:newupdatedArray
            }
            // end
            const result: AxiosResponse<Array<wordArrT>> = await axios.put(`http://localhost:3000/wordCollection/${wordInfo[0].id}`,updatedArray)
            const data = result.data
            console.log(data)
            res
                .status(result.status)
                .send(getResponseObject(result.status,data,true,result.statusText))
        }
        else {
            res
                .status(res.statusCode)
                .send(getResponseObject(res.statusCode,[],false,'Not found'))
        }
    }
    catch (error) {
        console.log(error)
        res
            .status(404)
            .send(getResponseObject(404,[error],false,'Something went wrong'))
    }
console.log('end route /game/:game_id/word')
})

export default wordCollectionRoutes