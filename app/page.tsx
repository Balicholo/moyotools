"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ChevronDown, 
  BarChart3, 
  DollarSign, 
  Users, 
  Mail, 
  Phone, 
  MapPin,
  Shield,
  Zap,
  Globe,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 flex-1 flex flex-col items-center justify-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white">MoyoTools</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
              Streamline your business operations with our integrated suite of tools
            </p>
            <Button size="lg" variant="secondary" className="text-primary hover:text-primary/90">
              Get Started
            </Button>
          </div>
        </div>
        <div className="relative z-10 mb-8">
          <ChevronDown className="w-8 h-8 text-white animate-bounce" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background" id="features">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Our Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-semibold mb-4">CRM Suite</h3>
              <p className="text-muted-foreground">
                Manage customer relationships effectively with our comprehensive CRM solution.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <BarChart3 className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-semibold mb-4">Sales</h3>
              <p className="text-muted-foreground">
                Track and optimize your sales pipeline with powerful analytics and reporting.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <DollarSign className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-semibold mb-4">Accounting</h3>
              <p className="text-muted-foreground">
                Simplify your financial management with our integrated accounting tools.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Screenshots Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Powerful Tools for Your Business</h2>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
                  alt="CRM Dashboard"
                  className="w-full h-48 sm:h-64 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-2">CRM Dashboard</h3>
              <p className="text-muted-foreground">360° view of your customer relationships</p>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
                  alt="Sales Analytics"
                  className="w-full h-48 sm:h-64 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-2">Sales Analytics</h3>
              <p className="text-muted-foreground">Real-time insights and forecasting</p>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070"
                  alt="Financial Management"
                  className="w-full h-48 sm:h-64 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-2">Financial Management</h3>
              <p className="text-muted-foreground">Streamlined accounting workflows</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="text-center px-4 sm:px-8">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
                    alt="Sarah Johnson"
                    className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                  />
                  <p className="text-lg sm:text-xl italic mb-6">"MoyoTools transformed how we manage our business. The integrated suite saves us countless hours every week."</p>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-muted-foreground">CEO, TechStart Inc</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="text-center px-4 sm:px-8">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200"
                    alt="David Chen"
                    className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                  />
                  <p className="text-lg sm:text-xl italic mb-6">"The best all-in-one solution we've found. Customer support is exceptional, and the features keep getting better."</p>
                  <h4 className="font-semibold">David Chen</h4>
                  <p className="text-muted-foreground">Operations Director, GrowthMax</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="text-center px-4 sm:px-8">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200"
                    alt="Emma Rodriguez"
                    className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                  />
                  <p className="text-lg sm:text-xl italic mb-6">"MoyoTools helped us scale our operations smoothly. The integrated accounting features are a game-changer."</p>
                  <h4 className="font-semibold">Emma Rodriguez</h4>
                  <p className="text-muted-foreground">CFO, Scale Solutions</p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 sm:p-8">
              <h3 className="text-2xl font-semibold mb-2">Basic</h3>
              <p className="text-muted-foreground mb-6">Perfect for small businesses</p>
              <div className="text-4xl font-bold mb-6">$29<span className="text-lg text-muted-foreground">/mo</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" /> CRM Basic Features</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" /> Sales Dashboard</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" /> Basic Reporting</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" /> 2 Team Members</li>
              </ul>
              <Button className="w-full">Start Free Trial</Button>
            </Card>
            <Card className="p-6 sm:p-8 border-primary">
              <h3 className="text-2xl font-semibold mb-2">Pro</h3>
              <p className="text-muted-foreground mb-6">For growing teams</p>
              <div className="text-4xl font-bold mb-6">$79<span className="text-lg text-muted-foreground">/mo</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" /> All Basic Features</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" /> Advanced Analytics</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" /> Custom Reports</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" /> 10 Team Members</li>
              </ul>
              <Button className="w-full">Start Free Trial</Button>
            </Card>
            <Card className="p-6 sm:p-8">
              <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
              <p className="text-muted-foreground mb-6">For large organizations</p>
              <div className="text-4xl font-bold mb-6">Custom</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" /> All Pro Features</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" /> Custom Integration</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" /> Dedicated Support</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" /> Unlimited Team Members</li>
              </ul>
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Why Choose MoyoTools</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-muted-foreground">Intuitive interface designed for efficiency</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Secure</h3>
              <p className="text-muted-foreground">Enterprise-grade security protocols</p>
            </Card>
            <Card className="p-6 text-center">
              <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Scalable</h3>
              <p className="text-muted-foreground">Grows with your business needs</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Collaborative</h3>
              <p className="text-muted-foreground">Built for team productivity</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Trusted Integrations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-8 sm:h-12 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Mailchimp_Logo-Horizontal_Black.svg/2560px-Mailchimp_Logo-Horizontal_Black.svg.png" alt="Mailchimp" className="h-6 sm:h-8 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Quickbooks_new_logo.svg" alt="QuickBooks" className="h-6 sm:h-8 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg" alt="PayPal" className="h-6 sm:h-8 w-auto" />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-8">Get the latest updates and exclusive tips directly in your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-foreground w-full"
              />
              <Button variant="secondary" className="w-full sm:w-auto">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Join thousands of businesses already growing with MoyoTools
            </p>
            <Button size="lg" className="px-8">
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/50" id="about">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">About MoyoTools</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              MoyoTools is your all-in-one business management solution, designed to help organizations streamline their operations and drive growth. Our integrated suite of tools combines CRM, sales, and accounting functionalities to provide a seamless experience for businesses of all sizes.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground">
              With years of experience in business software development, we understand the challenges modern businesses face and provide solutions that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background" id="contact">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground break-words">contact@moyotools.com</p>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-muted-foreground">123 Business Ave, Suite 100<br />New York, NY 10001</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">MoyoTools</h3>
              <p className="text-primary-foreground/80">
                Empowering businesses with integrated solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li>CRM Suite</li>
                <li>Sales</li>
                <li>Accounting</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/terms">Terms of Use</Link></li>
                <li><Link href="/cookies">Cookies Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
            <p>&copy; {new Date().getFullYear()} MoyoTools. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}