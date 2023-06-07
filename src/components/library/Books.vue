<template>
  <div>
    <el-row style="height: 840px;">
      <el-tooltip effect="dark" placement="right"
                  v-for="(item, index) in books"
                  :key="item.id">
        <p slot="content" style="font-size: 14px;margin-bottom: 6px;">{{ item.title }}</p>
        <p slot="content" style="font-size: 13px;margin-bottom: 6px">
          <span>{{ item.author }}</span> /
          <span>{{ item.date }}</span> /
          <span>{{ item.press }}</span>
        </p>
        <p slot="content" style="width: 300px" class="abstract">{{ item.abs }}</p>
        <el-card style="width: 135px;margin-bottom: 20px;height: 233px;float: left;margin-right: 15px" class="book"
                 bodyStyle="padding:10px" shadow="hover">
          <div class="cover">
            <img :src="getBookCover(index)" alt="封面">
          </div>
          <div class="info">
            <div class="title">
              <a href="">{{ item.title }}</a>
            </div>
          </div>
          <div class="author">{{ item.author }}</div>
        </el-card>
      </el-tooltip>
    </el-row>
    <el-row>
      <el-pagination
        :current-page="1"
        :page-size="10"
        :total="20">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Books',
  data () {
    return {
      books: [
        {
          cover: 'https://example.com/cover1.jpg',
          title: '书籍1',
          author: '作者1',
          date: '2023-05-30',
          press: '出版社1',
          abs: '书籍1的摘要'
        },
        {
          cover: 'https://example.com/cover2.jpg',
          title: '书籍2',
          author: '作者2',
          date: '2023-05-30',
          press: '出版社2',
          abs: '书籍2的摘要'
        },
        // 添加更多书籍项...
      ]
    }
  },
  methods: {
    getBookCover(index) {
      const defaultCover = 'https://example.com/default-cover.jpg';
      if (this.books[index] && this.books[index].cover) {
        return this.books[index].cover;
      }
      return defaultCover;
    }
  }
}
</script>

<style scoped>
.cover {
  width: 115px;
  height: 172px;
  margin-bottom: 7px;
  overflow: hidden;
  cursor: pointer;
}

img {
  width: 115px;
  height: 172px;
}

.title {
  font-size: 14px;
  text-align: left;
}

.author {
  color: #333;
  width: 102px;
  font-size: 13px;
  margin-bottom: 6px;
  text-align: left;
}

.abstract {
  display: block;
  line-height: 17px;
}

a {
  text-decoration: none;
}

a:link, a:visited, a:focus {
  color: #3377aa;
}
</style>
