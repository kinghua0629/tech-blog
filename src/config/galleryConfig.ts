import type { GalleryConfig } from "@/types/galleryConfig";

// 相册配置
export const galleryConfig: GalleryConfig = {
  // 相册列表
  albums: [
    {
      id: "f1-collection",
      name: "F1 Collection",
      description: "",
      location: "",
      date: "2026-06-26",
      tags: [],
    },
  ],

  // 瀑布流最小列宽(px)，浏览器根据容器宽度自动计算列数，默认 240
  // 值越小列数越多，值越大列数越少
  columnWidth: 240,
};
