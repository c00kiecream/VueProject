<template>
    <!-- eslint-disable-next-line -->
    <!-- eslint-disable -->
    <div>{{ userList.email }}</div>
    <div>{{ userList.nickname }}</div>
    <div>{{ userList.phone }}</div>
</template>
<script>
// eslint-disable-next-line
    /* eslint-disable */
export default {
    data() {
            return {
               userList: []	
            }
        },
    created () {
    this.userId = this.$route.query.user_id
    this.getUserList()
        },
    methods: {
        async getUserList () {
          let userList = await this.$api('/api/userList', { param: [this.userId] })
          if(userList.length > 0 ) {
            this.userList = userList[0];
          }
          console.log('this.userList',this.userList)
        },
    }
}
</script>