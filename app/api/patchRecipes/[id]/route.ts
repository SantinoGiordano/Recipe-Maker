import food from '@/data/food.json'
// import { NextRequest } from 'next/server'


// export async function GET( 
//     _request: Request, 
//     {params} : {params:{id:string}}
// ){
//     const foods = food.find( 
//         (foods) => foods.id === parseInt(params.id)
//     )
//     return new Response(JSON.stringify(foods), {
//         status: 200,
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })}


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

export async function DELETE(
    request:Request,
    {params} : {params:{id:string}}
){
    
    const index = food.findIndex(
        (food) =>  food.id === parseInt(params.id)
    )
    const deletedFood = food[index]
    food.splice(index,1)
    return Response.json(deletedFood)

}