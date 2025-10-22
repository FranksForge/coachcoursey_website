const ResultsSection = () => {
  const stats = [
    { number: "500+", label: "Clients Transformed" },
    { number: "12+", label: "Years Experience" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "2000+", label: "Training Sessions" },
  ];

  const results = [
    {
      title: "Lost 25kg in 6 Months",
      client: "Mark, 34",
      result: "From 105kg to 80kg while building muscle and confidence",
    },
    {
      title: "Broke Through Plateau",
      client: "Sarah, 28",
      result: "Added 40kg to her deadlift and achieved her first pull-up",
    },
    {
      title: "Complete Body Recomp",
      client: "James, 42",
      result: "Dropped 15% body fat while gaining 8kg of lean muscle",
    },
  ];

  return (
    <section id="results" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Real People. Real Results.</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These aren't just numbers—they're life-changing transformations.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 text-center"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Client Results */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 border-l-4 border-primary hover:transform hover:scale-105 transition-all duration-300"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h3 className="text-xl mb-2">{result.title}</h3>
              <p className="text-primary font-semibold mb-3">{result.client}</p>
              <p className="text-muted-foreground">{result.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
