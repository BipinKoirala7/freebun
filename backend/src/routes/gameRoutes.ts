import axios, { AxiosResponse } from "axios";
import express, { Request, Response } from "express";

import {  getResponseObject } from "../lib/util";
import {  GameDataT, GameWholeDataT, ServerApiResponsePropsT } from "../types";
import { checkValidUserId } from "../middleware";
import { generateUniqueId } from "../lib/util";

const gameRoutes = express.Router();

gameRoutes.get('/user/:user_id/new', async (req: Request, res: Response) => {
    console.log('start route /user/:game_id/new', req.params)
    const userId = req.params.user_id
    try {
        const checkUserId = await checkValidUserId(userId)
        if (typeof checkUserId !== 'boolean'){
              return res
                .send(getResponseObject(res.statusCode,[],false,'Error occured when checking'))
        }
        else if (checkUserId) {
            const result:AxiosResponse<ServerApiResponsePropsT<GameDataT>> = await axios.get('http://localhost:4000/api/bee/new')
            const game = result.data
            console.log('Game', game)
                const obj:GameWholeDataT = {
                    gameId: generateUniqueId(16),
                    userId: userId,
                    IsgameFinished:false,
                    gameInfo: game.data[0]
                }
            const save:AxiosResponse<Array<GameWholeDataT>> = await axios.post('http://localhost:3000/gameCollection', obj)
            const report = save.data
            console.log('Repoert',report)
             return res
                .status(save.status)
                .send(getResponseObject(save.status,[report],true,'New game is created'))
        }
           res
            .status(res.statusCode)
            .send(getResponseObject(res.statusCode,[],false,'User not found'))
    }
    catch (error) {
         console.log(error)
         res
            .status(400)
            .send(getResponseObject(400,[],false,'Something went wrong'))
    }
        console.log('end route /user/:game_id/new', req.params)
})

gameRoutes.get('/user/:user_id/game/:game_id', async (req: Request, res: Response) => {
    console.log('start route /user/:user_id/game/:game_id', req.params)
    try {
        const IsValidUser = await checkValidUserId(req.params.user_id)
        console.log(IsValidUser)
        if (IsValidUser) {
            const result:AxiosResponse<Array<GameWholeDataT>> = await axios.get(`http://localhost:3000/gameCollection?game_id=${req.params.game_id}&user_id=${req.params.user_id}`)
            const data = await result.data  
            res
                .status(result.status)
                .send(getResponseObject(result.status,data,true,'Data is retrived'))
        }
        else {
            res
                .status(res.statusCode)
                .send(getResponseObject(res.statusCode,[],false,'User is not verified'))
        }
    }
    catch (error) {
        res
            .status(res.statusCode)
            .send(getResponseObject(res.statusCode,[],false,'Something went wrong'))
    }
    console.log('end route /user/:user_id/game/:game_id', req.params)
})

gameRoutes.get('/user/:user_id', async (req: Request, res: Response) => {
    console.log('start route /user/:user_id/', req.params)
    console.log(req.params)
    try {
        const IsValidUser = await checkValidUserId(req.params.user_id)
        if (IsValidUser) {
            const result:AxiosResponse<Array<GameWholeDataT>> = await axios.get(`http://localhost:3000/gameCollection`)
            const data = await result.data  
            console.log(data)
            res
                .status(result.status)
                .send(getResponseObject(result.status,data,true,'Data is retrived'))
        }
        else {
            res
                .status(res.statusCode)
                .send(getResponseObject(res.statusCode,[],false,'User is not verified'))
        }
    }
    catch (error) {
        res
            .status(res.statusCode)
            .send(getResponseObject(res.statusCode,[],false,'Something went wrong'))
    }
    console.log('start route /user/:user_id/', req.params)
})

// only for taking the object to check if the game_id provided is valid
gameRoutes.get('/game/:game_id', async (req: Request, res: Response) => {
    try {
        const result:AxiosResponse<Array<GameWholeDataT>> = await axios.get(`http://localhost:3000/gameCollection?game_id=${req.params.game_id}`)
        const data = result.data
        if (data.length > 0) {
                res
                    .status(result.status)
                    .send(getResponseObject(result.status, data, true, result.statusText))
        }
        else {
                res
                    .status(result.status)
                    .send(getResponseObject(result.status, data, false, result.statusText))
        }
    }
    catch (error) {
            res
                .status(404)
                .send(getResponseObject(404, [], false, ''))
    }
})


export default gameRoutes

