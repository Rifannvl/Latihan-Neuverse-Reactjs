import image from "../assets/hero-illustration.png";
export default function SectionHome() {
  return (
    <section className="container grid grid-cols-2 p-4 gap-4 w-full justify-center items-center">
      <div>
        <h1 className="text-5xl font-bold">
          Landing page for your online service
        </h1>
        <p className="py-6">
          Sed ea enim et expedita quo. Sint consequuntur nobis expedita mollitia
          voluptatem aut est a quia.{" "}
        </p>
        <button className="btn flex justify-center items-center gap-2 bg-neuver py-3 px-8 rounded-md text-white">
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M19 12H5m14 0l-4 4m4-4l-4-4"
            />
          </svg>
        </button>
      </div>
      <div className="w-full justify-center">
        <img src={image} alt="" />
      </div>
    </section>
  );
}
