import { NextResponse } from "next/server";
 


import { connectedToDatabase } from "../../../../lib/mongodb";
import Product from "../../../../models/Product";





 export async function GET() {

    try{
        await connectedToDatabase()

        const products = await Product.find({})

        return NextResponse.json(products, {status: 200})

    } catch(error) {
      return NextResponse.json({error: "خطا در دریافت محصولات"}, {status:500})
    }

 }