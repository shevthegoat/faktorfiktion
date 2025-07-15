import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { VideoAnalyzer } from "@/components/video-analyzer";
import { Shield, ExternalLink, CheckCircle, Zap, Globe } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const [showAnalyzer, setShowAnalyzer] = useState(false);

  const scrollToAnalyzer = () => {
    setShowAnalyzer(true);
    setTimeout(() => {
      document.getElementById('analyzer')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-primary mr-3" />
              <h1 className="text-xl font-bold text-gray-900">TruthLens</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600 hover:text-primary">
                <Link href="/reviews">Reviews</Link>
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:text-primary">
                <Link href="/about">About</Link>
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:text-primary">
                <Link href="/how-it-works">How it Works</Link>
              </Button>
              <Button variant="ghost" className="text-primary font-medium">
                <Link href="/">Home</Link>
              </Button>
              <Button onClick={scrollToAnalyzer}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Combat <span className="text-primary">Misinformation</span><br />
              with AI-Powered Analysis
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Analyze social media videos from YouTube, Instagram, Twitter, TikTok, and Facebook to determine their authenticity using advanced AI detection technology.
            </p>
            <Button size="lg" onClick={scrollToAnalyzer} className="px-8 py-4 text-lg">
              <Shield className="mr-2 h-5 w-5" />
              Start Analyzing Now
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose TruthLens Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TruthLens?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI technology meets user-friendly design for reliable authenticity detection
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h3>
                <p className="text-gray-600">Get results in seconds with our optimized analysis engine</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">High Accuracy</h3>
                <p className="text-gray-600">95% accuracy rate using state-of-the-art detection algorithms</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Platform</h3>
                <p className="text-gray-600">Supports all major social media platforms in one tool</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Analysis Tool Section */}
      {showAnalyzer && (
        <section id="analyzer" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Analyze Video Authenticity
              </h2>
              <p className="text-xl text-gray-600">
                Paste a video URL from supported platforms to get an instant authenticity analysis
              </p>
            </div>
            
            <VideoAnalyzer />
          </div>
        </section>
      )}

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
