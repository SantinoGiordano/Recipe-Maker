import { NextRequest } from "next/server"
import food from '@/data/food.json'

export async function GET( request:NextRequest ){
    
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')
    const filteredFoods = query ? 
    food.filter(food => food.name.includes(query))
    :food
    return new Response(JSON.stringify(filteredFoods), {
        status: 201,
        headers: {
            'Content-Type': 'application/json',
        },
    })
}