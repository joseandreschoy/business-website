import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="text-center mb-12 p-8 sm:p-20 bg-white dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Hydrogen Production
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A Breakthrough in Clean Energy Solutions
        </p>
      </header>

      {/* Main Content Section */}
      <section className="grid gap-0 md:grid-cols-2 p-8 sm:p-20">
        <div className="flex items-center justify-center">
          <div className="w-72 h-72 rounded-full overflow-hidden">
            <Image
              src="/images/hydrogen.jpg"
              alt="Hydrogen Image"
              width={288}
              height={288}
              className="object-cover"
            />
          </div>
        </div>

        {/* Information Section */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-4">
            Climate Activism & The Energy Transition
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Climate activism and environmental pressures on air quality have
            sparked a rethinking of energy supply systems. Most studies
            emphasize the importance of electrification and the use of renewable
            energy, but there are major challenges to overcome.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Challenges of Electrification
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Energy storage is key to balancing energy production and supply.
            However, renewables face intermittency issues, requiring large-scale
            energy production systems to meet storage and supply demands over
            daily, weekly, and yearly cycles.
          </p>

          <h3 className="text-xl font-semibold mb-2">The Role of Hydrogen</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Hydrogen has long been considered a solution for decarbonizing
            industries, but its high production costs have hindered adoption.
            Recent developments, such as Ultra Low Carbon Hydrogen, offer a
            promising breakthrough.
          </p>

          <div className="text-center md:text-left">
            <a
              href="/hydrogen/production-methods"
              className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Learn About Ultra Low Carbon Hydrogen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
