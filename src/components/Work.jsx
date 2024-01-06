
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2020,
    title: "project1",
    duration: "3mounth",
    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est asperiores illo doloremque cupiditate quas alias.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est asperiores illo doloremque cupiditate quas alias.',
  },
  {
    year: 2020,
    title: "project2",
    duration: "1mounth",
    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est asperiores illo doloremque cupiditate quas alias.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est asperiores illo doloremque cupiditate quas alias.',
  },
  {
    year: 2020,
    title: "project3",
    duration: "5mounth",
    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est asperiores illo doloremque cupiditate quas alias.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est asperiores illo doloremque cupiditate quas alias.',
  },
  {
    year: 2020,
    title: "project4",
    duration: "2mounth",
    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est asperiores illo doloremque cupiditate quas alias.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est asperiores illo doloremque cupiditate quas alias.',
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[10400px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-centertext-white">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
