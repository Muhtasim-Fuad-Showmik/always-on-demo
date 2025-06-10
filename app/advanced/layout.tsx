import SideBarWrapper from "./components/sidebarWrapper";


export default function AdvancedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen">
      <SideBarWrapper>
        {children}
      </SideBarWrapper>
    </div>
  )
}
