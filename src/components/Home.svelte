<script>
    import { Link } from 'svelte-routing';
    import { Container, Row, Col, Card, CardTitle, CardSubtitle, Icon } from 'svelte-materialify';
    import { mdiGraph, mdiChartLine } from '@mdi/js';
</script>

<style>

</style>

<Container>
    <Row class="align-center" style="height: calc(100vh - 56px - 24px);">
        <Col class="align-self-center col-4 offset-1">
            <Link to="UR_MI_FS_WS_20_21_Group_G_website/visualizations/network">
                <Card outlined hover class="green white-text">
                    <Row class="align-center">
                        <Col class="d-flex justify-center">
                            <Icon class="white-text" size="64px" path={mdiGraph} />
                        </Col>
                    </Row>
                    <CardTitle class="white-text">Network</CardTitle>
                    <CardSubtitle class="white-text">Various network graphs showcasing the clusters of the individual Twitter accounts in our dataset</CardSubtitle>
                </Card>
            </Link>
        </Col>
        <Col class="align-self-center col-4 offset-2">
            <Link to="UR_MI_FS_WS_20_21_Group_G_website/visualizations/covid_vs_twitter">
                <Card outlined hover class="blue white-text">
                    <Row class="align-center">
                        <Col class="d-flex justify-center">
                            <Icon class="white-text" size="64px" path={mdiChartLine} />
                        </Col>
                    </Row>
                    <CardTitle class="white-text">COVID vs Twitter</CardTitle>
                    <CardSubtitle class="white-text">An interactive dashboard showing the number of COVID- and non-COVID-tweets, as well as COVID-19 infections and deaths in Germany throughout 2020</CardSubtitle>
                </Card>
            </Link>
        </Col>
    </Row>
</Container>