import { Anchor, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './FooterCentered.module.css';
import Image from 'next/image';
import logo from '../../utils/images/astro_logo.png'
import Gradient from '../../page.module.css'

const links = [
{ link: '#', label: 'Contact' },
{ link: '#', label: 'Privacy' },
{ link: '#', label: 'Blog' },
{ link: '#', label: 'Store' },
{ link: '#', label: 'Careers' },
];

export function FooterCentered() {
const items = links.map((link) => (
    <Anchor
    c="white"
    key={link.label}
    href={link.link}
    lh={1}
    // onClick={(event) => event.preventDefault()}
    size="sm"
    >
    {link.label}
    </Anchor>
));

return (
    <div className={`${classes.footer} ${Gradient.bg_gradient}`}>
    <div className={classes.inner}>
        <Group className={classes.links}>{items}</Group>
        <Image src={logo} alt='logo' width={130} height={100} style={{border:"0px solid white"}}/>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
        <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </ActionIcon>
        <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </ActionIcon>
        <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </ActionIcon>
        </Group>
    </div>
    </div>
);
}