<template>
     <el-dialog title="新增" :visible.sync="dialog">
      <el-form :model="newFrockData">
        <!-- <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item> -->
        <!-- sss -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" @click="add()">确 定</el-button>
      </div>
    </el-dialog>
</template>
<script>
export default {
  data () {
    return {
      newFrockData: []
    }
  },
  props: ['dialog'],
  methods: {
    //   取消弹框
    cancel () {
      this.$emit('newFrock', false)
    },
    // 确认新增
    add () {
      this.$emit('newFrock', false)
    }
  }
}
</script>
