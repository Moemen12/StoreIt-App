import React, { JSX } from "react";
import { NextPage } from "next";
import MobileNavigation from "@/components/MobileNavigation";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: NextPage<LayoutProps> = async ({
  children,
}): Promise<JSX.Element> => {
  const currentUser = await getCurrentUser();

  if (!currentUser) redirect("/sign-in");
  return (
    <main className="flex h-screen">
      <SideBar {...currentUser} />
      <section className="flex h-full flex-1 flex-col">
        <MobileNavigation {...currentUser} />
        <Header />
        <div className="main-content">{children}</div>
      </section>
    </main>
  );
};

export default Layout;
