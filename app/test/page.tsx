"use client";

import { useEffect } from "react";

export default function TestPage() {
  useEffect(() => {
    window.__testPageMounted = true;
  }, []);

  return <button type="button">Test page button</button>;
}
