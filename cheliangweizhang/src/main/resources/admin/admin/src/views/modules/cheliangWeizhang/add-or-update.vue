<template>
    <div class="addEdit-block">
        <el-form
                class="detail-form-content"
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="auto"
                >
            <el-row>
                <el-col :span="12"  v-if="sessionTable !='cheliang'">
                    <el-form-item class="select" v-if="type!='info'"  label="车辆" prop="cheliangId">
                        <el-select v-model="ruleForm.cheliangId" :disabled="ro.cheliangId" filterable placeholder="请选择车辆" @change="cheliangChange">
                            <el-option
                                    v-for="(item,index) in cheliangOptions"
                                    v-bind:key="item.id"
                                    :label="item.cheliangName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='cheliang' ">
                    <el-form-item class="input" v-if="type!='info'"  label="车辆名称" prop="cheliangName">
                        <el-input v-model="cheliangForm.cheliangName"
                                  placeholder="车辆名称" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="车辆名称" prop="cheliangName">
                            <el-input v-model="ruleForm.cheliangName"
                                      placeholder="车辆名称" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='cheliang' ">
                    <el-form-item class="input" v-if="type!='info'"  label="车辆编号" prop="cheliangUuidNumber">
                        <el-input v-model="cheliangForm.cheliangUuidNumber"
                                  placeholder="车辆编号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="车辆编号" prop="cheliangUuidNumber">
                            <el-input v-model="ruleForm.cheliangUuidNumber"
                                      placeholder="车辆编号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12" v-if="sessionTable !='cheliang' ">
                    <el-form-item class="upload" v-if="type!='info' && !ro.cheliangPhoto" label="车辆照片" prop="cheliangPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (cheliangForm.cheliangPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.cheliangPhoto" label="车辆照片" prop="cheliangPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.cheliangPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='cheliang' ">
                    <el-form-item class="input" v-if="type!='info'"  label="车辆类型" prop="cheliangValue">
                        <el-input v-model="cheliangForm.cheliangValue"
                                  placeholder="车辆类型" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="车辆类型" prop="cheliangValue">
                            <el-input v-model="ruleForm.cheliangValue"
                                      placeholder="车辆类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='cheliang' ">
                    <el-form-item class="input" v-if="type!='info'"  label="车牌号" prop="cheliangChepai">
                        <el-input v-model="cheliangForm.cheliangChepai"
                                  placeholder="车牌号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="车牌号" prop="cheliangChepai">
                            <el-input v-model="ruleForm.cheliangChepai"
                                      placeholder="车牌号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='cheliang' ">
                    <el-form-item class="input" v-if="type!='info'"  label="车辆颜色" prop="cheliangYanse">
                        <el-input v-model="cheliangForm.cheliangYanse"
                                  placeholder="车辆颜色" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="车辆颜色" prop="cheliangYanse">
                            <el-input v-model="ruleForm.cheliangYanse"
                                      placeholder="车辆颜色" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='cheliang' ">
                    <el-form-item class="input" v-if="type!='info'"  label="品牌" prop="cheliangPinpai">
                        <el-input v-model="cheliangForm.cheliangPinpai"
                                  placeholder="品牌" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="品牌" prop="cheliangPinpai">
                            <el-input v-model="ruleForm.cheliangPinpai"
                                      placeholder="品牌" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='cheliang' ">
                    <el-form-item class="input" v-if="type!='info'"  label="车座" prop="cheliangChezuo">
                        <el-input v-model="cheliangForm.cheliangChezuo"
                                  placeholder="车座" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="车座" prop="cheliangChezuo">
                            <el-input v-model="ruleForm.cheliangChezuo"
                                      placeholder="车座" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
