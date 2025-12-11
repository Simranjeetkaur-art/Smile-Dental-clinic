import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About Smile Dental Clinic
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Serving the Chandigarh community since 2010 with a commitment to
            excellence, compassion, and advanced dental care.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Our Story
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              A Legacy of Smiles
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Established in 2010, Smile Dental Clinic started with a simple
              mission: to provide world-class dental care that is also
              accessible and painless. Over the years, we have grown into one of
              Chandigarh's most trusted dental chains.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We believe in a patient-centric approach. We verify your
              insurance, explain your treatment options clearly, and ensure you
              are comfortable every step of the way. Our state-of-the-art
              facility is equipped with the latest technology, including digital
              X-rays and intraoral cameras.
            </p>
          </div>
          <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop"
              alt="Modern Hospital Interior"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">
            Meet Our Specialists
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Our team of experienced specialists is dedicated to providing you
            with the best possible care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Dr. Rajesh Verma",
              role: "Chief Dentist, MDS",
              exp: "15+ Years Experience",
              image:
                "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop",
            },
            {
              name: "Dr. Anjali Sharma",
              role: "Orthodontist, MDS",
              exp: "10+ Years Experience",
              image:
                "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop",
            },
            {
              name: "Dr. Vikram Singh",
              role: "Oral Surgeon, MDS",
              exp: "12+ Years Experience",
              image:
                "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1000&auto=format&fit=crop",
            },
          ].map((doc, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-40 h-40 rounded-full mb-6 overflow-hidden relative border-4 border-white shadow-md group-hover:border-primary/20 transition-colors">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {doc.name}
              </h3>
              <p className="text-primary font-medium mb-3">{doc.role}</p>
              <p className="text-sm text-slate-500 font-medium bg-slate-50 px-3 py-1 rounded-full">
                {doc.exp}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
