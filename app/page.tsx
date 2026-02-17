import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="bg-[#6E8480] text-white">

      <Hero />

      <div className="w-full h-px bg-white/70" />

      <div id="about" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="heading1B text-center mb-6">About Me</h2>
        <p className="paragraph text-center max-w-3xl mx-auto">
          Hi I am Isaac Santos and I am a junior at Technology High School
          studying computer science passionate about making the world a better
          place through the use of code!
        </p>
      </div>

      <div className="w-full h-px bg-white/70" />

      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-semibold text-center mb-16">
            What I do
          </h2>

          <div className="relative grid grid-cols-1 md:grid-cols-2">

            <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-white/70" />

            <div className="absolute top-1/2 left-0 w-full h-px bg-white/70" />

            <div className="px-8 py-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <img src="/square.png" alt="web icon" className="w-6 h-6" />
                <h3 className="text-2xl font-medium">Web Development:</h3>
              </div>
              <p className="text-white/80 max-w-md mx-auto">
                I use front-end languages such as HTML, CSS, and JavaScript to create
                visually appealing projects that make users excited to use the
                website while providing an easy user experience.
              </p>
            </div>

            <div className="px-8 py-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <img src="/laptop.png" alt="backend icon" className="w-6 h-6" />
                <h3 className="text-2xl font-medium">Back-End Coding:</h3>
              </div>
              <p className="text-white/80 max-w-md mx-auto">
                I use back-end technologies such as Java, React, and SQL to create
                functional websites that provide all the features users expect.
              </p>
            </div>

            <div className="px-8 py-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <img src="/speech.png" alt="communication icon" className="w-6 h-6" />
                <h3 className="text-2xl font-medium">Communication</h3>
              </div>
              <p className="text-white/80 max-w-md mx-auto">
                Since coding is often collaborative, I’ve developed strong
                communication skills to ensure productive teamwork.
              </p>
            </div>

            <div className="px-8 py-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <img src="/brush.png" alt="design icon" className="w-6 h-6" />
                <h3 className="text-2xl font-medium">Design</h3>
              </div>
              <p className="text-white/80 max-w-md mx-auto">
                I am proficient in Figma and create designs that translate
                seamlessly into development.
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="w-full h-px bg-white/70" />

      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto relative">

          <h2 className="text-4xl font-semibold text-center mb-16">
            Skills
          </h2>

          <div className="hidden md:block absolute left-1/2 top-28 h-[65%] w-px bg-white/70" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            <div className="text-center">
              <h3 className="text-2xl mb-10">Languages:</h3>

              <div className="flex flex-col items-center gap-10">
                <div className="flex items-center justify-center gap-10 flex-wrap">
                  <img src="/web.png" alt="HTML CSS JS" className="h-20 object-contain" />
                  <img src="/react.png" alt="React" className="h-20 object-contain" />
                </div>

                <div className="flex items-center justify-center gap-10 flex-wrap">
                  <img src="/sql.png" alt="SQL" className="h-16 object-contain" />
                  <img src="/java.png" alt="Java" className="h-20 object-contain" />
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl mb-10">Technologies:</h3>

              <div className="flex flex-wrap justify-center gap-12">
                <img src="/vscode.png" alt="VS Code" className="h-20 object-contain" />
                <img src="/figma.png" alt="Figma" className="h-20 object-contain" />
                <img src="/github.png" alt="GitHub" className="h-20 object-contain" />
                <img src="/netlify.png" alt="Netlify" className="h-20 object-contain" />
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
