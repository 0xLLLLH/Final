import apiClient from '../apiClient';

const getInt = (max) => Math.floor(Math.random() * max)

export const loadQuestion = ({
    questionId
}) => apiClient.get('problem', questionId);

export const loadAnswers = ({
    questionId
}) => apiClient.get('answer', questionId)

export const loadComments = ({
    answerId
}) => apiClient.get('comments', answerId)
