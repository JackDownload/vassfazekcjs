<template>
  <v-layout>
    <v-flex text-xs-left>
       <v-btn color="primary" flat nuxt to="/">Back</v-btn>
            <li v-for="(blog,index) of blogs" :key="index">
        <n-link :to="`/blog/${blog.slug}`">{{ blog.title }} </n-link>
      </li>
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
      });
  }
};
        
</script>