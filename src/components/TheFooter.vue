<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="row justify-content-around">
        <div>
          <img src="@/assets/Store.svg" alt="">
        </div>
        <div class="col-8 col-md-2">
          <h5 class="title">SẢN PHẨM</h5>
          <ul class="list-unstyled">
            <li>
              <a class="footerlink" href="/">Giày Nam</a>
            </li>
            <li>
              <a class="footerlink" href="/">Giày Nữ</a>
            </li>
            <li>
              <a class="footerlink" href="/">Thời trang và phụ kiện</a>
            </li>
            <li>
              <a class="footerlink" href="/">Sale-off</a>
            </li>
          </ul>
        </div>
        <div class="col-8 col-md-2">
          <h5 class="title">VỀ CÔNG TY</h5>
          <ul class="list-unstyled">
            <li>
              <a class="footerlink" href="/">Dứa tuyển dụng</a>
            </li>
            <li>
              <a class="footerlink" href="/">Liên hệ nhượng quyền</a>
            </li>
            <li>
              <a class="footerlink" href="/">Về Ananas</a>
            </li>
          </ul>
        </div>
        <div class="col-8 col-md-2">
          <h5 class="title">HỖ TRỢ</h5>
          <ul class="list-unstyled">
            <li>
              <a class="footerlink" href="/">FAQs</a>
            </li>
            <li>
              <a class="footerlink" href="/">Bảo mật thông tin</a>
            </li>
            <li>
              <a class="footerlink" href="/">Chính sách chung</a>
            </li>
             <li>
              <a class="footerlink" href="/">Tra cứu đơn hàng</a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <h5 class="title">LIÊN HỆ</h5>
          <ul class="list-unstyled">
            <li>
              <a class="footerlink" href="/">Email góp ý</a>
            </li>
            <li>
              <a class="footerlink" href="/">Hotline</a>
            </li>
            <li>
              <a class="footerlink" href="/">0123 456 789</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>


<style scoped>
.footer {
  background-color: #4c4c4c;
  padding: 60px 0 60px 0;
  margin: 20px 0 0 0;
}

.title {
  color: #fff;
  margin-bottom: 20px;
}
.description {
  color: #fff;
}

.footerlink {
  color: #cccccc;
}
.footerlink:hover {
  color: #ff5f17;
  text-decoration-line: none;
}
</style>
