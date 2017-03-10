import { ADD_REVIEW } from '../actions/add_review';
import { GET_QUADRANTS } from '../actions/get_quadrants';
const initialState = {
    Southeast: {
        title: 'Southeast',
        reviews: [
            {key:'_gu7hpzowf', name: 'Slingshot Lounge', type: 'Bar', description: 'Dive Bar', price:2, specialties:'Happy Hour from 5-7:30 daily', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {key:'_epuyd05nx', name: 'SouthEast Grind', type:"Cafe", description:"24 hour cafe", price:1, specialties:"A multitude of unusual coffee and tea concoctions.", review: 'As one of the only cafes, or busineses in general, in Portland that is open at all times Southeast grind is the haven of the study bingers. It is stocked with an odd assortment of furniture and even has a secluded study area available for rent.'},
            {key:'_wxrdvpbdr', name: 'Nostrana', type:"Restaurant", description:"Fine Italian Dining", price:3, specialties:"Thin crust pizza", review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {key:'_0fp7upsl3', name: 'Portland Night Market', type:"Indoor Activity", description:"Market for various types of Portland vendors", price:2, specialties:"Everything!", review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}]

    },
    Southwest: {
        title: 'Southwest',
        reviews: [
            {key:'_me5u9ts7p', name: 'Fogo de Chao', type:"Restaurant", description:"Brazilian churrascaria", price:3, specialties:"All you can eat meat!", review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {key:'_72y32rwdi', name: 'Revolucion Cafe', type:"Cafe", description:"Cafe with Mexican flair", price:1, specialties:"-", review: 'Daytime coffeehouse featuring espresso, traditional Mexican pastries & tamales in a colorful space.'},
            {key:'_ami9rqsjd', name: 'Portland Art Museum', type:"Indoor Activity", description:"Art collection of more than 42,000 pieces", price:1, specialties:"-", review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {key:'_etc0ga2rm', name: 'Marcum Park', type:"Outdoor Activity", description:"Network of wooded trails", price:1, specialties:"Counsel Crest", review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}]

    },
    NorthWest: {
        title: 'NorthWest',
        reviews: [
            {key:'_2p0yfjdqv', name: '10 Barrel Brewing', type:"Brewery", description:"Brewery with roof deck", price:2, specialties:"The roof deck is one of the best in town", review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {key:'_sug2yi4cy', name: 'Ovation Coffee', type:"Cafe", description:"Modern cafe in the Pearl", price:1, specialties:"Moroccan Breakfast Sandwhich", review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {key:'_4hbnb41ae', name: 'Forest park', type:"Outdoor Activity", description:"The largest municipal park in the USA", price:1, specialties:"Miles and miles of hiking and biking", review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {key:'_qssgz2fdl', name: 'Mcmenamins 23rd Ave Bottle Shop', type:"Bar", description:"Bottle shop with huge selection of beer and wine", price:2, specialties:"800+ bottles and 20 taps", review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}]

    },
    North: {
        title: 'North',
        reviews: [
            {key:'_xmjetdmdw', name: 'The Fixin to', type:"Bar", description:"Bar with southern food", price:2, specialties:"Frito Pie", review: 'Southern food with Southern Service (friendly and slow).'},
            {key:'_ajd3ig11q', name: 'Anna Bananas', type:"Cafe", description:"Homey cafe with food and beer", price:1, specialties:"-", review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {key:'_eic2q59ks', name: 'Ox', type:"Restaurant", description:"Argentinian Steak House", price:5, specialties:"Quality meats", review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {key:'_6qw506isc', name: 'Smith and Bybee Wetlands Natural Area', type:"Outdoor Activity", description:"Wetlands preserve with a walking paths", price:1, specialties:"A variety of wildlife", review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}]

    },
    Northeast: {
        title: 'Northeast',
        reviews: [
            {key:'_a5sj6vaci', name: 'Alameda Brewing', type:"Brewery", description:"A small brewery embeded in the suburbs", price:2, specialties:"$5 growlers", review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {key:'_7gwu1yyml', name: 'Cafe D\'arte', type:"Cafe", description:"Italian roasterie", price:2, specialties:"-", review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {key:'_1ofov8cmx', name: 'Kennedy School', type:"Bar", description:"Restaraunt and Bar in a converted school", price:2, specialties:"Amazing facility with 3 bars and a theater", review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {key:'_s1x09g7bq', name: 'Pine State Biscuits', type:"Restaurant", description:"North Carolina breakfast cuisine", price:2, specialties:"Uh, biscuits. Surprise", review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}]

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

