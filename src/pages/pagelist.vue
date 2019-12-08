<template>
  <div>
    <el-main :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      height="300px"
      border
      stripe
      style="width: 100%"
      >
      <ul>
        <li v-for="item of tableData" :key="item.name" v-show="false">{{item.name}}</li>
      </ul>
    </el-main>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1, 2, 3, 4]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalNum">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pagelist',
  data () {
    return {
      // tableData: [],
      currentPage: 1,
      pageSize: 1,
      totalNum: 1000,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1518 弄',
        isShow: 'true'
      }, {
        date: '2016-05-04',
        name: '王小虎2',
        address: '上海市普陀区金沙江路 1517 弄',
        isShow: 'true'
      }, {
        date: '2016-05-01',
        name: '王小虎3',
        address: '上海市普陀区金沙江路 1519 弄',
        isShow: 'false'
      }, {
        date: '2016-05-03',
        name: '王小虎4',
        address: '上海市普陀区金沙江路 1516 弄',
        isShow: 'false'
      }]
    }
  },
  created () {
    this.totalNum = this.tableData.length
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageSize = val
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
    }
  }
}
</script>

<style scoped>

</style>
