<template>
  <div class="calculator" align="center">
    <!--Header-->
    <h1>
      <span style="font-family: fantasy">2021 </span>
      <span style="font-family: Microsoft JhengHei">勞健保試算</span>
    </h1>
    <!--Card-->
    <el-card style="width: 80%">
      <!--Table-->
      <el-table :data="infolist" style="width: 100%" border stripe>
        <el-table-column
          prop="身分別"
          label="身分別"
          header-align="center"
        ></el-table-column>
        <el-table-column
          prop="投保薪資等級"
          label="投保薪資等級"
          header-align="center"
        ></el-table-column>
        <el-table-column
          prop="月薪資總額"
          label="月薪資總額"
          header-align="center"
        ></el-table-column>
        <el-table-column
          prop="月投保薪資"
          label="月投保薪資"
          header-align="center"
        ></el-table-column>
      </el-table>
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
    // Get open data
    async getInfo () {
      // const { data: info } = await this.axios.get('https://apiservice.mol.gov.tw/OdService/rest/datastore/A17000000J-020014-q8B')
      const { data: info } = await this.$http.get('https://apiservice.mol.gov.tw/OdService/rest/datastore/A17000000J-020014-q8B').catch(() => {
        return this.$message.error('資料取得失敗')
      })
      this.infolist = info.result.records
    }
  }
}
</script>
