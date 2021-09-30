const defaultAuth = {
    _id: "",
    user_name: "",
    phone: "",
    email: "",
    token: ""
}

const types = {
    UPDATE_AUTH: 'UPDATE_AUTH',
    RESET: 'RESET',
};


function init() {
    return defaultAuth;
}

const AuthReducer = (state, { type, data }) => {
    switch (type) {
        case types.UPDATE_AUTH:
            delete data.password
            return {
                ...state,
                ...data
            };
        case types.RESET:
            return init();

        default:
            return state;
    }
};

export default AuthReducer;
export { types, defaultAuth, init };