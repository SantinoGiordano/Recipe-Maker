export default function Home() {
  return (
    <>
    <div 
    className="min-h-screen p-5  bg-cover bg-center bg-fixed"
    style={{
      backgroundImage: "url('/kevin.jpg')", // Ensure the correct path to your image
    }}
    >
      <div className="flex justify-center items-center pt-12">
        <div className="bg-white p-8 text-4xl font-semibold text-center max-w-lg mx-auto shadow-lg rounded-lg">
          Great Recipes You’ll Never Forget
        </div>
      </div>

      <div className="bg-white p-8 max-w-3xl mx-auto my-8 shadow-lg rounded-lg text-lg text-gray-700 leading-relaxed">
        <p className="mb-6">
          At Santino Cooking Website, our mission is to inspire home cooks of all skill levels to explore the world of cooking and discover delicious, easy-to-follow recipes. We believe that food is a universal language that brings people together, and our goal is to provide a platform where anyone can find a recipe that suits their tastes, dietary preferences, and lifestyle. Whether you're looking for quick weeknight dinners, healthy options, or indulgent treats, we have something for everyone to enjoy.
        </p>
        <p>
          We are dedicated to making cooking an enjoyable and rewarding experience. Our collection of carefully curated recipes is designed to be simple yet flavorful, with step-by-step instructions that guide you through every stage of the cooking process. We aim to create a community where culinary creativity flourishes, and where anyone, regardless of their cooking experience, can confidently create meals that are both satisfying and memorable.
        </p>
      </div>
    </div>
    </>
  );
}
