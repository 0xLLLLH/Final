import apiClient from '../apiClient';

const pageSize = 5;

export const loadEvents = ({
    userId
}) => apiClient.get('activity', userId, 0, pageSize)

export const loadMore = ({
    userId
}) => apiClient.get('activity', userId, 0, pageSize * 2)