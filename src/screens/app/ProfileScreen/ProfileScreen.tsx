import React, {useEffect} from 'react';
import {RefreshControl, ScrollView} from 'react-native';

import {useUserGetById} from '@domain';

import {ActivityIndicator, Box, ProfileAvatar, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function ProfileScreen({route}: AppScreenProps<'ProfileScreen'>) {
  const userId = route.params.userId;

  const {isError, isLoading, user, refetch, isFetching} =
    useUserGetById(userId);

  useEffect(() => {
    console.log('MONTOU', userId, user);
  }, [userId, user]);

  return (
    <Screen canGoBack>
      {isLoading && <ActivityIndicator color="primary" />}
      {isError && <Text> error ao carregar perfil do usuário</Text>}
      {user && (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={isFetching} onRefresh={refetch} />
          }>
          <Box alignItems="center" flex={1}>
            <ProfileAvatar
              imageURL={user.profileUrl}
              size={64}
              borderRadius={24}
            />
            <Text preset="headingMedium" bold>
              {user.fullName}
            </Text>
            <Text>@{user.username}</Text>
          </Box>
        </ScrollView>
      )}
    </Screen>
  );
}