<!--                <el-col :span="12"  v-if="sessionTable !='yonghu'">
                    <el-form-item class="select" v-if="type!='info'"  label="用户" prop="yonghuId">
                        <el-select v-model="ruleForm.yonghuId" :disabled="ro.yonghuId" filterable placeholder="请选择用户" @change="yonghuChange">
                            <el-option
                                    v-for="(item,index) in yonghuOptions"
                                    v-bind:key="item.id"
                                    :label="item.yonghuName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>-->

              <el-col :span="12">
                <div v-if="type=='info'">
                        <el-form-item class="input" label="用户姓名" prop="yonghuName">
                            <el-input v-model="ruleForm.yonghuName"
                                      placeholder="用户姓名" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
              <el-col :span="12">
                <div v-if="type=='info'">
                        <el-form-item class="input" label="用户手机号" prop="yonghuPhone">
                            <el-input v-model="ruleForm.yonghuPhone"
                                      placeholder="用户手机号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
              <el-col :span="12">
                <div v-if="type=='info'">
                        <el-form-item class="input" label="用户身份证号" prop="yonghuIdNumber">
                            <el-input v-model="ruleForm.yonghuIdNumber"
                                      placeholder="用户身份证号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
              <el-col :span="12">
                <div v-if="type=='info'">
                        <el-form-item v-if="ruleForm.yonghuPhoto" label="用户头像" prop="yonghuPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.yonghuPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
              <el-col :span="12">
                <div v-if="type=='info'">
                        <el-form-item class="input" label="用户邮箱" prop="yonghuEmail">
                            <el-input v-model="ruleForm.yonghuEmail"
                                      placeholder="用户邮箱" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <input id="updateId" name="id" type="hidden">
            <input id="cheliangId" name="cheliangId" type="hidden">
            <input id="yonghuId" name="yonghuId" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="车辆违章编号" prop="cheliangWeizhangUuidNumber">
                       <el-input v-model="ruleForm.cheliangWeizhangUuidNumber"
                                 placeholder="车辆违章编号" clearable  :readonly="ro.cheliangWeizhangUuidNumber"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="车辆违章编号" prop="cheliangWeizhangUuidNumber">
                           <el-input v-model="ruleForm.cheliangWeizhangUuidNumber"
                                     placeholder="车辆违章编号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="违章标题" prop="cheliangWeizhangName">
                       <el-input v-model="ruleForm.cheliangWeizhangName"
                                 placeholder="违章标题" clearable  :readonly="ro.cheliangWeizhangName"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="违章标题" prop="cheliangWeizhangName">
                           <el-input v-model="ruleForm.cheliangWeizhangName"
                                     placeholder="违章标题" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="upload" v-if="type!='info' && !ro.cheliangWeizhangPhoto" label="违章照片" prop="cheliangWeizhangPhoto">
                        <file-upload
                            tip="点击上传违章照片"
                            action="file/upload"
                            :limit="3"
                            :multiple="true"
                            :fileUrls="ruleForm.cheliangWeizhangPhoto?$base.url+ruleForm.cheliangWeizhangPhoto:''"
                            @change="cheliangWeizhangPhotoUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.cheliangWeizhangPhoto" label="违章照片" prop="cheliangWeizhangPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.cheliangWeizhangPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="upload" v-if="type!='info' && !ro.cheliangWeizhangVideo" label="违章视频" prop="cheliangWeizhangVideo">
                        <file-upload
                            tip="点击上传违章视频"
                            action="file/upload"
                            :limit="3"
                            :multiple="true"
                            :fileUrls="ruleForm.cheliangWeizhangVideo?$base.url+ruleForm.cheliangWeizhangVideo:''"
                            @change="cheliangWeizhangVideoUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.cheliangWeizhangVideo" label="违章视频" prop="cheliangWeizhangVideo">
                            <video :src="$base.url+ruleForm.cheliangWeizhangVideo" width="100" height="100" controls="controls">
                            </video>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="车辆违章类型" prop="cheliangWeizhangTypes">
                        <el-select v-model="ruleForm.cheliangWeizhangTypes" :disabled="ro.cheliangWeizhangTypes" placeholder="请选择车辆违章类型">
                            <el-option
                                v-for="(item,index) in cheliangWeizhangTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="车辆违章类型" prop="cheliangWeizhangValue">
                        <el-input v-model="ruleForm.cheliangWeizhangValue"
                            placeholder="车辆违章类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info' && !ro.cheliangWeizhangContent"  label="违章缘由" prop="cheliangWeizhangContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.cheliangWeizhangContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.cheliangWeizhangContent" label="违章缘由" prop="cheliangWeizhangContent">
                            <span v-html="ruleForm.cheliangWeizhangContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item v-if="type!='info' && !ro.weizhangTime"  class="input" label="违章时间" prop="weizhangTime">
                        <el-date-picker
                                value-format="yyyy-MM-dd HH:mm:ss"
                                v-model="ruleForm.weizhangTime"
                                type="datetime"
                                placeholder="违章时间"
                                :disabled="ro.weizhangTime">
                        </el-date-picker>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.weizhangTime" label="违章时间" prop="weizhangTime">
                            <span v-html="ruleForm.weizhangTime"></span>
                        </el-form-item>
                    </div>
                </el-col>

                <el-col :span="12">
