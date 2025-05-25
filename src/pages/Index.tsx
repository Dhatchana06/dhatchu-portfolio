
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Linkedin, GraduationCap, User, BookOpen, FileText, Code, Globe, Award, MapPin, Download, ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-green-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-black">Dhatchana S J</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-black hover:text-green-600 transition-colors">About</a>
              <a href="#education" className="text-black hover:text-green-600 transition-colors">Education</a>
              <a href="#projects" className="text-black hover:text-green-600 transition-colors">Projects</a>
              <a href="#certifications" className="text-black hover:text-green-600 transition-colors">Certifications</a>
              <a href="#contact" className="text-black hover:text-green-600 transition-colors">Contact</a>
            </nav>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Download size={16} className="mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <p className="text-green-600 font-semibold text-lg mb-4">Hello, I'm</p>
                <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                  Dhatchana S J
                </h1>
                <p className="text-2xl text-green-700 font-semibold mb-6">
                  💡 Innovative Aspiring Thinker
                </p>
                <p className="text-lg text-black/80 leading-relaxed mb-8 max-w-xl">
                  To have a growth oriented and challenging career, where I can contribute my knowledge 
                  and skills to the organization and enhance my experience through continuous learning and teamwork.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white/60 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600">8.204</div>
                  <div className="text-sm text-black">CGPA</div>
                </div>
                <div className="text-center p-4 bg-white/60 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600">5+</div>
                  <div className="text-sm text-black">Certifications</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  Get In Touch
                </Button>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3">
                  View Projects
                </Button>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-green-200 to-green-400 p-2">
                  <img 
                    src="/lovable-uploads/e53b5026-ad3f-4094-bb08-0fb7aea086d6.png" 
                    alt="Dhatchana S J" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-green-200">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-white/80 border-y border-green-200 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-black">
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-green-600" />
              <span className="font-medium">9080335343</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-green-600" />
              <span className="font-medium">dhatchana.sj.ece.2022@snsce.ac.in</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={18} className="text-green-600" />
              <a href="https://www.linkedin.com/in/dhatchanasampathkumar-sns" 
                 className="text-green-700 hover:text-green-900 transition-colors font-medium">
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-green-600" />
              <span className="text-sm font-medium">Coimbatore, Tamil Nadu</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        {/* Education Section */}
        <section id="education">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">🎓 Education</h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              My academic journey and achievements in Electronics and Communication Engineering
            </p>
            <Separator className="w-24 mx-auto bg-green-600 h-1 mt-6" />
          </div>
          
          <div className="space-y-8">
            <Card className="hover:shadow-xl transition-all duration-300 bg-white border-green-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-bl-full"></div>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl text-black">
                      BE - Electronics and Communication Engineering
                    </CardTitle>
                    <CardDescription className="text-lg text-black/80">
                      SNS College of Engineering
                    </CardDescription>
                    <div className="flex items-center gap-4">
                      <Badge className="bg-green-100 text-green-800 text-sm px-3 py-1">
                        CGPA: 8.204
                      </Badge>
                      <Badge variant="outline" className="text-green-700 border-green-600">
                        Nov '22 — Present
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300 bg-white border-green-200">
                <CardHeader>
                  <CardTitle className="text-xl text-black">HSE</CardTitle>
                  <CardDescription className="text-black/80">
                    Metro Matriculation Higher Secondary School
                  </CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge className="bg-green-100 text-green-800">77%</Badge>
                    <span className="text-sm text-black/60">Jun '21 — May '22</span>
                  </div>
                </CardHeader>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow duration-300 bg-white border-green-200">
                <CardHeader>
                  <CardTitle className="text-xl text-black">SSLC</CardTitle>
                  <CardDescription className="text-black/80">
                    Metro Matriculation Higher Secondary School
                  </CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge className="bg-green-100 text-green-800">72.6%</Badge>
                    <span className="text-sm text-black/60">Jun '19 — Mar '20</span>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">🚀 Featured Projects</h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Innovative solutions in healthcare technology and IoT applications
            </p>
            <Separator className="w-24 mx-auto bg-green-600 h-1 mt-6" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 bg-white border-green-200 group">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">💉</span>
                </div>
                <div>
                  <CardTitle className="text-xl text-black mb-2">Smart Syringe Infusion Pump</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-black/80">
                    Innovative medical device project focusing on precision and automation in healthcare delivery systems.
                  </CardDescription>
                </div>
                <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                  <ExternalLink size={16} className="mr-2" />
                  View Details
                </Button>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 bg-white border-green-200 group">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">❤️</span>
                </div>
                <div>
                  <CardTitle className="text-xl text-black mb-2">Heart Rate Monitoring System</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-black/80">
                    Real-time health monitoring system with automated data collection and analysis capabilities.
                  </CardDescription>
                </div>
                <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                  <ExternalLink size={16} className="mr-2" />
                  View Details
                </Button>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 bg-white border-green-200 group">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">🩺</span>
                </div>
                <div>
                  <CardTitle className="text-xl text-black mb-2">Diabetics Prediction System</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-black/80">
                    AI-powered prediction system that won 1st prize at SRI Ramakrishna Institute of Technology.
                  </CardDescription>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800 w-fit">🏆 1st Prize Winner</Badge>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">📜 Certifications</h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Professional certifications and continuous learning achievements
            </p>
            <Separator className="w-24 mx-auto bg-green-600 h-1 mt-6" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white border-green-200">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🤖</span>
                  </div>
                  <Badge variant="secondary" className="bg-green-200 text-green-800">Oct '24</Badge>
                </div>
                <CardTitle className="text-green-700 text-lg">AI Associate, AI Specialist</CardTitle>
                <CardDescription className="text-black">Salesforce</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white border-green-200">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🔒</span>
                  </div>
                  <Badge variant="secondary" className="bg-green-200 text-green-800">Feb '25</Badge>
                </div>
                <CardTitle className="text-green-700 text-lg">CNSP, CAP</CardTitle>
                <CardDescription className="text-black">SecOps Groups</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white border-green-200">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">💾</span>
                  </div>
                  <Badge variant="secondary" className="bg-green-200 text-green-800">2023</Badge>
                </div>
                <CardTitle className="text-green-700 text-lg">SQL, HTML</CardTitle>
                <CardDescription className="text-black">Prepinsta</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white border-green-200">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">💻</span>
                  </div>
                  <Badge variant="secondary" className="bg-green-200 text-green-800">May '25</Badge>
                </div>
                <CardTitle className="text-green-700 text-lg">Visual Studio Online</CardTitle>
                <CardDescription className="text-black">Great Learning</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white border-green-200 md:col-span-2">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🌐</span>
                  </div>
                  <Badge variant="secondary" className="bg-green-200 text-green-800">Completed</Badge>
                </div>
                <CardTitle className="text-green-700 text-lg">Introduction to Internet of Things</CardTitle>
                <CardDescription className="text-black">NPTEL</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">🛠️ Skills & Expertise</h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Technical skills and languages I work with
            </p>
            <Separator className="w-24 mx-auto bg-green-600 h-1 mt-6" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white border-green-200">
              <CardHeader>
                <CardTitle className="text-xl text-black flex items-center gap-2">
                  <Code className="text-green-600" />
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="text-green-700 border-green-600 bg-green-50 text-sm px-4 py-2">HTML</Badge>
                  <Badge variant="outline" className="text-green-700 border-green-600 bg-green-50 text-sm px-4 py-2">SQL</Badge>
                  <Badge variant="outline" className="text-green-700 border-green-600 bg-green-50 text-sm px-4 py-2">JAVA</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white border-green-200">
              <CardHeader>
                <CardTitle className="text-xl text-black flex items-center gap-2">
                  <Globe className="text-green-600" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="text-green-800 border-green-700 bg-green-100 text-sm px-4 py-2">English</Badge>
                  <Badge variant="outline" className="text-green-800 border-green-700 bg-green-100 text-sm px-4 py-2">Tamil</Badge>
                  <Badge variant="outline" className="text-green-800 border-green-700 bg-green-100 text-sm px-4 py-2">Japanese</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center">
          <Card className="bg-gradient-to-r from-green-100 to-green-200 border-green-300 shadow-xl">
            <CardHeader className="pb-8">
              <CardTitle className="text-3xl text-black mb-4">Let's Work Together</CardTitle>
              <CardDescription className="text-lg text-black/80 max-w-2xl mx-auto">
                I'm always interested in hearing about new opportunities and projects. 
                Let's connect and discuss how we can work together.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  <Mail className="mr-2" size={18} />
                  Send Email
                </Button>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3">
                  <Linkedin className="mr-2" size={18} />
                  LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-green-200 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-black/60">
            © 2024 Dhatchana S J. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
