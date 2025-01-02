

export async function PATCH(
    request:Request,
    {params} : {params:{id:string}}
){

    const body = await request.json()
    const { name } = body
    const index = food.findIndex(
       food =>  food.id === parseInt(params.id)
    )
    food[index].name = name;
return new Response(JSON.stringify(food[index]), {
    status: 200,
    headers: {
        'Content-Type': 'application/json',
    },
})}