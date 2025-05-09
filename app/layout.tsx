/*
 * @Author: Westen
 * @Date: 2025-04-09 19:57:23
 * @LastEditors: your Name
 * @LastEditTime: 2025-05-09 10:50:43
 * @Description: 
 */
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
