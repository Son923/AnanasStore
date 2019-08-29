<template>
<div>
    <main id="mainContent">
        <b-container class="text-center home-collection">
            <b-row>
                <b-col class="column">
                    <h1>Col 1</h1>
                </b-col>
                <b-col class="column">
                    <h1>OUTLET SALE</h1>
                </b-col>
            </b-row>
        </b-container>
    </main>
</div>
</template>

<script>
export default {
    name: "HomeContainer",
}
</script>

<style scoped>
#mainContent {
    position: relative;
    height: 300px;
    background-color: white;
    padding-top: 20px;
}
.column {
    background-color: antiquewhite;
}
</style>