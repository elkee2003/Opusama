import {Image} from 'react-native';
import { ComponentProps, useMemo } from 'react';
import { Buffer } from 'buffer';

const bucket = 'opusama-storage-f8b382aab73ca-staging';
const URL = 'https://d3a88udmcczlzq.cloudfront.net/';

type SmartImageProps = {
    imgKey: string;
    width?: number;
    height?: number;
} & Omit<ComponentProps<typeof Image>, 'source'>;

export default function SmartImage({imgKey, width, height, ...imageProps}: SmartImageProps) {

    const uri = useMemo(()=>{
      const imageRequest = JSON.stringify({
        bucket,
        key: imgKey,
        edits: {
          resize: {
            width,
            height,
            fit: "cover"
          }
        }
      });

      const encoded = Buffer.from (imageRequest).toString('base64');

      return URL + encoded;
    },[imgKey]);
      
    return <Image source={{uri}} {...imageProps} />;
}