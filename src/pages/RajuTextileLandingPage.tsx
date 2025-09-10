import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Shirt, Mail, Phone, MapPin } from 'lucide-react'; // Changed Fabric to Shirt

const RajuTextileLandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center bg-white shadow-sm rounded-b-lg">
        <div className="flex items-center space-x-2">
          <Shirt className="h-8 w-8 text-blue-600" /> {/* Changed Fabric to Shirt */}
          <h1 className="text-3xl font-bold text-blue-800">Raju Textile</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">Home</a>
          <a href="#products" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">Products</a>
          <a href="#about" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
          <a href="#contact" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
        </nav>
        <Button className="md:hidden">Menu</Button> {/* Mobile menu button */}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white p-6 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Crafting Quality Fabrics for a Brighter Tomorrow
          </h2>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md">
            Your trusted partner for premium textiles and innovative solutions.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            Explore Our Collection
          </Button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <img src="/placeholder.svg" alt="Cotton Fabrics" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <CardTitle className="text-2xl text-blue-700">Cotton Fabrics</CardTitle>
              <CardDescription>Soft, breathable, and versatile for all your needs.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Discover our wide range of 100% pure cotton fabrics, perfect for apparel, home furnishings, and more.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <img src="/placeholder.svg" alt="Silk Fabrics" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <CardTitle className="text-2xl text-blue-700">Silk Fabrics</CardTitle>
              <CardDescription>Luxurious and elegant, ideal for special occasions.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Experience the richness of our exquisite silk collection, known for its sheen and smooth texture.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <img src="/placeholder.svg" alt="Synthetic Blends" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <CardTitle className="text-2xl text-blue-700">Synthetic Blends</CardTitle>
              <CardDescription>Durable, easy-care, and modern textile solutions.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our innovative synthetic blends offer durability, wrinkle resistance, and vibrant colors.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">About Raju Textile</h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Raju Textile has been a pioneer in the textile industry for over two decades, committed to delivering
            unparalleled quality and innovation. We pride ourselves on our sustainable practices and our dedication
            to customer satisfaction. Our state-of-the-art manufacturing facilities and skilled artisans ensure
            that every fabric we produce meets the highest standards.
          </p>
          <Button variant="outline" className="mt-8 text-white border-white hover:bg-white hover:text-blue-700 transition-colors">
            Learn More
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Have questions or need a custom order? Fill out the form below or reach out to us directly.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700">info@rajutextile.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">123 Textile Lane, Fabric City, TX 78901</span>
              </div>
            </div>
          </div>
          <Card className="p-6 shadow-lg">
            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-lg">Name</Label>
                <Input id="name" placeholder="Your Name" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="email" className="text-lg">Email</Label>
                <Input id="email" type="email" placeholder="Your Email" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="message" className="text-lg">Message</Label>
                <Textarea id="message" placeholder="Your Message" rows={5} className="mt-2" />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Raju Textile. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RajuTextileLandingPage;