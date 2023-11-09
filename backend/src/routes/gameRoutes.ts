import axios, { AxiosResponse } from "axios";
import express, { Request, Response } from "express";

import { checkValidUserId, getResponseObject } from "../lib/util";
import { GameApiResponseT, GameWholeDataT } from "../types";
import { generateUniqueId } from "../lib/util";

const gameRoutes = express.Router();

gameRoutes.get('/:user_id/new', async (req: Request, res: Response) => {
    const userId = req.params.user_id
    try {
        const checkUserId = await checkValidUserId(userId)
        console.log(checkUserId)
        if (typeof checkUserId !== 'boolean'){
             return res.send(getResponseObject(res.statusCode,[],false,'Error occured when checking'))
        }
        if (checkUserId) {
            const result:AxiosResponse<GameApiResponseT> = await axios.get('http://localhost:4000/api/bee/new')
            const game: GameApiResponseT = await result.data
            const obj:GameWholeDataT = {
                gameId: generateUniqueId(16),
                userId: userId,
                IsgameFinished:false,
                gameInfo: game.result
            }
            const save = await axios.post('http://localhost:3000/game', obj)
            const report = await save.data
            console.log(report)
            return res.status(res.statusCode).send(getResponseObject(res.statusCode,report,true,'New game is created'))
        }
          return res.status(res.statusCode).send(getResponseObject(res.statusCode,[],false,'User not found'))
    }
    catch (error) {
         console.log(error)
         res.status(400).send(getResponseObject(400,[],false,'Something went wrong'))
    }
})

export default gameRoutes

