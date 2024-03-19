import { Flex, Grid, Text, Heading } from '@aws-amplify/ui-react'

function About() {
return (
    <section className="about">
        <Flex alignItems="center" justifyContent="center">
            <Grid columnGap="0.5rem" rowGap="0.5rem" templateColumns="1fr" templateRows="1fr">
                <Heading textAlign="center" level={1}>About Us</Heading>
                <Text>Provide a brief overview of your business, its mission, values, and what sets it apart from competitors.</Text>
            </Grid>
        </Flex>
    </section>
);
}

export default About;