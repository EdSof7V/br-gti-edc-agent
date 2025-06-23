'use client'
import React from "react";
import { MetadataPage } from "@/features/metadata/components/MetadataPage";
import PageBreadcrumb from "@/shared/components/common/PageBreadCrumb";

export default function MetadataNotebook() {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Metadata" />
      <MetadataPage />
    </div>
  );
}
