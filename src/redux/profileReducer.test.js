import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: 10},
        {id: 2, message: 'It\'s my first post', likes: 15},
    ]
};

it('length of posts should be incremented', () => {
    let action = addPostActionCreator('this is new post text')

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
    let action = addPostActionCreator('this is new post text')

    let newState = profileReducer(state, action)

    expect(newState.posts[2].message).toBe('this is new post text');
});

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1);
});

it('after deleting length should not be decrement if id is incorrect', () => {
    let action = deletePost(1000)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2);
});