import React from "react";

type Props = {};

const WokingProcessSection = (props: Props) => {
  type WorkingProps = {
    id: string;
    title: string;
    description: string;
  };

  const workingProcess: WorkingProps[] = [
    {
      id: "01",
      title: "Daily Standups",
      description: "Short meetings to track progress.",
    },
    {
      id: "02",
      title: "Sprint Planning",
      description: "Dividing work into short, manageable sprints.",
    },
    {
      id: "03",
      title: "Version Control",
      description: "Using Git, GitHub, GitLab, or Bitbucket.",
    },
    {
      id: "04",
      title: "Collaboration Tools",
      description: "Slack, Jira, Trello, Asana, etc.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-primary to-accent p-10 lg:px-32 text-secondary place-items-center space-y-10">
      <div className="space-y-4 place-items-center">
        <h1 className="text-xl font-bold max-sm:text-center">
          Working Process{" "}
        </h1>
        <p className="text-xs md:text-sm text-center text-secondary opacity-60 max-lg:line-clamp-[8]">
          "We provide industry-focused IT training with expert-led courses,
          hands-on projects, and globally recognized certifications to boost
          your career. Our programs are designed to equip you with in-demand
          skills and real-world experience."
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {workingProcess.map((work) => (
          <div
            key={work.id}
            className="border-x border-b border-secondary p-6 relative flex flex-col gap-4"
          >
            <div className="absolute -top-4 font-bold text-2xl">{work.id}</div>
            <div className="border w-[5%] absolute top-0 left-0"></div>
            <div className="border w-[80%] md:w-[84%] lg:w-[80%] absolute top-0 right-0"></div>

            <div className="font-semibold">{work.title}</div>
            <div className="text-sm">{work.description}</div>
          </div>
        ))}
        {/* 
        <div className="border-x  border-b border-secondary p-6 relative flex flex-col gap-4">
          <div className="absolute  -top-4  font-bold text-2xl">01</div>
          <div className="border w-[5%] absolute top-0 left-0"></div>
          <div className="border w-[80%] absolute top-0 right-0"></div>

          <div className="font-semibold">Daily Standups</div>
          <div className="text-sm">Short meetings to track progress.</div>
        </div> */}
      </div>
    </div>
  );
};

export default WokingProcessSection;
