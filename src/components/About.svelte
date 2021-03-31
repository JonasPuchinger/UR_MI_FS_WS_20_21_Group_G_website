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
                <a target="_blank" href="https://drive.google.com/file/d/13rAvD2WbLhOUHAN0lJX3-r1aSpMpygHr/view?usp=sharing">
                    <Button class="pink white-text">Download Paper</Button>
                </a>
            </div>
        </Col>
    </Row>
</Container>