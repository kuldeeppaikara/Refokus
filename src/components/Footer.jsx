import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className=" max-w-screen-xl mx-auto py-10 flex gap-3 ">
        <div className="basis-1/2">
          <h1 className="text-[12rem] font-medium ">refokus.</h1>
          <ul className="flex gap-15 pl-3 mt-[-5%]">
            {["Hamburg, Germany", "New York, US"].map((elem, index) => (
              <li key={index}>{elem}</li>
            ))}
          </ul>
          <ul className="flex gap-10 pl-3 mt-8">
            {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map(
              (elem, index) => (
                <li key={index}>{elem}</li>
              )
            )}
          </ul>
        </div>
        <div className="basis-1/2 mt-20  flex justify-end ">
          <div className="basis-1/5">
            <h4 className="text-xl font-semibold text-[#8694BF]">Socials</h4>
            <ul className="mt-10 flex flex-col gap-3">
              {["Instagram", "Twitter", "Linkedin"].map((elem, index) => (
                <li key={index}>{elem}</li>
              ))}
            </ul>
          </div>
          <div className="basis-1/5">
            <h4 className="text-xl font-semibold text-[#8694BF]">Sitemap</h4>
            <ul className="mt-10 flex flex-col gap-3">
              {["Home", "Services", "Work", "Carees", "Contact"].map(
                (elem, index) => (
                  <li key={index}>{elem}</li>
                )
              )}
            </ul>
          </div>
          <div className="basis-2/5">
            <h4> </h4>
            <p className="mt-17 text-right ">
              Refokus is a full-service Webflow agency designing and building
              brands and websites that empower growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
