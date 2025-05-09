/*
 * @Author: Westen
 * @Date: 2025-04-09 19:57:23
 * @LastEditors: your Name
 * @LastEditTime: 2025-05-09 21:25:22
 * @Description: 
 */
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: "incremental",
  },
};

export default nextConfig;
