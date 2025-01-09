import React from 'react';

import {followService, useRemoveFollow} from '@domain';
import {QueryKeys} from '@infra';

import {UserListTemplate} from '@components';
import {AppScreenProps} from '@routes';
import {useToastService} from '@services';

export function MyFollowersScreen({}: AppScreenProps<'MyFollowersScreen'>) {
  const {showToast} = useToastService();
  const {removeFollow} = useRemoveFollow({
    onSuccess: () => {
      showToast({
        message: 'Seguidor removido',
        type: 'success',
        position: 'bottom',
      });
    },
  });
  return (
    <UserListTemplate
      screenTitle="Seguidores"
      emptyMessage="Você ainda não tem seguidores"
      totalText="seguindo"
      queryKey={QueryKeys.MyFollowersList}
      getUserList={followService.getMyFollowersList}
      button={{
        title: 'Remover',
        onPress: followUser => removeFollow({followId: followUser.followId}),
      }}
    />
  );
}
