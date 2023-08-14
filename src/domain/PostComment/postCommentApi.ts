/* eslint-disable @typescript-eslint/no-shadow */
import {api, PageAPI, PageParams} from '@api';

import {PostCommentAPI} from './postCommentTypes';

async function getList(
  post_id: number,
  PageParams?: PageParams,
): Promise<PageAPI<PostCommentAPI>> {
  const response = await api.get<PageAPI<PostCommentAPI>>('user/post_comment', {
    params: {
      post_id,
      ...PageParams,
    },
  });

  return response.data;
}

export const postCommentApi = {
  getList,
};
