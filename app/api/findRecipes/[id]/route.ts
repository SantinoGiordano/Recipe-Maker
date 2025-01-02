import food from '@/data/food.json'


export async function GET( 
    _request: Request, 
    {params} : {params:{id:string}}
){
    const foods = food.find( 
        (foods) => foods.id === parseInt(params.id)
    )
    return new Response(JSON.stringify(foods), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    })}

