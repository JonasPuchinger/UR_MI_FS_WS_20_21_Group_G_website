<script>
    import { Container, Row, Col, Avatar, Button } from 'svelte-materialify';
</script>

<style>

</style>

<Container>
    <Row class="align-center" style="height: calc((100vh - 56px - 24px) / 2);">
        <Col class="d-flex justify-space-around col-6 offset-3">
            <div class="d-flex flex-column align-center justify-space-between">
                <Avatar class="blue white-text"><b>JP</b></Avatar>  
                <p>Jonas Puchinger</p>
            </div>
            <div class="d-flex flex-column align-center justify-space-between">
                <Avatar class="green white-text"><b>SR</b></Avatar>  
                <p>Sabine Roth</p>
            </div>
            <div class="d-flex flex-column align-center justify-space-between">
                <Avatar class="red white-text"><b>TS</b></Avatar>  
                <p>Theresa Strohmeier</p>
            </div>
        </Col>
    </Row>
    <Row class="align-center" style="height: calc((100vh - 56px - 24px) / 2);">
        <Col class="d-flex justify-center col-6 offset-3">
            <div class="d-flex flex-column align-center">
                <a href="https://github.com/JonasPuchinger/assets/raw/master/fs_group_g_website/German_Politicians_Usage_of_Twitter_during_the_COVID_19_Pandemic.pdf">
                    <Button class="color-primary white-text">Download Paper</Button>
                </a>
            </div>
        </Col>
    </Row>
</Container>