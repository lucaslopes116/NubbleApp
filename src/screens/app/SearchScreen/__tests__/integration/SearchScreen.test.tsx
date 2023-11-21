import React from 'react';

import {authCredentialsStorage} from '@services';
import {mockUtils, server, userMocked} from '@test';
import {act, fireEvent, renderScreen, screen} from 'test-utils';

import {AppStack} from '@routes';

jest.unmock('@react-navigation/native');

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
  jest
    .spyOn(authCredentialsStorage, 'get')
    .mockResolvedValue(mockUtils.mateusAuthCredentials);
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
  jest.useRealTimers();
  jest.resetAllMocks();
});

describe('integration: SearchScreen', () => {
  test('Search Flow', async () => {
    // 1) Navigate to Search Screen
    renderScreen(<AppStack initialRouteName="SearchScreen" />);

    // 2) Find the search input and type user name
    const inputText = screen.getByPlaceholderText(/digite sua busca/i);
    fireEvent.changeText(inputText, 'mar');
    act(() => jest.runAllTimers());

    // 3) Find two users as per the MSW mock
    const user1 = await screen.findByText(userMocked.user1.username);
    expect(user1).toBeTruthy();

    const user2 = await screen.findByText(userMocked.user2.username);
    expect(user2).toBeTruthy();

    // 4) Select the user1 and navigate to Profile Screen
    fireEvent.press(user1);

    // 5) Expect to be at the Profile Screen with the user1 loaded
    const userFullName = await screen.findByText(userMocked.user1.full_name);
    expect(userFullName).toBeTruthy();
  });
});
