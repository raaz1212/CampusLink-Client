const ResearchPapersSection = () => {
  // Sample research paper data (replace this with your actual data)
  const researchPapersData = [
    {
      id: 1,
      title: "Advancements in Artificial Intelligence",
      link: "#",
    },
    {
      id: 2,
      title: "The Impact of Climate Change on Biodiversity",
      link: "#",
    },
    {
      id: 3,
      title: "Blockchain Technology and Its Applications",
      link: "#",
    },
    // Add more research papers as needed
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Recommended Research Papers
        </h2>
        {researchPapersData.length === 0 ? (
          <p className="text-center text-gray-600">No research papers found.</p>
        ) : (
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {researchPapersData.map((paper) => (
              <li key={paper.id} className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-semibold mb-2">{paper.title}</h3>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Read Paper
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ResearchPapersSection;