<!--                    <el-form-item class="select" v-if="type!='info'"  label="违章状态" prop="cheliangWeizhangZhuangtaiTypes">
                        <el-select v-model="ruleForm.cheliangWeizhangZhuangtaiTypes" :disabled="ro.cheliangWeizhangZhuangtaiTypes" placeholder="请选择违章状态">
                            <el-option
                                v-for="(item,index) in cheliangWeizhangZhuangtaiTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>-->
                    <div v-if="type=='info'">
                        <el-form-item class="input" label="违章状态" prop="cheliangWeizhangZhuangtaiValue">
                        <el-input v-model="ruleForm.cheliangWeizhangZhuangtaiValue"
                            placeholder="违章状态" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
<!--                    <el-form-item v-if="type!='info' && !ro.cheliangWeizhangShensuContent"  label="申诉理由" prop="cheliangWeizhangShensuContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.cheliangWeizhangShensuContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>-->
                    <div v-if="type=='info'">
                        <el-form-item v-if="ruleForm.cheliangWeizhangShensuContent" label="申诉理由" prop="cheliangWeizhangShensuContent">
                            <span v-html="ruleForm.cheliangWeizhangShensuContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
            <el-col :span="12" v-if="type=='info'">
                <div>
                    <el-form-item v-if="ruleForm.cheliangWeizhangYesnoTypes" label="申诉状态" prop="cheliangWeizhangYesnoTypes">
                        <el-input v-model="ruleForm.cheliangWeizhangYesnoValue" placeholder="申诉状态" readonly></el-input>
                    </el-form-item>
                </div>
            </el-col>
            <el-col :span="12" v-if="type=='info'">
                <div>
                    <el-form-item v-if="ruleForm.cheliangWeizhangYesnoText" label="申诉回复" prop="cheliangWeizhangYesnoText">
                        <span v-html="ruleForm.cheliangWeizhangYesnoText"></span>
                    </el-form-item>
                </div>
            </el-col>
            <el-col :span="12" v-if="type=='info'">
                <div>
                    <el-form-item v-if="ruleForm.cheliangWeizhangShenheTime" label="回复时间" prop="cheliangWeizhangShenheTime">
                        <span v-html="ruleForm.cheliangWeizhangShenheTime"></span>
                    </el-form-item>
                </div>
            </el-col>
            </el-row>
            <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
                <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
                <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import styleJs from "../../../utils/style.js";
    // 数字，邮件，手机，url，身份证校验
    import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
    import utilsJs, {getYearFormat,getMonthFormat,getDateFormat,getDatetimeFormat} from "../../../utils/utils.js";
    export default {
        data() {
            return {
                addEditForm:null,
                id: '',
                type: '',
                sessionTable : "",//登录账户所在表名
                role : "",//权限
                userId:"",//当前登录人的id
                cheliangForm: {},
                yonghuForm: {},
                ro:{
                    cheliangId: false,
                    yonghuId: false,
                    cheliangWeizhangUuidNumber: false,
                    cheliangWeizhangName: false,
                    cheliangWeizhangPhoto: false,
                    cheliangWeizhangVideo: false,
                    cheliangWeizhangTypes: false,
                    cheliangWeizhangContent: false,
                    weizhangTime: false,
                    cheliangWeizhangZhuangtaiTypes: false,
                    cheliangWeizhangShensuContent: false,
                    cheliangWeizhangYesnoTypes: false,
                    cheliangWeizhangYesnoText: false,
                    cheliangWeizhangShenheTime: false,
                    insertTime: false,
                },
                ruleForm: {
                    cheliangId: '',
                    yonghuId: '',
                    cheliangWeizhangUuidNumber: new Date().getTime(),
                    cheliangWeizhangName: '',
                    cheliangWeizhangPhoto: '',
                    cheliangWeizhangVideo: '',
                    cheliangWeizhangTypes: '',
                    cheliangWeizhangContent: '',
                    weizhangTime: '',
                    cheliangWeizhangZhuangtaiTypes: '',
                    cheliangWeizhangShensuContent: '',
                    cheliangWeizhangYesnoTypes: '',
                    cheliangWeizhangYesnoText: '',
                    cheliangWeizhangShenheTime: '',
                    insertTime: '',
                },
                cheliangWeizhangTypesOptions : [],
                cheliangWeizhangZhuangtaiTypesOptions : [],
                cheliangWeizhangYesnoTypesOptions : [],
                cheliangOptions : [],
                yonghuOptions : [],
                rules: {
                   cheliangId: [
                              { required: true, message: '车辆不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   yonghuId: [
                              { required: true, message: '用户不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   cheliangWeizhangUuidNumber: [
                              { required: true, message: '车辆违章编号不能为空', trigger: 'blur' },
                          ],
                   cheliangWeizhangName: [
                              { required: true, message: '违章标题不能为空', trigger: 'blur' },
                          ],
                   cheliangWeizhangPhoto: [
                              { required: true, message: '违章照片不能为空', trigger: 'blur' },
                          ],
                   cheliangWeizhangVideo: [
                              { required: true, message: '违章视频不能为空', trigger: 'blur' },
                          ],
                   cheliangWeizhangTypes: [
                              { required: true, message: '车辆违章类型不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   cheliangWeizhangContent: [
                              { required: true, message: '违章缘由不能为空', trigger: 'blur' },
                          ],
                   weizhangTime: [
                              { required: true, message: '违章时间不能为空', trigger: 'blur' },
                          ],
                   cheliangWeizhangZhuangtaiTypes: [
                              { required: true, message: '违章状态不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   cheliangWeizhangShensuContent: [
                              { required: true, message: '申诉理由不能为空', trigger: 'blur' },
                          ],
                   cheliangWeizhangYesnoTypes: [
                              { required: true, message: '申诉状态不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   cheliangWeizhangYesnoText: [
                              { required: true, message: '申诉回复不能为空', trigger: 'blur' },
                          ],
                   cheliangWeizhangShenheTime: [
                              { required: true, message: '回复时间不能为空', trigger: 'blur' },
                          ],
                   insertTime: [
                              { required: true, message: '录入时间不能为空', trigger: 'blur' },
                          ],
                }
            };
        },
        props: ["parent"],
        computed: {
        },
        created() {
            //获取当前登录用户的信息
            this.sessionTable = this.$storage.get("sessionTable");
            this.role = this.$storage.get("role");
            this.userId = this.$storage.get("userId");


            if (this.role != "管理员"){
            }
            this.addEditForm = styleJs.addStyle();
            this.addEditStyleChange()
            this.addEditUploadStyleChange()
            //获取下拉框信息
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=cheliang_weizhang_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.cheliangWeizhangTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=cheliang_weizhang_zhuangtai_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.cheliangWeizhangZhuangtaiTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=cheliang_weizhang_yesno_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.cheliangWeizhangYesnoTypesOptions = data.data.list;
                    }
                });

         this.$http({
             url: `cheliang/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.cheliangOptions = data.data.list;
            }
         });
         this.$http({
             url: `yonghu/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.yonghuOptions = data.data.list;
            }
         });

        },
        mounted() {
        },
        methods: {
            // 下载
            download(file){
                window.open(`${file}`)
            },
            // 初始化
            init(id,type) {
                if (id) {
                    this.id = id;
                    this.type = type;
                }
                if(this.type=='info'||this.type=='else'){
                    this.info(id);
                }
                // 获取用户信息
                this.$http({
                    url:`${this.$storage.get("sessionTable")}/session`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        var json = data.data;
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            cheliangChange(id){
                this.$http({
                    url: `cheliang/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.cheliangForm = data.data;
                    }
                });
            },
            yonghuChange(id){
                this.$http({
                    url: `yonghu/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.yonghuForm = data.data;
                    }
                });
            },
            // 多级联动参数
            info(id) {
                let _this =this;
                _this.$http({
                    url: `cheliangWeizhang/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        _this.ruleForm = data.data;
                        _this.cheliangChange(data.data.cheliangId)
                        _this.yonghuChange(data.data.yonghuId)
                        _this.ruleForm.cheliangWeizhangContent = _this.ruleForm.cheliangWeizhangContent.replaceAll("src=\"upload/","src=\""+this.$base.url+"upload/");
                        _this.ruleForm.cheliangWeizhangShensuContent = _this.ruleForm.cheliangWeizhangShensuContent.replaceAll("src=\"upload/","src=\""+this.$base.url+"upload/");
                    } else {
                        _this.$message.error(data.msg);
                    }
                });
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                    if (valid) {
                        this.ruleForm.cheliangWeizhangContent = this.ruleForm.cheliangWeizhangContent.replaceAll(this.$base.url,"");
                        this.ruleForm.cheliangWeizhangShensuContent = this.ruleForm.cheliangWeizhangShensuContent.replaceAll(this.$base.url,"");
                        this.$http({
                            url:`cheliangWeizhang/${!this.ruleForm.id ? "save" : "update"}`,
                            method: "post",
                            data: this.ruleForm
                        }).then(({ data }) => {
                            if (data && data.code === 0) {
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    duration: 1500,
                                    onClose: () => {
                                        this.parent.showFlag = true;
                                        this.parent.addOrUpdateFlag = false;
                                        this.parent.cheliangWeizhangCrossAddOrUpdateFlag = false;
                                        this.parent.search();
                                        this.parent.contentStyleChange();
                                    }
                                });
                            } else {
                                this.$message.error(data.msg);
                            }
                        });
                    }
                });
            },
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            // 返回
            back() {
                this.parent.showFlag = true;
                this.parent.addOrUpdateFlag = false;
                this.parent.cheliangWeizhangCrossAddOrUpdateFlag = false;
                this.parent.contentStyleChange();
            },
            //图片
            cheliangWeizhangPhotoUploadChange(fileUrls){
                this.ruleForm.cheliangWeizhangPhoto = fileUrls;
                this.addEditUploadStyleChange()
            },
            cheliangWeizhangVideoUploadChange(fileUrls){
                this.ruleForm.cheliangWeizhangVideo = fileUrls;
                this.addEditUploadStyleChange()
            },

            addEditStyleChange() {
                this.$nextTick(()=>{
                    // input
                    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputFontColor
                        el.style.fontSize = this.addEditForm.inputFontSize
                        el.style.borderWidth = this.addEditForm.inputBorderWidth
                        el.style.borderStyle = this.addEditForm.inputBorderStyle
                        el.style.borderColor = this.addEditForm.inputBorderColor
                        el.style.borderRadius = this.addEditForm.inputBorderRadius
                        el.style.backgroundColor = this.addEditForm.inputBgColor
                    })
                    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputLableColor
                        el.style.fontSize = this.addEditForm.inputLableFontSize
                    })
                    // select
                    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectFontColor
                        el.style.fontSize = this.addEditForm.selectFontSize
                        el.style.borderWidth = this.addEditForm.selectBorderWidth
                        el.style.borderStyle = this.addEditForm.selectBorderStyle
                        el.style.borderColor = this.addEditForm.selectBorderColor
                        el.style.borderRadius = this.addEditForm.selectBorderRadius
                        el.style.backgroundColor = this.addEditForm.selectBgColor
                    })
                    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectLableColor
                        el.style.fontSize = this.addEditForm.selectLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
                        el.style.color = this.addEditForm.selectIconFontColor
                        el.style.fontSize = this.addEditForm.selectIconFontSize
                    })
                    // date
                    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateFontColor
                        el.style.fontSize = this.addEditForm.dateFontSize
                        el.style.borderWidth = this.addEditForm.dateBorderWidth
                        el.style.borderStyle = this.addEditForm.dateBorderStyle
                        el.style.borderColor = this.addEditForm.dateBorderColor
                        el.style.borderRadius = this.addEditForm.dateBorderRadius
                        el.style.backgroundColor = this.addEditForm.dateBgColor
                    })
                    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateLableColor
                        el.style.fontSize = this.addEditForm.dateLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
                        el.style.color = this.addEditForm.dateIconFontColor
                        el.style.fontSize = this.addEditForm.dateIconFontSize
                        el.style.lineHeight = this.addEditForm.dateHeight
                    })
                    // upload
                    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
                    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.uploadHeight
                        el.style.color = this.addEditForm.uploadLableColor
                        el.style.fontSize = this.addEditForm.uploadLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
                        el.style.color = this.addEditForm.uploadIconFontColor
                        el.style.fontSize = this.addEditForm.uploadIconFontSize
                        el.style.lineHeight = iconLineHeight
                        el.style.display = 'block'
                    })
                    // 多文本输入框
                    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
                        el.style.height = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaFontColor
                        el.style.fontSize = this.addEditForm.textareaFontSize
                        el.style.borderWidth = this.addEditForm.textareaBorderWidth
                        el.style.borderStyle = this.addEditForm.textareaBorderStyle
                        el.style.borderColor = this.addEditForm.textareaBorderColor
                        el.style.borderRadius = this.addEditForm.textareaBorderRadius
                        el.style.backgroundColor = this.addEditForm.textareaBgColor
                    })
                    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
                        // el.style.lineHeight = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaLableColor
                        el.style.fontSize = this.addEditForm.textareaLableFontSize
                    })
                    // 保存
                    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
                        el.style.width = this.addEditForm.btnSaveWidth
                        el.style.height = this.addEditForm.btnSaveHeight
                        el.style.color = this.addEditForm.btnSaveFontColor
                        el.style.fontSize = this.addEditForm.btnSaveFontSize
                        el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
                        el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
                        el.style.borderColor = this.addEditForm.btnSaveBorderColor
                        el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnSaveBgColor
                    })
                    // 返回
                    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
                        el.style.width = this.addEditForm.btnCancelWidth
                        el.style.height = this.addEditForm.btnCancelHeight
                        el.style.color = this.addEditForm.btnCancelFontColor
                        el.style.fontSize = this.addEditForm.btnCancelFontSize
                        el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
                        el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
                        el.style.borderColor = this.addEditForm.btnCancelBorderColor
                        el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnCancelBgColor
                    })
                })
            },
            addEditUploadStyleChange() {
                this.$nextTick(()=>{
                    document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                })
            },
        }
    };
</script>
<style lang="scss">
.editor{
  height: 500px;

  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
	background-color: transparent;
}
.btn .el-button {
  padding: 0;
}</style>

