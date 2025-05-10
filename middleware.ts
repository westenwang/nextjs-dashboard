/*
 * @Author: Westen
 * @Date: 2025-05-10 23:49:46
 * @LastEditors: your Name
 * @LastEditTime: 2025-05-10 23:49:51
 * @Description: 
 */
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
