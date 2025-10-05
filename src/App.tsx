import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LearnerDashboard from "./pages/LearnerDashboard";
import ProviderDashboard from "./pages/ProviderDashboard";
import EmployerPortal from "./pages/EmployerPortal";
import AdminPanel from "./pages/AdminPanel";
import BlockchainVerification from "./pages/BlockchainVerification";
import NSQFLadder from "./pages/NSQFLadder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/learner" element={<LearnerDashboard />} />
          <Route path="/provider" element={<ProviderDashboard />} />
          <Route path="/employer" element={<EmployerPortal />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/blockchain" element={<BlockchainVerification />} />
          <Route path="/nsqf-ladder" element={<NSQFLadder />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
