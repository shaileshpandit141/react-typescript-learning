import React, { createContext, useContext, useState, ReactNode } from "react";
import DefaultThumbnail from '../assets/images/thumbnail.png';
import getVideoInfo from "./utils";

// Define the types
interface TypedVideoInfoList {
  title: string;
  author_name: string;
  thumbnail_url: string;
}

interface TypedDefaultValue {
  videoList: TypedVideoInfoList[];
  add: (url: string) => void;
  del: (thumbnail_url: string) => void;
}

// Provide default values for the context
const VideoInfoListContext = createContext<TypedDefaultValue>({
  videoList: [],
  add: () => { },
  del: () => { },
});

interface TypedInfoListProps {
  children: ReactNode
}

const VideoInfoListProvider: React.FC<TypedInfoListProps> = ({ children }) => {
  const [videoList, setVideoList] = useState<TypedVideoInfoList[]>([
    {
      title: 'some title about the video',
      author_name: 'channel name',
      thumbnail_url: DefaultThumbnail
    }
  ])

  const add = (url: string) => {
    getVideoInfo(url)
      .then(info => {
        setVideoList(prev => [...prev, info])
      })
      .catch(error => console.error(error));
  }

  const del = (thumbnail_url: string) => {
    setVideoList((prevVideoList) => {
      return prevVideoList.filter((video) => {
        return video.thumbnail_url !== thumbnail_url;
      });
    });
  }

  const value: TypedDefaultValue = {
    videoList,
    add,
    del
  }

  return (
    <VideoInfoListContext.Provider value={value}>
      {children}
    </VideoInfoListContext.Provider>
  )
}

const useVideoInfoListContext = (): TypedDefaultValue => {
  return useContext(VideoInfoListContext)
}

export { useVideoInfoListContext }
export default VideoInfoListProvider
