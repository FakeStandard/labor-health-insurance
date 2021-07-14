<template>
  <div class="calculator" align="center">
    <!--Header-->
    <h1>
      <span style="font-family: fantasy">2021 </span>
      <span style="font-family: Microsoft JhengHei">勞保投保薪資分級表</span>
    </h1>
    <!--Card-->
    <el-card style="width: 80%">
      <el-row>
        <!--Button-->
        <el-button type="info" plain round @click="openNormal" icon="el-icon-user" style="font-weight: bold">一般勞工</el-button>
        <el-button type="info" plain round @click="openPartial" icon="el-icon-user" style="font-weight: bold">部分工時勞工</el-button>
        <el-button type="info" plain round @click="openTrainee" icon="el-icon-user" style="font-weight: bold">職訓機構受訓者</el-button>
        <el-button type="info" plain round @click="openHandicapped" icon="el-icon-user" style="font-weight: bold">庇護性身心障礙者</el-button>
      </el-row>
      <br/>
      <el-row>
        <!--Table-->
        <!-- <el-table :data="infolist" style="width: 100%" border stripe :header-cell-style="{background:'#5CADAD',color:'#FFFFFF'}"> -->
        <el-table :data="infolist" style="width: 90%;font-size: 15px;" border stripe :header-cell-style="tableHeaderColor">
          <el-table-column prop="Identity" label="身分別" align="center"></el-table-column>
          <el-table-column prop="Level" label="投保薪資等級" align="center"></el-table-column>
          <el-table-column prop="SalaryRange" label="月薪資總額" align="center"></el-table-column>
          <el-table-column prop="InsuredSalaryLevel" label="月投保薪資" align="center"></el-table-column>
        </el-table>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      infolist: [],
      radio1: '上海'
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    // 修改 Table Header 背景色.字體色.字體大小
    tableHeaderColor () {
      return 'background-color: #5CADAD;color: #FFFFFF;'
    },
    // Get json data
    async getInfo () {
      // Get open data
      // const { data: info } = await this.$http.get('https://apiservice.mol.gov.tw/OdService/rest/datastore/A17000000J-020014-q8B').catch(() => {
      //   return this.$message.error('資料取得失敗')
      // })
      // this.infolist = info.result.records

      // 測試用 /static/normal.json
      const { data: info } = await this.$http.get('/labor-health-insurance/static/normal.json').catch(() => {
        return this.$message.error('資料取得失敗')
      })
      this.infolist = info
    },
    // 監聽一般勞工按鈕點擊事件
    async openNormal () {
      await this.$http.get('/labor-health-insurance/static/normal.json')
        .then((res) => {
          this.infolist = res.data
          this.$notify.warning({
            message: '目前切換至【一般勞工】',
            position: 'bottom-right'
          })
        })
        .catch(() => {
          this.$notify.error({
            message: '取得【一般勞工】資料失敗',
            position: 'bottom-right'
          })
        })

      // this.infolist = info
    },
    // 監聽部分工時勞工按鈕點擊事件
    async openPartial () {
      await this.$http.get('labor-health-insurance/static/partial.json')
        .then((res) => {
          this.infolist = res.data
          this.$notify.warning({
            message: '目前切換至【部分工時勞工】',
            position: 'bottom-right'
          })
        })
        .catch(() => {
          this.$notify.error({
            message: '取得【部分工時勞工】資料失敗',
            position: 'bottom-right'
          })
        })
    },
    // 監聽職訓機構受訓者勞工按鈕點擊事件
    async openTrainee () {
      await this.$http.get('labor-health-insurance/static/trainee.json')
        .then((res) => {
          this.infolist = res.data
          this.$notify.warning({
            message: '目前切換至【職訓機構受訓者】',
            position: 'bottom-right'
          })
        })
        .catch(() => {
          this.$notify.error({
            message: '取得【職訓機構受訓者】資料失敗',
            position: 'bottom-right'
          })
        })
    },
    // 監聽職訓機構受訓者勞工按鈕點擊事件
    async openHandicapped () {
      await this.$http.get('labor-health-insurance/static/handicapped.json')
        .then((res) => {
          this.infolist = res.data
          this.$notify.warning({
            message: '目前切換至【庇護性身心障礙者】',
            position: 'bottom-right'
          })
        })
        .catch(() => {
          this.$notify.error({
            message: '取得【庇護性身心障礙者】資料失敗',
            position: 'bottom-right'
          })
        })
    }
  }
}
</script>
