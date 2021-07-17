<template>
  <div class="healthGrading" align="center">
    <h1>
      <span style="font-family: fantasy">2021 </span>
      <span style="font-family: Microsoft JhengHei">勞健保及勞退費用對照表</span>
    </h1>
    <!--Card-->
    <el-card style="width: 80%">
      <el-row>
        <!--Table-->
        <!-- <el-table :data="infolist" style="width: 100%" border stripe :header-cell-style="{background:'#5CADAD',color:'#FFFFFF'}"> -->
        <el-table :data="infolist" size="mini" highlight-current-row="true" style="width: 100%;font-size: 15px;" border stripe :header-cell-style="tableHeaderColor">
          <el-table-column prop="Level" label="等級" align="center"></el-table-column>
          <el-table-column prop="InsuredSalaryLevel" label="投保級距" align="center"></el-table-column>
          <el-table-column label="勞保" align="center">
            <el-table-column label="個人" align="center">
              <el-table-column prop="personalAccident" label="普通事故保險費率" align="center"></el-table-column>
              <el-table-column prop="personalEmployment" label="就業保險費率" align="center"></el-table-column>
              <el-table-column prop="personalTotal" label="合計" align="center"></el-table-column>
            </el-table-column>
            <el-table-column label="雇主" align="center">
              <el-table-column prop="hirerAccident" label="普通事故保險費率" align="center"></el-table-column>
              <el-table-column prop="hirerEmployment" label="就業保險費率" align="center"></el-table-column>
              <el-table-column prop="hirerTotal" label="合計" align="center"></el-table-column>
            </el-table-column>
          </el-table-column>
          <el-table-column label="健保" align="center">
            <el-table-column prop="healthPersonal" label="個人" align="center"></el-table-column>
            <el-table-column prop="healthHirer" label="雇主" align="center"></el-table-column>
          </el-table-column>
          <el-table-column prop="WorkOut" label="勞退" align="center"></el-table-column>
          <el-table-column prop="comment" label="備註" align="center" style="color:red"></el-table-column>
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
      workoutCount: 0,
      laborCount: 0
    }
  },
  created () {
    this.getWorkOutLength()
    this.getLaborLength()
    this.getInfo()
  },
  methods: {
    tableHeaderColor () {
      return 'background-color: #7D95B9;color: #FFFFFF;'
    },
    async getWorkOutLength () {
      const { data: workOutInfo } = await this.$http.get('static/labor-workout.json').catch(() => {
        return this.$message.error('資料取得失敗')
      })

      this.workoutCount = workOutInfo.length
    },
    async getLaborLength () {
      const { data: laborInfo } = await this.$http.get('static/labor-normal.json').catch(() => {
        return this.$message.error('資料取得失敗')
      })

      this.laborCount = laborInfo.length
    },
    async getInfo () {
      const { data: info } = await this.$http.get('static/health-grading.json').catch(() => {
        return this.$message.error('資料取得失敗')
      })

      this.infolist = info

      // 健保
      var index = 0
      for (index = 0; index < info.length; index++) {
        // 個人
        this.infolist[index].healthPersonal = Math.round(info[index].InsuredSalaryLevel * (5.17 / 100) * 0.3)
        // 雇主
        this.infolist[index].healthHirer = Math.round(info[index].InsuredSalaryLevel * (5.17 / 100) * (60 / 100) * (1 + 0.58))
      }

      // 勞保
      for (index = 0; index < info.length; index++) {
        if (index >= this.laborCount) {
          // 個人
          this.infolist[index].personalAccident = '-'
          this.infolist[index].personalEmployment = '-'
          this.infolist[index].personalTotal = '-'
          // 雇主
          this.infolist[index].hirerAccident = '-'
          this.infolist[index].hirerEmployment = '-'
          this.infolist[index].hirerTotal = '-'
        } else {
          // 個人
          this.infolist[index].personalAccident = Math.round(info[index].InsuredSalaryLevel * (10.5 / 100) * (20 / 100))
          this.infolist[index].personalEmployment = Math.round(info[index].InsuredSalaryLevel * (1 / 100) * (20 / 100))
          this.infolist[index].personalTotal = Math.round(info[index].InsuredSalaryLevel * (11.5 / 100) * (20 / 100))
          // 雇主
          this.infolist[index].hirerAccident = Math.round(info[index].InsuredSalaryLevel * (10.5 / 100) * (70 / 100))
          this.infolist[index].hirerEmployment = Math.round(info[index].InsuredSalaryLevel * (1 / 100) * (70 / 100))
          this.infolist[index].hirerTotal = Math.round(info[index].InsuredSalaryLevel * (11.5 / 100) * (70 / 100))
        }
      }

      // 勞退
      for (index = 0; index < info.length; index++) {
        if (index >= this.workoutCount) {
          this.infolist[index].WorkOut = '-'
        } else {
          this.infolist[index].WorkOut = Math.round(info[index].InsuredSalaryLevel * (6 / 100))
        }
      }

      this.infolist[this.workoutCount - 1].comment = '勞退最高級距'
      this.infolist[info.length - 1].comment = '健保最高級距'
      this.infolist[this.laborCount - 1].comment = '勞保最高級距'
    }
  }
}
</script>
