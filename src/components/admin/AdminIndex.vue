<template>
  <el-container id="admin-body" class="admin-container">
    <el-header>
      <Header />
    </el-header>
    <el-container>
      <el-aside class="admin-aside">
        <admin-menu />
      </el-aside>
      <el-main>
        <admin-main />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AdminMenu from './AdminMenu'
import Header from './Header'
import AdminMain from './AdminMain'

export default {
  name: 'AdminIndex',
  components: { AdminMenu, Header, AdminMain},
  data() {
    return {
      dialogVisible: false
    }
  },
}
</script>

<style scoped>
#admin-body {
  height: 95vh;
}

.admin-container {
  display: flex;
  flex-direction: column;
}

.el-container {
  flex: 1;
  display: flex;
}

.admin-aside {
  flex: 0 0 250px;
  height: 100%;
}

.admin-main {
  flex: 1;
}
</style>
