import { createContext, useReducer, useRef } from 'react';
import PropTypes from 'prop-types';
import AuthReducer, { defaultAuth, types, init } from "../reducers/authReducer";

// 
const { UPDATE_AUTH } = types;
const AuthContext = createContext([defaultAuth]);
const AuthConsumer = AuthContext.Consumer;


const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, { ...defaultAuth }, init);

    // const contextActions = useRef({
    //     // eslint-disable-next-line consistent-return
    //     selectors: async (values) => {
    //         const { action,data } = values;
    //         try {
    //             switch (action) {
    //                 case UPDATE_AUTH:
    //                     return dispatch({
    //                         type: UPDATE_AUTH,
    //                         data
    //                     });
    //                 default:
    //                     break;
    //             }
    //         } catch (error) {
    //             // ToDo: Handle on submit errors
    //         }
    //     },
    // });


    return (
        <AuthContext.Provider value={[state, dispatch]}>
            {/* state,contextActions.current */}
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthContext;
export { AuthProvider, AuthConsumer, types };