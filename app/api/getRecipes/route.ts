import food from '@/data/food.json'

export async function GET() {
    return new Response(JSON.stringify(food), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
