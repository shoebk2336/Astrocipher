        "use client";
        import { createTheme } from "@mantine/core";

        export const theme = createTheme({
            fontFamily: 'Open Sans, sans-serif',
            primaryColor: 'cyan', // Mantine expects a solid color here, but we'll override it with a gradient
            components: {
            Button: {
                styles: {
                root: {
                    backgroundImage: ' linear-gradient(90deg, rgba(80,80,208,1) 0%, rgba(70,18,65,1) 100%)',
                    color: '#fff', // Text color
                    '&:hover': {
                    backgroundImage: 'linear-gradient(45deg, #feb47b 0%, #ff7e5f 100%)',
                    },
                },
                },
            },
            },
        });