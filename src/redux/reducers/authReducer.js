const dataInicial = {
    userProfile: null,
    logOutGoogle: false
}

const typeLogIn = '@auth/LogIn'
const typeLogInGoogle = '@auth/LogInGoogle '
const typeLogOut = '@auth/LogOut'
const typeReset = '@auth/LogOut'


const authReducer = (state = dataInicial, action) => {
    switch (action.type) {
        case typeLogIn:
            return {
                ...state,
                userProfile: action.payload.userProfile
            };
        case typeLogInGoogle:
            return {
                ...state,
                userProfile: action.payload.userProfile
            };
        case typeLogOut:
            localStorage.removeItem('profile')
            return {
                ...state,
                userProfile: action.payload.userProfile,
                logOutGoogle: action.payload.logOutGoogle
            };

        case typeReset:
            localStorage.removeItem('profile')
            return {
                ...state,
                userProfile: action.payload.userProfile,
                logOutGoogle: action.payload.logOutGoogle
            };
        default:
            let json = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('profile'))))
            return {
                ...state,
                userProfile: json
            };
    }
};

export const actionLogIn = (profile) => (dispatch, getState) => {
    dispatch({
        type: typeLogIn,
        payload: {
            userProfile: profile
        }
    });
};

export const actionSignInWithGoogle = (profile) => (dispatch, getState) => {
    dispatch({
        type: typeLogInGoogle,
        payload: {
            userProfile: profile
        }
    });

};

export const actionLogOut = (profile) => (dispatch, getState) => {
    dispatch({
        type: typeLogOut,
        payload: {
            userProfile: profile,
            logOutGoogle: true
        }
    });
};

export const actionReset = (profile) => (dispatch, getState) => {
    dispatch({
        type: typeReset,
        payload: {
            userProfile: profile,
            logOutGoogle: false
        }
    });
};

export default authReducer;