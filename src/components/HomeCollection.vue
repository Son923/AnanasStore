<template>
<div>
    <main id="mainContent">
        <b-container class="home-collection">
            <b-row>
                <b-col class="column col-6">
                    <carousel :perPage="1" :autoplay="true" :loop="true" :paginationEnabled="false">
                        <slide>
                            <img src="@/assets/bannernho_popup.jpg" alt="">
                            <a href=""><h3>ANANAS URBAS POP-UP PACK</h3></a>
                            <p>Xuất hiện bất ngờ và đầy màu sắc, Ananas Urbas Pop-up Pack lên kệ và thổi hồn tươi mát cho outfit của bạn ngay trong hè này.</p>
                        </slide>
                        <slide>
                            <img src="@/assets/bannernho_theocean.jpg" alt="">
                            <a href=""><h3>ANANAS URBAS THE OCEAN PACK</h3></a>
                            <p>Ứng dụng các màu sắc ấn tượng từ bên dưới đại dương như Poseidon - xanh Thần Biển, và Living Coral - cam san hô sống động. Hơi thở tươi mát của biển cả theo chân bạn đi bất cứ nơi đâu.</p>
                        </slide>
                        <slide>
                            <img src="@/assets/IMG_9453_retouch.jpg" alt="">
                            <a href=""><h3>BÌNH MỚI RƯỢU "MỚI"</h3></a>
                            <p>Vẫn kế thừa vẻ tối giản, nguyên bản đã được định hướng bởi cái tên, Basas mới trở lại với những cải tiến đáng giá chắc chắn sẽ đem đến một trải nghiệm thú vị như hành trình chúng tôi làm ra nó.</p>
                        </slide>
                        <stylish-navigation slot="navigation" />
                    </carousel>
                </b-col>
                <b-col class="column col-6">
                    <img src="@/assets/Banner_Sale-off-1.jpg" alt="">
                    <a href=""><h3>OUTLET SALE</h3></a>
                    <p>Danh mục những sản phẩm bán tại Outlet Store, đã được phát hành trước một thời gian và đang rơi vào tình trạng bể size, hết mã.</p>
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
    height: 600px;
    background-color: white;
    padding-top: 80px;
}
.column {
    /* border: solid 1px; */
}
img {
    width: 100%;
    height: auto;
    margin-bottom: 25px;
}
a {
    color: black;
}
a:hover {
    color: #ff5f17;
    text-decoration-line: none;
}
</style>