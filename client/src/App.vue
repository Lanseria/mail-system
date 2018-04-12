<template>
  <div id="app">
    <el-input v-model="to" placeholder="to"></el-input>
    <el-input v-model="subject" placeholder="subject"></el-input>
    <el-input v-model="text" placeholder="text"></el-input>
    <el-input type="textarea" v-model="html" placeholder="html"></el-input>
    <el-button type="info" icon="el-icon-message" @click="sendEmail" style="display: block;width: 100%;" round>发送</el-button>
  </div>
</template>

<script>
import jsonp from './util';
import { baseUrl, options } from './config';
export default {
  name: 'App',
  data () {
    return {
      to: '',
      subject: '',
      text: '',
      html: ''
    };
  },
  methods: {
    sendEmail () {
      console.log('Send Msg');
      jsonp(baseUrl + '/common', {
        to: this.to,
        subject: this.subject,
        text: this.text,
        html: this.html
      }, options).then((res) => {
        console.log(res);
      });
    }
  }
};
</script>

<style>
</style>
