import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="bg-[#6E8480]">
      <div className="pt-0">
        <Hero />
      </div>
      
      {/* About Me Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="heading1B text-center text-white mb-4">About Me</h2>
        <p className="paragraph text-center text-white max-w-3xl mx-auto">
          Hi I am Isaac Santos and I am a junior at Technology High School studying computer science passionate about making the world a better place through the use of code!
        </p>
      </section>

      {/* What I Do Section */}
      <section className="py-16 px-4 md:px-8 bg-[#5a7370]">
        <h2 className="heading1B text-center text-white mb-12">What I do</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Web Development */}
          <div className="bg-[#4a6360] p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <img src="/public/square.png" />
              <h3 className="heading3 text-white">Web Development:</h3>
            </div>
            <p className="paragraph text-white">
              I use front-end languages such as HTML, CSS, and JavaScript to create visually appealing projects that make users excited to use the website while providing an easy user experience.
            </p>
          </div>

          {/* Back-End Coding */}
          <div className="bg-[#4a6360] p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
                <img src="/public/laptop.png" />
              <h3 className="heading3 text-white">Back-End Coding:</h3>
            </div>
            <p className="paragraph text-white">
              I use Back-end languages such as Java, React and SQL to create a functional website that provides all the needs that users expect in a functional design.
            </p>
          </div>

          {/* Communication */}
          <div className="bg-[#4a6360] p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <img src="/public/speech.png" />
              <h3 className="heading3 text-white">Communication</h3>
            </div>
            <p className="paragraph text-white">
              As coding is usually a pair or group activity I have learned how to communicate effectively to create fast and productive workdays.
            </p>
          </div>

          {/* Design */}
          <div className="bg-[#4a6360] p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <img src="/public/brush.png" />
              <h3 className="heading3 text-white">Design</h3>
            </div>
            <p className="paragraph text-white">
              Before coding one must always have an effective design to create a smooth transition towards programming. I am proficient in Figma where I am able to create designs that are transferable onto VS Code and other compilers.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 md:px-8 bg-[#6E8480]">
        <h2 className="heading1B text-center text-white mb-12">Skills</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Languages */}
            <div className="text-center">
              <h3 className="heading3 text-white mb-6">Languages:</h3>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex flex-col items-center">
                  <span className="text-4xl mb-2">🔴</span>
                  <p className="text-white">HTML</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl mb-2">🟡</span>
                  <p className="text-white">CSS</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl mb-2">🟨</span>
                  <p className="text-white">JavaScript</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl mb-2">⚛️</span>
                  <p className="text-white">React</p>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="text-center">
              <h3 className="heading3 text-white mb-6">Technologies:</h3>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex flex-col items-center">
                  <span className="text-4xl mb-2">⚡</span>
                  <p className="text-white">Next.js</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl mb-2">🎯</span>
                  <p className="text-white">Figma</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl mb-2">📦</span>
                  <p className="text-white">Netlify</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl mb-2">🐙</span>
                  <p className="text-white">GitHub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}