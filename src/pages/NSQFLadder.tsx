import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { nsqfLevelDescriptions, type NSQFLevel } from '@/data/mockData';
import { Award, CheckCircle, TrendingUp } from 'lucide-react';

const NSQFLadder = () => {
  const levels: NSQFLevel[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  
  const getLevelColor = (level: NSQFLevel) => {
    if (level >= 8) return 'from-purple-600 to-purple-700';
    if (level >= 6) return 'from-primary to-blue-600';
    if (level >= 4) return 'from-success to-green-600';
    return 'from-warning to-orange-600';
  };

  const getLevelCategory = (level: NSQFLevel) => {
    if (level >= 8) return 'Advanced Academic';
    if (level >= 6) return 'Professional & Diploma';
    if (level >= 4) return 'Technical Skills';
    return 'Foundational Skills';
  };

  const sampleCredentials: Record<string, string[]> = {
    10: ['PhD Programs', 'Doctoral Research'],
    9: ['Master Degree Programs', 'Advanced Specializations'],
    8: ['Postgraduate Diploma', 'Advanced Professional Courses'],
    7: ['Bachelor Degree', 'Graduate Programs'],
    6: ['Advanced Diploma', 'AI Fundamentals', 'Cloud Computing'],
    5: ['Diploma Programs', 'Data Analytics', 'Advanced Technical'],
    4: ['Technical Certificate', 'Python Basics', 'Digital Marketing'],
    3: ['Advanced Skills Certificate', 'Graphic Design'],
    2: ['Practical Skills Certificate'],
    1: ['Basic Skills Certificate']
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gov-gradient text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Award className="h-4 w-4" />
                <span className="text-sm font-medium">National Skills Qualifications Framework</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                NSQF Skill Ladder
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Visualize your learning journey from foundational skills to doctoral degrees. 
                Each level represents increasing competency and specialization.
              </p>
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="animate-scale-in">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">10 Levels</h3>
                  <p className="text-sm text-muted-foreground">
                    From basic skills to doctoral research
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-scale-in" style={{ animationDelay: '100ms' }}>
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="h-6 w-6 text-success" />
                  </div>
                  <h3 className="font-semibold mb-2">Progressive Path</h3>
                  <p className="text-sm text-muted-foreground">
                    Stack credentials to climb the ladder
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-scale-in" style={{ animationDelay: '200ms' }}>
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-warning/10 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-warning" />
                  </div>
                  <h3 className="font-semibold mb-2">Nationally Recognized</h3>
                  <p className="text-sm text-muted-foreground">
                    Accepted across industries in India
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* NSQF Ladder */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-2">The Complete Ladder</h2>
                <p className="text-muted-foreground">
                  Click on any level to see sample credentials
                </p>
              </div>

              <div className="relative">
                {/* Central line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 via-primary via-success to-warning -translate-x-1/2 hidden md:block" />

                {/* Level items */}
                <div className="space-y-6">
                  {levels.map((level, index) => (
                    <div
                      key={level}
                      className={`relative animate-fade-in ${
                        index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Card className="hover-lift cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            {index % 2 === 0 && (
                              <div className={`flex-shrink-0 h-16 w-16 rounded-xl bg-gradient-to-br ${getLevelColor(level)} text-white flex items-center justify-center font-bold text-xl shadow-lg`}>
                                {level}
                              </div>
                            )}
                            
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-bold">Level {level}</h3>
                                <Badge variant="outline">
                                  {getLevelCategory(level)}
                                </Badge>
                              </div>
                              
                              <p className="text-lg font-semibold text-muted-foreground mb-3">
                                {nsqfLevelDescriptions[level]}
                              </p>

                              <div className="flex flex-wrap gap-2">
                                {sampleCredentials[level.toString()]?.map((cred, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    {cred}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {index % 2 !== 0 && (
                              <div className={`flex-shrink-0 h-16 w-16 rounded-xl bg-gradient-to-br ${getLevelColor(level)} text-white flex items-center justify-center font-bold text-xl shadow-lg`}>
                                {level}
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Connector dot for desktop */}
                      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className={`h-4 w-4 rounded-full bg-gradient-to-br ${getLevelColor(level)} border-4 border-background shadow-lg`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <Card className="mt-12 bg-accent/50 border-accent animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Understanding the Framework</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-700" />
                        Levels 8-10: Advanced Academic
                      </h4>
                      <p className="text-muted-foreground">
                        Postgraduate education, research, and specialized expertise
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-gradient-to-r from-primary to-blue-600" />
                        Levels 6-7: Professional & Diploma
                      </h4>
                      <p className="text-muted-foreground">
                        Advanced diplomas, bachelor degrees, and professional qualifications
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-gradient-to-r from-success to-green-600" />
                        Levels 4-5: Technical Skills
                      </h4>
                      <p className="text-muted-foreground">
                        Technical certificates, diplomas, and specialized job skills
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-gradient-to-r from-warning to-orange-600" />
                        Levels 1-3: Foundational Skills
                      </h4>
                      <p className="text-muted-foreground">
                        Basic and practical skills for entry-level employment
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NSQFLadder;
