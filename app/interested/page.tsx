"use client";

import { Container } from "@/components/container";
import { Heading, Subheading } from "@/components/heading";
import { KleapForm } from "@/components/kleap-form";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function InterestedPage() {
  return (
    <Container className="py-16 min-h-screen bg-[#0a0a0a] text-white">
      <Link href="/" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Browse
      </Link>
      
      <div className="max-w-xl mx-auto bg-white text-black">
        <Heading>Express Interest</Heading>
        <Subheading className="mb-8">
          Manav Rachna International School, Sector 14, Faridabad, Haryana, India
        </Subheading>
        
        <KleapForm
          formId="interest"
          title="Student Interest Form"
          fields={[
            { name: "name", label: "Your Name", type: "text", required: true },
            { name: "class", label: "Class", type: "select", options: ["6", "7", "8", "9", "10", "11", "12"], required: true },
            { name: "section", label: "Section", type: "select", options: ["A", "B", "C", "D", "E", "F", "G", "H"], required: true },
            { name: "phone", label: "Parent's Phone Number", type: "tel", required: true },
            { name: "message", label: "Why are you interested in this item?", type: "textarea", required: true }
          ]}
          submitText="Submit Interest"
          successMessage="Your interest has been submitted! The item owner will be notified and will contact you through your parent's number."
        />
      </div>
    </Container>
  );
}
