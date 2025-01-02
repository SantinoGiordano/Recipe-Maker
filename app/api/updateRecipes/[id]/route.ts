import foods from '@/data/food.json'


export async function GET( 
    _request: Request, 
    {params} : {params:{id:string}}
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

    // export async function PATCH(
    //     _request:Request,
    //     {params} : {params:{id:string}}
    // ){
    //     return new Response()
    // }