export function Hero() {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Elevate Your Experience
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Discover our curated collection of premium vaping products,
            where luxury meets exceptional quality.
          </p>
          <a
            href="/collection"
            className="inline-block bg-white text-black px-8 py-3 text-lg font-medium transition-transform hover:scale-105"
          >
            Explore Collection
          </a>
        </div>
      </div>
    </div>
  );
}