import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Megaphone, Users, BarChart3, Bot } from 'lucide-react';

const AgencyHome = () => {
  return (
    <>
      <Helmet>
        <title>DigitalFlow Agency - Elevate Your Digital Presence</title>
        <meta name="description" content="We craft data-driven social media strategies that build communities, drive engagement, and deliver measurable results." />
        <meta property="og:title" content="DigitalFlow Agency - Elevate Your Digital Presence" />
        <meta property="og:description" content="We craft data-driven social media strategies that build communities, drive engagement, and deliver measurable results." />
      </Helmet>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-slate-900">
              <span className="text-blue-600">Digital</span>Flow
            </div>
            <Button variant="outline">Get in Touch</Button>
          </nav>
        </header>

        {/* Hero Section */}
        <main>
          <section className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-6 text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-4">
                Elevate Your Brand's <span className="text-blue-600">Digital Presence</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                We craft data-driven social media strategies that build communities, drive engagement, and deliver measurable results.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Discover Our Services
              </Button>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Core Services</h2>
                <p className="text-slate-600 mt-2">Solutions tailored for growth.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard
                  icon={<Megaphone className="w-10 h-10 text-blue-500" />}
                  title="Content Strategy"
                  description="Engaging content that tells your brand's story and captivates your audience."
                />
                <ServiceCard
                  icon={<Users className="w-10 h-10 text-blue-500" />}
                  title="Community Management"
                  description="Building and nurturing a loyal community around your brand."
                />
                <ServiceCard
                  icon={<BarChart3 className="w-10 h-10 text-blue-500" />}
                  title="Paid Advertising"
                  description="Targeted ad campaigns on social platforms to maximize your ROI."
                />
                <ServiceCard
                  icon={<Bot className="w-10 h-10 text-blue-500" />}
                  title="Analytics & Reporting"
                  description="In-depth insights to track performance and optimize your strategy."
                />
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-8">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; {new Date().getFullYear()} DigitalFlow Agency. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="bg-white text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
    <CardHeader>
      <div className="mx-auto bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <CardTitle className="text-xl font-semibold text-slate-800">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-slate-600">{description}</p>
    </CardContent>
  </Card>
);

export default AgencyHome;