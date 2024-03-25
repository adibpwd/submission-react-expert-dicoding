const api = (() => {
    const BASE_URL = 'https://forum-api.dicoding.dev/v1';

    // SET TOKEN
    function putAccessToken(token) {
        localStorage.setItem('accessToken', token);
    }
    
    // GET TOKEN
    function getAccessToken() {
    return localStorage.getItem('accessToken');
    }

    async function fetchWithAuth(url, options = {}) {
      return fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${getAccessToken()}`,
        },
      });
    }

    // USER
        // REGISTER
            async function register({ name, email, password }) {
                const response = await fetch(`${BASE_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
                });
            
                const responseJson = await response.json();
                const { status, message } = responseJson;
            
                if (status !== 'success') {
                throw new Error(message);
                }
            
                const { data: { user } } = responseJson;
            
                return user;
            }
        // REGISTER
        
        // LOGIN
            async function login({ email, password }) {
                const response = await fetch(`${BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
                });
            
                const responseJson = await response.json();
            
                const { status, message } = responseJson;
            
                if (status !== 'success') {
                throw new Error(message);
                }
            
                const { data: { token } } = responseJson;
            
                return token;
            }
        // LOGIN

        // ALL USERS
            async function getAllUsers() {
                const response = await fetch(`${BASE_URL}/users`);
            
                const responseJson = await response.json();
            
                const { status, message } = responseJson;
            
                if (status !== 'success') {
                throw new Error(message);
                }
            
                const { data: { users } } = responseJson;
            
                return users;
            }
        // ALL USERS

        // MY PROFILE
            async function getOwnProfile() {
                const response = await fetchWithAuth(`${BASE_URL}/users/me`);
            
                const responseJson = await response.json();
            
                const { status, message } = responseJson;
            
                if (status !== 'success') {
                throw new Error(message);
                }
            
                const { data: { user } } = responseJson;
            
                return user;
            }
        // MY PROFILE
    // USER

    // THREAD
        // CREATE
            async function createThread({ title, body, category }) {
                const response = await fetchWithAuth(`${BASE_URL}/threads`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title, 
                    body, 
                    category,
                }),
                });
            
                const responseJson = await response.json();
                const { status, message } = responseJson;
            
                if (status !== 'success') {
                throw new Error(message);
                }
            
                const { data: { thread } } = responseJson;
            
                return thread;
            }
        // CREATE

        // ALL
            async function getAllThreads() {
                const response = await fetch(`${BASE_URL}/threads`);
            
                const responseJson = await response.json();
            
                const { status, message } = responseJson;
            
                if (status !== 'success') {
                throw new Error(message);
                }
            
                const { data: { threads } } = responseJson;
            
                return threads;
            }
        // ALL

        // DETAIL
            async function getDetailThread({ id }) {
                const response = await fetch(`${BASE_URL}/threads/${id}`);
            
                const responseJson = await response.json();
            
                const { status, message } = responseJson;
            
                if (status !== 'success') {
                throw new Error(message);
                }
            
                const { data: { detailThread } } = responseJson;
            
                return detailThread;
            }
        // DETAIL
    // THREAD

    // COMMENT
        // CREATE
            async function createCommentThread({ id, content }) {
                const response = await fetchWithAuth(`${BASE_URL}/threads/${id}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content, 
                }),
                });
            
                const responseJson = await response.json();
                const { status, message } = responseJson;
            
                if (status !== 'success') {
                throw new Error(message);
                }
            
                const { data: { comment } } = responseJson;
            
                return comment;
            }
        // CREATE
    // COMMENT

    // VOTES
        // THREAD
            // UP
                async function upThread({ id }) {
                    const response = await fetchWithAuth(`${BASE_URL}/threads/${id}/up-vote`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    });
                
                    const responseJson = await response.json();
                    const { status, message } = responseJson;
                
                    if (status !== 'success') {
                    throw new Error(message);
                    }
                
                    const { data: { vote } } = responseJson;
                
                    return vote;
                }
            // UP

            // DOWN
                async function downThread({ id }) {
                    const response = await fetchWithAuth(`${BASE_URL}/threads/${id}/down-vote`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    });
                
                    const responseJson = await response.json();
                    const { status, message } = responseJson;
                
                    if (status !== 'success') {
                    throw new Error(message);
                    }
                
                    const { data: { vote } } = responseJson;
                
                    return vote;
                }
            // DOWN

            // NEUTRALIZE/UNDO VOTE
                async function neutralizeThread({ id }) {
                    const response = await fetchWithAuth(`${BASE_URL}/threads/${id}/neutral-vote`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    });
                
                    const responseJson = await response.json();
                    const { status, message } = responseJson;
                
                    if (status !== 'success') {
                    throw new Error(message);
                    }
                
                    const { data: { vote } } = responseJson;
                
                    return vote;
                }
            // NEUTRALIZE/UNDO VOTE
        // THREAD

        // COMMENT
            // UP
                async function upComment({ threadId, commentId }) {
                    const response = await fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    });
                
                    const responseJson = await response.json();
                    const { status, message } = responseJson;
                
                    if (status !== 'success') {
                    throw new Error(message);
                    }
                
                    const { data: { vote } } = responseJson;
                
                    return vote;
                }
            // UP

            // DOWN
                async function downComment({ threadId, commentId }) {
                    const response = await fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    });
                
                    const responseJson = await response.json();
                    const { status, message } = responseJson;
                
                    if (status !== 'success') {
                    throw new Error(message);
                    }
                
                    const { data: { vote } } = responseJson;
                
                    return vote;
                }
            // DOWN

            // NEUTRALIZE/UNDO VOTE
                async function neutralizeComment({ threadId, commentId }) {
                    const response = await fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    });
                
                    const responseJson = await response.json();
                    const { status, message } = responseJson;
                
                    if (status !== 'success') {
                    throw new Error(message);
                    }
                
                    const { data: { vote } } = responseJson;
                
                    return vote;
                }
            // NEUTRALIZE/UNDO VOTE
        // COMMENT
    // VOTES

    // LEADERBOARDS
        // LIST
            async function getAllLeaderboards() {
                const response = await fetch(`${BASE_URL}/leaderboards`);
            
                const responseJson = await response.json();
            
                const { status, message } = responseJson;
            
                if (status !== 'success') {
                throw new Error(message);
                }
            
                const { data: { leaderboards } } = responseJson;
            
                return leaderboards;
            }
        // LIST
    // LEADERBOARDS

    return {
        putAccessToken,
        getAccessToken,
        register,
        login,
        getAllUsers,
        getOwnProfile,
        createThread,
        getAllThreads,
        getDetailThread,
        createCommentThread,
        upThread,
        downThread,
        neutralizeThread,
        upComment,
        downComment,
        neutralizeComment,
        getAllLeaderboards,
    };
})();

export default api;
