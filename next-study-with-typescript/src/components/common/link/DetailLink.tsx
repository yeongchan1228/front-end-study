"use client";

import { usePathname, useRouter } from "next/navigation";
import DetailLinkType from "@/constants/types/detail-link-types";

export default function DetailLink({ content, uri }: DetailLinkType) {
  const router = useRouter();
  const path = usePathname();
  return <h4 onClick={() => router.push(path + uri)}>{content}</h4>;
}
