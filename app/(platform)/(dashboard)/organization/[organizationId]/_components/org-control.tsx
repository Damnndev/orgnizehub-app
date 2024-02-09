"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useOrganizationList } from "@clerk/nextjs";
import { organizations } from "@clerk/nextjs/api";

export const OrgControl = () => {
  const { organizationId } = useParams();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) return;
    setActive({ organization: organizationId as string });
  }, [setActive, organizationId]);

  return null;
};
export default OrgControl;
