import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Screen, PostItem} from '@components';
import {AppTabScreenProps} from '@routes';

import {Post, postService} from '../../../domain';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPostList] = useState<Post[]>([]);
  useEffect(() => {
    postService.getList().then(list => setPostList(list));
  }, []);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }
  return (
    <Screen>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </Screen>
  );
}