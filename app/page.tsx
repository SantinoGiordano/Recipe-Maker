import food from '@/data/food.json';

export default function Home() {
  return (
    <>
      {food.map((data) => (
        <div key={data.id} className="pl-10 p-6">
          <h3 className="text-3xl font-bold">{data.name}</h3>
          <div>
            <strong className="text-base">Ingredients:</strong>
            <p className="text-sm text-gray-500 max-w-[600px]">
              {data.ingredients.join(', ')}
            </p>
          </div>
          <div>
            <strong className="text-base">Steps:</strong>
            <ol className="list-decimal pl-6 max-w-[600px]">
              {data.steps.map((step, index) => (
                <li key={index} className="text-base">{step.description}</li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </>
  );
}

