import food from '@/data/food.json';

export default function Recipes() {
  return (
    <>
      <div
        className="bg-panSearing p-5  bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/foodOnTable.jpg')", // Ensure the correct path to your image
        }}
      >
        <h2 className="pt-5 text-4xl font-bold text-center mb-8 text-white">Full Dish</h2>
        <div className="flex justify-center items-center px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-xl w-full">
            {food.map((data) => (
              <div
                key={data.id}
                className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-300 w-[400px]"
              >
                <div className="p-8">
                  <p className="text-3xl font-bold text-center mb-6">{data.name}</p>
                  <div className="mb-6">
                    <strong className="text-lg">Ingredients:</strong>
                    <p className="text-md text-gray-600 max-w-[600px] mx-auto">
                      {data.ingredients.join(', ')}
                    </p>
                  </div>
                  <div>
                    <strong className="text-lg">Steps:</strong>
                    <ol className="list-decimal pl-8 text-md">
                      {data.steps.map((step, index) => (
                        <li key={index} className="text-gray-700 mb-3">
                          {step.description}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
