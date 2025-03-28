const base = {
    get() {
        return {
            url : "http://localhost:8080/cheliangweizhang/",
            name: "cheliangweizhang",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/cheliangweizhang/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "车辆违章信息管理系统"
        } 
    }
}
export default base
