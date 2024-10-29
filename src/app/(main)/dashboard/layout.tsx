import { AppSidebar } from '@/components/dashboard/sidebar';
import React from 'react'

export default function LayoutDashboard({
    children,
}: {
    children: React.ReactNode;
}) {
  return (
    <>
    <AppSidebar />
    {children}
    </>
  )
}
