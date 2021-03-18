import React from "react";

const App = () => {
  return (
    <div>
      <figure className="bg-red-100 rounded-xl p-8">
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-semibold">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>Sarah Dayan</div>
            <div>Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default App;
