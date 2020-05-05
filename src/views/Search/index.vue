<template>
  <div class="page-search">
    <div class="mw-wrap g-wrap">
      <div class="m-search-box" id="j-searchBox">
        <div class="search">
          <section class="search_input">
            <div class="input-box">
              <input
                type="search"
                name="搜索"
                placeholder="Python数据分析师的高薪秘籍"
              />
              <span class="chacha" style="display: none;"></span>
            </div>
            <a class="search_btn search_btn-search">搜索</a>
          </section>
          <div class="search_result">
            <ul>
              <!--Regular list-->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="stylus" scoped>
.mw-wrap {
  width: 320px;
  margin: 0 auto;

  .m-search-box .search {
    position: relative;
  }

  .m-search-box .search_input {
    height: 38px;
    background: #f6f6f6;
    display: -ms-flexbox;
    display: flex;
    padding: 4px 0 4px 12px;
  }

  .m-search-box .search_input .input-box {
    width: 256px;
    position: relative;
  }

  .m-search-box .search_input .input-box .chacha {
    height: 0.90667rem;
    padding: 0 0.26667rem;
    width: 0.38667rem;
    position: absolute;
    right: 0;
    top: 0;
    background: transparent url(//edu-image.nosdn.127.net/e0a17106-f495-4410-9920-97863ed3007b.png?imageView&quality=100) center center no-repeat;
    background-size: 0.38667rem 0.38667rem;
  }

  .m-search-box .search_input input {
    display: block;
    width: 256px;
    margin-right: 12px;
    background: #FFF url(//edu-image.nosdn.127.net/d81f836b-b37f-43fa-85de-98acdbc9478b.png?imageView&quality=100) 0.26667rem center no-repeat;
    background-size: 0.32rem 0.32rem;
    border: 0.02667rem solid #E6EAF2;
    border-radius: 30px;
    outline: none;
    box-sizing: border-box;
    height: 30px;
    font-size: 24px;
    color: #3C4A55;
    text-indent: 0.8rem;
  }

  .m-search-box .search_input input::-webkit-input-placeholder {
    color: #ADB2C0;
  }

  .m-search-box .search_btn {
    font-size: 0.4rem;
    color: #333;
    display: block;
    height: 0.90667rem;
    line-height: 0.90667rem;
    text-align: center;
    -ms-flex: 1;
    flex: 1;
  }

  .m-search-box .search_btn-search {
    color: #2CC17B;
  }

  .m-search-box .search_result {
    position: absolute;
    left: 0;
    right: 0;
    top: 1.17333rem;
    background: #fff;
    z-index: 101;
  }

  .m-search-box .search_result ul {
    padding: 0 0.42667rem 0 0.42667rem;
  }

  .m-search-box .search_result li {
    padding: 0.34667rem 0;
    line-height: 0.42667rem;
    height: 0.42667rem;
    font-size: 0.37333rem;
  }

  .m-search-box .search_result .line_1px:after {
    margin-top: 0.34667rem;
  }

  .m-search-box .search_result a {
    color: #3C4A55;
    text-decoration: none;
    height: 0.42667rem;
    display: inline-block;
    max-width: 6.8rem;
    line-height: 0.42667rem;
    vertical-align: middle;
  }

  .m-search-box .search_result i {
    color: #99A4BF;
    font-style: normal;
  }

  .m-search-box .search_result .vip-free {
    width: 2.22667rem;
    height: 0.42667rem;
    vertical-align: middle;
    background: url(//edu-image.nosdn.127.net/9a89d276-82c5-48af-83ee-52a5917e8618.png?imageView&quality=100) no-repeat;
    background-size: contain;
  }

  .m-search-box .search_result .vip-discount {
    width: 2.22667rem;
    height: 0.42667rem;
    vertical-align: middle;
    background: url(//edu-image.nosdn.127.net/93ca1c05-6289-426c-900c-d136f2af10ce.png?imageView&quality=100) no-repeat;
    background-size: contain;
  }

  .m-search-box .search_ctype {
    padding: 0.02667rem 0.10667rem;
    font-size: 0.29333rem;
    color: #fff;
    vertical-align: middle;
    border-radius: 0.05333rem;
  }

  .m-search-box .search_ctype-micro {
    background: #2196f3;
  }

  .m-search-box .search_ctype-series {
    background: #2cc17b;
  }
}
</style>
