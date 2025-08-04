import { Toaster } from "@/ui/toaster";
import { Toaster as Sonner } from "@/ui/sonner";
import { TooltipProvider } from "@/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Reflects from "./pages/Reflects";
import AIAutomationArticle from "./pages/AIAutomationArticle";
import ForthWebinar from "./pages/ForthWebinar";
import SoilHealthManagement from "./pages/SoilHealthManagement";
import ThirdWebinarAnnouncement from "./pages/ThirdWebinarAnnouncement";
import ThirdWebinar from "./pages/ThirdWebinar";
import MicrofrontendSaas from "./pages/MicrofrontendSaas";
import AIMLDeepFake from "./pages/AIMLDeepFake";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/reflects" element={<Reflects />}>
            <Route path="AiPoweredComponent" element={<AIAutomationArticle />} />
            <Route path="ForthWebinar" element={<ForthWebinar />} />
            <Route path="AgriTechBlog" element={<SoilHealthManagement />} />
            <Route path="third_webinar_invitation" element={<ThirdWebinarAnnouncement />} />
            <Route path="third_webinar" element={<ThirdWebinar />} />
            <Route path="MicrofrontendSaas" element={<MicrofrontendSaas />} />
            <Route path="AIMLDeepFake" element={<AIMLDeepFake />} />
          </Route>
          {/* Add other routes here */}

          {/* Catch-all route for 404 Not Found */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
