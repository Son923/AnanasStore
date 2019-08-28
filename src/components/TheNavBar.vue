//TODO Web Template Studio: Add a new link in the NavBar for your page here.
// A skip link is included as an accesibility best practice. For more information visit https://www.w3.org/WAI/WCAG21/Techniques/general/G1.
<template>
  <div>
    <b-nav class="navbar navbar-expand-sm navbar-light border-bottom justify-content-between">
      <b-container id="nav-bar">
        <a href="">
          <img src="@/assets/Logo_Ananas_Header.svg" alt="">
        </a>
        <div class="navbar-nav">
          <b-nav-item id="test" class="item nav-item nav-link active" to="/Blank">SẢN PHẨM</b-nav-item>
          <b-nav-item class="line"></b-nav-item>
          <b-nav-item class="item nav-item nav-link active" to="/Grid">NAM</b-nav-item>
          <b-nav-item class="line"></b-nav-item>
          <b-nav-item class="item nav-item nav-link active" to="/Blank4">NỮ</b-nav-item>
          <b-nav-item class="line"></b-nav-item>
          <b-nav-item class="item nav-item nav-link active" to="/List">SALE OFF</b-nav-item>
          <b-nav-item class="line"></b-nav-item>
          <b-nav-item id="discover-you" class="item nav-item nav-link active" to="/Master_Detail">
            <img src="@/assets/DiscoverYOU.svg" alt="">
          </b-nav-item>
        </div>
        <div class="search">
          <div class="search-box">
            <input class="search-txt" type="text" placeholder="Type to search">
            <a class="search-btn">
                <i class="fas fa-search"></i>
            </a>
          </div>
        </div>
      </b-container>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "TheNavBar"
};
</script>

<style scoped>
.search-box {
    background-color: #F15E2C;
    border-radius: 40px;
    height: 40px;
    padding: 10px;
    margin: 0;
    padding: 0;
}
.search-box:hover > .search-txt {
    width: 240px;
    padding: 0 20px;
}
.search-box:hover > .search-btn {
    color: white;
}
.search-btn {
    color: white;
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #F15E2C;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
}
.search-txt {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: white;
    font-size: 16px;
    transition: 0.4s;
    line-height: 40px;
    width: 0px;
}
.search-txt::placeholder {
  color: white;
  opacity: 0.7;
}
.navbar-nav .item {
  font-size: 23px;
  font-weight: 600;
  color: #F15E2C !important;
}
.navbar-nav .line {
  border: #e3e2e2 1px solid;
  height: 23px;
  margin-top: 20px;
  width: 1px;
}
#discover-you {
  position: relative;
  bottom: 5px;
}
</style>
