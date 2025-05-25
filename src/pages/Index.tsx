
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Linkedin, GraduationCap, User, BookOpen, FileText, Code, Globe, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            {/* Profile Photo */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/e53b5026-ad3f-4094-bb08-0fb7aea086d6.png" 
                  alt="Dhatchana S J" 
                  className="w-48 h-48 rounded-full object-cover border-4 border-green-300 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-500/20 to-transparent"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Code className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight">
              Dhatchana S J
            </h1>
            <div className="relative inline-block mb-6">
              <p className="text-xl md:text-2xl text-green-700 font-semibold bg-green-200/50 px-6 py-2 rounded-full border border-green-300">
                💡 Innovative Aspiring Thinker
              </p>
            </div>
            <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
              To have a growth oriented and challenging career, where I can contribute my knowledge 
              and skills to the organization and enhance my experience through continuous learning and teamwork.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-black">
              <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-lg border border-green-200 hover:bg-white/80 transition-colors">
                <Phone size={18} className="text-green-600" />
                <span className="font-medium">9080335343</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-lg border border-green-200 hover:bg-white/80 transition-colors">
                <Mail size={18} className="text-green-600" />
                <span className="font-medium">dhatchana.sj.ece.2022@snsce.ac.in</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-lg border border-green-200 hover:bg-white/80 transition-colors">
                <Linkedin size={18} className="text-green-600" />
                <a href="https://www.linkedin.com/in/dhatchanasampathkumar-sns" 
                   className="text-green-700 hover:text-green-900 transition-colors font-medium">
                  LinkedIn Profile
                </a>
              </div>
            </div>
            
            <p className="text-sm text-black/70 mb-8 bg-white/40 inline-block px-4 py-2 rounded-lg border border-green-200">
              📍 No. 20, Bajanai kovil Street, Karamadai Road, Mettupalayam, Coimbatore District, Tamil Nadu, 641301, India.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-20">
        {/* Education Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4 flex items-center justify-center gap-3">
              <GraduationCap className="text-green-600" />
              🎓 Education
            </h2>
            <Separator className="w-24 mx-auto bg-green-600 h-1" />
          </div>
          
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/70 border-green-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-black">
                      BE - Electronics and Communication Engineering
                    </CardTitle>
                    <CardDescription className="text-lg text-black/80">
                      SNS College of Engineering (CGPA: 8.204)
                    </CardDescription>
                  </div>
                  <div className="text-right text-sm text-black/70 bg-green-100 px-3 py-1 rounded-lg">
                    <div className="font-medium">Nov '22 — Present</div>
                    <div>Coimbatore, India</div>
                  </div>
                </div>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/70 border-green-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-black">HSE</CardTitle>
                    <CardDescription className="text-lg text-black/80">
                      Metro Matriculation Higher Secondary School (77%)
                    </CardDescription>
                  </div>
                  <div className="text-right text-sm text-black/70 bg-green-100 px-3 py-1 rounded-lg">
                    <div className="font-medium">Jun '21 — May '22</div>
                    <div>Coimbatore, India</div>
                  </div>
                </div>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/70 border-green-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-black">SSLC</CardTitle>
                    <CardDescription className="text-lg text-black/80">
                      Metro Matriculation Higher Secondary School (72.6%)
                    </CardDescription>
                  </div>
                  <div className="text-right text-sm text-black/70 bg-green-100 px-3 py-1 rounded-lg">
                    <div className="font-medium">Jun '19 — Mar '20</div>
                    <div>Coimbatore, India</div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4 flex items-center justify-center gap-3">
              <FileText className="text-green-600" />
              📜 Certifications
            </h2>
            <Separator className="w-24 mx-auto bg-green-600 h-1" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/70 border-green-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-green-700">🤖 AI Associate, AI Specialist</CardTitle>
                    <CardDescription className="text-black">Salesforce</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-green-200 text-green-800">Oct '24</Badge>
                </div>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/70 border-green-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-green-700">🔒 CNSP, CAP</CardTitle>
                    <CardDescription className="text-black">SecOps Groups</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-green-200 text-green-800">Feb '25</Badge>
                </div>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/70 border-green-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-green-700">💾 SQL, HTML</CardTitle>
                    <CardDescription className="text-black">Prepinsta</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-green-200 text-green-800">Feb & Mar '23, Jan '23</Badge>
                </div>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/70 border-green-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-green-700">💻 Visual Studio Online</CardTitle>
                    <CardDescription className="text-black">Great Learning</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-green-200 text-green-800">May '25</Badge>
                </div>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/70 border-green-200 md:col-span-2">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-green-700">🌐 Introduction to Internet of Things</CardTitle>
                    <CardDescription className="text-black">NPTEL</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-green-200 text-green-800">Course Completed</Badge>
                </div>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4 flex items-center justify-center gap-3">
              <BookOpen className="text-green-600" />
              🚀 Projects
            </h2>
            <Separator className="w-24 mx-auto bg-green-600 h-1" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/70 border-green-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-green-200 rounded-bl-full"></div>
              <CardHeader>
                <CardTitle className="text-xl text-black">💉 Smart Syringe Infusion Pump</CardTitle>
                <CardDescription className="text-base leading-relaxed text-black/80">
                  Innovative medical device project focusing on precision and automation in healthcare delivery systems.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/70 border-green-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-green-200 rounded-bl-full"></div>
              <CardHeader>
                <CardTitle className="text-xl text-black">❤️ Automatic Heart Rate Monitoring System</CardTitle>
                <CardDescription className="text-base leading-relaxed text-black/80">
                  Real-time health monitoring system with automated data collection and analysis capabilities.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4 flex items-center justify-center gap-3">
              <Award className="text-green-600" />
              🏆 Achievements
            </h2>
            <Separator className="w-24 mx-auto bg-green-600 h-1" />
          </div>
          
          <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/70 border-green-200 relative">
            <div className="absolute top-4 right-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-sm">🥇</span>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-green-700">🩺 Diabetics Prediction System</CardTitle>
              <CardDescription className="text-base text-black">
                <strong>Project Presentation - 1st Prize</strong><br />
                SRI Ramakrishna Institute of Technology
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

        {/* Conferences Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4 flex items-center justify-center gap-3">
              <Globe className="text-green-600" />
              🌐 Conferences
            </h2>
            <Separator className="w-24 mx-auto bg-green-600 h-1" />
          </div>
          
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/70 border-green-200">
              <CardHeader>
                <CardTitle className="text-lg text-black">🔧 IOT BASED SHOCK ABSORBER</CardTitle>
                <CardDescription className="text-black/80">
                  International Conference ELECTROX '23, Karpagam Institute of Technology
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/70 border-green-200">
              <CardHeader>
                <CardTitle className="text-lg text-black">💓 AUTOMATIC HEART RATE MONITORING SYSTEM</CardTitle>
                <CardDescription className="text-black/80">
                  International Conference ICCSICE '24, Karpagam Academy of Higher Education
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/70 border-green-200">
              <CardHeader>
                <CardTitle className="text-lg text-black">💉 SMART SYRINGE INFUSION PUMP</CardTitle>
                <CardDescription className="text-black/80">
                  International Conference, Suguna College of Engineering
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4 flex items-center justify-center gap-3">
              <User className="text-green-600" />
              🛠️ Skills
            </h2>
            <Separator className="w-24 mx-auto bg-green-600 h-1" />
          </div>
          
          <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/70 border-green-200">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">💻 Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-green-700 border-green-600 bg-green-50">HTML</Badge>
                    <Badge variant="outline" className="text-green-700 border-green-600 bg-green-50">SQL</Badge>
                    <Badge variant="outline" className="text-green-700 border-green-600 bg-green-50">JAVA</Badge>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">🗣️ Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-green-800 border-green-700 bg-green-100">English</Badge>
                    <Badge variant="outline" className="text-green-800 border-green-700 bg-green-100">Tamil</Badge>
                    <Badge variant="outline" className="text-green-800 border-green-700 bg-green-100">Japanese</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Declaration */}
        <section className="text-center">
          <Card className="bg-green-100 border-green-300 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-black">📝 Declaration</CardTitle>
              <CardDescription className="text-base italic text-black/80 font-medium">
                "I hereby declare that all the information contained in my resume is in accordance with truth to my knowledge."
              </CardDescription>
            </CardHeader>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;
