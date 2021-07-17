<template>
  <div class="calculation" align="center">
    <!--Header-->
    <h1>
      <span style="font-family: fantasy">2021 </span>
      <span style="font-family: Microsoft JhengHei">薪資即時試算</span>
    </h1>
    <el-input
      v-model="input"
      prefix-icon="el-icon-money"
      size="large"
      style="width: 20%"
      placeholder="請輸入本薪"
      maxlength="10"
      @input="changeInput"
    ></el-input>
    <el-row>
      <input type="checkbox" id="ck" @click="checkChange" />
      <label for="ck"> 有自提 6% 勞工退休金 </label><br />
    </el-row>
    <!--Card-->
    <el-container>
      <!--Labor-->
      <el-col>
        <el-card>
          <h2>勞保</h2>
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="12"><span>投保級距</span></el-col>
            <el-col :span="12"
              ><span>{{ labor.level }}</span></el-col
            >
          </el-row>
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="12"><span>政府負擔 10%</span></el-col>
            <el-col :span="12"
              ><span>{{ labor.government }}</span></el-col
            >
          </el-row>
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="12"><span>雇主負擔 70%</span></el-col>
            <el-col :span="12"
              ><span>{{ labor.hirer }}</span></el-col
            >
          </el-row>
          <el-row
            type="flex"
            id="red-style"
            class="row-bg"
            justify="space-around"
          >
            <el-col :span="12"><span>個人負擔 20%</span></el-col>
            <el-col :span="12"
              ><span>{{ labor.personal }}</span></el-col
            >
          </el-row>
          <el-divider></el-divider>
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="12"><span>合計</span></el-col>
            <el-col :span="12"
              ><span>{{ labor.total }}</span></el-col
            >
          </el-row>
        </el-card>
        <span id="blue-style"
          >2021.1.1<br />普通事故保險費率從10%調整為10.5%<br />就業保險費率1%<br />故勞保費率為11.5%</span
        >
      </el-col>
      <!--Health-->
      <el-col>
        <el-card>
          <h2>健保</h2>
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="12"><span>投保級距</span></el-col>
            <el-col :span="12"
              ><span>{{ health.level }}</span></el-col
            >
          </el-row>
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="12"><span>政府負擔 10%</span></el-col>
            <el-col :span="12"
              ><span>{{ health.government }}</span></el-col
            >
          </el-row>
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="12"><span>雇主負擔 60%</span></el-col>
            <el-col :span="12"
              ><span>{{ health.hirer }}</span></el-col
            >
          </el-row>
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="12"><span>扶養眷屬</span></el-col>
            <el-col :span="12">
              <el-input-number v-model="health.dependents" @change="handleChange" :min="0"  size="small"></el-input-number>
            </el-col>
          </el-row>
          <el-row
            type="flex"
            id="red-style"
            class="row-bg"
            justify="space-around"
          >
            <el-col :span="12"><span>個人負擔 30%</span></el-col>
            <el-col :span="12"
              ><span>{{ health.personal }}</span></el-col
            >
          </el-row>
          <el-divider></el-divider>
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="12"><span>合計</span></el-col>
            <el-col :span="12"
              ><span>{{ health.total }}</span></el-col
            >
          </el-row>
        </el-card>
        <span id="blue-style"
          >2021.1.1<br />衛福部公布最新健保費率從4.69%調漲至5.17%</span
        >
      </el-col>
      <!--Work out-->
      <el-col id="box">
        <!--勞退 6%-->
        <el-card>
          <h2>勞退 6%</h2>
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="12"><span>投保級距</span></el-col>
            <el-col :span="12"
              ><span>{{ workout.level }}</span></el-col
            >
          </el-row>
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="12"><span>雇主負擔</span></el-col>
            <el-col :span="12"
              ><span>{{ workout.hirer }}</span></el-col
            >
          </el-row>
        </el-card>
        <!--自提 6%-->
        <el-card>
          <h2>自提 6%</h2>
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="12"><span>投保級距</span></el-col>
            <el-col :span="12"
              ><span>{{ workout.personallevel }}</span></el-col
            >
          </el-row>
          <el-row
            type="flex"
            id="red-style"
            class="row-bg"
            justify="space-around"
          >
            <el-col :span="12"><span>個人負擔</span></el-col>
            <el-col :span="12"
              ><span>{{ workout.personal }}</span></el-col
            >
          </el-row>
        </el-card>
      </el-col>
      <!--Information-->
      <el-col>
        <el-card>
          <h2>個人統計</h2>
          <el-row
            type="flex"
            id="green-style"
            class="row-bg"
            justify="space-around"
          >
            <el-col :span="12"><span>本薪</span></el-col>
            <el-col :span="12"
              ><span>{{ input }}</span></el-col
            >
          </el-row>
          <el-row
            type="flex"
            id="red-style"
            class="row-bg"
            justify="space-around"
          >
            <el-col :span="12"><span>- 勞保負擔</span></el-col>
            <el-col :span="12"
              ><span>{{ labor.personal }}</span></el-col
            >
          </el-row>
          <el-row
            type="flex"
            id="red-style"
            class="row-bg"
            justify="space-around"
          >
            <el-col :span="12"><span>- 健保負擔</span></el-col>
            <el-col :span="12"
              ><span>{{ health.personal }}</span></el-col
            >
          </el-row>
          <el-row
            type="flex"
            id="red-style"
            class="row-bg"
            justify="space-around"
          >
            <el-col :span="12"><span>- 自提 6%</span></el-col>
            <el-col :span="12"
              ><span>{{ workout.personal }}</span></el-col
            >
          </el-row>
          <el-divider></el-divider>
          <el-row
            type="flex"
            id="green-style"
            class="row-bg"
            justify="space-around"
          >
            <el-col :span="12"><span>實領薪資</span></el-col>
            <el-col :span="12"
              ><span>{{
                input - labor.personal - health.personal - workout.personal
              }}</span></el-col
            >
          </el-row>
        </el-card>
      </el-col>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      health: {
        level: 0,
        government: 0,
        hirer: 0,
        dependents: 0,
        personal: 0,
        total: 0
      },
      labor: {
        level: 0,
        government: 0,
        hirer: 0,
        personal: 0,
        total: 0
      },
      workout: {
        level: 0,
        hirer: 0,
        personallevel: 0,
        personal: 0
      },
      checked: false
    }
  },
  methods: {
    // 監聽輸入框
    async changeInput (s, n) {
      if (this.input !== '') {
        this.getHealthInfo()
        this.getLaborInfo()
        this.getLaborWorkOutInfo()
        if (this.checked === true) {
          this.workout.personallevel = this.workout.level
          this.workout.personal = this.workout.hirer
        }
      } else {
        this.health.level = 0
        this.health.government = 0
        this.health.hirer = 0
        this.health.dependents = 0
        this.health.personal = 0
        this.health.total = 0
        this.labor.level = 0
        this.labor.government = 0
        this.labor.hirer = 0
        this.labor.personal = 0
        this.labor.total = 0
        this.workout.level = 0
        this.workout.hirer = 0
        this.workout.personal = 0
      }
    },
    // 健保資訊
    async getHealthInfo () {
      const { data: healthInfo } = await this.$http
        .get('static/health-grading.json')
        .catch(() => {
          return this.$message.error('資料取得失敗')
        })

      var salary = parseInt(this.input)

      // 級距
      this.health.level = parseInt(
        healthInfo[healthInfo.length - 1].InsuredSalaryLevel
      )
      for (var index = healthInfo.length - 1; index >= 0; index--) {
        if (salary < parseInt(healthInfo[index].InsuredSalaryLevel)) {
          this.health.level = parseInt(healthInfo[index].InsuredSalaryLevel)
        }
      }

      // 個人負擔
      // 眷屬人數超過三口的以三口計算
      // 投保金額 * 保險費率（5.17%）* 負擔比率（小數點後先四捨五入）* (本人+眷屬人數)
      var single = Math.round(this.health.level * (5.17 / 100) * 0.3)
      var count = 1 + this.health.dependents
      if (count > 4) this.health.personal = single * 4
      else this.health.personal = single * count

      // 雇主負擔
      // 平均眷口數 109年1月1日起調整為0.58人
      this.health.hirer = Math.round(
        this.health.level * (5.17 / 100) * (60 / 100) * (1 + 0.58)
      )

      // 政府負擔
      this.health.government = Math.round(
        this.health.level * (5.17 / 100) * (10 / 100) * (1 + 0.58)
      )

      // 合計
      this.health.total =
        this.health.government + this.health.hirer + this.health.personal
    },
    // 勞保資訊
    async getLaborInfo () {
      const { data: laborInfo } = await this.$http
        .get('static/labor-normal.json')
        .catch(() => {
          return this.$message.error('資料取得失敗')
        })

      var salary = parseInt(this.input)

      // 級距
      this.labor.level = parseInt(
        laborInfo[laborInfo.length - 1].InsuredSalaryLevel
      )
      for (var index = laborInfo.length - 1; index >= 0; index--) {
        if (salary < parseInt(laborInfo[index].InsuredSalaryLevel)) {
          this.labor.level = parseInt(laborInfo[index].InsuredSalaryLevel)
        }
      }

      // 勞保費率(11.5%) = 普通事故保險費率(10.5%) + 就業保險費率(1%)

      // 個人負擔
      this.labor.personal = Math.round(
        this.labor.level * (11.5 / 100) * (20 / 100)
      )

      // 雇主負擔
      this.labor.hirer = Math.round(
        this.labor.level * (11.5 / 100) * (70 / 100)
      )

      // 政府負擔
      this.labor.government = Math.round(
        this.labor.level * (11.5 / 100) * (10 / 100)
      )

      // 合計
      this.labor.total =
        this.labor.personal + this.labor.hirer + this.labor.government
    },
    // 勞退資訊
    async getLaborWorkOutInfo () {
      const { data: workoutInfo } = await this.$http
        .get('static/labor-workout.json')
        .catch(() => {
          return this.$message.error('資料取得失敗')
        })

      // 級距
      var salary = parseInt(this.input)

      this.workout.level = parseInt(
        workoutInfo[workoutInfo.length - 1].InsuredSalaryLevel
      )
      for (var index = workoutInfo.length - 1; index >= 0; index--) {
        if (salary < parseInt(workoutInfo[index].InsuredSalaryLevel)) {
          this.workout.level = parseInt(workoutInfo[index].InsuredSalaryLevel)
        }
      }
      this.workout.hirer = this.workout.level * (6 / 100)
    },
    // 監聽 Checkbox
    checkChange () {
      if (this.checked) {
        this.workout.personallevel = 0
        this.workout.personal = 0
        this.checked = false
      } else {
        this.workout.personallevel = this.workout.level
        this.workout.personal = this.workout.hirer
        this.checked = true
      }
    },
    // 監聽計數器
    handleChange () {
      // 個人負擔
      // 眷屬人數超過三口的以三口計算
      // 投保金額 * 保險費率（5.17%）* 負擔比率（小數點後先四捨五入）* (本人+眷屬人數)
      var single = Math.round(this.health.level * (5.17 / 100) * 0.3)
      var count = 1 + this.health.dependents
      if (count > 4) this.health.personal = single * 4
      else this.health.personal = single * count
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-top: 30px;
  margin-bottom: 10px;
}

.el-card {
  width: 80%;
  margin: 50px;
}

.el-card .el-row {
  font-size: 18px;
}

#red-style {
  color: red;
  font-weight: bold;
}

#green-style {
  color: rgb(42, 161, 42);
  font-weight: bold;
}

#blue-style {
  color: blue;
  font-weight: bold;
}

#box {
  display: flex;
  flex-direction: column;
}
</style>
