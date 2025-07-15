import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle, Zap, Globe, Eye, Volume2, FileText, Brain, Search, BarChart, Lock } from "lucide-react";
import { Link } from "wouter";

export default function HowItWorks() {
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
              <Button variant="ghost" className="text-gray-600 hover:text-primary">
                <Link href="/about">About</Link>
              </Button>
              <Button variant="ghost" className="text-primary font-medium">
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
              How <span className="text-primary">TruthLens</span> Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI technology analyzes videos across multiple dimensions to detect authenticity
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get results in seconds with our streamlined analysis workflow
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center relative">
              <CardContent className="p-8">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center absolute -top-4 -right-4 text-sm font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Submit URL</h3>
                <p className="text-gray-600">Paste any video URL from YouTube, Instagram, Twitter, TikTok, or Facebook into our analyzer</p>
              </CardContent>
            </Card>
            
            <Card className="text-center relative">
              <CardContent className="p-8">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-yellow-600" />
                </div>
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center absolute -top-4 -right-4 text-sm font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Analysis</h3>
                <p className="text-gray-600">Our advanced AI examines visual, audio, metadata, and pattern indicators for authenticity</p>
              </CardContent>
            </Card>
            
            <Card className="text-center relative">
              <CardContent className="p-8">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-green-600" />
                </div>
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center absolute -top-4 -right-4 text-sm font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Results</h3>
                <p className="text-gray-600">Receive detailed authenticity assessment with confidence scores and analysis breakdown</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Analysis Dimensions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multi-Dimensional Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI examines videos from multiple angles to provide comprehensive authenticity assessment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Visual Analysis</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Advanced computer vision algorithms detect visual inconsistencies, deepfake artifacts, and manipulation signs in facial movements and expressions.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Facial landmark detection</li>
                  <li>• Motion pattern analysis</li>
                  <li>• Compression artifact detection</li>
                  <li>• Temporal consistency checks</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Volume2 className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Audio Analysis</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Sophisticated audio processing identifies voice synthesis, unnatural speech patterns, and audio-visual synchronization issues.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Voice authenticity detection</li>
                  <li>• Speech pattern analysis</li>
                  <li>• Audio-visual lip sync verification</li>
                  <li>• Synthetic voice identification</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <FileText className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Metadata Analysis</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Deep examination of file metadata, creation timestamps, and technical properties to identify signs of manipulation or re-encoding.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• File structure analysis</li>
                  <li>• Creation timestamp verification</li>
                  <li>• Encoding history tracking</li>
                  <li>• Platform consistency checks</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Brain className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">AI Pattern Recognition</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Machine learning models trained on millions of authentic and synthetic videos identify subtle patterns invisible to human detection.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Deep learning classification</li>
                  <li>• Generative model detection</li>
                  <li>• Anomaly pattern recognition</li>
                  <li>• Cross-platform validation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security & Privacy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security & Privacy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy and data security are our top priorities
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <Lock className="w-8 h-8 text-primary mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">Data Protection</h3>
                    </div>
                    <ul className="text-gray-600 space-y-2">
                      <li>• No video content stored on our servers</li>
                      <li>• Analysis performed in real-time</li>
                      <li>• URLs processed securely and discarded</li>
                      <li>• End-to-end encryption for all data</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center mb-4">
                      <Shield className="w-8 h-8 text-green-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">Privacy First</h3>
                    </div>
                    <ul className="text-gray-600 space-y-2">
                      <li>• No personal information required</li>
                      <li>• Anonymous analysis sessions</li>
                      <li>• GDPR and CCPA compliant</li>
                      <li>• Transparent data practices</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Analyzing?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust TruthLens to verify video authenticity
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
            <Link href="/">Start Analyzing Videos</Link>
          </Button>
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
                  <Shield className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Shield className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Shield className="w-5 h-5" />
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