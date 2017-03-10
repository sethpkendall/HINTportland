import { ADD_REVIEW } from '../actions/add_review';
import { GET_QUADRANTS } from '../actions/get_quadrants';
const initialState = {
    Southeast: {
        title: 'Southeast',
        reviews: [
            {key:'_gu7hpzowf', name: 'Slingshot Lounge', type: 'Bar', description: 'Dive Bar', price:2, specialties:'Happy Hour from 5-7:30 daily', review: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {key:'_epuyd05nx', name: '10 Best Cafes', review: 'lorem ipsum'},
            {key:'_wxrdvpbdr', name: '8 Excellent Hikes within 30 minutes of downtown PDX', review: 'lorem ipsum'},
            {key:'_0fp7upsl3', name: 'Tone of the Culture: What does it mean to be a Portlander', review: 'lorem ipsum'}]

    },
    Southwest: {
        title: 'Southwest',
        reviews: [
            {key:'_me5u9ts7p', name: 'Soutwest Portland: The Good Parts', review: 'lorem ipsum'},
            {key:'_72y32rwdi', name: '10 Best Cafes', review: 'lorem ipsum'},
            {key:'_ami9rqsjd', name: '8 Excellent Hikes within 30 minutes of downtown PDX', review: 'lorem ipsum'},
            {key:'_etc0ga2rm', name: 'Tone of the Culture: What does it mean to be a Portlander', review: 'lorem ipsum'}]

    },
    NorthWest: {
        title: 'NorthWest',
        reviews: [
            {key:'_2p0yfjdqv', name: 'Northwest Portland: The Good Parts', review: 'lorem ipsum'},
            {key:'_sug2yi4cy', name: '10 Best Cafes', review: 'lorem ipsum'},
            {key:'_4hbnb41ae', name: '8 Excellent Hikes within 30 minutes of downtown PDX', review: 'lorem ipsum'},
            {key:'_qssgz2fdl', name: 'Tone of the Culture: What does it mean to be a Portlander', review: 'lorem ipsum'}]

    },
    North: {
        title: 'North',
        reviews: [
            {key:'_xmjetdmdw', name: 'North Portland: The Good Parts', review: 'lorem ipsum'},
            {key:'_ajd3ig11q', name: '10 Best Cafes', review: 'lorem ipsum'},
            {key:'_eic2q59ks', name: '8 Excellent Hikes within 30 minutes of downtown PDX', review: 'lorem ipsum'},
            {key:'_6qw506isc', name: 'Tone of the Culture: What does it mean to be a Portlander', review: 'lorem ipsum'}]

    },
    Northeast: {
        title: 'Northeast',
        reviews: [
            {key:'_a5sj6vaci', name: 'Northeast Portland: The Good Parts', review: 'lorem ipsum'},
            {key:'_7gwu1yyml', name: '10 Best Cafes', review: 'lorem ipsum'},
            {key:'_1ofov8cmx', name: '8 Excellent Hikes within 30 minutes of downtown PDX', review: 'lorem ipsum'},
            {key:'_s1x09g7bq', name: 'Tone of the Culture: What does it mean to be a Portlander', review: 'lorem ipsum'}]

    }
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_REVIEW:
            var quadrant = action.payload.quadrant;
            var updatedState = {};
            Object.assign(updatedState, state);
            updatedState[quadrant].reviews.push(action.payload.newReview)
            return updatedState;
        //...state means unpack this array and insert the contents here

        case GET_QUADRANTS:
            return { ...state };

        default:
            return state
    }
}

