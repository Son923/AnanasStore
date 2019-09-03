<template>
<main id="mainContent">
    <b-container class="text-center">
        <h3>DANH MỤC MUA HÀNG</h3>
        <b-row>
            <b-col class="column col-4">
                <p>GIÀY NAM</p>
            </b-col>
            <b-col class="column col-4">
                <p>GIÀY NỮ</p>
            </b-col>
            <b-col class="column col-4">
                <p>DÒNG SẢN PHẨM</p>
            </b-col>
        </b-row>
    </b-container>
</main>
</template>

<script>
export default {
    name: "HomeBuy",
}
</script>

<style scoped>
#mainContent {
    position: relative;
    height: 600px;
    background-color: white;
    padding-top: 80px;
}
.column {
    border: solid 1px;
}

</style>