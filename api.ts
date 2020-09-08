// @ts-nocheck

import {Router } from "https://deno.land/x/oak/mod.ts"
import * as plantes from "./models/plantes.ts"
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

router.get("/plantes", (ctx)=>{
    ctx.response.body = plantes.getAllPlantes
})

export default router;