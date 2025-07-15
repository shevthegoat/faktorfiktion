import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, ExternalLink, Heart, Users, Vote, Clock, AlertTriangle } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
                <a className="flex items-center">
                  <Shield className="h-8 w-8 text-primary mr-3" />
                  <h1 className="text-xl font-bold text-gray-900">TruthLens</h1>
                </a>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600 hover:text-primary">
                <Link href="/reviews">Reviews</Link>
              </Button>
              <Button variant="ghost" className="text-primary font-medium">
                <Link href="/about">About</Link>
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:text-primary">
                <Link href="/how-it-works">How it Works</Link>
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:text-primary">
                <Link href="/">Home</Link>
              </Button>
              <Button>
                <Link href="/">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-primary">TruthLens</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fighting misinformation with advanced AI technology to protect truth in our digital age
            </p>
          </div>
        </div>
      </section>

      {/* Crisis Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Social Media Crisis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Misinformation spreads faster than ever before, affecting millions of lives worldwide
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                    <h3 className="text-lg font-semibold text-red-800">73% of Americans</h3>
                  </div>
                  <p className="text-red-700">have encountered misinformation on social media platforms in the past month</p>
                </CardContent>
              </Card>
              
              <Card className="border-yellow-200 bg-yellow-50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <Clock className="w-5 h-5 text-yellow-600 mr-2" />
                    <h3 className="text-lg font-semibold text-yellow-800">6x Faster Spread</h3>
                  </div>
                  <p className="text-yellow-700">False information spreads six times faster than true information on social networks</p>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <Users className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold text-blue-800">Millions Affected</h3>
                  </div>
                  <p className="text-blue-700">Deepfakes and manipulated videos influence public opinion and personal decisions</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Human Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fake content doesn't just spread—it changes lives, influences decisions, and shapes reality
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Health Misinformation</h3>
                <p className="text-gray-600">False medical advice leads to delayed treatments, vaccine hesitancy, and preventable health crises</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Vote className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Political Manipulation</h3>
                <p className="text-gray-600">Deepfakes and doctored videos undermine democratic processes and public trust in institutions</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Social Division</h3>
                <p className="text-gray-600">Fabricated content creates polarization, damages relationships, and erodes social cohesion</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe everyone deserves access to reliable information in an age of digital deception
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-12">
                <div className="text-center space-y-6">
                  <div className="bg-primary/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                    <Shield className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Protecting Truth in the Digital Age</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    TruthLens was created to empower individuals with the tools they need to identify manipulated content 
                    and make informed decisions. Our advanced AI technology analyzes videos across multiple dimensions—visual, 
                    audio, metadata, and pattern recognition—to provide reliable authenticity assessments.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We're committed to transparency, accuracy, and accessibility. Our goal is to restore trust in digital 
                    media by making sophisticated detection technology available to everyone, from journalists and educators 
                    to concerned citizens navigating today's complex information landscape.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-bold">TruthLens</h3>
              </div>
              <p className="text-gray-400">Fighting misinformation with advanced AI technology</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TruthLens. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}