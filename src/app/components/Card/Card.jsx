'use client'

import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme,
    Button,
} from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import classes from './FeaturesCards.module.css';

const mockdata = [
    {
    title: 'Innovative Web Design & Development',
    description:
        "Craft stunning, user-friendly websites that captivate your audience and drive results.",
    icon: IconGauge,
    },
    {
    title: 'Advanced Data Visualization & Analysis',
    description:
    'Transform complex data into actionable insights with interactive dashboards and in-depth analytics.',    
    icon: IconUser,
    },
    {
    title: 'Efficient BPO Services',
    description:
        'Outsource your business processes to enhance efficiency and focus on what matters most.',
    icon: IconCookie,
    },
    {
        title: 'Creative Logo Design & Branding',
        description:
            'Design a memorable logo and cohesive brand identity that sets you apart from the competition.',
        icon: IconGauge,
        },
        {
        title: 'Expert Figma Design Services',
        description:
            'Create high-fidelity prototypes and user interfaces with precision and creativity using Figma.',
        icon: IconUser,
        },
        {
        title: 'No third parties',
        description:
            'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
        icon: IconCookie,
        },
];

export function FeaturesCards() {
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
        />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
        </Text>
    </Card>
    ));

    return (
    <Container  py="xl" style={{border:'0px solid red' }} size='xxl'>
        <Group justify="center">
        <Badge variant="filled" size="lg">
            Best company ever
        </Badge>
        </Group>

        <Title order={2} className={classes.title} ta="center" mt="sm">
        Integrate effortlessly with any technology stack
        </Title>

        <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
        hunger drives it to try biting a Steel-type Pokémon.
        </Text>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
        </SimpleGrid>
        
        <Button
        style={{background:'white' ,color:"black",padding:'15px'}}
        >Ready to elevate your business?</Button>
    </Container>
    );
}