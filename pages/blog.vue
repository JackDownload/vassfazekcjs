<template>
  <v-layout>
    <v-flex text-xs-left>
      <div v-for="blog in blogs" :key="blog.slug">
        <h3>{{ blog.title }}</h3>
        <img alt="`${image}`"/>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";
import config from '../config/config';
export default {
  asyncData (context) {
    return axios.get(config.url + config.bucket_slug + '/object-type/blogs',{
            params: {
                read_key: config.read_key
            }
        })
      .then(res => {
        return {blog : res.data.objects}
      });W
  }
};
        
</script>