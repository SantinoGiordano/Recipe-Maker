import foods from '@/data/food.json'


export async function GET( 
    _request: Request, 
    {params}:{id:string}
){
    const food = foods.find( 
        (food) => food.id === parseInt(params.id)
    )
    return new Response(JSON.stringify(food), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    })}
