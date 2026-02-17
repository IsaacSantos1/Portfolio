import Project_card from "../components/Project_card";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#6E8480] p-8 space-y-8 ">
      <h1 className="text-3xl font-bold text-white mb-6">
        Featured Projects
      </h1>

      <Project_card
        title="Tea Cozy"
        date="1/22/26"
        info="
Tea Cozy was a website project assigned for a midterm that helped the tea/cafe business “Tea Cozy” get online to begin selling their products and share their business."
        imgSrc="/Midterm.png"
         link="https://midtermis.netlify.app/"
      />

      <Project_card
        title="Our Blooms"
        date="1/16/26"
        info="The Ourblooms website was a project I completed in January of 2026. It incorperated a flower business called Ourblooms online"
        imgSrc="/Ourblooms.png"
        link="https://capstone2ourbloomsisaac.netlify.app/"
      />

      <Project_card
        title="BookLightenment"
        date="12/21/25"
        info="BookLightenment is a library  that we helped become fully functional online. It comes with all different sorts of tools to create the best user experience"
        imgSrc="/book.png"
        link="https://github.com/mateusousatav/ADV_25-26_Q2/tree/main/LibraryProject"
      />

      <Project_card
        title="Card Game"
        date="11/15/25"
        info="The Ourblooms website was a project I completed in January of 2026. It incorperated a flower business called Ourblooms online"
        imgSrc="/cards.png"
        link="https://github.com/IsaacSantos1/Exam_1"
      />

      <Project_card
        title="Future Franks"
        date="10/3/25"
        info="Future Franks was a website made early in my senior year, it is a fully online hot dog business that with our help is now able to ship and sell their products"
        imgSrc="/franks.png"
        link="https://codehs.com/sandbox/id/project-10725-m0AaMY"
      />

      <Project_card
        title="Cho Han"
        date="1/16/25"
        info="Cho Han was a project done in junior year where it used java to create the simple and loved game Cho Han online so all lovers of the game could play without having to find a friend"
        imgSrc="/chohan.png"
        link="https://codehs.com/sandbox/id/cho-han-11625-6eP3Nj?collaborate=-OGpZj7RXAimlrB6sX4y"
      />
    </main>
  );
}
