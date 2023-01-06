import React from "react";
import Accordion from "../components/Accordion/Accordion";
import Navbar from "../components/navbar/Navbar";
import Volunteer from "../components/Volunteerpage/Volunteer";

const volunteer = () => {
  return (
    <>
      <Navbar />
      <Volunteer />

      <div className="flex flex-col gap-4 items-center justify-center mx-auto py-2
        ">
        <h1 className="text-3xl underline text-left p-5 ">FAQs</h1>
        <Accordion
          title="What are the expectations out of a volunteer?"
          content="There are no specific skill sets or requirements that is expected out a volunteer. If you have cracked any of the competitive examinations which is mentored by OpenGrad / is an alumnus from a top institute /  is willing to involve in content development for an ongoing course / Willing to start a new program in OpenGrad. We are good to go"
        />
        <Accordion
          title="How much time commitment is required?
      "
          content="We will update the ongoing requirements from the volunteers. If you are ready to spare your time for the specific requirement, you can commit. Please make sure that the task once committed is completed within the deadline.  "
        />
        <Accordion
          title="What are the benefits of volunteering?"
          content="You will be a part of the OpenGrad family. You will be able to interact with the students and other volunteers. You will be able to learn and develop your skills. You will be able to contribute to the society. You will be able to be a part of the OpenGrad journey. "
        />
        <p className="text-xl text-slate-800 ">Signup As A Mentor and Be a Part of the Revolution</p>
        <button className="outline outline-violet-500 text-violet-500 hover:bg-green-900 py-4 px-4 font-bold rounded text-white  text-left mx-auto items-center justify-center transition">
          Join as a Volunteer</button>
      </div>
    </>
  );
};

export default volunteer;
