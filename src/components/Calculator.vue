<template>
  <div class="calculator">
    <!--Header-->
    <h1 align="center">
      <span style="font-family: fantasy">2021 </span>
      <span style="font-family: Microsoft JhengHei">勞健保試算</span>
    </h1>
    <!--Table-->
    <el-table :data="info" style="80%" border stripe>
      <!-- <el-table-column prop="a" label="級距"></el-table-column> -->
    </el-table>
  </div>
</template>
