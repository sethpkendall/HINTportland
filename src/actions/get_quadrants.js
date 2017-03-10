import Firebase from 'firebase';
import fbConfig from '../data/fbconfig';

const Posts =  Firebase.initializeApp(fbConfig);

export const GET_QUADRANTS = 'GET_QUADRANTS';

export function getQuadrants() {
    return dispatch => {
        Posts.on('value', snapshot => {
            dispatch({
                type: GET_QUADRANTS,
                payload: snapshot.val()
            });
        });
    };
}