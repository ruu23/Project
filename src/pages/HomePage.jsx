import Navbar from '../components/Navbar';

function HomePage() {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url(./assets/background.jpg)" }}>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold font-quicksand mb-4">
          Welcome to Home Page
        </h1>
        <p className="text-white text-lg md:text-xl font-light max-w-xl mx-auto">
          Discover a world of content and explore exciting features here.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
