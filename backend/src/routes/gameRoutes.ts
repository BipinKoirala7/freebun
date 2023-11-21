import axios, { AxiosResponse } from "axios";
import express, { Request, Response } from "express";

import {  getObjectByid, getResponseObject } from "../lib/util";
import {  GameDataT, GameWholeDataT, ServerApiResponsePropsT } from "../types";
import { IsUserLogedIn, checkValidGameId } from "../middleware";
import { generateUniqueId } from "../lib/util";

const gameRoutes = express.Router();

gameRoutes.get('/user/:user_id/new', IsUserLogedIn, async (req: Request, res: Response) => {
    const user_id = req.params.user_id
    try {
        const result:AxiosResponse<ServerApiResponsePropsT<GameDataT>> = await axios.get('http://localhost:4000/api/bee/new')
        const game = result.data
        console.log('Game', game)
            const obj:GameWholeDataT = {
                gameId: generateUniqueId(16),
                userId: user_id,
                IsgameFinished:false,
                gameInfo: game.data[0]
            }
        const save:AxiosResponse<Array<GameWholeDataT>> = await axios.post('http://localhost:3000/gameCollection', obj)
        const report = save.data
        console.log('Report', report)
        if (save.status === 201) {
            return res
                .status(save.status)
                .send(getResponseObject(save.status, [report], true, 'New game is created', false))
        }
        else {
            return res
                .status(save.status)
                .send(getResponseObject(save.status, [report], false, 'New game is created', false))
        }
    }
    catch (error) {
         console.log(error)
         res
            .status(400)
            .send(getResponseObject(400,[],false,'Something went wrong',true))
    }
        console.log('end route /user/:game_id/new', req.params)
})

gameRoutes.get('/user/:user_id/game/:game_id', IsUserLogedIn,checkValidGameId, async (req: Request, res: Response) => {
    console.log('start route /user/:user_id/game/:game_id', req.params)
    try {
        const result:AxiosResponse<Array<GameWholeDataT>> = await axios.get(`http://localhost:3000/gameCollection?game_id=${req.params.game_id}`)
        const data = getObjectByid(result.data,req.params.game_id,'gameId')  
        console.log('data from both user id and game id ',data)
        if (data.length > 0) {
            return res
                    .status(result.status)
                    .send(getResponseObject(result.status,data,true,'Data is retrived',false))
        }
            return res
                    .status(result.status)
                    .send(getResponseObject(result.status,[],false,'Data is retrived',false))
    }
    catch (error) {
        console.log(error)
        return res
                .status(res.statusCode)
                .send(getResponseObject(res.statusCode,[],false,'Something went wrong',true))
    }
})

gameRoutes.get('/user/:user_id',IsUserLogedIn, async (req: Request, res: Response) => {
    console.log('start route /user/:user_id/', req.params)
    const user_id = req.params.user_id
    console.log(req.params)
    try {
            const result:AxiosResponse<Array<GameWholeDataT>> = await axios.get(`http://localhost:3000/gameCollection?user_id=${user_id}`)
            const data = result.data  
        console.log(data)
        if (result.status === 200) {
            return res
                .status(result.status)
                .send(getResponseObject(result.status,data,true,'Data is retrived',false))
        }
            return res
                .status(result.status)
                .send(getResponseObject(result.status,data,false,'Data is retrived',false))
    }
    catch (error) {
        res
            .status(res.statusCode)
            .send(getResponseObject(res.statusCode,[],false,'Something went wrong',true))
    }
    console.log('start route /user/:user_id/', req.params)
})

// only for taking the object to check if the game_id provided is valid
gameRoutes.get('/game/:game_id',async (req: Request, res: Response) => {
    try {
        const result:AxiosResponse<Array<GameWholeDataT>> = await axios.get(`http://localhost:3000/gameCollection?game_id=${req.params.game_id}`)
        const data = result.data
        if (data.length > 0) {
                res
                    .status(result.status)
                    .send(getResponseObject(result.status, data, true, result.statusText,false))
        }
        else {
                res
                    .status(result.status)
                    .send(getResponseObject(result.status, data, false, result.statusText,false))
        }
    }
    catch (error) {
            res
                .status(404)
                .send(getResponseObject(404, [], false, '',true))
    }
})


export default gameRoutes

