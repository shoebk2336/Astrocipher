"use client"

import { useState } from 'react';
import { Container, Group, Burger, Flex, Center } from '@mantine/core';
import  Image  from 'next/image';
import { useDisclosure } from '@mantine/hooks';
import logo from '../../utils/images/astro_logo.png'
import classes from './Navbar.module.css';
import Gradient from '../../page.module.css'
import { useMediaQuery } from '@mantine/hooks';

const links = [
{ link: '/about', label: 'Features' },
{ link: '/pricing', label: 'Pricing' },
{ link: '/learn', label: 'Learn' },
{ link: '/community', label: 'Community' },
];

export function Navbar() {
const [opened, { toggle }] = useDisclosure(false);
const [active, setActive] = useState(links[0].link);

const items = links.map((link) => (
    <a
    key={link.label}
    href={link.link}
    className={classes.link}
    data-active={active === link.link || undefined}
    onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
    }}
    >
    {link.label}
    </a>
));

return (
    <header className={`${classes.header} ${Gradient.bg_gradient}`}  >
    <Container size="md" className={classes.inner} >

        <Image src={logo} alt='logo' width={180} height={150}  />

        <Group gap={5} visibleFrom="xs">
        {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" color='white' />

    </Container>
    </header>
);
}