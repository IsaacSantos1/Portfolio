import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="bg-[#6E8480]">
 <Hero />
      <h1 className="heading1B  flex justify-center items-center text-center">
        About Me
      </h1>
      <br />
      <h1 className="heading1B  flex justify-center items-center text-center">What I do </h1>


      <div className="grid grid-rows-2 grid-cols-2 gap-4">
      <div>
        <div>
          image
        <h3 className="heading3 ">Web Development:</h3>
        </div>
        <p className="paragraph">I use front-end languages such as HTML, CSS, and  javascript to create visually appealing projects that make users excited to use the website while providing a easy user experience.</p>
      </div>


      <div>
        <div>
          image
        <h3 className="heading3">Back-End Coding:</h3>
        </div>
        <p className="paragraph">I use Back-end languages such as java, React and SQL to create a functional website that provides all the needs that users expect in a functional design.</p>
      </div>


      <div>
        <div>
          image
        <h3 className="heading3">Communication</h3>
        </div>
        <p className="paragraph">As coding is usually a pair or group activity I have learned how to communicate effectively to create fast and productive workdays</p>
        </div>


        <div>
          <div>
          image
        <h3 className="heading3">Design</h3>
        </div>
        <p className="paragraph">Before coding one must always have an effective design to create a smooth transtition towards programming. I am sufficient in figma where I am able to create designs that are transferable onto VS Code and other compilers. </p>
        </div>
        </div>

        <br className="p-2"></br>

        <div>
        <h1 className="heading1B  flex justify-center items-center text-center">
          Skills
        </h1>
        </div>
       
           
     </div>
      
  );
}
