"use client";

import { Button } from "@/components/ui/button";
import { useLeadModal } from "@/components/ui/lead-modal-context";

export function GuideCTA() {
  const { openModal } = useLeadModal();
  
  return (
    <Button size="lg" onClick={openModal}>Request Feasibility Audit</Button>
  );
}

