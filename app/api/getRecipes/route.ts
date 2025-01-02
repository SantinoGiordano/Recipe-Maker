
import food from '@/data/food.json'

export async function GET() {
    console.log("got info")
    return new Response(JSON.stringify(food), {
        status: 201,
        headers: {
            'Content-Type': 'application/json',
        },
    })}
