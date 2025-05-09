/*
 * @Author: Westen
 * @Date: 2025-05-09 10:48:32
 * @LastEditors: your Name
 * @LastEditTime: 2025-05-09 11:05:41
 * @Description: 添加主字体
 */
import { Inter, Lusitana } from "next/font/google";

// 主字体
export const inter = Inter({ subsets: ["latin"] });

// 次要字体
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
