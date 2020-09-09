// @ts-nocheck

import {Router } from "https://deno.land/x/oak/mod.ts"
import * as plantes from "./models/plantes.ts"
import * as launches from "./models/launches.ts"

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

router.get("/planets", (ctx)=>{
    ctx.response.body = plantes.getAll();
})

router.get("/launches", (ctx)=>{
  ctx.response.body = launches.getAll();
})

export default router;