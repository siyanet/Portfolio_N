import type { ReactNode } from "react";

import Header from "./Header";

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({
  children,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="w-full py-5 px-5">
        {children}
      </main>
    </div>
  );
}