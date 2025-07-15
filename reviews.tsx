import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Star } from "lucide-react";
import { Link } from "wouter";

export default function Reviews() {
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
              <Button variant="ghost" className="text-primary font-medium">
                <Link href="/reviews">Reviews</Link>
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:text-primary">
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
              What Our <span className="text-primary">Users</span> Say
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real testimonials from users who trust TruthLens to keep them safe from misinformation
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 text-lg mb-4 italic">
                  "TruthLens is a highly sophisticated app. I have used it for a long time, and it succeeds in preventing me from getting scammed on social media. I highly recommend TruthLens to seniors who have trouble figuring out if there are scams online."
                </p>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">- Jaana Grover</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 text-lg mb-4 italic">
                  "TruthLens is an outstanding app with reliable information. It is a great app and I would recommend it to seniors that need help with finding out if their information they found on social media is true or not."
                </p>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">- Shev Grover</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 text-lg mb-4 italic">
                  "TruthLens makes it incredibly easy to make sure I'm getting the facts, not the lies."
                </p>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">- Krish Grover</p>
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
            Join Our Happy Users
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the peace of mind that comes with knowing the truth
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