/**
 * Auto-generated Media Assets from Pexels API
 * Project: buildcrew-ai
 * Zero attribution clutter on UI (Enterprise Clean Standard)
 */

export interface PhotoAsset {
  id: string;
  url: string;
  alt: string;
  avg_color: string;
}

export interface VideoAsset {
  id: string;
  videoUrl: string;
  posterUrl: string;
  width: number;
  height: number;
}

export interface MediaConfig {
  caseStudyPhoto: PhotoAsset;
  editorialPhotos: PhotoAsset[];
  ambientVideo: VideoAsset;
}

export const mediaConfig: MediaConfig = {
  caseStudyPhoto: {
    "id": "18069814",
    "url": "https://images.pexels.com/photos/18069814/pexels-photo-18069814.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Modern abstract 3D render showcasing a complex geometric structure in cool hues.",
    "avg_color": "#A1A2AA"
},
  editorialPhotos: [
    {
    "id": "17483873",
    "url": "https://images.pexels.com/photos/17483873/pexels-photo-17483873.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Abstract 3D render visualizing artificial intelligence and neural networks in digital form.",
    "avg_color": "#CECFCE"
},
    {
    "id": "18069816",
    "url": "https://images.pexels.com/photos/18069816/pexels-photo-18069816.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Dynamic 3D render of abstract geometric data paths with colorful blocks representing data flow.",
    "avg_color": "#9B969B"
},
    {
    "id": "18069490",
    "url": "https://images.pexels.com/photos/18069490/pexels-photo-18069490.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Abstract digital visualization of AI, featuring colorful 3D elements and modern design.",
    "avg_color": "#D9DAD5"
}
  ],
  ambientVideo: {
    "id": "17599632",
    "videoUrl": "https://videos.pexels.com/video-files/17599632/17599632-hd_1280_720_30fps.mp4",
    "posterUrl": "https://images.pexels.com/videos/17599632/3d-arcadian-cgi-digital-17599632.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    "width": 1280,
    "height": 720
}
};
