
import food from '@/data/food.json'

export async function POST(request:Request){

    const dish = await request.json()
    const newFood = {
        id:food.length +1,
        name: dish.name,
    }
    food.push(newFood) 
    console.log("there is a new item")
    
    return new Response(JSON.stringify(newFood), {
        status: 201,
        headers: {
            'Content-Type': 'application/json',
        },
    })
}