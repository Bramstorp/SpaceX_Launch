import {Router } from "https://deno.land/x/oak/mod.ts"
import * as plantes from "./models/plantes.ts"
const router = new Router()

router.get("/", (ctx) => {
    ctx.response.body = `
    {___     {__      {_         {__ __        {_       
    {_ {__   {__     {_ __     {__    {__     {_ __     
    {__ {__  {__    {_  {__     {__          {_  {__    
    {__  {__ {__   {__   {__      {__       {__   {__   
    {__   {_ {__  {______ {__        {__   {______ {__  
    {__    {_ __ {__       {__ {__    {__ {__       {__ 
    {__      {__{__         {__  {__ __  {__         {__
                    Mission Control API`
})

router.get("/plantes", (ctx)=>{
    ctx.response.body = plantes.getAllPlantes()
})

export default router;