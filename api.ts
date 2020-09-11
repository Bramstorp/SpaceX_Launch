// @ts-nocheck

import * as planets from "./models/planets.ts"
import * as launches from "./models/launches.ts"

import { Router } from "./deps.ts";

const router = new Router()

router.get("/", (ctx) => {
    ctx.response.body = `
          {__ __                                     {__      {__
        {__    {__                                    {__   {__  
         {__      {_ {__     {__       {___   {__      {__ {__   
           {__    {_  {__  {__  {__  {__    {_   {__     {__     
              {__ {_   {__{__   {__ {__    {_____ {__  {__ {__   
        {__    {__{__ {__ {__   {__  {__   {_         {__   {__  
          {__ __  {__       {__ {___   {___  {____   {__      {__
                  {__                                                                                        
                      
                            Mission Control API`
})

router.get("/planets", (ctx) => {
  ctx.response.body = planets.getAll();
});

router.get("/launches", (ctx)=>{
  ctx.response.body = launches.getAll()
})

router.get("/launches/:id", (ctx) => {
  if (ctx.params?.id) {
    const launchData = launches.getOne(Number(ctx.params.id))
    if (launchData) {
      ctx.response.body = launchData
    } 
    else {
      ctx.throw(400, "theres no launches with that id")
    }
  }
})

router.post("/launches", async (ctx) => {
  const body = await ctx.request.body()

  launches.addOne(body.value)

  ctx.response.body = { success: true }
  ctx.response.status = 201
});

router.delete("/launches/:id", (ctx) => {
  if (ctx.params?.id) {
    const result = launches.removeOne(Number(ctx.params.id))
    ctx.response.body = { success: result }
  }
})

router.get("/rocket", (ctx)=>{
  ctx.response.body = rockets.getAll()
})

export default router