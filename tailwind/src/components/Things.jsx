import React from "react";
function Things({ username = "MALINI", post = "busines", newArr = [] }) {
  return (
    <>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="/sarah-dayan.jpg"
          alt=""
          width="384"
          height="512"
        />
        <h1 className="text=3xl bg-green-500 p-3">Im Button</h1>
        <button></button>
        <div className="pt-6 text-cente space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Deepika</div>
            <div className="text-slate-700 dark:text-slate-500">
              {post}, {username}
            </div>
            <div>
              <ul>
                {newArr.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  );
}

export default Things;
