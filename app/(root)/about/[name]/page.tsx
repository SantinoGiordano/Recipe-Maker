

export default function DishDetails({params}:{
    params:{name:string}
}){
    return (
    <div className="p-5">
        You chose {params.name}
    </div>
  )
}

