import { useRef } from 'react';
import { useDisclosure } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Textarea,
    Input
} from "@chakra-ui/react"
import { defaultAuth } from '../../reducers/authReducer';
import { useForm } from 'react-hook-form';

function PostQuotes({ isOpen, onOpen, piblishQuote, onClose }) {
    // const { isOpen, onOpen, onClose } = useDisclosure();

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting }
    } = useForm();


    const initialRef = useRef();
    const finalRef = useRef();

    async function onSubmit(values) {
        const publish = await piblishQuote(values);
        if (publish) {
            reset();
            onClose();
        }
        // quotePost(values);
    }

    function closeModal() {
        reset();
        onClose();
    }

    return (
        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={closeModal}
        >
            <ModalOverlay />
            <ModalContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalHeader>Post Quotes</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Quotes</FormLabel>
                            <Textarea
                                // ref={initialRef}
                                isInvalid={errors.quote}
                                id="quote"
                                {...register("quote", {
                                    required: "This is required",
                                    minLength: {
                                        value: 25,
                                        message: 'must be 25 character'
                                    }
                                })}
                                placeholder="post your quotes." />
                            <FormErrorMessage>
                                {errors.quote && errors.quote.message}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Author Name</FormLabel>
                            <Input
                                // ref={initialRef}
                                isInvalid={errors.author}
                                id="author"
                                {...register("author", {
                                    required: "This is required",
                                })}
                                placeholder="Author name" />
                            <FormErrorMessage>
                                {errors.author && errors.author.message}
                            </FormErrorMessage>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="teal" mr={3} type="submit">
                            Post
                        </Button>
                        <Button onClick={closeModal}>Cancel</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}

export { PostQuotes };
export default PostQuotes;