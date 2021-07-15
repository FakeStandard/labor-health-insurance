<template>
  <div class="laborGrading" align="center">
    <!--Header-->
    <h1>
      <span style="font-family: fantasy">2021 </span>
      <span style="font-family: Microsoft JhengHei">全民健康保險投保金額分級表</span>
    </h1>
    <!--Card-->
    <el-card style="width: 80%">
      <el-row>
        <!--Table-->
        <!-- <el-table :data="infolist" style="width: 100%" border stripe :header-cell-style="{background:'#5CADAD',color:'#FFFFFF'}"> -->
        <el-table :data="infolist" style="width: 80%;font-size: 15px;" border stripe :header-cell-style="tableHeaderColor">
          <el-table-column prop="Distance" label="組別級距" align="center"></el-table-column>
          <el-table-column prop="Level" label="投保等級" align="center"></el-table-column>
          <el-table-column prop="InsuredSalaryLevel" label="月投保金額（元）" align="center"></el-table-column>
          <el-table-column prop="SalaryRange" label="實際薪資月額（元）
" align="center"></el-table-column>
        </el-table>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      infolist: []
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    // 修改 Table Header 背景色.字體色.字體大小
    tableHeaderColor () {
      return 'background-color: #AD8F09;color: #FFFFFF;'
    },
    // Get json data
    async getInfo () {
      // Get open data
      // const { data: info } = await this.$http.get('https://apiservice.mol.gov.tw/OdService/rest/datastore/A17000000J-020014-q8B').catch(() => {
      //   return this.$message.error('資料取得失敗')
      // })
      // this.infolist = info.result.records

      const { data: info } = await this.$http.get('static/health-grading.json').catch(() => {
        return this.$message.error('資料取得失敗')
      })
      this.infolist = info
    }
  }
}
</script>
