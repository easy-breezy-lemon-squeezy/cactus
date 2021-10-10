import React from 'react';
import profileReducer, {addPostActionCreator} from "./profile-reducer";

it('length of post should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("Хей");
    let state = {
        posts: [
            {id:1, message:'Кто со мной в доту?', likesCount:5},
            {id:2, message:'Пишу соц сеть кактус!', likesCount:25},
        ]
    }
    // 2.action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
})