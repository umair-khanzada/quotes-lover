import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
    HStack,
    Image
} from "@chakra-ui/react";
import {
    MdFormatQuote,
    MdFavorite,
    MdBorderColor,
    MdExitToApp
} from "react-icons/md"
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

import { defaultAuth,types } from "../../reducers/authReducer";

const DropDownMenu = () => {
    const [state, dispatch] = useContext(AuthContext);
    const {
        email, phone, token, user_name, __v, _id
    } = state;

    const logoutHandler = () => {
        dispatch(
            {
                type:types.RESET,
            }
        )

    };

    return (
        <Menu>
            <MenuButton as={"Button"} minH="48px"
            //rightIcon={<ChevronDownIcon />}
            >
                <HStack spacing="12px">
                    <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://placekitten.com/100/100"
                        alt="Fluffybuns the destroyer"
                        mr="12px"
                    />
                    <span>{user_name}</span>
                </HStack>
            </MenuButton>
            <MenuList>
                <MenuItem minH="48px"
                    onClick={() => console.log("FAVOURITE")}>
                    <HStack spacing="12px">
                        <MdFavorite
                            cursor='pointer'
                            color="gray"
                            size="24px"
                        />
                        <span>Favourite</span>
                    </HStack>
                </MenuItem>
                <MenuItem minH="40px"
                    onClick={() => console.log("POST")}>
                    <HStack spacing="12px">
                        <MdBorderColor
                            cursor='pointer'
                            color="gray"
                            size="24px"
                            mr="12px"
                        />
                        <span>Post</span>
                    </HStack>
                </MenuItem>
                <MenuItem minH="40px"
                    onClick={logoutHandler}>
                    <HStack spacing="12px">
                        <MdExitToApp
                            cursor='pointer'
                            color="gray"
                            size="24px"
                            mr="12px"
                        />
                        <span>Logout</span>
                    </HStack>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export { DropDownMenu };
export default DropDownMenu;