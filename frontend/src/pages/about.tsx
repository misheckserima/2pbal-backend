import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Lightbulb, Award, Code, Palette, Database } from 'lucide-react';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 min-h-screen bg-gray-light">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-teal-primary to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-sky-300">
            About 2PBAL
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-sky-300">
            Empowering small businesses with the tools and support they need to succeed in today's fast-moving digital world.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-dark mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-medium leading-relaxed">
                <p>
                  2PBAL was born from a shared vision — to empower small businesses with the tools and support they need to succeed in today's fast-moving digital world.
                </p>
                <p>
                  It all began when Elton, one of our co-founders, approached Misheck Serima with a question: 
                  <span className="font-semibold text-teal-primary"> "How would you bridge the gap for small businesses struggling to grow and stand out?"</span>
                </p>
                <p>
                  That single conversation uncovered a deep need in the market — a gap where startups and small businesses lacked the guidance, digital presence, and technical solutions required to scale effectively.
                </p>
                <p>
                  With a passion for innovation and impact, Misheck took the lead as CEO and reached out to his former schoolmate, Makanaka Mukorombindo, a skilled developer and business strategist with strong expertise in business development and systems design.
                </p>
                <p>
                  Recognizing his talent and leadership in technology, Makanaka was officially appointed as the Chief Technology Officer (CTO) of 2PBAL.
                </p>
                <p className="font-semibold">
                  Together, the three visionaries — Misheck, Elton, and Makanaka — laid the foundation of what would become a powerful platform for business transformation.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-teal-primary rounded-full flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-medium">
                    Bridge the digital gap for small businesses by providing comprehensive tools, guidance, and technical solutions for effective scaling.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Development Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-dark mb-4">Development Team</h2>
            <p className="text-xl text-gray-medium max-w-2xl mx-auto">
              The talented individuals who brought the 2PBAL platform to life through innovative technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend Development - Blessing Mashiri */}
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4">
                  <Palette className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl">Blessing Mashiri</CardTitle>
                <CardDescription className="text-purple-600 font-semibold">Frontend Developer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-medium mb-3">
                  Innovative student at Bindura University specializing in user interface design and frontend development.
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary" className="mr-2">UI/UX Design</Badge>
                  <Badge variant="secondary" className="mr-2">React</Badge>
                  <Badge variant="secondary">Frontend</Badge>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  Provided frontend development and user experience design
                </p>
              </CardContent>
            </Card>

            {/* Backend Development - Misheck Serima */}
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-teal-primary to-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Database className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl">Misheck Serima</CardTitle>
                <CardDescription className="text-teal-primary font-semibold">Backend Developer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-medium mb-3">
                  Co-Founder & CEO with expertise in backend architecture and system design.
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary" className="mr-2">Backend</Badge>
                  <Badge variant="secondary" className="mr-2">Architecture</Badge>
                  <Badge variant="secondary">System Design</Badge>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  Led backend development and system architecture
                </p>
              </CardContent>
            </Card>

            {/* Backend Development - Makanaka Mukorombindo */}
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Code className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl">Makanaka Mukorombindo</CardTitle>
                <CardDescription className="text-blue-600 font-semibold">Backend Developer & CTO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-medium mb-3">
                  Chief Technology Officer specializing in backend systems and technical strategy.
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary" className="mr-2">Backend</Badge>
                  <Badge variant="secondary" className="mr-2">Technology</Badge>
                  <Badge variant="secondary">Strategy</Badge>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  Contributed to backend development and technical leadership
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founding Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-dark mb-4">Our Founding Team</h2>
            <p className="text-xl text-gray-medium max-w-2xl mx-auto">
              Meet the visionaries who transformed a simple question into a powerful business solution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Misheck Serima */}
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-teal-primary to-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl">Misheck Serima</CardTitle>
                <CardDescription className="text-teal-primary font-semibold">Co-Founder & CEO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-medium">
                  Visionary leader with a drive to solve real-world business problems through technology.
                </p>
                <Badge variant="secondary" className="mt-3">Leadership</Badge>
              </CardContent>
            </Card>

            {/* Elton Huche */}
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-lime-primary to-teal-600 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl">Elton Huche</CardTitle>
                <CardDescription className="text-lime-primary font-semibold">Co-Founder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-medium">
                  The originator of the idea to help small businesses bridge their digital gaps.
                </p>
                <Badge variant="secondary" className="mt-3">Innovation</Badge>
              </CardContent>
            </Card>

            {/* Makanaka Mukorombindo */}
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl">Makanaka Mukorombindo</CardTitle>
                <CardDescription className="text-blue-600 font-semibold">Chief Technology Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-medium">
                  Technical strategist and co-developer of the company's foundational systems and website.
                </p>
                <Badge variant="secondary" className="mt-3">Technology</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-dark mb-4">Our Values</h2>
            <p className="text-xl text-gray-medium">
              The principles that drive everything we do at 2PBAL.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <div className="mx-auto w-12 h-12 bg-teal-primary rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-dark mb-2">Precision</h3>
              <p className="text-sm text-gray-medium">
                Precise programming and solutions tailored to your exact business needs.
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="mx-auto w-12 h-12 bg-lime-primary rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-dark mb-2">Partnership</h3>
              <p className="text-sm text-gray-medium">
                Building lasting relationships with our clients for mutual growth.
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="mx-auto w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-dark mb-2">Innovation</h3>
              <p className="text-sm text-gray-medium">
                Leveraging cutting-edge technology to drive business advancement.
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="mx-auto w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-dark mb-2">Excellence</h3>
              <p className="text-sm text-gray-medium">
                Delivering exceptional results that exceed expectations.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
