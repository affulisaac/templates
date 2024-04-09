import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="vh-100 d-flex align-items-center" id="all-groups">
      <div className="container">{children}</div>
    </div>
  );
}
