<template>
  <div>
    <div
      :tableData="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
    >
    </div>
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
    <el-image
      src="~assets/images/位图1_282_180.png"
      fit="fit"
      ></el-image>
  </div>
</template>

<script>
export default {
  name: 'pagelist',
  data () {
    return {
      currentPage: 1, // 当前页数
      pageSize: 3, // 每页显示条目个数
      totalNum: null,
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
      console.log(this.tableData.length)
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
