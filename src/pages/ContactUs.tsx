import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "../ui/use-toast";
import ModernHeader from "@/components/ModernHeader";
import ModernFooter from "@/components/ModernFooter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Phone, Mail, MapPin, Send } from "lucide-react";

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: (<Phone className="w-12 h-12 text-white/90" strokeWidth={1.5} />),
    title: "Phone",
    content: "+1 425-900-9663"
  },
  {
    icon: (<Mail className="w-12 h-12 text-white/90" strokeWidth={1.5} />), 
    title: "Email",
    content: "lohith@metricdust.com"
  },
  {
    icon: (<MapPin className="w-12 h-12 text-white/90" strokeWidth={1.5} />), 
    title: "Address",
    content: "2519 Baker Ave. Unit 3 Everett, WA 98201"
  }
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://w7lad2uqt1.execute-api.us-east-1.amazonaws.com/prod/metricdust_contact_service/contactus", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      await response.json();
      
      toast({
        title: "Success!",
        description: "Message sent successfully!",
      });

      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ModernHeader />
      <div className="min-h-screen">
        {/* Hero Section */}
        <div 
          className="h-[80vh] bg-black text-white bg-cover bg-center flex items-center justify-center relative"
        >
          {/* Background with opacity */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: 'url(/contact-us.webp)' }}
          />
          
          {/* Content container */}
          <div className="relative z-10 text-center p-4 sm:p-8 rounded-lg">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-300 mb-4 sm:mb-6">
              We're here to help you
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-300/80">
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="bg-zinc-900 py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-6 text-white py-4"
                >
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-zinc-800 rounded-full">
                    {info.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold mb-2">
                      {info.title}
                    </h3>
                    <p className="text-white/80 text-base sm:text-lg">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-background py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
                Send us a message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column - Name, Email, Phone */}
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2 text-foreground"
                      >
                        Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Name"
                        className="w-full border-black border-2"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2 text-foreground"
                      >
                        Email
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Email"
                        className="w-full border-black border-2"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2 text-foreground"
                      >
                        Phone
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your Phone"
                        className="w-full border-black border-2"
                      />
                    </div>
                  </div>

                  {/* Right Column - Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Your Message"
                      rows={8}
                      className="w-full h-full resize-none border-black border-2"
                    />
                  </div>
                </div>

                <div className="flex justify-start">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 transition-all duration-300"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ModernFooter />
    </>
  );
}