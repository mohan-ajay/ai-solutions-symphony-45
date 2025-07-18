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
    icon: (<img src="/glassy_icons/phone.svg" className="w-200 h-100" alt=""></img>),
    title: "Phone",
    content: "+1 425-900-9663"
  },
  {
    icon: (<img src="/glassy_icons/email.svg" className="w-200 h-100" alt=""></img>), 
    title: "Email",
    content: "lohith@metricdust.com"
  },
  {
    icon: (<img src="/glassy_icons/pin.svg" className="w-200 h-100" alt=""></img>), 
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible."
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      <ModernHeader />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div
          className="relative bg-contact-hero bg-cover bg-center bg-no-repeat"
          style={{
            background: "url('/contact-us.webp') center center / cover no-repeat, #222a45",
            marginTop: '80px'
          }}
        >
          <div className="container mx-auto px-6 py-24 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              We're here to help you
            </h1>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <span>Home</span>
              <span>&gt;</span>
              <span className="text-contact-icon">Contact</span>
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="bg-zinc-900">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-4 text-white"
                >
                  <div className="text-contact-icon flex-shrink-3">
                    {info.icon}
                  </div>
                  <div className="text-left mb-5">
                    <h3 className="text-lg font-semibold mb-1">
                      {info.title}
                    </h3>
                    <p className="text-white/80 text-sm">{info.content}</p>
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
                        className="w-full"
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
                        className="w-full"
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
                        className="w-full"
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
                      className="w-full h-full resize-none"
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