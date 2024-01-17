import {useEffect, useState} from 'react';

import {QueryKeys} from '@infra';
import {useInfiniteQuery} from '@tanstack/react-query';

import {cameraRollService} from './cameraRollService';

export function useCameraRoll(hasPermission: boolean) {
  const [list, setList] = useState<string[]>([]);

  const query = useInfiniteQuery({
    queryKey: [QueryKeys.CameraRollList],
    queryFn: ({pageParam}) => cameraRollService.getPhotos(pageParam),
    getNextPageParam: ({cursor}) => cursor,
    enabled: hasPermission,
  });

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.reduce<string[]>((prev, curr) => {
        return [...prev, ...curr.photoList];
      }, []);
      setList(newList);
    }
  }, [query.data]);

  return {
    photoList: list,
    hasNextPage: query.hasNextPage,
    fetchNextPage: () => query.fetchNextPage(),
  };
}
