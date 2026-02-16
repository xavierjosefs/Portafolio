export default function AreaCard({ img, title, text }) {
  return (
    <div
      className="relative inline-block max-w-md px-8 py-6 bg-[#D7D7D7] bg-no-repeat bg-left bg-contain overflow-hidden"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="relative z-10 ml-10">
        <h1 className="text-lg font-bold tracking-[0.35em] uppercase text-black">
          {title}
        </h1>

        {text && (
          <p className="mt-3 text-base text-gray-700 leading-relaxed max-w-md">
            {text}
          </p>
        )}
      </div>
    </div>
  );
}
